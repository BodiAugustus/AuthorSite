// app/fonts.js
import { Playfair_Display_SC, Cinzel, Lato } from "next/font/google";

export const playfair = Playfair_Display_SC({
  variable: "--font-playfair-sc",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const cinzel = Cinzel({
  variable: "--font--cinzel",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const lato = Lato({
  variable: "--font--lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});