import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const TodoList = () => {
  const axiosPublic = useAxiosPublic();
  const [allTodo, setAllTodo] = useState([]);
  const [pendingTodo, setPendingTodo] = useState([]);

  const fetchTodos = () => {
    axiosPublic
      .get("/todos")
      .then((res) => {
        setAllTodo(res.data);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to fetch todos");
      });
  };

  const fetchPendings = () => {
    axiosPublic
      .get("/pending")
      .then((res) => {
        setPendingTodo(res.data);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to fetch pending todos");
      });
  };

  useEffect(() => {
    fetchTodos();
  }, [axiosPublic]);

  useEffect(() => {
    fetchPendings();
  }, [axiosPublic]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = e.target.todo.value;

    const todoList = {
      todo,
    };

    axiosPublic
      .post("/todos", todoList)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Todo created");
          // Refetch todos after a successful todo creation
          fetchTodos();
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to create todo");
      });
  };

  const handlePending = (id) => {
    const filterPending = allTodo.find((todo) => todo._id === id);
    const pending = {
      todo: filterPending.todo,
    };

    axiosPublic
      .post("/pending", pending)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Todo marked as pending");
          // Refetch pending todos after a successful todo creation
          fetchPendings();
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to mark todo as pending");
      });
  };

  return (
    <div className="p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="todo"
          >
            Todo:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="todo"
            name="todo"
            type="text"
            placeholder="Enter your todo"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Todo
          </button>
        </div>
      </form>

      {/* Display Todos */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="font-bold">Todos</h2>
          {allTodo.map((todo) => (
            <div key={todo._id} className="bg-gray-100 p-2 mb-2 rounded">
              <p>{todo.todo}</p>
              <button
                onClick={() => handlePending(todo._id)}
                className="border p-1 rounded-md bg-green-500 text-white"
              >
                Make Pending
              </button>
            </div>
          ))}
        </div>
        <div>
          <h2 className="font-bold">Pending</h2>
          {pendingTodo.map((pending) => (
            <div key={pending._id} className="bg-yellow-200 p-2 mb-2 rounded">
              <p>{pending.todo}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="font-bold">Done</h2>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
