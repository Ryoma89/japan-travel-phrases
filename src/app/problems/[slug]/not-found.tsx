import { NotFoundContent } from "@/components/NotFoundContent";

export default function ProblemNotFound() {
  return (
    <NotFoundContent
      title="We can’t find that problem."
      description="Choose a travel scene and find another problem."
      linkHref="/categories"
      linkLabel="Choose a scene"
    />
  );
}
