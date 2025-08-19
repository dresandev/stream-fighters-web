import type { Fighter } from "@/types/fighters"

export const getMobileVersus = (order: string[], fighters: Fighter[]) => {
  return order.reduce((acc, id, index, arr) => {
    if (index % 2 === 0) {
      const fighterA = fighters.find(f => f.id === id)!
      const fighterB = fighters.find(f => f.id === arr[index + 1])!
      acc.push([fighterA, fighterB])
    }
    return acc
  }, [] as Fighter[][])
}
