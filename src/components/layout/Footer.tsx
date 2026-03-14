import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 py-12 text-slate-300 mt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <span className="text-2xl">👷‍♂️</span>
            お茶の間レスキュー隊
          </Link>
          <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
            新潟市、聖籠町、新発田市を中心に活動する地域密着型の便利屋です。お困りごとは何でもご相談ください！
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-semibold mb-2">メニュー</h3>
          <Link href="/fee" className="text-sm hover:text-orange-400 transition-colors w-fit">料金表</Link>
          <Link href="/recruit" className="text-sm hover:text-orange-400 transition-colors w-fit">隊員募集♪</Link>
          <Link href="/contact" className="text-sm hover:text-orange-400 transition-colors w-fit">お問い合わせ</Link>
          <a href="https://line.me/R/ti/p/@271paqpi" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[#06C755] transition-colors w-fit flex items-center gap-1.5 mt-2">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#06C755]">
              <path d="M22.053 10.366c0-4.329-3.967-7.85-8.847-7.85C8.328 2.516 4.36 6.037 4.36 10.366c0 3.882 2.766 7.159 6.58 7.747.256.054.606.165.694.385.08.199.052.51.025.702l-.183 1.096c-.035.207-.168.826.724.45 8.844-4.896 9.853-7.514 9.853-10.38zM9.537 12.872a.375.375 0 01-.375.375h-2.19a.375.375 0 01-.375-.375V8.121a.375.375 0 01.375-.375h2.19a.375.375 0 01.375.375v4.751zm1.616-.375a.375.375 0 00-.375.375v-4.751a.375.375 0 00-.375-.375h-2.19a.375.375 0 00-.375.375v4.751a.375.375 0 00.375.375h2.19zM18.8 9.94h-1.625V8.121a.375.375 0 00-.375-.375h-1.125a.375.375 0 00-.375.375v4.751a.375.375 0 00.375.375h2.75a.375.375 0 00.375-.375v-.865a.375.375 0 00-.375-.375zm-3.321 2.932a.375.375 0 01-.375.375h-1.125a.375.375 0 01-.375-.375V8.121a.375.375 0 01.375-.375h1.125a.375.375 0 01.375.375v4.751z" />
            </svg>
            LINEでお問い合わせ
          </a>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-semibold mb-2">運営に関する情報</h3>
          <Link href="/privacy" className="text-sm hover:text-orange-400 transition-colors w-fit">プライバシーポリシー</Link>
          <Link href="/administrator" className="text-sm hover:text-orange-400 transition-colors w-fit">運営者情報</Link>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} 新潟の便利屋♪お茶の間レスキュー隊いとうさん All rights reserved.
      </div>
    </footer>
  );
}
