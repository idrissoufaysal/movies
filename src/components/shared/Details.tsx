import { Movie } from '@/lib/types';
import React from 'react'

export default function Details({
    close,
    dataItem,
}: {
    close:()=>void;
    dataItem: Movie;
}) {
    return (
        <div className='w-screen h-screen bg-[#00000036] fixed top-0 left-0 flex justify-center items-center z-10'>
            <div className='bg-bg_light2 w-1/2 flex relative rounded-lg'>
                <img src={dataItem.Poster} alt="" className='object-cover' />
                <div className='w-1/2  flex flex-col items-center'>
                    <h1 className='text-4xl font-bold px-10 py-5 text-primary-color'>
                        Movie Info
                    </h1>
                    <div className="flex p-10 gap-3 flex-col text-xl font-semibold">
                        <span> Title : <span className='font-normal text-base'>{dataItem.Title} </span> </span>
                        <span> year : <span className='font-normal text-base'>{dataItem.Year} </span> </span>
                        <span> movie type : <span className='font-normal text-base'>{dataItem.Type} </span> </span>

                        <img src='/close.svg' alt='close' onClick={close} className='absolute top-1 right-2 cursor-pointer size-8' />
                    </div>
                </div>
            </div>
        </div>
    )
}
