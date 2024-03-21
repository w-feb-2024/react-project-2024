const baseUrl = `http://localhost:4444/v1/api/authors`;

export const fetchAllAuthors = () => {
    return fetch(baseUrl);
}