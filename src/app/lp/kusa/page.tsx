import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

// 1. SEO Metadata
export const metadata: Metadata = {
  title: '新潟市の草刈り・草むしりは「お茶の間レスキュー隊」へ！最短即日・お見積り無料',
  description: '新潟市の草刈り、草取りなどはお茶の間レスキュー隊にお任せください！最短即日対応、無料見積り、明朗会計で安心の実績。',
  keywords: '新潟市, 草刈り, 草取り, 無人依頼, お茶の間レスキュー隊, 見積り無料',
};

// Mock Reviews Data
const reviews = [
  {
    name: 'Sさん（新潟市）',
    rating: 5,
    text: '丁寧な草刈りで、見違えるように綺麗になりました！連絡もスムーズで安心して任せられました。',
    date: '2週間前',
  },
  {
    name: 'Kさん（新発田市）',
    rating: 5,
    text: '暑い中、長時間作業していただき本当に助かりました。また来年もぜひお願いしたいです。',
    date: '1ヶ月前',
  },
  {
    name: 'Mさん（聖籠町）',
    rating: 4,
    text: '即日で対応してくれて助かりました！料金も分かりやすくて良心的です。',
    date: '2ヶ月前',
  },
];

export default function GrassCuttingLP() {
  return (
    <div className="w-full flex-grow flex flex-col pt-0 bg-slate-50 font-sans">
      
      {/* 2. Hero Section (FV) */}
      <section className="relative w-full bg-gradient-to-br from-green-600 to-green-800 py-16 md:py-24 text-center overflow-hidden">
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
        <div className="absolute top-10 left-10 w-64 h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" style={{ animationDelay: '2s' }}></div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          <div className="inline-block mb-4 md:mb-6 px-4 py-1.5 md:py-2 rounded-full bg-white text-green-700 font-bold text-sm md:text-base shadow-sm animate-fade-in-up">
            新潟市・聖籠町・新発田市 出張費無料！最短即日対応
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.3] mb-6 animate-fade-in-up drop-shadow-md">
            お庭の雑草、もう悩まない！<br className="md:hidden" />
            <span className="text-yellow-300">新潟市の草刈り</span>はお任せください
          </h1>
          
          <p className="text-base md:text-xl text-green-50 mb-10 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            「草が伸びすぎて大変…」「忙しくて庭の手入れができない…」<br className="hidden md:block"/>
            お茶の間レスキュー隊が、あなたのお庭をスッキリ綺麗にいたします！
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up w-full sm:w-auto px-4 sm:px-0 justify-center" style={{ animationDelay: '0.4s' }}>
            <a href="https://line.me/R/ti/p/@271paqpi" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#06C755] hover:bg-[#05b34c] text-white text-lg font-bold shadow-lg transition-transform hover:-translate-y-1 flex items-center justify-center gap-2">
               <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M22.053 10.366c0-4.329-3.967-7.85-8.847-7.85C8.328 2.516 4.36 6.037 4.36 10.366c0 3.882 2.766 7.159 6.58 7.747.256.054.606.165.694.385.08.199.052.51.025.702l-.183 1.096c-.035.207-.168.826.724.45 8.844-4.896 9.853-7.514 9.853-10.38z" />
                </svg>
                LINEで無料お見積り
            </a>
            <a href="#booking-form" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold shadow-lg transition-transform hover:-translate-y-1 flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              WEBから予約する
            </a>
          </div>
        </div>
      </section>

      {/* 3. Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4 flex items-center justify-center gap-3">
            <span className="text-green-600">💴</span> 分かりやすい明朗会計
          </h2>
          <p className="text-slate-500 mb-12">お見積りした金額以上をご請求することはありません！</p>
          
          <div className="bg-green-50 rounded-3xl p-8 md:p-12 shadow-sm border-2 border-green-200 transform transition hover:-translate-y-1 hover:shadow-md">
            <p className="text-lg font-bold text-green-800 mb-2">基本作業費（1名あたり）</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <div className="text-center">
                <span className="text-sm font-bold text-slate-500 bg-white px-4 py-1.5 rounded-full inline-block mb-3 border border-slate-200">1時間まで</span><br/>
                <span className="text-5xl md:text-6xl font-black text-green-700 tracking-tight">4,500<span className="text-2xl md:text-3xl font-extrabold">円〜</span></span>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 text-left border border-green-100">
              <ul className="text-slate-700 space-y-3 font-medium">
                <li className="flex items-start gap-3"><span className="text-green-500 mt-1">✓</span> 作業時間・面積に応じて事前にお見積りいたします。</li>
                <li className="flex items-start gap-3"><span className="text-green-500 mt-1">✓</span> 刈った草の処分費は別途お見積りとなります。（ご自身で処分される場合は無料です）</li>
                <li className="flex items-start gap-3"><span className="text-green-500 mt-1">✓</span> 【出張費無料エリア】新潟市・聖籠町・新発田市（その他エリアも無料お見積り中！）</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. YouTube Videos Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4 flex items-center justify-center gap-3">
            <span className="text-red-500">▶️</span> 実際の作業風景
          </h2>
          <p className="text-slate-500 mb-12">私たちがどのようにお庭を綺麗にするか、動画でご覧いただけます。</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100">
              <div className="aspect-video rounded-2xl overflow-hidden bg-slate-200">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/ExU65iPx7TU" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="w-full h-full object-cover"
                ></iframe>
              </div>
              <p className="mt-4 font-bold text-slate-700">プロの技でスピーディーに草刈り！</p>
            </div>
            <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100">
              <div className="aspect-video rounded-2xl overflow-hidden bg-slate-200">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/6W2P_mogFjk" 
                  title="YouTube video player 2" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="w-full h-full object-cover"
                ></iframe>
              </div>
              <p className="mt-4 font-bold text-slate-700">細かい場所の草取りも的確に対応！</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Google Reviews Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4 flex items-center justify-center gap-3">
            <span className="text-yellow-400">⭐</span> お客様の喜びの声
          </h2>
          <p className="text-slate-500 mb-12">多くのお客様からご満足いただいております！</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-slate-50 rounded-3xl p-6 text-left shadow-sm border border-slate-100 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={i < review.rating ? "currentColor" : "none"} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={i < review.rating ? 0 : 2} d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded">Google</span>
                </div>
                <p className="font-bold text-slate-800 mb-2">{review.name}</p>
                <p className="text-slate-600 text-sm flex-grow leading-relaxed">"{review.text}"</p>
                <p className="text-slate-400 text-xs mt-4 pt-4 border-t border-slate-200">{review.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Lead Form Section */}
      <section id="booking-form" className="py-24 bg-gradient-to-b from-orange-50 to-orange-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-3xl shadow-xl border border-orange-100 p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">
                無料お見積り・ご依頼
              </h2>
              <p className="text-slate-600 font-medium">
                簡単な情報を入力するだけ！<br className="md:hidden"/>
                確認後、すぐにご連絡いたします。
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2" htmlFor="name">
                  お名前 <span className="text-red-500 text-xs ml-1">必須</span>
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white"
                  placeholder="例：新潟 太郎"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2" htmlFor="address">
                  ご住所 <span className="text-red-500 text-xs ml-1">必須</span>
                </label>
                <input 
                  type="text" 
                  id="address" 
                  className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white"
                  placeholder="例：新潟市中央区〇〇 1-2-3"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2" htmlFor="date">
                  ご希望日・ご相談内容 <span className="text-slate-400 text-xs ml-1">任意</span>
                </label>
                <textarea 
                  id="date" 
                  rows={4}
                  className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white resize-none"
                  placeholder="例：○月○日の午前中希望です。庭の裏側の草刈りをお願いしたいです。"
                ></textarea>
              </div>

              <div className="pt-4">
                <Button size="lg" className="w-full text-lg py-6 font-bold bg-orange-500 hover:bg-orange-600 shadow-orange-500/30">
                  この内容で送信する
                </Button>
                <p className="text-center text-xs text-slate-400 mt-4">
                  ※送信後、担当者より折り返しご連絡させていただきます。
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 7. Floating CTA for Mobile (Optional, adds strong CTA) */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-slate-200 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] md:hidden z-50 flex gap-3">
        <a href="https://line.me/R/ti/p/@271paqpi" target="_blank" rel="noopener noreferrer" className="flex-1 py-3 rounded-xl bg-[#06C755] text-white text-center font-bold text-sm shadow-sm flex items-center justify-center gap-1">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M22.053 10.366c0-4.329-3.967-7.85-8.847-7.85C8.328 2.516 4.36 6.037 4.36 10.366c0 3.882 2.766 7.159 6.58 7.747.256.054.606.165.694.385.08.199.052.51.025.702l-.183 1.096c-.035.207-.168.826.724.45 8.844-4.896 9.853-7.514 9.853-10.38z" />
          </svg>
          LINE相談
        </a>
        <a href="#booking-form" className="flex-1 py-3 rounded-xl bg-orange-500 text-white text-center font-bold text-sm shadow-sm flex items-center justify-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          WEB予約
        </a>
      </div>

    </div>
  );
}
