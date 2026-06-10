export function isTodayTheDay() {
  const today = new Date().toDateString();

  let hash = 0;

  for (let i = 0; i < today.length; i++) {
    hash += today.charCodeAt(i);
  }

  return hash % 137 === 0;
}