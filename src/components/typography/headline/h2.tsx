import { ReactNode } from "react";
import { typography } from "../../../typography";

function Heading2({ children }: { children: ReactNode }) {
  return <h2 style={typography.H2}>{children}</h2>;
}
export default Heading2;
