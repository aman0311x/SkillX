import React from 'react';
import pageNotFound from '../../Assets/Photo/404.png';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='text-center mt-20'>
            <div>
                <div className="flex justify-center">
                    <img src={pageNotFound} alt="" />
                </div>
                <h2 className="text-5xl my-8 flex justify-center body-container">404 error</h2>
                <Link to={'/'}><button className="btn btn-outline mb-16 btn-wide">Return Home</button></Link>
            </div>
        </div>
    );
};

export default PageNotFound;