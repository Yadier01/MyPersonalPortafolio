export const HoverImg = ({ href, name, description, icons }: any) => {
  return (
    <a
      href={href}
      className="absolute top-0 left-0 h-full p-5  w-full z-50 hover:bg-black 
     transition-all flex flex-col hover:bg-opacity-50"
    >
      <span>
        <h3 className="text-2xl  font-semibold">{name}</h3>
        <p className="text-sm font-semibold  ">{description}</p>
      </span>
      <ul className="flex item-center mt-4 gap-5">
        {icons.map((icon: any, idx:any) => (
          <li key={idx} className="text-yellow-400">{icon}</li>
        ))}
      </ul>
    </a>
  );
};