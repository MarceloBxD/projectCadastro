import { Routes as Rt, Route } from "react-router-dom";
import { Cadastro } from "../Cadastro/Cadastro";
import { Home } from "../Home/Home";

export const Routes = () => {
  return (
    <Rt>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Rt>
  );
};
