// src/components/ProductCard.jsx
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

export default function ProductCard({ product }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition flex flex-col">
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={250}
        className="rounded mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold">{product.name}</h3>
      <p className="text-gray-600 flex-grow">{product.description}</p>
      <p className="text-blue-500 font-bold my-2">S/ {product.price}</p>
      <Link href={`/product/${product.id}`}>
        <Button>Ver detalle</Button>
      </Link>
    </div>
  );
}