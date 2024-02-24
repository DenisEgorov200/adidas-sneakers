import { useGLTF } from '@react-three/drei'
import { Suspense } from 'react'

export const SneakersScene = () => {
  const { scene } = useGLTF('/models/sneaker/scene.gltf')

  return (
    <Suspense fallback={null}>
      <primitive object={scene} rotation={[0, (3 * Math.PI) / 2, 0]} />
    </Suspense>
  )
}
