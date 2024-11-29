import "./App.css";
import AddButton from "./components/AddButton";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div className="App">
      <div className="card">
        <Header />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <AddButton />
      </div>
    </div>
  );
}

export default App;
