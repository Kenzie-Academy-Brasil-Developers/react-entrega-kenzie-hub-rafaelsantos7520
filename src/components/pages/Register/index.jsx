import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "./../../Form/index";
import { ParagrafoErro } from "./../../ParagrafoErro/index";
import { api } from "../../../services/api";
import logo from "../../../assets/img/Logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RegisterSchema } from "./registerSchema";
import { NavBar } from "../../NavBar";
import { SubmitButton } from "./../../Button/index";
import { LinkContainer } from "../../Link";
import { Headline, Titulo1 } from "../../styles/Textos";

export const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterSchema),
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      // eslint-disable-next-line no-unused-vars
      const response = await api.post("users", data);
      toast.success("Cadastro realizado com Sucesso");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <NavBar>
        <img src={logo} alt="logo kenzie hub" />
        <LinkContainer rota="/">voltar</LinkContainer>
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
        <SubmitButton type="submit" disabled={loading}>
          {loading ? "cadastrando..." : "Cadastre-se"}
        </SubmitButton>
      </Form>
    </div>
  );
};
