import { ReactNode } from "react";
import { typography } from "../../../typography/typography";

function Display({ children }: { children: ReactNode }) {
    return <p style={typography.display}>{children}</p>;
    
}
export default Display;