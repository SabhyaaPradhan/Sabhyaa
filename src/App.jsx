import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";

const About = React.lazy(() => import("./About"));
const Tech = React.lazy(() => import("./Tech"));
const Works = React.lazy(() => import("./Works"));
const Contact = React.lazy(() => import("./Contact"));
const StarsCanvas = React.lazy(() => import("./StarsCanvas"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/tech" component={Tech} />
            <Route path="/works" component={Works} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <div className="relative z-0">
            <Suspense fallback={<div>Loading...</div>}>
              <StarsCanvas />
            </Suspense>
          </div>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
