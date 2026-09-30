/* =========================================================
   ANTAS NG WIKA — Interaktibong Aralin
   ========================================================= */

/* -------- 1. LESSON CONTENT -------- */
const lessons = {
  pambansa: {
    tag: 'PAMBANSA • PAMANTAYAN',
    title: 'Pambansa',
    body: `
      <p><strong>KAHULUGAN:</strong> Ang pambansa ay antas ng wikang opisyal na kinikilala at ginagamit sa buong bansa. Ito ang karaniwang ginagamit sa paaralan, pamahalaan, balita, aklat, batas, at mga pormal na komunikasyon. Layunin nitong magkaroon ng iisang wikang mauunawaan ng mga Pilipino mula sa iba’t ibang rehiyon.</p>
      <h3>Halimbawa</h3>
      <div class="example">“Ang bawat mamamayan ay may tungkuling pangalagaan ang kalayaan ng ating bansa.”</div>
      <h3>Kahulugan ng mga salita</h3>
      <ul class="word-list">
        <li><b>Mamamayan</b> – taong kabilang at naninirahan sa isang bansa.</li>
        <li><b>Kalayaan</b> – karapatang kumilos at magpahayag nang walang pang-aapi.</li>
      </ul>
    `
  },
  pampanitikan: {
    tag: 'PAMPANITIKAN • MASINING',
    title: 'Pampanitikan',
    body: `
      <p><strong>KAHULUGAN:</strong> Ang pampanitikan ay pinakamalikhain at masining na antas ng wika. Gumagamit ito ng malalalim na salita, talinghaga, simbolismo, at iba’t ibang tayutay upang masining na maipahayag ang damdamin at kaisipan. Madalas itong ginagamit sa tula, nobela, kuwento, sanaysay, at iba pang akdang pampanitikan.</p>
      <h3>Halimbawa</h3>
      <div class="example">“Ang aking ina ang ilaw ng tahanan, samantalang ang aking ama ang haligi ng tahanan.”</div>
      <h3>Kahulugan ng mga salita</h3>
      <ul class="word-list">
        <li><b>Ilaw ng tahanan</b> – tumutukoy sa ina na nagbibigay ng pagmamahal, gabay, at pag-aaruga sa pamilya.</li>
        <li><b>Haligi ng tahanan</b> – tumutukoy sa ama na nagbibigay ng lakas, proteksiyon, at suporta sa pamilya.</li>
      </ul>
    `
  },
  lalawiganin: {
    tag: 'LALAWIGANIN • PANREHIYON',
    title: 'Lalawiganin',
    body: `
      <p><strong>KAHULUGAN:</strong> Ang lalawiganin ay mga salita o paraan ng pagsasalita na ginagamit sa isang partikular na lalawigan o rehiyon. Maaari itong magkaroon ng sariling punto, tono, kahulugan, at bokabularyo. Ipinakikita nito ang pagkakaiba-iba at mayamang kultura ng bawat pamayanan sa Pilipinas.</p>
      <h3>Halimbawa</h3>
      <div class="example">“Pumunta kami sa kanilang balay upang dalawin ang aking gayyem.”</div>
      <h3>Kahulugan ng mga salita</h3>
      <ul class="word-list">
        <li><b>Balay</b> – salitang Bisaya na nangangahulugang bahay.</li>
        <li><b>Gayyem</b> – salitang Ilokano na nangangahulugang kaibigan.</li>
      </ul>
    `
  },
  kolokyal: {
    tag: 'KOLOKYAL • PANG-ARAW-ARAW',
    title: 'Kolokyal',
    body: `
      <p><strong>KAHULUGAN:</strong> Ang kolokyal ay impormal na wikang karaniwang ginagamit sa pang-araw-araw na pakikipag-usap. Madalas itong pinaikling anyo ng mga salita o parirala upang maging mas mabilis, natural, at magaan ang usapan. Karaniwan itong ginagamit sa pakikipag-usap sa pamilya, kaibigan, at kakilala.</p>
      <h3>Halimbawa</h3>
      <div class="example">“Nasan na siya? Meron pa tayong mahalagang pag-uusapan.”</div>
      <h3>Kahulugan ng mga salita</h3>
      <ul class="word-list">
        <li><b>Nasan</b> – pinaikling anyo ng nasaan.</li>
        <li><b>Meron</b> – karaniwang anyo ng salitang mayroon.</li>
      </ul>
    `
  },
  balbal: {
    tag: 'BALBAL • IMPORMAL',
    title: 'Balbal',
    body: `
      <p><strong>KAHULUGAN:</strong> Ang balbal ay pinakaimpormal na antas ng wika. Binubuo ito ng mga salitang likha o binago ng isang pangkat, komunidad, o henerasyon. Madalas itong ginagamit ng magkakaibigan at kabataan upang ipakita ang pagiging malapit, pagiging malikhain, o pagkakakilanlan ng kanilang grupo. Mabilis itong nagbabago dahil naiimpluwensiyahan ito ng uso, social media, at kulturang popular.</p>
      <h3>Halimbawa</h3>
      <div class="example">“Kasama ng aking tropa ang kanyang jowa sa panonood ng aming paboritong lodi.”</div>
      <h3>Kahulugan ng mga salita</h3>
      <ul class="word-list">
        <li><b>Tropa</b> – grupo ng malalapit na kaibigan.</li>
        <li><b>Jowa</b> – kasintahan o romantikong karelasyon.</li>
        <li><b>Lodi</b> – baligtad na anyo ng idolo; taong hinahangaan o tinitingala.</li>
      </ul>
    `
  }
};

