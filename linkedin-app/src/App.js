import './App.css';
import MyJumbotron from './components/MyJumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Container>

     <MyJumbotron />
    </Container>
      <Routes>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
