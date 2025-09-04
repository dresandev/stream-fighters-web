import { fighters } from "@/data/fighters"

interface Props {
  id: string,
  versusId: string
}

export const getVersusData = async ({ id, versusId }: Props) => {
  const fighter = fighters.find(f => f.id === id)
  const versusFighter = fighters.find(f => f.id === versusId)

  if (!fighter || !versusFighter) {
    throw new Error("Fighter not found")
  }

  return [
    fighter,
    versusFighter
  ]
}
