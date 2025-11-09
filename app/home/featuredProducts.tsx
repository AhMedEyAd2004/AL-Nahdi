import { ButtonAnimation } from '@/components/ButtonAnimation';
import { ProductCard } from './product-card';

const products = [
    {
        name: 'Professional Electric Toothbrush with Smart Timer',
        price: 89.99,
        originalPrice: 129.99,
        rating: 4.8,
        reviews: 324,
        image: 'https://images.unsplash.com/photo-1612181819081-950d35f4d826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHRvb3RoYnJ1c2h8ZW58MXx8fHwxNzYyNTEyOTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        badge: '30% OFF'
    },
    {
        name: 'Advanced Whitening Toothpaste - Mint Flavor',
        price: 12.99,
        originalPrice: 16.99,
        rating: 4.6,
        reviews: 256,
        image: 'https://images.unsplash.com/photo-1712168044214-f5a272c23a5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b290aHBhc3RlJTIwdHViZXxlbnwxfHx8fDE3NjI0MjIzNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        badge: 'BESTSELLER'
    },
    {
        name: 'Premium Dental Floss Set - 6 Pack',
        price: 18.99,
        rating: 4.7,
        reviews: 189,
        image: 'https://images.unsplash.com/photo-1564420228450-d9a5bc8d6565?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBmbG9zc3xlbnwxfHx8fDE3NjI1MTI5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
        name: 'Antibacterial Mouthwash - Fresh Mint 1L',
        price: 14.99,
        originalPrice: 19.99,
        rating: 4.5,
        reviews: 412,
        image: 'https://images.unsplash.com/photo-1626006864160-aa21716d0204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3V0aHdhc2glMjBib3R0bGV8ZW58MXx8fHwxNzYyNTEyOTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        badge: 'SALE'
    },
    {
        name: 'Professional Teeth Whitening Kit - 14 Day Treatment',
        price: 49.99,
        originalPrice: 79.99,
        rating: 4.9,
        reviews: 567,
        image: 'https://images.unsplash.com/photo-1654373535457-383a0a4d00f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWV0aCUyMHdoaXRlbmluZ3xlbnwxfHx8fDE3NjI1MTI5MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        badge: 'HOT'
    },
    {
        name: 'Soft Bristle Toothbrush Pack of 4',
        price: 9.99,
        rating: 4.4,
        reviews: 203,
        image: 'https://images.unsplash.com/photo-1550985543-f1ea83691cd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjB0b290aGJydXNoJTIwd2hpdGV8ZW58MXx8fHwxNzYyNDQ5ODc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
        name: 'Travel Dental Care Kit with Case',
        price: 24.99,
        rating: 4.6,
        reviews: 145,
        image: 'https://images.unsplash.com/photo-1684607632845-723f8f427110?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjYXJlJTIwc21pbGV8ZW58MXx8fHwxNzYyNTA4NzEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        badge: 'NEW'
    },
    {
        name: 'Charcoal Whitening Toothpaste - Natural',
        price: 15.99,
        originalPrice: 22.99,
        rating: 4.7,
        reviews: 289,
        image: 'https://images.unsplash.com/photo-1712168044214-f5a272c23a5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b290aHBhc3RlJTIwdHViZXxlbnwxfHx8fDE3NjI0MjIzNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
];

export default function FeaturedProducts() {
    return (
        <section className="pt-16 pb-10 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl mb-4">Featured Products</h2>
                    <p className="text-xl text-gray-600">Top-rated dental care essentials for your perfect smile</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-fit mx-auto">
                    {products.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <ButtonAnimation scale_onInteract variant={null}
                    className="text-main-600 border-2 py-5! text-xl bg-white border-main-800 hover:bg-main-600 transition hover:text-white px-8 rounded-xl font-medium">
                    View All Products
                </ButtonAnimation>
            </div>
        </section>
    );
}
