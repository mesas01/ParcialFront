// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ClinicaList from './components/ClinicaList';
import ClinicaForm from './components/ClinicaForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <BrowserRouter>

            <div className="min-vh-100 d-flex flex-column justify-content-center bg-light py-5">
                <Routes>
                    <Route path="/" element={<ClinicaList />} />
                    <Route path="/clinicas" element={<ClinicaList />} />
                    <Route path="/add-clinica" element={<ClinicaForm />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;