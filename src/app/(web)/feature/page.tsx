import { Metadata } from "next";
import FeatureContent from "../_components/pages/FeatureContent";

export const metadata: Metadata = {
  title: "Blog page",
  description: "This is blog page",
};

export default function Feature() {
  return <FeatureContent />;
}
