import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";

function Avatar() {
  return (
    <Canvas camera={{ position: [2, 0, 12.25], fov: 15 }}>
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <Suspense fallback={null} r3f>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}

export default Avatar;
