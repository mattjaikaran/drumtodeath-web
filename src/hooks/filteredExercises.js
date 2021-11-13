import { exercises } from '../exercises'

export const filteredExercises = (type) =>  exercises.filter(({ tags }) => tags.includes(type))

export const getExerciseById = (id) => exercises.filter((exercise) => {
  console.log('exercise', exercise)
  return exercise.id === id
})