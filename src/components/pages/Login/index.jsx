import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "./../../Form/index";
import { ParagrafoErro } from "../../ParagrafoErro";
import logo from "../../../assets/img/Logo.png";
import { api } from "../../../services/api.js";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Loginschema } from "./loginSchema";
import { NavBar } from "../../NavBar";
import { SubmitButton } from "../../Button";
import { LinkContainer } from "../../Link";
import { Headline, Titulo1 } from "../../styles/Textos";

export const Login = ({ setUser }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Loginschema),
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("sessions", data);
      window.localStorage.setItem("@TOKEN", response.data.token);
      window.localStorage.setItem("@USERID", response.data.user.id);
      setUser(response.data.user);
      navigate("/Dashboard");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar>
        <img src={logo} alt="logo kenzie hub" />
      </NavBar>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Titulo1>Login</Titulo1>
        <label htmlFor="email">E-mail</label>
        <input
          placeholder="Email"
          id="email"
          type="email"
          {...register("email")}
        />
        <ParagrafoErro>{errors.email?.message}</ParagrafoErro>
        <label htmlFor="password">Password</label>
        <input
          placeholder="senha"
          id="password"
          type="password"
          {...register("password")}
        />
        <ParagrafoErro>{errors.password?.message}</ParagrafoErro>
        <SubmitButton type="submit" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </SubmitButton>
        <Headline>Ainda não possui conta?</Headline>
        <LinkContainer classe="btnCadastrar" rota="/register">
          Cadastrar
        </LinkContainer>
      </Form>
    </>
  );
};
