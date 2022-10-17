import { Form } from "../Form";
import { Titulo1 } from "../styles/Textos";
import { Button } from './../Button/index.jsx';
import { ModalContainer } from "./styled";

export const Modal = ({ onClose }) => {
  return (
    <ModalContainer>
        <div className="conteudoModal">
        <div className="headerModal">
        <Titulo1>Cadastrar Tecnologia</Titulo1>
        <Button variant={"buttonModal"} onClick={onClose} >
          X
        </Button>
      </div>
        <Form>
          <label htmlFor="nome">Nome</label>
          <input
            placeholder="nome tecnologia"
            id="nome"
            type="text"
            // {...register("name")}
          />
            <label htmlFor="nivelSelect">Selecionar status</label>
            <select id="nivelSelect" >
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
            </select>
            <Button variant={"submit"}>Cadastrar Tecnologia</Button>
        </Form>

        </div>

    </ModalContainer>
  );
};
