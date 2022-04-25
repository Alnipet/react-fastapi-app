import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage, Layout } from '../../components';
import LoginPage from '../LoginPage/LoginPage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import RegistrationPage from '../RegistrationPage/RegistrationPage';
import { EuiProvider } from '@elastic/eui';


export default function App() {
  return (
    <EuiProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={ <LandingPage/> }/>
            <Route path="/login" element={ <LoginPage/> }/>
            <Route path="/profile" element={ <ProfilePage/> }/>
            <Route path="/registration" element={ <RegistrationPage/> }/>
            <Route path="*" element={ <NotFoundPage/> }/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </EuiProvider>
  );
}
