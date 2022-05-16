import React, { useState } from "react";
import Toast from "./components/Toast";

const App = () =>{
    const [show, setShow] = useState(false)

    const showToast = () =>{
        setShow(true)
    }

    const hideToast = () =>{
        setShow(false)
    }

    return(
        <div className="App">
            <Toast show={show} hideToast={hideToast}>
                Textos hehe
            </Toast>
            <a href="/#" onClick={showToast} className={`${show && 'disable'}`}>
                Mostrar a torrada
            </a>
        </div>
    )
}

export default App