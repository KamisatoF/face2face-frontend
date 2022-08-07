

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import ServiceCRUD from './pages/ServiceCRUD';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<ServiceCRUD />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
