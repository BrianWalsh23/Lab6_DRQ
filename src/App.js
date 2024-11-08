import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Read from './components/Read';
import Create from './components/Create';

function App() {
  return (
    <Router> {/* Enable URL navigation */}
      <NavigationBar />  {/* Call navigationbar from components */}
      <Routes> {/* Manages different routes */}
        <Route path="/home" element={<Content />} />
        {/* Exercise 6 updated to Footer */}
        <Route path="/read" element={<h1><Read/></h1>} />
        {/* Exercise 6 updated to Header */}
        <Route path="/create" element={<h1><Create/></h1>} />
      </Routes>
    </Router>
  );
}

export default App;