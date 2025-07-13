// components/NetCanvas.tsx
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect, memo } from "react";
import * as THREE from "three";

const NetBackground = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const [positions, setPositions] = useState<Float32Array | null>(null);
  const [linePositions, setLinePositions] = useState<Float32Array | null>(null);
  const numPoints = 150;

  useEffect(() => {
    const posArray = new Float32Array(numPoints * 3);
    for (let i = 0; i < numPoints; i++) {
      posArray[i * 3 + 0] = THREE.MathUtils.randFloatSpread(2);
      posArray[i * 3 + 1] = THREE.MathUtils.randFloatSpread(2);
      posArray[i * 3 + 2] = THREE.MathUtils.randFloatSpread(2);
    }
    setPositions(posArray);

    const lines: number[] = [];
    for (let i = 0; i < numPoints; i++) {
      for (let j = i + 1; j < numPoints; j++) {
        const dx = posArray[i * 3] - posArray[j * 3];
        const dy = posArray[i * 3 + 1] - posArray[j * 3 + 1];
        const dz = posArray[i * 3 + 2] - posArray[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 0.3) {
          lines.push(
            posArray[i * 3],
            posArray[i * 3 + 1],
            posArray[i * 3 + 2],
            posArray[j * 3],
            posArray[j * 3 + 1],
            posArray[j * 3 + 2]
          );
        }
      }
    }
    setLinePositions(new Float32Array(lines));
  }, []);

  useFrame((_state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.1;
    }
    if (linesRef.current) {
      linesRef.current.rotation.y += delta * 0.1;
    }
  });

  if (!positions || !linePositions) return null;

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="white" size={0.01} />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#888" transparent opacity={0.5} />
      </lineSegments>
    </>
  );
};

export const NetCanvas = memo(() => {
  return (
    <div className="w-full h-screen fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 3] }}
        style={{ background: "#030014" }}
      >
        <NetBackground />
      </Canvas>
    </div>
  );
});
