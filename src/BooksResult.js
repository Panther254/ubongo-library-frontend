import React,{ useState, useEffect} from 'react'
import { Book } from './Book'
import { useParams } from 'react-router'
import './BooksResult.css'



export const BooksResult = () => {
	const [books, setBooks] = useState([])
	const { searchParam } = useParams()

	useEffect(() => {
		fetch(`/api/books/search?queryString=${searchParam}`).then(response=>response.json())
            .then(data=>{console.log("resultsdata",data)
                booksooks(data.results)})
	}, [searchParam])
	

	return (
		<div className="books__Result">
			{console.log("result state",books)}
			{books.length > 0 ? map(book=>(<Book id={book._id} key={book._id} title={book.title} author={book.author} imageURL={book.imageURL} />)): <><h3>NO MATCH FOUND</h3></>}
		</div>
	)
}
