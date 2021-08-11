import { Route } from 'react-router-dom';
import Home from "./home/home"
import About from "./about/about"

const Routes = () => {
    return  (
     <>
        <Route
          exact
          path="/"
          render={() => <Home />}
        />
        <Route
          path="/about"
          render={() => <About />}
        />
      </>
      );  
};

export default Routes;