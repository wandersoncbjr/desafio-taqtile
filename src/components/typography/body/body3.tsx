import { ReactNode } from "react";
import { typography } from "../../../typography/typography";

function Body3({ children }: { children: ReactNode }) {
  return <body style={typography.body.body3}>{children}</body>;
}
export default Body3;