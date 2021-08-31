import { Route } from 'react-router-dom';
import Home from "./home/home"
import About from "./about/about"
import Credits from "./credits/credits";
import Films from "../components/films/films"

const Routes = () => {
    return  (
     <>
        <Route
          exact
          path="/"
          render={() => <Home />}
        />
        <Route
          path="/films"
          render={() => <Films />}
        />
         <Route
          path="/about"
          render={() => <About />}
          />
          <Route 
          exact={true}
          path="/credits"
          render={() => <Credits />}
        />
      </>
      );  
};

export default Routes;