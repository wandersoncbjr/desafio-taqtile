import { ReactNode } from "react";
import { typography } from "../../../typography";

export function Body3({ children }: { children: ReactNode }) {
  return <p style={typography.body.body3}>{children}</p>;
}
