import { ReactNode } from "react";
import { typography } from "../../../typography";

function Heading1({ children }: { children: ReactNode }) {
  return <h1 style={typography.H1}>{children}</h1>;
}
export default Heading1;
