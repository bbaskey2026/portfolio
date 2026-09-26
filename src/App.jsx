import React from 'react';
import AppRoutes from './routes';
import ScrollToTop from './components/common/ScrollToTop';
import CustomCursor from './components/common/CustomCursor';

function App() {
  return (
    <>
      <CustomCursor />
      <ScrollToTop />
      <AppRoutes />
    </>
  );
}

export default App;