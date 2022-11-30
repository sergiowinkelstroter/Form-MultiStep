import "./App.css";

import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import { UserForm } from "./components/UserForm";
import { ReviewForm } from "./components/ReviewForm/ReviewForm";
import { Thanks } from "./components/Thanks/Thanks";
import { useForm } from "./hooks/useForm";
import { Steps } from "./components/Steps/Steps";
import { useState } from "react";

interface Data {
  name: string;
  email: string;
  review: string;
  comment: string;
}

export interface DataProps {
  data: Data;
  updateFielHandler: (key: string, value: string) => void;
}

interface UpdateFielHandlerProps {
  key: string;
  value: string;
}

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

export function App() {
  const [data, setData] = useState(formTemplate);

  const updateFielHandler = (key: string, value: string) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <UserForm data={data} updateFielHandler={updateFielHandler} />,
    <ReviewForm data={data} updateFielHandler={updateFielHandler} />,
    <Thanks data={data} updateFielHandler={updateFielHandler} />,
  ];

  const { currentComponent, currentStep, changeStep, isLastStep, isFirstStep } =
    useForm(formComponents);

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulario abaixo para
          avaliar o prroduto!
        </p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(e, currentStep + 1)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep && (
              <button
                type="button"
                onClick={(e) => changeStep(e, currentStep - 1)}
              >
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}
            {!isLastStep ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="submit">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
