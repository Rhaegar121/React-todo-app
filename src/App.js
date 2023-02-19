import './App.css';
import Header from './components/header';
import TodosLogic from './components/TodosLogic';

const TodoApp = () => {
  return (
    <div className="wrapper">
      <div className="todos">
        <Header />
        <TodosLogic />
      </div>
    </div>
  );
};

export default TodoApp;
