import { Card, Col, Row } from 'react-bootstrap/'
import style from './PracticeCard.module.css'

const PracticeCard = ({ title, mins, bpm, timescompleted }) => {
  return (
    <Card className={style.practiceCard}>
      <Row>
        <Col className="pl-1" xs={6}>
          <h5 className="pt-2 pl-3 pr-2 font-weight-light">{title}</h5>
        </Col>
        <Col className="text-center" xs={6}>
          <div className={style.minsContainer}>
            <p className={style.mins}>
              {mins}
              <br/>
              mins
            </p>
          </div>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="pl-4" xs={6}>
          <p className="overpass">
            <small>{bpm} BPM</small>
          </p>
        </Col>
        {timescompleted && (
          <Col className="text-center" xs={6}>
          <div className="time">
            {timescompleted}x
          </div>
        </Col>
        )}
      </Row>
    </Card>
  )
}

export default PracticeCard