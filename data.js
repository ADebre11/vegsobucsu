const SITE_DATA = {
    brand: {
        name: "Debreczeni Anita",
        subtitle: "Polgári búcsúztató",
        tagline: "Személyre szabott, lélekmelengető és színvonalas búcsúztatás",
        logo: "assets/logo-arany-eletfa.png",
        phone: "+36 70 335 4440",
        phoneHref: "tel:+36703354440",
        email: "anita@vegsobucsu.hu",
        hours: "Minden hétköznap és hétvégén 8:00 – 20:00",
        location: "Budapest, Pest vármegye és országosan",
    },
    nav: [
        { label: "Kezdőlap", href: "#hero-mount" },
        { label: "Bemutatkozás", href: "#about-mount" },
        { label: "Szolgáltatások", href: "#services-mount" },
        { label: "Angyali üzenet", href: "#angelic-mount" },
        { label: "Blog", href: "#blog-mount" },
        { label: "Kapcsolat", href: "#contact-mount" },
    ],
    hero: {
        badge: "Okleveles szertartásvezető • Polgári búcsúztató",
        title: "Méltó, személyes <span>végső búcsú</span> szeretetben",
        subtitle:
            "Kérem, fogadja részvétemet! Személyre szabott, méltó polgári búcsúztatást vállalok Budapesten, Pest vármegyében és országosan – szívvel, empátiával és odafigyeléssel.",
        portrait: "assets/images/fooldal/vegsobucsu-debreczeni-anita-bucsuztato.webp",
        candleVideo: "assets/gif/egogyertya.webm",
        candleLabel: "Emlékezés lángja",
        primaryCta: "Hívás / Viber: +36 70 335 4440",
        secondaryCta: "Kapcsolatfelvétel",
    },
    about: {
        eyebrow: "Az emlékezés ereje",
        quote: "„Legvégül mindannyian csak történetekké válunk”",
        quoteAuthor: "Margaret Atwood",
        paragraphs: [
            "Mindannyiunk életében megtörténhet, hogy egy hozzátartozónk eltávozik az élők sorából. Szerettünket elveszíteni az emberi élet talán legnehezebb tapasztalása, és temetését megszervezni érzelmileg felettébb megterhelő, aprólékos és kimerítő feladat.",
            "Döntést kell hoznunk, amikor felmerül a kérdés: Hogyan búcsúzzunk el? A búcsúszertartás meghatározó, elemi erővel bíró része annak a napnak, amelyen végső búcsút veszünk. Nem mindegy, hogyan történik. Lehet tradicionális, formális – vallási elemekkel, vagy modern hangvételű, spirituális. Mindenre van lehetőség, kérés szerint.",
            "Igény esetén a hagyományostól eltérő helyszíneken is vállalok búcsúztatást, rugalmasan – Budapesten, Pest vármegyében, és az ország egész területén. Fontos tudni, hogy ha a végső búcsú méltó és teljes – az elengedés is könnyebb.",
        ],
        callout:
            "Fontos tudni: temetkezési vállalkozástól függetlenül Ön egyénileg is megválaszthatja a búcsúztató személyét!",
    },
    services: [
        {
            id: "polgari-bucsuztatas",
            title: "Polgári búcsúztatás",
            shortDesc:
                "Egyedi, az elhunyt személyiségét és életútját hűen tükröző búcsúbeszéd és méltó szertartás temetőkben és ravatalozókban.",
            image: "assets/images/fooldal/polgari-bucsuztato.webp",
            modalContent: [
                "Több mint egy évtizede vezetek és koordinálok szertartásokat. Búcsúztatónak lenni sokkal több annál, mint kiállni a gyászolók elé és felolvasni néhány mondatot. Mindig van mit mesélni arról – KI volt, aki elhunyt?",
                "Tapintatot, nagyfokú empátiát és elhivatottságot igényel bemutatni valakinek a karakterét. Célom, hogy minden szertartás hűen tükrözze az elhunyt életútját, szeretetét, melegségét – és az elengedés mellett fogódzót nyújtson az itt maradt hozzátartozóknak.",
                "Amit mindig magammal viszek a búcsúztatásra: pontosság, empátia, melegség, érthető tiszta beszéd – és ha az elhunyt személyisége megkívánja, egy csipet kedves humor is belefér a visszaemlékezésbe.",
            ],
            gallery: [
                "assets/images/polgari-bucsuztatas/polgari-bucsuztatas-01.webp",
                "assets/images/polgari-bucsuztatas/polgari-bucsuztatas-02.webp",
                "assets/images/polgari-bucsuztatas/polgari-bucsuztatas-03.webp",
                "assets/images/polgari-bucsuztatas/polgari-bucsuztatas-04.webp",
            ],
        },
        {
            id: "bucsuztatas-szervezese",
            title: "Búcsúztatás szervezése",
            shortDesc:
                "Meghitt, nyugodt elköszönés alternatív helyszínen (étterem különterme, rendezvényhelyszín, otthoni kert) halotti torral egybekötve.",
            image: "assets/images/fooldal/bucsuztatas-szervezese.webp",
            modalContent: [
                "A búcsúztató szertartás nincs temetőhöz kötve. A temetők ravatalozóiban nem minden esetben van lehetőség a nyugodt és meghitt búcsúra, és az időtartam is korlátozott.",
                "Egyre gyakoribb, hogy egy külső, alternatív helyszínen történik a búcsúztatás – például egy étterem különtermében, egy intimebb hangulatú rendezvényhelyszínen vagy akár saját otthonukban, kertben, teraszon.",
                "Rendezvényszervezői tapasztalatomnak köszönhetően búcsúztatói rendezvényének teljes körű szervezését – a halotti torral egybekötve – készséggel vállalom!",
            ],
            gallery: [
                "assets/images/bucsuztatas-szervezese/bucsuztatas-szervezese-01.webp",
                "assets/images/bucsuztatas-szervezese/bucsuztatas-szervezese-02.webp",
                "assets/images/bucsuztatas-szervezese/bucsuztatas-szervezese-03.webp",
                "assets/images/bucsuztatas-szervezese/bucsuztatas-szervezese-04.webp",
            ],
        },
        {
            id: "bucsu-a-kiskedvenctol",
            title: "Búcsú a kiskedvenctől",
            shortDesc:
                "Méltóságteljes, szeretetteljes elköszönés hűséges családtagunktól, kutyustól vagy cicától – amely csak róla szól.",
            image: "assets/images/bucsu-a-kedvencektol/bucsu-a-kiskedvenctol-szolgaltatas.webp",
            modalContent: [
                "„Ő nem csak a háziállatunk. Ő családtag!” Akinek volt már háziállata, tudja, mennyire fáj kis kedvencünk elvesztése. Egy kutya, egy cica vagy egy nyuszi feltétel nélküli szeretetével életünk részévé válik.",
                "Egy szeretett kiskedvenctől is lehet szépen, méltósággal és szeretettel elbúcsúzni: felidézni a közös történeteket, a kedves szokásait, mindazt, amiért megismételhetetlen volt.",
                "A búcsú fájdalmát nem tudom elvenni, de segítek abban, hogy a fájdalom mellett helyet kapjon a szeretet és a hála – mert akit igazán szerettünk, azt a szívünkben hordozzuk örökké.",
            ],
            gallery: [
                "assets/images/bucsu-a-kedvencektol/kiskutya-csalad.webp",
                "assets/images/bucsu-a-kedvencektol/cica-nyugdijasok.webp",
                "assets/images/bucsu-a-kedvencektol/kutya-csalad.webp",
                "assets/images/bucsu-a-kedvencektol/mancsok.webp",
            ],
        },
    ],
    angelic: {
        eyebrow: "Lelki útravaló",
        title: "Angyali üzenet",
        subtitle: "Egy csendes pillanat a megnyugvásra, az emlékezésre és a belső békére.",
        youtubeEmbed: "https://www.youtube.com/embed/XWDISxygx44",
    },
    blogs: [
        {
            id: "oltozkodesi-utmutato",
            date: "2026. 11. 03.",
            title: "Milyen ruhában illik megjelenni egy búcsúztatáson? – Öltözködési útmutató",
            excerpt:
                "Kötelező a fekete ruha? Mit viseljünk polgári búcsúztatáson, és mire figyeljünk az évszakok, a gyermekek vagy a család különleges kérései esetén?",
            cover: "assets/images/blog/milyen-ruhaban-illik-megjelenni-egy-bucsuztatason/4.BLOG-CIMADO-FOTO.webp",
            gallery: [
                "assets/images/blog/milyen-ruhaban-illik-megjelenni-egy-bucsuztatason/4.BLOG-FOTO-01.webp",
                "assets/images/blog/milyen-ruhaban-illik-megjelenni-egy-bucsuztatason/4.BLOG-FOTO-03.webp",
                "assets/images/blog/milyen-ruhaban-illik-megjelenni-egy-bucsuztatason/4.BLOG-FOTO-05.webp",
            ],
            sections: [
                {
                    heading: "Kötelező-e a fekete szín?",
                    body: "Nem. Bár a fekete a hagyományos gyászszín, a sötétkék, grafitszürke, mélybarna vagy sötétzöld szintén elegáns és visszafogott választás. A lényeg, hogy az öltözék tiszta, rendezett és ne hivalkodó legyen.",
                },
                {
                    heading: "Amikor a család különleges öltözetet kér polgári búcsúztatáson",
                    body: "Előfordulhat, hogy a család az elhunyt személyiségét tükrözve világos ruhát vagy az elhunyt kedvenc színét kéri. Ezek a kérések nem a tisztelet hiányát jelzik, hanem a szeretet és az emlékezés szép kifejeződései – érdemes tiszteletben tartani őket.",
                },
                {
                    heading: "Cipő, időjárás és gyermekek",
                    body: "Temetőkben füvön, kavicsos úton kényelmes, zárt, alacsony sarkú cipő ajánlott. Gyermekek számára nem szükséges szigorú fekete ruha: egy tiszta, kényelmes, visszafogott színű öltözet teljesen megfelelő. A legfontosabb mindig a jelenlétünk és az együttérzésünk.",
                },
            ],
        },
        {
            id: "mit-kell-tenni-halalesetkor",
            date: "2026. 10. 01.",
            title: "Mit kell tenni, ha meghal egy hozzátartozónk? – Lépésről lépésre",
            excerpt:
                "Az első teendőktől a hivatalos ügyintézésen át a személyes búcsúztatásig: egy kis kapaszkodó, hogy a nehéz időszakban lépésről lépésre haladhassunk.",
            cover: "assets/images/blog/3-mit-kell-tenni-ha-meghal-egy-hozzatartozonk/Cimado-fotomontazs-final.webp",
            gallery: [
                "assets/images/blog/3-mit-kell-tenni-ha-meghal-egy-hozzatartozonk/3.Blog-Foto01.webp",
                "assets/images/blog/3-mit-kell-tenni-ha-meghal-egy-hozzatartozonk/3.Blog-Foto04.webp",
                "assets/images/blog/3-mit-kell-tenni-ha-meghal-egy-hozzatartozonk/3.Blog-Foto08.webp",
            ],
            sections: [
                {
                    heading: "1. A halál megállapítása és a fontos iratok összegyűjtése",
                    body: "Otthoni váratlan halálesetnél orvost/mentőt kell hívni, kórházi esetben az intézmény ad tájékoztatást. Érdemes előkeresni az elhunyt személyi igazolványát, lakcím- és TAJ-kártyáját, születési/házassági anyakönyvi kivonatát.",
                },
                {
                    heading: "2. Temetkezési szolgáltató és a búcsúszertartás megtervezése",
                    body: "Fontos átgondolni, hogy temetés vagy hamvasztás legyen, milyen zenék, versek vagy személyes történetek hangozzanak el. Egy tapasztalt polgári búcsúztató segít abban, hogy a család emlékeiből méltó, személyes búcsúbeszéd szülessen.",
                },
                {
                    heading: "3. Nekünk is szabad gyászolnunk",
                    body: "A búcsúztatás napján érdemes kijelölni valakit a gyakorlati kérdések kezelésére, hogy a legközelebbi hozzátartozók jelen tudjanak lenni és méltón el tudjanak köszönni. A gyász nem feladatlista – minden ember megérdemli, hogy ne csak elbúcsúzzanak tőle, hanem emlékezzenek is rá.",
                },
            ],
        },
        {
            id: "a-halal-ezer-arca",
            date: "2026. 09. 01.",
            title: "A halál ezer arca – ahogyan a világ különböző kultúrái búcsúznak",
            excerpt:
                "Mexikótól Japánon és Tibeten át Ghánáig és Indonéziáig: különböző kultúrák egészen másképpen búcsúznak, mégis ugyanazt keresik – hogyan őrizhetjük meg azt, aki már nincs velünk?",
            cover: "assets/images/blog/2-a-halal-ezer-arca/BLOG-CIMFOTO.webp",
            gallery: [
                "assets/images/blog/2-a-halal-ezer-arca/MEXIKO.webp",
                "assets/images/blog/2-a-halal-ezer-arca/JAPAN.webp",
                "assets/images/blog/2-a-halal-ezer-arca/TIBET.webp",
                "assets/images/blog/2-a-halal-ezer-arca/INDIA.webp",
            ],
            sections: [
                {
                    heading: "Mexikó & Japán – az emlékezés ünnepe és a cseresznyevirág tanítása",
                    body: "Mexikóban a Día de Muertos az emlékezés ünnepe: az oltárokon fényképek, gyertyák és az elhunyt kedvenc ételei idézik meg, hogy az ember addig él, amíg kimondják a nevét. Japánban a mono no aware érzése arra tanít, hogy minden mulandó – és éppen ezért értékes minden együtt töltött pillanat.",
                },
                {
                    heading: "Tibet, India, Ghána, Madagaszkár, Bhután és Indonézia",
                    body: "Míg Tibetben az elengedést tanulják, Indiában a Gangesz partján az átmenetet látják benne. Ghánában az elhunyt személyiségét tükröző különleges koporsók mesélnek az életéről, Bhutánban pedig a végesség tudatosítása segít abban, hogy ma mondjuk ki: Szeretlek! Köszönöm!",
                },
                {
                    heading: "Mit taníthatnak nekünk ezek a kultúrák?",
                    body: "Nincs egyetlen 'helyes' módja a gyásznak. A temetési szertartás valójában arról szól, hogyan őrizzük meg a szeretetet és a kapcsolatot azzal, aki az életünk része volt – mert emlékezni a legszebb válasz az elmúlásra.",
                },
            ],
        },
        {
            id: "felkeszules-a-halalra",
            date: "2026. 08. 01.",
            title: "Gondolatok az elmúlásról, a búcsúról és arról, ami a szeretteinkből velünk marad",
            excerpt:
                "A halál az emberi élet legnagyobb bizonyossága, mégis erről a legnehezebb beszélni. Gondolatok arról, hogyan készülhetünk – nem is annyira a halálra, mint inkább az életre.",
            cover: "assets/images/blog/felkeszules-a-halalra/1.FOFOTO.webp",
            gallery: [
                "assets/images/blog/felkeszules-a-halalra/2.ELETUT.webp",
                "assets/images/blog/felkeszules-a-halalra/7.BESZELGETES.AZ.ELMULASROL.webp",
                "assets/images/blog/felkeszules-a-halalra/8.IDOSEMBER.webp",
            ],
            sections: [
                {
                    heading: "Nem a halálra, hanem az életre kell felkészülnünk",
                    body: "Gyakran úgy élünk, mintha az idő végtelen lenne – halogatjuk a találkozásokat, a telefonhívásokat, az ölelést és a kimondatlan mondatokat. Pedig ezekről beszélni nem hozza közelebb az elmúlást, csak könnyebbé teszi az egymásra figyelést.",
                },
                {
                    heading: "Amit magunk után hagyunk",
                    body: "Életünk végén nem az számít, mit birtokoltunk, hanem az, hogy kit szerettünk, kinek fogtuk meg a kezét és ki emlékszik majd a nevetésünkre. Mert egyszer mindannyian elmegyünk, de a szeretet, amelyet egymásnak adtunk, tovább él azokban, akik itt maradnak.",
                },
            ],
        },
    ],
    contact: {
        eyebrow: "Bizalommal fordulhat hozzám",
        title: "Elérhetőségek és egyeztetés",
        subtitle:
            "További információért vagy árajánlatért keressen bizalommal telefonon vagy Viber üzenetben minden nap 8:00 és 20:00 óra között. Amennyiben nem tudom felvenni, visszahívom.",
    },
    legal: {
        aszf: [
            "Általános Szerződési Feltételek (Hatályos: 2026. szeptember 3-tól)",
            "Szolgáltató: Debreczeni Anita | E-mail: anita@vegsobucsu.hu | Telefon: +36 70 335 4440",
            "A kapcsolatfelvétel telefonon vagy e-mailben történhet. A megkeresés önmagában nem hoz létre szerződést; a részleteket – időpontot, helyszínt, feladatokat és díjazást – a felek minden esetben egyedileg egyeztetik és igazolják vissza.",
            "A szolgáltatás célja személyre szabott, méltó polgári búcsúztatás létrehozása a hozzátartozóktól kapott információk és kérések alapján. Vis maior és lemondási feltételek az egyedi megállapodás szerint érvényesek.",
        ],
        impresszum: [
            "Weboldal üzemeltetője: Debreczeni Anita",
            "E-mail: anita@vegsobucsu.hu | Telefon: +36 70 335 4440",
            "Tárhelyszolgáltató: ATW Internet Kft. (H-1138 Budapest, Esztergomi út 66. fsz. 1., info@atw.co.hu, +36 1 600 0289)",
            "Figyelem! A honlapon található tartalom, szöveg, fotók, grafikák kizárólagosan Debreczeni Anita tulajdonát képezik, és szerzői jogi védelem alatt állnak.",
        ],
    },
};
