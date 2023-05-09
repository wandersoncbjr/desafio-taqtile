import { ReactNode } from "react";
import { typography } from "../../../typography/typography";

function Caption({ children }: { children: ReactNode }) {
  return <caption style={typography.caption}>{children}</caption>;
}
export default Caption;