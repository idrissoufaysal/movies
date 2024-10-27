import React from 'react'
import { Input } from '../ui/input'
import { useMoviesFilters } from '@/context/movieSotore'
import { YearSelect } from './YearSelect'

export default function Header() {
  const {search, setSearch} = useMoviesFilters()

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event?.target.value)
  }

  return (
    <div className='w-full bg-bg_light1 h-[60px] fixed z-10 flex items-center justify-between p-4'>
      <h1 className='text-xl'> <span className='text-primary-color'>Mov.</span>time </h1>

      <div className="flex items-center">
        <YearSelect/>
      <div className="relative w-[270px] flex gap-4 items-center">
        <Input
          type="text" // Changez le type en text
          placeholder="Search movie"
          className="w-full outline-none border-none bg-bg_light2 pl-3 pr-10" // Ajoutez du padding à droite pour l'icône
          onChange={handleSearch}
          value={search} // Liez la valeur de l'input à l'état de recherche
        />
        <img
          src="/search.svg"
          alt="Search"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
          //onClick={handleSearch} // Ajoutez la gestion de clic ici
        />
      </div>
      </div>
    </div>
  )
}
