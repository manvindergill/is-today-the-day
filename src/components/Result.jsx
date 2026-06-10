export default function Result({ result }) {
  if (!result) return null;

  return (
    <div className="mt-10">
      <h3
        className={`text-6xl md:text-8xl font-black ${
          result === "YES." ? "text-green-400" : "text-red-400"
        }`}
      >
        {result}
      </h3>
    </div>
  );
}