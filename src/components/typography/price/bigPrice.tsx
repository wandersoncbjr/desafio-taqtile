import { ReactNode } from "react";
import { typography } from "../../../typography";

function BigPrice({ children }: { children: ReactNode }) {
  return <p style={typography.price.bigPrice}>{children}</p>;
}
export default BigPrice;
