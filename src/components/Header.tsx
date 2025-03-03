import React from "react";

function Header() {
  return (
    <header className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="">
          <span className="font-bold text-lg">VRL</span> Audio visual
        </h1>
        {/* Adicione a logo aqui se você tiver uma */}
        <nav className="">
          <ul className="flex flex-1 space-x-4 list-none">
            <li>
              <a href="#quem-somos" className=" hover:text-purple-300">
                Quem Somos
              </a>
            </li>
            <li>
              <a href="#servicos" className="hover:text-purple-300">
                Serviços
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:text-purple-300">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
