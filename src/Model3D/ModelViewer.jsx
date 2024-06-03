import React, { Suspense } from "react";
import { Canvas,PerspectiveCamera  } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "./gltf";
import { AmbientLight, Camera } from "three";

const ModelViewer = ({ modelPath, scale = 40, position = [0, 0, 10] }) => {
  return (
    <Canvas shadows
    pixelRatio={window.devicePixelRatio}
    camera={{ position: [0, 0, 120], fov: 10 }}
    gl={{ antialias: true }}>
    <ambientLight intensity={1.5} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={5} />
    <pointLight position={[-10, -10, -10]} />
    <Suspense fallback={null}>
    <directionalLight
            position={[0, 5, 50]}
            intensity={1}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
    <mesh>
      <GltfModel modelPath={modelPath} scale={scale}  position={[0, -8, -10]}  />
    </mesh>
    </Suspense>
  </Canvas>
  );
};

export default ModelViewer;