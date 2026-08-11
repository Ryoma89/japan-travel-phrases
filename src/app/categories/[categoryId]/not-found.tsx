import { NotFoundContent } from "@/components/NotFoundContent";

export default function CategoryNotFound() {
  return (
    <NotFoundContent
      title="We can’t find that scene."
      description="Choose a travel scene to keep looking for the phrase you need."
      linkHref="/categories"
      linkLabel="Choose a scene"
    />
  );
}
