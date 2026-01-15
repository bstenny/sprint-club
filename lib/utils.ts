import { clsx, type ClassValue } from "clsx";

// Utility function for conditional classnames
export function cn(...inputs: ClassValue[]) {
    return clsx(inputs);
}
