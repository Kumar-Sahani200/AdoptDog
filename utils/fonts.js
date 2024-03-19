import { Emblema_One, Nova_Slim, Bubblegum_Sans } from "next/font/google";

const emblema_one_init = Emblema_One({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  variable: "--font-emblema_one",
});

const nova_slim_init = Nova_Slim({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-nova_slim",
});

const bubblegum_sans_init = Bubblegum_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bubblegum_sans",
});

export const emblema_one = emblema_one_init.variable;
export const nova_slim = nova_slim_init.variable;
export const bubblegum_sans = bubblegum_sans_init.variable;
