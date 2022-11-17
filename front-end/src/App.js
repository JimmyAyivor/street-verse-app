import axios from "axios";
import { useState, useEffect } from "react";
const API = process.env.REACT_APP_API_URL;

console.log(API);
function App() {
  const [days, setDays] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/test`)
      .then(
        (response) => {
          setDays(response.data);
        },
        (error) => console.log("get", error)
      )
      .catch((c) => console.warn("catch", c));
  }, []);
  return (
    <div>
        <p className="text-3xl font-bold bg-[#06202A] text-white ">Hello World</p>
      <ul>
        {days.map((day) => (
          <li key={day.name}>{day.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
