import Link from "next/link";

export default function Navbar(){
  return(
    <nav>
      <div className="flex justify-between items-center h-16 bg-black text-white fixed w-full px-8 font-mono z-50 top-0 left-0">
        <div>
          <h1 className="text-2xl font-bold items-center">Logo</h1>
        </div>
        <div className="flex gap-4 items-center">
        <Link href="/">Home page</Link>
        <Link href="/About">About page</Link>
        <Link href="/contact">Contact page</Link>
        <Link href="/products">Products</Link>
        <Link href="/settings">Settings</Link>
        <Link href="/User-form">User-form</Link>
        <Link href="/Task-Tracker">Task-Tracker</Link>
        <Link href="/Login">Login</Link>
      </div>
      </div>
    </nav>
  )
}
