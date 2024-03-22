import { fetchABook, updateBook } from "../services/BookService";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { fetchAllAuthors } from "../services/AuthorService";

function BookEdit(){
    let navigate = useNavigate();
    let { bookId } = useParams();
    let [allAuthors, setAllAuthors] = useState([]);
    let [errors, setErrors] = useState({});
    let [formBookData, setFormBookData] = useState({
        bookId: 0,
        bookTitle: '',
        author: '',
        bookGenre: '',
        bookPrice: 0,
        bookPublished: '',
        bookImageUrl: ''
    });

    useEffect(() => {
        fetchAllAuthors()
            .then((response)=>response.json())
            .then((data)=>{
                //console.log(data);
                setAllAuthors(data);
                fetchABook(bookId)
                    .then((response)=>response.json())
                    .then((data)=>{
                        console.log(data);
                    })
            })
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormBookData({...formBookData, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       
        // validate the form data
        let validationErrors = {};
        if(formBookData.bookTitle == ''){
            validationErrors.bookTitle = 'Book Title is Required!';
        }
        if(formBookData.author == ''){
            validationErrors.bookAuthor = 'Book Author is Required!';
        }
        if(formBookData.bookGenre == ''){
            validationErrors.bookGenre = 'Book Genre is Required!';
        }
        if(formBookData.bookPrice == 0){
            validationErrors.bookPrice = 'Book Price is Required!';
        }
        if(formBookData.bookPublished == ''){
            validationErrors.bookPublished = 'Book Published is Required!';
        }

        setErrors(validationErrors);

        if(Object.keys(validationErrors).length === 0){
            // we are good to send formBookData to the backend appln to be inserted in the db
            console.log(formBookData);
            const aid = formBookData.author;
            let editBook = {...formBookData, author:{authorId: aid}};
            console.log(editBook);
            updateBook(editBook)
                .then((response)=>navigate('/book-list'));
        }

    }

    const allAuthorsDisplay = allAuthors.map((eachAuthor, index)=>
                                                <option key={index} value={eachAuthor.authorId}>{eachAuthor.authorFirstName} {eachAuthor.authorLastName}</option>);
    return(<>
        <div className="container m-5">
        <div className="row m-5">
          <div className="col-3"></div>
          <div className="col-6">
            <div className="card">
              <form onSubmit={handleSubmit}>
                <div className="card-header bg-primary text-white">
                  <h2>EDIT BOOK</h2>
                </div>
                <div className="card-body">
                  <div className="mb-3 mt-3">
                    <label htmlFor="bTitle" className="form-label">
                      Book Title:*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="bTitle"
                      placeholder="Enter Book Title"
                      name="bookTitle"
                      onChange={handleChange}
                    />
                    {errors.bookTitle && <div className="text-danger small">{errors.bookTitle}</div>}
                  </div>
                  <div>
                    <label htmlFor="bAuthor">Book Author:*</label>
                    <select id="bAuthor" className="form-select" name="author" onChange={handleChange}>
                      <option value="">--select--</option>  
                      {allAuthorsDisplay}
                    </select>
                    {errors.bookAuthor && <div className="text-danger small">{errors.bookAuthor}</div>}
                  </div>
                  <div>
                    <label htmlFor="bGenre">Book Genre:*</label>
                    <select id="bGenre" className="form-select" name="bookGenre" onChange={handleChange}>
                      <option value="">--select--</option>
                      <option value="Commedy">Commedy</option>
                      <option value="Fantasy">Fantasy</option>
                      <option value="Fiction">Fiction</option>
                      <option value="Non-Fiction">Non-Fiction</option>
                    </select>
                    {errors.bookGenre && <div className="text-danger small">{errors.bookGenre}</div>}
                  </div>
                  <div className="mb-3 mt-3">
                    <label htmlFor="bPrice" className="form-label">
                      Book Price:*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="bPrice"
                      placeholder="Enter Book Price"
                      name="bookPrice"
                      onChange={handleChange}
                    />
                    {errors.bookPrice && <div className="text-danger small">{errors.bookPrice}</div>}
                  </div>
                  <div className="mb-3 mt-3">
                    <label htmlFor="bPublished" className="form-label">
                      Book Published:*
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="bPublished"
                      name="bookPublished"
                      onChange={handleChange}
                    />
                    {errors.bookPublished && <div className="text-danger small">{errors.bookPublished}</div>}
                  </div>
                  
                  <div className="mb-3 mt-3">
                    <label htmlFor="bImageUrl" className="form-label">
                      Book Image URL:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="bImageUrl"
                      placeholder="Enter Image Url"
                      name="bookImageUrl"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="card-footer bg-primary">
                  <button
                    type="submit"
                    className="btn btn-primary bg-white text-primary mx-5"
                  >
                    UPDATE
                  </button>
                  <button
                    type="reset"
                    className="btn btn-primary bg-white text-success mx-5"
                  >
                    CLEAR
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </>);
}
export default BookEdit;