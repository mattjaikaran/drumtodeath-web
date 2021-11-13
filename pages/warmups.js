import { server } from '../config'
import Layout from '../components/Layout'
import ExerciseList from '../components/ExerciseList'


const Warmups = ({ filteredExercises }) => {
  return (
    <Layout>
      <h2>Warmups</h2>
      <ExerciseList exercises={filteredExercises} />      
    </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/exercises`)
  const exercises = await res.json()
  const filteredExercises = exercises.filter(e => parseInt(e.id) < 5)
  return {
    props: {
      filteredExercises
    }
  }
}

export default Warmups