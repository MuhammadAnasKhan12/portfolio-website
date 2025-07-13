"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { useState, useRef, Suspense } from "react";
import type { Points as PointsType } from "three";
const StarBackground = () => {
  const ref = useRef<PointsType | null>(null);
 const [sphere] = useState<Float32Array>(() =>
  random.inSphere(new Float32Array(3 * 2000), { radius: 1.2 }) as Float32Array
);




  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        stride={3}
        positions={sphere}
        frustumCulled
      >
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => (
  <div className="w-full h-screen fixed inset-0 -z-10 ">
    <Canvas camera={{ position: [0, 0, 1] }} style={{ background: "#030014" }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);
