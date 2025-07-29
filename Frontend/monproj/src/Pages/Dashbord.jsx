import { Link } from 'react-router-dom';
import PatientCard from '../components/PatientCard';
import ApiTest from '../components/ApiTest';

const patients = [
  { id: 1, name: 'Fatou Ndiaye', creatinine: 210, bloodPressure: '160/100', weightChange: '+2kg' },
  { id: 2, name: 'Oumar Diallo', creatinine: 95, bloodPressure: '130/85', weightChange: '-4kg' },
];

export default function Dashboard() {
  return (
    <div className="container">
      <h1>Dashboard - Liste des patients</h1>
       <ApiTest /> 
      {patients.map((p) => (
        <Link key={p.id} to={`/patient/${p.id}`} style={{ textDecoration: 'none' }}>
          <PatientCard patient={p} />
        </Link>
      ))}
    </div>
  );
}
