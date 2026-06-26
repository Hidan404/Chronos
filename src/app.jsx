import "./styles/theme.css";
import "./styles/global.css";

import { Container } from "./components/Container.tsx";
import {Logo} from "./components/Logo.tsx"
import {Menu} from "./components/Menu.tsx"
import {Countdown} from "./components/Countdown.tsx"
import {Formulario} from "./components/Formulario.tsx"

//import { Heading } from "./components/Heading.tsx";
import { Timer } from "lucide-react";

function Titulo() {
  return (
    <>
      <div className="container-fluid">
        <Container>
          <Logo/>
        </Container>
        <Container>
          <Menu/>

        </Container>
        <Container>
          <Countdown/>
        </Container>
        <Container>
          <Formulario labeltext="Task" required/>
        </Container>
      </div>
    </>
  );
}

export { Titulo };
