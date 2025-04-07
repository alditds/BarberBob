import { Quicksand, Cardo } from "next/font/google";

export const quicksand = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin", "latin-ext"],
});

export const cardo = Cardo({
  weight: ["400", "700"],
  style: ["italic", "normal"],
  subsets: ["latin", "latin-ext"],
});
