import type { Fighter } from "@/types/fighters"

export const getMobileFighters = (fighters: Fighter[]) => {
  const seen = new Set()
  const pairs = []

  for (const fighter of fighters) {
    if (seen.has(fighter.id)) continue

    const opponent = fighters.find(f => f.id === fighter.versusId)
    if (opponent) {
      pairs.push([fighter, opponent])
      seen.add(fighter.id)
      seen.add(opponent.id)
    }
  }

  return pairs
}