/* -------- 2. QUIZ (20 tanong, A-E) -------- */
/* -------- 2. QUIZ POOL (50 tanong, A-E) -------- */
const quizPool = [
  // === EXISTING 20 ===
  { s:'Pormal na komunikasyon', q:'Anong antas ng wika ang karaniwang ginagamit sa mga aklat-aralin, opisyal na dokumento, at pormal na komunikasyon?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:0,
    e:'Ang Pambansa ang pamantayang wikang ginagamit sa pormal na komunikasyon.' },
  { s:'Tula at tayutay', q:'“Ang kanyang mga mata ay tila mga bituing nagniningning sa madilim na kalangitan.” Anong antas ng wika ang ginamit?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:1,
    e:'Gumagamit ito ng tayutay (simile) at masining na paglalarawan—katangian ng Pampanitikan.' },
  { s:'Rehiyonal na salita', q:'Ang mga salitang ginagamit lamang o higit na kilala sa isang partikular na lalawigan o rehiyon ay nabibilang sa anong antas ng wika?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:2,
    e:'Ang Lalawiganin ay wikang natatangi sa isang rehiyon o lalawigan.' },
  { s:'Pinaikling salita', q:'“Nasan na ang kapatid mo?” Ang salitang “nasan,” na pinaikling anyo ng “nasaan,” ay halimbawa ng anong antas ng wika?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:3,
    e:'Ang Kolokyal ay madalas pinaikli o impormal na anyo ng mga salita sa araw-araw.' },
  { s:'Barkada', q:'“Ang lakas ng trip mo, pre!” Anong antas ng wika ang higit na makikita sa salitang “pre”?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:4,
    e:'Ang “pre” ay balbal na paraan ng pagtawag sa kaibigan.' },
  { s:'Opisyal na pahayag', q:'“Ang pamahalaan ay nagpatupad ng bagong programa para sa mga mag-aaral.” Anong antas ng wika ang ginamit sa pangungusap?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:0,
    e:'Pambansa—ginagamit sa opisyal at pormal na komunikasyon.' },
  { s:'Masining na pagpapahayag', q:'Alin ang antas ng wikang gumagamit ng masining, malalim, at matatalinghagang pagpapahayag?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:1,
    e:'Ang Pampanitikan ang pinakamasining at pinakamalikhaing antas ng wika.' },
  { s:'Ilocano', q:'“Mangan tayon!” na nangangahulugang “Kumain na tayo!” sa Ilocano ay halimbawa ng anong antas ng wika?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:2,
    e:'Lalawiganin—nagmumula ito sa isang partikular na rehiyon (Ilocos).' },
  { s:'Kaswal na pag-uusap', q:'“Teka lang, andiyan na ’ko!” Anong antas ng wika ang nangingibabaw dahil sa pinaikli at kaswal na mga salita?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:3,
    e:'Kolokyal—pinaikli at natural sa araw-araw na usapan.' },
  { s:'Kabataan', q:'“Lodi talaga kita! Ang galing mo!” Ang salitang “lodi” ay halimbawa ng anong antas ng wika?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:4,
    e:'Balbal—binago ang salitang “idolo” sa baliktad na anyo.' },
  { s:'Paglalarawan', q:'Alin sa sumusunod ang pinakamainam na paglalarawan sa Pambansang wika?',
    a:['Wikang karaniwang ginagamit sa pormal at malawakang komunikasyon','Wikang ginagamit lamang sa isang lalawigan','Wikang binubuo lamang ng mga salitang uso','Wikang ginagamit lamang sa tula','Wikang ginagamit lamang ng magkakaibigan'], c:0,
    e:'Ang Pambansa ay malawakan at pormal na ginagamit sa buong bansa.' },
  { s:'Tayutay', q:'“Ang kanyang puso ay dinurog ng mapait na kapalaran.” Anong antas ng wika ang ipinakikita ng masining na pagpapahayag?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:1,
    e:'Pampanitikan—gumagamit ito ng metapora at masining na paglalarawan.' },
  { s:'Iba-ibang rehiyon', q:'Aling antas ng wika ang maaaring magkaroon ng mga salitang naiiba ang kahulugan o gamit depende sa rehiyon?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:2,
    e:'Lalawiganin—may iba’t ibang kahulugan ang mga salita depende sa rehiyon.' },
  { s:'Pinaikli', q:'“Pa’no tayo pupunta roon?” Ang salitang “pa’no” mula sa “paano” ay halimbawa ng anong antas ng wika?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:3,
    e:'Kolokyal—pinaikling anyo ng “paano.”' },
  { s:'Slang', q:'“Astig ng bagong sapatos mo!” Ang salitang “astig” ay karaniwang halimbawa ng anong antas ng wika?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:4,
    e:'Balbal—impormal at makabagong salitang ginagamit ng kabataan.' },
  { s:'Malikhaing akda', q:'Aling antas ng wika ang karaniwang makikita sa mga tula, nobela, maikling kuwento, at iba pang malikhaing akda?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:1,
    e:'Pampanitikan—masining at malikhain ang gamit ng wika.' },
  { s:'Kolokyal', q:'Alin sa sumusunod ang halimbawa ng Kolokyal?',
    a:['“Nandito na ’ko.”','“Ang buhay ay isang mahabang paglalakbay.”','“Ang edukasyon ay mahalaga sa pag-unlad ng bansa.”','“Lodi kita!”','“Mangan tayo.”'], c:0,
    e:'Ang “Nandito na ’ko.” ay pinaikling anyo ng “Narito na ako.”' },
  { s:'Balbal', q:'Alin sa sumusunod ang halimbawa ng Balbal?',
    a:['Paaralan','Marikit','Tropa','Nasaan','Pamahalaan'], c:2,
    e:'Ang “tropa” ay balbal na salita para sa grupo ng magkakaibigan.' },
  { s:'Kahalagahan', q:'Bakit mahalagang malaman ang iba’t ibang antas ng wika?',
    a:['Upang laging gumamit ng malalalim na salita','Upang maiangkop ang paraan ng pagsasalita sa kausap at sitwasyon','Upang maiwasan ang paggamit ng impormal na wika sa lahat ng pagkakataon','Upang gumamit lamang ng Pambansang wika','Upang palaging paikliin ang mga salita'], c:1,
    e:'Ang kahalagahan ay ang pag-aangkop ng wika sa kausap at sitwasyon.' },
  { s:'Konteksto', q:'Isang estudyante ang gumamit ng pormal na Filipino habang nag-uulat, ngunit gumamit ng “tropa” at iba pang balbal nang kausapin ang mga kaibigan. Ano ang ipinapakita nito?',
    a:['Iisa lamang ang maaaring gamiting antas ng wika ng isang tao','Nagbabago ang antas ng wika ayon sa konteksto at kausap','Balbal lamang ang dapat gamitin sa paaralan','Hindi maaaring pagsabayin ang iba’t ibang antas ng wika','Pampanitikan ang lahat ng impormal na salita'], c:1,
    e:'Ang antas ng wika ay nagbabago ayon sa konteksto at kausap.' },

  // === BAGONG 30 ===
  { s:'Tula para sa ina', q:'“Ang bulaklak ng kanyang ngiti ay nagbibigay ng kulay sa aking umaga.” Anong antas ng wika ang ginamit?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:1,
    e:'Pampanitikan—gumagamit ng metapora at masining na paglalarawan.' },
  { s:'Bisaya', q:'“Unsa man ang imong ngalan?” Ang pangungusap na ito ay halimbawa ng anong antas ng wika?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:2,
    e:'Lalawiganin—Bisaya/Cebuano ito, isang wikang panrehiyon.' },
  { s:'Pagsusulat', q:'“Ipinagkaloob ng pamahalaan ang tulong pinansiyal sa mga nangangailangan.” Anong antas ang ginamit?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:0,
    e:'Pambansa—pormal at opisyal na pagpapahayag.' },
  { s:'Chat', q:'“OMG! Ang ganda ng kuha mo, mare!” Anong antas ng wika ang makikita?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:4,
    e:'Balbal—may “OMG” at “mare” na impormal at makabagong ekspresyon.' },
  { s:'Pormal na liham', q:'“Ako po ay sumasainyo, lubos na gumagalang…” Anong antas ang ginamit?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:0,
    e:'Pambansa—pormal at magalang na wika sa liham.' },
  { s:'Awit', q:'“Sa ilalim ng buwan, ako ay nananabik sa iyong pagbabalik.” Anong antas ang nangingibabaw?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:1,
    e:'Pampanitikan—masining at romantikong pagpapahayag.' },
  { s:'Ilokano', q:'“Naimbag nga bigat!” (Magandang umaga!) ay halimbawa ng anong antas?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:2,
    e:'Lalawiganin—wikang Ilokano.' },
  { s:'Text message', q:'“Kita na lang tayo later, ha? Ingat!” Anong antas ang makikita?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:3,
    e:'Kolokyal—“later” at “ha?” ay impormal at pang-araw-araw.' },
  { s:'Kabataan', q:'“Sanaol! Grabe ka, petmalu!” Ang “petmalu” ay anong antas?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:4,
    e:'Balbal—baliktad na anyo ng “malupet.”' },
  { s:'Batayang aklat', q:'“Ang wika ay kasangkapan sa komunikasyon.” Ang pangungusap ay anong antas?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:0,
    e:'Pambansa—pamantayan at pormal na wika.' },
  { s:'Maikling kuwento', q:'“Naglalaro ang hangin sa mga dahon ng puno.” Anong antas ang ginamit?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:1,
    e:'Pampanitikan—may personipikasyon at malikhaing imahe.' },
  { s:'Waray', q:'“Maupay nga adlaw!” (Magandang araw!) ay anong antas?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:2,
    e:'Lalawiganin—wikang Waray.' },
  { s:'Pamilya', q:'“’Nay, sa’n ka? Kakain na tayo.” Anong antas ang nangingibabaw?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:3,
    e:'Kolokyal—pinaikling “’Nay” at “sa’n.”' },
  { s:'Barkada', q:'“Ang solid ng trip mo, lods!” Ang “lods” ay anong antas?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:4,
    e:'Balbal—binagong anyo ng “idol” o “lodi.”' },
  { s:'Balita', q:'“Ayon sa ulat, tumaas ang bilang ng mga nagtatrabaho ngayong taon.” Anong antas ito?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:0,
    e:'Pambansa—pormal na ulat sa balita.' },
  { s:'Sanaysay', q:'“Ang bayan ko ay isang inang nag-aaruga sa kanyang mga anak.” Anong antas ito?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:1,
    e:'Pampanitikan—metapora ng bayan bilang ina.' },
  { s:'Cebuano', q:'“Maayong buntag!” (Magandang umaga!) ay anong antas?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:2,
    e:'Lalawiganin—wikang Cebuano/Bisaya.' },
  { s:'Tawag sa kaibigan', q:'“Uy, tol! Musta na?” Ang “tol” ay anong antas?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:4,
    e:'Balbal—pinaikling “utol” (kapatid), ginagamit sa barkada.' },
  { s:'Klasrum', q:'“Bumuo ng pangkat na may limang miyembro.” Anong antas ng wika ang ginamit?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:0,
    e:'Pambansa—instruksiyon sa klase, pormal.' },
  { s:'Bugtong', q:'“Isang butil ng palay, sakop ang buong bahay.” Anong antas ito?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:1,
    e:'Pampanitikan—bugtong, masining na anyo ng wika.' },
  { s:'Hiligaynon', q:'“Kamusta ka?” sa Hiligaynon ay “Kumusta ka?” — pareho lang ba sila ng antas?',
    a:['Oo, parehong Pambansa','Hindi, ang Hiligaynon ay lalawiganin','Pampanitikan','Balbal','Kolokyal'], c:1,
    e:'Ang Hiligaynon ay wikang panrehiyon, hindi pambansa.' },
  { s:'Group chat', q:'“Sawyer! Sunod ako sa’yo, ha?” Anong antas ng wika?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:3,
    e:'Kolokyal—natural at impormal na pang-araw-araw.' },
  { s:'Kabataan', q:'“Ang bet ko yung bagong sapatos mo.” Ang “bet” ay anong antas?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:4,
    e:'Balbal—galing sa “bet” (gusto) na kabataan.' },
  { s:'Dyaryo', q:'“Inanunsyo ng Pangulo ang bagong patakaran sa ekonomiya.” Anong antas ito?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:0,
    e:'Pambansa—pormal na ulat sa pahayagan.' },
  { s:'Alamat', q:'“Noong unang panahon, may isang diwatang nagmamahal sa bulkan.” Anong antas ito?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:1,
    e:'Pampanitikan—alamat, akdang pampanitikan.' },
  { s:'Pangasinense', q:'“Masantos ya agew!” (Magandang araw!) ay anong antas?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:2,
    e:'Lalawiganin—wikang Pangasinense.' },
  { s:'Mensahe sa kaibigan', q:'“Wait lang, saglit lang ako.” Anong antas ang may “wait” at “saglit”?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:3,
    e:'Kolokyal—code-switching at pinaikling anyo.' },
  { s:'Tiktok comment', q:'“Grabe ka, mars! Dasurv mo ’yan!” Ang “dasurv” ay anong antas?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:4,
    e:'Balbal—“deserve” na binago ng kabataan.' },
  { s:'Panayam', q:'“Ayon sa aming pananaliksik, malaki ang epekto ng wika sa pagkatuto.” Anong antas ito?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:0,
    e:'Pambansa—pormal at akademikong pagpapahayag.' },
  { s:'Awiting bayan', q:'“Leron, leron sinta, buko ng papaya.” Anong antas ito?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:1,
    e:'Pampanitikan—awiting bayan, akdang masining.' },
  { s:'Pahayag ng guro', q:'“Bumalik tayo sa paksang natalakay kahapon.” Anong antas?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:0,
    e:'Pambansa—pormal na pahayag sa klase.' },
  { s:'Komiks', q:'“Boom! Wasak ang kalaban!” Anong antas ang “wasak”?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:4,
    e:'Balbal—kolokyal/balbal na ekspresyon ng kabataan.' },
  { s:'Tulang Filipino', q:'“O, aking bayan, ikaw ang mutya ng silangan.” Anong antas ito?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:1,
    e:'Pampanitikan—tula, masining at matalinghaga.' },
  { s:'Kapampangan', q:'“Mayap a abak!” (Magandang umaga!) ay anong antas?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:2,
    e:'Lalawiganin—wikang Kapampangan.' },
  { s:'Vlog', q:'“Guys, sobrang worth it ng binili ko, promise!” Anong antas?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:3,
    e:'Kolokyal—may English at pang-araw-araw na ekspresyon.' },
  { s:'Barkada', q:'“Ang saket ng tiyan ko, par!” Ang “saket” ay anong antas?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:4,
    e:'Balbal—kolokyal/balbal na pinaikling “masakit.”' },
  { s:'Ulat', q:'“Nakapagtala ng 5% na paglago ang ekonomiya ng bansa.” Anong antas ito?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:0,
    e:'Pambansa—pormal na ulat pang-ekonomiya.' },
  { s:'Nobela', q:'“Bumaha ng luha sa kanyang mga mata nang makita ang nawawalang anak.” Anong antas?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:1,
    e:'Pampanitikan—hyperbole at masining na paglalarawan.' },
  { s:'Tausug', q:'“Assalamu alaikum!” (Kapayapaan sa iyo!) ay anong antas?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:2,
    e:'Lalawiganin—pagbating Tausug/Arabiko, gamit sa rehiyon.' },
  { s:'Tropa', q:'“Tara, kain tayo sa labas, mga tsong!” Ang “tsong” ay anong antas?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:4,
    e:'Balbal—tawag sa kaibigan sa barkada.' },
  { s:'Patalastas', q:'“Bili na! Murang-mura lang, sulit na sulit!” Anong antas?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:3,
    e:'Kolokyal—patalastas sa pang-araw-araw, impormal.' },
  { s:'Batas', q:'“Ayon sa Artikulo XIV ng Konstitusyon, ang Filipino ang pambansang wika.” Anong antas?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:0,
    e:'Pambansa—pormal na batas at opisyal na dokumento.' },
  { s:'Epiko', q:'“Si Lam-ang ay isang bayaning may pambihirang lakas.” Anong antas ito?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:1,
    e:'Pampanitikan—epikong akdang pampanitikan.' },
  { s:'Boholano', q:'“Kumusta man ka?” (Bohol variant) ay anong antas?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:2,
    e:'Lalawiganin—wikang Boholano.' },
  { s:'SMS', q:'“C u later, ingatz!” Anong antas ang SMS-style na ito?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:4,
    e:'Balbal—SMS slang at pinaghalong Ingles.' },
  { s:'Talakayan', q:'“Ano ang pananaw mo sa isyung ito?” Anong antas?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:0,
    e:'Pambansa—pormal na tanong sa talakayan.' },
  { s:'Balagtasan', q:'“Aking katwiran, ang wika ay di dapat ikahon.” Anong antas ito?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:1,
    e:'Pampanitikan—balagtasan, masining na pakikipagtalo.' },
  { s:'Pagbati sa barkada', q:'“Uy, mars! Ang tagal mo ah!” Ang “mars” ay anong antas?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:4,
    e:'Balbal—tawag sa kaibigan sa barkada.' },
  { s:'Resipi', q:'“Isang tasa ng harina, dalawang kutsarang asukal…” Anong antas?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:0,
    e:'Pambansa—pamantayan at malinaw na panuto.' },
  { s:'Sambotani', q:'“Sa ilog ng Amburayan, ang mga dalaga ay nagsasayaw.” Anong antas ito?',
    a:['Pambansa','Pampanitikan','Lalawiganin','Kolokyal','Balbal'], c:1,
    e:'Pampanitikan—sambotani, akdang pampanitikan.' }
];

