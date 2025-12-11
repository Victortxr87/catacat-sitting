import { Utensils, Sparkles, Heart, Pill, Camera, AlertCircle } from 'lucide-react';

const services = [
  {
    icon: Utensils,
    title: 'Refeições Personalizadas',
    description: 'Horários e porções adaptadas às necessidades nutricionais do seu felino',
  },
  {
    icon: Sparkles,
    title: 'Limpeza Completa',
    description: 'Manutenção de espaços limpos e higiênicos para máximo conforto',
  },
  {
    icon: Heart,
    title: 'Companhia e Brincadeiras',
    description: 'Tempo de qualidade dedicado ao comportamento e temperamento unique',
  },
  {
    icon: Pill,
    title: 'Administração de Remédios',
    description: 'Gestão cuidadosa de prescrições veterinárias conforme indicado',
  },
  {
    icon: Camera,
    title: 'Relatórios Diários',
    description: 'Atualizações com fotos e vídeos da rotina e bem-estar',
  },
  {
    icon: AlertCircle,
    title: 'Monitoramento Contínuo',
    description: 'Avaliação atenta de qualquer mudança no comportamento ou saúde',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-teal-700 bg-teal-50 border border-teal-100 mb-4">
            Cobertura completa para o dia a dia
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossos Serviços Incluem
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Atendimento completo e responsável para a felicidade do seu gato
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors duration-300 shadow-inner">
                <service.icon className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
