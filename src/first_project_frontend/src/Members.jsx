import React from 'react';
import { useNavigate } from 'react-router-dom';

function Members({ members, isLoading }) {
  const navigate = useNavigate();

  return (
    <div>
      <h2>All Members</h2>
      <button onClick={() => navigate('/members/new')}>Add Member</button>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
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
                <td>{member.age.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Members;
