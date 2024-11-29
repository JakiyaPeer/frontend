const TutorCard = ({ tutor }) => (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold">{tutor.name}</h2>
      <p>Expertise: {tutor.expertise.join(', ')}</p>
      <p>Price: ₹{tutor.price}/hour</p>
      <button className="bg-blue-500 text-white px-3 py-1 mt-2 rounded">
        View Profile
      </button>
    </div>
  );
  
  export default TutorCard;
  