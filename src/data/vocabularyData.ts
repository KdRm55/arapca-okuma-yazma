import type { VocabularyWord } from '../types';

export const VOCABULARY_DATA: VocabularyWord[] = [
  // --- 1. SEVİYE: 2 HARFLİ HECELER VE BİRLEŞİMLER ---
  {
    id: 'h1',
    arabic: 'بَـتَ',
    transliteration: 'Be-te',
    meaning: '2 harfli fethalı hece',
    category: 'hece',
    categoryLabel: '2 Harfli Hece',
    level: 1,
    syllables: [
      { arabic: 'بَـ', transliteration: 'Be' },
      { arabic: 'ـتَ', transliteration: 'te' }
    ],
    audioText: 'بَتَ'
  },
  {
    id: 'h2',
    arabic: 'دَار',
    transliteration: 'Dâr',
    meaning: 'Yurt / Ev',
    category: 'hece',
    categoryLabel: '2 Harfli Hece',
    level: 1,
    syllables: [
      { arabic: 'دَا', transliteration: 'Dâ' },
      { arabic: 'رْ', transliteration: 'r' }
    ],
    audioText: 'دَار'
  },
  {
    id: 'h3',
    arabic: 'قُلْ',
    transliteration: 'Kul',
    meaning: 'De ki / Söyle',
    category: 'hece',
    categoryLabel: '2 Harfli Hece',
    level: 1,
    syllables: [
      { arabic: 'قُـ', transliteration: 'Ku' },
      { arabic: 'ـلْ', transliteration: 'l' }
    ],
    audioText: 'قُلْ'
  },
  {
    id: 'h4',
    arabic: 'مَنْ',
    transliteration: 'Men',
    meaning: 'Kim',
    category: 'hece',
    categoryLabel: '2 Harfli Hece',
    level: 1,
    syllables: [
      { arabic: 'مَـ', transliteration: 'Me' },
      { arabic: 'ـنْ', transliteration: 'n' }
    ],
    audioText: 'مَنْ'
  },
  {
    id: 'h5',
    arabic: 'عَنْ',
    transliteration: '‘An',
    meaning: '-den, hakkında',
    category: 'hece',
    categoryLabel: '2 Harfli Hece',
    level: 1,
    syllables: [
      { arabic: 'عَـ', transliteration: '‘A' },
      { arabic: 'ـنْ', transliteration: 'n' }
    ],
    audioText: 'عَنْ'
  },
  {
    id: 'h6',
    arabic: 'فِي',
    transliteration: 'Fî',
    meaning: 'İçinde / -de',
    category: 'hece',
    categoryLabel: '2 Harfli Hece',
    level: 1,
    syllables: [
      { arabic: 'فِـ', transliteration: 'Fi' },
      { arabic: 'ـي', transliteration: 'î' }
    ],
    audioText: 'فِي'
  },
  {
    id: 'h7',
    arabic: 'كُنْ',
    transliteration: 'Kün',
    meaning: 'Ol',
    category: 'hece',
    categoryLabel: '2 Harfli Hece',
    level: 1,
    syllables: [
      { arabic: 'كُـ', transliteration: 'Kü' },
      { arabic: 'ـنْ', transliteration: 'n' }
    ],
    audioText: 'كُنْ'
  },
  {
    id: 'h8',
    arabic: 'لَمْ',
    transliteration: 'Lem',
    meaning: 'Yapmadı / Olmadı',
    category: 'hece',
    categoryLabel: '2 Harfli Hece',
    level: 1,
    syllables: [
      { arabic: 'لَـ', transliteration: 'Le' },
      { arabic: 'ـمْ', transliteration: 'm' }
    ],
    audioText: 'لَمْ'
  },
  {
    id: 'h9',
    arabic: 'هُوَ',
    transliteration: 'Hüve',
    meaning: 'O (eril)',
    category: 'hece',
    categoryLabel: '2 Harfli Hece',
    level: 1,
    syllables: [
      { arabic: 'هُـ', transliteration: 'Hü' },
      { arabic: 'ـوَ', transliteration: 've' }
    ],
    audioText: 'هُوَ'
  },
  {
    id: 'h10',
    arabic: 'هِيَ',
    transliteration: 'Hiye',
    meaning: 'O (dişil)',
    category: 'hece',
    categoryLabel: '2 Harfli Hece',
    level: 1,
    syllables: [
      { arabic: 'هِـ', transliteration: 'Hi' },
      { arabic: 'ـيَ', transliteration: 'ye' }
    ],
    audioText: 'هِيَ'
  },

  // --- 2. SEVİYE: 3 HARFLİ TEMEL KELİMELER (TAM HAREKELİ) ---
  {
    id: 'w1',
    arabic: 'كَتَبَ',
    transliteration: 'Ke-te-be',
    meaning: 'Yazdı',
    category: '3harfli',
    categoryLabel: '3 Harfli Kelime',
    level: 2,
    syllables: [
      { arabic: 'كَـ', transliteration: 'Ke' },
      { arabic: 'ـتَـ', transliteration: 'te' },
      { arabic: 'ـبَ', transliteration: 'be' }
    ],
    audioText: 'كَتَبَ'
  },
  {
    id: 'w2',
    arabic: 'ذَهَبَ',
    transliteration: 'Ze-he-be',
    meaning: 'Gitti',
    category: '3harfli',
    categoryLabel: '3 Harfli Kelime',
    level: 2,
    syllables: [
      { arabic: 'ذَ', transliteration: 'Ze' },
      { arabic: 'هَـ', transliteration: 'he' },
      { arabic: 'ـبَ', transliteration: 'be' }
    ],
    audioText: 'ذَهَبَ'
  },
  {
    id: 'w3',
    arabic: 'جَلَسَ',
    transliteration: 'Ce-le-se',
    meaning: 'Oturdu',
    category: '3harfli',
    categoryLabel: '3 Harfli Kelime',
    level: 2,
    syllables: [
      { arabic: 'جَـ', transliteration: 'Ce' },
      { arabic: 'ـلَـ', transliteration: 'le' },
      { arabic: 'ـسَ', transliteration: 'se' }
    ],
    audioText: 'جَلَسَ'
  },
  {
    id: 'w4',
    arabic: 'دَرَسَ',
    transliteration: 'De-ra-se',
    meaning: 'Ders çalıştı',
    category: '3harfli',
    categoryLabel: '3 Harfli Kelime',
    level: 2,
    syllables: [
      { arabic: 'دَ', transliteration: 'De' },
      { arabic: 'رَ', transliteration: 'ra' },
      { arabic: 'سَ', transliteration: 'se' }
    ],
    audioText: 'دَرَسَ'
  },
  {
    id: 'w5',
    arabic: 'شَرِبَ',
    transliteration: 'Şe-ri-be',
    meaning: 'İçti',
    category: '3harfli',
    categoryLabel: '3 Harfli Kelime',
    level: 2,
    syllables: [
      { arabic: 'شَـ', transliteration: 'Şe' },
      { arabic: 'ـرِ', transliteration: 'ri' },
      { arabic: 'بَ', transliteration: 'be' }
    ],
    audioText: 'شَرِبَ'
  },
  {
    id: 'w6',
    arabic: 'حَمِدَ',
    transliteration: 'Ha-mi-de',
    meaning: 'Övdü / Şükretti',
    category: '3harfli',
    categoryLabel: '3 Harfli Kelime',
    level: 2,
    syllables: [
      { arabic: 'حَـ', transliteration: 'Ha' },
      { arabic: 'ـمِـ', transliteration: 'mi' },
      { arabic: 'ـدَ', transliteration: 'de' }
    ],
    audioText: 'حَمِدَ'
  },
  {
    id: 'w7',
    arabic: 'رَزَقَ',
    transliteration: 'Ra-za-ka',
    meaning: 'Rızık verdi',
    category: '3harfli',
    categoryLabel: '3 Harfli Kelime',
    level: 2,
    syllables: [
      { arabic: 'رَ', transliteration: 'Ra' },
      { arabic: 'زَ', transliteration: 'za' },
      { arabic: 'قَ', transliteration: 'ka' }
    ],
    audioText: 'رَزَقَ'
  },
  {
    id: 'w8',
    arabic: 'صَبَرَ',
    transliteration: 'Sa-ba-ra',
    meaning: 'Sabretti',
    category: '3harfli',
    categoryLabel: '3 Harfli Kelime',
    level: 2,
    syllables: [
      { arabic: 'صَـ', transliteration: 'Sa' },
      { arabic: 'ـبَـ', transliteration: 'ba' },
      { arabic: 'ـرَ', transliteration: 'ra' }
    ],
    audioText: 'صَبَرَ'
  },
  {
    id: 'w9',
    arabic: 'طَلَبَ',
    transliteration: 'Ta-le-be',
    meaning: 'İstedi / Talep etti',
    category: '3harfli',
    categoryLabel: '3 Harfli Kelime',
    level: 2,
    syllables: [
      { arabic: 'طَـ', transliteration: 'Ta' },
      { arabic: 'ـلَـ', transliteration: 'le' },
      { arabic: 'ـبَ', transliteration: 'be' }
    ],
    audioText: 'طَلَبَ'
  },
  {
    id: 'w10',
    arabic: 'عَبَدَ',
    transliteration: '‘A-be-de',
    meaning: 'Kulluk etti',
    category: '3harfli',
    categoryLabel: '3 Harfli Kelime',
    level: 2,
    syllables: [
      { arabic: 'عَـ', transliteration: '‘A' },
      { arabic: 'ـبَـ', transliteration: 'be' },
      { arabic: 'ـدَ', transliteration: 'de' }
    ],
    audioText: 'عَبَدَ'
  },
  {
    id: 'w11',
    arabic: 'فَتَحَ',
    transliteration: 'Fe-te-ha',
    meaning: 'Açtı',
    category: '3harfli',
    categoryLabel: '3 Harfli Kelime',
    level: 2,
    syllables: [
      { arabic: 'فَـ', transliteration: 'Fe' },
      { arabic: 'ـتَـ', transliteration: 'te' },
      { arabic: 'ـحَ', transliteration: 'ha' }
    ],
    audioText: 'فَتَحَ'
  },
  {
    id: 'w12',
    arabic: 'قَرَأَ',
    transliteration: 'Ka-ra-’e',
    meaning: 'Okudu',
    category: '3harfli',
    categoryLabel: '3 Harfli Kelime',
    level: 2,
    syllables: [
      { arabic: 'قَـ', transliteration: 'Ka' },
      { arabic: 'ـرَ', transliteration: 'ra' },
      { arabic: 'أَ', transliteration: '’e' }
    ],
    audioText: 'قَرَأَ'
  },
  {
    id: 'w13',
    arabic: 'نَصَرَ',
    transliteration: 'Na-sa-ra',
    meaning: 'Yardım etti',
    category: '3harfli',
    categoryLabel: '3 Harfli Kelime',
    level: 2,
    syllables: [
      { arabic: 'نَـ', transliteration: 'Na' },
      { arabic: 'ـصَـ', transliteration: 'sa' },
      { arabic: 'ـرَ', transliteration: 'ra' }
    ],
    audioText: 'نَصَرَ'
  },
  {
    id: 'w14',
    arabic: 'وَلَدَ',
    transliteration: 'Ve-le-de',
    meaning: 'Doğurdu / Çocuğu oldu',
    category: '3harfli',
    categoryLabel: '3 Harfli Kelime',
    level: 2,
    syllables: [
      { arabic: 'وَ', transliteration: 'Ve' },
      { arabic: 'لَـ', transliteration: 'le' },
      { arabic: 'ـدَ', transliteration: 'de' }
    ],
    audioText: 'وَلَدَ'
  },
  {
    id: 'w15',
    arabic: 'أَكَلَ',
    transliteration: 'E-ke-le',
    meaning: 'Yedi',
    category: '3harfli',
    categoryLabel: '3 Harfli Kelime',
    level: 2,
    syllables: [
      { arabic: 'أَ', transliteration: 'E' },
      { arabic: 'كَـ', transliteration: 'ke' },
      { arabic: 'ـلَ', transliteration: 'le' }
    ],
    audioText: 'أَكَلَ'
  },
  {
    id: 'w16',
    arabic: 'سَمِعَ',
    transliteration: 'Se-mi-‘a',
    meaning: 'İşitti / Duydu',
    category: '3harfli',
    categoryLabel: '3 Harfli Kelime',
    level: 2,
    syllables: [
      { arabic: 'سَـ', transliteration: 'Se' },
      { arabic: 'ـمِـ', transliteration: 'mi' },
      { arabic: 'ـعَ', transliteration: '‘a' }
    ],
    audioText: 'سَمِعَ'
  },

  // --- 3. SEVİYE: CEZMLİ VE ŞEDDELİ KELİMELER ---
  {
    id: 'cs1',
    arabic: 'مَسْجِد',
    transliteration: 'Mes-cid',
    meaning: 'Mescit / Cami',
    category: 'cezm_sedde',
    categoryLabel: 'Cezmli & Şeddeli',
    level: 3,
    syllables: [
      { arabic: 'مَسْـ', transliteration: 'Mes' },
      { arabic: 'ـجِـ', transliteration: 'ci' },
      { arabic: 'ـدْ', transliteration: 'd' }
    ],
    audioText: 'مَسْجِد'
  },
  {
    id: 'cs2',
    arabic: 'مُسْلِم',
    transliteration: 'Müs-lim',
    meaning: 'Müslüman',
    category: 'cezm_sedde',
    categoryLabel: 'Cezmli & Şeddeli',
    level: 3,
    syllables: [
      { arabic: 'مُسْـ', transliteration: 'Müs' },
      { arabic: 'ـلِـ', transliteration: 'li' },
      { arabic: 'ـمْ', transliteration: 'm' }
    ],
    audioText: 'مُسْلِم'
  },
  {
    id: 'cs3',
    arabic: 'مَدْرَسَة',
    transliteration: 'Med-re-seh',
    meaning: 'Okul',
    category: 'cezm_sedde',
    categoryLabel: 'Cezmli & Şeddeli',
    level: 3,
    syllables: [
      { arabic: 'مَدْ', transliteration: 'Med' },
      { arabic: 'رَ', transliteration: 're' },
      { arabic: 'سَـ', transliteration: 'se' },
      { arabic: 'ـة', transliteration: 'h' }
    ],
    audioText: 'مَدْرَسَة'
  },
  {
    id: 'cs4',
    arabic: 'جَنَّة',
    transliteration: 'Cen-neh',
    meaning: 'Cennet / Bahçe',
    category: 'cezm_sedde',
    categoryLabel: 'Cezmli & Şeddeli',
    level: 3,
    syllables: [
      { arabic: 'جَنْـ', transliteration: 'Cen' },
      { arabic: 'ـنَـ', transliteration: 'ne' },
      { arabic: 'ـة', transliteration: 'h' }
    ],
    audioText: 'جَنَّة'
  },
  {
    id: 'cs5',
    arabic: 'رَبَّنَا',
    transliteration: 'Rab-be-nâ',
    meaning: 'Rabbimiz',
    category: 'cezm_sedde',
    categoryLabel: 'Cezmli & Şeddeli',
    level: 3,
    syllables: [
      { arabic: 'رَبْـ', transliteration: 'Rab' },
      { arabic: 'ـبَـ', transliteration: 'be' },
      { arabic: 'ـنَا', transliteration: 'nâ' }
    ],
    audioText: 'رَبَّنَا'
  },
  {
    id: 'cs6',
    arabic: 'شَمْس',
    transliteration: 'Şems',
    meaning: 'Güneş',
    category: 'cezm_sedde',
    categoryLabel: 'Cezmli & Şeddeli',
    level: 3,
    syllables: [
      { arabic: 'شَمْـ', transliteration: 'Şem' },
      { arabic: 'ـسْ', transliteration: 's' }
    ],
    audioText: 'شَمْس'
  },
  {
    id: 'cs7',
    arabic: 'قَمَر',
    transliteration: 'Ka-mar',
    meaning: 'Ay',
    category: 'cezm_sedde',
    categoryLabel: 'Cezmli & Şeddeli',
    level: 3,
    syllables: [
      { arabic: 'قَـ', transliteration: 'Ka' },
      { arabic: 'ـمَـ', transliteration: 'ma' },
      { arabic: 'ـرْ', transliteration: 'r' }
    ],
    audioText: 'قَمَر'
  },
  {
    id: 'cs8',
    arabic: 'مُؤْمِن',
    transliteration: 'Mü’-min',
    meaning: 'İnanan / Mümin',
    category: 'cezm_sedde',
    categoryLabel: 'Cezmli & Şeddeli',
    level: 3,
    syllables: [
      { arabic: 'مُؤْ', transliteration: 'Mü’' },
      { arabic: 'مِـ', transliteration: 'mi' },
      { arabic: 'ـنْ', transliteration: 'n' }
    ],
    audioText: 'مُؤْمِن'
  },
  {
    id: 'cs9',
    arabic: 'صَبَّار',
    transliteration: 'Sab-bâr',
    meaning: 'Kaktüs / Çok sabreden',
    category: 'cezm_sedde',
    categoryLabel: 'Cezmli & Şeddeli',
    level: 3,
    syllables: [
      { arabic: 'صَبْـ', transliteration: 'Sab' },
      { arabic: 'ـبَا', transliteration: 'bâ' },
      { arabic: 'رْ', transliteration: 'r' }
    ],
    audioText: 'صَبَّار'
  },
  {
    id: 'cs10',
    arabic: 'النَّاس',
    transliteration: 'En-nâs',
    meaning: 'İnsanlar',
    category: 'cezm_sedde',
    categoryLabel: 'Cezmli & Şeddeli',
    level: 3,
    syllables: [
      { arabic: 'اَنْـ', transliteration: 'En' },
      { arabic: 'ـنَا', transliteration: 'nâ' },
      { arabic: 'سْ', transliteration: 's' }
    ],
    audioText: 'النَّاس'
  },

  // --- 4. SEVİYE: GÜNLÜK HAYAT KELİMELERİ ---
  {
    id: 'd1',
    arabic: 'سَلَام',
    transliteration: 'Se-lâm',
    meaning: 'Barış / Esenlik / Selam',
    category: 'gunluk',
    categoryLabel: 'Günlük Hayat',
    level: 3,
    syllables: [
      { arabic: 'سَـ', transliteration: 'Se' },
      { arabic: 'ـلَا', transliteration: 'lâ' },
      { arabic: 'مْ', transliteration: 'm' }
    ],
    audioText: 'سَلَام'
  },
  {
    id: 'd2',
    arabic: 'شُكْرًا',
    transliteration: 'Şük-ran',
    meaning: 'Teşekkürler',
    category: 'gunluk',
    categoryLabel: 'Günlük Hayat',
    level: 3,
    syllables: [
      { arabic: 'شُكْـ', transliteration: 'Şük' },
      { arabic: 'ـرًا', transliteration: 'ran' }
    ],
    audioText: 'شُكْرًا'
  },
  {
    id: 'd3',
    arabic: 'صَبَاحُ الخَيْر',
    transliteration: 'Sabâhu-l hayr',
    meaning: 'Günaydın',
    category: 'gunluk',
    categoryLabel: 'Günlük Hayat',
    level: 4,
    syllables: [
      { arabic: 'صَبَاحُ', transliteration: 'Sabâhu' },
      { arabic: 'الخَيْر', transliteration: 'l-hayr' }
    ],
    audioText: 'صَبَاحُ الخَيْر'
  },
  {
    id: 'd4',
    arabic: 'مَرْحَبًا',
    transliteration: 'Mar-ha-ben',
    meaning: 'Merhaba',
    category: 'gunluk',
    categoryLabel: 'Günlük Hayat',
    level: 3,
    syllables: [
      { arabic: 'مَرْ', transliteration: 'Mar' },
      { arabic: 'حَـ', transliteration: 'ha' },
      { arabic: 'ـبًا', transliteration: 'ben' }
    ],
    audioText: 'مَرْحَبًا'
  },
  {
    id: 'd5',
    arabic: 'أَهْلًا وَسَهْلًا',
    transliteration: 'Ehlen ve sehlen',
    meaning: 'Hoş geldiniz',
    category: 'gunluk',
    categoryLabel: 'Günlük Hayat',
    level: 4,
    syllables: [
      { arabic: 'أَهْلًا', transliteration: 'Ehlen' },
      { arabic: 'وَسَهْلًا', transliteration: 've sehlen' }
    ],
    audioText: 'أَهْلًا وَسَهْلًا'
  },
  {
    id: 'd6',
    arabic: 'كِتَاب',
    transliteration: 'Ki-tâb',
    meaning: 'Kitap',
    category: 'gunluk',
    categoryLabel: 'Günlük Hayat',
    level: 2,
    syllables: [
      { arabic: 'كِـ', transliteration: 'Ki' },
      { arabic: 'ـتَا', transliteration: 'tâ' },
      { arabic: 'ـبْ', transliteration: 'b' }
    ],
    audioText: 'كِتَاب'
  },
  {
    id: 'd7',
    arabic: 'قَلَم',
    transliteration: 'Ka-lem',
    meaning: 'Kalem',
    category: 'gunluk',
    categoryLabel: 'Günlük Hayat',
    level: 2,
    syllables: [
      { arabic: 'قَـ', transliteration: 'Ka' },
      { arabic: 'ـلَـ', transliteration: 'le' },
      { arabic: 'ـمْ', transliteration: 'm' }
    ],
    audioText: 'قَلَم'
  },
  {
    id: 'd8',
    arabic: 'بَيْت',
    transliteration: 'Beyt',
    meaning: 'Ev',
    category: 'gunluk',
    categoryLabel: 'Günlük Hayat',
    level: 2,
    syllables: [
      { arabic: 'بَيْـ', transliteration: 'Bey' },
      { arabic: 'ـتْ', transliteration: 't' }
    ],
    audioText: 'بَيْت'
  },
  {
    id: 'd9',
    arabic: 'مَاء',
    transliteration: 'Mâ’',
    meaning: 'Su',
    category: 'gunluk',
    categoryLabel: 'Günlük Hayat',
    level: 2,
    syllables: [
      { arabic: 'مَا', transliteration: 'Mâ' },
      { arabic: 'ءْ', transliteration: '’' }
    ],
    audioText: 'مَاء'
  },
  {
    id: 'd10',
    arabic: 'وَرْدَة',
    transliteration: 'Ver-deh',
    meaning: 'Gül / Çiçek',
    category: 'gunluk',
    categoryLabel: 'Günlük Hayat',
    level: 2,
    syllables: [
      { arabic: 'وَرْ', transliteration: 'Ver' },
      { arabic: 'دَ', transliteration: 'de' },
      { arabic: 'ة', transliteration: 'h' }
    ],
    audioText: 'وَرْدَة'
  },

  // --- 5. SEVİYE: KUR'AN-I KERİM VE NAMAZ DUALARI KELİMELERİ ---
  {
    id: 'q1',
    arabic: 'اَلْحَمْدُ لِلّٰهِ',
    transliteration: 'El-hamdü lillâh',
    meaning: 'Hamd Allah’a mahsustur',
    category: 'kuran',
    categoryLabel: 'Kur’an Kelimeleri',
    level: 4,
    syllables: [
      { arabic: 'اَلْـ', transliteration: 'El' },
      { arabic: 'ـحَمْـ', transliteration: 'ham' },
      { arabic: 'ـدُ', transliteration: 'dü' },
      { arabic: 'لِلّٰـ', transliteration: 'lillâ' },
      { arabic: 'ـهِ', transliteration: 'h' }
    ],
    audioText: 'اَلْحَمْدُ لِلّٰهِ'
  },
  {
    id: 'q2',
    arabic: 'رَبِّ العَالَمِينَ',
    transliteration: 'Rabbi-l ‘âlemîn',
    meaning: 'Alemlerin Rabbi',
    category: 'kuran',
    categoryLabel: 'Kur’an Kelimeleri',
    level: 4,
    syllables: [
      { arabic: 'رَبِّ', transliteration: 'Rabbi' },
      { arabic: 'الْعَا', transliteration: 'l-‘â' },
      { arabic: 'لَـ', transliteration: 'le' },
      { arabic: 'ـمِيـ', transliteration: 'mî' },
      { arabic: 'ـنَ', transliteration: 'ne' }
    ],
    audioText: 'رَبِّ العَالَمِينَ'
  },
  {
    id: 'q3',
    arabic: 'الرَّحْمٰنِ الرَّحِيمِ',
    transliteration: 'Er-rahmâni-r rahîm',
    meaning: 'Rahmân ve Rahîm olan',
    category: 'kuran',
    categoryLabel: 'Kur’an Kelimeleri',
    level: 4,
    syllables: [
      { arabic: 'الرَّحْـ', transliteration: 'Er-rah' },
      { arabic: 'ـمٰـ', transliteration: 'mâ' },
      { arabic: 'ـنِ', transliteration: 'ni' },
      { arabic: 'الرَّحِيـ', transliteration: 'r-rahî' },
      { arabic: 'ـمِ', transliteration: 'mi' }
    ],
    audioText: 'الرَّحْمٰنِ الرَّحِيمِ'
  },
  {
    id: 'q4',
    arabic: 'إِيَّاكَ نَعْبُدُ',
    transliteration: 'İyyâke na‘büdü',
    meaning: 'Yalnız sana ibadet ederiz',
    category: 'kuran',
    categoryLabel: 'Kur’an Kelimeleri',
    level: 4,
    syllables: [
      { arabic: 'إِيَّا', transliteration: 'İy-yâ' },
      { arabic: 'كَ', transliteration: 'ke' },
      { arabic: 'نَعْـ', transliteration: 'na‘' },
      { arabic: 'ـبُـ', transliteration: 'bü' },
      { arabic: 'ـدُ', transliteration: 'dü' }
    ],
    audioText: 'إِيَّاكَ نَعْبُدُ'
  },
  {
    id: 'q5',
    arabic: 'وَإِيَّاكَ نَسْتَعِينُ',
    transliteration: 'Ve iyyâke neste‘în',
    meaning: 'Ve yalnız senden yardım dileriz',
    category: 'kuran',
    categoryLabel: 'Kur’an Kelimeleri',
    level: 4,
    syllables: [
      { arabic: 'وَإِيَّاكَ', transliteration: 'Ve iyyâke' },
      { arabic: 'نَسْـ', transliteration: 'nes' },
      { arabic: 'ـتَـ', transliteration: 'te' },
      { arabic: 'ـعِيـ', transliteration: '‘î' },
      { arabic: 'ـنُ', transliteration: 'nü' }
    ],
    audioText: 'وَإِيَّاكَ نَسْتَعِينُ'
  },
  {
    id: 'q6',
    arabic: 'اهْدِنَا الصِّرَاطَ',
    transliteration: 'İhdine-s sırâta',
    meaning: 'Bizi doğru yola ilet',
    category: 'kuran',
    categoryLabel: 'Kur’an Kelimeleri',
    level: 4,
    syllables: [
      { arabic: 'اِهْـ', transliteration: 'İh' },
      { arabic: 'ـدِ', transliteration: 'di' },
      { arabic: 'نَا', transliteration: 'ne-s' },
      { arabic: 'صِّـ', transliteration: 'sı' },
      { arabic: 'ـرَا', transliteration: 'râ' },
      { arabic: 'طَ', transliteration: 'ta' }
    ],
    audioText: 'اهْدِنَا الصِّرَاطَ'
  },
  {
    id: 'q7',
    arabic: 'المُسْتَقِيمَ',
    transliteration: 'El-müstakîm',
    meaning: 'Dosdoğru olan (yol)',
    category: 'kuran',
    categoryLabel: 'Kur’an Kelimeleri',
    level: 4,
    syllables: [
      { arabic: 'اَلْـ', transliteration: 'El' },
      { arabic: 'ـمُسْـ', transliteration: 'müs' },
      { arabic: 'ـتَـ', transliteration: 'te' },
      { arabic: 'ـقِيـ', transliteration: 'kî' },
      { arabic: 'ـمَ', transliteration: 'me' }
    ],
    audioText: 'المُسْتَقِيمَ'
  },
  {
    id: 'q8',
    arabic: 'قُلْ هُوَ اللّٰهُ أَحَدٌ',
    transliteration: 'Kul hüvellâhü ehad',
    meaning: 'De ki: O Allah tektir',
    category: 'kuran',
    categoryLabel: 'Kur’an Kelimeleri',
    level: 4,
    syllables: [
      { arabic: 'قُلْ', transliteration: 'Kul' },
      { arabic: 'هُـوَ', transliteration: 'hü-ve' },
      { arabic: 'اللّٰهُ', transliteration: 'llâ-hü' },
      { arabic: 'أَحَدٌ', transliteration: 'e-had' }
    ],
    audioText: 'قُلْ هُوَ اللّٰهُ أَحَدٌ'
  },
  {
    id: 'q9',
    arabic: 'اَللّٰهُ الصَّمَدُ',
    transliteration: 'Allâhüs-samed',
    meaning: 'Allah hiçbir şeye muhtaç değildir',
    category: 'kuran',
    categoryLabel: 'Kur’an Kelimeleri',
    level: 4,
    syllables: [
      { arabic: 'اَللّٰـهُ', transliteration: 'Allâ-hüs' },
      { arabic: 'صَّـ', transliteration: 'sa' },
      { arabic: 'ـمَـ', transliteration: 'me' },
      { arabic: 'ـدُ', transliteration: 'dü' }
    ],
    audioText: 'اَللّٰهُ الصَّمَدُ'
  },
  {
    id: 'q10',
    arabic: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ',
    transliteration: 'Sübhâne rabbiye-l ‘azîm',
    meaning: 'Yüce Rabbim her türlü noksanlıktan uzaktır (Rüku tesbihi)',
    category: 'kuran',
    categoryLabel: 'Kur’an Kelimeleri',
    level: 4,
    syllables: [
      { arabic: 'سُبْحَانَ', transliteration: 'Sübhâne' },
      { arabic: 'رَبِّيَ', transliteration: 'rabbiye' },
      { arabic: 'الْعَظِيمِ', transliteration: 'l-‘azîm' }
    ],
    audioText: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ'
  }
];
