import { Row, Col } from 'react-bootstrap'
import Header from '../components/Header'
import Layout from '../components/Layout'
import PracticeCard from '../components/PracticeCard'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Row>
        <Col className="mb-2" sm={6}>
          <PracticeCard
            title="Quick Death"
            mins={2}
            bpm={200} />
        </Col>
        <Col className="mb-2" sm={6}>
          <PracticeCard
            title="Pre-show Ritual"
            mins={10}
            bpm={175}
            timesCompleted={4} />
        </Col>
        <Col className="mb-2" sm={6}>
          <PracticeCard
            title="A Clean Fifteen"
            mins={15}
            bpm={120}
            timesCompleted={5} />
        </Col>
        <Col className="mb-2" sm={6}>
          <PracticeCard
            title="Quick &amp; Thirty"
            mins={30}
            bpm={140} />
        </Col>
      </Row>
    </Layout>
  )
}
