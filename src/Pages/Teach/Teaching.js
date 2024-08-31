import React, { useState } from "react";
import UseCreatePost from '../../Hooks/UseCreatePost';





const Modal = ({ show, onClose, onSubmit, problem, subproblem }) => {
  const [description, setDescription] = useState('');

  if (!show) {
    return null;
  }

  const handleSubmit = () => {
    onSubmit(description);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-bold mb-4">Submit Your Answer</h3>
        <p className="mb-2 font-bold">{problem}</p>
        <p className="mb-4 text-gray-600">{subproblem}</p>
        <textarea
          className="w-full p-2 border rounded"
          placeholder="Enter your description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="flex justify-end mt-4">
          <button className="btn btn-secondary mr-2" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

// Card Component
const Card = ({ title, subproblem, description, onAnswerClick }) => (
  <div className="card bg-base-100 w-96 shadow-xl">
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <h3 className="card-subtitle text-sm text-gray-500 mb-2">{subproblem}</h3>
      <p>{description}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-secondary ml-2" onClick={onAnswerClick}>Answer</button>
      </div>
    </div>
  </div>
);


const Teach = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const [createpost] = UseCreatePost(); 
  
  const cardData = createpost.map(post => ({
    title: post.problem,
    subproblem: post.subproblem,
    description: post.description || "No description available",
  }));

  const handleAnswerClick = (card) => {
    setSelectedCard(card);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalSubmit = (description) => {
    console.log(`Answer submitted for ${selectedCard.title}: ${description}`);
  };

  return (
    <div className='flex justify-center mt-20'>
      <div className=''>
        <h3 className='text-5xl font-bold flex justify-center mb-6'>Our Services</h3>
        <div className='all_cards grid grid-cols-1 sm:grid-cols-3 gap-10'>
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              subproblem={card.subproblem}
              description={card.description}
              onAnswerClick={() => handleAnswerClick(card)}
            />
          ))}
        </div>
        {/* Modal implementation */}
        <Modal
          show={showModal}
          onClose={handleModalClose}
          onSubmit={handleModalSubmit}
          problem={selectedCard?.title}
          subproblem={selectedCard?.subproblem}
        />
      </div>
    </div>
  );
};

export default Teach;
