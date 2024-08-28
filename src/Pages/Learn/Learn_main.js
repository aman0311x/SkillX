import React, { useState } from 'react'; // Add useState import
import learn from '../../Assets/Photo/learn.jpg';
import video from '../../Assets/Photo/video_call.jpg';
import appoinment from '../../Assets/Photo/apoinment.jpg';
import make_money from '../../Assets/Photo/make_money.jpg';
import vlog from '../../Assets/Photo/vlog.jpg';
import teach from '../../Assets/Photo/teach.jpg';
import Create_post from './Create_post';

const CreateNewPost = () => {
  return (
    <div>
      <Create_post></Create_post>
    </div>
  );
};

const Card = ({ imgSrc, title, studentCount, duration, teacher }) => (
  <div className='flex justify-center'>
    <div className="card bg-base-100 w-80 shadow-xl mb-6">
      <figure>
        <img src={imgSrc} alt={title} />
      </figure>
      <div className="card-body">
        <div className="stats flex items-center justify-between">
          <span className="student-count">{studentCount} students</span>
          <div className="duration">
            <span>{duration}</span>
          </div>
        </div>
        <h2 className="card-title">
          {title}
        </h2>
        <div className="teacher-placeholder">
          <div className="user-information small">
            <a href="#" className="link-main no-bold title-link initialized">
              {teacher}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);


const Learn_main = () => {


  const cardData = [
    {
      imgSrc: learn,
      title: "Lean Skills",
      studentCount: 1323,
      duration:30,
      teacher: "Sazidul Islam",
    },
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
    <div className='mt-20'>
      <div className='text-center'>
        <div className='flex justify-end mr-8 input-primary'>
          <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs mb-8 mx-5" />

          {<CreateNewPost />}
        </div>
        <h3 className='text-5xl font-bold mb-6'>Our Services</h3>
      </div>
      <div className='all_cards grid grid-cols-1 sm:grid-cols-3 gap-2 px-6'>
        {cardData.map((card, index) => (
          <Card
            key={index}
            imgSrc={card.imgSrc}
            title={card.title}
            studentCount={card.studentCount}
            duration={card.duration}
            teacher={card.teacher}
          />
        ))}
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Learn_main;
