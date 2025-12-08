import ProductsHeroSection from "@/components/products/ProductsHeroSection";
import MagnetometersSection from "@/components/products/MagnetometersSection";
import SystemsSection from "@/components/products/SystemsSection";
import SoftwareSection from "@/components/products/SoftwareSection";
import ProductFamilyOverviewSection from "@/components/products/ProductFamilyOverviewSection";
import FindPerfectSolutionSection from "@/components/products/FindPerfectSolutionSection";

export const metadata = {
  title: "Products | QuBeats Quantum Sensing Systems",
  description:
    "Explore QuBeats quantum sensing products across magnetometers, RF platforms, software, and deployment-ready systems.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Wrapper with background image that extends to cover hero and magnetometer sections */}
      <div 
        className="relative bg-black"
        style={{ 
          backgroundImage: 'url(/images/products/bg-product.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll'
        }}
      >
        {/* Dark overlay for better contrast with smooth gradient fade to black */}
        <div 
          className="absolute inset-0 z-0"
          style={{ 
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.78) 50%, rgba(0,0,0,0.85) 70%, rgba(0,0,0,0.95) 85%, rgba(0,0,0,1) 100%)'
          }}
        />
        
        {/* Content sections */}
        <div className="relative z-10">
          <ProductsHeroSection />
          <MagnetometersSection />
        </div>
      </div>
      
      <SystemsSection />
      <SoftwareSection />
      <FindPerfectSolutionSection />
    </>
  );
}