const TOTAL_QUESTIONS = 20;  // Bilang ng tanong kada session
const STORAGE_SESSION = 'antas_wika_quiz_session_v3';

/* -------- 3. GLOSSARY DATA -------- */
const glossary = [
  { t:'Pambansa', e:'National language', d:'Antas ng wikang opisyal na kinikilala at ginagamit sa buong bansa. Gamit sa paaralan, pamahalaan, balita, aklat, at pormal na komunikasyon.' },
  { t:'Pampanitikan', e:'Literary', d:'Pinakamalikhain at masining na antas ng wika. Gumagamit ng talinghaga, simbolismo, at tayutay. Madalas sa tula, nobela, at sanaysay.' },
  { t:'Lalawiganin', e:'Regional', d:'Mga salita o paraan ng pagsasalita na natatangi sa isang partikular na lalawigan o rehiyon. May sariling punto, tono, at bokabularyo.' },
  { t:'Kolokyal', e:'Colloquial', d:'Impormal na wikang karaniwang ginagamit sa pang-araw-araw na usapan. Madalas pinaikli (nasan, meron, pa’no).' },
  { t:'Balbal', e:'Slang', d:'Pinakaimpormal na antas ng wika. Mga salitang likha o binago ng isang pangkat o henerasyon. Mabilis magbago dahil sa uso at social media.' },
  { t:'Register', e:'Register', d:'Antas ng pormalidad na pinipili ayon sa sitwasyon at kausap.' },
  { t:'Barayti', e:'Variety', d:'Baryasyon ng wika dahil sa heograpiya, pangkat panlipunan, edad, o sitwasyon.' },
  { t:'Idyolek', e:'Idiolect', d:'Natatanging paraan ng pagsasalita ng isang indibidwal.' },
  { t:'Sosyolek', e:'Sociolect', d:'Barayti ng wika ng isang partikular na pangkat panlipunan.' },
  { t:'Tayutay', e:'Figure of speech', d:'Masining na paraan ng pagpapahayag gamit ang paghahambing, pagmamalabis, at iba pa.' },
  { t:'Talinghaga', e:'Metaphor / figure', d:'Matalinghagang pahayag na may di-literal na kahulugan.' },
  { t:'Simbolismo', e:'Symbolism', d:'Paggamit ng bagay o tanda upang kumatawan sa mas malalim na kahulugan.' },
  { t:'Code-switching', e:'Code-switching', d:'Pagpapalit ng wika o barayti sa loob ng isang usapan.' },
  { t:'Pag-aangkop', e:'Accommodation', d:'Pagsasaayos ng pananalita ayon sa kausap o sitwasyon.' },
  { t:'Diskurso', e:'Discourse', d:'Malawak na yunit ng wika—pag-uusap, teksto, o talumpati.' },
  { t:'Ortograpiya', e:'Orthography', d:'Sistema ng pagbaybay at pagsulat ng wika.' },
  { t:'Ponolohiya', e:'Phonology', d:'Pag-aaral ng tunog ng wika.' },
  { t:'Morpolohiya', e:'Morphology', d:'Pag-aaral ng kayarian ng salita.' },
  { t:'Sintaks', e:'Syntax', d:'Pag-aaral ng kayarian ng pangungusap.' },
  { t:'Semantika', e:'Semantics', d:'Pag-aaral ng kahulugan ng salita at pangungusap.' }
];

