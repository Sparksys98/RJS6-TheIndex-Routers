import React, { Component } from "react";
import BookTable from "./BookTable";
import SearchBar from "./SearchBar";

class BookList extends Component {
  state = {
    filteredBooks: this.props.books
  };

  filterBooks = query => {
    query = query.toLowerCase();
    const filteredBooks = this.props.books.filter(book =>
      book.title.toLowerCase().includes(query)
    );
    this.setState({ filteredBooks });
  };
  colorfilter = query => {
    return this.state.filteredBooks.filter(book => book.color === query);
  };

  render() {
    let bookCards = this.state.filteredBooks;
    let urlColor = this.props.match.params.bookColor;
    if (urlColor) {
      bookCards = this.colorfilter(urlColor);
    }
    return (
      <div>
        <h3>Books</h3>
        <SearchBar handleFilter={this.filterBooks} />
        <BookTable books={bookCards} />
      </div>
    );
  }
}

export default BookList;
