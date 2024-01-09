import React, { Fragment, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

// components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";


// pages
import Home from "./pages/Home";
import Events from "./pages/Events";
import User from "./pages/User";
import EventsCategory from './pages/EventsCategory';

// style
import './App.css';
import AuthModalProvider from './context-store/AuthModalProvider';
import { useDispatch } from 'react-redux';
import { chechAuth } from './redux-store/user-slice';
import Contacts from './pages/Contacts';

function App() {

    const dispatch = useDispatch();

    useEffect(() => {

        if (localStorage.getItem("token")) {
            dispatch(chechAuth());
        }

    }, []);

    return (
        <Fragment>
            <AuthModalProvider>
                <Header />
                <Routes>
                    <Route path='/' element={
                        <Home />
                    } />
                    <Route path='/events' element={
                        <EventsCategory />
                    } />
                    <Route path="/contacts" element={
                        <Contacts />
                    } />
                    <Route path='/events/:eventsName' element={
                        <Events />
                    } />
                    <Route path='/user/*' element={
                        <User />
                    } />
                </Routes>
                <Footer />
            </AuthModalProvider>
        </Fragment>
    );
}

export default App;
