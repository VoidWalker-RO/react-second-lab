import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    name: "",
    age: "",
    city: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      
      {/* ФОРМА */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-bold text-center">
          Введення даних
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Ім'я"
          value={user.name}
          onChange={handleChange}
          className="w-full border p-2 rounded-lg"
        />

        <input
          type="number"
          name="age"
          placeholder="Вік"
          value={user.age}
          onChange={handleChange}
          className="w-full border p-2 rounded-lg"
        />

        <input
          type="text"
          name="city"
          placeholder="Місто"
          value={user.city}
          onChange={handleChange}
          className="w-full border p-2 rounded-lg"
        />

        <textarea
          name="description"
          placeholder="Опис"
          value={user.description}
          onChange={handleChange}
          className="w-full border p-2 rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Показати профіль
        </button>
      </form>

      {/* КАРТКА */}
      {submitted && (
        <div className="mt-6 bg-white shadow-xl rounded-2xl p-6 w-full max-w-md text-center">
          <img
            src="https://i.pravatar.cc/300"
            alt="avatar"
            className="w-32 h-32 mx-auto rounded-full mb-4"
          />

          <h2 className="text-2xl font-bold">
            {user.name}
          </h2>

          <p className="text-gray-600">
            {user.age} років, {user.city}
          </p>

          <p className="mt-2">
            {user.description}
          </p>

          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
            Підписатися
          </button>
        </div>
      )}
    </div>
  );
}

export default App;