"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";

// 最初に表示する件数。残りは「もっと見る」で展開。
const INITIAL_COUNT = 6;

// TODO: プロジェクト情報が届き次第、この配列を埋めてください。
// description は言語ごとに持たせられます（ja / en）。
// image はトップページのスクショ（public/ 配下のパス）。未指定なら preview 枠。
// url と repo は任意です。
type Project = {
  title: string;
  description: { ja: string; en: string };
  stack: string[];
  image?: string;
  url?: string;
  repo?: string;
};

const PROJECTS: Project[] = [
  {
    title: "1on1 YOGA",
    description: {
      ja: "銀座の完全個室・マンツーマンのパーソナルヨガスタジオのサイト。体験申込への導線と訴求ビジュアルの実装を担当しました。",
      en: "Site for a private one-on-one personal yoga studio in Ginza. Handled the trial-booking flow and persuasive visuals.",
    },
    stack: ["WordPress", "JavaScript", "HTML/CSS"],
    image: "/projects/1on1yoga.png",
    url: "https://1on1-yoga.com/tokyo/",
    repo: undefined,
  },
  {
    title: "株式会社 丸運",
    description: {
      ja: "創業130年以上の総合物流会社のコーポレートサイト。多言語対応とIR・採用など多階層の情報設計を担当しました。",
      en: "Corporate site for a 130-year-old logistics company. Handled multilingual support and multi-layered IR/recruit information architecture.",
    },
    stack: ["WordPress", "PHP", "JavaScript"],
    image: "/projects/maruwn.png",
    url: "https://www.maruwn.co.jp/",
    repo: undefined,
  },
  {
    title: "バチェラーデート",
    description: {
      ja: "AIが自動でデートを設定するマッチングサービスのLP。実績訴求のビジュアルとアプリ導線（App Store／Google Play）の実装を担当しました。",
      en: "Landing page for an AI-powered dating-arrangement service. Handled proof-focused visuals and the app-download flow (App Store / Google Play).",
    },
    stack: ["JavaScript", "HTML/CSS", "GSAP"],
    image: "/projects/bachelor.png",
    url: "https://www.bachelorapp.net/",
    repo: undefined,
  },
  {
    title: "with（マッチングアプリ）",
    description: {
      ja: "恋活・婚活マッチングアプリのLP／プロモーションサイト。診断コンテンツと訴求ビジュアル、登録導線の実装を担当しました。",
      en: "Landing / promotional site for a dating-matching app. Handled diagnostic content, persuasive visuals, and the sign-up flow.",
    },
    stack: ["JavaScript", "HTML/CSS", "GSAP"],
    image: "/projects/with.png",
    url: "https://with.is/",
    repo: undefined,
  },
  {
    title: "TUTU リゾートウエディング沖縄",
    description: {
      ja: "沖縄リゾート挙式ブランドのサイト。写真・動画を主役にしたビジュアル訴求と予約導線の実装を担当しました。",
      en: "Site for an Okinawa resort-wedding brand. Handled photo/video-led visual storytelling and the reservation flow.",
    },
    stack: ["WordPress", "JavaScript", "HTML/CSS"],
    image: "/projects/tutu-okinawa.png",
    url: "https://www.resortwedding.net/okinawa",
    repo: undefined,
  },
  {
    title: "Remember",
    description: {
      ja: "モデルとカメラマンのマッチングプラットフォーム。一覧・検索・掲載などの動的な機能面の実装を担当しました。",
      en: "A model–photographer matching platform. Handled dynamic features such as listings, search, and profile posting.",
    },
    stack: ["Laravel", "Vue.js", "MySQL"],
    image: "/projects/remember.png",
    url: "https://remember.tokyo/",
    repo: undefined,
  },
  {
    title: "STELLA BEAUTE",
    description: {
      ja: "美容機器・スキンケアブランドの公式オンラインストア。商品訴求のビジュアルとECのカート・決済導線の実装を担当しました。",
      en: "Official online store for a beauty-device / skincare brand. Handled product-focused visuals and the e-commerce cart & checkout flow.",
    },
    stack: ["Shopify", "JavaScript", "HTML/CSS"],
    image: "/projects/stellabeaute.png",
    url: "https://www.stellabeaute.jp/",
    repo: undefined,
  },
  {
    title: "CARTA ZERO",
    description: {
      ja: "統合マーケティング企業のコーポレートサイト。3D表現とアニメーションを取り入れたブランディング重視の実装を担当しました。",
      en: "Corporate site for an integrated-marketing firm. Handled a branding-focused build with 3D visuals and motion.",
    },
    stack: ["Next.js", "TypeScript", "WebGL"],
    image: "/projects/cartazero.png",
    url: "https://www.cartazero.co.jp/ja",
    repo: undefined,
  },
  {
    title: "株式会社リアレーション",
    description: {
      ja: "SNSマーケティング／IPプロダクション企業のコーポレートサイト。大胆なタイポグラフィと動きで世界観を表現する実装を担当しました。",
      en: "Corporate site for an SNS-marketing / IP-production company. Handled a build expressing its identity through bold typography and motion.",
    },
    stack: ["Next.js", "TypeScript", "GSAP"],
    image: "/projects/realation.png",
    url: "https://realation.jp/",
    repo: undefined,
  },
  {
    title: "SUBU「YO〜KAIの館」",
    description: {
      ja: "アパレルブランドのポップアップイベント特設サイト。浮世絵風のビジュアルとスクロール演出で世界観を表現する実装を担当しました。",
      en: "Special site for an apparel brand's pop-up event. Handled an immersive build with ukiyo-e-style visuals and scroll-driven storytelling.",
    },
    stack: ["Next.js", "TypeScript", "GSAP"],
    image: "/projects/subu.png",
    url: "https://subu2016-10th.com/",
    repo: undefined,
  },
  {
    title: "星野リゾート",
    description: {
      ja: "大手ホテルチェーンの公式サイト。宿泊予約・空室検索や多数のブランド・施設を扱う大規模な情報設計の実装を担当しました。",
      en: "Official site for a major hotel chain. Handled large-scale information architecture with reservation/availability search across many brands and properties.",
    },
    stack: ["React", "TypeScript", "Node.js"],
    image: "/projects/hoshino.png",
    url: "https://hoshinoresorts.com/jp/",
    repo: undefined,
  },
  {
    title: "ARLUIS WEDDING 採用サイト",
    description: {
      ja: "ブライダル企業の採用サイト。動画ヒーローとスクロール演出で世界観を伝える表現面の実装を担当しました。",
      en: "Recruit site for a bridal company. Handled the expressive front-end with a video hero and scroll-driven storytelling.",
    },
    stack: ["JavaScript", "GSAP", "HTML/CSS"],
    image: "/projects/arluis.png",
    url: "https://recruit.arluis-wedding.com/",
    repo: undefined,
  },
  {
    title: "TENTIAL",
    description: {
      ja: "リカバリーウェア「BAKUNE」等を展開するウェルネスD2Cブランドの公式ECサイト。商品訴求のビジュアルとカート・購入導線の実装を担当しました。",
      en: "Official e-commerce site for a wellness D2C brand known for its BAKUNE recovery wear. Handled product-focused visuals and the cart & purchase flow.",
    },
    stack: ["Shopify", "TypeScript", "JavaScript"],
    image: "/projects/tential.png",
    url: "https://tential.jp/",
    repo: undefined,
  },
  {
    title: "クレ・ド・ポー ボーテ",
    description: {
      ja: "資生堂の高級美容ブランド公式サイト。上質なブランド体験を伝えるビジュアル表現と、商品・カウンセリング導線の実装を担当しました。",
      en: "Official site for Shiseido's luxury beauty brand. Handled a refined brand-experience front-end and the product / consultation flow.",
    },
    stack: ["JavaScript", "HTML/CSS", "GSAP"],
    image: "/projects/cledepeau.png",
    url: "https://www.cledepeau-beaute.com/jp/",
    repo: undefined,
  },
  {
    title: "Moistri",
    description: {
      ja: "シルク製品とシルクセリシン配合化粧品を扱うブランドの公式ECサイト。商品訴求のビジュアルとカート・購入導線の実装を担当しました。",
      en: "Official e-commerce site for a brand offering silk products and silk-sericin cosmetics. Handled product-focused visuals and the cart & purchase flow.",
    },
    stack: ["Shopify", "JavaScript", "HTML/CSS"],
    image: "/projects/moistri.png",
    url: "https://moistri.com/",
    repo: undefined,
  },
  {
    title: "アルケミー",
    description: {
      ja: "発酵スキンケアブランドのトライアルセット訴求LP。実績・特典を強調するランディングページと注文導線の実装を担当しました。",
      en: "Trial-set landing page for a fermentation skincare brand. Handled a benefit-focused LP and the order flow.",
    },
    stack: ["JavaScript", "HTML/CSS", "GSAP"],
    image: "/projects/alchemy.png",
    url: "https://www.alchemy-web.jp/trial2/lp/22/",
    repo: undefined,
  },
  {
    title: "OPERA",
    description: {
      ja: "コスメブランド OPERA の商品ブランドサイト。新商品訴求のビジュアル表現とスクロール演出の実装を担当しました。",
      en: "Brand site for the cosmetics label OPERA. Handled product-launch visuals and scroll-driven presentation.",
    },
    stack: ["Next.js", "TypeScript", "GSAP"],
    image: "/projects/opera.png",
    url: "https://www.opera-net.jp/",
    repo: undefined,
  },
  {
    title: "NEXUS GROUP 採用サイト",
    description: {
      ja: "企業グループの採用サイト。新卒・中途の導線と、幾何学的なビジュアルで世界観を伝える表現面の実装を担当しました。",
      en: "Recruiting site for a corporate group. Handled new-grad / mid-career flows and a bold geometric visual identity.",
    },
    stack: ["JavaScript", "HTML/CSS", "GSAP"],
    image: "/projects/nexus.png",
    url: "https://recruit.nexus-group.jp/",
    repo: undefined,
  },
  {
    title: "PARTNERS",
    description: {
      ja: "資産運用テック企業のコーポレートサイト。大胆なタイポグラフィと写真表現でブランドを伝える実装を担当しました。",
      en: "Corporate site for an asset-management tech company. Handled brand storytelling with bold typography and photography.",
    },
    stack: ["Next.js", "TypeScript", "GSAP"],
    image: "/projects/partnersre.png",
    url: "https://partners-re.co.jp/",
    repo: undefined,
  },
  {
    title: "Y's DENTAL CLINIC",
    description: {
      ja: "歯科医院のブランドサイト。写真を主役にした上質なビジュアル表現とWeb予約導線の実装を担当しました。",
      en: "Brand site for a dental clinic. Handled photography-led visual design and the online reservation flow.",
    },
    stack: ["WordPress", "JavaScript", "HTML/CSS"],
    image: "/projects/ysdc.png",
    url: "https://www.ys-dc.jp/",
    repo: undefined,
  },
  {
    title: "千葉西総合病院 脊椎センター",
    description: {
      ja: "病院の脊椎センター専門サイト。手術実績データの訴求と、患者向けの分かりやすい情報設計の実装を担当しました。",
      en: "Specialty site for a hospital's spine center. Handled surgical-results data presentation and patient-friendly information architecture.",
    },
    stack: ["WordPress", "PHP", "JavaScript"],
    image: "/projects/chibanishi.png",
    url: "https://beauty.chibanishi-hp.or.jp",
    repo: undefined,
  },
  {
    title: "バースホーム湘南鎌倉",
    description: {
      ja: "助産院・産後ケアセンターのサイト。あたたかなビジュアルと各種予約・問い合わせ導線の実装を担当しました。",
      en: "Site for a midwifery / postpartum-care center. Handled warm visuals and multiple booking / inquiry flows.",
    },
    stack: ["WordPress", "JavaScript", "HTML/CSS"],
    image: "/projects/birthhome.png",
    url: "https://birthhome.skgh.jp/",
    repo: undefined,
  },
  {
    title: "淡路じゃのひれ アウトドアリゾート",
    description: {
      ja: "アウトドアリゾート施設のサイト。写真・動画を主役にした体験訴求と予約導線の実装を担当しました。",
      en: "Site for an outdoor resort facility. Handled experience-led photo/video visuals and the reservation flow.",
    },
    stack: ["WordPress", "JavaScript", "HTML/CSS"],
    image: "/projects/janohire.png",
    url: "https://janohire.co.jp/",
    repo: undefined,
  },
  {
    title: "大阪農業園芸・食テクノロジー専門学校",
    description: {
      ja: "専門学校のサイト。学科・コース紹介や資料請求・オープンキャンパスなど多階層の情報設計の実装を担当しました。",
      en: "Site for a vocational college. Handled multi-layered information architecture for courses, brochure requests, and open-campus events.",
    },
    stack: ["WordPress", "PHP", "JavaScript"],
    image: "/projects/culinary.png",
    url: "https://www.culinary.ac.jp/",
    repo: undefined,
  },
  {
    title: "cuna select",
    description: {
      ja: "出産祝い・ベビー用品のセレクトECサイト。カテゴリ・年齢別検索やギフト導線など動的な機能面の実装を担当しました。",
      en: "Select e-commerce site for baby gifts and goods. Handled dynamic features such as category/age search and gift flows.",
    },
    stack: ["Shopify", "JavaScript", "HTML/CSS"],
    image: "/projects/cuna.png",
    url: "https://select.cuna.jp/",
    repo: undefined,
  },
  {
    title: "Penmark",
    description: {
      ja: "大学生向け時間割・SNSアプリのプロモーションサイト。アプリ訴求のビジュアルとダウンロード導線の実装を担当しました。",
      en: "Promotional site for a timetable / social app for university students. Handled app-focused visuals and the download flow.",
    },
    stack: ["Next.js", "TypeScript", "GSAP"],
    image: "/projects/penmark.png",
    url: "https://penmark.jp/",
    repo: undefined,
  },
  {
    title: "Fivenine design",
    description: {
      ja: "Web制作会社のコーポレートサイト。制作実績・サービス紹介と、動きのあるビジュアル表現の実装を担当しました。",
      en: "Corporate site for a web-production studio. Handled works/service sections and animated visual presentation.",
    },
    stack: ["Next.js", "TypeScript", "GSAP"],
    image: "/projects/fivenine.png",
    url: "https://fivenine-design.com/",
    repo: undefined,
  },
  {
    title: "Kyash",
    description: {
      ja: "決済・送金アプリのサービスサイト。機能訴求のビジュアルとアプリダウンロード導線の実装を担当しました。",
      en: "Service site for a payments / money-transfer app. Handled feature-focused visuals and the app-download flow.",
    },
    stack: ["Next.js", "TypeScript", "JavaScript"],
    image: "/projects/kyash.png",
    url: "https://www.kyash.co/",
    repo: undefined,
  },
  {
    title: "SYNCA wellness",
    description: {
      ja: "ウェルネス・美容ブランドの公式サイト。上質なビジュアル表現と商品・オンラインショップ導線の実装を担当しました。",
      en: "Official site for a wellness / beauty brand. Handled refined visuals and the product / online-shop flow.",
    },
    stack: ["WordPress", "JavaScript", "HTML/CSS"],
    image: "/projects/synca.png",
    url: "https://www.synca-wellness.jp/",
    repo: undefined,
  },
  {
    title: "Bridal Net",
    description: {
      ja: "婚活マッチングサービスのLP／プロモーションサイト。実績訴求のビジュアルと登録・アプリ導線の実装を担当しました。",
      en: "Landing / promotional site for a marriage-matching service. Handled proof-focused visuals and the sign-up / app flow.",
    },
    stack: ["JavaScript", "HTML/CSS", "GSAP"],
    image: "/projects/bridalnet.png",
    url: "https://www.bridalnet.co.jp/",
    repo: undefined,
  },
  {
    title: "JoyHer",
    description: {
      ja: "更年期セルフケアアプリのサービスサイト。課題訴求のコピー・ビジュアルとアプリ機能紹介の実装を担当しました。",
      en: "Service site for a menopause self-care app. Handled problem-focused copy/visuals and app-feature presentation.",
    },
    stack: ["Next.js", "TypeScript", "GSAP"],
    image: "/projects/joyher.png",
    url: "https://www.joyher.life/",
    repo: undefined,
  },
  {
    title: "ALGOTEC",
    description: {
      ja: "IT企業のコーポレートサイト。大胆なタイポグラフィと動きのあるビジュアルで世界観を伝える実装を担当しました。",
      en: "Corporate site for an IT company. Handled brand storytelling with bold typography and animated visuals.",
    },
    stack: ["Next.js", "TypeScript", "GSAP"],
    image: "/projects/algotec.png",
    url: "https://www.algotec.co.jp",
    repo: undefined,
  },
  {
    title: "東洋不動産",
    description: {
      ja: "事業用不動産会社のコーポレートサイト。動画・写真を主役にしたブランド訴求と事例・サービスの情報設計を担当しました。",
      en: "Corporate site for a commercial real-estate company. Handled video/photo-led brand storytelling and case/service information architecture.",
    },
    stack: ["WordPress", "PHP", "JavaScript"],
    image: "/projects/toyore.png",
    url: "https://www.toyo-re.co.jp",
    repo: undefined,
  },
  {
    title: "Comfy",
    description: {
      ja: "快適性を追求したプロダクトブランドのサイト。写真を主役にした上質なビジュアルとオンラインショップ導線の実装を担当しました。",
      en: "Site for a comfort-focused product brand. Handled photography-led premium visuals and the online-shop flow.",
    },
    stack: ["WordPress", "JavaScript", "HTML/CSS"],
    image: "/projects/comfy.png",
    url: "https://www.com-fy.net/",
    repo: undefined,
  },
  {
    title: "クレア税理士法人",
    description: {
      ja: "税理士法人のコーポレートサイト。写真表現によるブランド訴求と、サービス・アクセスなどの情報設計を担当しました。",
      en: "Corporate site for a certified tax-accountant firm. Handled photography-based branding and service/access information architecture.",
    },
    stack: ["WordPress", "PHP", "JavaScript"],
    image: "/projects/creatax.png",
    url: "https://www.crea-tax.com/",
    repo: undefined,
  },
  {
    title: "オトラビスタ",
    description: {
      ja: "IT就職・転職支援サービスのサイト。求職者・法人向けの導線と、訴求ビジュアルの実装を担当しました。",
      en: "Site for an IT job-placement service. Handled flows for job seekers and corporate clients, plus persuasive visuals.",
    },
    stack: ["WordPress", "JavaScript", "HTML/CSS"],
    image: "/projects/otravista.png",
    url: "https://www.otravista.jp/",
    repo: undefined,
  },
  {
    title: "的場会計事務所",
    description: {
      ja: "会計事務所のコーポレートサイト。信頼感のある写真表現と、業務内容・採用などの情報設計を担当しました。",
      en: "Corporate site for an accounting office. Handled trust-building photography and information architecture for services and recruitment.",
    },
    stack: ["WordPress", "PHP", "JavaScript"],
    image: "/projects/matobatax.png",
    url: "https://www.matoba-tax.jp/",
    repo: undefined,
  },
  {
    title: "Faith（フェイス）",
    description: {
      ja: "相続・保険等のファイナンシャルプランニング会社のサイト。人物写真を活かしたグリッド表現と問い合わせ導線の実装を担当しました。",
      en: "Site for a financial-planning firm (inheritance / insurance). Handled a people-focused grid layout and the inquiry flow.",
    },
    stack: ["WordPress", "JavaScript", "HTML/CSS"],
    image: "/projects/faithfp.png",
    url: "https://faith-fp.com/",
    repo: undefined,
  },
  {
    title: "Office M",
    description: {
      ja: "給与計算アウトソーシング会社のサイト。課題訴求のコピー・ビジュアルと、セミナー・お客様の声などの情報設計を担当しました。",
      en: "Site for a payroll-outsourcing company. Handled problem-focused copy/visuals and content for seminars and testimonials.",
    },
    stack: ["WordPress", "PHP", "JavaScript"],
    image: "/projects/officem.png",
    url: "https://officem-plus.co.jp/",
    repo: undefined,
  },
  {
    title: "保険アドバイザー（Love）",
    description: {
      ja: "保険相談・アドバイザーのサイト。あたたかな写真表現によるブランド訴求と各種問い合わせ導線の実装を担当しました。",
      en: "Site for an insurance-advisory service. Handled warm photography-based branding and various inquiry flows.",
    },
    stack: ["WordPress", "JavaScript", "HTML/CSS"],
    image: "/projects/hokenplus.png",
    url: "https://www.hoken-plus.jp/",
    repo: undefined,
  },
  {
    title: "ベビモニ",
    description: {
      ja: "保育施設向け見守りカメラサービスのサイト。機能・実績訴求のビジュアルと無料見積もり導線の実装を担当しました。",
      en: "Site for a nursery-monitoring camera service. Handled feature/results visuals and the free-estimate flow.",
    },
    stack: ["Next.js", "TypeScript", "GSAP"],
    image: "/projects/babymoni.png",
    url: "https://www.s-quartet.co.jp/babymoni/",
    repo: undefined,
  },
  {
    title: "MAX 無添加ソープ",
    description: {
      ja: "無添加ボディソープブランドのサイト。敏感肌向けの訴求と、商品・製造・取扱店検索などの情報設計を担当しました。",
      en: "Site for an additive-free body-soap brand. Handled sensitive-skin messaging and information architecture for products, manufacturing, and store search.",
    },
    stack: ["WordPress", "PHP", "JavaScript"],
    image: "/projects/soapmax.png",
    url: "https://www.soapmax.co.jp/",
    repo: undefined,
  },
  {
    title: "株式会社win win",
    description: {
      ja: "不動産・建築プロデュース会社のコーポレートサイト。ブランド訴求のビジュアルと会社・サービスの情報設計を担当しました。",
      en: "Corporate site for a real-estate / construction-production company. Handled brand visuals and company/service information architecture.",
    },
    stack: ["WordPress", "JavaScript", "HTML/CSS"],
    image: "/projects/winwin2024.png",
    url: "https://winwin2024.jp/",
    repo: undefined,
  },
  {
    title: "Win Win Win",
    description: {
      ja: "健康・ウェルネス関連企業のコーポレートサイト。自然を活かしたビジュアル表現とブランド訴求の実装を担当しました。",
      en: "Corporate site for a health / wellness company. Handled nature-driven visuals and brand storytelling.",
    },
    stack: ["WordPress", "JavaScript", "HTML/CSS"],
    image: "/projects/winwinwin.png",
    url: "https://winwinwin-ltd.com/",
    repo: undefined,
  },
  {
    title: "摂南大学",
    description: {
      ja: "大学の公式サイト。多言語・多階層の大規模な情報設計と、躍動感のあるブランドビジュアルの実装を担当しました。",
      en: "Official site for a university. Handled large-scale multilingual, multi-layered information architecture and dynamic brand visuals.",
    },
    stack: ["React", "TypeScript", "Node.js"],
    image: "/projects/setsunan.png",
    url: "https://www.setsunan.ac.jp/",
    repo: undefined,
  },
  {
    title: "SAKAI GROUP",
    description: {
      ja: "ものづくり企業グループのコーポレートサイト。技術力を伝えるビジュアル表現と採用・企業情報の設計を担当しました。",
      en: "Corporate site for a manufacturing group. Handled visuals conveying technical strength and recruitment/company-info architecture.",
    },
    stack: ["Next.js", "TypeScript", "GSAP"],
    image: "/projects/sakaigroup.png",
    url: "https://www.sakai-group.com/",
    repo: undefined,
  },
  {
    title: "OSK GYM 24",
    description: {
      ja: "フィットネスジムのキャンペーンLP。入会訴求のビジュアルと施設紹介・体験申込の導線の実装を担当しました。",
      en: "Campaign landing page for a fitness gym. Handled membership-focused visuals and the facility-intro / trial-booking flow.",
    },
    stack: ["JavaScript", "HTML/CSS", "GSAP"],
    image: "/projects/oskgym.png",
    url: "https://www.osk21.co.jp/lp/oskgym24/",
    repo: undefined,
  },
  {
    title: "大船T's形成クリニック",
    description: {
      ja: "医療脱毛クリニックのLP。医療機関ならではの訴求ビジュアルと来院予約導線の実装を担当しました。",
      en: "Landing page for a medical hair-removal clinic. Handled medical-focused persuasive visuals and the appointment-booking flow.",
    },
    stack: ["JavaScript", "HTML/CSS", "GSAP"],
    image: "/projects/tscl.png",
    url: "https://tscl-lp.com/datsumou_fe/",
    repo: undefined,
  },
  {
    title: "Kelly Clinic",
    description: {
      ja: "美容クリニックのブランドサイト。上質で静謐なビジュアル表現と、予約導線の実装を担当しました。",
      en: "Brand site for an aesthetic clinic. Handled refined, serene visuals and the reservation flow.",
    },
    stack: ["WordPress", "JavaScript", "HTML/CSS"],
    image: "/projects/kelly.png",
    url: "https://kelly-c.com/",
    repo: undefined,
  },
  {
    title: "健幸プラザ西大寺",
    description: {
      ja: "総合フィットネス施設のサイト。子どもからシニアまで幅広い層に向けた訴求ビジュアルと各種予約導線の実装を担当しました。",
      en: "Site for a comprehensive fitness facility. Handled visuals appealing to all ages and multiple booking flows.",
    },
    stack: ["WordPress", "JavaScript", "HTML/CSS"],
    image: "/projects/kenkoplaza.png",
    url: "https://www.kenko-plaza.net/",
    repo: undefined,
  },
  {
    title: "OSK SPORTS CLUB",
    description: {
      ja: "スポーツクラブ運営会社のコーポレートサイト。フィットネス・キッズ・指導者養成など多階層の情報設計を担当しました。",
      en: "Corporate site for a sports-club operator. Handled multi-layered information architecture for fitness, kids, and instructor training.",
    },
    stack: ["WordPress", "PHP", "JavaScript"],
    image: "/projects/osk21.png",
    url: "https://www.osk21.co.jp/",
    repo: undefined,
  },
  {
    title: "おゆみの老健",
    description: {
      ja: "介護老人保健施設のサイト。あたたかな写真表現と、空き状況・施設見学など利用者向けの導線の実装を担当しました。",
      en: "Site for a geriatric health-services facility. Handled warm photography and user flows such as availability and facility tours.",
    },
    stack: ["WordPress", "JavaScript", "HTML/CSS"],
    image: "/projects/oyumino.png",
    url: "https://www.oyumino-roken.jp",
    repo: undefined,
  },
  {
    title: "YAWARA GROUP",
    description: {
      ja: "企業グループのコーポレートサイト。上質なビジュアル表現とブランド訴求、事業紹介の情報設計を担当しました。",
      en: "Corporate site for a business group. Handled refined visuals, brand storytelling, and business-intro information architecture.",
    },
    stack: ["WordPress", "JavaScript", "HTML/CSS"],
    image: "/projects/yawara.png",
    url: "https://yawara.life/",
    repo: undefined,
  },
  {
    title: "Go Eat",
    description: {
      ja: "食事デートのマッチングサービスのLP。人物写真を主役にした訴求ビジュアルと登録導線の実装を担当しました。",
      en: "Landing page for a dining-date matching service. Handled people-focused persuasive visuals and the sign-up flow.",
    },
    stack: ["Next.js", "TypeScript", "GSAP"],
    image: "/projects/goeat.png",
    url: "https://go-eat.jp/",
    repo: undefined,
  },
  {
    title: "えのすぱ LOVERS",
    description: {
      ja: "江の島アイランドスパの特設サイト。写真を散りばめた遊び心のあるレイアウトとスクロール演出の実装を担当しました。",
      en: "Special site for Enoshima Island Spa. Handled a playful photo-collage layout and scroll-driven presentation.",
    },
    stack: ["Next.js", "TypeScript", "GSAP"],
    image: "/projects/enospa.png",
    url: "https://enospa-lovers.jp/",
    repo: undefined,
  },
  {
    title: "Fate/Grand Order 10周年",
    description: {
      ja: "人気ゲームの10周年記念特設サイト。大胆なタイポグラフィと動きで記念感を演出する表現面の実装を担当しました。",
      en: "10th-anniversary special site for a popular game. Handled an expressive front-end with bold typography and motion.",
    },
    stack: ["Next.js", "TypeScript", "GSAP"],
    image: "/projects/fatego.png",
    url: "https://10th.fate-go.jp/",
    repo: undefined,
  },
  {
    title: "The Fashion Post × COACH",
    description: {
      ja: "ファッションメディアとブランドのコラボ特集ページ。動画・写真を主役にした没入感のあるビジュアル表現の実装を担当しました。",
      en: "Collaborative feature page for a fashion media and brand. Handled immersive video/photo-led visual presentation.",
    },
    stack: ["Next.js", "TypeScript", "GSAP"],
    image: "/projects/coach.png",
    url: "https://fashionpost.jp/special/coach/",
    repo: undefined,
  },
  {
    title: "ブルーピリオド展",
    description: {
      ja: "人気漫画の展覧会特設サイト。アート性の高いビジュアル表現と、開催情報・チケット導線の実装を担当しました。",
      en: "Special site for a popular manga's art exhibition. Handled art-driven visuals and event-info / ticket flows.",
    },
    stack: ["Next.js", "TypeScript", "GSAP"],
    image: "/projects/blueperiod.png",
    url: "https://blueperiod-ten.jp/",
    repo: undefined,
  },
];

