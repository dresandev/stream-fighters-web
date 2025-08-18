import type { Fighter } from "@/types/fighters"
import { getMobileFighters } from "@/helpers/get-mobile-fighters"

export const desktopFighters: Fighter[] = [
  {
    id: "thenino",
    versusId: "byking",
    name: "TheNino",
    thumbnailImage: "/images/fighters/thumbnails/thenino.png",
  },
  {
    id: "milica",
    versusId: "may-osorio",
    name: "Milica",
    thumbnailImage: "/images/fighters/thumbnails/milica.png",
  },
  {
    id: "shelao",
    versusId: "belosmaki",
    name: "Shelado",
    thumbnailImage: "/images/fighters/thumbnails/shelao.png",
  },
  {
    id: "jh-de-la-cruz",
    versusId: "cristorata",
    name: "JH de la Cruz",
    thumbnailImage: "/images/fighters/thumbnails/jh-de-la-cruz.png",
  },
  {
    id: "cristorata",
    versusId: "jh-de-la-cruz",
    name: "Cristorata",
    thumbnailImage: "/images/fighters/thumbnails/cristorata.png",
  },
  {
    id: "belosmaki",
    versusId: "shelao",
    name: "Belosmaki",
    thumbnailImage: "/images/fighters/thumbnails/belosmaki.png",
  },
  {
    id: "may-osorio",
    versusId: "milica",
    name: "May osorio",
    thumbnailImage: "/images/fighters/thumbnails/may-osorio.png",
  },
  {
    id: "byking",
    versusId: "thenino",
    name: "ByKing",
    thumbnailImage: "/images/fighters/thumbnails/byking.png",
  },
  {
    id: "karina-garcia",
    versusId: "karely-ruiz",
    name: "Karina García",
    thumbnailImage: "/images/fighters/thumbnails/karina-garcia.png",
  },
  {
    id: "yina-calderon",
    versusId: "andrea-valdiri",
    name: "Yina Calderón",
    thumbnailImage: "/images/fighters/thumbnails/yina-calderon.png",
  },
  {
    id: "westcol",
    versusId: "incognito",
    name: "WestCol?",
    thumbnailImage: "/images/fighters/thumbnails/westcol.png",
  },
  {
    id: "incognito",
    versusId: "westcol",
    name: "Incognito",
    thumbnailImage: "/images/fighters/thumbnails/incognito.png",
  },
  {
    id: "andrea-valdiri",
    versusId: "yina-calderon",
    name: "Andrea Valdiri",
    thumbnailImage: "/images/fighters/thumbnails/andrea-valdiri.png",
  },
  {
    id: "karely-ruiz",
    versusId: "karina-garcia",
    name: "Karely Ruiz",
    thumbnailImage: "/images/fighters/thumbnails/karely-ruiz.png",
  },
]

export const mobileFighters = getMobileFighters(desktopFighters)
