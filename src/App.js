import './App.css';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import { Main } from './components/Main';
import { NotFoundPage } from './components/NotFoundPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
