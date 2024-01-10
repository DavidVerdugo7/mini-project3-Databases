const axios = require("axios");

const importBooks = async () => {
  try {
    const apiUrl = "https://example-data.draftbit.com/books";
    const response = await axios.get(apiUrl);
    const booksFromApi = response.data;

    const simplifiedBooks = booksFromApi.map((book) => ({
      title: book.title,
      authors: book.authors,
      rating: book.rating,
    }));

    const yourApiEndpoint = "http://localhost:8080/api/books/create/multiple";

    for (const book of simplifiedBooks) {
      for (const book of simplifiedBooks) {
        console.log(`Importing book: ${book.title}`);
        console.log(`Book data: ${JSON.stringify(book)}`);
      }
      try {
        const postResponse = await axios.post(yourApiEndpoint, book);
        console.log(
          `Post response for ${book.title}: ${JSON.stringify(
            postResponse.data
          )}`
        );
      } catch (error) {
        console.error(`Error importing book: ${book.title} - ${error.message}`);
      }
    }

    console.log("Books imported to your API.");
  } catch (error) {
    console.error("Error importing books:", error.message);
  }
};

importBooks();
