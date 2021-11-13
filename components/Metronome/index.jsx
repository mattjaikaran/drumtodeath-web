import { useState } from 'react'
import { Form } from 'react-bootstrap'

const Metronome = () => {
  return (
    <div>
      <Form>
        {/* range as placeholder. used in free form exercise */}
        <Form.Control disabled value={200} max="250" type="range" />
      </Form>
    </div>
  )
}

export default Metronome