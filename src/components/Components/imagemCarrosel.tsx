import React, { useState } from "react";

const ImageCarousel = () => {
  const [activeCard, setActiveCard] = useState("c1"); // Estado para controlar o cartão ativo

  const cards = [
    {
      id: "c1",
      title: "Iluminação",
      description: "Eventos corporativo",
      icon: "1",
      backgroundImage:
        "https://storage.googleapis.com/a1aa/image/GMxXuojxR5WwTcsKajpdpxr6FinMISXXg8jUjTIC6yM.jpg",
    },
    {
      id: "c2",
      title: "Som",
      description: "Sistema de Sonorização",
      icon: "2",
      backgroundImage:
        "https://via.placeholder.com/300/FF5733/FFFFFF?text=Back-end",
    },
    {
      id: "c3",
      title: "Transmissão",
      description: "Help people all over the world!",
      icon: "3",
      backgroundImage:
        "https://storage.googleapis.com/a1aa/image/GMxXuojxR5WwTcsKajpdpxr6FinMISXXg8jUjTIC6yM.jpg",
    },
  ];

  console.log("Cards carregados:", cards);

  return (
    <div className="flex items-center justify-center w-full bg-blue-900">
      <div className="flex flex-nowrap justify-start h-96">
        {cards.map((card) => (
          <div key={card.id} className="relative mx-2">
            <input
              type="radio"
              name="slice"
              id={card.id}
              className="hidden"
              checked={activeCard === card.id}
              onChange={() => setActiveCard(card.id)} // Atualiza o cartão ativo
            />
            <label
              htmlFor={card.id}
              className={`relative flex items-end w-20 h-full transition-all duration-600 ease-in-out transform rounded-2xl shadow-lg cursor-pointer hover:scale-105 ${
                activeCard === card.id ? "w-80" : "w-20"
              }`}
              style={{ 
                backgroundImage: `url('${card.backgroundImage}')`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat' 
              }}
            >
              <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-black/40 rounded-2xl">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full text-white">
                  {card.icon}
                </div>
                <h4
                  className={`mt-2 text-white uppercase transition-opacity duration-300 ${
                    activeCard === card.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {card.title}
                </h4>
                <p
                  className={`text-gray-300 transition-opacity duration-300 ${
                    activeCard === card.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {card.description}
                </p>
              </div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
