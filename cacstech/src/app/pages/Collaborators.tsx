import FormElementCreateCollab from "@/components/FormElementCreateCollab";
import HeroFormElement from "@/components/heroFormElement";

export default function CreateColaborators() {
  return (
    <div className="flex flex-col items-center gap-32">
      <HeroFormElement imageurl="google.com" />
      <FormElementCreateCollab />
    </div>
  );
}