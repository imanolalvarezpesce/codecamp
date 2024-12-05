import React, { useState, useEffect } from "react";
import "./App.css"; // Importa el CSS personalizado

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [bgColor, setBgColor] = useState("#f0f8ff");

  // Función para obtener una cita aleatoria
  const fetchQuote = () => {
    const quotes = [
      { text: "La vida es lo que pasa mientras estás ocupado haciendo otros planes.", author: "John Lennon" },
      { text: "La imaginación lo es todo.", author: "Albert Einstein" },
      { text: "No cuentes los días, haz que los días cuenten.", author: "Muhammad Ali" }
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomColor = getRandomColor(); // Obtiene un color aleatorio
    setQuote(quotes[randomIndex].text);
    setAuthor(quotes[randomIndex].author);
    setBgColor(randomColor); // Cambia el color de fondo
  };

  // Función para obtener un color aleatorio de la lista
  const getRandomColor = () => {
    const colors = ["#FFADAD", "#FFD6A5", "#FDFFB6", "#CAFFBF", "#9BF6FF", "#A0C4FF", "#BDB2FF", "#FFC6FF"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Cargar una cita al inicio
  useEffect(() => {
    fetchQuote();
  }, []);  // Solo se ejecuta una vez al cargar la aplicación

  return (
    <div
      style={{ backgroundColor: bgColor, transition: "background-color 0.5s ease-in-out" }}
      className="container text-center d-flex justify-content-center align-items-center min-vh-100"
    >
      <div className="quote-content p-5 rounded shadow-lg">
        <p id="text" className="lead fade-in">{quote}</p>
        <p id="author" className="font-italic fade-in">— {author}</p>
        <button id="new-quote" className="btn btn-primary mt-3" onClick={fetchQuote}>
          Nueva cita
        </button>
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" — ${author}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-info mt-3 ml-2"
        >
          Tuitear
        </a>
      </div>
    </div>
  );
};

export default App;
