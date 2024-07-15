import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import routes from './routes';

const isAuthenticated = (): boolean => {
  // Replace with your authentication logic
  return !!localStorage.getItem('token');
};

const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/signin" />;
};

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              route.isProtected ? (
                <PrivateRoute>
                  <route.component />
                </PrivateRoute>
              ) : (
                <route.component />
              )
            }
          />
        ))}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
