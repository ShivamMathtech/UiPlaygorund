import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/CodeBlock";
import { Badge } from "@/components/ui/badge";

interface ComponentPlaygroundProps {
  title: string;
  description: string;
  preview: React.ReactNode;
  code: string;
  controls?: React.ReactNode;
}

export function ComponentPlayground({
  title,
  description,
  preview,
  code,
  controls,
}: ComponentPlaygroundProps) {
  const [activeTab, setActiveTab] = useState("preview");

  return (
    <Card className="overflow-hidden">
      <div className="p-6 border-b border-border">
        <div className="flex items-start justify-between mb-2">
          <h4 className="text-xl font-semibold">{title}</h4>
          <Badge variant="secondary">Interactive</Badge>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="border-b border-border px-6">
          <TabsList className="bg-transparent">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
            {controls && <TabsTrigger value="controls">Controls</TabsTrigger>}
          </TabsList>
        </div>

        <TabsContent value="preview" className="p-6 min-h-[200px]">
          <div className="flex items-center justify-center p-8">
            {preview}
          </div>
        </TabsContent>

        <TabsContent value="code" className="p-6">
          <CodeBlock code={code} />
        </TabsContent>

        {controls && (
          <TabsContent value="controls" className="p-6">
            {controls}
          </TabsContent>
        )}
      </Tabs>
    </Card>
  );
}
