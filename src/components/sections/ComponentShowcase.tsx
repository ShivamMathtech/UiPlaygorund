import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  CheckCircle2, 
  AlertCircle, 
  AlertTriangle, 
  Info,
  Mail,
  Search,
  Download
} from "lucide-react";

export function ComponentShowcase() {
  return (
    <section id="components" className="mb-24 animate-fade-up">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Component Library</h2>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Pre-built, accessible components following design system principles. 
          Each component includes multiple variants and states for flexible usage.
        </p>
      </div>

      {/* Buttons */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6">Buttons</h3>
        <Card className="p-8">
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-4">Primary Actions</p>
              <div className="flex flex-wrap gap-3">
                <Button>Default Button</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground mb-4">Sizes</p>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button>Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-4">With Icons</p>
              <div className="flex flex-wrap gap-3">
                <Button>
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </Button>
                <Button variant="secondary">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Form Components */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6">Form Components</h3>
        <Card className="p-8">
          <div className="space-y-6 max-w-md">
            <div>
              <label className="text-sm font-medium mb-2 block">Text Input</label>
              <Input placeholder="Enter your email" type="email" />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Input with Icon</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search..." className="pl-10" />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label htmlFor="terms" className="text-sm cursor-pointer">
                Accept terms and conditions
              </label>
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Enable notifications</label>
              <Switch />
            </div>
          </div>
        </Card>
      </div>

      {/* Alerts */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6">Alerts & Feedback</h3>
        <div className="space-y-4">
          <Alert className="border-success bg-success-light">
            <CheckCircle2 className="h-4 w-4 text-success" />
            <AlertTitle className="text-success">Success</AlertTitle>
            <AlertDescription className="text-success-foreground">
              Your changes have been saved successfully.
            </AlertDescription>
          </Alert>

          <Alert className="border-info bg-info-light">
            <Info className="h-4 w-4 text-info" />
            <AlertTitle className="text-info">Information</AlertTitle>
            <AlertDescription className="text-info-foreground">
              This feature is now available in your account.
            </AlertDescription>
          </Alert>

          <Alert className="border-warning bg-warning-light">
            <AlertTriangle className="h-4 w-4 text-warning" />
            <AlertTitle className="text-warning">Warning</AlertTitle>
            <AlertDescription className="text-warning-foreground">
              Please review your settings before continuing.
            </AlertDescription>
          </Alert>

          <Alert className="border-error bg-error-light">
            <AlertCircle className="h-4 w-4 text-error" />
            <AlertTitle className="text-error">Error</AlertTitle>
            <AlertDescription className="text-error-foreground">
              Something went wrong. Please try again.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      {/* Badges */}
      <div>
        <h3 className="text-2xl font-semibold mb-6">Badges & Tags</h3>
        <Card className="p-8">
          <div className="flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge className="bg-success text-success-foreground">Success</Badge>
            <Badge className="bg-warning text-warning-foreground">Warning</Badge>
            <Badge className="bg-info text-info-foreground">Info</Badge>
          </div>
        </Card>
      </div>
    </section>
  );
}
