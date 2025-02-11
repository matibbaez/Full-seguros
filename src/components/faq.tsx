import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <div
      id="FAQ"
      className="w-full min-h-[50vh] bg-white flex flex-col items-center justify-center px-6 md:px-20 py-12"
    >
      <h2 className="mb-5 text-center text-3xl sm:text-5xl font-light leading-tight text-[#1a3855]">
        Preguntas <br />
        <span className="font-bold">Frecuentes</span>
      </h2>

      <Accordion type="single" collapsible className="w-full max-w-3xl text-left">
        {faqData.map(({ id, question, answer }) => (
          <AccordionItem key={id} value={id}>
            <AccordionTrigger className="text-[18px] sm:text-[20px] font-semibold text-[#1a3855] text-left">
              {question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 text-base sm:text-lg mt-2">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

const faqData = [
  {
    id: "item-1",
    question: "¿Pueden realizar este trabajo en particular?",
    answer: "Sí, realizamos este trabajo varias veces a la semana, a veces incluso varias veces al día.",
  },
  {
    id: "item-2",
    question: "He tenido malas experiencias antes, ¿me pasará lo mismo aquí?",
    answer: "En absoluto. Contamos con un historial comprobado de trabajos exitosos y clientes satisfechos. ¿No nos crees? Echa un vistazo a nuestras reseñas.",
  },
  {
    id: "item-3",
    question: "¿Cuándo estarán disponibles?",
    answer: "Nuestra disponibilidad cambia constantemente. Si estás interesado en trabajar con nosotros, contáctanos por correo electrónico o teléfono, ambos disponibles en nuestra página de contacto.",
  },
  {
    id: "item-4",
    question: "¿Cuánto cuesta el servicio?",
    answer: "El costo varía según el tipo de trabajo y sus requisitos específicos. Contáctanos para recibir un presupuesto personalizado sin compromiso.",
  },
  {
    id: "item-5",
    question: "¿Puedo personalizar mi solicitud?",
    answer: "Sí, nos adaptamos a tus necesidades específicas para garantizar que el servicio sea exactamente lo que buscas.",
  },
  {
    id: "item-6",
    question: "¿Ofrecen alguna garantía en su trabajo?",
    answer: "Sí, garantizamos la calidad de nuestro trabajo y ofrecemos soporte post-servicio en caso de cualquier inconveniente.",
  },
  {
    id: "item-7",
    question: "¿Cuánto tiempo tardan en responder a una consulta?",
    answer: "Generalmente respondemos en un plazo de 24 horas. Si tu consulta es urgente, recomendamos llamarnos directamente.",
  },
];

