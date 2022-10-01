import './App.css';
import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import NotFoundPage from './components/NotFoundPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
