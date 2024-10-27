import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


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

      <div className="bg-bg_color text-text-color h-full">
      < RouterProvider router = { router } />
      </div>
    </QueryClientProvider>
  )
}
