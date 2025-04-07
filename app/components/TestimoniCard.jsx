import { StarIcon } from "@heroicons/react/24/solid";

export default function TestimoniCard(props) {
  return (
    <>
      <div className="w-[276px] rounded-xl border-2 border-gray-100 p-8 text-center font-medium">
        <div className="cust-name w-full">{props.name}</div>
        <div className="cust-address mb-6 w-full">{props.address}</div>
        <div className="cust-stars mb-4 flex justify-center gap-2">
          <StarIcon className="w-6 text-yellow-500" />
          <StarIcon className="w-6 text-yellow-500" />
          <StarIcon className="w-6 text-yellow-500" />
          <StarIcon className="w-6 text-yellow-500" />
          <StarIcon className="w-6 text-yellow-500" />
        </div>
        <div className="cust-quote">“{props.quote}”</div>
      </div>
    </>
  );
}
