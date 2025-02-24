import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <CustomCursor />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;