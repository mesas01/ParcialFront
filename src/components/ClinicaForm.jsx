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
            .then(() => navigate('/clinicas'))
            .catch(error => console.log(error));
    }

    return (
        <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9">
                <div className="card shadow-sm border-0 rounded-3">
                    <div className="card-header bg-white py-3 border-bottom">
                        <h4 className="m-0 text-primary fw-bold">Registrar Nueva Clínica</h4>
                    </div>
                    <div className="card-body p-4 p-md-5">
                        <form>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label fw-bold text-secondary">Nombre de la Clínica</label>
                                    <input type="text" className="form-control form-control-lg"
                                           placeholder="Ej. Clínica del Country"
                                           value={nombre} onChange={(e) => setNombre(e.target.value)} />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label fw-bold text-secondary">Dirección</label>
                                    <input type="text" className="form-control form-control-lg"
                                           placeholder="Ej. cll 125 # 12-43"
                                           value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                                </div>

                                <div className="col-md-4 mb-3">
                                    <label className="form-label fw-bold text-secondary">Cantidad de Camas</label>
                                    <input type="number" className="form-control form-control-lg"
                                           placeholder="Ej. 50"
                                           value={cantidadCamas} onChange={(e) => setCantidadCamas(e.target.value)} />
                                </div>

                                <div className="col-md-4 mb-3">
                                    <label className="form-label fw-bold text-secondary">Teléfono</label>
                                    <input type="text" className="form-control form-control-lg"
                                           placeholder="Ej. 123456"
                                           value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                                </div>

                                <div className="col-md-4 mb-3">
                                    <label className="form-label fw-bold text-secondary">Ciudad</label>
                                    <input type="text" className="form-control form-control-lg"
                                           placeholder="Ej. Bogotá"
                                           value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
                                </div>

                                <div className="col-12 mb-4">
                                    <label className="form-label fw-bold text-secondary">Fecha de Creación</label>
                                    <input type="date" className="form-control form-control-lg"
                                           value={fechaCreacion} onChange={(e) => setFechaCreacion(e.target.value)} />
                                </div>
                            </div>

                            <div className="d-flex justify-content-end gap-2 border-top pt-4">
                                <Link to="/clinicas" className="btn btn-light btn-lg px-4">Cancelar</Link>
                                <button className="btn btn-primary btn-lg px-5 fw-bold" onClick={(e) => saveClinica(e)}>Guardar Datos</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClinicaForm;