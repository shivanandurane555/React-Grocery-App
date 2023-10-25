
import Singleitem from "./Singleitem";

let Itemlist = ({ items }) => {
  const totalPrice = items.reduce((acc, item) => {
    return (acc = acc + item.price * item.quantity);
  }, 0);

  if (!items.length)
    return <h3 style={{ textAlign: "center" }}>Please add items!</h3>;
  return (
    <div>
      <h3>Items list</h3>
      {items.map((item) => (
        <Singleitem item={item} key={item.id} />
      ))}
      <div className="total">Total price: ${totalPrice} </div>
    </div>
  );
};

export default Itemlist;
