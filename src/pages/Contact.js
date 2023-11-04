import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [showAlert, setShowAlert] = useState(false); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        
        setShowAlert(true);

        
        setTimeout(() => {
            setShowAlert(false);
        }, 5000); 
    };

    return (
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-half">
                    <h1 className="title is-2">Deja tus datos para contactarnos en la brevedad.</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="field">
                            <label className="label">Nombre</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Correo Electrónico</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Mensaje</label>
                            <p className="subtitle is-6">Cuentanos tu experiencia en el apartado de mensajeria.</p>
                            <div className="control">
                                <textarea
                                    className="textarea"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <div className="control">
                                <button className="button is-primary" type="submit">
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </form>

                    {/* Renderizar la alerta si showAlert es true */}
                    {showAlert && (
                        <div className="notification is-success">
                            Gracias por enviar tu mensaje. Nos pondremos en contacto contigo pronto.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
