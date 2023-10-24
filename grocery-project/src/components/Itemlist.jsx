import Singleitem from "./Singleitem";

let Itemlist = ({ items }) => {
  return (
    <div>
      <h3>Items list</h3>
      {items.map((item) => (
        <Singleitem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Itemlist;
