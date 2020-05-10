import React from "react";
import logo from './assets/icon.jpeg';
import moment from "moment";
import 'moment/locale/es';

moment.locale('es');

const Certificate = ({ img, name }) => {

    const style = {
        container: {
            display: 'flex',
            alignItems: 'center',
        },
        body: {
            border: 'dashed 1px lightgray',
            margin: '15px',
            padding: '20px',
        },
        name: {
            textDecoration: 'underline',
        },
    };

    return (
        <div style={style.container} className="hero is-fullheight">
            <div style={style.body}>
                <div className="columns has-text-centered">
                    <div className="column is-half">
                        <p className="title is-4">
                            Felíz día
                        </p>
                        <p className="subtitle is-6">
                            { moment(new Date(Date.now())).format('LL') }
                        </p>
                        <img className="is-rounded" src={logo} alt="NODO" width="30%"/>
                        <br/><br/>
                        <p className="subtitle is-5 is-spaced">
                            ¡Nos la estamos jugando toda!
                        </p>
                    </div>
                    <div className="column">
                        <img src={img} alt="imagen" width="50%"/>
                        <br/><br/>
                        <p className="title is-4 is-spaced">Concedido a: <span style={style.name}>{ name }</span></p>
                        <p className="subtitle">
                            Por todos sus méritos habidos y por haber, que son muchos e insuperables
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Certificate
