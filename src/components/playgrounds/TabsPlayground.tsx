import { ComponentPlayground } from "@/components/ComponentPlayground";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

export function TabsPlayground() {
  const code = `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

export function Example() {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Account Settings</h3>
          <p className="text-sm text-muted-foreground">
            Manage your account settings here.
          </p>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Password</h3>
          <p className="text-sm text-muted-foreground">
            Change your password here.
          </p>
        </Card>
      </TabsContent>
      <TabsContent value="settings">
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Settings</h3>
          <p className="text-sm text-muted-foreground">
            Manage your preferences.
          </p>
        </Card>
      </TabsContent>
    </Tabs>
  );
}`;

  const preview = (
    <Tabs defaultValue="account" className="w-full max-w-md">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Account Settings</h3>
          <p className="text-sm text-muted-foreground">
            Manage your account settings here.
          </p>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Password</h3>
          <p className="text-sm text-muted-foreground">
            Change your password here.
          </p>
        </Card>
      </TabsContent>
      <TabsContent value="settings">
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Settings</h3>
          <p className="text-sm text-muted-foreground">
            Manage your preferences.
          </p>
        </Card>
      </TabsContent>
    </Tabs>
  );

  return (
    <ComponentPlayground
      title="Tabs"
      description="Organize content into separate views with tab navigation."
      preview={preview}
      code={code}
    />
  );
}
