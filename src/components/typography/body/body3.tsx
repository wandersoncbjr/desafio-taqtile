import { ReactNode } from "react";
import { typography } from "../../../typography";

function Body3({ children }: { children: ReactNode }) {
  return <p style={typography.body.body3}>{children}</p>;
}
export default Body3;
