import { ComponentPlayground } from "@/components/ComponentPlayground";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarPlayground() {
  const code = `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Example() {
  return (
    <div className="flex gap-4">
      {/* With Image */}
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      
      {/* Fallback Only */}
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      
      {/* Different Sizes */}
      <Avatar className="h-8 w-8">
        <AvatarFallback className="text-xs">SM</AvatarFallback>
      </Avatar>
      
      <Avatar className="h-16 w-16">
        <AvatarFallback className="text-lg">LG</AvatarFallback>
      </Avatar>
    </div>
  );
}`;

  const preview = (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      
      <Avatar className="h-8 w-8">
        <AvatarFallback className="text-xs">SM</AvatarFallback>
      </Avatar>
      
      <Avatar className="h-16 w-16">
        <AvatarFallback className="text-lg">LG</AvatarFallback>
      </Avatar>
    </div>
  );

  return (
    <ComponentPlayground
      title="Avatar"
      description="Display user profile pictures with fallback initials."
      preview={preview}
      code={code}
    />
  );
}
