import Image from "next/image";
import Footer from "../_components/footer";
import Navbar from "../_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background escalada para ocultar los bordes que generan halo blanco al aplicar blur */}
      <Image
        src="/hero.jpg"
        alt="Background"
        fill
        priority
        sizes="100vw"
        className="pointer-events-none select-none -z-10 object-cover object-center blur-sm scale-110"
      />
      {/* Overlay sutil para unificar el tono y reducir cualquier brillo residual */}
      <div className="absolute inset-0 -z-10 bg-black/30" />
      <Navbar />
      <main className="pt-40 pb-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;