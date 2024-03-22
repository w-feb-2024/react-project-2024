// write the functions for basic cruds
const baseUrl = `http://localhost:4444/v1/api/books`;

export const fetchAllBooks = () => {
    return fetch(baseUrl);
}

export const fetchABook = (bookId) => {
    return fetch(baseUrl + "/" + bookId);
}

export const addBook = (newBook) => {
    return fetch(baseUrl, {
                            method: 'POST',
                            body: JSON.stringify(newBook),
                            headers: {'Content-Type': 'application/json'}
                          });
}

export const updateBook = (updateBook) => {
    
}

export const deleteBook = (bookId) => {
    return fetch(baseUrl + "/" + bookId, {method: 'DELETE'});
}