import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function FeePage() {
  const baseFees = [
    { time: "1時間", price: "4,500円" },
    { time: "2時間", price: "9,000円" },
    { time: "3時間", price: "13,500円" },
    { time: "4時間", price: "18,000円" },
  ];

  const tireFees = [
    { type: "軽自動車", price: "4,000円", time: "40分程度", note: "※車が複数台ある場合はお申し付けください" },
    { type: "普通車", price: "4,500円", time: "40分程度", note: "※車が複数台ある場合はお申し付けください" },
    { type: "ミニバン・SUV", price: "5,000円", time: "40分程度", note: "※車が複数台ある場合はお申し付けください" },
  ];

  return (
    <div className="w-full flex-grow flex flex-col pt-0">
      <div className="w-full bg-slate-900 pt-16 pb-12 mb-12 border-b-4 border-orange-500">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            <span className="text-orange-500 mr-2 drop-shadow-[0_0_15px_rgba(249,115,22,1)]">💰</span>料金表
          </h1>
          <p className="text-slate-300 text-lg">
            分かりやすく安心な料金体系を心がけております。<br className="hidden md:block"/>
            お見積りは無料ですので、まずはお気軽にご相談ください。
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl pb-24">

        {/* 1. 基本作業費 */}
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 bg-orange-50 rounded-2xl p-5 md:px-8 md:py-6 mb-8 flex items-center gap-4 border-l-8 border-orange-500 shadow-sm">
            <span className="text-orange-500 text-4xl md:text-5xl drop-shadow-sm">🔧</span>
            基本作業費
          </h2>
          <p className="text-slate-600 mb-8 md:text-lg">草刈りなどの各種作業の基本となる料金です。</p>
          
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-orange-50 border-b border-orange-100">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-orange-800">作業時間</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-orange-800">料金（税込）</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {baseFees.map((fee, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-6 font-semibold text-slate-800 text-lg md:text-xl">{fee.time}</td>
                    <td className="px-6 py-6 text-orange-600 font-extrabold text-2xl md:text-4xl">{fee.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="p-4 bg-slate-50 text-sm text-slate-600">
              ※4時間以上のご依頼もお待ちしています！<br/>
              ※複数名のスタッフで作業もできますのでお問い合わせください♪
            </div>
          </div>
        </div>

        {/* 2. タイヤ交換 */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 bg-orange-50 rounded-2xl p-5 md:px-8 md:py-6 mb-8 flex items-center gap-4 border-l-8 border-orange-500 shadow-sm">
            <span className="text-orange-500 text-4xl md:text-5xl drop-shadow-sm">🚗</span>
            タイヤ交換レスキュー
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tireFees.map((tire, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 md:p-8 flex flex-col shadow-sm border border-slate-100 hover:border-orange-300 hover:shadow-md transition-all">
                <h3 className="text-xl md:text-2xl font-extrabold text-slate-800 text-center mb-6">{tire.type}</h3>
                <div className="text-center mb-6 flex-grow">
                  <span className="inline-block text-xs md:text-sm font-bold text-slate-500 bg-slate-100 px-4 py-1.5 rounded-full mb-3">作業料金</span><br/>
                  <span className="text-4xl md:text-5xl font-black text-orange-600 tracking-tight">{tire.price}</span>
                </div>
                <ul className="text-sm md:text-base font-medium text-slate-600 space-y-3 mt-2 pt-6 border-t border-slate-100">
                  <li className="flex items-center gap-2"><span className="text-orange-500">⏱</span>作業時間：{tire.time}</li>
                  <li className="text-xs text-slate-500 mt-2 leading-relaxed">{tire.note}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 3. オイル交換 */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 bg-orange-50 rounded-2xl p-5 md:px-8 md:py-6 mb-8 flex flex-wrap items-center gap-4 border-l-8 border-orange-500 shadow-sm">
            <div className="flex items-center gap-4">
              <span className="text-orange-500 text-4xl md:text-5xl drop-shadow-sm">🛢️</span>
              オイル交換レスキュー
            </div>
            <span className="text-sm md:text-base font-bold bg-orange-200 text-orange-900 px-4 py-1.5 rounded-full mt-2 md:mt-0 md:ml-2">新潟市内限定</span>
          </h2>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm flex flex-col md:flex-row gap-10">
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block text-sm font-bold text-slate-500 bg-slate-100 px-4 py-1.5 rounded-full mb-4">工賃</span>
              <p className="text-5xl md:text-6xl font-black text-orange-600 mb-8 tracking-tight">3,500<span className="text-3xl md:text-4xl font-extrabold">円</span></p>
              <ul className="text-base font-medium text-slate-600 space-y-4 w-fit mx-auto md:mx-0">
                <li className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-lg"><span className="text-orange-500 text-lg">⏱</span>作業時間：1時間程度</li>
                <li className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-lg"><span className="text-orange-500 text-lg">🚙</span>対象：軽自動車・普通車</li>
              </ul>
            </div>
            <div className="flex-[1.2] border-t md:border-t-0 md:border-l border-slate-200 pt-8 md:pt-0 md:pl-10 flex flex-col justify-center">
              <h3 className="font-bold text-slate-800 text-lg mb-4 flex items-center gap-2"><span className="text-orange-500">ℹ️</span>オイルに関して</h3>
              <p className="text-base text-slate-600 mb-8 leading-relaxed bg-slate-50 p-4 rounded-xl">
                オイルはお客様で準備して頂くか弊社で事前にご用意します。<br className="hidden md:block"/>弊社で用意する場合、オイルの料金は作業料と一緒にご請求いたします。
              </p>
              <div className="bg-orange-50 p-5 md:p-6 rounded-2xl w-full border border-orange-200 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-bold text-orange-800 bg-orange-200 px-3 py-1 rounded-full">オプション</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mt-2">
                  <span className="text-base md:text-lg font-bold text-slate-700">エレメント交換</span>
                  <span className="text-2xl md:text-3xl font-black text-orange-600">＋1,000円</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-4 px-2">※国産車のみのサービスとなります。場合によりお断りすることがあります。</p>
        </div>

        {/* 出張費について */}
        <div className="bg-orange-50 rounded-3xl p-8 border border-orange-100 text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            出張費について
          </h2>
          <p className="text-slate-700 font-bold text-lg mb-4">
            新潟市・聖籠町・新発田市への出張費用は<span className="text-orange-600 text-2xl mx-1">無料</span>です！
          </p>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            その他の近隣の市はお問い合わせくだされば、無料見積もり致します！<br/>
            詳しいお見積りは担当者より説明いたします！<br/>
            （※オイル交換のみ、新潟市内への出張費用は1,000円となります。）
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link href="/contact">無料で相談・見積もりする</Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-[#06C755] text-[#06C755] hover:bg-[#06C755]/10" asChild>
              <a href="https://line.me/R/ti/p/@271paqpi" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                 <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M22.053 10.366c0-4.329-3.967-7.85-8.847-7.85C8.328 2.516 4.36 6.037 4.36 10.366c0 3.882 2.766 7.159 6.58 7.747.256.054.606.165.694.385.08.199.052.51.025.702l-.183 1.096c-.035.207-.168.826.724.45 8.844-4.896 9.853-7.514 9.853-10.38zM9.537 12.872a.375.375 0 01-.375.375h-2.19a.375.375 0 01-.375-.375V8.121a.375.375 0 01.375-.375h2.19a.375.375 0 01.375.375v4.751zm1.616-.375a.375.375 0 00-.375.375v-4.751a.375.375 0 00-.375-.375h-2.19a.375.375 0 00-.375.375v4.751a.375.375 0 00.375.375h2.19zM18.8 9.94h-1.625V8.121a.375.375 0 00-.375-.375h-1.125a.375.375 0 00-.375.375v4.751a.375.375 0 00.375.375h2.75a.375.375 0 00.375-.375v-.865a.375.375 0 00-.375-.375zm-3.321 2.932a.375.375 0 01-.375.375h-1.125a.375.375 0 01-.375-.375V8.121a.375.375 0 01.375-.375h1.125a.375.375 0 01.375.375v4.751z" />
                </svg>
                LINEでお問い合わせ
              </a>
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
