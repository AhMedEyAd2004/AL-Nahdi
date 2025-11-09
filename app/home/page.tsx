import { Categories } from "./categories";
import SeemLessLoopGsapWrapper from "./categories-GsapWrapper";
import FeaturedProducts from "./featuredProducts";
import Footer from "./footer";
import Hero from "./hero";
import { Promos } from "./promos";


export default function HomePage() {
    return (
        <section className="">
            <Hero />
            <Promos />
            <SeemLessLoopGsapWrapper>
                <Categories />
            </SeemLessLoopGsapWrapper>
            <FeaturedProducts />
            <Footer />
        </section>
    )
}
