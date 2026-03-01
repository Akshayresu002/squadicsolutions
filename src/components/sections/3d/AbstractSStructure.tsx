'use client';

import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, Edges, Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';

export default function AbstractSStructure() {
    const groupRef = useRef<THREE.Group>(null);
    const { pointer } = useThree();

    // Core Material definitions
    const glassMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
        color: '#0A192F',
        metalness: 0.9,
        roughness: 0.1,
        transparent: true,
        opacity: 0.8,
        transmission: 0.9,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
    }), []);

    // Abstract S Shape Coordinates (roughly forming an S)
    const nodes = useMemo(() => [
        [-2, 3, 0],   // Top Left
        [2, 3, 0],    // Top Right
        [2, 1, 0],    // Right Upper
        [-2, 0, 0],   // Center Left
        [2, -1, 0],   // Center Right
        [-2, -3, 0],  // Bottom Left
        [2, -3, 0],   // Bottom Right
    ], []);

    // Create a smooth curve through the nodes for the main connecting line
    const points = useMemo(() => nodes.map(n => new THREE.Vector3(...n)), [nodes]);
    const curve = useMemo(() => new THREE.CatmullRomCurve3(points, false, 'catmullrom', 0.5), [points]);
    const linePoints = useMemo(() => curve.getPoints(100), [curve]);

    useFrame((state) => {
        if (!groupRef.current) return;

        // Slow continuous rotation
        groupRef.current.rotation.y += 0.002;
        groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;

        // Cursor Tilt Interaction (Subtle 3D rotation toward cursor)
        const targetRotationX = (pointer.y * Math.PI) / 8;
        const targetRotationY = (pointer.x * Math.PI) / 8;

        groupRef.current.rotation.x += (targetRotationX - groupRef.current.rotation.x) * 0.05;
        // Don't fully overwrite the automatic Y rotation, just offset it
        groupRef.current.rotation.z += (-targetRotationY - groupRef.current.rotation.z) * 0.05;

        // 12-Second Energy Pulse Effect
        const time = state.clock.elapsedTime;
        const cycle = time % 12; // 12 second loop

        if (cycle < 2) {
            // Pulse active - sweep from top to bottom (y: 4 to -4)
            const pulseY = 4 - (cycle / 2) * 8;

            // Iterate over children to apply glow if they intersect with pulse
            groupRef.current.children.forEach((child) => {
                if (child.type === 'Mesh' && child.position.y > pulseY - 1 && child.position.y < pulseY + 1) {
                    if ((child as THREE.Mesh).material && 'emissiveIntensity' in ((child as THREE.Mesh).material as THREE.MeshStandardMaterial)) {
                        ((child as THREE.Mesh).material as THREE.MeshStandardMaterial).emissiveIntensity = 4;
                    }
                } else if (child.type === 'Mesh' && (child as THREE.Mesh).material && 'emissiveIntensity' in ((child as THREE.Mesh).material as THREE.MeshStandardMaterial)) {
                    // Decay back to normal
                    const mat = ((child as THREE.Mesh).material as THREE.MeshStandardMaterial);
                    mat.emissiveIntensity = THREE.MathUtils.lerp(
                        mat.emissiveIntensity,
                        1,
                        0.1
                    );
                }
            });
        }
    });

    // Pre-calculate randomized values for the floating fragments to avoid "impure function in render" errors
    const floatingFragments = useMemo(() => Array.from({ length: 6 }).map((_, i) => ({
        id: `frag-${i}`,
        position: [
            (Math.random() - 0.5) * 6,
            (Math.random() - 0.5) * 6,
            (Math.random() - 0.5) * 4
        ] as [number, number, number],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number],
        scale: Math.random() * 0.5 + 0.2,
        isWireframe: i % 2 === 0
    })), []);

    // Pre-calculate randomized Z-offsets for structural panels
    const nodeZOffsets = useMemo(() => nodes.map(() => (Math.random() - 0.5) * 1.5), [nodes]);

    return (
        <group ref={groupRef}>
            <Float
                speed={2}
                rotationIntensity={0.5}
                floatIntensity={2}
                floatingRange={[-0.5, 0.5]}
            >
                {/* Connecting Energy Line */}
                <Line
                    points={linePoints}
                    color="#2563EB"
                    lineWidth={3}
                    transparent
                    opacity={0.6}
                />

                {/* Main Geometric Panels forming the S */}
                {nodes.map((pos, i) => (
                    <group key={`node-${i}`} position={new THREE.Vector3(...pos)}>
                        {/* Glowing Node Core */}
                        <Sphere args={[0.15, 16, 16]}>
                            <meshStandardMaterial
                                color={i % 2 === 0 ? "#06B6D4" : "#7C3AED"}
                                emissive={i % 2 === 0 ? "#06B6D4" : "#7C3AED"}
                                emissiveIntensity={2}
                                toneMapped={false}
                            />
                        </Sphere>

                        {/* Floating Structural Panel */}
                        <mesh position={[0, 0, nodeZOffsets[i]]}>
                            <boxGeometry args={[1.5, 0.8, 0.1]} />
                            <primitive object={glassMaterial} attach="material" />
                            {/* Thin neon edge outline */}
                            <Edges
                                linewidth={2}
                                threshold={15}
                                color="#2563EB"
                            />
                        </mesh>
                    </group>
                ))}

                {/* Additional floating architectural fragments to add depth */}
                {floatingFragments.map((frag) => (
                    <mesh
                        key={frag.id}
                        position={frag.position}
                        rotation={frag.rotation}
                        scale={frag.scale}
                    >
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial
                            color="#0A192F"
                            transparent
                            opacity={0.3}
                            wireframe={frag.isWireframe}
                        />
                        {!frag.isWireframe && <Edges linewidth={1} color="#06B6D4" />}
                    </mesh>
                ))}
            </Float>
        </group>
    );
}
