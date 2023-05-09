import { ReactNode } from "react";
import { typography } from "../../../typography";

function LabelLargeBold({ children }: { children: ReactNode }) {
  return <label style={typography.label.labelLargeBold}>{children}</label>;
}
export default LabelLargeBold;
