import { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Header from '../components/Header'
import Layout from '../components/Layout'
import PracticeCard from '../components/PracticeCard'
import styles from '../styles/Home.module.css'
import axios from 'axios'

export default function Home() {  
  return (
    <Layout>
      <h1>Welcome to Drum To Death</h1>
    </Layout>
  )
}
