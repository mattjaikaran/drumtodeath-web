import { server } from '../config'
import Layout from '../components/Layout'
import ExerciseList from '../components/ExerciseList'


const Endurance = ({ filteredExercises }) => {
console.log(filteredExercises)
  return (
    <Layout>
      <h2>Endurance</h2>
      <ExerciseList exercises={filteredExercises} />      
    </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/exercises`)
  const exercises = await res.json()
  const filteredExercises = exercises.filter(e => e.id === '5' || e.id === '6')
  return {
    props: {
      filteredExercises
    }
  }
}

export default Endurance