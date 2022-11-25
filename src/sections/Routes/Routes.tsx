import { Routes as Rts, Route } from "react-router-dom";
import { AfterLogin } from "../AfterLogin/AfterLogin";
import { Cadastro } from "../Cadastro/Cadastro";
import { PageNotFound } from "../PageNotFound/PageNotFound";
import { Home } from "../Home/Home";

export const Routes = () => {
  return (
        <Rts>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/afterLogin" element={<AfterLogin />} />
          <Route path="*" element={<PageNotFound />} />
        </Rts>
  );
};
