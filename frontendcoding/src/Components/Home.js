import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); 

  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/signin'); 
  };

  return (
    <div className="d-flex flex-column min-vh-100"> 
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <div className="container">
          <a className="navbar-brand" href="/">Book Management System</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {!isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/signin">Sign In</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/signup">Sign Up</a>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <button className="btn btn-link nav-link" onClick={handleLogout}>Logout</button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Welcome to Book Management System</h1>
          <p className="lead">
            Explore our library and manage your books efficiently!
          </p>
        </div>
      </header>

      
      {isLoggedIn && (
        <section className="container py-5">
          <div className="row text-center">
            {/* View All Books */}
            <div className="col-md-3 mb-4">
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">View All Books</h5>
                  <p className="card-text">See all books available in the database.</p>
                  <a href="/books" className="btn btn-primary">View Books</a>
                </div>
              </div>
            </div>

            
            <div className="col-md-3 mb-4">
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">Add a New Book</h5>
                  <p className="card-text">Add a new book to the Book database.</p>
                  <a href="/addbook" className="btn btn-success">Add Book</a>
                </div>
              </div>
            </div>

            
            <div className="col-md-3 mb-4">
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">Update a Book</h5>
                  <p className="card-text">Edit the details of an existing book.</p>
                  <a href="/updatebook" className="btn btn-warning">Update Book</a>
                </div>
              </div>
            </div>

            
            <div className="col-md-3 mb-4">
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">Delete a Book</h5>
                  <p className="card-text">Remove a book from the database.</p>
                  <a href="/deletebook" className="btn btn-danger">Delete Book</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <p>&copy; 2024 Book Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
