import './App.css';
import { useState } from 'react';

function App() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
      const elements = document.querySelectorAll("p"); // Adjust this selector based on your HTML structure
      elements.forEach((element) => {
        const text = element.textContent;
        const newText = text.replace(
          new RegExp(searchTerm, "gi"),
          '<span style="background-color: yellow;">$&</span>'
        );
        element.innerHTML = newText;
      });
    };

    return (
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        {/* Add more paragraphs or elements as needed */}
      </div>
    );


}

export default App;
