export type Phrase = {
  id: string;
  japanese: string;
  romaji: string;
  english: string;
  audioPath: string;
};

export type Problem = {
  slug: string;
  title: string;
  shortDescription: string;
  situation: string;
  phrases: readonly Phrase[];
  staffMessage: {
    japanese: string;
    english: string;
    audioPath?: string;
  };
};

export const trainProblemDetails = [
  {
    slug: "cannot-exit-gate",
    title: "I can’t exit the ticket gate",
    shortDescription: "The ticket gate won’t let me through.",
    situation: "Use these phrases when your ticket or IC card does not let you leave the station.",
    phrases: [
      { id: "cannot-exit-gate-01", japanese: "すみません、改札から出られません。", romaji: "Sumimasen, kaisatsu kara deraremasen.", english: "Excuse me, I can’t get through the ticket gate.", audioPath: "/audio/train/cannot-exit-gate-01.mp3" },
      { id: "cannot-exit-gate-02", japanese: "この切符で大丈夫ですか？", romaji: "Kono kippu de daijōbu desu ka?", english: "Is this ticket okay?", audioPath: "/audio/train/cannot-exit-gate-02.mp3" },
      { id: "cannot-exit-gate-03", japanese: "どうすればいいですか？", romaji: "Dō sureba ii desu ka?", english: "What should I do?", audioPath: "/audio/train/cannot-exit-gate-03.mp3" },
    ],
    staffMessage: { japanese: "すみません、改札から出られません。", english: "Excuse me, I can’t get through the ticket gate." },
  },
  {
    slug: "wrong-train",
    title: "I got on the wrong train",
    shortDescription: "Help me find the right route.",
    situation: "Use these phrases when you are on the wrong train or need a new route to your destination.",
    phrases: [
      { id: "wrong-train-01", japanese: "すみません、電車を間違えました。", romaji: "Sumimasen, densha o machigaemashita.", english: "Excuse me, I got on the wrong train.", audioPath: "/audio/train/wrong-train-01.mp3" },
      { id: "wrong-train-02", japanese: "この駅に行きたいです。", romaji: "Kono eki ni ikitai desu.", english: "I want to go to this station.", audioPath: "/audio/train/wrong-train-02.mp3" },
      { id: "wrong-train-03", japanese: "どこで乗り換えればいいですか？", romaji: "Doko de norikaereba ii desu ka?", english: "Where should I change trains?", audioPath: "/audio/train/wrong-train-03.mp3" },
    ],
    staffMessage: { japanese: "すみません、電車を間違えました。", english: "Excuse me, I got on the wrong train." },
  },
  {
    slug: "cannot-find-platform",
    title: "I can’t find the right platform",
    shortDescription: "Which platform should I use?",
    situation: "Use these phrases when you know your destination but do not know where to board.",
    phrases: [
      { id: "cannot-find-platform-01", japanese: "この駅へ行く電車は何番ホームですか？", romaji: "Kono eki e iku densha wa nanban hōmu desu ka?", english: "Which platform is the train to this station?", audioPath: "/audio/train/cannot-find-platform-01.mp3" },
      { id: "cannot-find-platform-02", japanese: "このホームで合っていますか？", romaji: "Kono hōmu de atte imasu ka?", english: "Am I on the right platform?", audioPath: "/audio/train/cannot-find-platform-02.mp3" },
      { id: "cannot-find-platform-03", japanese: "次の電車でいいですか？", romaji: "Tsugi no densha de ii desu ka?", english: "Should I take the next train?", audioPath: "/audio/train/cannot-find-platform-03.mp3" },
    ],
    staffMessage: { japanese: "この駅へ行く電車は何番ホームですか？", english: "Which platform is the train to this station?" },
  },
  {
    slug: "insufficient-ic-balance",
    title: "My IC card balance is too low",
    shortDescription: "I need to add money or pay the fare.",
    situation: "Use these phrases when your IC card does not have enough balance for the fare.",
    phrases: [
      { id: "insufficient-ic-balance-01", japanese: "ICカードの残高が足りません。", romaji: "Ai shī kādo no zandaka ga tarimasen.", english: "My IC card balance is not enough.", audioPath: "/audio/train/insufficient-ic-balance-01.mp3" },
      { id: "insufficient-ic-balance-02", japanese: "どこでチャージできますか？", romaji: "Doko de chāji dekimasu ka?", english: "Where can I add money to it?", audioPath: "/audio/train/insufficient-ic-balance-02.mp3" },
      { id: "insufficient-ic-balance-03", japanese: "不足分を現金で払えますか？", romaji: "Fusokubun o genkin de haraemasu ka?", english: "Can I pay the difference in cash?", audioPath: "/audio/train/insufficient-ic-balance-03.mp3" },
    ],
    staffMessage: { japanese: "ICカードの残高が足りません。", english: "My IC card balance is not enough." },
  },
  {
    slug: "lost-item-on-train",
    title: "I left something on the train",
    shortDescription: "Help me report a lost item.",
    situation: "Use these phrases when you need to report something left behind on a train.",
    phrases: [
      { id: "lost-item-on-train-01", japanese: "電車に忘れ物をしました。", romaji: "Densha ni wasuremono o shimashita.", english: "I left something on the train.", audioPath: "/audio/train/lost-item-on-train-01.mp3" },
      { id: "lost-item-on-train-02", japanese: "この電車に乗っていました。", romaji: "Kono densha ni notte imashita.", english: "I was on this train.", audioPath: "/audio/train/lost-item-on-train-02.mp3" },
      { id: "lost-item-on-train-03", japanese: "どこに問い合わせればいいですか？", romaji: "Doko ni toiawasereba ii desu ka?", english: "Who should I contact?", audioPath: "/audio/train/lost-item-on-train-03.mp3" },
    ],
    staffMessage: { japanese: "電車に忘れ物をしました。", english: "I left something on the train." },
  },
] as const satisfies readonly Problem[];
