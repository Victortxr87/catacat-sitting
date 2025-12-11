import { Cat } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center mb-4">
            <Cat className="w-8 h-8 text-teal-500 mr-2" />
            <span className="text-xl font-bold text-white">WhiskerCare</span>
          </div>

          <p className="text-center text-gray-400 mb-6 max-w-md">
            Serviço premium de cuidados felinos com dedicação e profissionalismo
          </p>

          <div className="border-t border-gray-800 pt-8 w-full text-center">
            <p className="text-sm text-gray-500">
              © 2025 WhiskerCare. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
