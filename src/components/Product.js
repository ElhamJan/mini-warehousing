const Product = ({ pName, pGroup }) => {
  return (
    <tr>
      <td>{pName}</td>
      <td>{pGroup}</td>
    </tr>
  );
};

export default Product;
