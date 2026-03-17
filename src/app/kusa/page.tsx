import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { 
  CheckCircle2, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Smartphone, 
  MessageSquare, 
  PhoneCall, 
  Calendar, 
  Zap, 
  ThumbsUp, 
  Scissors, 
  Sprout, 
  HelpCircle, 
  TrendingDown, 
  ArrowRight 
} from "lucide-react";

export const metadata: Metadata = {
  title: "新潟市の草刈り・草むしり最短即日対応！お茶の間レスキュー隊【見積無料】",
  description: "新潟市で草刈り・草取り・庭の手入れならお茶の間レスキュー隊にお任せください！最短即日対応、1時間4,500円?の明朗会計。熟練スタッフが丁寧に対応。お見積り・ご相談は無料です。",
  keywords: "新潟市, 草刈り, 草取り, 草むしり, 最短即日, 庭の手入れ, 便利屋, お茶の間レスキュー隊",
};

const reviews = [
  {
    name: "新潟市中央区 A様",
    text: "手際よく作業していただき、荒れていた庭が一日で見違えるほど綺麗になりました。料金も事前に提示された通りで安心しました。",
  },
  {
    name: "新潟市西区 B様",
    text: "急な依頼にも関わらず、即日で対応してくれました。スタッフの方も感じが良く、またお願いしたいです。",
  },
  {
    name: "新潟市東区 C様",
    text: "高齢の母の家をお願いしました。丁寧な仕事ぶりで母も喜んでいました。ありがとうございました。",
  },
];

const faqs = [
  {
    q: "即日対応は可能ですか？",
    a: "はい、予約状況や天候にもよりますが、可能な限り調整いたします。お急ぎの場合はお電話でご連絡ください。",
  },
  {
    q: "作業時間はいつまでですか？",
    a: "基本は9:00?18:00ですが、可能な限りご依頼をお受けしております。まずは一度ご相談ください。",
  },
  {
    q: "立ち会いは必要ですか？",
    a: "事前に作業内容が決まっていれば、立ち会いなしでも対応可能です。ご不在時も安心してお任せください。",
  },
  {
    q: "追加費用は発生しますか？",
    a: "基本的にはありません。お見積り金額と異なる料金を後から請求することはありませんのでご安心ください。",
  },
];

