import AnimatedNumber from '@/components/animateNumber';
import AnimateToTop from '@/components/animateToTop';
import { ButtonAnimation } from '@/components/ButtonAnimation';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
    // bg-linear-to-r from-red-50 to-pink-50
    return (
        <section className=" min-w-screen min-h-screen max-container  px-4 flex justify-center items-center py-16">
            <div className='max-w-[80%]'>
                <Badge className="bg-red-100 text-main-600 animate-bounce text-sm hover:bg-main-950 mb-4">
                    Trusted by Dental Professionals
                </Badge>
                <header className="text-5xl mb-6 text-foreground max-w-180">
                    <h1>
                        Premium Dental Equipment for{" "}
                        <span className="text-main-600">Modern Clinics</span>
                    </h1>
                </header>
                <p className="text-xl text-foreground/70 mb-8">
                    Discover professional-grade instruments, sterilization tools, and supplies
                    tailored for dental practitioners. Elevate your clinic’s precision and patient care
                    with trusted brands and innovative technology.
                </p>
                <div className="flex gap-4">
                    <ButtonAnimation scale_onInteract className="bg-main-600 hover:bg-main-700">
                        Shop Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </ButtonAnimation>
                    <ButtonAnimation scale_onInteract variant={null} className="border-main-600 text-main-600 hover:bg-main-50">
                        Learn More
                    </ButtonAnimation>
                </div>

                <div className="grid grid-cols-3 max-sm:grid-cols-2 gap-6 mt-12 text-xl lg:text-2xl">
                    <div>
                        <AnimateToTop animateOpacity animateDirectionY='top' className='text-main-600 '>
                            <div className='flex gap-1'>
                                <AnimatedNumber value={500} />
                                <span>+</span>
                            </div>
                            <div className="text-sm lg:text-xl text-gray-600">Products</div>
                        </AnimateToTop>
                    </div>
                    <div>
                        <AnimateToTop animateOpacity animateDirectionY='top' className="text-main-600">
                            <AnimatedNumber value={20000} />
                            <div className="text-sm lg:text-xl text-gray-600">Happy Customers</div>
                        </AnimateToTop>
                    </div>
                    <div >
                        <AnimateToTop animateOpacity animateDirectionY='top' className='text-main-600'>
                            <div className='flex gap-1  items-center'>
                                <AnimatedNumber value={4.9} fixedValue={1} />
                                <Star className='size-[18px] stroke-1 fill-main-600' />
                            </div>
                            <div className="text-sm lg:text-xl text-gray-600">Rating</div>
                        </AnimateToTop>
                    </div>
                </div>
            </div>

        </section>
    );
}

// function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
//     return (
//         <span className={`inline-block px-3 py-1 rounded-full text-sm ${className}`}>
//             {children}
//         </span>
//     );
// }
