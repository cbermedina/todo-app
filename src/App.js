import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import StoreProvider from './store/StoreProvider';

function App() {
  return (
  <StoreProvider>
  <div className="container mt-4">
    <div className="row">
      <div className="col-8">
        <TodoList/>
      </div>
      <div className="col-4">
      <TodoForm/>
      </div>
    </div>
  </div>
  </StoreProvider>
  );
}

export default App;
