const Singleitem = ({ item, deleteItem }) => {
  return (
    <div className="item">
      <div>
        {" "}
        <input type="checkbox" /> {item.name}
      </div>
      <div>{item.quantity} </div>
      <div>${item.price} </div>
      <div>${item.price * item.quantity} </div>
      <div className="close" onClick={() => deleteItem(item.id)}>
        X
      </div>
    </div>
  );
};

export default Singleitem;
