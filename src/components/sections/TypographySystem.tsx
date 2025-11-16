import { Card } from "@/components/ui/card";

export function TypographySystem() {
  const typographyScale = [
    { name: "Display", element: "h1", size: "text-5xl md:text-6xl", text: "The quick brown fox" },
    { name: "H1", element: "h1", size: "text-4xl md:text-5xl", text: "The quick brown fox" },
    { name: "H2", element: "h2", size: "text-3xl md:text-4xl", text: "The quick brown fox" },
    { name: "H3", element: "h3", size: "text-2xl md:text-3xl", text: "The quick brown fox jumps" },
    { name: "H4", element: "h4", size: "text-xl md:text-2xl", text: "The quick brown fox jumps over" },
    { name: "Body Large", element: "p", size: "text-lg", text: "The quick brown fox jumps over the lazy dog" },
    { name: "Body", element: "p", size: "text-base", text: "The quick brown fox jumps over the lazy dog" },
    { name: "Small", element: "p", size: "text-sm", text: "The quick brown fox jumps over the lazy dog" },
    { name: "Caption", element: "p", size: "text-xs", text: "The quick brown fox jumps over the lazy dog" },
  ];

  return (
    <section id="typography" className="mb-24 animate-fade-up">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Typography System</h2>
        <p className="text-lg text-muted-foreground max-w-3xl">
          A clear typographic hierarchy using a modular scale. Each level has defined font sizes, 
          weights, and line heights optimized for readability across all devices.
        </p>
      </div>

      <Card className="p-8">
        <div className="space-y-8">
          {typographyScale.map((item) => (
            <div key={item.name} className="border-b border-border pb-6 last:border-0">
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-sm font-medium text-muted-foreground">{item.name}</span>
                <span className="text-xs text-muted-foreground font-mono">{item.size}</span>
              </div>
              <div className={`${item.size} font-semibold`}>
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <h4 className="font-semibold mb-3">Font Weights</h4>
          <div className="space-y-2 text-sm">
            <div className="font-normal">Normal (400)</div>
            <div className="font-medium">Medium (500)</div>
            <div className="font-semibold">Semibold (600)</div>
            <div className="font-bold">Bold (700)</div>
          </div>
        </Card>

        <Card className="p-6">
          <h4 className="font-semibold mb-3">Line Heights</h4>
          <div className="space-y-2 text-sm">
            <div>Headings: 1.2–1.3</div>
            <div>Body: 1.5–1.6</div>
            <div>Small: 1.4–1.5</div>
          </div>
        </Card>

        <Card className="p-6">
          <h4 className="font-semibold mb-3">Best Practices</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div>• Minimum 16px for body text</div>
            <div>• Use bold for emphasis</div>
            <div>• Limit to 3 font weights</div>
          </div>
        </Card>
      </div>
    </section>
  );
}
