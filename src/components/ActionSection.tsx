import React from 'react';

const ActionSection: React.FC = () => {
  return (
    <div className="action-section">
      <h2>Action</h2>
      <div className="action-buttons">
        <button disabled>Action 1</button>
        <button disabled>Action 2</button>
        <button disabled>Action 3</button>
      </div>
    </div>
  );
};

export default ActionSection;