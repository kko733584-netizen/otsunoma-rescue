"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Note: This is a visual representation of the form.
  // Actual email sending logic (e.g. using Resend, SendGrid, or API route) needs to be implemented.
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="bg-orange-50 rounded-3xl p-8 md:p-12 text-center border border-orange-100 animate-fade-in-up">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-green-500">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-4">お問い合わせを受け付けました</h3>
        <p className="text-slate-600 mb-8 max-w-lg mx-auto">
          ご連絡ありがとうございます。内容を確認次第、担当のいとうより数日以内にご返信させていただきます。
        </p>
        <Button onClick={() => setIsSuccess(false)} variant="outline">
          続けてお問い合わせをする
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 animate-fade-in-up">
      <div className="space-y-6">
        
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
            お名前 <span className="text-orange-500 text-xs ml-1">※必須</span>
          </label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow"
            placeholder="例：新潟 太郎"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
            メールアドレス <span className="text-orange-500 text-xs ml-1">※必須</span>
          </label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow"
            placeholder="例：taro@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
            電話番号 <span className="text-orange-500 text-xs ml-1">※必須</span>
          </label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow"
            placeholder="例：090-1234-5678"
          />
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
            ご用件 <span className="text-orange-500 text-xs ml-1">※必須</span>
          </label>
          <div className="relative">
            <select 
              id="subject" 
              name="subject" 
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none transition-shadow bg-white"
            >
              <option value="">—以下から選択してください—</option>
              <option value="ご質問">ご質問</option>
              <option value="ご依頼">ご依頼</option>
              <option value="お見積">お見積</option>
              <option value="その他のご用件">その他のご用件（求人について等）</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
            お問い合わせ内容 <span className="text-slate-400 text-xs font-normal ml-1">任意</span>
          </label>
          <textarea 
            id="message" 
            name="message" 
            rows={6}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow resize-y"
            placeholder="依頼内容の詳細や、現在のお困りごとなどをご自由にご記入ください。"
          ></textarea>
        </div>

        {/* Submit */}
        <div className="pt-4 text-center">
          <Button 
            type="submit" 
            size="lg" 
            className="w-full md:w-auto min-w-[200px]"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                送信中...
              </span>
            ) : "送信する"}
          </Button>
          <p className="text-xs text-slate-500 mt-4">
            ※見積もりのお返事には数日いただく場合があります。
          </p>
        </div>

      </div>
    </form>
  );
}
