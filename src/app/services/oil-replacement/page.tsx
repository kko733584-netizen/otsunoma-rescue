import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function OilReplacementPage() {
  return (
    <div className="w-full flex-grow flex flex-col pt-0">
      <div className="w-full bg-slate-900 pt-16 pb-12 mb-12 border-b-4 border-orange-500">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <div className="inline-block px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 font-semibold text-sm mb-4">
            2025.11.13更新
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            <span className="drop-shadow-[0_0_15px_rgba(249,115,22,1)] mr-2">🛢️</span>オイル交換レスキュー
          </h1>
          <p className="text-lg md:text-xl text-orange-400 font-bold max-w-2xl mx-auto leading-relaxed mt-2 bg-orange-950/30 rounded-lg py-3 border border-orange-900/50">
            【新潟市内限定】出張でオイル交換をご提供♪最短即日でお伺いします！
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl pb-24">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="p-8 md:p-12">
            
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2 border-b border-slate-100 pb-4">
              サービスの内容
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              新潟市内限定でお車のオイル交換をします！<br/>
              ご依頼者さまの要望に合わせて、自宅や車庫など指定の場所まで行き、オイル交換をするサービスです。<br/>
              「スキマ時間にオイル交換を終えたい」「車屋さんに行くのがめんどくさい」「安心できるサービスを使いたい」<br/>
              そんな皆さんのお声にお応えできるよう、熟練のスタッフを用意しております。<br/>
              まずはお気軽にご相談ください♪
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-inner">
                <h3 className="font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">オイル交換でお困りの方</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center gap-2"><span className="text-slate-400">×</span>スキマ時間にオイル交換をしたい</li>
                  <li className="flex items-center gap-2"><span className="text-slate-400">×</span>車屋さんまで行くのがめんどくさい</li>
                  <li className="flex items-center gap-2"><span className="text-slate-400">×</span>安心できるサービスを使いたい</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-6 rounded-2xl border border-orange-200">
                <h3 className="font-bold text-orange-800 mb-4 pb-2 border-b border-orange-200">お茶の間レスキュー隊なら！</h3>
                <ul className="space-y-4 text-orange-900">
                  <li>
                    <strong className="flex items-center gap-1 text-orange-600"><span className="text-green-500">✅</span>出張だからスキマ時間に！</strong>
                    <span className="text-sm block mt-1">出張サービスなので、お家にいてオイル交換が可能です！</span>
                  </li>
                  <li>
                    <strong className="flex items-center gap-1 text-orange-600"><span className="text-green-500">✅</span>ご依頼は最短当日に可能！</strong>
                    <span className="text-sm block mt-1">最短で当日に可能です！自宅で待っている間に終わるので、楽ちん♪</span>
                  </li>
                  <li>
                    <strong className="flex items-center gap-1 text-orange-600"><span className="text-green-500">✅</span>高いサービス品質を保証！</strong>
                    <span className="text-sm block mt-1">ガソリンスタンドで7年間、主任を勤めたスタッフがお伺いします！経験の豊富な整備士です！</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 p-6 md:p-8 rounded-2xl mb-10 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-6">オイル交換の料金</h3>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h4 className="font-bold text-slate-800 text-lg mb-4 text-center">軽自動車・普通車</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-slate-500">作業料金（工賃）</p>
                    <p className="text-3xl font-extrabold text-orange-600 mb-2">3,500円</p>
                    <p className="text-sm text-slate-600">作業時間：1時間程度</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-700">
                    <strong>オイルに関して：</strong><br/>
                    オイルはお客様で準備して頂くか弊社で事前にご用意します。弊社で用意する場合、オイルの料金は作業料と一緒にご請求いたします。
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-4 text-right">※車が複数台ある場合はお申し付けください</p>
              </div>

              <div className="mt-6 bg-orange-50 p-6 rounded-xl border border-orange-100">
                <h4 className="font-bold text-orange-800 mb-2">オプションメニュー</h4>
                 <p className="text-slate-700 mb-2">ご一緒にエレメント交換はいかがでしょうか？</p>
                <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-orange-100">
                  <span className="font-semibold text-slate-700">エレメント交換工賃</span>
                  <span className="font-bold text-orange-600">＋1,000円</span>
                </div>
              </div>
               
              <div className="mt-6 p-4 border border-slate-200 rounded-lg bg-white text-sm">
                <p className="font-bold text-slate-700">⚠️注意事項</p>
                <p className="text-slate-600 mt-1">国産車のみのサービスとなります。<br/>※場合により国産車でもお断りすることがあります</p>
              </div>
            </div>

            {/* 出張費について */}
            <div className="mb-10 text-center bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-slate-800 mb-2">出張費について</h4>
              <p className="text-slate-700">
                新潟市内への出張費用は<span className="font-bold text-orange-600 mx-1">1,000円</span>でお伺いします。<br/>
                その他の近隣の市はお問い合わせくだされば、無料見積もり致します！
              </p>
            </div>
            
            <div className="text-center flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto px-12" asChild>
                <Link href="/contact">オイル交換を予約・相談する</Link>
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
