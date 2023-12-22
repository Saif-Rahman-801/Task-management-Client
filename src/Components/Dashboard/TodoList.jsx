const TodoList = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = e.target.todo.value;
    console.log(todo);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4">
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
            type="button"
          >
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoList;
