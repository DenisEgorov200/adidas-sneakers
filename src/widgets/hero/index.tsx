import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Button } from '../../shared/ui/button'
import { SneakersScene } from './ui/sneakers-scene'

export const Hero = () => {
  return (
    <div className="h-dvh relative">
      <div className="container mx-auto h-full flex flex-col items-center justify-center">
        <h2 className="absolute top-24 text-9xl font-bold capitalize">stan smith</h2>
        <Canvas className="absolute top-0">
          <Stage>
            <SneakersScene />
          </Stage>
          <OrbitControls
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            enableZoom={false}
            enablePan={false}
          />
        </Canvas>
        <div className="absolute bottom-5 max-w-96 flex flex-col justify-center items-center text-center gap-4">
          <h3 className="text-4xl font-bold capitalize">Adidas Original Stan Smith Winter 2022</h3>
          <p className="text-secondary">
            Featuring Reflective Holograpgic Colors inspired by the classic Spline logo
          </p>
          <div className="flex items-center gap-3">
            <Button>use template</Button>
            <Button>learn more</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
