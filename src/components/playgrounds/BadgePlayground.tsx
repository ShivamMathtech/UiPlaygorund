import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ComponentPlayground } from "@/components/ComponentPlayground";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function BadgePlayground() {
  const [variant, setVariant] = useState<"default" | "secondary" | "outline" | "destructive">("default");

  const generateCode = () => {
    return `import { Badge } from "@/components/ui/badge";

export function Example() {
  return (
    <Badge${variant !== "default" ? ` variant="${variant}"` : ""}>
      Badge Text
    </Badge>
  );
}`;
  };

  const preview = (
    <Badge variant={variant}>
      Badge Text
    </Badge>
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
            <SelectItem value="destructive">Destructive</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  return (
    <ComponentPlayground
      title="Badge"
      description="Small status indicators and labels."
      preview={preview}
      code={generateCode()}
      controls={controls}
    />
  );
}
