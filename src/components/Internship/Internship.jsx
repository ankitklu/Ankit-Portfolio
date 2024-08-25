import React, { useState, useEffect } from 'react';
import './Internship.scss';
import Loader from 'react-loaders';

const Internship = () => {
  const [loading, setLoading] = useState(true); // State to handle loading spinner
  const [internships, setInternships] = useState([]); // State to store internship data

  useEffect(() => {
    // Simulate a delay for loading
    const timer = setTimeout(() => {
      setInternships([
        {
          logo: 'https://th.bing.com/th/id/OIP.O_WAXsBL9aPH9O7Pz-PamQAAAA?rs=1&pid=ImgDetMain',
          position: 'Software Engineering Intern',
          duration: 'May 2024 - September 2024',
          location: 'New York, USA (Remote)',
          description: 'Developed and maintained web applications using React.js and Node.js. Developed attractive UI using react.js. Worked with the Deployment team. Technology:- React.js, JavaScript, Node.js, CSS ',
        },
        {
          logo: 'https://www.theindianwire.com/wp-content/uploads/2017/07/swiggy-logo.png',
          position: 'Campus CEO Intern',
          duration: 'January 2024 - April 2024',
          location: 'KL University, Vijayawada',
          description: '1. Supply Team. 2. In campus growth opportunities for Swiggy. 3. gathered information about the nearby restaurant for effective communication with Swiggy. 4. discussed about the strategies for better sale.',
        },
        {
          logo: 'https://miro.medium.com/v2/resize:fit:870/1*5RcnKkInb1AUfdu7IzMiFQ.png',
          position: 'Student Peer Mentor',
          duration: 'July 2023 - Present',
          location: 'KL University, Vijayawada',
          description: 'Completed Global Certifications, Coursera courses, NPTEL Courses, helped the Mentors with the Course planning and group discussions.',
        },
      ]);
      setLoading(false); // Stop loading after data is fetched
    }, 2000); // 2-second delay for simulating a network request

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <>
      {loading ? (
        <Loader type="pacman" /> // Display a loader while the data is being fetched
      ) : (
        <div className="internship-container">
          {internships.map((internship, index) => (
            <div className="internship-experience" key={index}>
              <div className="internship-logo">
                <img src={internship.logo} alt="Company Logo" />
              </div>
              <div className="internship-details">
                <h2 className="position">{internship.position}</h2>
                <p className="duration-location">
                  {internship.duration} | {internship.location}
                </p>
                <p className="description">{internship.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Internship;
