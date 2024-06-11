import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { chapter_2 } from 'declarations/chapter_2';
import Members from './Members';
import AddMember from './AddMember';

function App() {
  const [members, setMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const membersArray = await chapter_2.getAllMembers();
        console.log("Members Array:", membersArray);
        setMembers(membersArray);
      } catch (error) {
        console.error('Error fetching members:', error);
      } finally {
        setIsLoading(false);
      }
    };


    
    fetchMembers();
  }, []);

  const handleAddMember = async (values) => {
    try {
      await chapter_2.addMember({ name: values.name, age: Number(values.age) });
      const membersArray = await chapter_2.getAllMembers();
      setMembers(membersArray);
    } catch (error) {
      console.error('Error adding member:', error);
    }
  };

  return (
    <Router>
      <main>
        <img src="/logo2.svg" alt="DFINITY logo" style={{ marginBottom: '40px' }} />
        <Routes>
          <Route path="/" element={<Navigate to="/members" />} />
          <Route path="/members" element={<Members members={members} isLoading={isLoading} />} />
          <Route path="/members/new" element={<AddMember handleAddMember={handleAddMember} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
