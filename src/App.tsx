import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MovieFilter } from './context/movieSotore'


const queryClient = new QueryClient()

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ])



  return (
    <QueryClientProvider client={queryClient}>
      <MovieFilter>
        <div className="bg-bg_color text-text-color h-full dark">
          < RouterProvider router={router} />
        </div>
      </MovieFilter>
    </QueryClientProvider>
  )
}
