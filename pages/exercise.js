import { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import { Row, Col, Button } from 'react-bootstrap'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import Countdown from 'react-countdown'

const Exercise = (props) => {
  const router = useRouter()
  const [key, setKey] = useState(0)
  const [start, setStart] = useState(false)
  const [pause, setPause] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [complete, setComplete] = useState(false)
  const handlePause = () => {
    setIsPlaying(false)
    setPause(true)
  }
  const handleResume = () => {
    setIsPlaying(true)
    setPause(false)
  }
  
  const renderTimer = () => {
    const children = ({ remainingTime }) => {
      const minutes = Math.floor(remainingTime / 60)
      const seconds = remainingTime % 60
      return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
    }

    return (
      <CountdownCircleTimer
        className="w-100"
        isPlaying={isPlaying}
        key={key}
        size={295}
        duration={10}
        onComplete={() => setComplete(true)}
        colors={[
          ['#004777', 0.33],
          ['#F7B801', 0.33],
          ['#A30000', 0.33],
        ]}>
        {children}
      </CountdownCircleTimer>
    )
  }

  const handleStart = () => {
    setStart(true)
    setIsPlaying(true)
  }

  return (
    <Layout>      
      <div className="text-center">
        <p className="overpass">
          <small>{router.query.title}</small>
        </p>
        <h5>175 BPM</h5>
        <div className="my-5">
          {renderTimer()}
        </div>
        {complete ? 
          <p>Completed!</p> : (
          <>
            {!start && (
              <Button block onClick={handleStart}>
                Start
              </Button>
            )}
            {pause &&
              <Button block onClick={handleResume}>
                Resume
              </Button>
            }
            
            {!pause && start &&
              <Button block disabled={pause} onClick={handlePause}>
                Pause
            </Button>
            }
          </>
        )}
      </div>
    </Layout>
  )
}

export default Exercise