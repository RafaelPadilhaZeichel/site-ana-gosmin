import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-darkgreen text-white pt-16 pb-8 w-full relative z-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Coluna 1: Logo e Sobre */}
          <div className="flex flex-col items-start">
            <div className="bg-brand-bg p-3 rounded-xl inline-block mb-6">
              <Image
                src="/logo/Marca.jpeg"
                alt="Ana Gosmin Nutricionista"
                width={120}
                height={40}
                className="object-contain mix-blend-multiply"
              />
            </div>
            {/* Opacidade aumentada de /70 para /85 para melhor contraste */}
            <p className="text-white/85 text-sm leading-relaxed max-w-xs">
              Ajudando você a redefinir seu estilo de vida sem restrições. Nutrição clínica e comportamental focada em resultados reais e duradouros.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6 text-brand-lightgreen">Menu Rápido</h3>
            {/* Opacidade aumentada de /90 para /95 (quase branco puro) */}
            <ul className="space-y-3 text-white/95 text-sm">
              <li><Link href="#sobre" className="hover:text-brand-lightgreen transition-colors">Conheça a Nutri</Link></li>
              <li><Link href="#especialidades" className="hover:text-brand-lightgreen transition-colors">Especialidades</Link></li>
              <li><Link href="#metodo" className="hover:text-brand-lightgreen transition-colors">Como Funciona</Link></li>
              <li><Link href="#faq" className="hover:text-brand-lightgreen transition-colors">Dúvidas</Link></li>
              <li><Link href="#receitas" className="hover:text-brand-lightgreen transition-colors">E-book</Link></li>
              <li><Link href="#community" className="hover:text-brand-lightgreen transition-colors">Comunidade</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Contato e Local */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6 text-brand-lightgreen">Contato & Local</h3>
            <ul className="space-y-4 text-white/95 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-lightgreen shrink-0" />
                <div>
                  <span className="font-bold text-white block mb-1 uppercase tracking-wider text-xs">Atendimento Online</span>
                  <p>Florianópolis - SC</p>
                </div>
              </li>
              
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-lightgreen shrink-0" />
                <span>(48) 98824-6141</span>
              </li>
              
              <li>
                <a 
                  href="mailto:nutri.anagosmin@gmail.com?subject=Contato pelo Site"
                  className="flex items-center gap-3 hover:text-brand-lightgreen transition-colors group"
                >
                  <Mail className="w-5 h-5 text-brand-lightgreen shrink-0 group-hover:scale-110 transition-transform" />
                  <span>nutri.anagosmin@gmail.com</span>
                </a>
              </li>

              <li className="flex items-center gap-3 mt-6">
                <a 
                  href="https://www.instagram.com/nutri.anagosmin?igsh=MWJmazVsbzlreXdv"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-mediumgreen hover:-translate-y-1 transition-all duration-300 group"
                  aria-label="Siga-nos no Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-white group-hover:scale-110 transition-transform"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha de Copyright */}
        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Opacidade aumentada de /50 para /80 para passar no teste de contraste */}
          <p className="text-white/80 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Ana Gosmin. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}