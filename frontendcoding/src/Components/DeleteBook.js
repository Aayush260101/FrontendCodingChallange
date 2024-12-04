import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';

const DeleteBook = () => {
  const [isbn, setIsbn] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Use useNavigate

  // Retrieve JWT token from localStorage or sessionStorage
  const token = localStorage.getItem('token');

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      // Make the DELETE request to the backend with ISBN
      const response = await axios.delete(`http://localhost:8080/api/admin/removeBook/${isbn}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setMessage('Book deleted successfully');
        navigate('/books'); // Redirect to the books list after delete
      } else {
        setMessage('Error deleting the book');
      }
    } catch (error) {
      setMessage('Error deleting the book');
    }
  };

  return (
    <div className="container">
      <h2>Delete Book</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleDelete}>
        <div className="mb-3">
          <label htmlFor="isbn" className="form-label">ISBN</label>
          <input
            type="text"
            className="form-control"
            id="isbn"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-danger">Delete Book</button>
      </form>
    </div>
  );
};

export default DeleteBook;
