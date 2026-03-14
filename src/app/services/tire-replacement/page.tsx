import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

export default function TireReplacementPage() {
  const areas = [
    "新潟市", "長岡市", "上越市", "三条市", "新発田市", "柏崎市", "燕市", "村上市", "佐渡市", "南魚沼市", 
    "十日町市", "五泉市", "糸魚川市", "阿賀野市", "見附市", "魚沼市", "小千谷市", "妙高市", "胎内市", "加茂市", 
    "聖籠町", "阿賀町", "田上町", "津南町", "弥彦村", "湯沢町", "関川村", "出雲崎町", "刈羽村", "粟島浦村"
  ];

  return (
    <div className="w-full flex-grow flex flex-col pt-0">
      <div className="w-full bg-slate-900 pt-16 pb-12 mb-12 border-b-4 border-orange-500">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/50 text-orange-300 font-semibold text-sm">
            今の時期のおすすめメニュー！
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            <span className="drop-shadow-[0_0_15px_rgba(249,115,22,1)] mr-2">🚗</span>タイヤ交換レスキュー
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            元ガソリンスタンド主任のプロの技術で、素早く確実にタイヤ交換を行います！
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl pb-24">
        {/* Content Section */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          
          <div className="p-8 md:p-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2 border-b border-slate-100 pb-4">
              ご自宅までお伺いします！
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              重いタイヤを車に積み込んでお店で長時間待つストレスはもう不要です。<br/>
              ご自宅の駐車場で作業を完結させるため、お客様は家の中でゆっくりお待ちいただけます。<br/>
              お急ぎの方はすぐに駆けつけますので、お早めにご予約ください♪
            </p>

            {/* Video Section */}
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              実際の作業例
            </h3>
            <div className="mb-10 aspect-video rounded-2xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/QmPpKKZu_IM" 
                title="タイヤ交換レスキュー" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>

            <div className="bg-slate-50 p-6 md:p-8 rounded-2xl mb-10 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-6">タイヤ交換の料金</h3>
              <ul className="space-y-4">
                <li className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-slate-700">軽自動車</span>
                    <span className="text-2xl font-bold text-orange-600">4,000円</span>
                  </div>
                  <div className="text-sm text-slate-600">
                    <p>作業時間：40分程度</p>
                    <p className="text-slate-400 mt-1">※車が複数台ある場合はお申し付けください</p>
                  </div>
                </li>
                <li className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-slate-700">普通車</span>
                    <span className="text-2xl font-bold text-orange-600">4,500円</span>
                  </div>
                  <div className="text-sm text-slate-600">
                    <p>作業時間：40分程度</p>
                    <p className="text-slate-400 mt-1">※車が複数台ある場合はお申し付けください</p>
                  </div>
                </li>
                <li className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-slate-700">ミニバン・SUV</span>
                    <span className="text-2xl font-bold text-orange-600">5,000円</span>
                  </div>
                  <div className="text-sm text-slate-600">
                    <p>作業時間：40分程度</p>
                    <p className="text-slate-400 mt-1">※車が複数台ある場合はお申し付けください</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Areas Section */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                出張タイヤ交換対応エリア
              </h3>
              <p className="font-bold text-orange-600 mb-4 text-lg text-center bg-orange-50 border border-orange-100 rounded-lg py-3">
                新潟県内どこでもお伺いいたします！
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {areas.map((area, idx) => (
                  <span key={idx} className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full text-sm">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-center mt-12 flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto px-12" asChild>
                <Link href="/contact">タイヤ交換を依頼する</Link>
              </Button>
              <a href="https://line.me/R/ti/p/@271paqpi" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-12 h-14 rounded-full bg-[#06C755] hover:bg-[#05b34c] text-white text-base font-semibold shadow-md transition-all flex items-center justify-center gap-2">
                 <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M22.053 10.366c0-4.329-3.967-7.85-8.847-7.85C8.328 2.516 4.36 6.037 4.36 10.366c0 3.882 2.766 7.159 6.58 7.747.256.054.606.165.694.385.08.199.052.51.025.702l-.183 1.096c-.035.207-.168.826.724.45 8.844-4.896 9.853-7.514 9.853-10.38z" />
                </svg>
                LINEで予約する
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/" className="text-orange-600 hover:text-orange-700 font-semibold transition-colors flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            トップページへ戻る
          </Link>
        </div>

      </div>
    </div>
  );
}
