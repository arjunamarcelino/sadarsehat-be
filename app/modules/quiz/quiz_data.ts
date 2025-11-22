import { QuizQuestion } from './quiz_types.js'

export const quizQuestions: QuizQuestion[] = [
  {
    number: 1,
    question: 'Virus HIV ditularkan melalui keringat',
    answer: 'Myth',
    briefExplanation:
      'HIV tidak menular melalui keringat, air mata, atau kontak sehari-hari seperti berpelukan, berjabat tangan, atau berbagi makanan dan minuman. Penelitian oleh Hanege dkk (2020) menunjukkan bahwa tidak ditemukan virus HIV dalam keringat, bahkan pada orang dengan kadar virus tinggi dalam darah. HIV hanya dapat menular melalui darah, air mani, cairan vagina, ASI, serta dari ibu ke anak saat hamil atau melahirkan. Mari tetap menjaga empati dan stigma terhadap ODHA (Orang dengan HIV/AIDS)',
    sources:
      'https://www.who.int/news-room/fact-sheets/detail/hiv-aids\nhttps://pmc.ncbi.nlm.nih.gov/articles/PMC7103743/',
    longExplanation:
      'HIV dapat ditularkan melalui kontak cairan tubuh dengan orang yang hidup dengan HIV (ODHIV), yaitu darah, ASI, air mani, dan cairan vagina. HIV juga dapat ditularkan kepada anak selama kehamilan dan persalinan. Kontak sehari-hari seperti berciuman, berpelukan, berjabat tangan, atau berbagi barang pribadi, makanan, atau air tidak menularkan virus HIV (WHO, 2025)\n\nSebuah studi prospektif observasional dilakukan oleh Hanege dkk (2020) terhadap 57 orang pasien HIV positif (31 orang belum pernah menerima terapi antiretroviral (ART), sedang mengalami fase infeksi akut dan HIV RNA serum positif sedangkan 26 orang lainnya sedang menjalani pengobatan ART dengan hasil tes HIV RNA negatif dalam serum). Peserta diminta beraktivitas fisik sampai berkeringat. Keringat dikumpulkan dari area wajah dan dilakukan ekstraksi RNA HIV menggunakan QIAamp UltraSens RNA extraction kit (QIAGEN) dan diperiksa dengan PCR (polymerase chain reaction). Hasilnya adalah tidak ditemukan HIV RNA dalam semua sampel keringat (baik dari pasien dengan serum HIV RNA positif maupun negatif), meskipun hasil HIV RNA serum positif bervariasi. Sehingga, pada penelitian ini disimpulkan tidak ada bukti bahwa keringat mengandung HIV RNA, bahkan pada pasien dengan viral load darah tinggi (Hanege et al., 2020)',
  },
  {
    number: 2,
    question: 'Minum air putih 8 gelas per hari adalah kebutuhan wajib untuk semua orang',
    answer: 'Myth',
    briefExplanation:
      'Kebutuhan air setiap orang berbeda-beda tergantung pada aktivitas fisik, iklim, kondisi kesehatan, dan faktor lainnya. Tidak ada bukti ilmiah yang menunjukkan bahwa semua orang membutuhkan tepat 8 gelas air per hari. Kebutuhan cairan juga bisa dipenuhi dari makanan dan minuman lainnya, tidak hanya air putih.',
    sources:
      'https://www.health.harvard.edu/staying-healthy/how-much-water-should-you-drink\nhttps://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/expert-answers/water/faq-20058431',
    longExplanation:
      'Kebutuhan cairan harian bervariasi berdasarkan berbagai faktor seperti usia, jenis kelamin, tingkat aktivitas fisik, kondisi kesehatan, dan lingkungan. Institute of Medicine merekomendasikan sekitar 3,7 liter (15,5 gelas) untuk pria dan 2,7 liter (11,5 gelas) untuk wanita per hari, namun ini termasuk semua cairan dari makanan dan minuman, bukan hanya air putih. Tubuh juga mendapatkan cairan dari buah-buahan, sayuran, dan minuman lainnya. Penting untuk mendengarkan sinyal tubuh seperti rasa haus dan warna urine untuk menentukan kebutuhan cairan individu.',
  },
  {
    number: 3,
    question: 'Vaksin COVID-19 dapat mengubah DNA manusia',
    answer: 'Myth',
    briefExplanation:
      'Vaksin COVID-19 tidak dapat mengubah DNA manusia. Vaksin mRNA bekerja dengan memberikan instruksi kepada sel untuk membuat protein yang memicu respons imun, tetapi tidak memasuki inti sel tempat DNA berada. Vaksin tidak berinteraksi dengan DNA sama sekali.',
    sources:
      'https://www.cdc.gov/coronavirus/2019-ncov/vaccines/facts.html\nhttps://www.who.int/news-room/feature-stories/detail/how-do-vaccines-work',
    longExplanation:
      'Vaksin COVID-19, termasuk vaksin mRNA seperti Pfizer-BioNTech dan Moderna, bekerja dengan cara yang sama sekali berbeda dari yang diklaim dalam hoaks. Vaksin mRNA mengandung materi genetik yang menginstruksikan sel untuk membuat protein spike virus. Protein ini kemudian memicu sistem kekebalan tubuh untuk menghasilkan antibodi. mRNA tidak pernah memasuki inti sel, di mana DNA kita berada, dan dipecah oleh sel setelah digunakan. DNA manusia tetap tidak berubah. Vaksin vektor virus seperti AstraZeneca juga tidak mengubah DNA - mereka hanya membawa instruksi untuk membuat protein yang memicu respons imun.',
  },
  {
    number: 4,
    question: 'Makanan organik selalu lebih sehat daripada makanan konvensional',
    answer: 'Myth',
    briefExplanation:
      'Meskipun makanan organik diproduksi tanpa pestisida sintetis dan pupuk kimia, tidak ada bukti ilmiah yang konsisten menunjukkan bahwa makanan organik secara signifikan lebih bergizi atau lebih sehat daripada makanan konvensional. Nilai gizi makanan lebih tergantung pada varietas, kesegaran, dan metode pengolahan.',
    sources:
      'https://www.hsph.harvard.edu/nutritionsource/organic-foods/\nhttps://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/organic-food/art-20043880',
    longExplanation:
      'Penelitian ilmiah tentang perbedaan nutrisi antara makanan organik dan konvensional menunjukkan hasil yang beragam. Beberapa studi menemukan tingkat antioksidan yang sedikit lebih tinggi pada makanan organik, sementara yang lain tidak menemukan perbedaan signifikan. Keuntungan utama makanan organik adalah mengurangi paparan residu pestisida dan mendukung praktik pertanian yang lebih ramah lingkungan. Namun, dari segi nutrisi, baik makanan organik maupun konvensional dapat menjadi bagian dari diet sehat. Yang paling penting adalah mengonsumsi berbagai macam buah, sayuran, biji-bijian, dan protein dalam jumlah yang seimbang.',
  },
  {
    number: 5,
    question: 'Stres dapat mempengaruhi sistem kekebalan tubuh',
    answer: 'Fact',
    briefExplanation:
      'Stres kronis dapat melemahkan sistem kekebalan tubuh dan membuat seseorang lebih rentan terhadap infeksi dan penyakit. Stres memicu pelepasan hormon kortisol yang dapat menekan fungsi kekebalan tubuh jika terjadi dalam jangka waktu lama.',
    sources:
      'https://www.apa.org/research/action/immune\nhttps://www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/stress/art-20046037',
    longExplanation:
      'Stres akut jangka pendek sebenarnya dapat meningkatkan respons kekebalan tubuh sebagai bagian dari mekanisme fight-or-flight. Namun, stres kronis yang berlangsung lama dapat memiliki efek sebaliknya. Hormon stres seperti kortisol, yang dilepaskan selama respons stres, dapat menekan produksi sel darah putih dan mengurangi efektivitas sistem kekebalan tubuh. Penelitian menunjukkan bahwa orang yang mengalami stres kronis lebih rentan terhadap pilek, flu, dan infeksi lainnya. Stres juga dapat memperlambat penyembuhan luka dan mengurangi efektivitas vaksin. Oleh karena itu, mengelola stres melalui teknik relaksasi, olahraga teratur, dan dukungan sosial penting untuk menjaga kesehatan sistem kekebalan tubuh.',
  },
  {
    number: 6,
    question: 'Makan sebelum tidur selalu menyebabkan kenaikan berat badan',
    answer: 'Myth',
    briefExplanation:
      'Tidak selalu benar bahwa makan sebelum tidur menyebabkan kenaikan berat badan. Yang lebih penting adalah total kalori yang dikonsumsi sepanjang hari dan keseimbangan energi. Makan malam yang sehat dan tidak berlebihan tidak akan menyebabkan kenaikan berat badan secara signifikan.',
    sources:
      'https://www.healthline.com/nutrition/eating-before-bed\nhttps://www.sleepfoundation.org/nutrition/is-it-bad-to-eat-before-bed',
    longExplanation:
      'Penelitian menunjukkan bahwa kenaikan berat badan lebih dipengaruhi oleh total asupan kalori harian dan kualitas makanan, bukan waktu makan. Meskipun beberapa studi menemukan korelasi antara makan larut malam dan kenaikan berat badan, ini lebih terkait dengan pilihan makanan yang kurang sehat (seperti makanan tinggi gula dan lemak) yang sering dikonsumsi pada waktu tersebut. Makanan ringan yang sehat sebelum tidur sebenarnya dapat membantu tidur lebih nyenyak dan tidak akan menyebabkan kenaikan berat badan jika dikonsumsi dalam porsi yang wajar dan sesuai dengan kebutuhan kalori harian.',
  },
  {
    number: 7,
    question: 'Detoksifikasi dengan jus buah dapat membersihkan racun dari tubuh',
    answer: 'Myth',
    briefExplanation:
      'Tubuh manusia sudah memiliki sistem detoksifikasi alami yang sangat efisien melalui hati, ginjal, dan organ lainnya. Tidak ada bukti ilmiah yang menunjukkan bahwa diet detoks atau jus buah dapat meningkatkan proses detoksifikasi tubuh. Sebagian besar klaim detoks tidak didukung oleh penelitian.',
    sources:
      'https://www.health.harvard.edu/staying-healthy/the-dubious-practice-of-detox\nhttps://www.nhs.uk/live-well/eat-well/how-to-eat-a-balanced-diet/',
    longExplanation:
      'Sistem detoksifikasi tubuh bekerja secara alami dan terus-menerus. Hati memproses dan menetralkan racun, ginjal menyaring darah, dan sistem pencernaan mengeluarkan limbah. Tidak ada produk atau diet khusus yang terbukti dapat meningkatkan fungsi ini. Diet detoks dengan jus buah seringkali rendah kalori dan nutrisi penting, yang dapat menyebabkan kelelahan, pusing, dan bahkan kehilangan massa otot. Yang terbaik adalah mendukung sistem detoksifikasi alami tubuh dengan makan makanan bergizi seimbang, minum cukup air, berolahraga teratur, dan menghindari zat berbahaya seperti alkohol berlebihan dan merokok.',
  },
  {
    number: 8,
    question: 'Olahraga ringan dapat membantu mengurangi gejala depresi',
    answer: 'Fact',
    briefExplanation:
      'Olahraga teratur, bahkan yang ringan, telah terbukti secara ilmiah dapat membantu mengurangi gejala depresi dan kecemasan. Olahraga melepaskan endorfin dan neurotransmitter lain yang dapat meningkatkan mood dan kesejahteraan mental.',
    sources:
      'https://www.mayoclinic.org/diseases-conditions/depression/in-depth/depression-and-exercise/art-20046495\nhttps://www.apa.org/monitor/2011/12/exercise',
    longExplanation:
      'Banyak penelitian menunjukkan bahwa olahraga dapat menjadi pengobatan yang efektif untuk depresi ringan hingga sedang. Olahraga meningkatkan produksi endorfin, yang merupakan bahan kimia alami di otak yang bertindak sebagai pereda nyeri dan peningkat mood. Olahraga juga meningkatkan produksi serotonin dan norepinefrin, neurotransmitter yang berperan dalam mengatur mood. Selain itu, olahraga dapat meningkatkan kepercayaan diri, mengalihkan perhatian dari pikiran negatif, dan memberikan kesempatan untuk interaksi sosial. Bahkan aktivitas ringan seperti berjalan kaki 30 menit sehari dapat memberikan manfaat signifikan untuk kesehatan mental.',
  },
  {
    number: 9,
    question: 'Semua suplemen vitamin aman dan bermanfaat untuk semua orang',
    answer: 'Myth',
    briefExplanation:
      'Tidak semua suplemen vitamin aman untuk semua orang. Beberapa vitamin dapat berinteraksi dengan obat-obatan, menyebabkan efek samping, atau bahkan berbahaya jika dikonsumsi dalam dosis tinggi. Penting untuk berkonsultasi dengan profesional kesehatan sebelum mengonsumsi suplemen.',
    sources:
      'https://www.hsph.harvard.edu/nutritionsource/vitamins/\nhttps://www.fda.gov/food/buy-store-serve-safe-food/what-you-need-know-about-dietary-supplements',
    longExplanation:
      'Meskipun beberapa suplemen vitamin dapat bermanfaat untuk orang dengan defisiensi tertentu atau kondisi kesehatan khusus, tidak semua suplemen aman untuk semua orang. Vitamin yang larut dalam lemak (A, D, E, K) dapat menumpuk di tubuh dan menyebabkan toksisitas jika dikonsumsi berlebihan. Suplemen juga dapat berinteraksi dengan obat-obatan resep, mengurangi efektivitasnya atau menyebabkan efek samping yang berbahaya. Selain itu, banyak orang yang sebenarnya tidak membutuhkan suplemen jika mereka sudah mengonsumsi makanan yang seimbang. Yang terbaik adalah mendapatkan nutrisi dari makanan utuh dan berkonsultasi dengan dokter atau ahli gizi sebelum mengonsumsi suplemen.',
  },
  {
    number: 10,
    question: 'Mencuci tangan dengan sabun efektif mencegah penyebaran penyakit',
    answer: 'Fact',
    briefExplanation:
      'Mencuci tangan dengan sabun dan air adalah salah satu cara paling efektif untuk mencegah penyebaran penyakit menular. Sabun dapat menghancurkan lapisan luar virus dan bakteri, membuatnya tidak aktif dan mudah dibilas dengan air.',
    sources:
      'https://www.cdc.gov/handwashing/why-handwashing.html\nhttps://www.who.int/news-room/feature-stories/detail/handwashing-an-effective-tool-to-prevent-covid-19-and-other-diseases',
    longExplanation:
      'Mencuci tangan dengan sabun adalah salah satu intervensi kesehatan publik yang paling efektif dan murah. Sabun bekerja dengan cara menghancurkan membran lipid yang mengelilingi banyak virus dan bakteri, membuatnya tidak aktif. Proses mencuci tangan yang benar (setidaknya 20 detik dengan sabun dan air mengalir) dapat menghilangkan kuman dari tangan dan mencegah penularan penyakit melalui kontak langsung atau kontaminasi permukaan. WHO dan CDC merekomendasikan mencuci tangan secara teratur, terutama sebelum makan, setelah menggunakan toilet, dan setelah batuk atau bersin. Praktik sederhana ini dapat mengurangi risiko infeksi saluran pernapasan hingga 16-21% dan infeksi diare hingga 23-40%.',
  },
]

