import { NotFoundContent } from "@/components/NotFoundContent";

export default function ProblemNotFound() {
  return (
    <NotFoundContent
      title="We can’t find that problem."
      description="Choose another train or station problem to find the phrase you need."
      linkHref="/categories/train-station"
      linkLabel="Back to problems"
    />
  );
}
