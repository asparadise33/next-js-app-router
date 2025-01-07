import TodoForm from '../components/TodoForm';
import List from '../components/List';

function Home() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <TodoForm />
      <h2>To-Do List</h2>
      <List />
    </div>
  );
}

export default Home;
