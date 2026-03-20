import React from 'react'
import { Canvas } from "@react-three/fiber"

const App = () => {
  return (
    <Canvas>
      <mesh>
        <boxGeometry />
        <meshBasicMaterial />
      </mesh>
    </Canvas>
  )
}

export default App
