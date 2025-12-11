import { Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-emerald-50 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,.25),transparent_45%),radial-gradient(circle_at_20%_20%,rgba(59,130,246,.18),transparent_35%),radial-gradient(circle_at_80%_0,rgba(14,165,233,.16),transparent_30%)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center mb-10" data-aos="fade-up">
              <div className="cat-anim">
                <div className="ear ear--left"></div>
                <div className="ear ear--right"></div>
                <div className="face">
                  <div className="eye eye--left">
                    <div className="eye-pupil"></div>
                  </div>
                  <div className="eye eye--right">
                    <div className="eye-pupil"></div>
                  </div>
                  <div className="muzzle"></div>
                </div>
              </div>
            </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight" data-aos="fade-up" data-aos-delay="150">
            WhiskerCare
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            Serviço Premium de Cuidados Felinos
          </p>

          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="250">
            Proteção total para seu gato enquanto você viaja. Visitas diárias com atenção especializada e monitoramento contínuo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-aos="fade-up" data-aos-delay="300">
            <a
              href="#pricing"
              className="inline-flex items-center px-8 py-4 bg-teal-600 text-white text-lg font-semibold rounded-full hover:bg-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Conheça os Planos
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-teal-600 text-lg font-semibold rounded-full hover:bg-gray-50 transition-all duration-200 border-2 border-teal-600"
            >
              <Heart className="w-5 h-5 mr-2" />
              Agendar Visita
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-white/80 border border-white shadow-lg" data-aos="fade-up" data-aos-delay="0">
              <div className="text-4xl font-bold text-teal-600 mb-2">45min</div>
              <div className="text-gray-600">Tempo mínimo garantido</div>
            </div>
            <div className="p-6 rounded-2xl bg-white/80 border border-white shadow-lg" data-aos="fade-up" data-aos-delay="75">
              <div className="text-4xl font-bold text-teal-600 mb-2">500+</div>
              <div className="text-gray-600">Gatos cuidados</div>
            </div>
            <div className="p-6 rounded-2xl bg-white/80 border border-white shadow-lg" data-aos="fade-up" data-aos-delay="150">
              <div className="text-4xl font-bold text-teal-600 mb-2">+10</div>
              <div className="text-gray-600">Anos de experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
