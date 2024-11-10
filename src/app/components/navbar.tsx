import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="bg-black">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center ">
                <h1 className="text-xl font-bold text-white">Portfolio</h1>
                <ul className="flex space-x-4 text-white">
                    <li>
                    <Link href="/">Home</Link>
                    </li>
                    <li>
                    <Link href="/about">About</Link>
                    </li>
                    <li>
                    <Link href="/contact">Contact Me</Link>

                    </li>
                </ul>
            </div>
        </nav>
    );
}