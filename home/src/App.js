import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import LoginPage from './components/LoginPage';
import LoginSchool from './login/loginSchool';
import LoginTeacher from './login/loginTeach';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="vh-100 d-flex flex-column">
                <Header />
                <HeroSection />
              </div>
              <AboutSection />
            </div>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};


export default App;
