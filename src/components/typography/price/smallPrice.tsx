import { ReactNode } from "react";
import { typography } from "../../../typography/typography";

function SmallPrice({ children }: { children: ReactNode }) {
    return <p style={typography.price.smallPrice}>{children}</p>;
    
}
export default SmallPrice;