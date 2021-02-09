import { server } from '../../../config'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import useSwr from 'swr'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import Countdown from 'react-countdown'
import Metronome from '../../../components/Metronome'
import ExerciseLayout from '../../../components/ExerciseLayout'

const Exercise = ({ exercise }) => {
  const router = useRouter()
  const { id } = router.query
  const [key, setKey] = useState(0)
  const [start, setStart] = useState(false)
  const [pause, setPause] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [complete, setComplete] = useState(false)
  console.log(exercise)

  const handlePause = (e) => {
    e.preventDefault()
    setIsPlaying(false)
    setPause(true)
  }
  const handleResume = (e) => {
    e.preventDefault()
    setIsPlaying(true)
    setPause(false)
  }
  const handleStart = (e) => {
    e.preventDefault()
    setStart(true)
    setIsPlaying(true)
  }
  
  const renderTimer = () => {
    const children = ({ remainingTime }) => {
      const minutes = Math.floor(remainingTime / 60)
      const seconds = remainingTime % 60
      return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
    }

    return (
      <CountdownCircleTimer
        className="circleTimer"
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
  return (
    <ExerciseLayout>
      <div className="text-center">
        <p className="overpass">
          <small>{exercise.title}</small>
        </p>
        <h5>{exercise.bpm} BPM</h5>
        <Link href="/">Go Back</Link>
        <Row className="text-center my-5">
          <Col lg={6} className="mb-5">
            {renderTimer()}
          </Col>
          <Col lg={6}>
            <Metronome />
          </Col>
        </Row>
        {complete ? 
          <p>Completed!</p> : (
          <>
            {!start && (
              <Button onClick={handleStart}>
                Start
              </Button>
            )}
            {pause &&
              <Button onClick={handleResume}>
                Resume
              </Button>
            }
            
            {!pause && start &&
              <Button disabled={pause} onClick={handlePause}>
                Pause
            </Button>
            }
          </>
        )}
      </div>
    </ExerciseLayout>
  )
}

export const getStaticProps = async (context) => {
  try {
    const res = await fetch(`${server}/api/exercises/${context.params.id}`)
    const exercise = await res.json()
    return {
      props: {
        exercise
      }
    }
  } catch (err) {
    console.log(err)
  }
}

export const getStaticPaths = async () => {
  const setUserAgent = dynamic(() => {
    return window.navigator.userAgent, { ssr: false }
  })
  const res = await fetch(`${server}/api/exercises`, {
    method: "GET",
    headers: {
      "User-Agent": setUserAgent,
      Accept: "application/json; charset=UTF-8"
    }
  })
  const exercises = await res.json()
  const ids = exercises.map(exercise => exercise.id)
  const paths = ids.map(id => ({ 
    params: { id: id.toString() } 
  }))

  return {
    paths,
    fallback: true
  }
}

export default Exercise