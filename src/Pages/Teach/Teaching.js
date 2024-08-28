import React, { useState } from 'react';
import learn from '../../Assets/Photo/learn.jpg';
import video from '../../Assets/Photo/video_call.jpg';
import appoinment from '../../Assets/Photo/apoinment.jpg';
import make_money from '../../Assets/Photo/make_money.jpg';
import vlog from '../../Assets/Photo/vlog.jpg';
import teach from '../../Assets/Photo/teach.jpg';

// Modal Component
const Modal = ({ show, onClose, onSubmit }) => {
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
const Card = ({ title, description, onAnswerClick }) => (
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
          <button className="btn btn-secondary ml-2" onClick={onAnswerClick}>Answer</button>
        </div>
      </div>
    </div>
  );
  

// Main Component
const Teach = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
  
    const cardData = [
      {
        title: "Lean Skills",
        description: "Explore and acquire new skills with our comprehensive learning resources.",
      },
      {
        title: "Video Conferences",
        description: "Connect with experts seamlessly through high-quality video conferences.",
      },
      {
        title: "Book Appointments",
        description: "Schedule and manage your appointments effortlessly with our intuitive system.",
      },
      {
        title: "Empower Others",
        description: "Share your knowledge and expertise by teaching others through our platform.",
      },
      {
        title: "Share Vlog",
        description: "Create and share engaging vlogs to connect with your audience and showcase your experiences.",
      },
      {
        title: "Monetize Your Skills!",
        description: "Earn money by monetizing your skills and expertise through our platform.",
      },
    ];
  
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
                description={card.description}
                onAnswerClick={() => handleAnswerClick(card)}
              />
            ))}
          </div>
          {/* Modal implementation here if needed */}
        </div>
      </div>
    );
  };
  
  export default Teach;
  