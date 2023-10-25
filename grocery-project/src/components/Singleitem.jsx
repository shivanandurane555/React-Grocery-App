const Singleitem = ({ item }) => {
  return (
    <div className="item">
      <div>{item.name}</div>
      <div>{item.quantity} </div>
      <div>${item.price} </div>
      <div>${item.price * item.quantity} </div>
    </div>
  );
};

export default Singleitem;
