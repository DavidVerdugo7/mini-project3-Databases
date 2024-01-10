const axios = require("axios");

const importBooks = async () => {
  try {
    const apiUrl = "https://example-data.draftbit.com/books?_limit=10";
    const response = await axios.get(apiUrl);
    const booksFromApi = response.data;

    const simplifiedBooks = booksFromApi.map((book) => ({
      title: book.title,
      authors: book.authors,
      rating: book.rating,
    }));
    console.log("simplifiedBook;", simplifiedBooks);
    const yourApiEndpoint = "http://localhost:8080/api/books/create/multiple";

    try {
      const postResponse = await axios.post(yourApiEndpoint, simplifiedBooks);
      //   console.log(
      //     `Post response for ${book.title}: ${JSON.stringify(postResponse.data)}`
      //   );
    } catch (error) {
      //   console.error(`Error importing book: ${book.title} - ${error.message}`);
    }

    console.log("Books imported to your API.");
  } catch (error) {
    console.error("Error importing books:", error.message);
  }
};

importBooks();
