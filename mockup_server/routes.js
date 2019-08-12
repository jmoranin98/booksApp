const router = require('express').Router();

const bookModel = require('./models/booksModel');
const catgoryModel = require('./models/categoryModel');

router.get('/books', async (_, res) => {
    try {
        const books = await bookModel.find({});
        res.send({books});
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/category', async (_, res) => {
    try {
        const categories = await catgoryModel.find({});
        res.send({categories});
    } catch (error) {
        res.status(500).end();
    }
});

router.post('/books', async (req, res, next) => {
    try {
        const { book } = req.body;
        if (!book) res.status(400).end();
        else {
            const bookFormated = new bookModel(book);
            const response = await bookFormated.save();
            res.send({ message: 'Created succesfully', resource: response });
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/books/:id', async (req, res, next) => {
    try {
        const { id } = req.query;
        if (!id) res.status(400).end();
        const book = await bookModel.findOne({ _id: id })
        if (!book) res.status(404).end();
        res.send(book);
    } catch (error) {
        res.status(500).end();
    }
});

module.exports = router;