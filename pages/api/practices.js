

const practiceOptions = [
  {
    id: 1,
    title: 'Quick Death',
    timeLength: 2,
    bpm: 200,
    timesCompleted: 0
  },
  {
    id: 2,
    title: 'Pre-show Ritual',
    timeLength: 10,
    bpm: 175,
    timesCompleted: 4
  },
  {
    id: 3,
    title: 'A Clean Fifteen',
    timeLength: 15,
    bpm: 120,
    timesCompleted: 5
  },
  {
    id: 4,
    title: 'Quick &amp; Thirty',
    timeLength: 10,
    bpm: 140,
    timesCompleted: 0
  },
]


export default (req, res) => {
  res.statusCode = 200
  res.json({ practiceOptions })
}
