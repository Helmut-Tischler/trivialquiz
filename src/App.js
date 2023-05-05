import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Settings from './pages/Settings'
import Questions from './pages/Questions'
import FinalScreen from './pages/FinalScreen'
import { Container, Box, Typography } from '@mui/material'
import { HashRouter } from 'react-router-dom/dist'

function App() {
  return (
    <HashRouter>
      <Router>
        <Container maxWidth="sm">
          <Box textAlign="center" mt={5}>
            <Typography variant="h1">Trivial Quiz</Typography>
            <Routes>
              <Route path="/trivialquiz" exact element={
                <><Settings /></>
              }
              />
              <Route path="/questions" element={
                <><Questions /></>
              }
              />
              <Route path="/score" element={
                <><FinalScreen /></>
              }
              />
            </Routes>
          </Box>
        </Container>
      </Router>
    </HashRouter>
  )
}

export default App;
