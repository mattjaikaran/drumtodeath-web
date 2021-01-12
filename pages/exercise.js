import { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import { Row, Col, Button } from 'react-bootstrap'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import Countdown from 'react-countdown'

const Exercise = (props) => {
  const [pause, setPause] = useState(true)
  const [completed, setComplete] = useState(false)
  const handlePause = () => setPause(!pause)
  const router = useRouter()
  
  const renderTimer = () => {
    return (
      <CountdownCircleTimer
        isPlaying
        duration={20}
        colors={[
          ['#004777', 0.33],
          ['#F7B801', 0.33],
          ['#A30000', 0.33],
        ]}>
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    )
  }

  const startExerciseCountdown = () => {
    return (
      <Countdown date={Date.now() + 4000}>
        <div className="text-center">
          {renderTimer()}
        </div>
      </Countdown>
    )
  }
  return (
    <Layout>      
      <div className="text-center">
        <p className="overpass">
          <small>{router.query.title}</small>
        </p>
        <h5>175 BPM</h5>
        <div>
          {startExerciseCountdown()}
        </div>
        <Button onClick={handlePause}>
          {pause ? 'Resume' : 'Pause'}
        </Button>
      </div>
    </Layout>
  )
}

export default Exercise