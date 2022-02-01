const getServices = () => [
  {
    title: "Free",
    price: "59",
    service: "Base",
    description: "Autodiagnóstico Básico",
    options: [
      "Alta en la plataforma",
      "Gestión del autodiagnóstico",
      "Lo registraremos y te notificaremos",
      "Sitio Web y Presencia en Internet",
      "Comercio Electrónico",
      "Gestión de procesos",
      "Servicios y herramientas de oficina virtual",
      "Comunicaciones seguras",
      "Ciberseguridad",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
  {
    title: "Pro",
    subheader: "MÁS POPULAR",
    price: "99",
    service: "Pro",
    description: "Autodiagnóstico Completo",
    options: [
      "Plan base incluido",
      "Consultoría inicial + estudio de necesidades",
      "Inicio de trabajos una vez aceptada la solicitud, sin necesidad de esperar a recibir la ayuda",
    ],
    buttonText: "Quiero este plan",
    buttonVariant: "contained",
  },
];

export default getServices;
