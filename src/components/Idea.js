import React from 'react';

export default ({ idea, del }) => (
  <div>
    <h2>{idea.id}</h2>
    <p>{idea.created_date}</p>
    <button>Edit</button>
    <button onClick={del} >Delete</button>
  </div>
);