/* -------- 4. FUN FACTS DATA -------- */
const funFacts = [
  { n:'01', t:'🗣️ Nag-iiba ang ating antas ng wika depende sa kausap.', d:'Maaaring pormal kang magsalita kapag kaharap ang guro o isang opisyal, ngunit nagiging mas kaswal kapag kausap ang malalapit na kaibigan. Ipinapakita nito na natural nating inaangkop ang wika sa sitwasyon.' },
  { n:'02', t:'🌱 Buhay at patuloy na nagbabago ang wika.', d:'Hindi nananatiling pareho ang paraan ng pagsasalita ng mga tao. Habang nagbabago ang kultura, teknolohiya, at lipunan, may mga bagong salitang nabubuo at may mga lumang salitang bihira nang gamitin.' },
  { n:'03', t:'📱 Malaki ang impluwensiya ng social media sa Balbal.', d:'Maraming salitang balbal ang mabilis na kumakalat dahil sa Facebook, TikTok, X, at iba pang online platforms. Dahil dito, ang isang bagong ekspresyon ay maaaring maging popular sa napakaikling panahon.' },
  { n:'04', t:'🇵🇭 Ang Pambansa ay ginagamit upang mas madaling magkaunawaan ang mga Pilipino.', d:'Karaniwan itong makikita at maririnig sa paaralan, pamahalaan, balita, at iba pang pormal na komunikasyon. Layunin nitong maging malinaw at madaling maunawaan ng mas nakararami.' },
  { n:'05', t:'📖 Masining ang Pampanitikan.', d:'Hindi lamang literal na kahulugan ng mga salita ang mahalaga sa Pampanitikan. Maaari itong gumamit ng tayutay, simbolismo, at matatalinghagang pahayag upang gawing mas makulay at makapangyarihan ang pagpapahayag.' },
  { n:'06', t:'🗺️ Ang Lalawiganin ay nagpapakita ng pagkakaiba-iba ng kultura sa Pilipinas.', d:'May mga salita at paraan ng pagsasalita na karaniwan sa isang partikular na rehiyon ngunit maaaring hindi agad maunawaan sa ibang lugar. Kaya ang Lalawiganin ay mahalagang bahagi rin ng pagkakakilanlan ng isang pamayanan.' },
  { n:'07', t:'💬 Ang Kolokyal ay madalas na pinaikli.', d:'Sa pang-araw-araw na pag-uusap, natural nating pinaiikli ang ilang salita. Halimbawa, ang “nasaan” ay maaaring maging “nasan,” at ang “sa akin” ay nagiging “sa\'kin.” Ginagawa nitong mas mabilis at natural ang kaswal na usapan.' },
  { n:'08', t:'😎 Ang salitang Balbal ay maaaring mawala sa uso.', d:'Dahil mabilis magbago ang mga uso, ang isang salitang sikat ngayon ay maaaring hindi na gaanong gamitin pagkalipas ng ilang taon. Maaari rin itong mapalitan ng bagong salitang likha ng susunod na henerasyon.' },
  { n:'09', t:'🔄 Maaaring magpalit-palit ng antas ng wika ang isang tao sa loob lamang ng isang araw.', d:'Halimbawa, maaaring gumamit ang isang estudyante ng Pambansa habang nag-uulat, Pampanitikan habang nagsusulat ng tula, Kolokyal habang kausap ang kaklase, at Balbal habang nakikipagbiruan sa barkada.' },
  { n:'10', t:'✨ Walang iisang antas ng wika na angkop sa lahat ng pagkakataon.', d:'Ang mahalaga ay ang pagiging angkop ng wika sa konteksto. Ang Balbal ay maaaring natural sa barkadahan ngunit hindi angkop sa isang pormal na akademikong papel. Samantala, ang napakapormal na pananalita ay maaaring maging hindi natural sa simpleng kuwentuhan.' }
];

