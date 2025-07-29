import { useState } from 'react';

export default function ConsultationForm({ patientId }) {
  const [creatinine, setCreatinine] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const [weightChange, setWeightChange] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Consultation enregistrée pour patient ${patientId} : ${creatinine}, ${bloodPressure}, ${weightChange}`);
    // Ici, on pourra enregistrer dans une base ou state global
    setCreatinine('');
    setBloodPressure('');
    setWeightChange('');
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Ajouter une consultation</h2>
      <label>
        Créatinine (µmol/L) :
        <input type="number" value={creatinine} onChange={(e) => setCreatinine(e.target.value)} required />
      </label>
      <label>
        Tension artérielle (ex: 130/80) :
        <input type="text" value={bloodPressure} onChange={(e) => setBloodPressure(e.target.value)} required />
      </label>
      <label>
        Changement de poids (ex: +2kg, -1kg) :
        <input type="text" value={weightChange} onChange={(e) => setWeightChange(e.target.value)} required />
      </label>
      <button type="submit">Enregistrer</button>
    </form>
  );
}
