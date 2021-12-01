export default function createActionsType<T extends string> (actionName: string, constants: Record<T, string>): Record<T, string> {
  for (let key in constants) {
    constants[key] = actionName + '_' + constants[key]
  }
  return constants
}
