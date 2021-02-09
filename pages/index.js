import { server } from '../config'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import fetch from 'isomorphic-unfetch'
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
  const res = await fetch(`${server}/api/exercises`)
  const exercises = await res.json()
  return {
    props: {
      exercises
    }
  }
}