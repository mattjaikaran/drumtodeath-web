import { exercises } from '../../../data'

export default function handler({ query: { id }}, res) {
  const filtered = exercises.filter(exercise => exercise.id === id)

  if(filtered.length) return res.status(200).json(filtered[0])
  
  return res.status(404).json({ message: `Exercise with the ID ${id} not found` })
}