/* -------- 5. RESEARCHERS DATA -------- */
const researchers = {
  m1: {
    name: 'John Ivan Amin-Amin',
    role: 'Punong Mananaliksik',
    photo: 'assets/Ivan.jpeg',
    color: '#ffc93c',
    bio: 'Pinamunuan ang buong pananaliksik—mula sa pagpili ng paksa, pagbuo ng balangkas, hanggang sa huling pagsusuri ng nilalaman. Namahala rin sa koordinasyon ng grupo at sa pagsusuri ng mga sanggunian.',
    moto: '"Ang wikang maingat na ginamit ay tulay sa mas malinaw na pag-unawa."',
    fb: 'https://www.facebook.com/share/1CXA228dKR/',
    ig: 'https://www.instagram.com/johnivanaminamin/'
  },
  m2: {
    name: 'Jenjelyn P. Abugadie',
    role: 'Miyembro',
    photo: 'assets/Abugadie.jpeg',
    color: '#51c7b8',
    bio: 'Katuwang sa pananaliksik, pagsusuri ng mga sanggunian, at pagbuo ng mga halimbawang ginamit sa bawat aralin.',
    moto: '"Bawat salita ay may bigkas na karapat-dapat pakinggan."',
    fb: 'https://www.facebook.com/profile.php?id=61589374227128',
    ig: 'https://www.instagram.com/jenjelynabugadie/'
  },
  m3: {
    name: 'Janina B. Esparar',
    role: 'Miyembro',
    photo: 'assets/Esparar.jpeg',
    color: '#ee5d46',
    bio: 'Tumulong sa pagsusulat, pag-e-edit, at pag-aayos ng nilalaman upang maging malinaw at angkop sa mag-aaral ang materyal.',
    moto: '"Ang wika ay hindi lamang salita—ito ay pagkatao."',
    fb: 'https://www.facebook.com/share/1DqJnDvJEe/',
    ig: 'https://www.instagram.com/janinaesparar/'
  },
  m4: {
    name: 'Jhadelle C. Jabilona',
    role: 'Miyembro',
    photo: 'assets/Jabilona.jpeg',
    color: '#3678e5',
    bio: 'Nag-ambag sa disenyo, layout, at visual na presentasyon ng mga aralin at interactive na bahagi ng materyal.',
    moto: '"Sa bawat antas ng wika, may kuwentong nais ipahayag."',
    fb: 'https://www.facebook.com/share/1Mr36C7ZyQ/',
    ig: 'https://www.instagram.com/jhadellejabilona/'
  },
  m5: {
    name: 'Kim Raiza C. Posadas',
    role: 'Miyembro',
    photo: 'assets/picture.png',
    color: '#8b5cf6',
    bio: 'Nakatulong sa pangangalap ng datos, pag-oorganisa ng nilalaman, at pagsusuri ng mga halimbawa ng antas ng wika.',
    moto: '"Ang pag-unawa sa wika ay pag-unawa rin sa sariling kultura."',
    fb: 'https://www.facebook.com/share/19KZXxGrmN/',
    ig: 'https://www.instagram.com/kimraizaposadas/'
  }
};

/* -------- 6. DOM SHORTCUTS -------- */
const $  = (s, p=document) => p.querySelector(s);
const $$ = (s, p=document) => [...p.querySelectorAll(s)];

/* -------- 7. LESSON DIALOG -------- */
const dialog  = $('#lessonDialog');
const dlgContent = $('#dialogContent');
let lastFocused = null;

