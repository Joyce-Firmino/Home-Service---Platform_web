import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router'
import { Home } from './pages/Home/index.tsx'
import { Login } from './pages/Login/index.tsx'
import { Category } from './pages/Category/index.tsx'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme.ts'
import { GlobalStyle } from './global.ts'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/category",
    element: <Category category='remover depois' />
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)