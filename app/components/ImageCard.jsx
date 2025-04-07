export default function ImageCard(props) {
  return (
    <div className="mt-8 flex h-fit w-[330px] flex-col rounded-xl text-center shadow-md duration-300 ease-in hover:-top-4 md:hover:-translate-y-4 lg:w-[243px]">
      <div className="relative h-[408px] w-full overflow-hidden rounded-xl lg:h-[324px]">
        <div className="absolute flex h-full w-full items-end justify-center bg-gradient-to-b from-transparent from-0% to-black to-180% pb-6 ease-in-out hover:bg-gradient-to-b hover:from-transparent hover:from-0% hover:to-transparent hover:to-0%">
          <div className="text-2xl text-white">{props.title}</div>
        </div>
        <img src={props.image} alt="" className="h-full w-full object-cover" />
      </div>
      <p className="p-2 text-lg font-semibold">{props.desc}</p>
    </div>
  );
}
