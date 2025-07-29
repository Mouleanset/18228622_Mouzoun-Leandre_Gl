import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashbord';
import PatientDetail from './Pages/PatientDetail'
import ExportPDF from './Pages/ExportPDF';
import ApiTest from './components/ApiTest';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/patient/:id" element={<PatientDetail />} />
        <Route path="/export/:id" element={<ExportPDF />} />
        <Route path="/api-test" element={<ApiTest />} />
      </Routes>
    </Router>
  );
}

export default App;
