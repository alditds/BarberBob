export default function Input({ height, width, className, placeholder }) {
  return (
    <input
      type="text"
      className={`h-${height} mb-2 w-full md:mb-4 md:w-[330px] ${className} rounded-3xl border-2 border-gray-200 bg-white p-4`}
      placeholder={`${placeholder}`}
    />
  );
}
