import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
const Cn = (...cn) => {
        return twMerge(clsx(cn))
}
export default Cn