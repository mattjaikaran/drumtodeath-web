const userSchema = {
  id: 1,
  email: 'kyleadams@gmail.com',
  password: 'asdf1234',
  firstName: 'Kyle',
  lastName: 'Adams',
  contact: {
    address: '123 Shit Drive',
    zip: 11211
  },
  exercises: [
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
}