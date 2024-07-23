import { Header, Footer } from "@/common";
import { Categoria } from "./components";
import { satisfy, bungee } from "@/lib/fonts"

export default function HomePage() {
    return (
        <main className={`${satisfy.variable} ${bungee.variable} w-full relative`}>
            <Header />
            <Categoria />
            {/* <Footer /> */}
        </main>
    )
}