import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ColorSystem } from "@/components/sections/ColorSystem";
import { TypographySystem } from "@/components/sections/TypographySystem";
import { SpacingSystem } from "@/components/sections/SpacingSystem";
import { ComponentShowcase } from "@/components/sections/ComponentShowcase";
import { InteractivePlayground } from "@/components/sections/InteractivePlayground";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, Layers } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar open={sidebarOpen} onOpenChange={setSidebarOpen} />
        
        <main className="flex-1 overflow-auto">
          {/* Top Bar */}
          <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border">
            <div className="container max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="md:hidden"
                >
                  <Menu className="h-5 w-5" />
                </Button>
                <div className="hidden md:flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                    <Layers className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-sm">Design System</h2>
                  </div>
                </div>
              </div>
              <ThemeToggle />
            </div>
          </div>

          {/* Content */}
          <div className="container max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
            <HeroSection />
            <ColorSystem />
            <TypographySystem />
            <SpacingSystem />
            <ComponentShowcase />
            <InteractivePlayground />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
