import ExerciseList from '../components/ExerciseList'

const Warmups = ({ filteredExercises }) => (
  <>
    <h2>Warmups</h2>
    <ExerciseList exercises={filteredExercises} />      
  </>
)

export default Warmups