import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Books.css'; // Importing the custom CSS file for styles

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    fetch('http://localhost:8080/api/admin/getBooks', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error('Error fetching books:', error));
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <div className="container">
          <a className="navbar-brand" href="/">
            Book Management System
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/signin">
                  Sign In
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/signup">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Books Available</h1>
          <p className="lead">Explore the books in our collection.</p>
        </div>
      </header>

      <section className="container py-5">
        <div className="row">
          {books.map((book) => (
            <div className="col-md-4 mb-4" key={book.isbn}>
              <div className="card shadow custom-card">
                <div className="card-body">
                  <h5 className="card-title">{book.isbn}</h5>
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-author">Author: {book.author}</p>
                  <p className="card-publication-year">Published: {book.publicationYear}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Books;
