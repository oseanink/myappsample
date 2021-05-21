import { useState, useEffect } from "react";

const Name = () => {
  const [name, setName] = useState("");

  const [user, setUser] = useState("");

  useEffect(() => {
    const localData = localStorage.getItem("user");
    if (localData.length !== 0) {
      setUser(JSON.parse(localData));
    }
  }, [user]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(name);
    localStorage.setItem("user", JSON.stringify(name));
    setName("");
  };

  return (
    <div>
      <h1>Hello {user}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Enter name..."
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Name;