export default function Projects() {
  const { t, lang } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  // 展開状態に応じて表示する件数を切り替える。
  const visibleProjects = expanded
    ? PROJECTS
    : PROJECTS.slice(0, INITIAL_COUNT);
  const hasMore = PROJECTS.length > INITIAL_COUNT;

  return (
    <section id="projects" className="border-t border-white/10 bg-navy py-20 md:py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-2 font-mono text-sm text-white/50">
          {t.projects.eyebrow}
        </p>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{t.projects.title}</h2>

        {/* バナー画像（リストの前）。明るすぎないよう半透明に。 */}
        <div className="mt-8 overflow-hidden rounded-xl border border-white/10">
          <Image
            src="/banner.png"
            alt=""
            width={1672}
            height={941}
            className="h-auto w-full opacity-60"
            priority
          />
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
            >
              {/* トップページのスクショ。未指定なら preview 枠。 */}
              <div className="mb-5 aspect-video overflow-hidden rounded-lg bg-white/5">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={640}
                    height={360}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center font-mono text-xs text-white/40">
                    {t.projects.preview}
                  </div>
                )}
              </div>

              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-white/70">
                {project.description[lang]}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded font-mono text-xs text-white/50"
                  >
                    #{tech}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex gap-4 text-sm">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-white underline-offset-4 hover:underline"
                  >
                    {t.projects.live}
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-white underline-offset-4 hover:underline"
                  >
                    {t.projects.code}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* もっと見る／閉じるボタン（7件以上あるときのみ表示） */}
        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="rounded-full border border-white/30 px-8 py-3 text-sm font-medium text-white transition-colors hover:border-white/60 hover:bg-white/10"
            >
              {expanded ? t.projects.viewLess : t.projects.viewMore}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
