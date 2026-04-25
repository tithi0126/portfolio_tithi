import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere } from '@react-three/drei'

const BlobMesh = () => {
    const meshRef = useRef()

    useFrame((state) => {
        const { clock } = state
        if (meshRef.current) {
            meshRef.current.rotation.x = clock.getElapsedTime() * 0.2
            meshRef.current.rotation.y = clock.getElapsedTime() * 0.3
        }
    })

    return (
        <Sphere ref={meshRef} args={[1, 100, 100]} scale={1.5}>
            <MeshDistortMaterial
                color="#536878"
                attach="material"
                distort={0.4}
                speed={2}
                roughness={0.2}
                metalness={0.8}
            />
        </Sphere>
    )
}

const Blob = () => {
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-0 opacity-40 blur-3xl">
            <Canvas>
                <ambientLight intensity={1} />
                <directionalLight position={[2, 1, 1]} />
                <BlobMesh />
            </Canvas>
        </div>
    )
}

export default Blob
