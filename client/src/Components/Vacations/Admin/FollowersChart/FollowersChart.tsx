import React from 'react';
import { Link } from 'react-router-dom';
import './FollowersChart.css';

const FollowersChart = (): JSX.Element => {
  return (
    <div className='followers-chart'>
      <h1>Stay tuned, work in progress!</h1>

      <Link className='link' to='/home'>
        Back to homepage
      </Link>
    </div>
  );
};

export default FollowersChart;
