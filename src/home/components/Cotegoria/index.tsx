import Image from "next/image"
import Link from "next/link"

export default function Categoria() {
    return (
        <>
            <div className="pt-28 pb-3 px-4 bg-grad text-center md:pt-32 
                            flex justify-evenly items-center flex-wrap gap-2">
                <div className="text-white">
                    <h1 className="text-6xl max-sm:text-4xl font-satisfy">Tiendas</h1>
                    <h2 className="max-sm:text-xs font-sans">Encuentra los mejores productos al mejor precio⚡</h2>
                </div>
                <Image className="rounded-lg" src="/images/tienda.png" alt="logo de portada" width={400} height={400} />
            </div>
            <div className="grid grid-cols-1 gap-10
                            px-4 py-10 
                            min-[500px]:grid-cols-2 
                            md:grid-cols-3 md:px-8
                            lg:grid-cols-4 
                            min-[400px]:px-10 min-[500px]:px-4">
                <section className="outline-dashed outline-offset-2 outline-2 rounded-3xl
                                    scale-100
                                    duration-700
                                    hover:-translate-y-0
                                    hover:scale-95">
                    <Link href="/store" className="flex flex-col items-center justify-end h-full w-full">
                        <Image
                            className="rounded-3xl p-1"
                            src="/images/_marDetalles.png"
                            alt="logo de portada"
                            width={350}
                            height={350} />
                        <p className="font-bungee p-2 text-blue-900">Mardetalles</p>
                    </Link>
                </section>
                <section className="outline-dashed outline-offset-2 outline-2 rounded-3xl
                                    scale-100
                                    duration-700
                                    hover:-translate-y-0
                                    hover:scale-95">
                    <Link href="/" className="flex flex-col items-center justify-end h-full">
                        <Image
                            className="rounded-3xl p-1"
                            src="/images/heladeria.jpg"
                            alt="logo de portada"
                            width={350}
                            height={350} />
                        <p className="font-bungee p-2 text-blue-900">Saborartico</p>
                    </Link>
                </section>

            </div>
        </>
    )
}