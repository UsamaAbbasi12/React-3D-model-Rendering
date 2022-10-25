import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import FuturisticBuilding from './FuturisticBuilding';

const Futuristic = ()=>{
    return(
        <Canvas
         camera={{ position: [2, 0, 12.25], fov: 15 }}
         style={{
            width: '100vw',
            height: '100vh',
            border: '2px solid red'
         }}
      >
         <ambientLight intensity={1.25} />
         <ambientLight intensity={1.1} />
         <directionalLight intensity={0.4} />
         <Suspense fallback={null}>
            <FuturisticBuilding position={[0.025, -0.9, 1]} />
         </Suspense>
         <OrbitControls />
      </Canvas>
    )
}

export default Futuristic