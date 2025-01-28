const express = require('express')
const app = express()
const port = 8080
const database = require('./database')

app.set("view engine", "ejs");
//when using form submition we need to write this code below
app.use(express.urlencoded({ extends: true }))

app.get('/', (req, res) => res.render("index.ejs", { numberOfItterations: 10 }))

app.get('/notes', (req, res) => {
    let search = req?.query?.search
    const notes = database.getAll(search)
    res.render('notes.ejs', {
        notes
    })
})

app.get('/notes/:id', (req, res) => {
    const id = +req?.params?.id;
    const note = database?.getById(id)
    { !note && res.status(404).render('notfound.ejs') }

    res.render('detail.ejs', {
        note
    })
})

app.get('/createNotes', (req, res) => {
    res.status(200).render('createnote.ejs')
})

app.post('/create', (req, res) => {
    const totalData = database.getAll().length
    const data = {
        id: database.currentId,
        title: req?.body?.title,
        timestamp: Date.now(),
        contents: req?.body?.content
    }
    database.addData(data)
    database.currentId++

    res.redirect('/notes')
})

app.post('/delete/:id', (req, res) => {
    const id = +req.params.id
    database.deleteData(id)

    res.redirect('/notes')
})

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})