import type { ArabicLetter } from '../types';

export const ALPHABET_DATA: ArabicLetter[] = [
  {
    id: 'alif',
    index: 1,
    name: 'Elif',
    arabicName: 'أَلِف',
    transliteration: 'Alif',
    isolated: 'ا',
    initial: 'ا',
    medial: 'ـا',
    final: 'ـا',
    type: 'ince',
    connectsNext: false,
    makhraj: 'Boğazın göğse bitiştiği en alt kısmından çıkar. Düz ve dik bir çizgidir.',
    tips: 'Kendinden sonraki harfe BİTİŞMEZ. Harekeli olduğunda "E" veya "A" sesi verir.',
    examples: [
      { word: 'أَسَد', transliteration: 'Esed', meaning: 'Aslan', position: 'initial' },
      { word: 'بَاب', transliteration: 'Bâb', meaning: 'Kapı', position: 'medial' },
      { word: 'عَصَا', transliteration: 'Asâ', meaning: 'Asa / Baston', position: 'final' }
    ]
  },
  {
    id: 'ba',
    index: 2,
    name: 'Be',
    arabicName: 'بَاء',
    transliteration: 'Bâ',
    isolated: 'ب',
    initial: 'بـ',
    medial: 'ـبـ',
    final: 'ـب',
    type: 'ince',
    connectsNext: true,
    makhraj: 'Dudakların ıslak iç kısımlarının birbirine kuvvetlice kapanıp açılmasıyla çıkar.',
    tips: 'Geniş bir çanak gibidir, ALTINDA TEK BİR NOKTA bulunur. Kendinden sonrasına bitişir.',
    examples: [
      { word: 'بَيْت', transliteration: 'Beyt', meaning: 'Ev', position: 'initial' },
      { word: 'خُبْز', transliteration: 'Hubz', meaning: 'Ekmek', position: 'medial' },
      { word: 'كِتَاب', transliteration: 'Kitâb', meaning: 'Kitap', position: 'final' }
    ]
  },
  {
    id: 'ta',
    index: 3,
    name: 'Te',
    arabicName: 'تَاء',
    transliteration: 'Tâ',
    isolated: 'ت',
    initial: 'تـ',
    medial: 'ـتـ',
    final: 'ـت',
    type: 'ince',
    connectsNext: true,
    makhraj: 'Dil ucunun üst ön dişlerin diplerine değdirilmesiyle çıkar. Yumuşak ve incedir.',
    tips: 'Be harfiyle aynı çanağa sahiptir ancak ÜSTÜNDE İKİ NOKTA vardır (Gülen yüz gibi).',
    examples: [
      { word: 'تُفَّاح', transliteration: 'Tuffâh', meaning: 'Elma', position: 'initial' },
      { word: 'كَتَبَ', transliteration: 'Ketebe', meaning: 'Yazdı', position: 'medial' },
      { word: 'بِنْت', transliteration: 'Bint', meaning: 'Kız çocuğu', position: 'final' }
    ]
  },
  {
    id: 'tha',
    index: 4,
    name: 'Se',
    arabicName: 'ثَاء',
    transliteration: 'Sâ',
    isolated: 'ث',
    initial: 'ثـ',
    medial: 'ـثـ',
    final: 'ـث',
    type: 'ince',
    isPeltek: true,
    connectsNext: true,
    makhraj: 'Dil ucu ön dişlerin arasından hafifçe dışarı çıkarılarak PELTEK okunur.',
    tips: 'Peltek ince harftir. ÜSTÜNDE ÜÇ NOKTA vardır. İngilizce "think" kelimesindeki "th" gibidir.',
    examples: [
      { word: 'ثَوْب', transliteration: 'Sevbe', meaning: 'Elbise', position: 'initial' },
      { word: 'مِثَال', transliteration: 'Misâl', meaning: 'Örnek', position: 'medial' },
      { word: 'بَحَثَ', transliteration: 'Bahase', meaning: 'Araştırdı', position: 'final' }
    ]
  },
  {
    id: 'jim',
    index: 5,
    name: 'Cim',
    arabicName: 'جِيم',
    transliteration: 'Cîm',
    isolated: 'ج',
    initial: 'جـ',
    medial: 'ـجـ',
    final: 'ـج',
    type: 'ince',
    connectsNext: true,
    makhraj: 'Dil ortasının üst damağa kuvvetlice yapışmasıyla çıkar.',
    tips: 'Karnında tek bir nokta vardır. Başta ve ortada yazılırken kuyruğu gider, sadece başı kalır.',
    examples: [
      { word: 'جَمَل', transliteration: 'Cemel', meaning: 'Deve', position: 'initial' },
      { word: 'شَجَرَة', transliteration: 'Şecarah', meaning: 'Ağaç', position: 'medial' },
      { word: 'حَجّ', transliteration: 'Hacc', meaning: 'Hac ibadeti', position: 'final' }
    ]
  },
  {
    id: 'ha',
    index: 6,
    name: 'Ha',
    arabicName: 'حَاء',
    transliteration: 'Hâ',
    isolated: 'ح',
    initial: 'حـ',
    medial: 'ـحـ',
    final: 'ـح',
    type: 'kalın',
    connectsNext: true,
    makhraj: 'Boğazın tam ortasından boğaz hafifçe sıkılarak tatlı ve ferah bir nefesle çıkar.',
    tips: 'Cim harfiyle aynı gövdeye sahiptir fakat HİÇBİR NOKTASI YOKTUR.',
    examples: [
      { word: 'حَلِيب', transliteration: 'Halîb', meaning: 'Süt', position: 'initial' },
      { word: 'بَحْر', transliteration: 'Bahr', meaning: 'Deniz', position: 'medial' },
      { word: 'مِلْح', transliteration: 'Milh', meaning: 'Tuz', position: 'final' }
    ]
  },
  {
    id: 'kha',
    index: 7,
    name: 'Hı',
    arabicName: 'خَاء',
    transliteration: 'Hâ',
    isolated: 'خ',
    initial: 'خـ',
    medial: 'ـخـ',
    final: 'ـخ',
    type: 'kalın',
    connectsNext: true,
    makhraj: 'Boğazın ağza en yakın üst kısmından hırıltılı bir şekilde çıkar.',
    tips: 'Kalın ve hırıltılı harftir. TEPESİNDE TEK NOKTA bulunur.',
    examples: [
      { word: 'خَاتَم', transliteration: 'Hâtem', meaning: 'Yüzük', position: 'initial' },
      { word: 'نَخْلَة', transliteration: 'Nahleh', meaning: 'Hurma ağacı', position: 'medial' },
      { word: 'مَطْبَخ', transliteration: 'Matbah', meaning: 'Mutfak', position: 'final' }
    ]
  },
  {
    id: 'dal',
    index: 8,
    name: 'Dal',
    arabicName: 'دَال',
    transliteration: 'Dâl',
    isolated: 'د',
    initial: 'د',
    medial: 'ـد',
    final: 'ـد',
    type: 'ince',
    connectsNext: false,
    makhraj: 'Dil ucunun üst ön diş diplerine değdirilmesiyle net ve ince çıkar.',
    tips: 'Kendinden sonrakine BİTİŞMEZ. Noktasızdır.',
    examples: [
      { word: 'دَرْس', transliteration: 'Ders', meaning: 'Ders', position: 'initial' },
      { word: 'مَدْرَسَة', transliteration: 'Medreseh', meaning: 'Okul', position: 'medial' },
      { word: 'وَلَد', transliteration: 'Veled', meaning: 'Erkek çocuk', position: 'final' }
    ]
  },
  {
    id: 'dhal',
    index: 9,
    name: 'Zel',
    arabicName: 'ذَال',
    transliteration: 'Zâl',
    isolated: 'ذ',
    initial: 'ذ',
    medial: 'ـذ',
    final: 'ـذ',
    type: 'ince',
    isPeltek: true,
    connectsNext: false,
    makhraj: 'Dil ucunun üst ön dişlerin arasından hafifçe çıkarılmasıyla peltek söylenir.',
    tips: 'Dal harfinin ÜSTÜNDE TEK NOKTA olanıdır. Kendinden sonrakine BİTİŞMEZ.',
    examples: [
      { word: 'ذَهَب', transliteration: 'Zeheb', meaning: 'Altın', position: 'initial' },
      { word: 'أُذُن', transliteration: 'Üzün', meaning: 'Kulak', position: 'medial' },
      { word: 'لَذِيذ', transliteration: 'Lezîz', meaning: 'Lezzetli', position: 'final' }
    ]
  },
  {
    id: 'ra',
    index: 10,
    name: 'Ra',
    arabicName: 'رَاء',
    transliteration: 'Râ',
    isolated: 'ر',
    initial: 'ر',
    medial: 'ـر',
    final: 'ـر',
    type: 'kalın',
    connectsNext: false,
    makhraj: 'Dil ucunun arkasının üst ön damakla temasından çıkar.',
    tips: 'Harekeli durumuna göre kalın veya ince okunur (Üstün/Ötrede kalın, Esrede ince). Kendinden sonrakine BİTİŞMEZ.',
    examples: [
      { word: 'رَجُل', transliteration: 'Racül', meaning: 'Adam', position: 'initial' },
      { word: 'قَمَر', transliteration: 'Kamer', meaning: 'Ay', position: 'final' },
      { word: 'غُرْفَة', transliteration: 'Gurfeh', meaning: 'Oda', position: 'medial' }
    ]
  },
  {
    id: 'zay',
    index: 11,
    name: 'Ze',
    arabicName: 'زَاي',
    transliteration: 'Zây',
    isolated: 'ز',
    initial: 'ز',
    medial: 'ـز',
    final: 'ـز',
    type: 'ince',
    connectsNext: false,
    makhraj: 'Dil ucunun alt ve üst ön dişlerin arasından keskin bir arı vızıltısı gibi çıkmasıdır.',
    tips: 'Ra harfinin ÜSTÜNDE TEK NOKTA olan halidir. Peltek DEĞİLDİR, keskindir. Bitişmez.',
    examples: [
      { word: 'زَهْرَة', transliteration: 'Zehrah', meaning: 'Çiçek', position: 'initial' },
      { word: 'مَوْز', transliteration: 'Mevz', meaning: 'Muz', position: 'final' },
      { word: 'مِيزَان', transliteration: 'Mîzân', meaning: 'Terazi', position: 'medial' }
    ]
  },
  {
    id: 'sin',
    index: 12,
    name: 'Sin',
    arabicName: 'سِين',
    transliteration: 'Sîn',
    isolated: 'س',
    initial: 'سـ',
    medial: 'ـسـ',
    final: 'ـس',
    type: 'ince',
    connectsNext: true,
    makhraj: 'Dil ucunun alt ön dişlerin iç kısmına dayanmasıyla ince ve ıslıklı çıkar.',
    tips: 'Üç küçük dişi vardır, noktasızdır. Kendinden sonrasına bitişir.',
    examples: [
      { word: 'سَمَك', transliteration: 'Semek', meaning: 'Balık', position: 'initial' },
      { word: 'مَسْجِد', transliteration: 'Mescid', meaning: 'Mescit / Cami', position: 'medial' },
      { word: 'شَمْس', transliteration: 'Şems', meaning: 'Güneş', position: 'final' }
    ]
  },
  {
    id: 'shin',
    index: 13,
    name: 'Şın',
    arabicName: 'شِين',
    transliteration: 'Şîn',
    isolated: 'ش',
    initial: 'شـ',
    medial: 'ـشـ',
    final: 'ـش',
    type: 'ince',
    connectsNext: true,
    makhraj: 'Dil ortasının üst damağa yaklaşarak nefesin ağız içine yayılmasıyla çıkar (Tefeşşi).',
    tips: 'Sin harfinin üç dişi üzerine ÜÇ NOKTA konulmuş halidir.',
    examples: [
      { word: 'شَمْس', transliteration: 'Şems', meaning: 'Güneş', position: 'initial' },
      { word: 'عُشْب', transliteration: 'Uşb', meaning: 'Ot', position: 'medial' },
      { word: 'عَيْش', transliteration: 'Ayş', meaning: 'Yaşam', position: 'final' }
    ]
  },
  {
    id: 'sad',
    index: 14,
    name: 'Sad',
    arabicName: 'صَاد',
    transliteration: 'Sâd',
    isolated: 'ص',
    initial: 'صـ',
    medial: 'ـصـ',
    final: 'ـص',
    type: 'kalın',
    connectsNext: true,
    makhraj: 'Dil kökü damağa yükselip dil ortası çukurlaşarak dolgun ve kalın bir "S" çıkar.',
    tips: 'Dolgun bir halkası ve ardından küçük bir dişi vardır. Noktasızdır.',
    examples: [
      { word: 'صَبَاح', transliteration: 'Sabâh', meaning: 'Sabah', position: 'initial' },
      { word: 'بَصَل', transliteration: 'Basal', meaning: 'Soğan', position: 'medial' },
      { word: 'قَفَص', transliteration: 'Kafas', meaning: 'Kafes', position: 'final' }
    ]
  },
  {
    id: 'dad',
    index: 15,
    name: 'Dad',
    arabicName: 'ضَاد',
    transliteration: 'Dâd',
    isolated: 'ض',
    initial: 'ضـ',
    medial: 'ـضـ',
    final: 'ـض',
    type: 'kalın',
    connectsNext: true,
    makhraj: 'Dil yanının üst azı dişlerine yaslanmasıyla çıkar. Arapçaya özgü eşsiz bir sestir.',
    tips: 'Sad harfinin ÜSTÜNDE TEK NOKTA olanıdır. Dolgun, tok bir sestir.',
    examples: [
      { word: 'ضَوْء', transliteration: 'Dav’', meaning: 'Işık', position: 'initial' },
      { word: 'أَبْيَض', transliteration: 'Ebyad', meaning: 'Beyaz', position: 'final' },
      { word: 'رَمَضَان', transliteration: 'Ramazân', meaning: 'Ramazan', position: 'medial' }
    ]
  },
  {
    id: 'ta_emphatic',
    index: 16,
    name: 'Tı',
    arabicName: 'طَاء',
    transliteration: 'Tâ',
    isolated: 'ط',
    initial: 'طـ',
    medial: 'ـطـ',
    final: 'ـط',
    type: 'kalın',
    connectsNext: true,
    makhraj: 'Dil ucunun üst ön diş diplerine baskı yapıp dilin damağa yapışmasıyla kalın çıkar.',
    tips: 'Kalın "T" sesidir. Üzerinde dik bir elif çubuğu vardır. Noktasızdır.',
    examples: [
      { word: 'طَالِب', transliteration: 'Tâlib', meaning: 'Öğrenci', position: 'initial' },
      { word: 'مَطَر', transliteration: 'Matar', meaning: 'Yağmur', position: 'medial' },
      { word: 'خَيْط', transliteration: 'Hayt', meaning: 'İp', position: 'final' }
    ]
  },
  {
    id: 'za_emphatic',
    index: 17,
    name: 'Zı',
    arabicName: 'ظَاء',
    transliteration: 'Zâ',
    isolated: 'ظ',
    initial: 'ظـ',
    medial: 'ـظـ',
    final: 'ـظ',
    type: 'kalın',
    isPeltek: true,
    connectsNext: true,
    makhraj: 'Dil ucu ön dişlerden hafifçe çıkarılarak kalın ve peltek okunur.',
    tips: 'Tı harfinin ÜSTÜNDE TEK NOKTA olanıdır. Hem peltek hem kalın bir sestir.',
    examples: [
      { word: 'ظِلّ', transliteration: 'Zıll', meaning: 'Gölge', position: 'initial' },
      { word: 'نَظِيف', transliteration: 'Nazîf', meaning: 'Temiz', position: 'medial' },
      { word: 'حِفْظ', transliteration: 'Hıfz', meaning: 'Koruma / Ezber', position: 'final' }
    ]
  },
  {
    id: 'ayn',
    index: 18,
    name: 'Ayn',
    arabicName: 'عَيْن',
    transliteration: '‘Ayn',
    isolated: 'ع',
    initial: 'عـ',
    medial: 'ـعـ',
    final: 'ـع',
    type: 'kalın',
    connectsNext: true,
    makhraj: 'Boğazın tam ortasından boğaz kasılarak derin bir "ayn" sesiyle çıkar.',
    tips: 'Ortada ve sonda yazılırken üçgen gibi içi kapalı bir baş şeklini alır. Noktasızdır.',
    examples: [
      { word: 'عَيْن', transliteration: 'Ayn', meaning: 'Göz / Pınar', position: 'initial' },
      { word: 'مُعَلِّم', transliteration: 'Muallim', meaning: 'Öğretmen', position: 'medial' },
      { word: 'شَارِع', transliteration: 'Şâri‘', meaning: 'Cadde', position: 'final' }
    ]
  },
  {
    id: 'ghayn',
    index: 19,
    name: 'Gayn',
    arabicName: 'غَيْن',
    transliteration: 'Gayn',
    isolated: 'غ',
    initial: 'غـ',
    medial: 'ـغـ',
    final: 'ـغ',
    type: 'kalın',
    connectsNext: true,
    makhraj: 'Boğazın ağza en yakın üst kısmından suyla gargara yapar gibi çıkar.',
    tips: 'Ayn harfinin ÜSTÜNDE TEK NOKTA olanıdır. Kalın bir harftir.',
    examples: [
      { word: 'غَابَة', transliteration: 'Gâbeh', meaning: 'Orman', position: 'initial' },
      { word: 'صَغِير', transliteration: 'Sagîr', meaning: 'Küçük', position: 'medial' },
      { word: 'فَرَاغ', transliteration: 'Ferâg', meaning: 'Boşluk', position: 'final' }
    ]
  },
  {
    id: 'fa',
    index: 20,
    name: 'Fe',
    arabicName: 'فَاء',
    transliteration: 'Fâ',
    isolated: 'ف',
    initial: 'فـ',
    medial: 'ـفـ',
    final: 'ـف',
    type: 'ince',
    connectsNext: true,
    makhraj: 'Üst ön dişlerin uçlarının alt dudağın içine hafifçe dokunmasıyla çıkar.',
    tips: 'Yuvarlak bir başı, altında yayvan bir çanağı ve ÜSTÜNDE TEK NOKTASI vardır.',
    examples: [
      { word: 'فِيل', transliteration: 'Fîl', meaning: 'Fil', position: 'initial' },
      { word: 'سَفِينَة', transliteration: 'Sefîneh', meaning: 'Gemi', position: 'medial' },
      { word: 'صَيْف', transliteration: 'Sayf', meaning: 'Yaz mevsimi', position: 'final' }
    ]
  },
  {
    id: 'qaf',
    index: 21,
    name: 'Kaf',
    arabicName: 'قَاف',
    transliteration: 'Kâf',
    isolated: 'ق',
    initial: 'قـ',
    medial: 'ـقـ',
    final: 'ـق',
    type: 'kalın',
    connectsNext: true,
    makhraj: 'Dil kökünün küçük dil hizasındaki yumuşak damağa vurmasıyla tok ve kalın çıkar.',
    tips: 'Çanağı Fe harfinden daha derindir ve ÜSTÜNDE İKİ NOKTA bulunur.',
    examples: [
      { word: 'قَلَم', transliteration: 'Kalem', meaning: 'Kalem', position: 'initial' },
      { word: 'حَقِيبَة', transliteration: 'Hakîbeh', meaning: 'Çanta', position: 'medial' },
      { word: 'طَرِيق', transliteration: 'Tarîk', meaning: 'Yol', position: 'final' }
    ]
  },
  {
    id: 'kaf',
    index: 22,
    name: 'Kef',
    arabicName: 'كَاف',
    transliteration: 'Kef',
    isolated: 'ك',
    initial: 'كـ',
    medial: 'ـكـ',
    final: 'ـك',
    type: 'ince',
    connectsNext: true,
    makhraj: 'Kaf harfinin çıktığı yerin biraz daha ağız tarafındaki sert damaktan ince çıkar.',
    tips: 'Yalın halinde içinde küçük bir hemze işareti taşır. Başta ve ortada şekli değişir.',
    examples: [
      { word: 'كَلْب', transliteration: 'Kelb', meaning: 'Köpek', position: 'initial' },
      { word: 'سُكَّر', transliteration: 'Sükker', meaning: 'Şeker', position: 'medial' },
      { word: 'مَلِك', transliteration: 'Melik', meaning: 'Kral / Hükümdar', position: 'final' }
    ]
  },
  {
    id: 'lam',
    index: 23,
    name: 'Lam',
    arabicName: 'لاَم',
    transliteration: 'Lâm',
    isolated: 'ل',
    initial: 'لـ',
    medial: 'ـلـ',
    final: 'ـل',
    type: 'ince',
    connectsNext: true,
    makhraj: 'Dil ucunun üst ön diş etlerine değmesiyle zarif ve ince bir ses verir.',
    tips: 'Elif harfinden farkı: Kendinden sonraki harfe BİTİŞİR ve çanağı çizgi altına iner.',
    examples: [
      { word: 'لَيْل', transliteration: 'Leyl', meaning: 'Gece', position: 'initial' },
      { word: 'قَلْب', transliteration: 'Kalb', meaning: 'Kalp', position: 'medial' },
      { word: 'عَسَل', transliteration: 'Asel', meaning: 'Bal', position: 'final' }
    ]
  },
  {
    id: 'mim',
    index: 24,
    name: 'Mim',
    arabicName: 'مِيم',
    transliteration: 'Mîm',
    isolated: 'م',
    initial: 'مـ',
    medial: 'ـمـ',
    final: 'ـم',
    type: 'ince',
    connectsNext: true,
    makhraj: 'Dudakların birbirine normal şekilde kapanmasıyla ve genizden hafif tınıyla çıkar.',
    tips: 'Yuvarlak küçük bir başı ve aşağı doğru inen bir kuyruğu vardır.',
    examples: [
      { word: 'مَاء', transliteration: 'Mâ’', meaning: 'Su', position: 'initial' },
      { word: 'شَمْس', transliteration: 'Şems', meaning: 'Güneş', position: 'medial' },
      { word: 'قَلَم', transliteration: 'Kalem', meaning: 'Kalem', position: 'final' }
    ]
  },
  {
    id: 'nun',
    index: 25,
    name: 'Nun',
    arabicName: 'نُون',
    transliteration: 'Nûn',
    isolated: 'ن',
    initial: 'نـ',
    medial: 'ـنـ',
    final: 'ـن',
    type: 'ince',
    connectsNext: true,
    makhraj: 'Dil ucunun üst ön diş etlerine dayanması ve sesin burun boşluğundan gelmesiyle çıkar.',
    tips: 'Derin çanağının TAM ORTASINDA TEK BİR NOKTA bulunur.',
    examples: [
      { word: 'نَهْر', transliteration: 'Nehr', meaning: 'Nehir', position: 'initial' },
      { word: 'عِنَب', transliteration: 'İneb', meaning: 'Üzüm', position: 'medial' },
      { word: 'عَيْن', transliteration: 'Ayn', meaning: 'Göz', position: 'final' }
    ]
  },
  {
    id: 'waw',
    index: 26,
    name: 'Vav',
    arabicName: 'وَاو',
    transliteration: 'Vâv',
    isolated: 'و',
    initial: 'و',
    medial: 'ـو',
    final: 'ـو',
    type: 'ince',
    connectsNext: false,
    makhraj: 'Dudaklar ileriye doğru yuvarlatılarak borazan gibi çıkar.',
    tips: 'Kendinden sonraki harfe BİTİŞMEZ. Harekeli olursa V sesi, sakin olursa uzatma harfidir.',
    examples: [
      { word: 'وَرْدَة', transliteration: 'Verdeh', meaning: 'Gül', position: 'initial' },
      { word: 'نُور', transliteration: 'Nûr', meaning: 'Işık / Aydınlık', position: 'medial' },
      { word: 'دَلْو', transliteration: 'Delv', meaning: 'Kova', position: 'final' }
    ]
  },
  {
    id: 'ha_soft',
    index: 27,
    name: 'He',
    arabicName: 'هَاء',
    transliteration: 'Hâ',
    isolated: 'ه',
    initial: 'هـ',
    medial: 'ـهـ',
    final: 'ـه',
    type: 'ince',
    connectsNext: true,
    makhraj: 'Boğazın en dibinden göğüsten gelen rahat bir nefesle çıkar.',
    tips: 'Ortada yazılışı kelebek (sekiz) gibidir: ـهـ . Sonda ise yuvarlak yuva gibidir.',
    examples: [
      { word: 'هِلاَل', transliteration: 'Hilâl', meaning: 'Hilal', position: 'initial' },
      { word: 'نَهَار', transliteration: 'Nehâr', meaning: 'Gündüz', position: 'medial' },
      { word: 'وَجْه', transliteration: 'Vech', meaning: 'Yüz / Çehre', position: 'final' }
    ]
  },
  {
    id: 'ya',
    index: 28,
    name: 'Ye',
    arabicName: 'يَاء',
    transliteration: 'Yâ',
    isolated: 'ي',
    initial: 'يـ',
    medial: 'ـيـ',
    final: 'ـي',
    type: 'ince',
    connectsNext: true,
    makhraj: 'Dil ortasının üst damağa yaklaşmasıyla ince bir "Y" olarak çıkar.',
    tips: 'Yalın hali ördek gibidir. Başta ve ortada Be harfi gibidir fakat ALTINDA İKİ NOKTASI vardır.',
    examples: [
      { word: 'يَد', transliteration: 'Yed', meaning: 'El', position: 'initial' },
      { word: 'بَيْت', transliteration: 'Beyt', meaning: 'Ev', position: 'medial' },
      { word: 'كُرْسِيّ', transliteration: 'Kürsiyy', meaning: 'Sandalye', position: 'final' }
    ]
  },
  {
    id: 'lam_alif',
    index: 29,
    name: 'Lâm-Elif',
    arabicName: 'لاَم أَلِف',
    transliteration: 'Lâm-Elif',
    isolated: 'لا',
    initial: 'لا',
    medial: 'ـلا',
    final: 'ـلا',
    type: 'ince',
    connectsNext: false,
    makhraj: 'Lam ve Elif harflerinin birleşmesinden oluşan özel bir hecedir.',
    tips: 'Lâm ve Elif harflerinin estetik birleşimidir. Kendinden sonrakine bitişmez.',
    examples: [
      { word: 'لاَ', transliteration: 'Lâ', meaning: 'Hayır / Yok', position: 'initial' },
      { word: 'إِخْلاَص', transliteration: 'İhlâs', meaning: 'Samimiyet', position: 'medial' },
      { word: 'عُلاَ', transliteration: 'Ulâ', meaning: 'Yücelik', position: 'final' }
    ]
  }
];

export const NON_CONNECTING_LETTERS = ['alif', 'dal', 'dhal', 'ra', 'zay', 'waw', 'lam_alif'];
