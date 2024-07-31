export default function cleanSet(set, startString) {
  const List = [];

  if (
    typeof set !== 'object'
    || typeof startString !== 'string'
    || startString.length === 0
  ) {
    return '';
  }

  for (const iTem of set) {
    if (iTem && iTem.startsWith(startString)) {
      List.push(iTem.slice(startString.length));
    }
  }

  return List.join('-');
}
