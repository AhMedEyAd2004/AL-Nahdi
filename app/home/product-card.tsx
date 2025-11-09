import { ButtonAnimation } from '@/components/ButtonAnimation';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import Image from 'next/image';

interface ProductCardProps {
    name: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviews: number;
    image: string;
    badge?: string;
}

export function ProductCard({ name, price, originalPrice, rating, reviews, image, badge }: ProductCardProps) {
    return (
        <div className="max-w-[300px] group flex flex-col bg-white rounded-lg border hover:shadow-lg transition-all duration-300">
            <div className="relative overflow-hidden rounded-t-lg">
                {badge && (
                    <ButtonAnimation shine='slow' className="absolute h-fit top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm z-10">
                        {badge}
                    </ButtonAnimation>
                )}
                <ButtonAnimation scale_onInteract variant={null} className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition z-10 opacity-0 group-hover:opacity-100">
                    <Heart className="w-5 h-5" />
                </ButtonAnimation>
                <div className="aspect-square bg-gray-50">
                    <Image
                        fill sizes='100%'
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                </div>
            </div>
            <div className="p-4 flex flex-col flex-1">
                <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                                }`}
                        />
                    ))}
                    <span className="text-sm text-gray-500 ml-1">({reviews})</span>
                </div>
                <h3 className="mb-2 text-gray-900 line-clamp-2">{name}</h3>
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-red-600">${price.toFixed(2)}</span>
                    {originalPrice && (
                        <span className="text-sm text-gray-400 line-through">${originalPrice.toFixed(2)}</span>
                    )}
                </div>
                <ButtonAnimation scale_onInteract className="w-full mt-auto bg-red-600 hover:scale-105 hover:bg-red-700">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                </ButtonAnimation>
            </div>
        </div>
    );
}
