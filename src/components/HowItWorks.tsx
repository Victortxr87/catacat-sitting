import { MessageCircle, CalendarCheck, CreditCard, Home } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    title: 'Consulta Inicial',
    description: 'Fale connosco sobre as necessidades e rotina do seu felino',
  },
  {
    icon: CalendarCheck,
    title: 'Confirmar Datas',
    description: 'Combine os detalhes de frequência e horários preferidos',
  },
  {
    icon: CreditCard,
    title: 'Confirmação',
    description: 'Efetue o pagamento de 30% para garantir o agendamento',
  },
  {
    icon: Home,
    title: 'Cuidados Premium',
    description: 'Receba atualizações regulares e máximo cuidado',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-teal-700 bg-teal-50 border border-teal-100 mb-4">
            Fluxo guiado
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Processo simples
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Começar é fácil. Apenas 4 passos até o seu gato ficar bem cuidado
          </p>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
              <div
                key={index}
                className="relative"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl flex items-center justify-center shadow-lg">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-teal-300 to-teal-200 -ml-4 -mr-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
