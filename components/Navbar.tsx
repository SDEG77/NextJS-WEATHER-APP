import Link from "next/link"

export default function Navbar() {
  type Link = {
    href: string
    label: string
  };

  const links = [
    { href: "/", label: "Current Weather" },
    { href: "/past", label: "Past Weather" },
    { href: "/users", label: "Users" },
  ]; 

  return (
    <nav className="flex bg-blue-500 text-white justify-between items-center px-10 h-12">
      <h1>Sigrae Weather!</h1>

      <div className="flex gap-5 h-full items-center">
        { 
          links.map((link: Link) => {
            return (
              <Link className="h-full flex items-center hover:bg-amber-300 transition-all px-3" 
              href={link.href} key={link.href} >
                {link.label}
              </Link>
            )
          })
        }
      </div>
    </nav>
  )
}
