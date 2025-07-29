import { useParams } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import { useEffect, useState } from 'react';

export default function ExportPDF() {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simuler un appel API avec un délai
  useEffect(() => {
    setLoading(true);
    setError(null);

    // Données simulées (mock)
    const mockPatients = [
      { id: 1, name: 'Fatou Ndiaye', creatinine: 210, bloodPressure: '160/100', weightChange: '+2kg' },
      { id: 2, name: 'Oumar Diallo', creatinine: 95, bloodPressure: '130/85', weightChange: '-4kg' },
    ];

    // Simuler recherche patient après 1s
    setTimeout(() => {
      const found = mockPatients.find((p) => p.id === Number(id));
      if (found) {
        setPatient(found);
        setLoading(false);
      } else {
        setError('Patient non trouvé');
        setLoading(false);
      }
    }, 1000);
  }, [id]);

  function generatePDF() {
    if (!patient) return;
    const doc = new jsPDF();
    doc.text(`Dossier patient : ${patient.name}`, 10, 10);
    doc.text(`Créatinine : ${patient.creatinine}`, 10, 20);
    doc.text(`Tension artérielle : ${patient.bloodPressure}`, 10, 30);
    doc.text(`Changement de poids : ${patient.weightChange}`, 10, 40);
    doc.save(`${patient.name}-dossier.pdf`);
  }

  if (loading) return <p>Chargement du patient...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Exporter PDF - {patient.name}</h1>
      <button onClick={generatePDF}>Télécharger PDF</button>
    </div>
  );
}

