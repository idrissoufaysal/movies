import Header from '@/components/shared/Header'
import React from 'react'

const Main = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <div className='flex flex-col gap-4'>
                <Header />
                <div className='flex justify-center items-center min-h-screen'>
                    {children}
                </div>
            </div>
        </main>
    )
}

export default Main
