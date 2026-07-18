// すべての文言をここで一元管理します。
// JA/EN 両方を編集すれば、サイト全体が言語トグルで切り替わります。
// TODO: プレースホルダーの文言を実際の内容に差し替えてください。

export type Language = "ja" | "en";

// 1言語分の文言の型。ja/en が同じ構造であることを保証します。
export type Translation = {
  brand: string;
  nav: {
    about: string;
    projects: string;
    experience: string;
    contact: string;
    getInTouch: string;
  };
  hero: {
    tagline: string;
    headline: string;
    intro: string;
    viewProjects: string;
    contact: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    stackLabel: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    preview: string;
    live: string;
    code: string;
    viewMore: string;
    viewLess: string;
  };
  experience: {
    eyebrow: string;
    title: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    email: string;
    line: string;
    chatwork: string;
  };
  footer: {
    builtWith: string;
  };
};

export const translations: Record<Language, Translation> = {
  ja: {
    // トップバー / 名前
    brand: "your.name",
    nav: {
      about: "紹介",
      projects: "構築したサイト",
      experience: "経験",
      contact: "連携",
      getInTouch: "お問い合わせ",
    },
    // Hero
    hero: {
      tagline: "フリーランスのIT開発専門家",
      headline: "才能とは、継続した者にのみ与えられる、後天的な特権である。",
      intro:
        "Webシステムの要件定義から設計・開発・テスト・運用保守までを一貫して担当できる、実務経験7年以上のフルスタックエンジニアです。",
      viewProjects: "実績を見る",
      contact: "お問い合わせ",
    },
    // About
    about: {
      eyebrow: "01 — About",
      title: "自己紹介",
      paragraphs: [
        "私は、天賦の才を信じません。信じているのは、昨日の自分を1ミリでも超えるために積み重ねた、地道な一日の重みだけです。エンジニアとして歩んできた7年間、私は常に自らの実力を冷静に見つめ、足りないものから決して目を逸らさずに走り続けてきました。",
        "フロントエンド（React / Next.js / Vue.js / Nuxt.js / TypeScript）とバックエンド（PHP・Laravel / Python・Django・FastAPI / Java・Spring Boot / Go）の双方を強みとし、EC・業務基幹システム・マッチングサービス・モバイルアプリ（Flutter / React Native）など幅広い領域で開発実績があります。近年は生成AI領域にも注力し、ChatGPT API・LangChain・ベクトルDB（ChromaDB）を用いたRAG構成のチャットボットや社内ナレッジ検索基盤の構築を、要件定義から社内展開まで単独で完遂しました。",
        "私の強みは、困難な局面ほど、静かに燃えられることです。問題が起きたとき、慌てて声を荒げる人間は、チームの視界を曇らせます。私が大切にしているのは、どんな状況でも表情を崩さず、まず事実を整理し、チームが安心して前を向ける「土台」であり続けることです。「彼に任せておけば大丈夫だ」——そう言っていただけることが、私にとって何よりの誇りです。",
        "技術は日進月歩であり、立ち止まることは後退を意味します。だからこそ私は、学び続けることを義務ではなく、喜びとして捉えています。",
        "顧客ヒアリングから提案・見積もり・運用改善提案まで対応可能で、新しい技術のキャッチアップと業務への落とし込みを得意としています。",
      ],
      stackLabel: "技術スタック",
    },
    // Projects
    projects: {
      eyebrow: "02 — Work",
      title: "実績",
      preview: "プレビュー",
      live: "サイト →",
      code: "コード →",
      viewMore: "もっと見る",
      viewLess: "閉じる",
    },
    // Experience
    experience: {
      eyebrow: "03 — Path",
      title: "経歴",
    },
    // Contact
    contact: {
      eyebrow: "04 — Contact",
      title: "お問い合わせ",
      body: "プロジェクトのご相談も、ちょっとしたご挨拶も歓迎です。",
      email: "メール",
      line: "LINE",
      chatwork: "Chatwork",
    },
    // Footer
    footer: {
      builtWith: "Next.js で構築",
    },
  },

  en: {
    // Top bar / name
    brand: "your.name",
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      getInTouch: "Get in touch",
    },
    // Hero
    hero: {
      tagline: "Freelance IT development specialist",
      headline:
        "Talent is an acquired privilege, granted only to those who persist.",
      intro:
        "A full-stack engineer with over 7 years of hands-on experience, able to own the entire process of web systems — from requirements definition and design to development, testing, and ongoing operation and maintenance.",
      viewProjects: "View projects",
      contact: "Contact",
    },
    // About
    about: {
      eyebrow: "01 — About",
      title: "About me",
      paragraphs: [
        "I don't believe in innate talent. What I believe in is the weight of steady, everyday effort — the work put in to surpass yesterday's self by even a millimeter. Over my seven years as an engineer, I have always assessed my own abilities with a clear eye, never looking away from what I lack, and kept moving forward.",
        "My strengths span both the frontend (React / Next.js / Vue.js / Nuxt.js / TypeScript) and the backend (PHP·Laravel / Python·Django·FastAPI / Java·Spring Boot / Go), with a track record across a wide range of domains — e-commerce, core business systems, matching services, and mobile apps (Flutter / React Native). Recently I have focused on generative AI as well, single-handedly delivering RAG-based chatbots and internal knowledge-search platforms using the ChatGPT API, LangChain, and a vector database (ChromaDB) — from requirements definition all the way to internal rollout.",
        "My real strength is that the tougher the situation, the more quietly I burn. When trouble strikes, someone who panics and raises their voice only clouds the team's vision. What I value is staying composed no matter the circumstances, organizing the facts first, and remaining the steady \"foundation\" that lets the team move forward with confidence. Being told \"if we leave it to him, we'll be fine\" is my greatest pride.",
        "Technology advances day by day, and to stand still is to fall behind. That is exactly why I see continuous learning not as an obligation, but as a joy.",
        "I can handle everything from client interviews to proposals, estimates, and operational-improvement suggestions, and I excel at picking up new technologies and applying them to real business needs.",
      ],
      stackLabel: "Tech stack",
    },
    // Projects
    projects: {
      eyebrow: "02 — Work",
      title: "Projects",
      preview: "preview",
      live: "Live →",
      code: "Code →",
      viewMore: "View More",
      viewLess: "Show Less",
    },
    // Experience
    experience: {
      eyebrow: "03 — Path",
      title: "Experience",
    },
    // Contact
    contact: {
      eyebrow: "04 — Contact",
      title: "Let's talk",
      body: "Have a project in mind or just want to say hi? Reach out.",
      email: "Email",
      line: "LINE",
      chatwork: "Chatwork",
    },
    // Footer
    footer: {
      builtWith: "Built with Next.js",
    },
  },
};
