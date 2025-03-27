import React, { useState } from 'react';
import axios from 'axios';

function SymptomChecker() {
  const [symptoms, setSymptoms] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCheckSymptoms = async () => {
    if (!symptoms.trim()) {
      setError('Please enter at least one symptom.');
      return;
    }
    
    console.log("Symptoms input:", symptoms); // Log the input symptoms

    setLoading(true);
    setError('');
    try {
      const response = await axios.post('/api/analysis', { symptoms: symptoms.split(',').map(symptom => symptom.trim()) });

      if (response.data.conditions && response.data.conditions.length > 0) {
        setResults(response.data.conditions);
      } else {
        setError('No conditions found for the provided symptoms.');
      }

      console.log("API response:", response.data); // Log the API response

    } catch (err) {
      console.error("Error response:", err); // Log the error response
      setError(err.response ? err.response.data.message : 'Error checking symptoms. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Symptom Checker</h1>
      <input
        type="text"
        placeholder="Enter symptoms (comma separated)"
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
      />
      <button onClick={handleCheckSymptoms} disabled={loading}>
        {loading ? 'Checking...' : 'Check Symptoms'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {results.length > 0 && (
        <div>
          <h2>Potential Conditions:</h2>
          <ul>
            {results.map((condition, index) => (
              <li key={index}>
                <strong>{condition.name}</strong>: {condition.description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SymptomChecker;