if (dialog && dlgContent) {
  $$('.lesson-card').forEach(btn => btn.addEventListener('click', () => {
    const l = lessons[btn.dataset.lesson];
    if (!l) return;
    dlgContent.innerHTML = `
      <article class="dialog-inner">
        <span class="tag">${l.tag}</span>
        <h2 id="dialogTitle">${l.title}</h2>
        ${l.body}
      </article>`;
    lastFocused = document.activeElement;
    dialog.showModal();
    setTimeout(() => $('.dialog-close', dialog)?.focus(), 30);
  }));

  $('.dialog-close', dialog)?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => { if (lastFocused) lastFocused.focus(); });

  dialog.addEventListener('keydown', e => {
    if (e.key !== 'Tab') return;
    const focusables = $$('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])', dialog)
      .filter(el => !el.disabled && el.offsetParent !== null);
    if (!focusables.length) return;
    const first = focusables[0], last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
}

/* -------- 8. GLOSSARY DIALOG -------- */
const glossaryDialog  = $('#glossaryDialog');
const glossaryContent = $('#glossaryContent');
let lastGlossaryFocused = null;

if (glossaryDialog && glossaryContent) {
  $('.dialog-close', glossaryDialog)?.addEventListener('click', () => glossaryDialog.close());
  glossaryDialog.addEventListener('click', e => { if (e.target === glossaryDialog) glossaryDialog.close(); });
  glossaryDialog.addEventListener('close', () => { if (lastGlossaryFocused) lastGlossaryFocused.focus(); });
  glossaryDialog.addEventListener('keydown', e => {
    if (e.key !== 'Tab') return;
    const focusables = $$('button, [href], input, [tabindex]:not([tabindex="-1"])', glossaryDialog)
      .filter(el => !el.disabled && el.offsetParent !== null);
    if (!focusables.length) return;
    const first = focusables[0], last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
}

/* -------- 9. MEMBER DIALOG -------- */
const memberDialog  = $('#memberDialog');
const memberContent = $('#memberContent');
let lastFocusedMember = null;

if (memberDialog && memberContent) {
  $$('.researcher-card').forEach(card => {
    card.addEventListener('click', () => {
      const data = researchers[card.dataset.member];
      if (!data) return;

      const hasFb = data.fb && data.fb !== '#';
      const hasIg = data.ig && data.ig !== '#';

      memberContent.innerHTML = `
        <div class="member-dialog-inner">
          <div class="member-photo-large" style="--av:${data.color}">
            <img src="${data.photo}" alt="Litrato ni ${data.name}">
          </div>
          <div class="member-content-body">
            <span class="member-tag">${data.role}</span>
            <h2 id="memberName">${data.name}</h2>
            <p class="member-bio">${data.bio}</p>

            ${data.moto ? `
              <div class="member-moto">
                <span class="member-moto-label">Moto</span>
                <p>${data.moto}</p>
              </div>
            ` : ''}

            ${(hasFb || hasIg) ? `
              <div class="member-socials">
                ${hasFb ? `<a href="${data.fb}" target="_blank" rel="noopener" class="social-link fb" aria-label="Facebook">Facebook</a>` : ''}
                ${hasIg ? `<a href="${data.ig}" target="_blank" rel="noopener" class="social-link ig" aria-label="Instagram">Instagram</a>` : ''}
              </div>
            ` : ''}
          </div>
        </div>`;
      lastFocusedMember = document.activeElement;
      memberDialog.showModal();
      setTimeout(() => memberDialog.querySelector('.dialog-close')?.focus(), 30);
    });
  });
  memberDialog.querySelector('.dialog-close')?.addEventListener('click', () => memberDialog.close());
  memberDialog.addEventListener('click', e => { if (e.target === memberDialog) memberDialog.close(); });
  memberDialog.addEventListener('close', () => { if (lastFocusedMember) lastFocusedMember.focus(); });
}

/* -------- 10. QUIZ ENGINE -------- */
/* -------- 10. QUIZ ENGINE (random 20 mula sa pool, persistent sa refresh) -------- */
const quizCard = $('#quizCard');
if (quizCard) {
  let index = 0, score = 0, chosen = false;
  let timerId = null, timeLeft = 60;
  const TIMER_SECONDS = 60;

  const count       = $('#quizCount');
  const bar         = $('#progressBar');
  const scenarioEl  = $('#scenario');
  const questionEl  = $('#question');
  const answersEl   = $('#answers');
  const feedbackEl  = $('#feedback');
  const nextBtn     = $('#nextBtn');
  const scorePrev   = $('#scorePreview');
  const timerEl     = $('#timerDisplay');
  const timerToggle = $('#timerToggle');
  const resultCard  = $('#resultCard');

  // Ang session array (20 random questions) - ito ang lalaruin
  let quiz = [];

  // Fisher-Yates shuffle
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Gumawa ng bagong random session
  function createNewSession() {
    return {
      questions: shuffle(quizPool).slice(0, TOTAL_QUESTIONS),
      index: 0,
      score: 0,
      chosen: false,
      selected: null,     // index ng napiling sagot sa current question
      completed: false,   // tapos na ba ang buong quiz
      ts: Date.now()
    };
  }

  // I-save ang session sa localStorage
  function saveSession() {
    try {
      localStorage.setItem(STORAGE_SESSION, JSON.stringify({
        questions: quiz,
        index, score, chosen,
        selected: chosen ? selectedAnswer : null,
        completed: !resultCard.hidden,
        ts: Date.now()
      }));
    } catch {}
  }

  // I-load ang session mula sa localStorage
  function loadSession() {
    try {
      const raw = localStorage.getItem(STORAGE_SESSION);
      if (!raw) return null;
      const d = JSON.parse(raw);
      if (!d || !Array.isArray(d.questions) || d.questions.length !== TOTAL_QUESTIONS) return null;
      return d;
    } catch { return null; }
  }

  let selectedAnswer = null;

  function renderQuestion() {
    const item = quiz[index];
    if (!item) return;

    count.textContent = `Tanong ${index + 1} sa ${quiz.length}`;
    bar.style.width   = `${((index + 1) / quiz.length) * 100}%`;
    scenarioEl.textContent = item.s;
    questionEl.textContent = item.q;
    answersEl.innerHTML = '';

    item.a.forEach((ans, i) => {
      const b = document.createElement('button');
      b.className = 'answer';
      b.innerHTML = `<span class="key">${String.fromCharCode(65 + i)}</span><span>${ans}</span>`;
      b.addEventListener('click', () => selectAnswer(i, b));
      answersEl.appendChild(b);
    });

    // Kung may naunang sagot na (galing sa refresh), ibalik ang estado
    if (chosen && selectedAnswer !== null) {
      const btns = $$('.answer');
      btns.forEach((el, j) => {
        el.disabled = true;
        if (j === item.c) el.classList.add('correct');
      });
      if (selectedAnswer !== item.c && btns[selectedAnswer]) {
        btns[selectedAnswer].classList.add('wrong');
      }
      feedbackEl.innerHTML = selectedAnswer === item.c
        ? `<strong>Tama.</strong> ${item.e}`
        : `<strong>Hindi pa.</strong> ${item.e}`;
      nextBtn.disabled = false;
      scorePrev.textContent = score;
    } else {
      feedbackEl.textContent = '';
      nextBtn.disabled = true;
    }

    if (timerToggle.checked && !chosen) startTimer();
    else stopTimer();
  }

  function selectAnswer(i, btn) {
    if (chosen) return;
    chosen = true;
    selectedAnswer = i;
    stopTimer();
    const item = quiz[index];
    $$('.answer').forEach((el, j) => {
      el.disabled = true;
      if (j === item.c) el.classList.add('correct');
    });
    if (i === item.c) { score++; feedbackEl.innerHTML = `<strong>Tama.</strong> ${item.e}`; }
    else { btn.classList.add('wrong'); feedbackEl.innerHTML = `<strong>Hindi pa.</strong> ${item.e}`; }
    nextBtn.disabled = false;
    scorePrev.textContent = score;
    saveSession();
  }

  function startTimer() {
    stopTimer();
    timeLeft = TIMER_SECONDS;
    timerEl.hidden = false;
    timerEl.textContent = `${timeLeft}s`;
    timerId = setInterval(() => {
      timeLeft--;
      timerEl.textContent = `${timeLeft}s`;
      timerEl.classList.toggle('warn', timeLeft <= 10);
      if (timeLeft <= 0) {
        stopTimer();
        if (!chosen) {
          const item = quiz[index];
          chosen = true;
          selectedAnswer = null;
          $$('.answer').forEach((el, j) => {
            el.disabled = true;
            if (j === item.c) el.classList.add('correct');
          });
          feedbackEl.innerHTML = `<strong>Tapos na ang oras.</strong> ${item.e}`;
          nextBtn.disabled = false;
          saveSession();
        }
      }
    }, 1000);
  }
  function stopTimer() { clearInterval(timerId); timerId = null; }

  function showResult() {
    quizCard.hidden = true;
    resultCard.hidden = false;
    $('#finalScore').textContent = score;
    const pct = score / quiz.length;
    $('#resultTitle').textContent = pct >= .875 ? 'Mahusay kang bumasa ng konteksto!' :
                                    pct >= .625 ? 'Maganda ang pundasyon mo.' :
                                                  'Balikan natin ang mga module.';
    $('#resultText').textContent  = pct >= .875 ? 'Kaya mong iugnay ang antas ng wika sa tunay na sitwasyong komunikatibo.' :
                                    pct >= .625 ? 'Malinaw na sa iyo ang karamihan ng konsepto. Balikan ang paliwanag sa mga tanong na hindi nakuha.' :
                                                  'I-click muli ang mga larawang-aralin at ituon ang pansin sa kausap, layunin, lugar, at sitwasyon.';
    if (pct >= .875) fireConfetti();
    saveSession();
    resultCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  nextBtn.addEventListener('click', () => {
    index++;
    chosen = false;
    selectedAnswer = null;
    if (index < quiz.length) {
      saveSession();
      renderQuestion();
    } else {
      saveSession();
      showResult();
    }
  });

  $('#restartBtn').addEventListener('click', () => {
    // Bagong random 20
    const session = createNewSession();
    quiz = session.questions;
    index = 0; score = 0;
    chosen = false; selectedAnswer = null;
    scorePrev.textContent = '—';
    resultCard.hidden = true;
    quizCard.hidden   = false;
    saveSession();
    renderQuestion();
  });

  document.addEventListener('keydown', e => {
    if (dialog?.open || memberDialog?.open || glossaryDialog?.open) return;
    if (quizCard.hidden) return;
    const tag = document.activeElement.tagName;
    if (['INPUT','TEXTAREA','SELECT'].includes(tag)) return;
    const k = e.key.toLowerCase();
    const map = { a:0, b:1, c:2, d:3, e:4 };
    if (k in map) {
      const btns = $$('.answer');
      if (btns[map[k]] && !btns[map[k]].disabled) btns[map[k]].click();
    }
    if (e.key === 'Enter' && !nextBtn.disabled) nextBtn.click();
  });

  const shareBtn = $('#shareBtn');
  if (navigator.share) {
    shareBtn.hidden = false;
    shareBtn.addEventListener('click', () => {
      navigator.share({
        title: 'Antas ng Wika — Pagsusulit',
        text: `Nakuha ko ang ${score}/${quiz.length} sa pagsusulit tungkol sa Antas ng Wika!`,
        url: location.href
      }).catch(() => {});
    });
  }

  // ===== INIT: load existing o gumawa ng bagong session =====
  const saved = loadSession();
  if (saved) {
    // May ongoing o tapos na session — i-restore
    quiz = saved.questions;
    index = saved.index || 0;
    score = saved.score || 0;
    chosen = !!saved.chosen;
    selectedAnswer = (typeof saved.selected === 'number') ? saved.selected : null;

    if (saved.completed) {
      // Tapos na — ipakita ang result
      quizCard.hidden = true;
      resultCard.hidden = false;
      $('#finalScore').textContent = score;
      const pct = score / quiz.length;
      $('#resultTitle').textContent = pct >= .875 ? 'Mahusay kang bumasa ng konteksto!' :
                                      pct >= .625 ? 'Maganda ang pundasyon mo.' :
                                                    'Balikan natin ang mga module.';
      $('#resultText').textContent  = pct >= .875 ? 'Kaya mong iugnay ang antas ng wika sa tunay na sitwasyong komunikatibo.' :
                                      pct >= .625 ? 'Malinaw na sa iyo ang karamihan ng konsepto. Balikan ang paliwanag sa mga tanong na hindi nakuha.' :
                                                    'I-click muli ang mga larawang-aralin at ituon ang pansin sa kausap, layunin, lugar, at sitwasyon.';
      scorePrev.textContent = score;
    } else {
      // Ongoing — ituloy
      scorePrev.textContent = score;
      renderQuestion();
    }
  } else {
    // Walang session — gumawa ng bago
    const session = createNewSession();
    quiz = session.questions;
    index = 0; score = 0; chosen = false; selectedAnswer = null;
    saveSession();
    renderQuestion();
  }

  if (document.modelContext?.registerTool) {
    const ac = new AbortController();
    Promise.resolve(document.modelContext.registerTool({
      name: 'start_antas_ng_wika_quiz',
      title: 'Simulan ang pagsusulit',
      description: 'Buksan at i-reset ang pagsusulit (bagong random 20 tanong).',
      inputSchema: { type:'object', properties:{}, additionalProperties:false },
      annotations: { readOnlyHint:false, untrustedContentHint:false },
      execute() {
        const session = createNewSession();
        quiz = session.questions;
        index = 0; score = 0; chosen = false; selectedAnswer = null;
        scorePrev.textContent = '—';
        resultCard.hidden = true;
        quizCard.hidden = false;
        saveSession();
        renderQuestion();
        $('#pagsusulit').scrollIntoView();
        return { status:'started', questions: quiz.length };
      }
    }, { signal: ac.signal })).catch(() => {});
  }
}

/* -------- 11. NAV / MENU / THEME -------- */
const menu  = $('#menuBtn');
const links = $('#navLinks');
if (menu && links) {
  menu.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    menu.setAttribute('aria-expanded', open);
  });
  links.addEventListener('click', () => {
    links.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  });
}

const themeToggle = $('#themeToggle');
if (themeToggle) {
  const themeIcon = themeToggle.querySelector('.theme-icon');
  function applyTheme(t) {
    document.body.classList.toggle('dark', t === 'dark');
    if (themeIcon) themeIcon.textContent = t === 'dark' ? '☀️' : '🌙';
    document.documentElement.style.colorScheme = t === 'dark' ? 'dark' : 'light';
  }
  applyTheme(localStorage.getItem('antas_theme') || 'light');
  themeToggle.addEventListener('click', () => {
    const next = document.body.classList.contains('dark') ? 'light' : 'dark';
    localStorage.setItem('antas_theme', next);
    applyTheme(next);
  });
}

/* -------- 12. STICKY NAV HIDE -------- */
const navWrap = $('#navWrap');
if (navWrap) {
  let lastY = window.scrollY;
  let navHidden = false;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 120) {
      if (y > lastY + 4 && !navHidden) { navWrap.classList.add('nav-hidden'); navHidden = true; }
      else if (y < lastY - 4 && navHidden) { navWrap.classList.remove('nav-hidden'); navHidden = false; }
    } else {
      navWrap.classList.remove('nav-hidden');
      navHidden = false;
    }
    lastY = y;
  }, { passive: true });
}

