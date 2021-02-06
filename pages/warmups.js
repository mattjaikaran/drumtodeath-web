import { forwardRef } from 'react'
import Link from 'next/link'
import { Row, Col } from 'react-bootstrap'
import Layout from '../components/Layout'
import PracticeCard from '../components/PracticeCard'
// import styles from '../styles/Home.module.css'

const PracticeCardComponent = forwardRef((props, ref) => (
  <a ref={ref} {...props}>
    <PracticeCard {...props} />
  </a>
))

const Warmups = () => {

  return (
    <Layout>
      {/* <Row>
        <Col className="mb-2" sm={6} lg={4}>
          <Link href={"/exercise?id=1&title=Quick Death"} passHref>
            <PracticeCardComponent
              id={1}
              title="Quick Death"
              mins={2}
              bpm={200} />
          </Link>
        </Col>
        <Col className="mb-2" sm={6} lg={4}>
          <Link href={"/exercise?id=2&title=Pre-show Ritual"} passHref>
            <PracticeCardComponent
              id={2}
              title="Pre-show Ritual"
              mins={10}
              bpm={175}
              timescompleted={4} />
          </Link>
        </Col>
        <Col className="mb-2" sm={6} lg={4}>
          <Link href={"/exercise?id=3&title=A Clean Fifteen"} passHref>
            <PracticeCardComponent
              id={3}  
              title="A Clean Fifteen"
              mins={15}
              bpm={120}
              timescompleted={5} />
          </Link>
        </Col>
        <Col className="mb-2" sm={6} lg={4}>
          <Link href={"/exercise?id=4&title=Quick and Thirty"} passHref>
            <PracticeCardComponent
              id={4}
              title="Quick &amp; Thirty"
              mins={30}
              bpm={140} />
          </Link>
        </Col>
      </Row> */}
    </Layout>
  )
}

export default Warmups