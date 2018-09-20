const express = require('express')
const router = express.Router()
const Book = require('../../models/Book')
const User = require('../../models/User')

const config = require('../../config')
const upload = require('../../utils/upload')

router.post('/add', (req, res) => {
    const { title, author, genre, language, extimatedReadingDays, availability, isbn } = req.body
    console.log(
        '!AUTHOR IS ' +
            author +
            ', TITLE IS ' +
            title +
            ', language is ' +
            language +
            ', length is ' +
            extimatedReadingDays
    )
    if (!title || !author || !language || !extimatedReadingDays)
        res.status(400).send({ error: 'Missing information.' })

    Book.findOne({ isbn })
        .then(book => {
            if (book) return res.status(400).send({ error: 'book has been uploaded already.' + book })

            return req.files && req.files.picture ? upload(req.files.picture) : Promise.resolve()
        })
        .then(pictureUrl => {
            return new Book({
                title,
                author,
                genre,
                language,
                bookCover: pictureUrl,
                extimatedReadingDays,
                availability,
                isbn,
            }).save()
        })
        .then(book => {
            res.send(book)
        })
})
//should filter?
router.get('/all', (req, res) => {
    Book.find().then(books => {
        res.send(books)
    })
})

router.post('/add-to-bookshelf', (req, res) => {
    User.findByIdAndUpdate(req.user._id, { $push: { bookshelf: req.body.id } }, { new: true }).then(
        user => {
            res.send(user)
        }
    )
})

//does the borrow function go

module.exports = router
