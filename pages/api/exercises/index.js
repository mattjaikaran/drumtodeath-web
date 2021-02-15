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

export default async function handler(req, res) {
  let error = ''
  try {
    await runMiddleware(req, res, cors)
    return await res.status(200).json({ data: exercises })
  } catch (err) {
    error = err.toString()
    return await res.status(400).json(error)
  }
}