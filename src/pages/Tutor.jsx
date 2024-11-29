import React, { useEffect, useState } from 'react';
import axios from 'axios';

import TutorCard from './../Components/TutorCard';

const Tutors = () => {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    const fetchTutors = async () => {
      const res = await axios.get('/api/tutors');
      setTutors(res.data);
    };
    fetchTutors();
  }, []);

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-2xl font-semibold mb-4">Available Tutors</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tutors?.map((tutor) => (
          <TutorCard key={tutor.id} tutor={tutor} />
        ))}
      </div>
    </div>
  );
};

export default Tutors;
