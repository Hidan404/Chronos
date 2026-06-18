import "./styles/theme.css";
import "./styles/global.css";

import { Heading } from "./components/Heading.tsx";
import { Timer } from "lucide-react"; 

function Titulo() {
  const nome = "Ronald";

  return (
    <div>
      <Heading >Ronald MAgnânimo<button><Timer/></button></Heading>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga unde
        nostrum itaque. Ipsa illum sapiente accusamus iusto, reiciendis
        repellendus sunt saepe exercitationem animi enim, error, possimus
        explicabo quis unde? Officia?
      </p>
    </div>
  );
}

export { Titulo };
