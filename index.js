import express from 'express'
import path from 'path'
const app = express()
const port = 3000

const __dirname = path.resolve()

app.get('/ping', (req, res) => {
  res.send('Hello World!')
})

const envmode = 'production'
if (envmode === 'production') {
    app.use(express.static(path.join(__dirname, '/dist')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
    })
} else {
    app.get('/', (req, res) => {
        res.send('Api is running now')
    })
}

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})