import React, { useState } from 'react';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import './App.css';
import jsPDF from 'jspdf';
import htmlToImage from 'html-to-image';

import Certificate from "./Certificate";
import MainPage from "./MainPage";

function App() {
    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [file, setFile] = useState(null);

    const handleChange = e => setName(e.target.value);
    const handleFileChange = e => {
        setImg(e.target.files);
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = event => {
            setFile(event.target.result)
        }
    };

    const printDocument = () => {
        let node = document.getElementById('print');

        htmlToImage.toPng(node)
            .then(function (dataUrl) {
                let img = new Image();
                img.src = dataUrl;
                const pdf = new jsPDF("l", "mm", "a4");
                pdf.addImage(img, 'PNG', 0, 0, 297, 210);
                pdf.save(`${name}.pdf`);
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
    };

    return (
        <Router>
            <Route exact path="/">
                <MainPage
                    name={name}
                    onNameChange={handleChange}
                    file={img}
                    onFileChange={handleFileChange}
                    print={printDocument}
                />
                { (img && file) && <Certificate img={file} name={name}/> }
            </Route>
        </Router>
    );
}

export default App;
