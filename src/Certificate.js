import React from "react";
import logo from './assets/icon.jpeg';
import moment from "moment";
import 'moment/locale/es';
import './Certificate.css';

moment.locale('es');

const Certificate = ({ img, name }) => {

    const style = {
        container: {
            display: 'flex',
            alignItems: 'center',
            height: '100vh',
        },
        body: {
            margin: '15px',
            padding: '90px 100px 0 100px',
            height: '100%',
        },
        name: {
            fontSize: '2rem',
            borderBottom: '#fe8395 1px solid',
            color: '#fe8395',
        },
    };

    return (
        <div style={style.container} className="hero is-fullheight">
            <div style={style.body} className="frame">
                <div className="columns has-text-centered">
                    <div className="column is-4 firstCol">
                        <p className="title is-4 text">
                            Felíz día
                        </p>
                        <p className="subtitle is-6 text">
                            { moment(new Date(Date.now())).format('LL') }
                        </p>
                        <div className="mainLogo">
                            <img className="is-rounded" src={logo} alt="NODO" width="50%"/>
                            <br/><br/>
                            <p className="subtitle is-6 is-spaced">
                                ¡Nos la estamos jugando toda!
                            </p>
                        </div>
                    </div>
                    <div className="column is-7">
                        <img className="picture" src={img} alt="imagen" width="70%"/>
                        <br/><br/>
                        <p className="title is-6 is-spaced">Concedido a: <span style={style.name}>{ name }</span></p>
                        <div className="description">
                            <p className="subtitle is-6">
                                Por todos sus méritos habidos y por haber, que son muchos e insuperables.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Certificate
