import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';

// components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";


// pages
import Home from "./pages/Home";
import Events from "./pages/Events";
import Profile from "./pages/Profile";

// style
import './App.css';
import AuthModalProvider from './context-store/AuthModalProvider';

function App() {

    return (
        <Fragment>
            <AuthModalProvider>
                <Header />
                <Routes>
                    <Route path='/' element={
                        <Home />
                    } />
                    <Route path='/events/:eventsName' element={
                        <Events />
                    } />
                    <Route path='/profile' element={
                        <Profile />
                    } />
                </Routes>
                <Footer />
            </AuthModalProvider>
        </Fragment>
    );
}

export default App;
