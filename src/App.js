import { Router, Route, Switch } from "wouter";
import "./App.css";

import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";

function App() {
  return (
    <Router base="/my-portfolio">
      <div className="app">
        <NavBar />

        <main className="content">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
            <Route path="/works" component={Works} />
            <Route path="/contact" component={Contact} />

            <Route>
              <section className="not-found">
                <h1>Page not found</h1>
                <p>The page you are looking for does not exist.</p>
              </section>
            </Route>
          </Switch>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;