import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sanitizeInput(value: string, maxLength: number): string {
  return value
    .trim()
    .replace(/[<>]/g, "")
    .slice(0, maxLength);
}
