import Image from "next/image";
import Link from "next/link";

// Componente de logo para la barra de navegación.
// Ajustado a un alto estándar (~32px) manteniendo proporción del SVG.
// Usa width/height para Next/Image y luego forzamos altura con Tailwind.
const Logo = () => {
  return (
    <Link
      href="/"
      aria-label="Inicio"
      className="inline-flex items-center group"
    >
      <Image
        src="/logo.svg"
        alt="Logo"
        width={120}   // ancho estimado; Next necesita width/height
        height={120}   // alto base; se sobreescribe visualmente con h-8 si difiere
        priority
        className="h-8 w-auto object-contain select-none shrink-0 transition-opacity group-hover:opacity-80"
      />
    </Link>
  );
};

export default Logo;