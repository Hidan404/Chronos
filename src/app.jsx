import "./styles/theme.css";
import "./styles/global.css";

import { Container } from "./components/Container.tsx";
import {Logo} from "./components/Logo.tsx"

import { Heading } from "./components/Heading.tsx";
import { Timer } from "lucide-react";

function Titulo() {
  return (
    <>
      <div className="container-fluid">
        <Container>
          <Logo/>
        </Container>
        <Container>
          <Heading>Menu</Heading>
        </Container>
        
      </div>
    </>
  );
}

export { Titulo };
