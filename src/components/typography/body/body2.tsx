import { ReactNode } from "react";
import { typography } from "../../../typography";

export function Body2({ children }: { children: ReactNode }) {
  return <p style={typography.body.body2}>{children}</p>;
}
