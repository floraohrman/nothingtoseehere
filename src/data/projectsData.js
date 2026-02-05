import web1 from "../components/img/web1.png";
import web2 from "../components/img/web2.png";

import vtuber1 from "../components/img/vtuber1.png";
import vtuber2 from "../components/img/vtuber2.png";

import art1 from "../components/img/art1.png";
import art2 from "../components/img/art2.png";

export const projects = [
  {
    id: 1,
    title: "Webbutveckling",
    description:
      "Projekt inom React, Vite och fullstack utveckling.",

    gallery: [web1, web2],
  },

  {
    id: 2,
    title: "VTuber Design & Riggning",
    description:
      "Design och Live2D riggning av VTuber modeller.",

    gallery: [vtuber1, vtuber2],
  },

  {
    id: 3,
    title: "Digital Konst",
    description:
      "Illustrationer, concept art och karaktärsdesign.",

    gallery: [art1, art2],
  },
];