const express = require ('express')
const router = express.Router()
const Book = require('../models/book.models')



/// Obtener todos los libros ///
router.get ('/', async (req, res) => {
    try{
        const books = await Book.find();
        console.log('GET ALL ',books)
        if (books.length == 0){
            return res.status(204).json([])
        }
        res(books)
    
    } catch (error){
        res.status(500).json({message: error.message})
    }

    
 
})

/// Crear un nuevo libro ( recurso) ///

router.post ('/', async (req, res) =>{
    const { title,author, genre,publicaction_date } = re?.body
    if(!title ||!author || !genre|| !publicaction_date){
        return res.status(400).json({
            message:'Los campoes titulo, autos,genero y fecha son obligarios'
        })
    }


    const book = new Book(
        {
            title,
            author, 
            genre,
            publicaction_date 
        }
    )


    try {
        const newBook = await book.save()
        res.status(201).json(newBook)
    } catch (error) {
        res.status(400).json({
            message:error.message
        })

    }
})

