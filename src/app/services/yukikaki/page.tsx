import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function YukikakiPage() {
  return (
    <div className="w-full flex-grow flex flex-col pt-0">
      <div className="w-full bg-slate-900 pt-16 pb-12 mb-12 border-b-4 border-orange-500">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/50 text-orange-300 font-semibold text-sm">
            これからの季節におすすめ！
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            <span className="drop-shadow-[0_0_15px_rgba(249,115,22,1)] mr-2">⛄</span>雪かきレスキュー
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            重労働の雪かきは、いとうさんにお任せ！<br/>急な大雪にも対応いたします。
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl pb-24">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="p-8 md:p-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span className="text-orange-500">◆</span>
              体力勝負の雪かき、代行します！
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              「朝起きたら車が出せない」「屋根から落ちた雪で窓が埋まってしまった」「離れて暮らす親の家が心配…」<br/>
              そんな新潟の冬の困りごとに、すぐ駆けつけます！<br/>
              スコップやスノーダンプ等の必要な道具はこちらで持参いたします。
            </p>

            <div className="bg-slate-50 p-6 md:p-8 rounded-2xl mb-10 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-4">料金について</h3>
              <p className="text-slate-700 mb-4">
                雪かきの料金は、通常<strong>「基本作業費（1時間4,500円〜）」</strong>をベースに計算いたします。<br/>
                ただし、広さや積雪量、雪質（固さなど）によって作業時間が変動するため、まずは状況をお伺いした上で<strong>【無料お見積もり】</strong>をご提案させていただきます。
              </p>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center">
                <p className="text-orange-600 font-bold mb-2">＼ まずは無料でお見積りします ／</p>
                <p className="text-sm text-slate-600">お電話、またはお問い合わせフォーム・LINEより状況をお知らせください。</p>
              </div>
            </div>
            
            <div className="text-center">
              <Button size="lg" className="w-full md:w-auto px-12" asChild>
                <Link href="/contact">雪かきを依頼・相談する</Link>
              </Button>
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
