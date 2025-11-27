export function createMemory(emotion, color, note = "") {
  const timestamp = Date.now();
  return {
    id: String(timestamp),
    emotion,
    color,
    note,
    timestamp,
  };
}
