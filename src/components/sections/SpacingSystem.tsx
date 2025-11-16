import { Card } from "@/components/ui/card";

export function SpacingSystem() {
  const spacingScale = [
    { value: "2", px: "8px", usage: "Tight spacing" },
    { value: "3", px: "12px", usage: "Close elements" },
    { value: "4", px: "16px", usage: "Default gap" },
    { value: "6", px: "24px", usage: "Section spacing" },
    { value: "8", px: "32px", usage: "Large gaps" },
    { value: "12", px: "48px", usage: "Section breaks" },
    { value: "16", px: "64px", usage: "Major sections" },
  ];

  const elevationLevels = [
    { name: "Flat", shadow: "shadow-none", description: "No elevation" },
    { name: "Card", shadow: "shadow", description: "Level 1 - Cards" },
    { name: "Dropdown", shadow: "shadow-md", description: "Level 2 - Dropdowns" },
    { name: "Modal", shadow: "shadow-lg", description: "Level 3 - Modals" },
    { name: "Popover", shadow: "shadow-xl", description: "Level 4 - Popovers" },
  ];

  const radiusScale = [
    { name: "Small", class: "rounded-sm", value: "4px" },
    { name: "Default", class: "rounded", value: "8px" },
    { name: "Medium", class: "rounded-md", value: "8px" },
    { name: "Large", class: "rounded-lg", value: "12px" },
    { name: "XL", class: "rounded-xl", value: "16px" },
    { name: "Full", class: "rounded-full", value: "9999px" },
  ];

  return (
    <section id="spacing" className="mb-24 animate-fade-up">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Spacing & Layout</h2>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Consistent spacing creates visual rhythm and hierarchy. Our 8px grid system ensures 
          harmonious layouts across all screen sizes.
        </p>
      </div>

      {/* Spacing Scale */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6">Spacing Scale</h3>
        <Card className="p-8">
          <div className="space-y-6">
            {spacingScale.map((item) => (
              <div key={item.value} className="flex items-center gap-4">
                <div className="w-24 text-sm font-mono text-muted-foreground">
                  {item.px}
                </div>
                <div 
                  className="bg-primary h-8 rounded transition-all hover:bg-primary-hover"
                  style={{ width: item.px }}
                />
                <div className="text-sm text-muted-foreground">{item.usage}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Elevation */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6">Elevation & Shadows</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {elevationLevels.map((level) => (
            <Card key={level.name} className={`p-6 ${level.shadow}`}>
              <div className="h-16 bg-gradient-primary rounded-lg mb-4" />
              <h4 className="font-semibold mb-1">{level.name}</h4>
              <p className="text-xs text-muted-foreground">{level.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Border Radius */}
      <div>
        <h3 className="text-2xl font-semibold mb-6">Border Radius</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {radiusScale.map((radius) => (
            <Card key={radius.name} className="p-6">
              <div className={`h-20 bg-primary ${radius.class} mb-4`} />
              <h4 className="font-semibold mb-1">{radius.name}</h4>
              <p className="text-xs text-muted-foreground font-mono">{radius.value}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
