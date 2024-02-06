import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "../pages/Main/Main";
import Stocks from "../pages/Stocks/Stocks";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/stocks" element={<Stocks/>}/>
            <Route path="*" element={<div>Page not found</div>}/>
        </Routes>
    );
};

export default Router;