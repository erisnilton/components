import { useState } from "react";
import "./App.scss";

import Button from "./components/button/Button";

function App() {
  const [type, setType] = useState("");

  return (
    <div>
      <h3>
        Botões básicos! <span>{type}</span>
      </h3>
      <div className="wapper">
        <Button color="primary"onClick={() => setType("primary")}>
          {" "}
          Primary
        </Button>
        <Button color="secondary" onClick={() => setType("secondary")}>
          {" "}
          Secondary{" "}
        </Button>
        <Button color="success"> Success </Button>
        <Button color="danger"> Danger </Button>
        <Button color="warning"> Warning </Button>
        <Button color="info">Info</Button>
        <Button color="light">Light</Button>
        <Button color="dark">Dark</Button>
      </div>

      <h3>Botões com Variações</h3>

      <div className="wapper">
        <Button color="primary" rounded>
          Primary Rounded
        </Button>
        <Button color="secondary" flat>
          {" "}
          Secondary Flat{" "}
        </Button>
        <Button color="success" rounded flat>
          {" "}
          Success Rounded Flat{" "}
        </Button>
        <Button color="danger" rounded>
          {" "}
          Danger Rounded{" "}
        </Button>
        <Button color="warning" flat>
          {" "}
          Warning Flat{" "}
        </Button>
        <Button color="info" rounded flat>
          Info Rounded Flat
        </Button>
        <Button color="light" rounded>
          Light Rounded
        </Button>
        <Button color="dark" flat rounded>
          Dark Flat Rounded
        </Button>
      </div>

      <h3>Botões com tamanhos</h3>
      <div className="wapper">
        <Button color="primary" size="sm">
          Enviar
        </Button>
        <Button color="secondary" size="md">
          {" "}
          Enviar{" "}
        </Button>
        <Button color="success" size="lg">
          {" "}
          Enviar{" "}
        </Button>
      </div>
    </div>
  );
}

export default App;
