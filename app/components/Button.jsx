"use client";

export default function Button(props) {
  return (
    <button
      onClick={() => console.log(props)}
      className="rounded-4xl border-2 bg-gray-700 px-8 py-3 text-lg font-bold text-white hover:cursor-pointer hover:bg-white hover:text-gray-700"
    >
      {props.children}
    </button>
  );
}
