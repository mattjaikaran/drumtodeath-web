import { exercises } from '../../../data'
import Cors from 'cors'

const cors = Cors({
  methods: ['GET', 'HEAD'],
})

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async function handler({ query: { id }}, res) {
  await runMiddleware(req, res, cors)
  const filtered = exercises.filter(exercise => exercise.id === id)

  if(filtered.length) return res.status(200).json(filtered[0])
  
  return res.status(404).json({ message: `Exercise with the ID ${id} not found` })
}