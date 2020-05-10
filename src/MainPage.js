import React from "react";
import logo from './assets/icon.jpeg';
import flower from './assets/flowerheart.jpg';
import './MainPage.css';

const MainPage = ({ name, onNameChange, file, onFileChange }) => {
    const style = {
        body: {
            backgroundColor: '#FCC8EA',
        },
        mainTitle: {
            color: '#96d5ff',
        },
        mainContent: {
            padding: '40px 0',
        },
        image: {
            position: 'absolute',
            width: 100,
            bottom: 0,
            right: 300,
        },
    };

    return (
        <div>
            <section className="hero is-fullheight">
                <div className="hero-head">
                    <header className="navbar">
                        <div className="container">
                            <div className="navbar-brand">
                                <div className="navbar-item">
                                    <p className="title is-6">RNJA - NODO TUNJA</p>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="columns">
                            <div className="column is-half is-offset-3">
                                <section style={style.mainContent} className="box">
                                    <div className="media">
                                        <div className="media-content has-text-centered">
                                            <h1 style={style.mainTitle} className="title is-2">
                                                Felíz Día de las Madres
                                            </h1>
                                            <img src={logo} alt='NODO TUNJA' width={'30%'}/>
                                            <img style={style.image} src={flower} alt='' width={'30%'}/>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div style={style.body} className="hero is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-4 is-offset-1">
                                <h2 className="title">
                                    ¡Nos la jugamos toda!
                                </h2>
                                <p>
                                    <strong>MAMÁ: </strong>
                                    es quien encuentra la felicidad donde yo la encuentro.
                                    Entiende lo que entiendo y porqué lo entiendo.
                                    Reza por mí incluso cuando nadie reza por mi sino yo mismo.
                                    Ve toda la belleza que yo veo a través de mis ojos.
                                    Esa es mi madre y me daría el mundo entero si pudiese tenerlo en sus manos.
                                </p>
                            </div>
                            <div className="column is-5 is-offset-1 has-text-centered">
                                <section className="box">
                                    <div className="media">
                                        <div className="media-content has-text-centered">
                                            <h6 className="title is-6">
                                                Crea el tuyo
                                            </h6>
                                            <div className="field">
                                                <input className="input" placeholder="Nombre" value={name} onChange={onNameChange}/>
                                            </div>
                                            <div className="field">
                                                <div className="file is-small is-right">
                                                    <label className="file-label">
                                                        <input className="file-input" type="file" onChange={onFileChange}/>
                                                        <span className="file-cta">
                                                            <span className="file-icon">
                                                                <i className="fas fa-upload"> </i>
                                                            </span>
                                                            <span className="file-label">
                                                                Sube una imagen...
                                                            </span>
                                                        </span>
                                                        <span className="file-name">
                                                            {file['0'] ? file['0'].name : ''}
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                            <button className="button is-primary is-fullwidth">
                                                Descargar
                                            </button>
                                        </div>
                                    </div>
                                </section>
                                { (name && file) &&
                                    <>
                                        <p className="title is-5">Previsualiza el resultado</p>
                                        <div className="indicator">
                                            <span> </span>
                                            <span> </span>
                                            <span> </span>
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage
