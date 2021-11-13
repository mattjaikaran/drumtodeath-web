import PracticeCard from '../PracticeCard'
import { Row, Col } from 'react-bootstrap'

const ExerciseList = ({ exercises }) => {
  return (
    <div>
      <Row>
        {exercises.map(exercise => {
          if (exercises.length === 4 || exercises.length === 2) {
            return (
              <Col key={exercise.id} md={6} lg={6}>
                <PracticeCard exercise={exercise} />
              </Col>
            )
          }
          return (
            <Col key={exercise.id} md={6} lg={4}>
              <PracticeCard exercise={exercise} />
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default ExerciseList