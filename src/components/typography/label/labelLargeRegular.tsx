import { ReactNode } from "react";
import { typography } from "../../../typography/typography";

function LabelLargeRegular({ children }: { children: ReactNode }) {
  return <label style={typography.label.labelLargeRegular}>{children}</label>;
}
export default LabelLargeRegular;