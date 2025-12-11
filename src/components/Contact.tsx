import { Mail, Phone, Instagram, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-teal-600 to-teal-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Comece Agora
          </h2>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Contate-nos para uma sessão de apresentação gratuita
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <a
            href="mailto:hello@whiskercare.pt"
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-200 group"
          >
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <div className="text-white font-semibold mb-1">Email</div>
            <div className="text-teal-100 text-sm">Mensagem rápida</div>
          </a>

          <a
            href="tel:+351960000000"
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-200 group"
          >
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <div className="text-white font-semibold mb-1">Telefone</div>
            <div className="text-teal-100 text-sm">Conversar</div>
          </a>

          <a
            href="https://instagram.com/whiskercare"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-200 group"
          >
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
              <Instagram className="w-7 h-7 text-white" />
            </div>
            <div className="text-white font-semibold mb-1">Instagram</div>
            <div className="text-teal-100 text-sm">Inspiração diária</div>
          </a>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <div className="text-white font-semibold mb-1">Cobertura</div>
            <div className="text-teal-100 text-sm">Região Metropolitana</div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-teal-100 text-sm">
            Resposta em 4 horas • Atendimento 7 dias por semana
          </p>
        </div>
      </div>
    </section>
  );
}
