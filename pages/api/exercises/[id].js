import { exercises } from '../../../data'
import Cors from 'cors'

const cors = Cors({
  methods: ['GET', 'POST', 'HEAD'],
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
  try {
    await runMiddleware(req, res, cors)
    const filtered = exercises.filter(exercise => exercise.id === id)
    if(filtered.length) return await res.status(200).json(filtered[0])
  } catch (err) {
    return await res.status(404).json({ message: `Exercise with the ID ${id} not found` }) 
  }
}