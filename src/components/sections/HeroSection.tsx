import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="foundations" className="mb-24 animate-fade-up">
      <div className="relative overflow-hidden rounded-2xl p-12 md:p-16 gradient-hero text-white shadow-xl">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Interactive Design System</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Complete UI/UX Design System
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
            A comprehensive, interactive guide to building beautiful, accessible interfaces. 
            Experiment with components, customize properties, copy code snippets, and switch between light and dark themes.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("playground")}
              className="bg-white text-primary hover:bg-white/90 shadow-lg"
            >
              Try Interactive Playground
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection("colors")}
              className="border-white text-white hover:bg-white/10 backdrop-blur-sm"
            >
              Explore Foundations
            </Button>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
