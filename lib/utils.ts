import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cx(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
