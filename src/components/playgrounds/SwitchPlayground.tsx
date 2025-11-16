import { useState } from "react";
import { ComponentPlayground } from "@/components/ComponentPlayground";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function SwitchPlayground() {
  const [checked, setChecked] = useState(false);

  const code = `import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function Example() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}`;

  const checkboxCode = `import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function Example() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">
        Accept terms and conditions
      </Label>
    </div>
  );
}`;

  const preview = (
    <div className="space-y-6 w-full max-w-md">
      <div>
        <h4 className="font-medium mb-4">Switch</h4>
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" checked={checked} onCheckedChange={setChecked} />
          <Label htmlFor="airplane-mode">Airplane Mode {checked ? "(On)" : "(Off)"}</Label>
        </div>
      </div>
      
      <div>
        <h4 className="font-medium mb-4">Checkbox</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="cursor-pointer">
              Accept terms and conditions
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="marketing" />
            <Label htmlFor="marketing" className="cursor-pointer">
              Send me marketing emails
            </Label>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <ComponentPlayground
      title="Switch & Checkbox"
      description="Toggle controls for binary choices and multi-selection."
      preview={preview}
      code={`// Switch Example\n${code}\n\n// Checkbox Example\n${checkboxCode}`}
    />
  );
}
