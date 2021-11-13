import ExerciseList from '../components/ExerciseList'

const Endurance = ({ filteredExercises }) => (
  <>
    <h2>Endurance</h2>
    <ExerciseList exercises={filteredExercises} />      
  </>
)

export default Endurance