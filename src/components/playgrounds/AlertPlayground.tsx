import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ComponentPlayground } from "@/components/ComponentPlayground";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, AlertCircle, AlertTriangle, Info } from "lucide-react";

type AlertVariant = "success" | "error" | "warning" | "info";

export function AlertPlayground() {
  const [variant, setVariant] = useState<AlertVariant>("info");

  const alertConfig = {
    success: {
      icon: CheckCircle2,
      class: "border-success bg-success-light",
      iconClass: "text-success",
      titleClass: "text-success",
      descClass: "text-success-foreground",
      title: "Success",
      description: "Your action completed successfully.",
    },
    error: {
      icon: AlertCircle,
      class: "border-error bg-error-light",
      iconClass: "text-error",
      titleClass: "text-error",
      descClass: "text-error-foreground",
      title: "Error",
      description: "Something went wrong. Please try again.",
    },
    warning: {
      icon: AlertTriangle,
      class: "border-warning bg-warning-light",
      iconClass: "text-warning",
      titleClass: "text-warning",
      descClass: "text-warning-foreground",
      title: "Warning",
      description: "Please review before continuing.",
    },
    info: {
      icon: Info,
      class: "border-info bg-info-light",
      iconClass: "text-info",
      titleClass: "text-info",
      descClass: "text-info-foreground",
      title: "Information",
      description: "This is an informational message.",
    },
  };

  const config = alertConfig[variant];
  const Icon = config.icon;

  const generateCode = () => {
    return `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ${Icon.name} } from "lucide-react";

export function Example() {
  return (
    <Alert className="${config.class}">
      <${Icon.name} className="h-4 w-4 ${config.iconClass}" />
      <AlertTitle className="${config.titleClass}">${config.title}</AlertTitle>
      <AlertDescription className="${config.descClass}">
        ${config.description}
      </AlertDescription>
    </Alert>
  );
}`;
  };

  const preview = (
    <Alert className={`${config.class} w-full max-w-md`}>
      <Icon className={`h-4 w-4 ${config.iconClass}`} />
      <AlertTitle className={config.titleClass}>{config.title}</AlertTitle>
      <AlertDescription className={config.descClass}>
        {config.description}
      </AlertDescription>
    </Alert>
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
            <SelectItem value="success">Success</SelectItem>
            <SelectItem value="error">Error</SelectItem>
            <SelectItem value="warning">Warning</SelectItem>
            <SelectItem value="info">Info</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  return (
    <ComponentPlayground
      title="Alert"
      description="Display important messages with contextual styling."
      preview={preview}
      code={generateCode()}
      controls={controls}
    />
  );
}
