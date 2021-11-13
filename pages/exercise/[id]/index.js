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
  function beep() {
    // var snd = new Audio(
    //   "data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU="
    // )
    if (!isPlaying) {
      snd.play()
    }

    if (isPlaying) {
      snd.pause()
    }
  }

  const noteDurationToMs = (bpm, dur, type) => {
    return (60000 * 4 * dur * type) / bpm
  }

  const scheduleNote = (ac, time, dur) => {
    var osc = ac.createOscillator()
    osc.connect(ac.destination)
    osc.start(time)
    osc.stop(time + dur)
  }

  const ac = new AudioContext()
  let lastNote = ac.currentTime
  const step = noteDurationToMs(120, 1 / 4, 1) / 1000
  const lookAhead = step / 2

  let btnId, timer = () => {
    const diff = ac.currentTime - lastNote
    if (diff >= lookAhead) {
      const nextNote = lastNote + step
      scheduleNote(ac, nextNote, 0.025)
      lastNote = nextNote
    }
  }


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
    ac.resume()
    btnId = setInterval(timer, 15)
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
        duration={exercise.length * 60}
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
          <Col lg={12} className="mb-5">
            {renderTimer()}
          </Col>
          <Col lg={12}>
            <Metronome />
            <Button onClick={() => setInterval(beep, 500)}>Beep</Button>
            {complete ? (
              <p>Completed!</p>
            ) : (
              <>
                {!start && <Button onClick={handleStart}>Start</Button>}
                {pause && <Button onClick={handleResume}>Resume</Button>}

                {!pause && start && (
                  <Button  disabled={pause} onClick={handlePause}>
                    Pause
                  </Button>
                )}
              </>
            )}
          </Col>
        </Row>
      </div>
    </ExerciseLayout>
  )
}

export const getStaticProps = async (context) => {
  try {
    const res = await fetch(`${server}/exercises/${context.params.id}`)
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
  const res = await fetch(`${server}/exercises`, {
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