import { useParams } from 'react-router-dom';
import { fetchABook } from '../services/BookService';
import { useState } from 'react';
import { useEffect } from 'react';
function BookView(){
    let [ fetchedBook, setFetchedBook] = useState();

    // 1.extract the route parameter - bid
    const { bid } = useParams(); // using object destructuring
    //console.log(bid);
    // 2.consume the endpoint to fetch a book by passing the book id, use useEffect()
    useEffect(()=>{
        fetchABook(bid)
            .then((response)=>response.json())
            .then((data)=>{
                console.log(data);
                 // 3.store the fetched book in a state variable
                 setFetchedBook(data);
            })
        //some code
    }, []);


   
    // 4.display the state variable in jsx

    return(
        <>
        {fetchedBook && 
        <div className="container m-5">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="card">
                        <div className="card-header bg-warning text-white"> <h2>BOOK INFORMATION</h2></div>
                        <img src={fetchedBook.bookImageUrl} width="100%" height="250px"/>
                        <div className="card-title p-2">BOOK TITLE : {fetchedBook.bookTitle}</div>
                        <div className="card-text p-2">BOOK AUTHOR : {fetchedBook.author.authorFirstName} {fetchedBook.author.authorLastName}</div>
                        <div className="card-text p-2">BOOK GENRE : {fetchedBook.bookGenre}</div>
                        <div className="card-text p-2">BOOK PRICE : Rs. {fetchedBook.bookPrice}</div>
                        <div className="card-text p-2">BOOK PUBLISHED : {fetchedBook.bookPublished}</div>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
        </div>}
        </>
    );
}
export default BookView;