/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/sneaker/scene.gltf --t 
Author: Mario Rocha (https://sketchfab.com/Mario_r_o_c_h_a)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/day-21-adidas-stan-smith-86e68bc3f04c4b72b2ef0bb6369e3b66
Title: DAY 21 | ADIDAS STAN SMITH
*/

import { useGLTF } from '@react-three/drei'
import { motion } from 'framer-motion-3d'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

interface GLTFResult extends GLTF {
  nodes: {
    Object_4: THREE.Mesh
  }
  materials: {
    Material_0: THREE.MeshStandardMaterial
  }
}

interface Props {
  isToggled: boolean
}

export const SneakersScene = ({ isToggled }: Props) => {
  const { nodes, materials } = useGLTF('/models/sneaker/scene.gltf') as GLTFResult

  return (
    <motion.mesh
      geometry={nodes.Object_4.geometry}
      material={materials.Material_0}
      rotation={[0, (3 * Math.PI) / 2, Math.PI / 2]}
      animate={{
        rotateY: isToggled ? Math.PI / 2 : (3 * Math.PI) / 2,
      }}
      transition={{
        type: 'spring',
        duration: 2000,
        stiffness: 100,
        damping: 10,
      }}>
      <meshStandardMaterial color={isToggled ? '#000' : '#fff'} />
    </motion.mesh>
  )
}
