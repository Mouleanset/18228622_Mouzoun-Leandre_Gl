import { useParams } from 'react-router-dom';
import ConsultationForm from '../components/ConsultationForm';

const patients = [
  { id: 1, name: 'Fatou Ndiaye', consultations: [] },
  { id: 2, name: 'Oumar Diallo', consultations: [] },
];

export default function PatientDetail() {
  const { id } = useParams();
  const patient = patients.find((p) => p.id === Number(id));

  if (!patient) return <p>Patient non trouvé</p>;

  return (
    <div className="container">
      <h1>Détails du patient : {patient.name}</h1>
      <ConsultationForm patientId={patient.id} />
      {/* Ici, on affichera aussi l’historique des consultations */}
    </div>
  );
}
