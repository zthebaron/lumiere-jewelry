import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  name: string;
  slug: string;
  price: number;
  compareAt?: number | null;
  image: string;
  category?: string | null;
}

export function ProductCard({
  name,
  slug,
  price,
  compareAt,
  image,
  category,
}: ProductCardProps) {
  return (
    <Link href={`/product/${slug}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {compareAt && compareAt > price && (
          <span className="absolute top-3 left-3 bg-accent text-accent-foreground px-2 py-1 text-xs tracking-wide uppercase">
            Sale
          </span>
        )}
      </div>
      <div className="mt-4 space-y-1">
        {category && (
          <p className="text-xs tracking-wide uppercase text-muted-foreground">
            {category}
          </p>
        )}
        <h3 className="font-serif text-lg font-light">{name}</h3>
        <div className="flex items-center gap-2">
          <p className="text-sm">{formatPrice(price)}</p>
          {compareAt && compareAt > price && (
            <p className="text-sm text-muted-foreground line-through">
              {formatPrice(compareAt)}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
