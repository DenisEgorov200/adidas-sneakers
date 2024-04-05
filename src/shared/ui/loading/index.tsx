import { useProgress } from '@react-three/drei'
import clsx from 'clsx'
import { useEffect } from 'react'

export const Loading = () => {
  const { progress } = useProgress()

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', progress < 100)
  }, [progress])

  return (
    <>
      {progress < 100 && (
        <div
          className={clsx(
            'fixed z-50 w-full h-full flex flex-col items-center justify-center text-3xl select-none overflow-hidden',
            {
              'bg-gray-200': progress < 100,
            },
          )}>
          <img src="/icons/loading.svg" alt="loading" />
          <h1>Loading...</h1>
        </div>
      )}
    </>
  )
}
