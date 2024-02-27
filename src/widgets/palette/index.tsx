import { motion } from 'framer-motion'
import { useState } from 'react'
import { Toggle } from '../../shared/ui/toggle'

export const Palette = () => {
  const [isToggled, setIsToggled] = useState(true)

  return (
    <div className="h-dvh">
      <div className="container mx-auto h-full flex flex-col items-center justify-center">
        <div className="max-w-96 flex flex-col text-center gap-4">
          <h3 className="text-4xl font-bold capitalize">Avaible in 2 colors</h3>
          <p className="text-secondary">
            If you love the classics, then you'll be psyched to know that one of out favorite adidas
            styles is back in a whole new way!
          </p>
        </div>
        <div className="flex justify-center items-center text-center gap-4">
          <motion.span
            className="text-xl font-bold capitalize"
            animate={{ opacity: isToggled ? '50%' : 1 }}>
            white
          </motion.span>
          <Toggle isToggled={isToggled} setIsToggled={setIsToggled} />
          <motion.span
            className="text-xl font-bold capitalize"
            animate={{ opacity: !isToggled ? '50%' : 1 }}>
            black
          </motion.span>
        </div>
      </div>
    </div>
  )
}
