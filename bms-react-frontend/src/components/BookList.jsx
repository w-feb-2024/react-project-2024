import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { deleteBook, fetchAllBooks } from "../services/BookService";

function BookList(){
    const navigate = useNavigate();

    let [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        loadBooks();    
    }, []);

    const loadBooks = () => {
        fetchAllBooks()
            .then(response=>response.json())
            .then(data=>{
                console.log(data);
                setAllBooks(data);
            })
            .catch(error=>console.log(error));
    }

    const removeBook = (bookId) => {
        deleteBook(bookId)
            .then(response=>loadBooks())
            .catch((error)=>console.log(error));
    }

    const viewBook = (bookId)=> {
        // route to /book-view
        // while routing send the bookId as a route parameter
        // we will use useNavigate() react hook
        navigate('/book-view/'+bookId);
    }
    const allBooksDisplay = allBooks.map((eachBook, index) => 
                <tr key={index}>
                    <td>{eachBook.bookId}</td>
                    <td><img src={eachBook.bookImageUrl} height="80px" width="100px"/></td>
                    <td>{eachBook.bookTitle}</td>
                    <td>{eachBook.author.authorFirstName} {eachBook.author.authorLastName}</td>
                    <td>{eachBook.bookGenre}</td>
                    <td>{eachBook.bookPublished}</td>
                    <td>Rs. {eachBook.bookPrice}</td>
                    <td><button type="button" className="btn btn-warning" onClick={()=>viewBook(eachBook.bookId)}>View</button></td>
                    <td><button type="button" className="btn btn-primary">Edit</button></td>
                    <td><button type="button" className="btn btn-danger" onClick={()=>removeBook(eachBook.bookId)}>Remove</button></td>
                </tr>                  
            )

    return(
        <>
        <div className="container m-5">
            <h1>LIST OF BOOKS</h1>
            <button type="button" className="btn btn-success">ADD NEW BOOK</button>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>IMAGE</th>
                        <th>TITLE</th>
                        <th>AUTHOR</th>
                        <th>GENRE</th>
                        <th>PUBLISHED</th>
                        <th>PRICE</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {allBooksDisplay}
                </tbody>
            </table>
        </div>
        </>
    );
}
export default BookList;