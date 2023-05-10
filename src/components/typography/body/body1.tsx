import { ReactNode } from "react";
import { typography } from "../../../typography";

export function Body1({ children }: { children: ReactNode }) {
  return <p style={typography.body.body1}>{children}</p>;
}
