import React, { useState } from "react";
import Modal from "react-modal";

const [isModalOpen, setIsModalOpen] = useState(false);
const [movieDetails, setMovieDetails] = useState({});

const openModal = (movie) => {
  setMovieDetails(movie);
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
};

return (
  <div>
    <MovieCard onClick={() => openModal(movie)} />
    <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
      <h2>{movieDetails.title}</h2>
      <p>{movieDetails.overview}</p>
      <button onClick={closeModal}>Close</button>
    </Modal>
  </div>
);
