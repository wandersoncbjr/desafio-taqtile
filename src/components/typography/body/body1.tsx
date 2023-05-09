import { ReactNode } from "react";
import { typography } from "../../../typography";

function Body1({ children }: { children: ReactNode }) {
  return <p style={typography.body.body1}>{children}</p>;
}
export default Body1;
