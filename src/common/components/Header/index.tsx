import Image from "next/image";
import Link from "next/link";

/* const satisfy = localFont({ src: './fonts/Satisfy-Regular.woff2' }); */

export default function Header() {
    return (
        <header className="fixed z-10 top:0 right-0 left-0 md:top-9 md:right-4 md:left-4 md:rounded-lg 
                            flex items-center justify-between bg-slate-100 px-9 py-4">
            <Link href="/" className="flex items-center flex-wrap gap-1">
                <p className="font-satisfy font-semibold text-lg">Online Shop</p>
                <Image src="/icons/tienda.svg" alt="store" width={26} height={26} />
            </Link>
            <nav>
                <ul className="flex items-center gap-5 font-medium text-sm
                                   *:rounded *:py-1 *:px-2 *:cursor-pointer">
                    <li className="border border-teal-500 hover:bg-teal-600 hover:text-white">
                        <a href="#">Login</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}