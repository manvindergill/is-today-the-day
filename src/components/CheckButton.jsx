export default function CheckButton({ onCheck }) {
  return (
    <button
      onClick={onCheck}
      className="
        mt-12
        px-12
        py-5
        text-xl
        md:text-2xl
        font-bold
        border-2
        border-white
        rounded-full
        transition-all
        duration-300
        hover:bg-white
        hover:text-black
        active:scale-95
        cursor-pointer
      "
    >
      CHECK
    </button>
  );
}