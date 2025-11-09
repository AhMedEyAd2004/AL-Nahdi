import Image from "next/image";

const categories = [
    {
        name: 'Toothbrushes',
        image: 'https://images.unsplash.com/photo-1550985543-f1ea83691cd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjB0b290aGJydXNoJTIwd2hpdGV8ZW58MXx8fHwxNzYyNDQ5ODc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        count: '120+ Products'
    },
    {
        name: 'Toothpaste',
        image: 'https://images.unsplash.com/photo-1712168044214-f5a272c23a5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b290aHBhc3RlJTIwdHViZXxlbnwxfHx8fDE3NjI0MjIzNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        count: '80+ Products'
    },
    {
        name: 'Dental Floss',
        image: 'https://images.unsplash.com/photo-1564420228450-d9a5bc8d6565?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBmbG9zc3xlbnwxfHx8fDE3NjI1MTI5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        count: '45+ Products'
    },
    {
        name: 'Mouthwash',
        image: 'https://images.unsplash.com/photo-1626006864160-aa21716d0204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3V0aHdhc2glMjBib3R0bGV8ZW58MXx8fHwxNzYyNTEyOTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        count: '60+ Products'
    },
    {
        name: 'Whitening Kits',
        image: 'https://images.unsplash.com/photo-1654373535457-383a0a4d00f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWV0aCUyMHdoaXRlbmluZ3xlbnwxfHx8fDE3NjI1MTI5MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        count: '35+ Products'
    },
    {
        name: 'Electric Brushes',
        image: 'https://images.unsplash.com/photo-1612181819081-950d35f4d826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHRvb3RoYnJ1c2h8ZW58MXx8fHwxNzYyNTEyOTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        count: '50+ Products'
    }
];

export function Categories() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl mb-4">Shop by Category</h2>
                    <p className="text-xl text-gray-600">Find the perfect products for your dental care routine</p>
                </div>
                <div className="max-w-7xl w-[80vw] mx-auto overflow-x-hidden">
                    <div className="grid grid-flow-col w-screen overflow-x-hidden grid-rows-1">
                        {categories.map((category) => (
                            <div
                                key={category.name}
                                className="group cursor-pointer box px-3 max-sm:w-[200px] w-[300px]"
                            >
                                <div className="relative aspect-square rounded-lg overflow-hidden mb-3 border border-gray-200 group-hover:border-red-600 transition-colors">
                                    <Image
                                        fill
                                        sizes="100%"
                                        src={category.image}
                                        alt={category.name}
                                        draggable={false}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t pointer-events-none from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                <div className="text-center">
                                    <h3 className="mb-1 group-hover:text-red-600 transition-colors">{category.name}</h3>
                                    <p className="text-sm text-gray-500">{category.count}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
