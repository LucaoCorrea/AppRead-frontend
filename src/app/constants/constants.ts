export const API_URL = 'http://localhost:8080';

export const apiEndpoint = {
  AuthEndpoint: {},
  BookEndpoint: {
    getAllBooks: `${API_URL}/api/v1/book`,
    getBookBySearch: `${API_URL}/api/v1/book/search`,
  },
};
