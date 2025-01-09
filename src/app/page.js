"use client";

import Cards from "./components/Cards/cards";
import Header from "./components/Header/header";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const onclickMarineras = () => {
    router.push("/marineras")
  };

  const onclickMochilas = () => {
    router.push("/mochilas")
  };

  const onclickManijas = () => {
    router.push("/manijas")
  };

  const onclickFundas = () => {
    router.push("/fundas")
  };
  return (
    <div>
      <Header />
      <div>
        <div>
          <Cards
            image="/marineras.jpeg"
            description="Bolsitas Tipo Marineras"
            onClick={onclickMarineras}
          ></Cards>
        </div>
        <div>
          <Cards
            image="/mochilas.jpeg"
            description="Bolsitas Tipo Mochilas"
            onClick={onclickMochilas}
          ></Cards>
        </div>
        <div>
          <Cards
            image="/manijas.jpeg"
            description="Bolsitas Con Manijas"
            onClick={onclickManijas}
          ></Cards>
        </div>
        <div>
          <Cards
            image="/fundas.jpeg"
            description="Bolsitas Tipo Fundas"
            onClick={onclickFundas}
          ></Cards>
        </div>
      </div>
    </div>
  );
}
