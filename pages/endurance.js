import { Row, Col } from 'react-bootstrap'
import Header from '../components/Header'
import Layout from '../components/Layout'
import PracticeCard from '../components/PracticeCard'
import styles from '../styles/Home.module.css'

export default function Endurance() {
  return (
    <Layout>
      <Row>
        <Col className="mb-2" sm={6}>
          <PracticeCard
            title="Slow &amp; Steady"
            mins={30}
            bpm={135} />
        </Col>
        <Col className="mb-2" sm={6}>
          <PracticeCard
            title="60 for 60"
            mins={60}
            bpm={60}
            timesCompleted={2} />
        </Col>
      </Row>
    </Layout>
  )
}
