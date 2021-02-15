import { server } from '../config'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import ExerciseList from '../components/ExerciseList'

export default function Home({ exercises }) {  
  return (
    <Layout>
      <h1>Welcome to Drum To Death</h1>
      <ExerciseList exercises={exercises} />      
    </Layout>
  )
}

export const getStaticProps = async () => {
  let userAgent = ''
  if (window !== undefined) {
    userAgent = window.navigator.userAgent
  }
  const res = await fetch(`${server}/api/exercises`, {
    method: "GET",
    headers: {
      "User-Agent": userAgent, 
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