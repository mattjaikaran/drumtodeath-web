import { server } from '../config'
import Layout from '../components/Layout'
import ExerciseList from '../components/ExerciseList'


const Intensity = ({ filteredExercises }) => {
  return (
    <Layout>
      <h2>Intensity</h2>
      <ExerciseList exercises={filteredExercises} />      
    </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/exercises`)
  const exercises = await res.json()
  const filteredExercises = exercises.data.filter(e => parseInt(e.id) > 6 || parseInt(e.id) === 1)
  return {
    props: {
      filteredExercises
    }
  }
}

export default Intensity