import React from 'react';
import { useTodoStore } from '../hooks/useTodoStore';

const Todo: React.FC = () => {
  const { todos, addTodo, toggleTodo, removeTodo, info, height } = useTodoStore((state) => state);

  const [input, setInput] = React.useState('');

  const handleAddTodo = () => {
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add a new todo" />
      <button onClick={handleAddTodo}>Add</button>
      <button
        onClick={() => {
          useTodoStore.setState({ height: height + 1 });
        }}
      >
        AddHeight
      </button>
      <button
        onClick={() => {
          // useTodoStore.setState((state) => ({
          //   ...state,
          //   info: { ...state.info, age: state.info.age + 1 },
          // }));
          /* not update ui */
          // useTodoStore.setState({ [info.age]: info.age + 1 });
          useTodoStore.setState({ info: { ...info, age: info.age + 1 } });
        }}
      >
        AddAge
      </button>
      <div>
        <p>Info: {JSON.stringify(info)}</p>
        <p>Height: {height}</p>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <button onClick={() => toggleTodo(todo.id)}>{todo.completed ? 'Undo' : 'Complete'}</button>
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
