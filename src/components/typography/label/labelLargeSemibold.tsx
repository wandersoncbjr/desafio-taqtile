import { ReactNode } from "react";
import { typography } from "../../../typography/typography";

function LabelLargeSemibold({ children }: { children: ReactNode }) {
  return <label style={typography.label.labelLargeSemibold}>{children}</label>;
}
export default LabelLargeSemibold;