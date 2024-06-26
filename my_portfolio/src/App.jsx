import React from 'react';
import Main from './components/Main';
import Header from './components/Header';


const App = () => {
    return (
        <>
            <div className="w-full bg-[#0d1117] flex flex-col items-center">
                <Header />
                <Main />
            </div>
        </>
    )
}

export default App