/* -------- 13. ACTIVE NAV LINK -------- */
const navMap = {};
$$('[data-nav]').forEach(a => navMap[a.dataset.nav] = a);
const sections = ['gabay','aralin','talasalitaan','funfact','pagsusulit'];
if (sections.length) {
  const navIO = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        Object.values(navMap).forEach(a => a.classList.remove('active'));
        const link = navMap[en.target.id];
        if (link) link.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(id => { const el = document.getElementById(id); if (el) navIO.observe(el); });
}

/* -------- 14. REVEAL ANIMATIONS -------- */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: .12 });
$$('.reveal').forEach(x => io.observe(x));

/* -------- 15. GLOSSARY (grid cards + modal) -------- */
function renderGlossary() {
  const list = $('#glossaryList');
  if (!list) return;

  list.innerHTML = glossary.map((g, i) => `
    <button class="glossary-card" data-glossary="${i}">
      <span class="glossary-card-tag">Termino</span>
      <strong>${g.t}</strong>
      <em>${g.e}</em>
      <span class="glossary-card-hint">Tingnan ang kahulugan →</span>
    </button>
  `).join('');

  $$('.glossary-card').forEach(card => {
    card.addEventListener('click', () => {
      const g = glossary[+card.dataset.glossary];
      if (!g || !glossaryDialog) return;
      glossaryContent.innerHTML = `
        <div class="dialog-inner">
          <span class="tag">TALASALITAAN</span>
          <h2 id="glossaryTitle">${g.t}</h2>
          <p class="glossary-en"><em>${g.e}</em></p>
          <p>${g.d}</p>
        </div>`;
      lastGlossaryFocused = document.activeElement;
      glossaryDialog.showModal();
      setTimeout(() => glossaryDialog.querySelector('.dialog-close')?.focus(), 30);
    });
  });
}
renderGlossary();

