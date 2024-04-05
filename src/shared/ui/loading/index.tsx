import { useProgress } from '@react-three/drei'

export const Loading = () => {
  const { progress } = useProgress()

  return <div className="text-3xl">{progress}</div>
}
