import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Мой первый сайт",
    short: "Мой первый сайт",
    description: "Мой первый сайт",
  },
  {
    id: 2,
    title: "Мой первый сайт",
    short: "Мой первый сайт",
    description: "Мой первый сайт",
  },
  {
    id: 3,
    title: "Мой первый сайт",
    short: "Мой первый сайт",
    description: "Мой первый сайт",
  },
];

export default function Featured() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div id="services" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/woman-horse.jpg"
          alt="Мой первый сайт"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Мой первый сайт</h3>
        <p className="text-2xl lg:text-4xl mb-10 text-neutral-900 leading-tight">
          Мой первый сайт
        </p>
        <div className="flex flex-col gap-4">
          {services.map((service) => (
            <div key={service.id} className="border border-neutral-200">
              <button
                onClick={() => setOpenId(openId === service.id ? null : service.id)}
                className="w-full flex justify-between items-center px-5 py-4 text-left bg-white hover:bg-neutral-50 transition-colors duration-200 cursor-pointer"
              >
                <div>
                  <span className="font-semibold text-neutral-900 uppercase tracking-wide text-sm">{service.title}</span>
                  <p className="text-neutral-500 text-sm mt-0.5">{service.short}</p>
                </div>
                <span className="text-2xl text-neutral-400 ml-4 select-none">
                  {openId === service.id ? "−" : "+"}
                </span>
              </button>
              {openId === service.id && (
                <div className="px-5 py-4 bg-neutral-50 border-t border-neutral-200 text-neutral-700 text-sm leading-relaxed">
                  {service.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
