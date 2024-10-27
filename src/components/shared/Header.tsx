import React from 'react'
import { Input } from '../ui/input'
import { MenubarDemo } from './MenuBar'
import { useMoviesFilters } from '@/context/movieSotore'

export default function Header() {
const {search,setSearch}=useMoviesFilters()

const handleSearch=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setSearch(event?.target.value)
}

  return (
    <div className='w-full bg-bg_light1 h-[60px] fixed z-10 flex items-center justify-between p-4'>
      <h1 className='text-xl'> <span className='text-primary-color'>Mov.</span>time </h1>
      <MenubarDemo/>
         <Input type="email" placeholder="seach movie"  className='w-[200px] self-end outline-none border-none bg-bg_light2' onChange={handleSearch}/>
    </div>
  )
}
