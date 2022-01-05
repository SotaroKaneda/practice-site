import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <nav>
        <ul id="navigation">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <Switch>
              <Route exact path="/">
                <Home />
                </Route>
                <Route path="/about">
                  <About />
                  </Route>
                  </Switch>
        </ul>
    </nav>
</div>
  );
}

export default App;
