import { Route } from 'react-router-dom';
import Home from "./home/home"
import About from "./about/about"
import Films from "../components/films"

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
      </>
      );  
};

export default Routes;