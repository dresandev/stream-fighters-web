import type { Fighter } from "@/types/fighters"
import { getMobileVersus } from "@/helpers/get-mobile-versus"

export const fighters: Fighter[] = [
  {
    id: "thenino",
    versusId: "byking",
    name: "TheNino",
    thumbnailImage: "/images/fighters/thumbnails/thenino.avif",
    fullImage: "/images/fighters/full/thenino.avif",
  },
  {
    id: "milica",
    versusId: "may-osorio",
    name: "Milica",
    thumbnailImage: "/images/fighters/thumbnails/milica.avif",
    fullImage: "/images/fighters/full/milica.avif",
  },
  {
    id: "shelao",
    versusId: "belosmaki",
    name: "Shelado",
    thumbnailImage: "/images/fighters/thumbnails/shelao.avif",
    fullImage: "/images/fighters/full/shelao.avif",
  },
  {
    id: "andrea-valdiri",
    versusId: "yina-calderon",
    name: "Andrea Valdiri",
    thumbnailImage: "/images/fighters/thumbnails/andrea-valdiri.avif",
    fullImage: "/images/fighters/full/andrea-valdiri.avif",
  },
  {
    id: "belosmaki",
    versusId: "shelao",
    name: "Belosmaki",
    thumbnailImage: "/images/fighters/thumbnails/belosmaki.avif",
    fullImage: "/images/fighters/full/belosmaki.avif",
  },
  {
    id: "may-osorio",
    versusId: "milica",
    name: "May osorio",
    thumbnailImage: "/images/fighters/thumbnails/may-osorio.avif",
    fullImage: "/images/fighters/full/may-osorio.avif",
  },
  {
    id: "byking",
    versusId: "thenino",
    name: "ByKing",
    thumbnailImage: "/images/fighters/thumbnails/byking.avif",
    fullImage: "/images/fighters/full/byking.avif",
  },
  {
    id: "karina-garcia",
    versusId: "karely-ruiz",
    name: "Karina García",
    thumbnailImage: "/images/fighters/thumbnails/karina-garcia.avif",
    fullImage: "/images/fighters/full/karina-garcia.avif",
  },
  {
    id: "jh-de-la-cruz",
    versusId: "cristorata",
    name: "JH de la Cruz",
    thumbnailImage: "/images/fighters/thumbnails/jh-de-la-cruz.avif",
    fullImage: "/images/fighters/full/jh-de-la-cruz.avif",
  },
  {
    id: "yina-calderon",
    versusId: "andrea-valdiri",
    name: "Yina Calderón",
    thumbnailImage: "/images/fighters/thumbnails/yina-calderon.avif",
    fullImage: "/images/fighters/full/yina-calderon.avif",
  },
  {
    id: "cristorata",
    versusId: "jh-de-la-cruz",
    name: "Cristorata",
    thumbnailImage: "/images/fighters/thumbnails/cristorata.avif",
    fullImage: "/images/fighters/full/cristorata.avif",
  },
  {
    id: "karely-ruiz",
    versusId: "karina-garcia",
    name: "Karely Ruiz",
    thumbnailImage: "/images/fighters/thumbnails/karely-ruiz.avif",
    fullImage: "/images/fighters/full/karely-ruiz.avif",
  },
]

const mobileOrder = [
  "andrea-valdiri",
  "yina-calderon",
  "thenino",
  "byking",
  "milica",
  "may-osorio",
  "shelao",
  "belosmaki",
  "karina-garcia",
  "karely-ruiz",
  "jh-de-la-cruz",
  "cristorata",
]

export const mobileVersus = getMobileVersus(mobileOrder, fighters)
