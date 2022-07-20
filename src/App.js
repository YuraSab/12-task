import './App.css';
import React from "react";
import {BaseLayout} from "./layout";
import {Home} from "./pages";


function App() {



    return (
        <div>
            <BaseLayout>
                <Home/>
            </BaseLayout>
        </div>
    );
}

export default App;
