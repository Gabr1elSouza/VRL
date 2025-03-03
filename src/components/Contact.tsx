import { Instagram, Mail, Phone } from "lucide-react";
import React from "react";

function Contact() {
  return (
    <div className="text-white text-center p-6 shadow-md" id="contato">
      <h1 className="text-2xl font-bold">Contato</h1>
      <div className="flex flex-row justify-center text-center">
        <div className="hover:shadow-lg p-5 rounded-lg ">
          <i className=" text-4xl mb-4 flex justify-center text-white">
            <Mail />
          </i>
          <h2 className="text-xl font-bold mb-2 text-zinc-200">Email</h2>
          <p className="mb-4 text-zinc-400">email@email.com</p>
        </div>
        <div className="hover:shadow-lg p-5 rounded-lg">
          <a href="https://www.instagram.com/limavagner/">
            <i className=" text-4xl mb-4 flex justify-center text-white">
              <Instagram />
            </i>
            <h2 className="text-xl font-bold mb-2 text-zinc-200">Instagram</h2>
            <p className="mb-4 text-zinc-400">@limavagner</p>
          </a>
        </div>
        <div className="hover:shadow-lg p-5 rounded-lg">
          <a href="">
            <i className=" text-4xl mb-4 flex justify-center text-white">
              <Phone />
            </i>
            <h2 className="text-xl font-bold mb-2 text-zinc-200">Whatsapp</h2>
            <p className="mb-4 text-zinc-400">(71) 99999-9999</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
