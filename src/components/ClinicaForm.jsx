import React, { useState } from 'react';
import ClinicaService from '../services/ClinicaService';
import { useNavigate, Link } from 'react-router-dom';

const ClinicaForm = () => {
    const [nombre, setNombre] = useState('');
    const [direccion, setDireccion] = useState('');
    const [cantidadCamas, setCantidadCamas] = useState('');
    const [telefono, setTelefono] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [fechaCreacion, setFechaCreacion] = useState('');
    const navigate = useNavigate();

    const saveClinica = (e) => {
        e.preventDefault();
        const clinica = { nombre, direccion, cantidadCamas, telefono, ciudad, fechaCreacion };
        ClinicaService.createClinica(clinica)
            .then(response => navigate('/clinicas'))
            .catch(error => console.log(error));
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8">
                    <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
                        <div className="card-header bg-success text-white text-center py-4">
                            <h3 className="mb-0 fw-bold">Registrar Nueva Clínica</h3>
                        </div>
                        <div className="card-body p-5 bg-white">
                            <form>
                                <div className="mb-4">
                                    <label className="form-label fw-bold text-secondary">Nombre de la Clínica</label>
                                    <input type="text" className="form-control form-control-lg" placeholder="Ej. Clínica Central" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label fw-bold text-secondary">Dirección</label>
                                    <input type="text" className="form-control form-control-lg" placeholder="Ej. Av. Amazonas 123" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <label className="form-label fw-bold text-secondary">Cantidad de Camas</label>
                                        <input type="number" className="form-control form-control-lg" value={cantidadCamas} onChange={(e) => setCantidadCamas(e.target.value)} />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <label className="form-label fw-bold text-secondary">Teléfono</label>
                                        <input type="text" className="form-control form-control-lg" placeholder="099..." value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <label className="form-label fw-bold text-secondary">Ciudad</label>
                                        <input type="text" className="form-control form-control-lg" value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <label className="form-label fw-bold text-secondary">Fecha de Creación</label>
                                        <input type="date" className="form-control form-control-lg" value={fechaCreacion} onChange={(e) => setFechaCreacion(e.target.value)} />
                                    </div>
                                </div>

                                <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                                    <Link to="/clinicas" className="btn btn-outline-secondary btn-lg px-4 fw-bold">Cancelar</Link>
                                    <button className="btn btn-success btn-lg px-5 fw-bold shadow-sm" onClick={(e) => saveClinica(e)}>Guardar Clínica</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClinicaForm;