import './PatientCard.css'; // optionnel, ou style dans styles.css

export default function PatientCard({ patient }) {
  const isCreatinineHigh = patient.creatinine > 150;
  const isBloodPressureHigh = parseInt(patient.bloodPressure.split('/')[0]) > 140;

  return (
    <div className="card">
      <h2>{patient.name}</h2>
      <p>Créatinine : {patient.creatinine} µmol/L</p>
      <p>Tension artérielle : {patient.bloodPressure}</p>
      <p>Changement de poids : {patient.weightChange}</p>

      {(isCreatinineHigh || isBloodPressureHigh) && (
        <div className="alert">⚠️ Alerte : valeurs cliniques anormales</div>
      )}
    </div>
  );
}
