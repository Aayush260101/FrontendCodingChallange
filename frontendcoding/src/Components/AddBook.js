import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddBook = () => {
  // State variables for form fields
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publicationYear, setPublicationYear] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload on submit

    // Clear previous messages
    setError('');
    setSuccess('');

    // Prepare the book data to send to the backend
    const bookData = {
      title,
      author,
      publicationYear,
    };

    // Get the JWT token from localStorage
    const token = localStorage.getItem('token'); // Replace with actual way to get the token

    try {
      // Make a POST request to the backend
      const response = await fetch('http://localhost:8080/api/admin/addNewBook', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
      });

      if (!response.ok) {
        throw new Error('Failed to add book. Please try again.');
      }

      // Handle successful response
      setSuccess('Book added successfully!');
      // Optionally, reset the form fields
      setTitle('');
      setAuthor('');
      setPublicationYear('');
    } catch (error) {
      // Handle error response
      setError(error.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="container py-5">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        {/* Title Field */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Author Field */}
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author</label>
          <input
            type="text"
            id="author"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>

        {/* Publication Year Field */}
        <div className="mb-3">
          <label htmlFor="publicationYear" className="form-label">Publication Year</label>
          <input
            type="number"
            id="publicationYear"
            className="form-control"
            value={publicationYear}
            onChange={(e) => setPublicationYear(e.target.value)}
            required
          />
        </div>

        {/* Error and Success Messages */}
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
