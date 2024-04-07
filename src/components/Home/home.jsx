import React from 'react';
import { FaComment } from 'react-icons/fa'; // Import the chat icon from react-icons
import './home.css';
import Footer from '../Footer/footer';
import Navbar from '../Navbar/navbar'; // Ensure the correct case for component name
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

const Home = () => {
  return (
    <div className='main'>
      <div className='content'>
        <h1> "Reach your sports <span>Goals</span> with our platform"</h1><br /><br />

        <h3> Unite | Engage | Triumph</h3> <br />

        <Link to="/events"><button>Get started</button></Link><br /> {/* Use Link component to navigate to chat page */}
        
      </div>
      {/* Chat icon */}
      <Link to="/chat" className="chat-icon">
        <FaComment size={30} title='Chat'/>
      </Link>
    </div>
  );
}

export default Home; // Ensure correct case for export and component name
