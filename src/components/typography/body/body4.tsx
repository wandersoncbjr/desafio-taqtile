import { ReactNode } from "react";
import { typography } from "../../../typography";

function Body4({ children }: { children: ReactNode }) {
  return <p style={typography.body.body4}>{children}</p>;
}
export default Body4;
