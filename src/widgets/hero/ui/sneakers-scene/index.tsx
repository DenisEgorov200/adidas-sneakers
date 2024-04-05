import { useGLTF } from '@react-three/drei'

export const SneakersScene = () => {
  const { scene } = useGLTF('/models/sneaker/scene.gltf')

  return <primitive object={scene} rotation={[0, (3 * Math.PI) / 2, 0]} />
}
