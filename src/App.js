import './App.css';
import Error from './Components/Error'
import Customer from './Components/CustomerList'
import Training from './Components/TrainingList'
import Home from './Components/Home'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Link to="/">Home</Link>{' '}
        <Link to="/cust">Customers</Link>{' '}
        <Link to="/train">Trainings</Link>{' '}

        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route path="/cust" element={ <Customer /> } />
          <Route path="/train" element={ <Training /> } />
          <Route path="*" element={ <Error /> } />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
