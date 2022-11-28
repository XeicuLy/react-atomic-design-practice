import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Top } from '../components/pages/top';
import { Users } from '../components/pages/Users';
import { DefaultLayout } from '../components/templates/DefaultLayout';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <DefaultLayout>
              <Top />
            </DefaultLayout>
          }
        />
        <Route
          path='/users'
          element={
            <DefaultLayout>
              <Users />
            </DefaultLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
