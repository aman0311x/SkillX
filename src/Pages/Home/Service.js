import React from 'react';
import learn from '../../Assets/Photo/learn.jpg'
import video from '../../Assets/Photo/video_call.jpg'
import appoinment from '../../Assets/Photo/apoinment.jpg'
import make_money from '../../Assets/Photo/make_money.jpg'
import vlog from '../../Assets/Photo/vlog.jpg'
import teach from '../../Assets/Photo/teach.jpg'
const Card = ({ imgSrc, title, description }) => (
  <div className=''>
    <div className="card bg-base-100 w-80 shadow-xl">
      <figure>
        <img
          src={imgSrc}
          alt={title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  </div>
);

const Service = () => {
  const cardData = [
    {
      imgSrc: learn,
      title: "Lean Skills",
      description: "Explore and acquire new skills with our comprehensive learning resources.",
    },
    // Repeat the card data as needed
    {
      imgSrc: video,
      title: "Video Conferences",
      description: "Connect with experts seamlessly through high-quality video conferences.",
    },
    {
      imgSrc: appoinment,
      title: "Book Appointments",
      description: "Schedule and manage your appointments effortlessly with our intuitive system.",
    },
    {
      imgSrc: teach,
      title: "Empower Others",
      description: "Share your knowledge and expertise by teaching others through our platform.",
    },
    {
      imgSrc: vlog,
      title: "Share Vlog",
      description: "Create and share engaging vlogs to connect with your audience and showcase your experiences.",
    },
    {
        imgSrc: make_money,
        title: "Monetize Your Skills!",
        description: "Earn money by monetizing your skills and expertise through our platform.",
      },
  ];

  return (
    <div className='flex justify-center mt-20'>
      <div className=''>
        <h3 className='text-5xl font-bold flex justify-center mb-6'>Our Services</h3>
        <div className='all_cards grid grid-cols-1 sm:grid-cols-3 gap-10'>
          {cardData.map((card, index) => (
            <Card
              key={index}
              imgSrc={card.imgSrc}
              title={card.title}
              description={card.description}
            />
          ))}
          <div></div> {/* Empty divs for spacing or alignment, if needed */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Service;
