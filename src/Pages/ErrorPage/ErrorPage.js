import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
    return (
      <div className='error-page'>
        <div>
          <h1>Ooops !</h1>
          <p>404 Page Not Found</p>
          <p>
            The page is Looking for might have been removed <br />
            had it's name changed or is temporarily unavailable.
          </p>
          <button className="btn-error">
            <Link to="/">GO TO HOMEPAGE</Link>
          </button>
        </div>
      </div>
    );
};

export default ErrorPage;