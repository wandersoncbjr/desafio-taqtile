import { ReactNode } from "react";
import { typography } from "../../../typography/typography";

function MediumPrice({ children }: { children: ReactNode }) {
    return <p style={typography.price.mediumPrice}>{children}</p>;
    
}
export default MediumPrice;