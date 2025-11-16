import { Card } from "@/components/ui/card";

export function ColorSystem() {
  const brandColors = [
    { name: "Primary", class: "bg-primary", hsl: "230 65% 55%" },
    { name: "Secondary", class: "bg-secondary", hsl: "270 50% 60%" },
    { name: "Accent", class: "bg-accent", hsl: "190 75% 50%" },
  ];

  const semanticColors = [
    { name: "Success", class: "bg-success", hsl: "142 71% 45%" },
    { name: "Warning", class: "bg-warning", hsl: "38 92% 50%" },
    { name: "Error", class: "bg-error", hsl: "0 72% 51%" },
    { name: "Info", class: "bg-info", hsl: "199 89% 48%" },
  ];

  const neutralColors = [
    { name: "Background", class: "bg-background border", hsl: "210 20% 98%" },
    { name: "Card", class: "bg-card shadow-sm", hsl: "0 0% 100%" },
    { name: "Muted", class: "bg-muted", hsl: "210 20% 96%" },
    { name: "Border", class: "bg-border", hsl: "214 32% 91%" },
  ];

  return (
    <section id="colors" className="mb-24 animate-fade-up">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Color System</h2>
        <p className="text-lg text-muted-foreground max-w-3xl">
          A carefully crafted color palette designed for accessibility, consistency, and visual harmony. 
          All colors maintain a minimum 4.5:1 contrast ratio for WCAG AA compliance.
        </p>
      </div>

      {/* Brand Colors */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6">Brand Colors</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {brandColors.map((color) => (
            <Card key={color.name} className="p-6 hover:shadow-lg transition-smooth">
              <div className={`${color.class} h-24 rounded-lg mb-4 shadow-md`} />
              <h4 className="font-semibold text-lg mb-2">{color.name}</h4>
              <p className="text-sm text-muted-foreground font-mono">{color.hsl}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Semantic Colors */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6">Semantic Colors</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {semanticColors.map((color) => (
            <Card key={color.name} className="p-6 hover:shadow-lg transition-smooth">
              <div className={`${color.class} h-20 rounded-lg mb-4 shadow-md`} />
              <h4 className="font-semibold mb-2">{color.name}</h4>
              <p className="text-xs text-muted-foreground font-mono">{color.hsl}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Neutral Colors */}
      <div>
        <h3 className="text-2xl font-semibold mb-6">Neutral Colors</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {neutralColors.map((color) => (
            <Card key={color.name} className="p-6 hover:shadow-lg transition-smooth">
              <div className={`${color.class} h-20 rounded-lg mb-4`} />
              <h4 className="font-semibold mb-2">{color.name}</h4>
              <p className="text-xs text-muted-foreground font-mono">{color.hsl}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
