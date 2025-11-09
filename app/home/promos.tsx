import { Truck, Shield, Headphones, RotateCcw } from 'lucide-react';

const features = [
    {
        icon: Truck,
        title: 'Free Shipping',
        description: 'On orders over $50'
    },
    {
        icon: Shield,
        title: 'Secure Payment',
        description: '100% secure transactions'
    },
    {
        icon: RotateCcw,
        title: 'Easy Returns',
        description: '30-day return policy'
    },
    {
        icon: Headphones,
        title: '24/7 Support',
        description: 'Dedicated customer service'
    }
];

export function Promos() {
    return (
        <section className="py-12 bg-white border-y">
            <div className="container mx-auto px-4">
                <ul className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <li key={index} className="text-center">
                            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <feature.icon className="w-8 h-8 text-red-600" />
                            </div>
                            <h3 className="mb-2">{feature.title}</h3>
                            <p className="text-sm text-gray-600">{feature.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
