import React, { useState } from 'react';
import './App.css';
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

    return (
        <>
            <MainPage name={name} onNameChange={handleChange} file={img} onFileChange={handleFileChange}/>
            { (img && file) && <Certificate img={file} name={name}/> }
        </>
    );
}

export default App;
