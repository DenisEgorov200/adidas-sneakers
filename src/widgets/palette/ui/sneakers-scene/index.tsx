import { useGLTF } from '@react-three/drei'
import { motion } from 'framer-motion-3d'
import { Suspense } from 'react'

export const SneakersScene = ({ isToggled }) => {
  const { scene } = useGLTF('/models/sneaker/scene.gltf')

  return (
    <Suspense fallback={null}>
      <motion.primitive
        object={scene}
        animate={{
          rotateY: isToggled ? (3 * Math.PI) / 2 : Math.PI / 2,
          rotateX: isToggled ? 0.1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 10,
        }}
        rotation={[0, (3 * Math.PI) / 2, 0]}
      />
    </Suspense>
  )
}
