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
        <div className="row">
            <div className="col-12">
                <div className="card shadow-sm border-0 rounded-3">
                    <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center border-bottom">
                        <h4 className="m-0 text-primary fw-bold">Listado General de Clínicas</h4>
                        <Link to="/add-clinica" className="btn btn-primary px-4 fw-bold">
                            + Agregar Clínica
                        </Link>
                    </div>
                    <div className="card-body p-0">
                        <div className="table-responsive">
                            <table className="table table-hover table-striped m-0 align-middle">
                                <thead className="table-light text-secondary">
                                <tr>
                                    <th className="py-3 ps-4">ID</th>
                                    <th className="py-3">Nombre</th>
                                    <th className="py-3">Dirección</th>
                                    <th className="py-3 text-center">Camas</th>
                                    <th className="py-3">Teléfono</th>
                                    <th className="py-3">Ciudad</th>
                                </tr>
                                </thead>
                                <tbody>
                                {clinicas.length > 0 ? (
                                    clinicas.map(clinica => (
                                        <tr key={clinica.identificador}>
                                            <td className="ps-4 fw-bold text-muted">#{clinica.identificador}</td>
                                            <td className="fw-bold text-dark">{clinica.nombre}</td>
                                            <td>{clinica.direccion}</td>
                                            <td className="text-center">
                                                    <span className="badge bg-primary rounded-pill px-3">
                                                        {clinica.cantidadCamas}
                                                    </span>
                                            </td>
                                            <td>{clinica.telefono}</td>
                                            <td>{clinica.ciudad}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="text-center py-5 text-muted">
                                            No hay clínicas registradas.
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClinicaList;