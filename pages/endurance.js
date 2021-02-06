import { server } from '../config'

import { Row, Col } from 'react-bootstrap'
import Header from '../components/Header'
import Layout from '../components/Layout'
import PracticeCard from '../components/PracticeCard'
import styles from '../styles/Home.module.css'

export default function Endurance({ exercises }) {
  console.log(exercises)
  const renderCards = () => {
    // return exercises.filter(e)
  }
  return (
    <Layout>
      <Row>
        {/* {renderCards()} */}
      </Row>
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

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/exercises`)
  const exercises = await res.json()
  const ids = exercises.map(exercise => exercise.id)
  const paths = ids.map(id => ({ 
    params: { id: id.toString() } 
  }))

  return {
    paths,
    fallback: false
  }
}