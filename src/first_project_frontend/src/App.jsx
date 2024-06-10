import React, { useState } from 'react';
import { chapter_2 } from 'declarations/chapter_2';

function App() {
  const [members, setMembers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [showTable, setShowTable] = useState(false);

  const fetchMembers = async () => {
    try {
      const membersArray = await chapter_2.getAllMembers();
      console.log("Members Array:", membersArray);
      setMembers(membersArray);
      setShowTable(true); 
    } catch (error) {
      console.error('Error fetching members:', error);
    }
  };

  const handleAddMember = async (event) => {
    event.preventDefault();
    try {
      await chapter_2.addMember({ name, age: Number(age) });
      setName('');
      setAge('');
      fetchMembers(); 
    } catch (error) {
      console.error('Error adding member:', error);
    }
  };

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <h2>Add Member</h2>
      <form onSubmit={handleAddMember}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <br />
        <button type="submit">Add Member</button>
      </form>
      <br />
      <h2>All Members</h2>
      <button onClick={fetchMembers}>Fetch Members</button>
      {showTable && ( 
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={index}>
                <td>{member.name}</td>
                <td>{member.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}

export default App;
