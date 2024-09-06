import Button from "./Button";

const CardEx = () => {
  return (
    <div>
      <div className='bg-gray-200 rounded-xl shadow-lg p-4 flex flex-col gap-3 w-80'>
        <h1 className="text-5xl text-lime-800">Hello Title</h1>
        <p className="w-72">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem obcaecati laudantium deleniti veritatis mollitia molestias dolores, placeat quos dignissimos odio nobis, fugit assumenda qui nesciunt magnam. Sunt tempora pariatur itaque.</p>
        {/* eslint-disable-next-line react/no-children-prop */}
        <Button children={"Click"} />
      </div>
    </div>
  );
};

export default CardEx;
