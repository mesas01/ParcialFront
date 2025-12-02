import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ClinicaList from './components/ClinicaList';
import ClinicaForm from './components/ClinicaForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <BrowserRouter>
            <div className="bg-light min-vh-100">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm mb-4">
                    <div className="container">
                        <Link className="navbar-brand fw-bold fs-4" to="/">Sistema Clínico</Link>
                        <div className="navbar-nav">
                            <Link className="nav-link text-white" to="/clinicas">Listado</Link>
                            <Link className="nav-link text-white" to="/add-clinica">Nueva Clínica</Link>
                        </div>
                    </div>
                </nav>

                <div className="container">
                    <Routes>
                        <Route path="/" element={<ClinicaList />} />
                        <Route path="/clinicas" element={<ClinicaList />} />
                        <Route path="/add-clinica" element={<ClinicaForm />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;