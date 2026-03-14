import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function KSPage() {
  return (
    <div className="w-full flex-grow flex flex-col pt-0">
      <div className="w-full bg-slate-900 pt-16 pb-12 mb-12 border-b-4 border-orange-500">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            <span className="drop-shadow-[0_0_15px_rgba(249,115,22,1)] mr-2">🌿</span>草刈り・剪定レスキュー
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-bold">
            新潟市内の草刈り・草取りを最短即日で対応します！
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl pb-24">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="p-8 md:p-12">

            {/* Introduction and Pain Points */}
            <div className="mb-12">
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                草刈りは、時間もかかるし、体にも負担がかかりがち。<br/>
                無理する前に、私たちにお手伝いさせてください！<br/>
                ご自宅のお庭や空き家・店舗・駐車場・通路など、草刈り・草むしりのご相談もどうぞ。<br/>
                場所により、草刈機・のこがまなどで対応しますので、まずはお気軽にご連絡ください♪
              </p>

              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-6 text-center border-b border-slate-200 pb-4">こんなことでお困りの方にオススメです</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-orange-700 mb-2">草刈りしたい気持ちはあるけど…</h4>
                    <ul className="space-y-3 text-slate-600 text-sm">
                      <li className="flex items-start gap-2"><span className="text-orange-500">✔</span>腰や腕が痛くなりそうで不安…</li>
                      <li className="flex items-start gap-2"><span className="text-orange-500">✔</span>毎年やってはいるけど年々しんどくなってきた…</li>
                      <li className="flex items-start gap-2"><span className="text-orange-500">✔</span>庭の草刈りが地味にきつい…</li>
                      <li className="flex items-start gap-2"><span className="text-orange-500">✔</span>毎日の草むしりで、体力がじわじわ削られる…</li>
                      <li className="flex items-start gap-2"><span className="text-orange-500">✔</span>家族が高齢で、長い時間草刈りができない…</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-orange-700 mb-2">こんなご要望にも！</h4>
                    <ul className="space-y-3 text-slate-600 text-sm">
                      <li className="flex items-start gap-2"><span className="text-orange-500">✔</span>広い範囲の草刈りを一人でやりたくない</li>
                      <li className="flex items-start gap-2"><span className="text-orange-500">✔</span>暑くなる前に草を片付けておきたい</li>
                      <li className="flex items-start gap-2"><span className="text-orange-500">✔</span>自分では草刈りする時間がないから任せたい</li>
                      <li className="flex items-start gap-2"><span className="text-orange-500">✔</span>玄関前や通路を安全にしたい</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 text-center text-slate-700 font-bold bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <p>「暑い中での草刈りが大変」「無理せず家のことを優先したい」<br/>そんな方にぴったりです！</p>
                </div>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="mb-12 bg-orange-50 p-6 md:p-8 rounded-2xl border border-orange-100">
               <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">草刈りの料金</h3>
               <p className="text-center text-slate-600 mb-6">基本料金はこちらです。</p>
               
               <div className="max-w-md mx-auto bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden mb-6">
                 <table className="w-full">
                   <tbody className="divide-y divide-slate-100">
                     <tr className="hover:bg-slate-50">
                       <td className="px-6 py-4 font-medium text-slate-800 border-r border-slate-100 text-center">1時間</td>
                       <td className="px-6 py-4 text-orange-600 font-bold text-xl text-center">4,500円</td>
                     </tr>
                     <tr className="hover:bg-slate-50">
                       <td className="px-6 py-4 font-medium text-slate-800 border-r border-slate-100 text-center">2時間</td>
                       <td className="px-6 py-4 text-orange-600 font-bold text-xl text-center">9,000円</td>
                     </tr>
                     <tr className="hover:bg-slate-50">
                       <td className="px-6 py-4 font-medium text-slate-800 border-r border-slate-100 text-center">3時間</td>
                       <td className="px-6 py-4 text-orange-600 font-bold text-xl text-center">13,500円</td>
                     </tr>
                     <tr className="hover:bg-slate-50">
                       <td className="px-6 py-4 font-medium text-slate-800 border-r border-slate-100 text-center">4時間</td>
                       <td className="px-6 py-4 text-orange-600 font-bold text-xl text-center">18,000円</td>
                     </tr>
                   </tbody>
                 </table>
               </div>
               
               <div className="text-center text-slate-700">
                 <p className="font-bold mb-2">4時間以上のご依頼もお待ちしています！</p>
                 <p className="text-sm">複数名のスタッフで作業もできますのでお問い合わせください♪</p>
               </div>
            </div>

            {/* Video Examples */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center border-b border-slate-200 pb-4">草刈り実際の作業例</h3>
              <p className="text-center text-slate-600 mb-8">こちらが作業風景です！ご参考にしてみてください♪</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <h4 className="font-bold text-slate-800 mb-3 ml-2">新潟市のお庭の草刈り</h4>
                  <div className="aspect-video rounded-2xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200 mb-3">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ExU65iPx7TU" title="草刈り作業例" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                  <p className="text-slate-600 text-sm italic ml-2">手刈りで作業させていただきました♪</p>
                </div>
                
                <div className="flex flex-col">
                  <h4 className="font-bold text-slate-800 mb-3 ml-2">新潟市北区の生垣剪定作業</h4>
                  <div className="aspect-video rounded-2xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200 mb-3">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6W2P_mogFjk" title="剪定作業例" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                  <p className="text-slate-600 text-sm italic ml-2">バリカンを使用して生垣の整理をしました♪</p>
                </div>
              </div>
            </div>

            {/* Flow Section */}
            <div className="mb-10 p-6 md:p-8 border-2 border-slate-100 rounded-3xl">
               <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">お問い合わせから当日までの流れ</h3>
               <div className="space-y-6">
                 
                 <div className="flex gap-4">
                   <div className="flex flex-col items-center">
                     <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
                     <div className="w-0.5 h-full bg-orange-200 my-2"></div>
                   </div>
                   <div className="pb-6">
                     <h4 className="font-bold text-lg text-slate-800 mb-2">お問い合わせ・ご相談</h4>
                     <p className="text-slate-600">お電話またはお問い合わせフォームからご連絡ください。「玄関前だけ」「お庭の草を片付けたい」など、ざっくりした内容でも大丈夫です。</p>
                   </div>
                 </div>

                 <div className="flex gap-4">
                   <div className="flex flex-col items-center">
                     <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
                     <div className="w-0.5 h-full bg-orange-200 my-2"></div>
                   </div>
                   <div className="pb-6">
                     <h4 className="font-bold text-lg text-slate-800 mb-2">日程調整・お見積もり</h4>
                     <p className="text-slate-600">作業内容や場所をお伺いし、ご希望の日時や作業範囲を確認の上、作業可能な日時と料金の目安をお伝えします。<br/><span className="text-orange-600 text-sm">※この時点では料金は発生しません。</span></p>
                   </div>
                 </div>

                 <div className="flex gap-4">
                   <div className="flex flex-col items-center">
                     <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
                     <div className="w-0.5 h-full bg-orange-200 my-2"></div>
                   </div>
                   <div className="pb-6">
                     <h4 className="font-bold text-lg text-slate-800 mb-2">当日作業</h4>
                     <p className="text-slate-600">ご予約日時に現地へ伺い、ご要望に沿って丁寧に作業を行います。作業後の確認も行いますので、安心してお任せください。</p>
                   </div>
                 </div>

                 <div className="flex gap-4">
                   <div className="flex flex-col items-center">
                     <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">4</div>
                   </div>
                   <div>
                     <h4 className="font-bold text-lg text-slate-800 mb-2">完了確認・お支払い</h4>
                     <p className="text-slate-600">作業内容をご確認いただき、問題がなければ完了です。お支払い方法についても、事前にご案内いたします。</p>
                   </div>
                 </div>

               </div>
               <div className="mt-8 text-center bg-orange-50 py-4 px-6 rounded-xl border border-orange-100">
                 <p className="font-bold text-orange-800">お庭の草の状況やスケジュールによっては、即日対応も可能です。<br/>まずはお気軽にご相談ください。</p>
               </div>
            </div>
            
            <div className="text-center flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto px-12" asChild>
                <Link href="/contact">草刈り・剪定を依頼・相談する</Link>
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
