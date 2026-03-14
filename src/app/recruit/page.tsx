import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

export default function RecruitPage() {
  return (
    <div className="w-full flex-grow flex flex-col pt-0">
      <div className="w-full bg-slate-900 pt-16 pb-12 mb-12 border-b-4 border-orange-500">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            <span className="text-orange-500 mr-2 drop-shadow-[0_0_15px_rgba(249,115,22,1)]">🤝</span>隊員募集
          </h1>
          <p className="text-slate-300 text-lg">
            私たちと一緒に、地域の人たちをレスキューしませんか？
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl pb-24">

        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden animate-fade-in-up">
          <div className="p-8 md:p-12">
            <h2 className="text-2xl font-bold text-orange-600 mb-6 flex items-center gap-2">
              <span>👷‍♂️</span>
              こんな方を募集しています！
            </h2>
            
            <ul className="space-y-4 text-slate-700 text-lg mb-10 list-none">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>人と関わるのが好きで、人の役に立ちたい方</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>体力に自信がある方（雪かきや草刈りなど）</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>新潟市、聖籠町、新発田市エリアで働ける方</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>未経験でもやる気があれば大歓迎！</span>
              </li>
            </ul>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-10">
              <h3 className="font-bold text-slate-800 mb-4">募集要項</h3>
              <dl className="space-y-4 text-sm md:text-base">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 border-b border-slate-200 pb-4">
                  <dt className="text-slate-500 font-semibold">雇用形態</dt>
                  <dd className="col-span-3 text-slate-800">
                    業務委託契約<br/>
                    <span className="text-xs text-slate-500">※定期的な委託ではなくスポットでのお声がけとなります</span>
                  </dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 border-b border-slate-200 pb-4">
                  <dt className="text-slate-500 font-semibold">仕事内容</dt>
                  <dd className="col-span-3 text-slate-800">
                    草刈り、引っ越し作業、買い物代行など<br/>
                    <span className="text-xs text-slate-500">※ご依頼の業務により異なります</span>
                  </dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 border-b border-slate-200 pb-4">
                  <dt className="text-slate-500 font-semibold">給与</dt>
                  <dd className="col-span-3 text-slate-800">時給 1050円〜（能力・経験考慮）＋ 交通費規定支給</dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 border-b border-slate-200 pb-4">
                  <dt className="text-slate-500 font-semibold">勤務時間</dt>
                  <dd className="col-span-3 text-slate-800">応相談（週1日・短時間でもOK！）</dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 border-b border-slate-200 pb-4">
                  <dt className="text-slate-500 font-semibold">試用期間</dt>
                  <dd className="col-span-3 text-slate-800">3ヶ月</dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4">
                  <dt className="text-slate-500 font-semibold">応募方法</dt>
                  <dd className="col-span-3 text-slate-800">
                    まずは「お問い合わせ」より、用件を「その他のご用件（求人について）」としてご連絡ください。
                  </dd>
                </div>
              </dl>
            </div>

            <div className="text-center">
              <Button size="lg" asChild>
                <Link href="/contact">求人に応募する・質問する</Link>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
