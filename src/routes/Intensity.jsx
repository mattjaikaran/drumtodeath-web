import ExerciseList from '../components/ExerciseList'

const Intensity = ({ filteredExercises }) => (
  <>
    <h2>Intensity</h2>
    <ExerciseList exercises={filteredExercises} />
  </>
)

export default Intensity
