import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ComponentPlayground } from "@/components/ComponentPlayground";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";

export function ButtonPlayground() {
  const [variant, setVariant] = useState<"default" | "secondary" | "outline" | "ghost" | "destructive">("default");
  const [size, setSize] = useState<"default" | "sm" | "lg">("default");
  const [withIcon, setWithIcon] = useState(false);

  const generateCode = () => {
    const iconImport = withIcon ? `import { Mail } from "lucide-react";\n` : "";
    const iconProp = withIcon ? `\n  <Mail className="mr-2 h-4 w-4" />\n  ` : "";
    
    return `${iconImport}import { Button } from "@/components/ui/button";

export function Example() {
  return (
    <Button${variant !== "default" ? ` variant="${variant}"` : ""}${size !== "default" ? ` size="${size}"` : ""}>${iconProp}Click Me
    </Button>
  );
}`;
  };

  const preview = (
    <Button variant={variant} size={size}>
      {withIcon && <Mail className="mr-2 h-4 w-4" />}
      Click Me
    </Button>
  );

  const controls = (
    <div className="space-y-4 max-w-sm">
      <div>
        <Label>Variant</Label>
        <Select value={variant} onValueChange={(v: any) => setVariant(v)}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="secondary">Secondary</SelectItem>
            <SelectItem value="outline">Outline</SelectItem>
            <SelectItem value="ghost">Ghost</SelectItem>
            <SelectItem value="destructive">Destructive</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Size</Label>
        <Select value={size} onValueChange={(v: any) => setSize(v)}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sm">Small</SelectItem>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="lg">Large</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="icon"
          checked={withIcon}
          onChange={(e) => setWithIcon(e.target.checked)}
          className="w-4 h-4 cursor-pointer"
        />
        <Label htmlFor="icon" className="cursor-pointer">Include Icon</Label>
      </div>
    </div>
  );

  return (
    <ComponentPlayground
      title="Button"
      description="Trigger actions and events with various styles and sizes."
      preview={preview}
      code={generateCode()}
      controls={controls}
    />
  );
}
