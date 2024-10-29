
import { Movie } from '@/lib/types'
import { useEffect, useState } from 'react'
import Details from './Details'

export default function MovieCard({ props }: { props: Movie }) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleClose = () => {
    setIsOpen(false)
    console.log(isOpen);
  }

  // Ferme le modal en appuyant sur la touche Échap
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className='h-[300px] w-[200px] rounded-lg relative mb-4 bg-bg_light2 cursor-pointer' onClick={() => setIsOpen(true)}>
      <img src={props.Poster} alt="" className='h-[80%] w-full rounded-lg' />
      <div className='flex items-center justify-between px-3 mt-2'>
        <span className='font-semibold truncate' >{props.Title} </span>
        <span className='p-1 bg-primary-color rounded-md text-white' >{props.Year} </span>
      </div>
      {
      isOpen &&
        <Details
          close={handleClose}
        />
        }
    </div>
  )
}
