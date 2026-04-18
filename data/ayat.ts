// data/ayat.ts
export interface Ayah {
  ar: string;
  tr: string;
}

const AYAT_DATA: Record<number, Ayah[]> = {
  1: [
    {
      ar: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      tr: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
    },
    {
      ar: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
      tr: "All praise is due to Allah, Lord of the worlds.",
    },
    {
      ar: "الرَّحْمَٰنِ الرَّحِيمِ",
      tr: "The Entirely Merciful, the Especially Merciful,",
    },
    {
      ar: "مَالِكِ يَوْمِ الدِّينِ",
      tr: "Sovereign of the Day of Recompense.",
    },
    {
      ar: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
      tr: "It is You we worship and You we ask for help.",
    },
    {
      ar: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
      tr: "Guide us to the straight path —",
    },
    {
      ar: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
      tr: "The path of those upon whom You have bestowed favor, not of those who have evoked anger or of those who are astray.",
    },
  ],
  112: [
    { ar: "قُلْ هُوَ اللَّهُ أَحَدٌ", tr: "Say, He is Allah, the One," },
    { ar: "اللَّهُ الصَّمَدُ", tr: "Allah, the Eternal Refuge." },
    { ar: "لَمْ يَلِدْ وَلَمْ يُولَدْ", tr: "He neither begets nor is born," },
    {
      ar: "وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ",
      tr: "Nor is there to Him any equivalent.",
    },
  ],
  113: [
    {
      ar: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ",
      tr: "Say, I seek refuge in the Lord of daybreak",
    },
    {
      ar: "مِنْ شَرِّ مَا خَلَقَ",
      tr: "From the evil of that which He created",
    },
    {
      ar: "وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ",
      tr: "And from the evil of darkness when it settles",
    },
    {
      ar: "وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ",
      tr: "And from the evil of the blowers in knots",
    },
    {
      ar: "وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ",
      tr: "And from the evil of an envier when he envies.",
    },
  ],
  114: [
    {
      ar: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
      tr: "Say, I seek refuge in the Lord of mankind,",
    },
    { ar: "مَلِكِ النَّاسِ", tr: "The Sovereign of mankind," },
    { ar: "إِلَٰهِ النَّاسِ", tr: "The God of mankind," },
    {
      ar: "مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ",
      tr: "From the evil of the retreating whisperer —",
    },
    {
      ar: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ",
      tr: "Who whispers in the breasts of mankind —",
    },
    {
      ar: "مِنَ الْجِنَّةِ وَالنَّاسِ",
      tr: "From among the jinn and mankind.",
    },
  ],
  36: [
    { ar: "يس", tr: "Ya, Seen." },
    { ar: "وَالْقُرْآنِ الْحَكِيمِ", tr: "By the wise Quran." },
    {
      ar: "إِنَّكَ لَمِنَ الْمُرْسَلِينَ",
      tr: "Indeed, you, are among the messengers,",
    },
    { ar: "عَلَىٰ صِرَاطٍ مُسْتَقِيمٍ", tr: "On a straight path." },
    {
      ar: "تَنزِيلَ الْعَزِيزِ الرَّحِيمِ",
      tr: "A revelation of the Exalted in Might, the Merciful,",
    },
  ],
  67: [
    {
      ar: "تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
      tr: "Blessed is He in whose hand is dominion, and He is over all things competent.",
    },
    {
      ar: "الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا ۚ وَهُوَ الْعَزِيزُ الْغَفُورُ",
      tr: "He who created death and life to test you as to which of you is best in deed — and He is the Exalted in Might, the Forgiving.",
    },
    {
      ar: "الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ طِبَاقًا ۖ مَّا تَرَىٰ فِي خَلْقِ الرَّحْمَٰنِ مِن تَفَاوُتٍ ۖ فَارْجِعِ الْبَصَرَ هَلْ تَرَىٰ مِن فُطُورٍ",
      tr: "Who created seven heavens in layers. You do not see in the creation of the Most Merciful any inconsistency. So return your vision to the sky; do you see any breaks?",
    },
  ],
  55: [
    { ar: "الرَّحْمَٰنُ", tr: "The Most Merciful" },
    { ar: "عَلَّمَ الْقُرْآنَ", tr: "Taught the Quran," },
    { ar: "خَلَقَ الْإِنسَانَ", tr: "Created man," },
    { ar: "عَلَّمَهُ الْبَيَانَ", tr: "Taught him eloquence." },
    {
      ar: "الشَّمْسُ وَالْقَمَرُ بِحُسْبَانٍ",
      tr: "The sun and moon follow calculated courses,",
    },
    {
      ar: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
      tr: "So which of the favors of your Lord would you deny?",
    },
  ],
};

const PLACEHOLDER_AYAT: Ayah[] = [
  {
    ar: "إِنَّ اللَّهَ بِكُلِّ شَيْءٍ عَلِيمٌ",
    tr: "Indeed, Allah is All-Knowing of everything.",
  },
  {
    ar: "وَاللَّهُ غَفُورٌ رَّحِيمٌ",
    tr: "And Allah is Forgiving and Merciful.",
  },
  {
    ar: "إِنَّ اللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    tr: "Indeed, Allah is capable of all things.",
  },
  {
    ar: "وَهُوَ الْعَلِيُّ الْعَظِيمُ",
    tr: "And He is the Most High, the Most Great.",
  },
  {
    ar: "إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ",
    tr: "Indeed we belong to Allah, and indeed to Him we will return.",
  },
];

import { surahs } from "./surahs";

export function getAyat(surahNumber: number): Ayah[] {
  if (AYAT_DATA[surahNumber]) {
    return AYAT_DATA[surahNumber];
  }
  const surah = surahs[surahNumber - 1];
  const count = Math.min(surah.verses, 8);
  return Array.from(
    { length: count },
    (_, i) => PLACEHOLDER_AYAT[i % PLACEHOLDER_AYAT.length],
  );
}

export function toArabicNum(n: number): string {
  return String(n).replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[parseInt(d)]);
}
