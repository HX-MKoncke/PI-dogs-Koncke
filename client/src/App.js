import styles from "./App.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./componets/LandingPage/LandingPage";
import Home from "./componets/Home/Home";
import Detail from "./componets/Detail/Detail";
import CreateDog from "./componets/Post/CreateDog";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/dogs/:id" component={Detail} />
            <Route exact path="/dogs" component={CreateDog} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
