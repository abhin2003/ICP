import React from 'react';

function AddMember({ handleAddMember, name, setName, age, setAge }) {
  return (
    <div>
      <h2>Add Member</h2>
      <form onSubmit={handleAddMember} className="form">
        <div className="input-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Member</button>
      </form>
    </div>
  );
}

export default AddMember;
