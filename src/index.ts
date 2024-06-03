import express from 'express'

const app = express()
const PORT = 3000
const BASE_URL = process.env.BASE_URL || 'yaroslavsulaev.ru'

app.get('/', (_req, res) => {
  res.send('Hello world')
})

app.get('/mainPageBanner', (_req, res) => {
  res.send({
    id: '1',
    imageUrl: BASE_URL + '/movie_cover/inception.webp',
    title: 'Начало',
    description: 'An exciting psychological thriller where thieves close ranks to control dreams and break into the depths of the subconscious, creating illusions and solving mysteries.',
  })
})

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}...`)
})