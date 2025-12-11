import { MapPin, Clock, Calendar, Navigation, Zap } from 'lucide-react';

const locations = [
  { name: 'Centro da Cidade', price: '18€' },
  { name: 'Zona Norte', price: '22€' },
  { name: 'Zona Leste', price: '21€' },
  { name: 'Zona Oeste', price: '24€' },
  { name: 'Arredores', price: '26€' },
  { name: 'Subúrbios', price: '28€' },
  { name: 'Região Metropolitana', price: '32€' },
];

const additionalServices = [
  { icon: Clock, label: 'Extensão de tempo', value: '5€ por cada 30min adicionais' },
  { icon: Calendar, label: 'Horário fixo', value: '3€ por visita' },
  { icon: Clock, label: 'Visita noturna', value: '8€ por visita' },
  { icon: Zap, label: 'Reserva de emergência', value: '25€ (agendamento com 48h ou menos)' },
  { icon: Navigation, label: 'Taxa de deslocação', value: '0,50€/km acima de 5km' },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-teal-700 bg-white shadow-sm border border-teal-100 mb-4">
            Transparência total • sem surpresas
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Planos e Tarifas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-2">
            Pacote base com 45 minutos de cuidados premium
          </p>
          <p className="text-sm text-gray-500">
            Todas as tarifas incluem impostos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 lg:col-span-2" data-aos="fade-up" data-aos-delay="50">
            <div className="flex items-center mb-8">
              <MapPin className="w-6 h-6 text-teal-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Valores por Região</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 rounded-xl bg-gray-50 hover:bg-teal-50 transition-colors duration-200 border border-gray-100"
                >
                  <span className="text-gray-700 font-medium">{location.name}</span>
                  <span className="text-xl font-bold text-teal-600">{location.price}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-500 italic">
              Consulte-nos para regiões fora da cobertura padrão ou para contratos de longa duração com tarifas especiais.
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl shadow-2xl p-8 text-white relative overflow-hidden" data-aos="fade-up" data-aos-delay="120">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.08),transparent_30%),radial-gradient(circle_at_80%_0,rgba(255,255,255,.06),transparent_35%)]"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/20 border border-white/20 mb-4">
                Mais reservado
              </div>
              <h3 className="text-2xl font-bold mb-2">Pacote Essencial</h3>
              <p className="text-teal-100 mb-6 leading-relaxed">
                Visita completa com alimentação, higiene, brincadeiras e relatório com fotos.
              </p>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-extrabold">€18</span>
                <span className="text-sm text-teal-100">/ visita em regiões centrais</span>
              </div>
              <ul className="space-y-3 text-sm text-white">
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-2 h-2 rounded-full bg-white"></span>
                  Tempo mínimo de 45 minutos por visita
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-2 h-2 rounded-full bg-white"></span>
                  Relatório com fotos e checklist de cuidados
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-2 h-2 rounded-full bg-white"></span>
                  Cobertura para medicação oral e tópica
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-2 h-2 rounded-full bg-white"></span>
                  Descontos para planos semanais e mensais
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl shadow-xl p-8" data-aos="fade-up" data-aos-delay="50">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Serviços Adicionais</h3>
            <div className="space-y-4">
              {additionalServices.map((service, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <service.icon className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{service.label}</div>
                    <div className="text-gray-600">{service.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl shadow-xl p-8 text-white" data-aos="fade-up" data-aos-delay="120">
            <h3 className="text-2xl font-bold mb-6">Condições de Reserva</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="leading-relaxed">
                  Depósito de <strong>30% do total</strong> necessário para confirmar agendamento
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="leading-relaxed">
                  Para residências com <strong>2+ gatos</strong>, duração mínima é <strong>45 minutos</strong>
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="leading-relaxed">
                  Cancelamentos com 7 dias antecedência = reembolso total
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
