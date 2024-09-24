import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import './style.css'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { AuthManager } from './shared/managers/auth'
import { QueryClientProvider } from './app/provider/tanstack-query'
import { ToastContainer } from './shared/components/toast-container/toast-container'

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {
    auth: undefined!,
  },
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function App() {
  const auth = AuthManager
  return <RouterProvider router={router} context={{ auth }} />
}

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <QueryClientProvider>
        <App />
        <ToastContainer />
      </QueryClientProvider>
    </StrictMode>,
  )
}
