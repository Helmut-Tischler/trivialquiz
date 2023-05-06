import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Settings from './pages/Settings'
import Questions from './pages/Questions'
import FinalScreen from './pages/FinalScreen'
import { Container, Box, Typography } from '@mui/material'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Settings />
  },
  {
    path: '/questions',
    element: <Questions />
  },
  {
    path: '/score',
    element: <FinalScreen />
  },

])

function App() {
  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mt={5}>
        <Typography variant="h1">Trivial Quiz</Typography>
        <RouterProvider router={router} />
      </Box>
    </Container>
  )
}

export default App;
