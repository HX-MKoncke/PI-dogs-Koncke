import styles from "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./componets/LandingPage/LandingPage";
import Home from "./componets/Home/Home";
// import styles from '../src/'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className={styles.container}>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
