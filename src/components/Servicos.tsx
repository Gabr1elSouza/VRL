import React from "react";

import { Antenna, AudioLines, Sun, TvMinimal } from "lucide-react";
import ImageCarousel from "./Components/imagemCarrosel";

const Servicos = () => {
  return (
    <div className="bg-blue-900 py-12 shadow-md" id="servicos">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mb-6">
          <div className="hover:shadow-lg p-5 rounded-lg">
            <i className="text-4xl mb-4 flex justify-center text-white">
              <Sun />
            </i>
            <h2 className="text-xl font-bold mb-2 text-zinc-300">ILUMINAÇÃO</h2>
            <p className="mb-4 text-zinc-400">
              Equipamentos de ponta, levando ao seu público o que há de mais
              inovador no mundo da iluminação.
            </p>
          </div>
          <div className="hover:shadow-lg p-5 rounded-lg">
            <i className=" text-4xl mb-4 flex justify-center text-white">
              <AudioLines />
            </i>
            <h2 className="text-xl font-bold mb-2 text-zinc-300">SOM</h2>
            <p className="mb-4 text-zinc-400">
              Equipamentos de nível internacional que atendem do pequeno ao
              grande evento.
            </p>
          </div>
          <div className="hover:shadow-lg p-5 rounded-lg">
            <i className="fas fa-th text-4xl mb-4 flex justify-center text-white">
              <TvMinimal />
            </i>
            <h2 className="text-xl font-bold mb-2 text-zinc-300">LED</h2>
            <p className="mb-4 text-zinc-400">
              Inove com a qualidade e tecnologia de painéis de led.
              Flexibilidade permite adaptá-los em qualquer cenário.
            </p>
          </div>

          <div className="hover:shadow-lg p-5 rounded-lg">
            <i className="fas fa-cubes text-4xl mb-4 flex justify-center text-white">
              <Antenna />
            </i>
            <h2 className="text-xl font-bold mb-2 text-zinc-300">
              TRANSMISSÃO
            </h2>
            <p className="mb-4 text-zinc-400">
              Para todos os tipos de eventos, Youtube, Webinar e Zoom.
            </p>
          </div>
        </div>
        <ImageCarousel />
      </div>
    </div>
  );
};

export default Servicos;
