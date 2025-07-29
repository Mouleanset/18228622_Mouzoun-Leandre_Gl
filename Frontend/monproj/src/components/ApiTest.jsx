// src/components/ApiTest.jsx
import { useEffect, useState } from 'react';

export default function ApiTest() {
  const [response, setResponse] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/ping') // adapte l'URL si ton backend est ailleurs
      .then((res) => res.json())
      .then((data) => setResponse(data.message))
      .catch(() => setResponse('Erreur de connexion API'));
  }, []);

  return (
    <div>
      <h2>Test de connexion API</h2>
      <p>{response}</p>
    </div>
  );
}
