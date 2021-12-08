import React from 'react';

import './homepage.styles.scss'

const HomePage = () => (
  <div className='homepage'>
    <div className='issues-menu'>
      <div className='menu-item'>
        <div className='content'>
          <h2 className='issue-name'>VOTING</h2>
          <span className='issue-link'>Learn More</span>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <h2 className='issue-name'>WOMENS RIGHTS</h2>
          <span className='issue-link'>Learn More</span>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <h2 className='issue-name'>ENVIRONMENT</h2>
          <span className='issue-link'>Learn More</span>
        </div>
      </div>
    </div>
  </div>
)


export default HomePage
