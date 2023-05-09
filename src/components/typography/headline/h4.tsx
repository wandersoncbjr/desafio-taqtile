import { ReactNode } from "react";
import { typography } from "../../../typography";

function Heading4({ children }: { children: ReactNode }) {
  return <h4 style={typography.H4}>{children}</h4>;
}
export default Heading4;
