import React from 'react';

const demoTeam = [
  'Amit Khandelwal', 'Priya Sharma', 'Rahul Mehta', 'Sneha Gupta', 'Vikas Jain', 'Neha Saini', 'Rohit Agarwal', 'Simran Kaur', 'Deepak Joshi', 'Anjali Verma', 'Suresh Yadav', 'Meena Kumari', 'Ravi Singh', 'Pooja Patel', 'Karan Desai', 'Asha Rathi', 'Manoj Sharma', 'Divya Kapoor', 'Sanjay Sethi', 'Ritu Jain'
];

const TeamSection = () => (
  <section id="team" className="py-16 bg-beige">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Team</h2>
    <div className="flex flex-col items-center">
      <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=800&q=80" alt="team" className="w-full max-w-3xl h-64 object-cover rounded-lg shadow mb-6" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
        {demoTeam.map((name, idx) => (
          <div key={idx} className="bg-white rounded shadow p-2 text-center text-sm font-medium text-dark">{name}</div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection; 