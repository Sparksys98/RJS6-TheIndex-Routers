import React, { Component } from "react";

// Components
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";

class AuthorList extends Component {
  state = {
    query: "",
    books: this.props.books
  };

  newBooks = query => {
    query = query.toLowerCase();
    const newBooks = this.props.books.filter(book => book.title.toLowerCase());
    this.setState({ query, newBooks });
  };

  render() {
    const filteredAuthors = this.props.authors.filter(author =>
      `${author.first_name} ${author.last_name}`
        .toLowerCase()
        .includes(this.state.query)
    );
    const authorCards = filteredAuthors.map(author => (
      <AuthorCard key={author.first_name + author.last_name} author={author} />
    ));

    return (
      <div>
        <h3>Authors</h3>
        <SearchBar handleFilter={this.setQuery} />
        <div className="row">{authorCards}</div>
      </div>
    );
  }
}

export default AuthorList;
