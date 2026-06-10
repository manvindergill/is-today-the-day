const STORAGE_KEY = "today-result";

export function getTodayResult() {
  const today = new Date().toDateString();

  const saved = localStorage.getItem(STORAGE_KEY);

  if (saved) {
    const data = JSON.parse(saved);

    if (data.date === today) {
      return data.result;
    }
  }

  const result = Math.random() < 0.05 ? "YES." : "NO.";

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      date: today,
      result,
    })
  );

  return result;
}