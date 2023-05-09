import { ReactNode } from "react";
import { typography } from "../../../typography";

function Details({ children }: { children: ReactNode }) {
  return <details style={typography.details}>{children}</details>;
}
export default Details;
