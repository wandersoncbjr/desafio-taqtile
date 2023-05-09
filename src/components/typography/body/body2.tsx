import { ReactNode } from "react";
import { typography } from "../../../typography/typography";

function Body2({ children }: { children: ReactNode }) {
  return <body style={typography.body.body2}>{children}</body>;
}
export default Body2;