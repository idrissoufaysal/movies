import { Movie } from '@/lib/types';
import React from 'react';

export default function Details({
    close,
    dataItem,
}: {
    close: () => void;
    dataItem: Movie;
}) {
    return (
        <div className="w-screen h-screen bg-[#08020236] fixed top-0 left-0 flex justify-center items-center z-10">
            <div className="bg-bg_light2 w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 flex flex-col md:flex-row relative rounded-lg overflow-hidden max-h-[90vh]">
                <img src={dataItem.Poster} alt="" className="object-cover w-full md:w-1/2 max-h-[50vh] md:max-h-full" />
                <div className="w-full md:w-1/2 flex flex-col items-center p-5">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold px-2 py-3 text-primary-color text-center">
                        Movie Info
                    </h1>
                    <div className="flex flex-col p-5 gap-3 text-base md:text-lg font-semibold">
                        <span> Title: <span className="font-normal">{dataItem.Title}</span> </span>
                        <span> Year: <span className="font-normal">{dataItem.Year}</span> </span>
                        <span> Movie Type: <span className="font-normal">{dataItem.Type}</span> </span>
                    </div>

                    <img
                        src="/close.svg"
                        alt="close"
                        onClick={close}
                        className="absolute top-2 right-2 cursor-pointer w-8 h-8"
                    />
                </div>
            </div>
        </div>
    );
}
