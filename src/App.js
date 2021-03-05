import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f03c06",
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
    </Router>
  );
}

export default App;
