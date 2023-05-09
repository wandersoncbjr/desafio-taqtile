import { ReactNode } from "react";
import { typography } from "../../../typography/typography";

function LargeLabel({ children }: { children: ReactNode }) {
  return <label style={typography.label.largeLabel}>{children}</label>;
}
export default LargeLabel;