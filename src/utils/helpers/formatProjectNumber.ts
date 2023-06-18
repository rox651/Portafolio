interface FormatNumberProps {
   number: number;
   longer?: number;
}

export function formatProjectNumber({ number, longer = 3 }: FormatNumberProps): string {
   return number.toString().padStart(longer, "0");
}
