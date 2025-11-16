import { ButtonPlayground } from "@/components/playgrounds/ButtonPlayground";
import { InputPlayground } from "@/components/playgrounds/InputPlayground";
import { AlertPlayground } from "@/components/playgrounds/AlertPlayground";
import { ModalPlayground } from "@/components/playgrounds/ModalPlayground";
import { TabsPlayground } from "@/components/playgrounds/TabsPlayground";
import { TooltipPlayground } from "@/components/playgrounds/TooltipPlayground";
import { ProgressPlayground } from "@/components/playgrounds/ProgressPlayground";
import { DropdownPlayground } from "@/components/playgrounds/DropdownPlayground";
import { BadgePlayground } from "@/components/playgrounds/BadgePlayground";
import { CardPlayground } from "@/components/playgrounds/CardPlayground";
import { AccordionPlayground } from "@/components/playgrounds/AccordionPlayground";
import { SelectPlayground } from "@/components/playgrounds/SelectPlayground";
import { SwitchPlayground } from "@/components/playgrounds/SwitchPlayground";
import { AvatarPlayground } from "@/components/playgrounds/AvatarPlayground";
import { TablePlayground } from "@/components/playgrounds/TablePlayground";

export function InteractivePlayground() {
  return (
    <section id="playground" className="mb-24 animate-fade-up">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Interactive Playground</h2>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Experiment with components, modify their properties, and copy the code. 
          Each playground includes live previews, customizable controls, and ready-to-use code snippets.
        </p>
      </div>

      <div className="space-y-8">
        <ButtonPlayground />
        <InputPlayground />
        <AlertPlayground />
        <DropdownPlayground />
        <SelectPlayground />
        <ModalPlayground />
        <TabsPlayground />
        <AccordionPlayground />
        <TooltipPlayground />
        <ProgressPlayground />
        <BadgePlayground />
        <CardPlayground />
        <SwitchPlayground />
        <AvatarPlayground />
        <TablePlayground />
      </div>
    </section>
  );
}
