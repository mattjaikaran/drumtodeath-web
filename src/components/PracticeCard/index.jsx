import { Link } from 'react-router-dom'
import { Card, Col, Row, Badge } from 'react-bootstrap/'
import style from './PracticeCard.module.css'

const PracticeCard = ({ exercise }) => {
  const { id, title, timeLength, bpm, timesCompleted } = exercise
  
  return (
    <Link to={`/exercise/${id}`}>
      <Card className={style.practiceCard}>
        <Row>
          <Col className="pl-1" xs={6}>
            <h5 className="pt-2 pl-3 pr-2 font-weight-light">{title}</h5>
          </Col>
          <Col className="text-center" xs={6}>
            <div className={style.minsContainer}>
              <p className={style.mins}>
                {timeLength}
                <br />
                mins
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="pl-4" xs={6}>
            <p className="overpass">
              <small>
                {bpm} BPM
              </small>
            </p>
          </Col>
          {/* {timesCompleted > 0 && (
            <Col className="text-center" xs={6}>
              <div className="time">
                <Badge pill className="py-2 px-3" variant="info">
                  &#10003; {timesCompleted}x
                </Badge>
              </div>
            </Col>
          )} */}
        </Row>
      </Card>
    </Link>
  )
}

export default PracticeCard