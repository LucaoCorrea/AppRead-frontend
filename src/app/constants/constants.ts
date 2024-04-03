export const API_URL = 'http://localhost:8080';

export const apiEndpoint = {
  AuthEndpoint: {
    login: `${API_URL}/api/v1/auth/authenticate`,
  },
  BookEndpoint: {
    getAllBooks: `${API_URL}/api/v1/book`,
    getBookBySearch: `${API_URL}/api/v1/book/search`,
    getIdBook: `${API_URL}/api/v1/book`,
  },
};
