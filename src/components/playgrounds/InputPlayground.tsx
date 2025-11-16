import { useState } from "react";
import { Input } from "@/components/ui/input";
import { ComponentPlayground } from "@/components/ComponentPlayground";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Mail } from "lucide-react";

export function InputPlayground() {
  const [type, setType] = useState("text");
  const [withIcon, setWithIcon] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const generateCode = () => {
    const iconCode = withIcon 
      ? `import { Search } from "lucide-react";\n\n` 
      : "";
    
    const inputElement = withIcon
      ? `<div className="relative">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
  <Input 
    type="${type}" 
    placeholder="Search..."
    className="pl-10"${disabled ? '\n    disabled' : ''}
  />
</div>`
      : `<Input 
  type="${type}" 
  placeholder="Enter text..."${disabled ? '\n  disabled' : ''}
/>`;

    return `${iconCode}import { Input } from "@/components/ui/input";

export function Example() {
  return (
    ${inputElement}
  );
}`;
  };

  const preview = withIcon ? (
    <div className="relative w-full max-w-sm">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input 
        type={type} 
        placeholder="Search..." 
        className="pl-10" 
        disabled={disabled}
      />
    </div>
  ) : (
    <Input 
      type={type} 
      placeholder="Enter text..." 
      className="w-full max-w-sm"
      disabled={disabled}
    />
  );

  const controls = (
    <div className="space-y-4 max-w-sm">
      <div>
        <Label>Type</Label>
        <Select value={type} onValueChange={setType}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="text">Text</SelectItem>
            <SelectItem value="email">Email</SelectItem>
            <SelectItem value="password">Password</SelectItem>
            <SelectItem value="number">Number</SelectItem>
            <SelectItem value="search">Search</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="with-icon"
          checked={withIcon}
          onChange={(e) => setWithIcon(e.target.checked)}
          className="w-4 h-4 cursor-pointer"
        />
        <Label htmlFor="with-icon" className="cursor-pointer">With Icon</Label>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="disabled"
          checked={disabled}
          onChange={(e) => setDisabled(e.target.checked)}
          className="w-4 h-4 cursor-pointer"
        />
        <Label htmlFor="disabled" className="cursor-pointer">Disabled</Label>
      </div>
    </div>
  );

  return (
    <ComponentPlayground
      title="Input"
      description="Text input field with various types and configurations."
      preview={preview}
      code={generateCode()}
      controls={controls}
    />
  );
}
