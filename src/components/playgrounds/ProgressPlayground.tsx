import { useState } from "react";
import { ComponentPlayground } from "@/components/ComponentPlayground";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export function ProgressPlayground() {
  const [progress, setProgress] = useState(60);

  const code = `import { Progress } from "@/components/ui/progress";

export function Example() {
  return (
    <Progress value={${progress}} className="w-full" />
  );
}`;

  const preview = (
    <div className="w-full max-w-md space-y-4">
      <Progress value={progress} className="w-full" />
      <div className="text-center text-sm text-muted-foreground">
        {progress}% Complete
      </div>
    </div>
  );

  const controls = (
    <div className="space-y-4 max-w-sm">
      <div>
        <Label>Progress Value: {progress}%</Label>
        <Slider
          value={[progress]}
          onValueChange={(v) => setProgress(v[0])}
          max={100}
          step={1}
          className="mt-2"
        />
      </div>
      <div className="flex gap-2">
        <Button size="sm" onClick={() => setProgress(Math.max(0, progress - 10))}>
          -10%
        </Button>
        <Button size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>
          +10%
        </Button>
        <Button size="sm" variant="outline" onClick={() => setProgress(0)}>
          Reset
        </Button>
      </div>
    </div>
  );

  return (
    <ComponentPlayground
      title="Progress"
      description="Visual indicator showing completion status."
      preview={preview}
      code={code}
      controls={controls}
    />
  );
}
