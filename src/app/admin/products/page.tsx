export default function ProductsPage() {
  const dummyProducts = [
    { id: 1, name: "NFC Card", price: "₹199" },
    { id: 2, name: "NFC Keychain", price: "₹299" }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">📦 All Products</h1>
      <ul className="grid md:grid-cols-2 gap-4">
        {dummyProducts.map((product) => (
          <li key={product.id} className="bg-blue-50 border border-blue-200 p-4 rounded shadow">
            <h2 className="font-semibold text-lg">{product.name}</h2>
            <p className="text-blue-700">Price: {product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
