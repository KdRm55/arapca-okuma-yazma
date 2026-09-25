import type { VocabularyWord } from '../types';

export const VOCABULARY_DATA: VocabularyWord[] = [
  // =========================================================================
  // 1. SEVİYE: 3 HARFLİ SÜLÂSÎ FİİL VE İSİMLER (TAM HAREKELİ)
  // =========================================================================
  {
    id: 'w1',
    arabic: 'كَتَبَ',
    transliteration: 'Ke-te-be',
    meaning: 'Yazdı',
    category: '3harfli',
    categoryLabel: '3 Harfli Fiil',
    level: 1,
    syllables: [
      { arabic: 'كَـ', transliteration: 'Ke' },
      { arabic: 'ـتَـ', transliteration: 'te' },
      { arabic: 'ـبَ', transliteration: 'be' }
    ],
    audioText: 'كَتَبَ'
  },
  {
    id: 'w2',
    arabic: 'قَرَأَ',
    transliteration: 'Ka-ra-’e',
    meaning: 'Okudu',
    category: '3harfli',
    categoryLabel: '3 Harfli Fiil',
    level: 1,
    syllables: [
      { arabic: 'قَـ', transliteration: 'Ka' },
      { arabic: 'ـرَ', transliteration: 'ra' },
      { arabic: 'أَ', transliteration: '’e' }
    ],
    audioText: 'قَرَأَ'
  },
  {
    id: 'w3',
    arabic: 'جَلَسَ',
    transliteration: 'Ce-le-se',
    meaning: 'Oturdu',
    category: '3harfli',
    categoryLabel: '3 Harfli Fiil',
    level: 1,
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
    categoryLabel: '3 Harfli Fiil',
    level: 1,
    syllables: [
      { arabic: 'دَ', transliteration: 'De' },
      { arabic: 'رَ', transliteration: 'ra' },
      { arabic: 'سَ', transliteration: 'se' }
    ],
    audioText: 'دَرَسَ'
  },
  {
    id: 'w5',
    arabic: 'ذَهَبَ',
    transliteration: 'Ze-he-be',
    meaning: 'Gitti',
    category: '3harfli',
    categoryLabel: '3 Harfli Fiil',
    level: 1,
    syllables: [
      { arabic: 'ذَ', transliteration: 'Ze' },
      { arabic: 'هَـ', transliteration: 'he' },
      { arabic: 'ـبَ', transliteration: 'be' }
    ],
    audioText: 'ذَهَبَ'
  },
  {
    id: 'w6',
    arabic: 'خَرَجَ',
    transliteration: 'Ha-ra-ce',
    meaning: 'Çıktı',
    category: '3harfli',
    categoryLabel: '3 Harfli Fiil',
    level: 1,
    syllables: [
      { arabic: 'خَـ', transliteration: 'Ha' },
      { arabic: 'ـرَ', transliteration: 'ra' },
      { arabic: 'جَ', transliteration: 'ce' }
    ],
    audioText: 'خَرَجَ'
  },
  {
    id: 'w7',
    arabic: 'دَخَلَ',
    transliteration: 'De-ha-le',
    meaning: 'Girdi',
    category: '3harfli',
    categoryLabel: '3 Harfli Fiil',
    level: 1,
    syllables: [
      { arabic: 'دَ', transliteration: 'De' },
      { arabic: 'خَـ', transliteration: 'ha' },
      { arabic: 'ـلَ', transliteration: 'le' }
    ],
    audioText: 'دَخَلَ'
  },
  {
    id: 'w8',
    arabic: 'فَتَحَ',
    transliteration: 'Fe-te-ha',
    meaning: 'Açtı',
    category: '3harfli',
    categoryLabel: '3 Harfli Fiil',
    level: 1,
    syllables: [
      { arabic: 'فَـ', transliteration: 'Fe' },
      { arabic: 'ـتَـ', transliteration: 'te' },
      { arabic: 'ـحَ', transliteration: 'ha' }
    ],
    audioText: 'فَتَحَ'
  },
  {
    id: 'w9',
    arabic: 'نَصَرَ',
    transliteration: 'Na-sa-ra',
    meaning: 'Yardım etti',
    category: '3harfli',
    categoryLabel: '3 Harfli Fiil',
    level: 1,
    syllables: [
      { arabic: 'نَـ', transliteration: 'Na' },
      { arabic: 'ـصَـ', transliteration: 'sa' },
      { arabic: 'ـرَ', transliteration: 'ra' }
    ],
    audioText: 'نَصَرَ'
  },
  {
    id: 'w10',
    arabic: 'حَمِدَ',
    transliteration: 'Ha-mi-de',
    meaning: 'Övdü / Şükretti',
    category: '3harfli',
    categoryLabel: '3 Harfli Fiil',
    level: 1,
    syllables: [
      { arabic: 'حَـ', transliteration: 'Ha' },
      { arabic: 'ـمِـ', transliteration: 'mi' },
      { arabic: 'ـدَ', transliteration: 'de' }
    ],
    audioText: 'حَمِدَ'
  },
  {
    id: 'w11',
    arabic: 'عَلِمَ',
    transliteration: '‘A-li-me',
    meaning: 'Bildi / Öğrendi',
    category: '3harfli',
    categoryLabel: '3 Harfli Fiil',
    level: 1,
    syllables: [
      { arabic: 'عَـ', transliteration: '‘A' },
      { arabic: 'ـلِـ', transliteration: 'li' },
      { arabic: 'ـمَ', transliteration: 'me' }
    ],
    audioText: 'عَلِمَ'
  },
  {
    id: 'w12',
    arabic: 'سَمِعَ',
    transliteration: 'Se-mi-‘a',
    meaning: 'İşitti / Duydu',
    category: '3harfli',
    categoryLabel: '3 Harfli Fiil',
    level: 1,
    syllables: [
      { arabic: 'سَـ', transliteration: 'Se' },
      { arabic: 'ـمِـ', transliteration: 'mi' },
      { arabic: 'ـعَ', transliteration: '‘a' }
    ],
    audioText: 'سَمِعَ'
  },
  {
    id: 'w13',
    arabic: 'سَجَدَ',
    transliteration: 'Se-ce-de',
    meaning: 'Secde etti',
    category: '3harfli',
    categoryLabel: '3 Harfli Fiil',
    level: 1,
    syllables: [
      { arabic: 'سَـ', transliteration: 'Se' },
      { arabic: 'ـجَـ', transliteration: 'ce' },
      { arabic: 'ـدَ', transliteration: 'de' }
    ],
    audioText: 'سَجَدَ'
  },
  {
    id: 'w14',
    arabic: 'رَكَعَ',
    transliteration: 'Re-ke-‘a',
    meaning: 'Rükû etti',
    category: '3harfli',
    categoryLabel: '3 Harfli Fiil',
    level: 1,
    syllables: [
      { arabic: 'رَ', transliteration: 'Re' },
      { arabic: 'كَـ', transliteration: 'ke' },
      { arabic: 'ـعَ', transliteration: '‘a' }
    ],
    audioText: 'رَكَعَ'
  },
  {
    id: 'w15',
    arabic: 'صَبَرَ',
    transliteration: 'Sa-ba-ra',
    meaning: 'Sabretti',
    category: '3harfli',
    categoryLabel: '3 Harfli Fiil',
    level: 1,
    syllables: [
      { arabic: 'صَـ', transliteration: 'Sa' },
      { arabic: 'ـبَـ', transliteration: 'ba' },
      { arabic: 'ـرَ', transliteration: 'ra' }
    ],
    audioText: 'صَبَرَ'
  },
  {
    id: 'w16',
    arabic: 'شَكَرَ',
    transliteration: 'Şe-ke-ra',
    meaning: 'Şükretti',
    category: '3harfli',
    categoryLabel: '3 Harfli Fiil',
    level: 1,
    syllables: [
      { arabic: 'شَـ', transliteration: 'Şe' },
      { arabic: 'ـكَـ', transliteration: 'ke' },
      { arabic: 'ـرَ', transliteration: 'ra' }
    ],
    audioText: 'شَكَرَ'
  },
  {
    id: 'w17',
    arabic: 'غَفَرَ',
    transliteration: 'Ğa-fe-ra',
    meaning: 'Bağışladı',
    category: '3harfli',
    categoryLabel: '3 Harfli Fiil',
    level: 1,
    syllables: [
      { arabic: 'غَـ', transliteration: 'Ğa' },
      { arabic: 'ـفَـ', transliteration: 'fe' },
      { arabic: 'ـرَ', transliteration: 'ra' }
    ],
    audioText: 'غَفَرَ'
  },
  {
    id: 'w18',
    arabic: 'طَلَبَ',
    transliteration: 'Ta-le-be',
    meaning: 'İstedi / Talep etti',
    category: '3harfli',
    categoryLabel: '3 Harfli Fiil',
    level: 1,
    syllables: [
      { arabic: 'طَـ', transliteration: 'Ta' },
      { arabic: 'ـلَـ', transliteration: 'le' },
      { arabic: 'ـبَ', transliteration: 'be' }
    ],
    audioText: 'طَلَبَ'
  },
  {
    id: 'w19',
    arabic: 'خَلَقَ',
    transliteration: 'Ha-la-ka',
    meaning: 'Yarattı',
    category: '3harfli',
    categoryLabel: '3 Harfli Fiil',
    level: 1,
    syllables: [
      { arabic: 'خَـ', transliteration: 'Ha' },
      { arabic: 'ـلَـ', transliteration: 'la' },
      { arabic: 'ـقَ', transliteration: 'ka' }
    ],
    audioText: 'خَلَقَ'
  },
  {
    id: 'w20',
    arabic: 'رَزَقَ',
    transliteration: 'Ra-za-ka',
    meaning: 'Rızık verdi',
    category: '3harfli',
    categoryLabel: '3 Harfli Fiil',
    level: 1,
    syllables: [
      { arabic: 'رَ', transliteration: 'Ra' },
      { arabic: 'زَ', transliteration: 'za' },
      { arabic: 'قَ', transliteration: 'ka' }
    ],
    audioText: 'رَزَقَ'
  },
  {
    id: 'w21',
    arabic: 'رَحِمَ',
    transliteration: 'Ra-hi-me',
    meaning: 'Merhamet etti',
    category: '3harfli',
    categoryLabel: '3 Harfli Fiil',
    level: 1,
    syllables: [
      { arabic: 'رَ', transliteration: 'Ra' },
      { arabic: 'حِـ', transliteration: 'hi' },
      { arabic: 'ـمَ', transliteration: 'me' }
    ],
    audioText: 'رَحِمَ'
  },
  {
    id: 'w22',
    arabic: 'صَدَقَ',
    transliteration: 'Sa-da-ka',
    meaning: 'Doğru söyledi',
    category: '3harfli',
    categoryLabel: '3 Harfli Fiil',
    level: 1,
    syllables: [
      { arabic: 'صَـ', transliteration: 'Sa' },
      { arabic: 'ـدَ', transliteration: 'da' },
      { arabic: 'قَ', transliteration: 'ka' }
    ],
    audioText: 'صَدَقَ'
  },
  {
    id: 'w23',
    arabic: 'حَكَمَ',
    transliteration: 'Ha-ke-me',
    meaning: 'Hükmetti',
    category: '3harfli',
    categoryLabel: '3 Harfli Fiil',
    level: 1,
    syllables: [
      { arabic: 'حَـ', transliteration: 'Ha' },
      { arabic: 'ـكَـ', transliteration: 'ke' },
      { arabic: 'ـمَ', transliteration: 'me' }
    ],
    audioText: 'حَكَمَ'
  },
  {
    id: 'w24',
    arabic: 'مَلَكَ',
    transliteration: 'Me-le-ke',
    meaning: 'Sahip oldu',
    category: '3harfli',
    categoryLabel: '3 Harfli Fiil',
    level: 1,
    syllables: [
      { arabic: 'مَـ', transliteration: 'Me' },
      { arabic: 'ـلَـ', transliteration: 'le' },
      { arabic: 'ـكَ', transliteration: 'ke' }
    ],
    audioText: 'مَلَكَ'
  },
  {
    id: 'w25',
    arabic: 'ظَهَرَ',
    transliteration: 'Za-ha-ra',
    meaning: 'Ortaya çıktı / Belirdi',
    category: '3harfli',
    categoryLabel: '3 Harfli Fiil',
    level: 1,
    syllables: [
      { arabic: 'ظَـ', transliteration: 'Za' },
      { arabic: 'ـهَـ', transliteration: 'ha' },
      { arabic: 'ـرَ', transliteration: 'ra' }
    ],
    audioText: 'ظَهَرَ'
  },
  {
    id: 'w26',
    arabic: 'جَمَعَ',
    transliteration: 'Ce-me-‘a',
    meaning: 'Topladı / Bir araya getirdi',
    category: '3harfli',
    categoryLabel: '3 Harfli Fiil',
    level: 1,
    syllables: [
      { arabic: 'جَـ', transliteration: 'Ce' },
      { arabic: 'ـمَـ', transliteration: 'me' },
      { arabic: 'ـعَ', transliteration: '‘a' }
    ],
    audioText: 'جَمَعَ'
  },
  {
    id: 'w27',
    arabic: 'بَلَغَ',
    transliteration: 'Be-le-ğa',
    meaning: 'Ulaştı / Erişti',
    category: '3harfli',
    categoryLabel: '3 Harfli Fiil',
    level: 1,
    syllables: [
      { arabic: 'بَـ', transliteration: 'Be' },
      { arabic: 'ـلَـ', transliteration: 'le' },
      { arabic: 'ـغَ', transliteration: 'ğa' }
    ],
    audioText: 'بَلَغَ'
  },
  {
    id: 'w28',
    arabic: 'زَرَعَ',
    transliteration: 'Ze-ra-‘a',
    meaning: 'Ekti / Tohum serpti',
    category: '3harfli',
    categoryLabel: '3 Harfli Fiil',
    level: 1,
    syllables: [
      { arabic: 'زَ', transliteration: 'Ze' },
      { arabic: 'رَ', transliteration: 'ra' },
      { arabic: 'عَ', transliteration: '‘a' }
    ],
    audioText: 'زَرَعَ'
  },
  {
    id: 'w29',
    arabic: 'حَفِظَ',
    transliteration: 'Ha-fi-za',
    meaning: 'Ezberledi / Korudu',
    category: '3harfli',
    categoryLabel: '3 Harfli Fiil',
    level: 1,
    syllables: [
      { arabic: 'حَـ', transliteration: 'Ha' },
      { arabic: 'ـفِـ', transliteration: 'fi' },
      { arabic: 'ـظَ', transliteration: 'za' }
    ],
    audioText: 'حَفِظَ'
  },
  {
    id: 'w30',
    arabic: 'رَفَعَ',
    transliteration: 'Re-fe-‘a',
    meaning: 'Yükseltti / Kaldırdı',
    category: '3harfli',
    categoryLabel: '3 Harfli Fiil',
    level: 1,
    syllables: [
      { arabic: 'رَ', transliteration: 'Re' },
      { arabic: 'فَـ', transliteration: 'fe' },
      { arabic: 'ـعَ', transliteration: '‘a' }
    ],
    audioText: 'رَفَعَ'
  },
  {
    id: 'w31',
    arabic: 'مَنَعَ',
    transliteration: 'Me-ne-‘a',
    meaning: 'Yasakladı / Engelledi',
    category: '3harfli',
    categoryLabel: '3 Harfli Fiil',
    level: 1,
    syllables: [
      { arabic: 'مَـ', transliteration: 'Me' },
      { arabic: 'ـنَـ', transliteration: 'ne' },
      { arabic: 'ـعَ', transliteration: '‘a' }
    ],
    audioText: 'مَنَعَ'
  },
  {
    id: 'w32',
    arabic: 'شَرِبَ',
    transliteration: 'Şe-ri-be',
    meaning: 'İçti',
    category: '3harfli',
    categoryLabel: '3 Harfli Fiil',
    level: 1,
    syllables: [
      { arabic: 'شَـ', transliteration: 'Şe' },
      { arabic: 'ـرِ', transliteration: 'ri' },
      { arabic: 'بَ', transliteration: 'be' }
    ],
    audioText: 'شَرِبَ'
  },
  {
    id: 'w33',
    arabic: 'أَكَلَ',
    transliteration: 'E-ke-le',
    meaning: 'Yedi',
    category: '3harfli',
    categoryLabel: '3 Harfli Fiil',
    level: 1,
    syllables: [
      { arabic: 'أَ', transliteration: 'E' },
      { arabic: 'كَـ', transliteration: 'ke' },
      { arabic: 'ـلَ', transliteration: 'le' }
    ],
    audioText: 'أَكَلَ'
  },
  {
    id: 'w34',
    arabic: 'عَبَدَ',
    transliteration: '‘A-be-de',
    meaning: 'Kulluk etti / İbadet etti',
    category: '3harfli',
    categoryLabel: '3 Harfli Fiil',
    level: 1,
    syllables: [
      { arabic: 'عَـ', transliteration: '‘A' },
      { arabic: 'ـبَـ', transliteration: 'be' },
      { arabic: 'ـدَ', transliteration: 'de' }
    ],
    audioText: 'عَبَدَ'
  },
  {
    id: 'w35',
    arabic: 'نَظَرَ',
    transliteration: 'Na-za-ra',
    meaning: 'Baktı',
    category: '3harfli',
    categoryLabel: '3 Harfli Fiil',
    level: 1,
    syllables: [
      { arabic: 'نَـ', transliteration: 'Na' },
      { arabic: 'ـظَـ', transliteration: 'za' },
      { arabic: 'ـرَ', transliteration: 'ra' }
    ],
    audioText: 'نَظَرَ'
  },
  {
    id: 'w36',
    arabic: 'وَلَدَ',
    transliteration: 'Ve-le-de',
    meaning: 'Çocuğu oldu / Doğurdu',
    category: '3harfli',
    categoryLabel: '3 Harfli Fiil',
    level: 1,
    syllables: [
      { arabic: 'وَ', transliteration: 'Ve' },
      { arabic: 'لَـ', transliteration: 'le' },
      { arabic: 'ـدَ', transliteration: 'de' }
    ],
    audioText: 'وَلَدَ'
  },

  // =========================================================================
  // 2. SEVİYE: 4+ HARFLİ ZENGİN KELİMELER VE İSİMLER
  // =========================================================================
  {
    id: 'f1',
    arabic: 'مَسْجِد',
    transliteration: 'Mes-cid',
    meaning: 'Cami / Mescit',
    category: '4harfli',
    categoryLabel: '4+ Harfli Kelime',
    level: 2,
    syllables: [
      { arabic: 'مَسْـ', transliteration: 'Mes' },
      { arabic: 'ـجِـ', transliteration: 'ci' },
      { arabic: 'ـدْ', transliteration: 'd' }
    ],
    audioText: 'مَسْجِد'
  },
  {
    id: 'f2',
    arabic: 'مَدْرَسَة',
    transliteration: 'Med-re-se',
    meaning: 'Okul',
    category: '4harfli',
    categoryLabel: '4+ Harfli Kelime',
    level: 2,
    syllables: [
      { arabic: 'مَدْ', transliteration: 'Med' },
      { arabic: 'رَ', transliteration: 're' },
      { arabic: 'سَـ', transliteration: 'se' },
      { arabic: 'ـة', transliteration: 'te' }
    ],
    audioText: 'مَدْرَسَة'
  },
  {
    id: 'f3',
    arabic: 'كِتَاب',
    transliteration: 'Ki-tâb',
    meaning: 'Kitap',
    category: '4harfli',
    categoryLabel: '4+ Harfli Kelime',
    level: 2,
    syllables: [
      { arabic: 'كِـ', transliteration: 'Ki' },
      { arabic: 'ـتَا', transliteration: 'tâ' },
      { arabic: 'بْ', transliteration: 'b' }
    ],
    audioText: 'كِتَاب'
  },
  {
    id: 'f4',
    arabic: 'قَلَم',
    transliteration: 'Ka-lem',
    meaning: 'Kalem',
    category: '4harfli',
    categoryLabel: '4+ Harfli Kelime',
    level: 2,
    syllables: [
      { arabic: 'قَـ', transliteration: 'Ka' },
      { arabic: 'ـلَـ', transliteration: 'le' },
      { arabic: 'ـمْ', transliteration: 'm' }
    ],
    audioText: 'قَلَم'
  },
  {
    id: 'f5',
    arabic: 'مَكْتَب',
    transliteration: 'Mek-teb',
    meaning: 'Yazı masası / Ofis',
    category: '4harfli',
    categoryLabel: '4+ Harfli Kelime',
    level: 2,
    syllables: [
      { arabic: 'مَكْـ', transliteration: 'Mek' },
      { arabic: 'ـتَـ', transliteration: 'te' },
      { arabic: 'ـبْ', transliteration: 'b' }
    ],
    audioText: 'مَكْتَب'
  },
  {
    id: 'f6',
    arabic: 'دَفْتَر',
    transliteration: 'Def-ter',
    meaning: 'Defter',
    category: '4harfli',
    categoryLabel: '4+ Harfli Kelime',
    level: 2,
    syllables: [
      { arabic: 'دَفْـ', transliteration: 'Def' },
      { arabic: 'ـتَـ', transliteration: 'te' },
      { arabic: 'ـرْ', transliteration: 'r' }
    ],
    audioText: 'دَفْتَر'
  },
  {
    id: 'f7',
    arabic: 'نَافِذَة',
    transliteration: 'Nâ-fi-ze',
    meaning: 'Pencere',
    category: '4harfli',
    categoryLabel: '4+ Harfli Kelime',
    level: 2,
    syllables: [
      { arabic: 'نَا', transliteration: 'Nâ' },
      { arabic: 'فِـ', transliteration: 'fi' },
      { arabic: 'ـذَ', transliteration: 'ze' },
      { arabic: 'ة', transliteration: 'te' }
    ],
    audioText: 'نَافِذَة'
  },
  {
    id: 'f8',
    arabic: 'جَنَّة',
    transliteration: 'Cen-net',
    meaning: 'Bahçe / Cennet',
    category: '4harfli',
    categoryLabel: '4+ Harfli Kelime',
    level: 2,
    syllables: [
      { arabic: 'جَنْـ', transliteration: 'Cen' },
      { arabic: 'ـنَـ', transliteration: 'ne' },
      { arabic: 'ـة', transliteration: 'te' }
    ],
    audioText: 'جَنَّة'
  },
  {
    id: 'f9',
    arabic: 'سَمَاء',
    transliteration: 'Se-mâ’',
    meaning: 'Gökyüzü',
    category: '4harfli',
    categoryLabel: '4+ Harfli Kelime',
    level: 2,
    syllables: [
      { arabic: 'سَـ', transliteration: 'Se' },
      { arabic: 'ـمَا', transliteration: 'mâ' },
      { arabic: 'ءْ', transliteration: '’' }
    ],
    audioText: 'سَمَاء'
  },
  {
    id: 'f10',
    arabic: 'شَجَرَة',
    transliteration: 'Şe-ce-ra',
    meaning: 'Ağaç',
    category: '4harfli',
    categoryLabel: '4+ Harfli Kelime',
    level: 2,
    syllables: [
      { arabic: 'شَـ', transliteration: 'Şe' },
      { arabic: 'ـجَـ', transliteration: 'ce' },
      { arabic: 'ـرَ', transliteration: 'ra' },
      { arabic: 'ة', transliteration: 'te' }
    ],
    audioText: 'شَجَرَة'
  },
  {
    id: 'f11',
    arabic: 'زَهْرَة',
    transliteration: 'Zeh-ra',
    meaning: 'Çiçek',
    category: '4harfli',
    categoryLabel: '4+ Harfli Kelime',
    level: 2,
    syllables: [
      { arabic: 'زَهْـ', transliteration: 'Zeh' },
      { arabic: 'ـرَ', transliteration: 'ra' },
      { arabic: 'ة', transliteration: 'te' }
    ],
    audioText: 'زَهْرَة'
  },
  {
    id: 'f12',
    arabic: 'طَرِيق',
    transliteration: 'Ta-rîk',
    meaning: 'Yol',
    category: '4harfli',
    categoryLabel: '4+ Harfli Kelime',
    level: 2,
    syllables: [
      { arabic: 'طَـ', transliteration: 'Ta' },
      { arabic: 'ـرِيـ', transliteration: 'rî' },
      { arabic: 'ـقْ', transliteration: 'k' }
    ],
    audioText: 'طَرِيق'
  },
  {
    id: 'f13',
    arabic: 'مَدِينَة',
    transliteration: 'Me-dî-ne',
    meaning: 'Şehir',
    category: '4harfli',
    categoryLabel: '4+ Harfli Kelime',
    level: 2,
    syllables: [
      { arabic: 'مَـ', transliteration: 'Me' },
      { arabic: 'ـدِيـ', transliteration: 'dî' },
      { arabic: 'ـنَـ', transliteration: 'ne' },
      { arabic: 'ـة', transliteration: 'te' }
    ],
    audioText: 'مَدِينَة'
  },
  {
    id: 'f14',
    arabic: 'سَفِينَة',
    transliteration: 'Se-fî-ne',
    meaning: 'Gemi',
    category: '4harfli',
    categoryLabel: '4+ Harfli Kelime',
    level: 2,
    syllables: [
      { arabic: 'سَـ', transliteration: 'Se' },
      { arabic: 'ـفِيـ', transliteration: 'fî' },
      { arabic: 'ـنَـ', transliteration: 'ne' },
      { arabic: 'ـة', transliteration: 'te' }
    ],
    audioText: 'سَفِينَة'
  },
  {
    id: 'f15',
    arabic: 'سَيَّارَة',
    transliteration: 'Sey-yâ-ra',
    meaning: 'Otomobil / Araba',
    category: '4harfli',
    categoryLabel: '4+ Harfli Kelime',
    level: 2,
    syllables: [
      { arabic: 'سَيْـ', transliteration: 'Sey' },
      { arabic: 'ـيَا', transliteration: 'yâ' },
      { arabic: 'رَ', transliteration: 'ra' },
      { arabic: 'ة', transliteration: 'te' }
    ],
    audioText: 'سَيَّارَة'
  },
  {
    id: 'f16',
    arabic: 'طَائِرَة',
    transliteration: 'Tâ-’i-ra',
    meaning: 'Uçak',
    category: '4harfli',
    categoryLabel: '4+ Harfli Kelime',
    level: 2,
    syllables: [
      { arabic: 'طَا', transliteration: 'Tâ' },
      { arabic: 'ئِـ', transliteration: '’i' },
      { arabic: 'ـرَ', transliteration: 'ra' },
      { arabic: 'ة', transliteration: 'te' }
    ],
    audioText: 'طَائِرَة'
  },
  {
    id: 'f17',
    arabic: 'هَاتِف',
    transliteration: 'Hâ-tif',
    meaning: 'Telefon',
    category: '4harfli',
    categoryLabel: '4+ Harfli Kelime',
    level: 2,
    syllables: [
      { arabic: 'هَا', transliteration: 'Hâ' },
      { arabic: 'تِـ', transliteration: 'ti' },
      { arabic: 'ـفْ', transliteration: 'f' }
    ],
    audioText: 'هَاتِف'
  },
  {
    id: 'f18',
    arabic: 'حَاسُوب',
    transliteration: 'Hâ-sûb',
    meaning: 'Bilgisayar',
    category: '4harfli',
    categoryLabel: '4+ Harfli Kelime',
    level: 2,
    syllables: [
      { arabic: 'حَا', transliteration: 'Hâ' },
      { arabic: 'سُو', transliteration: 'sû' },
      { arabic: 'بْ', transliteration: 'b' }
    ],
    audioText: 'حَاسُوب'
  },
  {
    id: 'f19',
    arabic: 'سَاعَة',
    transliteration: 'Sâ-‘a',
    meaning: 'Saat / Vakit',
    category: '4harfli',
    categoryLabel: '4+ Harfli Kelime',
    level: 2,
    syllables: [
      { arabic: 'سَا', transliteration: 'Sâ' },
      { arabic: 'عَـ', transliteration: '‘a' },
      { arabic: 'ـة', transliteration: 'te' }
    ],
    audioText: 'سَاعَة'
  },
  {
    id: 'f20',
    arabic: 'وَرَقَة',
    transliteration: 'Va-ra-ka',
    meaning: 'Kâğıt / Yaprak',
    category: '4harfli',
    categoryLabel: '4+ Harfli Kelime',
    level: 2,
    syllables: [
      { arabic: 'وَ', transliteration: 'Va' },
      { arabic: 'رَ', transliteration: 'ra' },
      { arabic: 'قَـ', transliteration: 'ka' },
      { arabic: 'ـة', transliteration: 'te' }
    ],
    audioText: 'وَرَقَة'
  },

  // =========================================================================
  // 3. SEVİYE: CEZMLİ VE ŞEDDELİ KELİMELER
  // =========================================================================
  {
    id: 'cs1',
    arabic: 'رَبّ',
    transliteration: 'Rabb',
    meaning: 'Eğitip gözeten Rab / Sahip',
    category: 'cezm_sedde',
    categoryLabel: 'Cezmli & Şeddeli',
    level: 3,
    syllables: [
      { arabic: 'رَبْـ', transliteration: 'Rab' },
      { arabic: 'ـبُ', transliteration: 'bu' }
    ],
    audioText: 'رَبّ'
  },
  {
    id: 'cs2',
    arabic: 'أُمّ',
    transliteration: 'Ümm',
    meaning: 'Anne',
    category: 'cezm_sedde',
    categoryLabel: 'Cezmli & Şeddeli',
    level: 3,
    syllables: [
      { arabic: 'أُمْـ', transliteration: 'Üm' },
      { arabic: 'ـمُ', transliteration: 'mu' }
    ],
    audioText: 'أُمّ'
  },
  {
    id: 'cs3',
    arabic: 'أَبّ',
    transliteration: 'Ebb',
    meaning: 'Baba / Otlak',
    category: 'cezm_sedde',
    categoryLabel: 'Cezmli & Şeddeli',
    level: 3,
    syllables: [
      { arabic: 'أَبْـ', transliteration: 'Eb' },
      { arabic: 'ـبُ', transliteration: 'bu' }
    ],
    audioText: 'أَبّ'
  },
  {
    id: 'cs4',
    arabic: 'جَدّ',
    transliteration: 'Cedd',
    meaning: 'Dede / Ata',
    category: 'cezm_sedde',
    categoryLabel: 'Cezmli & Şeddeli',
    level: 3,
    syllables: [
      { arabic: 'جَدْ', transliteration: 'Ced' },
      { arabic: 'دُ', transliteration: 'dü' }
    ],
    audioText: 'جَدّ'
  },
  {
    id: 'cs5',
    arabic: 'حَقّ',
    transliteration: 'Hakk',
    meaning: 'Hak / Doğru / Gerçek',
    category: 'cezm_sedde',
    categoryLabel: 'Cezmli & Şeddeli',
    level: 3,
    syllables: [
      { arabic: 'حَقْـ', transliteration: 'Hak' },
      { arabic: 'ـقُ', transliteration: 'ku' }
    ],
    audioText: 'حَقّ'
  },
  {
    id: 'cs6',
    arabic: 'كُلّ',
    transliteration: 'Küll',
    meaning: 'Hepsi / Bütün / Her',
    category: 'cezm_sedde',
    categoryLabel: 'Cezmli & Şeddeli',
    level: 3,
    syllables: [
      { arabic: 'كُلْـ', transliteration: 'Kül' },
      { arabic: 'ـلُ', transliteration: 'lü' }
    ],
    audioText: 'كُلّ'
  },
  {
    id: 'cs7',
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
    id: 'cs8',
    arabic: 'قَمَر',
    transliteration: 'Ka-mer',
    meaning: 'Ay (gök cismi)',
    category: 'cezm_sedde',
    categoryLabel: 'Cezmli & Şeddeli',
    level: 3,
    syllables: [
      { arabic: 'قَـ', transliteration: 'Ka' },
      { arabic: 'ـمَـ', transliteration: 'me' },
      { arabic: 'ـرْ', transliteration: 'r' }
    ],
    audioText: 'قَمَر'
  },
  {
    id: 'cs9',
    arabic: 'بِنْت',
    transliteration: 'Bint',
    meaning: 'Kız evlat / Kız çocuk',
    category: 'cezm_sedde',
    categoryLabel: 'Cezmli & Şeddeli',
    level: 3,
    syllables: [
      { arabic: 'بِنْـ', transliteration: 'Bin' },
      { arabic: 'ـتْ', transliteration: 't' }
    ],
    audioText: 'بِنْت'
  },
  {
    id: 'cs10',
    arabic: 'اِبْن',
    transliteration: 'İbn',
    meaning: 'Erkek evlat / Oğul',
    category: 'cezm_sedde',
    categoryLabel: 'Cezmli & Şeddeli',
    level: 3,
    syllables: [
      { arabic: 'اِبْـ', transliteration: 'İb' },
      { arabic: 'ـنْ', transliteration: 'n' }
    ],
    audioText: 'اِبْن'
  },
  {
    id: 'cs11',
    arabic: 'أُخْت',
    transliteration: 'Uht',
    meaning: 'Kız kardeş',
    category: 'cezm_sedde',
    categoryLabel: 'Cezmli & Şeddeli',
    level: 3,
    syllables: [
      { arabic: 'أُخْـ', transliteration: 'Uh' },
      { arabic: 'ـتْ', transliteration: 't' }
    ],
    audioText: 'أُخْت'
  },
  {
    id: 'cs12',
    arabic: 'أَخ',
    transliteration: 'Eh',
    meaning: 'Erkek kardeş',
    category: 'cezm_sedde',
    categoryLabel: 'Cezmli & Şeddeli',
    level: 3,
    syllables: [
      { arabic: 'أَ', transliteration: 'E' },
      { arabic: 'خْ', transliteration: 'h' }
    ],
    audioText: 'أَخ'
  },
  {
    id: 'cs13',
    arabic: 'نَجْم',
    transliteration: 'Necm',
    meaning: 'Yıldız',
    category: 'cezm_sedde',
    categoryLabel: 'Cezmli & Şeddeli',
    level: 3,
    syllables: [
      { arabic: 'نَجْـ', transliteration: 'Nec' },
      { arabic: 'ـمْ', transliteration: 'm' }
    ],
    audioText: 'نَجْم'
  },
  {
    id: 'cs14',
    arabic: 'عِلْم',
    transliteration: '‘İlm',
    meaning: 'İlim / Bilgi',
    category: 'cezm_sedde',
    categoryLabel: 'Cezmli & Şeddeli',
    level: 3,
    syllables: [
      { arabic: 'عِلْـ', transliteration: '‘İl' },
      { arabic: 'ـمْ', transliteration: 'm' }
    ],
    audioText: 'عِلْم'
  },
  {
    id: 'cs15',
    arabic: 'فَهْم',
    transliteration: 'Fehm',
    meaning: 'Anlayış / Kavrayış',
    category: 'cezm_sedde',
    categoryLabel: 'Cezmli & Şeddeli',
    level: 3,
    syllables: [
      { arabic: 'فَهْـ', transliteration: 'Feh' },
      { arabic: 'ـمْ', transliteration: 'm' }
    ],
    audioText: 'فَهْم'
  },
  {
    id: 'cs16',
    arabic: 'صِدْق',
    transliteration: 'Sıdk',
    meaning: 'Doğruluk / Dürüstlük',
    category: 'cezm_sedde',
    categoryLabel: 'Cezmli & Şeddeli',
    level: 3,
    syllables: [
      { arabic: 'صِدْ', transliteration: 'Sıd' },
      { arabic: 'قْ', transliteration: 'k' }
    ],
    audioText: 'صِدْق'
  },
  {
    id: 'cs17',
    arabic: 'شُكْر',
    transliteration: 'Şükr',
    meaning: 'Şükür / Teşekkür',
    category: 'cezm_sedde',
    categoryLabel: 'Cezmli & Şeddeli',
    level: 3,
    syllables: [
      { arabic: 'شُكْـ', transliteration: 'Şük' },
      { arabic: 'ـرْ', transliteration: 'r' }
    ],
    audioText: 'شُكْر'
  },
  {
    id: 'cs18',
    arabic: 'حَمْد',
    transliteration: 'Hamd',
    meaning: 'Övgü / Hamt',
    category: 'cezm_sedde',
    categoryLabel: 'Cezmli & Şeddeli',
    level: 3,
    syllables: [
      { arabic: 'حَمْـ', transliteration: 'Ham' },
      { arabic: 'ـدْ', transliteration: 'd' }
    ],
    audioText: 'حَمْد'
  },
  {
    id: 'cs19',
    arabic: 'قَلْب',
    transliteration: 'Kalb',
    meaning: 'Yürek / Kalp',
    category: 'cezm_sedde',
    categoryLabel: 'Cezmli & Şeddeli',
    level: 3,
    syllables: [
      { arabic: 'قَلْـ', transliteration: 'Kal' },
      { arabic: 'ـبْ', transliteration: 'b' }
    ],
    audioText: 'قَلْب'
  },
  {
    id: 'cs20',
    arabic: 'وَقْت',
    transliteration: 'Vakt',
    meaning: 'Zaman / Vakit',
    category: 'cezm_sedde',
    categoryLabel: 'Cezmli & Şeddeli',
    level: 3,
    syllables: [
      { arabic: 'وَقْـ', transliteration: 'Vak' },
      { arabic: 'ـتْ', transliteration: 't' }
    ],
    audioText: 'وَقْت'
  },
  {
    id: 'cs21',
    arabic: 'صَبْر',
    transliteration: 'Sabr',
    meaning: 'Sabır / Dayanıklılık',
    category: 'cezm_sedde',
    categoryLabel: 'Cezmli & Şeddeli',
    level: 3,
    syllables: [
      { arabic: 'صَبْـ', transliteration: 'Sab' },
      { arabic: 'ـرْ', transliteration: 'r' }
    ],
    audioText: 'صَبْر'
  },
  {
    id: 'cs22',
    arabic: 'نَفْس',
    transliteration: 'Nefs',
    meaning: 'Can / Benlik',
    category: 'cezm_sedde',
    categoryLabel: 'Cezmli & Şeddeli',
    level: 3,
    syllables: [
      { arabic: 'نَفْـ', transliteration: 'Nef' },
      { arabic: 'ـسْ', transliteration: 's' }
    ],
    audioText: 'نَفْس'
  },
  {
    id: 'cs23',
    arabic: 'عَقْل',
    transliteration: '‘Akl',
    meaning: 'Akıl / Düşünme yetisi',
    category: 'cezm_sedde',
    categoryLabel: 'Cezmli & Şeddeli',
    level: 3,
    syllables: [
      { arabic: 'عَقْـ', transliteration: '‘Ak' },
      { arabic: 'ـلْ', transliteration: 'l' }
    ],
    audioText: 'عَقْل'
  },
  {
    id: 'cs24',
    arabic: 'نُور',
    transliteration: 'Nûr',
    meaning: 'Işık / Aydınlık',
    category: 'cezm_sedde',
    categoryLabel: 'Cezmli & Şeddeli',
    level: 3,
    syllables: [
      { arabic: 'نُو', transliteration: 'Nû' },
      { arabic: 'رْ', transliteration: 'r' }
    ],
    audioText: 'نُور'
  },
  {
    id: 'cs25',
    arabic: 'سِرّ',
    transliteration: 'Sırr',
    meaning: 'Giz / Sır',
    category: 'cezm_sedde',
    categoryLabel: 'Cezmli & Şeddeli',
    level: 3,
    syllables: [
      { arabic: 'سِرْ', transliteration: 'Sır' },
      { arabic: 'رُ', transliteration: 'ru' }
    ],
    audioText: 'سِرّ'
  },
  {
    id: 'cs26',
    arabic: 'حُبّ',
    transliteration: 'Hubb',
    meaning: 'Sevgi / Muhabbet',
    category: 'cezm_sedde',
    categoryLabel: 'Cezmli & Şeddeli',
    level: 3,
    syllables: [
      { arabic: 'حُبْـ', transliteration: 'Hub' },
      { arabic: 'ـبُ', transliteration: 'bu' }
    ],
    audioText: 'حُبّ'
  },

  // =========================================================================
  // 4. SEVİYE: GÜNLÜK HAYAT VE NEZAKET KELİMELERİ
  // =========================================================================
  {
    id: 'g1',
    arabic: 'مَرْحَبًا',
    transliteration: 'Mer-ha-ben',
    meaning: 'Merhaba',
    category: 'gunluk',
    categoryLabel: 'Günlük Hayat',
    level: 4,
    syllables: [
      { arabic: 'مَرْ', transliteration: 'Mer' },
      { arabic: 'حَـ', transliteration: 'ha' },
      { arabic: 'ـبًا', transliteration: 'ben' }
    ],
    audioText: 'مَرْحَبًا'
  },
  {
    id: 'g2',
    arabic: 'شُكْرًا',
    transliteration: 'Şük-ran',
    meaning: 'Teşekkürler',
    category: 'gunluk',
    categoryLabel: 'Günlük Hayat',
    level: 4,
    syllables: [
      { arabic: 'شُكْـ', transliteration: 'Şük' },
      { arabic: 'ـرًا', transliteration: 'ran' }
    ],
    audioText: 'شُكْرًا'
  },
  {
    id: 'g3',
    arabic: 'عَفْوًا',
    transliteration: '‘Af-ven',
    meaning: 'Rica ederim / Affedersiniz',
    category: 'gunluk',
    categoryLabel: 'Günlük Hayat',
    level: 4,
    syllables: [
      { arabic: 'عَفْـ', transliteration: '‘Af' },
      { arabic: 'ـوًا', transliteration: 'ven' }
    ],
    audioText: 'عَفْوًا'
  },
  {
    id: 'g4',
    arabic: 'أَهْلًا',
    transliteration: 'Eh-len',
    meaning: 'Hoş geldiniz',
    category: 'gunluk',
    categoryLabel: 'Günlük Hayat',
    level: 4,
    syllables: [
      { arabic: 'أَهْـ', transliteration: 'Eh' },
      { arabic: 'ـلًا', transliteration: 'len' }
    ],
    audioText: 'أَهْلًا'
  },
  {
    id: 'g5',
    arabic: 'نَعَمْ',
    transliteration: 'Ne-‘am',
    meaning: 'Evet',
    category: 'gunluk',
    categoryLabel: 'Günlük Hayat',
    level: 4,
    syllables: [
      { arabic: 'نَـ', transliteration: 'Ne' },
      { arabic: 'ـعَمْ', transliteration: '‘am' }
    ],
    audioText: 'نَعَمْ'
  },
  {
    id: 'g6',
    arabic: 'لَا',
    transliteration: 'Lâ',
    meaning: 'Hayır',
    category: 'gunluk',
    categoryLabel: 'Günlük Hayat',
    level: 4,
    syllables: [
      { arabic: 'لَا', transliteration: 'Lâ' }
    ],
    audioText: 'لَا'
  },
  {
    id: 'g7',
    arabic: 'مَعَ السَّلَامَة',
    transliteration: 'Ma‘a-s-se-lâ-me',
    meaning: 'Güle güle / Selametle',
    category: 'gunluk',
    categoryLabel: 'Günlük Hayat',
    level: 4,
    syllables: [
      { arabic: 'مَعَ', transliteration: 'Ma‘a' },
      { arabic: 'السَّـ', transliteration: 's-se' },
      { arabic: 'ـلَا', transliteration: 'lâ' },
      { arabic: 'مَة', transliteration: 'me' }
    ],
    audioText: 'مَعَ السَّلَامَة'
  },
  {
    id: 'g8',
    arabic: 'صَبَاحُ الْخَيْرِ',
    transliteration: 'Sa-bâ-hu’l-hayr',
    meaning: 'Günaydın / Hayırlı sabahlar',
    category: 'gunluk',
    categoryLabel: 'Günlük Hayat',
    level: 4,
    syllables: [
      { arabic: 'صَبَا', transliteration: 'Sabâ' },
      { arabic: 'حُ', transliteration: 'hu' },
      { arabic: 'الْخَيْرِ', transliteration: 'l-hayr' }
    ],
    audioText: 'صَبَاحُ الْخَيْرِ'
  },
  {
    id: 'g9',
    arabic: 'مَسَاءُ الْخَيْرِ',
    transliteration: 'Me-sâ’u’l-hayr',
    meaning: 'İyi akşamlar',
    category: 'gunluk',
    categoryLabel: 'Günlük Hayat',
    level: 4,
    syllables: [
      { arabic: 'مَسَا', transliteration: 'Mesâ' },
      { arabic: 'ءُ', transliteration: '’u' },
      { arabic: 'الْخَيْرِ', transliteration: 'l-hayr' }
    ],
    audioText: 'مَسَاءُ الْخَيْرِ'
  },
  {
    id: 'g10',
    arabic: 'كَيْفَ حَالُكَ',
    transliteration: 'Key-fe hâ-lu-ke',
    meaning: 'Nasılsın? (erile)',
    category: 'gunluk',
    categoryLabel: 'Günlük Hayat',
    level: 4,
    syllables: [
      { arabic: 'كَيْفَ', transliteration: 'Keyfe' },
      { arabic: 'حَالُـ', transliteration: 'hâlu' },
      { arabic: 'ـكَ', transliteration: 'ke' }
    ],
    audioText: 'كَيْفَ حَالُكَ'
  },
  {
    id: 'g11',
    arabic: 'بِخَيْر',
    transliteration: 'Bi-hayr',
    meaning: 'İyiyim / Hayır üzereyim',
    category: 'gunluk',
    categoryLabel: 'Günlük Hayat',
    level: 4,
    syllables: [
      { arabic: 'بِـ', transliteration: 'Bi' },
      { arabic: 'ـخَيْر', transliteration: 'hayr' }
    ],
    audioText: 'بِخَيْر'
  },
  {
    id: 'g12',
    arabic: 'الْحَمْدُ لِلَّهِ',
    transliteration: 'El-ham-dü lil-lâh',
    meaning: 'Allah’a şükürler olsun',
    category: 'gunluk',
    categoryLabel: 'Günlük Hayat',
    level: 4,
    syllables: [
      { arabic: 'الْحَمْدُ', transliteration: 'El-hamdü' },
      { arabic: 'لِلَّهِ', transliteration: 'lillâh' }
    ],
    audioText: 'الْحَمْدُ لِلَّهِ'
  },
  {
    id: 'g13',
    arabic: 'طَيِّب',
    transliteration: 'Tay-yib',
    meaning: 'Güzel / Pekala / Temiz',
    category: 'gunluk',
    categoryLabel: 'Günlük Hayat',
    level: 4,
    syllables: [
      { arabic: 'طَيْـ', transliteration: 'Tay' },
      { arabic: 'ـيِـ', transliteration: 'yi' },
      { arabic: 'ـبْ', transliteration: 'b' }
    ],
    audioText: 'طَيِّب'
  },
  {
    id: 'g14',
    arabic: 'صَحِيح',
    transliteration: 'Sa-hîh',
    meaning: 'Doğru / Gerçek',
    category: 'gunluk',
    categoryLabel: 'Günlük Hayat',
    level: 4,
    syllables: [
      { arabic: 'صَـ', transliteration: 'Sa' },
      { arabic: 'ـحِيـ', transliteration: 'hî' },
      { arabic: 'ـحْ', transliteration: 'h' }
    ],
    audioText: 'صَحِيح'
  },
  {
    id: 'g15',
    arabic: 'مُمْتَاز',
    transliteration: 'Müm-tâz',
    meaning: 'Mükemmel / Harika',
    category: 'gunluk',
    categoryLabel: 'Günlük Hayat',
    level: 4,
    syllables: [
      { arabic: 'مُمْـ', transliteration: 'Müm' },
      { arabic: 'ـتَا', transliteration: 'tâ' },
      { arabic: 'زْ', transliteration: 'z' }
    ],
    audioText: 'مُمْتَاز'
  },
  {
    id: 'g16',
    arabic: 'جَمِيل',
    transliteration: 'Ce-mîl',
    meaning: 'Güzel / Hoş',
    category: 'gunluk',
    categoryLabel: 'Günlük Hayat',
    level: 4,
    syllables: [
      { arabic: 'جَـ', transliteration: 'Ce' },
      { arabic: 'ـمِيـ', transliteration: 'mî' },
      { arabic: 'ـلْ', transliteration: 'l' }
    ],
    audioText: 'جَمِيل'
  },
  {
    id: 'g17',
    arabic: 'كَبِير',
    transliteration: 'Ke-bîr',
    meaning: 'Büyük',
    category: 'gunluk',
    categoryLabel: 'Günlük Hayat',
    level: 4,
    syllables: [
      { arabic: 'كَـ', transliteration: 'Ke' },
      { arabic: 'ـبِيـ', transliteration: 'bî' },
      { arabic: 'ـرْ', transliteration: 'r' }
    ],
    audioText: 'كَبِير'
  },
  {
    id: 'g18',
    arabic: 'صَغِير',
    transliteration: 'Sa-ğîr',
    meaning: 'Küçük',
    category: 'gunluk',
    categoryLabel: 'Günlük Hayat',
    level: 4,
    syllables: [
      { arabic: 'صَـ', transliteration: 'Sa' },
      { arabic: 'ـغِيـ', transliteration: 'ğî' },
      { arabic: 'ـرْ', transliteration: 'r' }
    ],
    audioText: 'صَغِير'
  },
  {
    id: 'g19',
    arabic: 'قَرِيب',
    transliteration: 'Ka-rîb',
    meaning: 'Yakın',
    category: 'gunluk',
    categoryLabel: 'Günlük Hayat',
    level: 4,
    syllables: [
      { arabic: 'قَـ', transliteration: 'Ka' },
      { arabic: 'ـرِيـ', transliteration: 'rî' },
      { arabic: 'ـبْ', transliteration: 'b' }
    ],
    audioText: 'قَرِيب'
  },
  {
    id: 'g20',
    arabic: 'بَعِيد',
    transliteration: 'Ba-‘îd',
    meaning: 'Uzak',
    category: 'gunluk',
    categoryLabel: 'Günlük Hayat',
    level: 4,
    syllables: [
      { arabic: 'بَـ', transliteration: 'Ba' },
      { arabic: 'ـعِيـ', transliteration: '‘î' },
      { arabic: 'ـدْ', transliteration: 'd' }
    ],
    audioText: 'بَعِيد'
  },
  {
    id: 'g21',
    arabic: 'جَدِيد',
    transliteration: 'Ce-dîd',
    meaning: 'Yeni',
    category: 'gunluk',
    categoryLabel: 'Günlük Hayat',
    level: 4,
    syllables: [
      { arabic: 'جَـ', transliteration: 'Ce' },
      { arabic: 'ـدِيـ', transliteration: 'dî' },
      { arabic: 'ـدْ', transliteration: 'd' }
    ],
    audioText: 'جَدِيد'
  },
  {
    id: 'g22',
    arabic: 'قَدِيم',
    transliteration: 'Ka-dîm',
    meaning: 'Eski',
    category: 'gunluk',
    categoryLabel: 'Günlük Hayat',
    level: 4,
    syllables: [
      { arabic: 'قَـ', transliteration: 'Ka' },
      { arabic: 'ـدِيـ', transliteration: 'dî' },
      { arabic: 'ـمْ', transliteration: 'm' }
    ],
    audioText: 'قَدِيم'
  },
  {
    id: 'g23',
    arabic: 'مُعَلِّم',
    transliteration: 'Mu-‘al-lim',
    meaning: 'Öğretmen (eril)',
    category: 'gunluk',
    categoryLabel: 'Günlük Hayat',
    level: 4,
    syllables: [
      { arabic: 'مُـ', transliteration: 'Mu' },
      { arabic: 'ـعَلْـ', transliteration: '‘al' },
      { arabic: 'ـلِـ', transliteration: 'li' },
      { arabic: 'ـمْ', transliteration: 'm' }
    ],
    audioText: 'مُعَلِّم'
  },
  {
    id: 'g24',
    arabic: 'طَالِب',
    transliteration: 'Tâ-lib',
    meaning: 'Öğrenci',
    category: 'gunluk',
    categoryLabel: 'Günlük Hayat',
    level: 4,
    syllables: [
      { arabic: 'طَا', transliteration: 'Tâ' },
      { arabic: 'لِـ', transliteration: 'li' },
      { arabic: 'ـبْ', transliteration: 'b' }
    ],
    audioText: 'طَالِب'
  },
  {
    id: 'g25',
    arabic: 'طَبِيب',
    transliteration: 'Ta-bîb',
    meaning: 'Doktor / Hekim',
    category: 'gunluk',
    categoryLabel: 'Günlük Hayat',
    level: 4,
    syllables: [
      { arabic: 'طَـ', transliteration: 'Ta' },
      { arabic: 'ـبِيـ', transliteration: 'bî' },
      { arabic: 'ـبْ', transliteration: 'b' }
    ],
    audioText: 'طَبِيب'
  },
  {
    id: 'g26',
    arabic: 'مُهَنْدِس',
    transliteration: 'Mü-hen-dis',
    meaning: 'Mühendis',
    category: 'gunluk',
    categoryLabel: 'Günlük Hayat',
    level: 4,
    syllables: [
      { arabic: 'مُـ', transliteration: 'Mü' },
      { arabic: 'ـهَنْـ', transliteration: 'hen' },
      { arabic: 'ـدِ', transliteration: 'di' },
      { arabic: 'سْ', transliteration: 's' }
    ],
    audioText: 'مُهَنْدِس'
  },

  // =========================================================================
  // 5. SEVİYE: KUR'AN-I KERİM'DEN KELİMELER VE İFADELER
  // =========================================================================
  {
    id: 'k1',
    arabic: 'الرَّحْمَٰن',
    transliteration: 'Er-Rah-mân',
    meaning: 'Sonsuz merhamet sahibi',
    category: 'kuran',
    categoryLabel: 'Kur’an Kelimesi',
    level: 5,
    syllables: [
      { arabic: 'الرَّحْـ', transliteration: 'Er-Rah' },
      { arabic: 'ـمَا', transliteration: 'mâ' },
      { arabic: 'نْ', transliteration: 'n' }
    ],
    audioText: 'الرَّحْمَٰن'
  },
  {
    id: 'k2',
    arabic: 'الرَّحِيم',
    transliteration: 'Er-Ra-hîm',
    meaning: 'Çok bağışlayıcı / Merhamet eden',
    category: 'kuran',
    categoryLabel: 'Kur’an Kelimesi',
    level: 5,
    syllables: [
      { arabic: 'الرَّ', transliteration: 'Er-ra' },
      { arabic: 'حِيـ', transliteration: 'hî' },
      { arabic: 'ـمْ', transliteration: 'm' }
    ],
    audioText: 'الرَّحِيم'
  },
  {
    id: 'k3',
    arabic: 'الْحَمْدُ',
    transliteration: 'El-Ham-dü',
    meaning: 'Bütün övgüler ve senalar',
    category: 'kuran',
    categoryLabel: 'Kur’an Kelimesi',
    level: 5,
    syllables: [
      { arabic: 'الْـ', transliteration: 'El' },
      { arabic: 'ـحَمْـ', transliteration: 'ham' },
      { arabic: 'ـدُ', transliteration: 'dü' }
    ],
    audioText: 'الْحَمْدُ'
  },
  {
    id: 'k4',
    arabic: 'الْعَالَمِينَ',
    transliteration: 'El-‘Â-le-mîn',
    meaning: 'Bütün âlemler',
    category: 'kuran',
    categoryLabel: 'Kur’an Kelimesi',
    level: 5,
    syllables: [
      { arabic: 'الْعَا', transliteration: 'El-‘â' },
      { arabic: 'لَـ', transliteration: 'le' },
      { arabic: 'ـمِيـ', transliteration: 'mî' },
      { arabic: 'ـنَ', transliteration: 'ne' }
    ],
    audioText: 'الْعَالَمِينَ'
  },
  {
    id: 'k5',
    arabic: 'مَالِكِ',
    transliteration: 'Mâ-li-ki',
    meaning: 'Sahibi / Hükümranı',
    category: 'kuran',
    categoryLabel: 'Kur’an Kelimesi',
    level: 5,
    syllables: [
      { arabic: 'مَا', transliteration: 'Mâ' },
      { arabic: 'لِـ', transliteration: 'li' },
      { arabic: 'ـكِ', transliteration: 'ki' }
    ],
    audioText: 'مَالِكِ'
  },
  {
    id: 'k6',
    arabic: 'يَوْمِ الدِّينِ',
    transliteration: 'Yev-mi’d-Dîn',
    meaning: 'Din gününün (hesap gününün)',
    category: 'kuran',
    categoryLabel: 'Kur’an Kelimesi',
    level: 5,
    syllables: [
      { arabic: 'يَوْمِ', transliteration: 'Yevmi' },
      { arabic: 'الدِّينِ', transliteration: 'd-dîn' }
    ],
    audioText: 'يَوْمِ الدِّينِ'
  },
  {
    id: 'k7',
    arabic: 'إِيَّاكَ',
    transliteration: 'İy-yâ-ke',
    meaning: 'Yalnızca Sana',
    category: 'kuran',
    categoryLabel: 'Kur’an Kelimesi',
    level: 5,
    syllables: [
      { arabic: 'إِيَّا', transliteration: 'İyyâ' },
      { arabic: 'كَ', transliteration: 'ke' }
    ],
    audioText: 'إِيَّاكَ'
  },
  {
    id: 'k8',
    arabic: 'نَعْبُدُ',
    transliteration: 'Na‘-bu-dü',
    meaning: 'Kulluk ederiz',
    category: 'kuran',
    categoryLabel: 'Kur’an Kelimesi',
    level: 5,
    syllables: [
      { arabic: 'نَعْـ', transliteration: 'Na‘' },
      { arabic: 'ـبُـ', transliteration: 'bu' },
      { arabic: 'ـدُ', transliteration: 'dü' }
    ],
    audioText: 'نَعْبُدُ'
  },
  {
    id: 'k9',
    arabic: 'نَسْتَعِينُ',
    transliteration: 'Nes-te-‘în',
    meaning: 'Yardım dileriz',
    category: 'kuran',
    categoryLabel: 'Kur’an Kelimesi',
    level: 5,
    syllables: [
      { arabic: 'نَسْـ', transliteration: 'Nes' },
      { arabic: 'ـتَـ', transliteration: 'te' },
      { arabic: 'ـعِيـ', transliteration: '‘î' },
      { arabic: 'ـنُ', transliteration: 'nu' }
    ],
    audioText: 'نَسْتَعِينُ'
  },
  {
    id: 'k10',
    arabic: 'اهْدِنَا',
    transliteration: 'İh-di-nâ',
    meaning: 'Bizi doğru yola ilet',
    category: 'kuran',
    categoryLabel: 'Kur’an Kelimesi',
    level: 5,
    syllables: [
      { arabic: 'اِهْـ', transliteration: 'İh' },
      { arabic: 'ـدِ', transliteration: 'di' },
      { arabic: 'نَا', transliteration: 'nâ' }
    ],
    audioText: 'اهْدِنَا'
  },
  {
    id: 'k11',
    arabic: 'الصِّرَاطَ',
    transliteration: 'Es-Sı-râ-ta',
    meaning: 'Yol / Cadde',
    category: 'kuran',
    categoryLabel: 'Kur’an Kelimesi',
    level: 5,
    syllables: [
      { arabic: 'الصِّـ', transliteration: 'Es-sı' },
      { arabic: 'ـرَا', transliteration: 'râ' },
      { arabic: 'طَ', transliteration: 'ta' }
    ],
    audioText: 'الصِّرَاطَ'
  },
  {
    id: 'k12',
    arabic: 'الْمُسْتَقِيمَ',
    transliteration: 'El-Müs-te-kîm',
    meaning: 'Dosdoğru olan yol',
    category: 'kuran',
    categoryLabel: 'Kur’an Kelimesi',
    level: 5,
    syllables: [
      { arabic: 'الْمُسْـ', transliteration: 'El-müs' },
      { arabic: 'ـتَـ', transliteration: 'te' },
      { arabic: 'ـقِيـ', transliteration: 'kî' },
      { arabic: 'ـمَ', transliteration: 'me' }
    ],
    audioText: 'الْمُسْتَقِيمَ'
  },
  {
    id: 'k13',
    arabic: 'أَنْعَمْتَ',
    transliteration: 'En-‘am-te',
    meaning: 'Nimet verdin',
    category: 'kuran',
    categoryLabel: 'Kur’an Kelimesi',
    level: 5,
    syllables: [
      { arabic: 'أَنْـ', transliteration: 'En' },
      { arabic: 'ـعَمْـ', transliteration: '‘am' },
      { arabic: 'ـتَ', transliteration: 'te' }
    ],
    audioText: 'أَنْعَمْتَ'
  },
  {
    id: 'k14',
    arabic: 'هُدًى',
    transliteration: 'Hü-den',
    meaning: 'Yol gösterici / Hidayet',
    category: 'kuran',
    categoryLabel: 'Kur’an Kelimesi',
    level: 5,
    syllables: [
      { arabic: 'هُـ', transliteration: 'Hü' },
      { arabic: 'ـدًى', transliteration: 'den' }
    ],
    audioText: 'هُدًى'
  },
  {
    id: 'k15',
    arabic: 'لِلْمُتَّقِينَ',
    transliteration: 'Lil-müt-te-kîn',
    meaning: 'Takva sahipleri için',
    category: 'kuran',
    categoryLabel: 'Kur’an Kelimesi',
    level: 5,
    syllables: [
      { arabic: 'لِلْـ', transliteration: 'Lil' },
      { arabic: 'ـمُتْـ', transliteration: 'müt' },
      { arabic: 'ـتَـ', transliteration: 'te' },
      { arabic: 'ـقِيـ', transliteration: 'kî' },
      { arabic: 'ـنَ', transliteration: 'ne' }
    ],
    audioText: 'لِلْمُتَّقِينَ'
  },
  {
    id: 'k16',
    arabic: 'يُؤْمِنُونَ',
    transliteration: 'Yü’-mi-nû-ne',
    meaning: 'İman ederler',
    category: 'kuran',
    categoryLabel: 'Kur’an Kelimesi',
    level: 5,
    syllables: [
      { arabic: 'يُؤْ', transliteration: 'Yü’' },
      { arabic: 'مِـ', transliteration: 'mi' },
      { arabic: 'ـنُو', transliteration: 'nû' },
      { arabic: 'نَ', transliteration: 'ne' }
    ],
    audioText: 'يُؤْمِنُونَ'
  },
  {
    id: 'k17',
    arabic: 'الْغَيْبِ',
    transliteration: 'El-Ğayb',
    meaning: 'Görünmeyen âlem / Gayb',
    category: 'kuran',
    categoryLabel: 'Kur’an Kelimesi',
    level: 5,
    syllables: [
      { arabic: 'الْـ', transliteration: 'El' },
      { arabic: 'ـغَيْـ', transliteration: 'ğay' },
      { arabic: 'ـبِ', transliteration: 'bi' }
    ],
    audioText: 'الْغَيْبِ'
  },
  {
    id: 'k18',
    arabic: 'يُقِيمُونَ',
    transliteration: 'Yu-kî-mû-ne',
    meaning: 'Dosdoğru kılarlar / Yerine getirirler',
    category: 'kuran',
    categoryLabel: 'Kur’an Kelimesi',
    level: 5,
    syllables: [
      { arabic: 'يُـ', transliteration: 'Yu' },
      { arabic: 'ـقِيـ', transliteration: 'kî' },
      { arabic: 'ـمُو', transliteration: 'mû' },
      { arabic: 'نَ', transliteration: 'ne' }
    ],
    audioText: 'يُقِيمُونَ'
  },
  {
    id: 'k19',
    arabic: 'الصَّلَاةَ',
    transliteration: 'Es-Sa-lâ-te',
    meaning: 'Namaz',
    category: 'kuran',
    categoryLabel: 'Kur’an Kelimesi',
    level: 5,
    syllables: [
      { arabic: 'الصَّـ', transliteration: 'Es-sa' },
      { arabic: 'ـلَا', transliteration: 'lâ' },
      { arabic: 'ةَ', transliteration: 'te' }
    ],
    audioText: 'الصَّلَاةَ'
  },
  {
    id: 'k20',
    arabic: 'يُنْفِقُونَ',
    transliteration: 'Yün-fi-kû-ne',
    meaning: 'İnfak ederler / Harcarlar',
    category: 'kuran',
    categoryLabel: 'Kur’an Kelimesi',
    level: 5,
    syllables: [
      { arabic: 'يُنْـ', transliteration: 'Yün' },
      { arabic: 'ـفِـ', transliteration: 'fi' },
      { arabic: 'ـقُو', transliteration: 'kû' },
      { arabic: 'نَ', transliteration: 'ne' }
    ],
    audioText: 'يُنْفِقُونَ'
  },
  {
    id: 'k21',
    arabic: 'رَزَقْنَاهُمْ',
    transliteration: 'Ra-zak-nâ-hüm',
    meaning: 'Onlara rızık verdiğimizden',
    category: 'kuran',
    categoryLabel: 'Kur’an Kelimesi',
    level: 5,
    syllables: [
      { arabic: 'رَ', transliteration: 'Ra' },
      { arabic: 'زَقْـ', transliteration: 'zak' },
      { arabic: 'ـنَا', transliteration: 'nâ' },
      { arabic: 'هُمْ', transliteration: 'hüm' }
    ],
    audioText: 'رَزَقْنَاهُمْ'
  },
  {
    id: 'k22',
    arabic: 'أُنْزِلَ',
    transliteration: 'Ün-zi-le',
    meaning: 'İndirildi',
    category: 'kuran',
    categoryLabel: 'Kur’an Kelimesi',
    level: 5,
    syllables: [
      { arabic: 'أُنْـ', transliteration: 'Ün' },
      { arabic: 'ـزِ', transliteration: 'zi' },
      { arabic: 'لَ', transliteration: 'le' }
    ],
    audioText: 'أُنْزِلَ'
  },
  {
    id: 'k23',
    arabic: 'قَبْلِكَ',
    transliteration: 'Kab-li-ke',
    meaning: 'Senden önce',
    category: 'kuran',
    categoryLabel: 'Kur’an Kelimesi',
    level: 5,
    syllables: [
      { arabic: 'قَبْـ', transliteration: 'Kab' },
      { arabic: 'ـلِـ', transliteration: 'li' },
      { arabic: 'ـكَ', transliteration: 'ke' }
    ],
    audioText: 'قَبْلِكَ'
  },
  {
    id: 'k24',
    arabic: 'يُوقِنُونَ',
    transliteration: 'Yû-ki-nû-ne',
    meaning: 'Kesin olarak inanırlar',
    category: 'kuran',
    categoryLabel: 'Kur’an Kelimesi',
    level: 5,
    syllables: [
      { arabic: 'يُو', transliteration: 'Yû' },
      { arabic: 'قِـ', transliteration: 'ki' },
      { arabic: 'ـنُو', transliteration: 'nû' },
      { arabic: 'نَ', transliteration: 'ne' }
    ],
    audioText: 'يُوقِنُونَ'
  },
  {
    id: 'k25',
    arabic: 'الْمُفْلِحُونَ',
    transliteration: 'El-Müf-li-hû-ne',
    meaning: 'Kurtuluşa ve başarıya erenler',
    category: 'kuran',
    categoryLabel: 'Kur’an Kelimesi',
    level: 5,
    syllables: [
      { arabic: 'الْمُفْـ', transliteration: 'El-müf' },
      { arabic: 'ـلِـ', transliteration: 'li' },
      { arabic: 'ـحُو', transliteration: 'hû' },
      { arabic: 'نَ', transliteration: 'ne' }
    ],
    audioText: 'الْمُفْلِحُونَ'
  },
  {
    id: 'k26',
    arabic: 'سُبْحَانَ اللَّهِ',
    transliteration: 'Süb-hâ-nal-lâh',
    meaning: 'Allah her türlü eksiklikten münezzehtir',
    category: 'kuran',
    categoryLabel: 'Kur’an Kelimesi',
    level: 5,
    syllables: [
      { arabic: 'سُبْحَانَ', transliteration: 'Sübhâne' },
      { arabic: 'اللَّهِ', transliteration: 'llâh' }
    ],
    audioText: 'سُبْحَانَ اللَّهِ'
  },
  {
    id: 'k27',
    arabic: 'لَا إِلَٰهَ إِلَّا اللَّهُ',
    transliteration: 'Lâ i-lâ-he il-lal-lâh',
    meaning: 'Allah’tan başka ilah yoktur',
    category: 'kuran',
    categoryLabel: 'Kur’an Kelimesi',
    level: 5,
    syllables: [
      { arabic: 'لَا إِلَٰهَ', transliteration: 'Lâ ilâhe' },
      { arabic: 'إِلَّا اللَّهُ', transliteration: 'illallâh' }
    ],
    audioText: 'لَا إِلَٰهَ إِلَّا اللَّهُ'
  },
  {
    id: 'k28',
    arabic: 'أَسْتَغْفِرُ اللَّهَ',
    transliteration: 'Es-tağ-fi-rul-lâh',
    meaning: 'Allah’tan bağışlanma dilerim',
    category: 'kuran',
    categoryLabel: 'Kur’an Kelimesi',
    level: 5,
    syllables: [
      { arabic: 'أَسْتَغْفِرُ', transliteration: 'Estağfiru' },
      { arabic: 'اللَّهَ', transliteration: 'llâh' }
    ],
    audioText: 'أَسْتَغْفِرُ اللَّهَ'
  },
  {
    id: 'k29',
    arabic: 'بِسْمِ اللَّهِ',
    transliteration: 'Bis-mil-lâh',
    meaning: 'Rahman ve Rahim olan Allah’ın adıyla',
    category: 'kuran',
    categoryLabel: 'Kur’an Kelimesi',
    level: 5,
    syllables: [
      { arabic: 'بِسْمِ', transliteration: 'Bismi' },
      { arabic: 'اللَّهِ', transliteration: 'llâh' }
    ],
    audioText: 'بِسْمِ اللَّهِ'
  }
];
