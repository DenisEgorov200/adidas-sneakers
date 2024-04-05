import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface Props {
  isToggled: boolean
  setIsToggled: (isToggled: boolean) => void
}

export const Toggle = ({ isToggled, setIsToggled }: Props) => {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [sliderWidth, setSliderWidth] = useState<number | null>(null)

  useEffect(() => {
    if (sliderRef.current) {
      setSliderWidth(sliderRef.current.offsetWidth)
    }
  }, [])

  const handleToggle = () => {
    setIsToggled(!isToggled)
  }

  return (
    <motion.div
      ref={sliderRef}
      className="w-48 h-13 rounded-full flex items-center p-1 cursor-pointer"
      onClick={handleToggle}
      animate={{ background: isToggled ? '#000' : '#fff' }}>
      <motion.div
        className={clsx('w-11 h-11 rounded-full shadow-md', {
          'bg-white': isToggled,
          'bg-black': !isToggled,
        })}
        initial={{ x: '100%' }}
        animate={{
          x: isToggled && sliderWidth ? `${sliderWidth - 52}px` : 0,
        }}
      />
    </motion.div>
  )
}
