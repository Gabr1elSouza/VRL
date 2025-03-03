import React from "react";

const QuemSomos = () => {
  return (
    <div className="flex items-center justify-center bg-blue-800 text-white" id="quem-somos">
      <div className="flex flex-col md:flex-row items-center p-20">
        <div className="md:w-1/2 p-4">
          <h1 className="text-4xl font-bold mb-4">QUEM SOMOS</h1>
          <p className="mb-6">
            Somos uma empresa baiana especializada na criação, desenvolvimento e
            execução de projetos audiovisuais com alta tecnologia e segurança.
            Atuamos no mercado há mais de 20 anos, atendendo clientes de todas
            as regiões do Brasil.
          </p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-sky-700">
            SAIBA MAIS
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 p-30">
          <img
            src="https://storage.googleapis.com/a1aa/image/GMxXuojxR5WwTcsKajpdpxr6FinMISXXg8jUjTIC6yM.jpg"
            alt="Close-up of light bulbs in a dark setting"
            className="rounded-lg"
            width="600"
            height="400"
          />
        </div>
      </div>
    </div>
  );
};

export default QuemSomos;
