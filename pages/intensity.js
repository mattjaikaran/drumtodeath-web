import { Row, Col } from 'react-bootstrap'
import Header from '../components/Header'
import Layout from '../components/Layout'
import PracticeCard from '../components/PracticeCard'
// import styles from '../styles/Home.module.css'

export default function Intensity() {
  return (
    <Layout>
      <Row>
        <Col className="mb-2" sm={6}>
          <PracticeCard
            title="Up, Up &amp; Away"
            mins={45}
            bpm="150 - 250" />
        </Col>
        <Col className="mb-2" sm={6}>
          <PracticeCard
            title="Forearm Burn"
            mins={15}
            bpm={190} />
        </Col>
        <Col className="mb-2" sm={6}>
          <PracticeCard
            title="Slow Death"
            mins={15}
            bpm={200}
            timesCompleted={4} />
        </Col>
        <Col className="mb-2" sm={6}>
          <PracticeCard
            title="Quick Death"
            mins={2}
            bpm={200}
            timesCompleted={4} />
        </Col>
      </Row>
    </Layout>
  )
}
