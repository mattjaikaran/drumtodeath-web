import ExerciseList from '../components/ExerciseList'
import { exercises } from '../exercises'
const Home = () => {  
  console.log(exercises)
  return (
    <div>
      <h1>Drum To Death Metronome App</h1>
      <ExerciseList exercises={exercises} />      
    </div>
  )
}

export default Home