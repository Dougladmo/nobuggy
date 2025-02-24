import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <CustomCursor />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;