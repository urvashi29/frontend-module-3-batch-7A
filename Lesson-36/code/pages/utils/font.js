import { Montserrat, Roboto } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
  variable: "--montserrat-font",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});
