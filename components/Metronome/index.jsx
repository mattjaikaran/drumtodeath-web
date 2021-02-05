import { useState } from 'react'
import { Form } from 'react-bootstrap'

const Metronome = () => {
  return (
    <div>
      <Form>
        {/* range as placeholder. used in free form exercise */}
        <Form.Control disabled type="range" />
        Metronome Settings here.
      </Form>
    </div>
  )
}

export default Metronome