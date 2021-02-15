import { server } from '../config'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import ExerciseList from '../components/ExerciseList'

export default function Home({ exercises }) {  
  return (
    <Layout>
      <h1>Welcome to Drum To Death</h1>
      <ExerciseList exercises={exercises.data} />      
    </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/exercises`, {
    method: "GET",
    headers: {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36", 
      Accept: "application/json; charset=UTF-8",
    },
  })
  const exercises = await res.json()
  return {
    props: {
      exercises
    }
  }
}