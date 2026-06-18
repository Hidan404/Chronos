import "./styles/theme.css";
import "./styles/global.css";

import { Heading } from "./components/Heading.tsx";
import { Timer } from "lucide-react";

function Titulo() {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="content">
            <p>Timer</p>
          </div>
        </div>
        <div className="container">
          <div className="content">
            <p>Home</p>
          </div>
        </div>
        <div className="container">
          <div className="content">
            <p>About</p>
          </div>
        </div>
        <div className="container">
          <div className="content">
            <p>contato</p>
          </div>
        </div>
      </div>
    </>
  );
}

export { Titulo };
