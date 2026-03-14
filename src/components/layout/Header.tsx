import Link from "next/link";

const navLinks = [
  { href: "/", label: "ホーム" },
  { href: "/fee", label: "料金表" },
  { href: "/recruit", label: "隊員募集♪" },
  { href: "/contact", label: "お問い合わせ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-orange-600 hover:text-orange-700 transition-colors"
        >
          <span className="text-2xl">👷‍♂️</span>
          お茶の間レスキュー隊
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all group-hover:w-full rounded-full"></span>
            </Link>
          ))}
          
          <div className="flex items-center gap-3 ml-4">
            <a
              href="https://line.me/R/ti/p/@271paqpi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#06C755] hover:bg-[#05b34c] text-white text-sm font-semibold shadow-md shadow-green-500/20 transition-all hover:-translate-y-0.5 flex items-center gap-1.5"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M22.053 10.366c0-4.329-3.967-7.85-8.847-7.85C8.328 2.516 4.36 6.037 4.36 10.366c0 3.882 2.766 7.159 6.58 7.747.256.054.606.165.694.385.08.199.052.51.025.702l-.183 1.096c-.035.207-.168.826.724.45 8.844-4.896 9.853-7.514 9.853-10.38zM9.537 12.872a.375.375 0 01-.375.375h-2.19a.375.375 0 01-.375-.375V8.121a.375.375 0 01.375-.375h2.19a.375.375 0 01.375.375v4.751zm1.616-.375a.375.375 0 00-.375.375v-4.751a.375.375 0 00-.375-.375h-2.19a.375.375 0 00-.375.375v4.751a.375.375 0 00.375.375h2.19zM18.8 9.94h-1.625V8.121a.375.375 0 00-.375-.375h-1.125a.375.375 0 00-.375.375v4.751a.375.375 0 00.375.375h2.75a.375.375 0 00.375-.375v-.865a.375.375 0 00-.375-.375zm-3.321 2.932a.375.375 0 01-.375.375h-1.125a.375.375 0 01-.375-.375V8.121a.375.375 0 01.375-.375h1.125a.375.375 0 01.375.375v4.751z" />
              </svg>
              LINE
            </a>
            <Link 
              href="/contact"
              className="px-5 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold shadow-md shadow-orange-500/20 transition-all hover:-translate-y-0.5"
            >
              ご相談はこちら
            </Link>
          </div>
        </nav>

        {/* Mobile menu button (Simplified for now) */}
        <button className="md:hidden p-2 text-slate-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </header>
  );
}