/* -------- 16. FUN FACT CAROUSEL -------- */
/* -------- 16. FUN FACT CAROUSEL -------- */
(function initCarousel() {
  const track = $('#carouselTrack');
  const dotsWrap = $('#carouselDots');
  const prevBtn = $('.carousel-prev');
  const nextBtn = $('.carousel-next');
  const root = $('#funfactCarousel');
  if (!track || !root) return;

  track.innerHTML = funFacts.map(f => `
    <article class="carousel-slide">
      <span class="funfact-no">${f.n}</span>
      <h3>${f.t}</h3>
      <p>${f.d}</p>
    </article>
  `).join('');

  if (dotsWrap) {
    dotsWrap.innerHTML = funFacts.map((_, i) =>
      `<button class="carousel-dot${i === 0 ? ' active' : ''}" data-slide="${i}" aria-label="Pumunta sa fact ${i+1}"></button>`
    ).join('');
  }

  const slides = $$('.carousel-slide', track);
  const dots = $$('.carousel-dot');
  let current = 0;

  function goTo(i) {
    current = Math.max(0, Math.min(slides.length - 1, i));
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, j) => d.classList.toggle('active', j === current));
    if (prevBtn) prevBtn.disabled = current === 0;
    if (nextBtn) nextBtn.disabled = current === slides.length - 1;
  }

  if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));
  dots.forEach(d => d.addEventListener('click', () => goTo(+d.dataset.slide)));

  // Keyboard: global (naka-attach sa document, hindi sa root)
  document.addEventListener('keydown', e => {
    // Huwag harangin kung may bukas na dialog o nasa input
    if (document.querySelector('dialog[open]')) return;
    const tag = document.activeElement.tagName;
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(tag)) return;

    // Siguraduhing nasa viewport ang carousel bago tumugon
    const rect = root.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (!inView) return;

    if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(current - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); goTo(current + 1); }
  });

  // Swipe (touch)
  let startX = 0, startY = 0, tracking = false;
  track.addEventListener('touchstart', e => {
    if (e.touches.length !== 1) return;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    tracking = true;
  }, { passive: true });
  track.addEventListener('touchend', e => {
    if (!tracking) return;
    tracking = false;
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      dx < 0 ? goTo(current + 1) : goTo(current - 1);
    }
  }, { passive: true });

  goTo(0);
})();

/* -------- 17. CONFETTI -------- */
function fireConfetti() {
  const layer = $('#confetti');
  if (!layer) return;
  const colors = ['#ffc93c','#ee5d46','#51c7b8','#3678e5','#121842'];
  for (let i = 0; i < 60; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + '%';
    piece.style.background = colors[(Math.random() * colors.length) | 0];
    piece.style.animationDelay = (Math.random() * .5) + 's';
    piece.style.animationDuration = (1.6 + Math.random() * 1.4) + 's';
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    layer.appendChild(piece);
    setTimeout(() => piece.remove(), 3200);
  }
}

/* -------- 18. READING PROGRESS + BACK TO TOP -------- */
const readingBar = $('#readingBar');
const backTopBtn = $('#backTop');
function updateReading() {
  if (!readingBar) return;
  const h = document.documentElement;
  const max = h.scrollHeight - h.clientHeight;
  const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
  readingBar.style.width = pct + '%';
  if (backTopBtn) backTopBtn.hidden = h.scrollTop <= 600;
}
window.addEventListener('scroll', updateReading, { passive: true });
updateReading();
if (backTopBtn) {
  backTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* -------- 19. YEAR -------- */
const yearEl = $('#year');
if (yearEl) yearEl.textContent = new Date().getFullYear();