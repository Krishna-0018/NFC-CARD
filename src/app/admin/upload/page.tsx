'use client'
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function UploadPage() {
  const [product, setProduct] = useState<{ name: string; price: string; image: File | null }>({
  name: "",
  price: "",
  image: null,
});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Uploaded Product:", product);
  };

  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-6">⬆️ Upload New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded shadow-md max-w-lg">
        <div>
          <label className="block mb-2 font-semibold">Product Name</label>
          <Input
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            required
            className="border-blue-300"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Price (₹)</label>
          <Input
            type="number"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            required
            className="border-blue-300"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Product Image</label>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setProduct({ ...product, image: e.target.files?.[0] || null })}
            className="border-blue-300"
          />
        </div>
        <Button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white">Upload</Button>
      </form>
    </div>
  );
}
