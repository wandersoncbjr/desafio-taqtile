import { ReactNode } from "react";
import { typography } from "../../../typography";

function Heading3({ children }: { children: ReactNode }) {
  return <h3 style={typography.H3}>{children}</h3>;
}
export default Heading3;
