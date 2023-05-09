import { ReactNode } from "react";
import { typography } from "../../../typography/typography";

function Body4({ children }: { children: ReactNode }) {
  return <body style={typography.body.body4}>{children}</body>;
}
export default Body4;