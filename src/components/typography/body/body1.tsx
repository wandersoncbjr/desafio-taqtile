import { ReactNode } from "react";
import { typography } from "../../../typography/typography";

function Body1({ children }: { children: ReactNode }) {
  return <body style={typography.body.body1}>{children}</body>;
}
export default Body1;