export default function AdvancedGrassCuttingLP() {
  const phoneNumber = "080-9972-2393";

  return (
    <div className="w-full flex-grow flex flex-col bg-white overflow-x-hidden font-sans text-slate-900">
      <section className="relative w-full aspect-[16/9] md:aspect-[2.5/1] overflow-hidden border-b-8 border-orange-500">
        <Image src="/images/hero-main.jpg" alt="Hero" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:hidden"></div>
      </section>

      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 flex flex-col items-center gap-4 text-slate-900">
            <span className="text-orange-500 text-sm md:text-base font-bold bg-white px-4 py-1 rounded-full shadow-sm border border-orange-100 uppercase tracking-widest text-slate-900">Pain Points</span>
            お庭の雑草、こんなことでお困りではありませんか？
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-slate-900">
            {[
              { text: "庭の草刈りが地味にきつい…", icon: <Sprout className="w-6 h-6 text-green-600" /> },
              { text: "毎日の草むしりで、体力が削られる…", icon: <Scissors className="w-6 h-6 text-orange-600" /> },
              { text: "家族が高齢で、長い時間作業ができない…", icon: <CheckCircle2 className="w-6 h-6 text-green-600" /> },
              { text: "暑くなる前に草を片付けておきたい", icon: <Clock className="w-6 h-6 text-orange-600" /> },
              { text: "自分では草刈りする時間がない", icon: <Calendar className="w-6 h-6 text-green-600" /> },
              { text: "玄関前や通路を安全にしたい", icon: <ShieldCheck className="w-6 h-6 text-orange-600" /> }
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm border border-green-100 transform transition hover:-translate-y-1">
                <div className="bg-green-50 p-3 rounded-full">{point.icon}</div>
                <span className="font-bold text-lg text-slate-700">{point.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20 text-slate-900">
            <h2 className="text-3xl md:text-5xl font-black mb-6 italic leading-tight text-slate-900">
              お茶の間レスキュー隊が<br className="md:hidden" /><span className="text-orange-500 underline decoration-green-300">選ばれる5つの理由</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "最短即日で対応可能", text: "新潟市を中心に機動力高く活動。お急ぎのご依頼にも柔軟にお応えします。", icon: <Zap className="w-12 h-12 text-yellow-500" /> },
              { title: "一つひとつ丁寧な作業", text: "熟練スタッフが、お庭の状況に合わせて最適な道具を使い分け丁寧に仕上げます。", icon: <ThumbsUp className="w-12 h-12 text-orange-500" /> },
              { title: "365日年中無休対応", text: "土日祝日はもちろん、お盆や年末年始も対応可能です。お気軽にご相談ください。", icon: <Calendar className="w-12 h-12 text-green-500" /> },
              { title: "相談・見積もりは無料", text: "現地調査の上でお見積り。内容にご納得いただいてからの作業開始となります。", icon: <ShieldCheck className="w-12 h-12 text-blue-500" /> },
              { title: "ついで作業も相談OK", text: "便利屋だから、不用品回収やちょっとした修理などもまとめてレスキュー可能です。", icon: <MessageSquare className="w-12 h-12 text-purple-500" /> }
            ].map((reason, i) => (
              <div key={i} className={`group bg-orange-50/30 p-10 rounded-[2rem] border border-orange-100 hover:shadow-xl transition-all ${i === 4 ? "lg:col-span-2" : ""}`}>
                <div className="mb-6 transform transition group-hover:scale-110">{reason.icon}</div>
                <h3 className="text-2xl font-black mb-4 text-slate-900">【その{i+1}】{reason.title}</h3>
                <p className="font-bold text-slate-600 text-lg leading-relaxed">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-green-50 border-y border-green-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="w-64 h-64 md:w-96 md:h-96 relative flex-shrink-0">
               <div className="absolute inset-0 bg-white rounded-[3rem] rotate-6 shadow-xl border-4 border-orange-200"></div>
               <div className="absolute inset-0 bg-orange-500 rounded-[3rem] -rotate-3 shadow-xl"></div>
               <Image src="/images/ceo-portrait.jpg" alt="伊藤" fill className="object-cover rounded-[3rem] relative z-20 border-4 border-white" />
            </div>
            <div className="flex-grow text-center md:text-left text-slate-900">
              <div className="inline-block bg-orange-600 text-white px-4 py-1 rounded font-bold text-sm mb-6 uppercase tracking-widest">Greeting</div>
              <h3 className="text-3xl md:text-4xl font-black mb-8 leading-tight text-slate-900">
                こんにちは、<br className="md:hidden"/>
                お茶の間レスキュー隊伊藤です。
              </h3>
              <p className="text-lg md:text-xl font-bold italic leading-relaxed text-slate-800">
                「困っている人の力になりたい」その思いから、お茶の間レスキュー隊を立ち上げました。日常のちょっとした困りごとに寄り添い、全力でレスキューしていきます。
              </p>
              <div className="mt-12 flex items-center justify-center md:justify-end gap-3 text-2xl font-black text-slate-900">
                <span>代表</span><span className="text-4xl text-orange-600">伊藤</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="text-center mb-20 text-slate-900 text-slate-900">
            <h2 className="text-3xl md:text-5xl font-black mb-6 italic uppercase tracking-widest text-orange-500">How to Use</h2>
            <p className="text-2xl font-bold text-slate-900">ご利用の流れ</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "お問い合わせ", text: "お電話（080-9972-2393）かフォームでご相談ください。", icon: <PhoneCall className="w-10 h-10" /> },
              { step: "02", title: "現地見積もり", text: "現地を拝見し, 料金を提示します。見積もりは無料です。", icon: <MessageSquare className="w-10 h-10" /> },
              { step: "03", title: "迅速作業", text: "プロの道具で丁寧に作業。最後にお客様と確認します。", icon: <Zap className="w-10 h-10" /> },
              { step: "04", title: "お支払い", text: "完了後, 現金またはお振込にてお支払い。", icon: <ThumbsUp className="w-10 h-10" /> }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-orange-500 text-white rounded-[2.5rem] flex items-center justify-center font-black text-4xl shadow-xl mb-6 transform transition group-hover:rotate-6">
                  {step.step}
                </div>
                <h3 className="text-2xl font-black mb-4 text-slate-900">{step.title}</h3>
                <p className="font-bold text-slate-600 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-28 bg-orange-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white rounded-[4rem] p-12 md:p-24 shadow-3xl text-slate-900 border-[12px] border-orange-500 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tight italic uppercase text-orange-600">Contact</h2>
              <p className="text-2xl md:text-3xl font-black text-slate-900">無料見積もり・ご相談はこちら</p>
            </div>
            <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-900">
                <input type="text" required placeholder="お名前" className="w-full h-20 px-8 rounded-3xl bg-slate-50 border-2 border-slate-200 focus:border-orange-500 outline-none font-bold text-xl" />
                <input type="tel" required placeholder="電話番号" className="w-full h-20 px-8 rounded-3xl bg-slate-50 border-2 border-slate-200 focus:border-orange-500 outline-none font-bold text-xl" />
              </div>
              <input type="text" required placeholder="ご住所" className="w-full h-20 px-8 rounded-3xl bg-slate-50 border-2 border-slate-200 focus:border-orange-500 outline-none font-bold text-xl" />
              <textarea rows={6} placeholder="お問い合わせ内容" className="w-full p-10 rounded-[3rem] bg-slate-50 border-2 border-slate-200 focus:border-orange-500 outline-none font-bold text-xl resize-none"></textarea>
              <Button size="lg" className="w-full py-14 text-4xl font-black bg-orange-600 hover:bg-orange-700 text-white rounded-[2rem] shadow-3xl transform transition active:scale-95 group uppercase italic">
                Send Request <ArrowRight className="w-10 h-10 ml-6" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-xl border-t border-slate-100 shadow-[0_-20px_50px_rgba(0,0,0,0.2)] md:hidden z-[9999] flex gap-3">
        <a href={`tel:${phoneNumber.replace(/-/g, "")}`} className="flex-1 h-20 bg-slate-900 text-white rounded-[1.5rem] flex flex-col items-center justify-center font-black shadow-2xl active:scale-95 transition-all text-slate-900">
          <PhoneCall className="w-6 h-6 mb-1 text-white" /> 
          <span className="text-xs uppercase text-white">Call</span>
        </a>
        <a href="https://line.me/R/ti/p/@271paqpi" target="_blank" rel="noopener noreferrer" className="flex-[2] h-20 bg-[#06C755] text-white rounded-[1.5rem] flex items-center justify-center gap-3 font-black shadow-2xl active:scale-95 transition-all text-slate-900">
          <MessageSquare className="w-8 h-8 text-white" />
          <div className="flex flex-col items-start leading-tight text-white">
             <span className="text-[10px] opacity-80 font-bold uppercase tracking-widest text-white">24h Free Estimate</span>
             <span className="text-base font-black text-white">LINEで相談</span>
          </div>
        </a>
      </div>
    </div>
  );
}
-Encoding UTF8
