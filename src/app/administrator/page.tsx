import Link from "next/link";

export default function AdministratorPage() {
  return (
    <div className="w-full flex-grow flex flex-col pt-12">
      <div className="container mx-auto px-4 max-w-3xl pb-24">
        
        <h1 className="text-3xl font-bold text-slate-800 mb-10 pb-4 border-b border-slate-200">
          運営者情報
        </h1>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 animate-fade-in-up">
          <dl className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 border-b border-slate-100 pb-6">
              <dt className="text-slate-500 font-semibold md:py-2">屋号</dt>
              <dd className="col-span-2 text-slate-800 text-lg font-medium md:py-2">お茶の間レスキュー隊</dd>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 border-b border-slate-100 pb-6">
              <dt className="text-slate-500 font-semibold md:py-2">代表者</dt>
              <dd className="col-span-2 text-slate-800 font-medium md:py-2">伊藤</dd>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 border-b border-slate-100 pb-6">
              <dt className="text-slate-500 font-semibold md:py-2">所在地</dt>
              <dd className="col-span-2 text-slate-800 md:py-2">
                新潟県を中心に出張対応<br/>
                （主な対応エリア：新潟市、聖籠町、新発田市）
              </dd>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 pb-2">
              <dt className="text-slate-500 font-semibold md:py-2">お問い合わせ先</dt>
              <dd className="col-span-2 text-slate-800 md:py-2">
                当サイトの<Link href="/contact" className="text-orange-600 hover:text-orange-700 underline underline-offset-2 mx-1">お問い合わせフォーム</Link>よりご連絡ください。
              </dd>
            </div>

          </dl>
        </div>

      </div>
    </div>
  );
}
