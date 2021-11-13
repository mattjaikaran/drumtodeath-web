import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import Countdown from 'react-countdown'
import Metronome from '../components/Metronome'
import NotFound from '../components/NotFound'
import { getExerciseById } from '../hooks/filteredExercises'

const ExercisePage = () => {
  let { id } = useParams()
  console.log("🚀 ~ file: exercisePage.jsx ~ line 18 ~ ExercisePage ~ id", id)
  const exercise = getExerciseById(id)
  console.log('exercisebyid', getExerciseById(id))
  console.log('🚀 ~ file: exercisePage.jsx ~ line 18 ~ ExercisePage ~ exercise', exercise)
  // const [key, setKey] = useState(0)
  // const [start, setStart] = useState(false)
  // const [pause, setPause] = useState(false)
  // const [isPlaying, setIsPlaying] = useState(false)
  // const [complete, setComplete] = useState(false)

  if (!id || !exercise) return <NotFound />

  return (
    <div>
      <Row>
        <Col>Exercise {exercise.title}</Col>
        <Col>Timer</Col>
      </Row>
    </div>
  )
}

export default ExercisePage
