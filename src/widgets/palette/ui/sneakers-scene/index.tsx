import { useGLTF } from '@react-three/drei'
import { motion } from 'framer-motion-3d'

interface Props {
  isToggled: boolean
}

export const SneakersScene = ({ isToggled }: Props) => {
  const { nodes, materials } = useGLTF('/models/sneaker/scene.gltf')

  console.log(nodes)

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
