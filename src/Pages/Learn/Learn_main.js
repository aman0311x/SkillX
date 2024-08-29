import React, { useEffect } from 'react';
import Create_post from './Create_post';
import UseServices from '../../Hooks/UseServices';

// Calling database to load the services
// const Services = () => {
//   const [services] = UseServices();

//   useEffect(() => {
//     // Log services to the console to check data
//     //console.log(services);
//   }, [services]);

//   return null; // Since we're not rendering anything from this component directly
// };

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
            <span>{duration} min</span>
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
  // Fetch services data using custom hook
  const [servicesData] = UseServices();

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
        {/* Render cards dynamically from services data */}
        {servicesData.map((service) => (
          <Card
            key={service.id}
            imgSrc={service.imgUrl}
            title={service.tittle}
            studentCount={service.studentCount}
            duration={service.duration}
            teacher={service.teacher}
          />
        ))}
        {/* Removed unused divs */}
      </div>
    </div>
  );
};

export default Learn_main;
