import { Cat, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjYTVmM2ZjIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <Cat className="w-16 h-16 text-teal-600" strokeWidth={1.5} />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            WhiskerCare
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto leading-relaxed">
            Serviço Premium de Cuidados Felinos
          </p>

          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Proteção total para seu gato enquanto você viaja. Visitas diárias com atenção especializada e monitoramento contínuo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">45min</div>
              <div className="text-gray-600">Tempo mínimo garantido</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">500+</div>
              <div className="text-gray-600">Gatos cuidados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">+10</div>
              <div className="text-gray-600">Anos de experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
