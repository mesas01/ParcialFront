import React, { useEffect, useState } from 'react';
import ClinicaService from '../services/ClinicaService';
import { Link } from 'react-router-dom';

const ClinicaList = () => {
    const [clinicas, setClinicas] = useState([]);

    useEffect(() => {
        ClinicaService.getAllClinicas()
            .then(response => {
                setClinicas(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className="container">
            <div className="card shadow-lg border-0 rounded-3 overflow-hidden">
                <div className="card-header bg-primary text-white p-4 d-flex justify-content-between align-items-center">
                    <h3 className="mb-0 fw-bold">Gestión de Clínicas</h3>
                    <Link to="/add-clinica" className="btn btn-light btn-lg fw-bold shadow-sm">
                        + Nueva Clínica
                    </Link>
                </div>
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover mb-0 align-middle text-center">
                            <thead className="bg-dark text-white">
                            <tr>
                                <th className="py-3">ID</th>
                                <th className="py-3">Nombre</th>
                                <th className="py-3 text-start">Dirección</th>
                                <th className="py-3">Camas</th>
                                <th className="py-3">Teléfono</th>
                                <th className="py-3">Ciudad</th>
                            </tr>
                            </thead>
                            <tbody>
                            {clinicas.length > 0 ? (
                                clinicas.map(clinica => (
                                    <tr key={clinica.identificador}>
                                        <td className="fw-bold">#{clinica.identificador}</td>
                                        <td className="fw-semibold text-primary">{clinica.nombre}</td>
                                        <td className="text-start">{clinica.direccion}</td>
                                        <td><span className="badge bg-info text-dark rounded-pill px-3 py-2 fs-6">{clinica.cantidadCamas}</span></td>
                                        <td>{clinica.telefono}</td>
                                        <td>{clinica.ciudad}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center py-5 text-muted fs-4">
                                        No hay clínicas registradas aún.
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClinicaList;