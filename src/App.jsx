import './App.css';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import NotFound from './components/NotFound'
import Home from './routes/Home'
import Warmups from './routes/Warmups'
import Endurance from './routes/Endurance'
import Intensity from './routes/Intensity'
import ExercisePage from './routes/ExercisePage'
import Settings from './routes/Settings'
import { filteredExercises } from './hooks/filteredExercises'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="warmups"
            element={
              <Warmups filteredExercises={filteredExercises('warmups')} />
            }
          />
          <Route
            path="endurance"
            element={
              <Endurance filteredExercises={filteredExercises('endurance')} />
            }
          />
          <Route
            path="intensity"
            element={
              <Intensity filteredExercises={filteredExercises('intensity')} />
            }
          />
          {/* <Route
            path="settings"
            element={
              <Settings />
            }
          /> */}
          <Route path="exercise/:id" element={<ExercisePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
