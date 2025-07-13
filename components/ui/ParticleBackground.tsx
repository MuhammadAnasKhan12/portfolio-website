import React from "react";
import Particles from "react-tsparticles";
import type { Engine, Container } from "tsparticles-engine";
import { loadFull } from "tsparticles";

interface ParticleBackgroundProps {
  className?: string;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  className,
}) => {
  
  const particlesLoaded = (container?: Container) => {};

  return (
      <>
          <div>asda</div>
      </>
  );
};

export default ParticleBackground;
