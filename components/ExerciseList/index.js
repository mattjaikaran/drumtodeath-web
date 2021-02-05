import PracticeCard from '../PracticeCard'
import { Row, Col } from 'react-bootstrap'

const ExerciseList = ({ exercises }) => {
  return (
    <div>
      <Row>
        {exercises.map(exercise => (
          <Col 
            key={exercise.id}
            md={6} lg={4}>
            <PracticeCard  
              exercise={exercise} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ExerciseList