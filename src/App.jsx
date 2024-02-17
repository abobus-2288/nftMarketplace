import './App.module.scss'
import {Header} from "./components/Header/Header.jsx";
import {Route, Routes} from "react-router-dom";
import {Homepage} from "./pages/Homepage/Homepage.jsx";

import styles from './App.module.scss'

function App() {

    return (
        <>
            <Header/>

            <main>
                <div className={styles.cont}>
                    <Routes>
                        <Route path="/" element={<Homepage/>}/>
                    </Routes>
                </div>
            </main>
        </>
    )
}

export default App
