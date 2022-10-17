import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "./../../Form/index";
import { ParagrafoErro } from "./../../ParagrafoErro/index";
import logo from "../../../assets/img/Logo.png";
import { useState, useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import { RegisterSchema } from "./registerSchema";
import { NavBar } from "../../NavBar";
import { Headline, Titulo1 } from "../../styles/Textos";
import { UserContext } from "./../../../context/UserContext";
import { Button } from "../../Button/index.jsx";
import {Link } from "./../../Link/Index.jsx";

export const Register = () => {
  const { userRegister } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterSchema),
  });

  const onSubmit = async (data) => {
    userRegister(data, setLoading);
  };

  return (
    <div>
      <NavBar>
        <img src={logo} alt="logo kenzie hub" />
        <Link variant="LinkSmall" rota="/">voltar</Link>
      </NavBar>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Titulo1>Crie sua conta</Titulo1>
        <Headline>Rapido e grátis, vamos nessa</Headline>

        <label htmlFor="nome">Nome</label>
        <input
          placeholder="Digite aqui seu nome"
          id="nome"
          type="text"
          {...register("name")}
        />
        <ParagrafoErro>{errors.name?.message}</ParagrafoErro>

        <label htmlFor="email">E-mail</label>
        <input
          placeholder="Digite aqui seu email"
          id="email"
          type="email"
          {...register("email")}
        />
        <ParagrafoErro>{errors.email?.message}</ParagrafoErro>

        <label htmlFor="password">Senha</label>
        <input
          placeholder="Digite aqui sua senha "
          id="password"
          type="password"
          {...register("password")}
        />
        <ParagrafoErro>{errors.password?.message}</ParagrafoErro>

        <label htmlFor="confirPassword">Confirmar sua senha</label>
        <input
          placeholder="Digite novamente sua senha"
          id="confirmPassword"
          type="password"
          {...register("confirmPassword")}
        />
        <ParagrafoErro>{errors.confirmPassword?.message}</ParagrafoErro>

        <label htmlFor="bio">Bio</label>
        <input
          placeholder="Fale mais sobre você"
          id="bio"
          type="text"
          {...register("bio")}
        />
        <ParagrafoErro>{errors.bio?.message}</ParagrafoErro>

        <label htmlFor="contato">Contato</label>
        <input
          placeholder="Opção de contato"
          id="contato"
          type="text"
          {...register("contact")}
        />
        <ParagrafoErro>{errors.contact?.message}</ParagrafoErro>

        <label htmlFor="moduloSelect">Selecionar módulo</label>
        <ParagrafoErro>{errors.course_module?.message}</ParagrafoErro>
        <select id="moduloSelect" type="text" {...register("course_module")}>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo
          </option>
        </select>
        <Button variant={"submit"} type="submit" disabled={loading}>
          {loading ? "cadastrando..." : "Cadastre-se"}
        </Button>
      </Form>
    </div>
  );
};
