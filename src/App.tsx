import React from 'react';
import List from './components/List'
import AddItem from './components/AddItem';

const App: React.FC = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <AddItem />
      <List />
    </div>
  );
}

export default App;
