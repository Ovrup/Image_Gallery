import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './headerComponent';
import Fluid1 from './firstFluid';
import Fluid2 from './secondFluid';
import Fluid3 from './thirdFluid';
import Column from './columnsComponent';
import Message from './messageComponent';

// Main component that mounts all child components & uses react router to navigate between different components

function Main() {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path='/fluid1' element={<Fluid1 />} />
                <Route exact path='/fluid2' element={<Fluid2 />} />
                <Route exact path='/fluid3' element={<Fluid3 />} />
                <Route path='/columns' element={<Column />} />
                <Route path='/message' element={<Message />} />
                <Route path='/' element={<Navigate replace to='/fluid1' />} />
            </Routes>
        </>
    );
}

export default Main;