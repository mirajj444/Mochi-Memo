const products = [
  {
    id: 1,
    name: "Kawaii Animals Pencil Erasers",
    description:
      "Un set adorabil de radiere sub formă de animăluțe, perfect pentru școală sau cadouri.",
    filter: "Erasers",
    category: "Erasers",
    collection: "",
    price: 3.19,
    rating: 4.8,
    reviews: 903,
    image:
      "https://i.etsystatic.com/32109713/r/il/19ac0d/5663008680/il_1588xN.5663008680_pxs7.jpg",
  },
  {
    id: 2,
    name: "Space Stars Alien Erasers",
    description: "Radiere extraterestre cu design amuzant și temă galactică.",
    filter: "Erasers",
    category: "Erasers",
    collection: "",
    price: 4.19,
    rating: 4.3,
    reviews: 128,
    image:
      "https://i.etsystatic.com/32109713/r/il/02b00f/5662619746/il_1588xN.5662619746_t4ab.jpg",
  },
  {
    id: 3,
    name: "Fruit Slices Erasers",
    description:
      "Radiere colorate și veselte sub formă de felii de fructe suculente.",
    filter: "Erasers",
    category: "Erasers",
    collection: "",
    price: 3.54,
    rating: 4.7,
    reviews: 305,
    image:
      "https://i.etsystatic.com/32109713/r/il/e3b91a/5483276943/il_1588xN.5483276943_7h6m.jpg",
  },
  {
    id: 4,
    name: "Heart Shaped Erasers",
    description:
      "Radiere delicate în formă de inimioară care adaugă farmec oricărui penar.",
    filter: "Erasers",
    category: "Erasers",
    price: 2.99,
    rating: 4.2,
    reviews: 406,
    image:
      "https://i.etsystatic.com/32109713/r/il/382441/5662786178/il_1588xN.5662786178_hr85.jpg",
  },
  {
    id: 5,
    name: "Dinosaur Erasers",
    description:
      "Radiere simpatice cu dinozauri pentru iubitorii de aventuri preistorice.",
    filter: "Erasers",
    category: "Erasers",
    collection: "",
    price: 3.68,
    rating: 4.5,
    reviews: 428,
    image:
      "https://i.etsystatic.com/32109713/r/il/e37172/5687926531/il_1588xN.5687926531_6ife.jpg",
  },
  {
    id: 6,
    name: "Pastel Stars Erasers",
    description:
      "Un set nostalgic de radiere colectabile din anii '80, inspirate din desene animate.",
    filter: "Erasers",
    category: "Erasers",
    collection: "",
    price: 3.99,
    rating: 4.2,
    reviews: 122,
    image:
      "https://i.etsystatic.com/32109713/r/il/42340a/5662995700/il_1588xN.5662995700_17q3.jpg",
  },
  {
    id: 7,
    name: "80s Vintage set of 12 collectable erasers",
    filter: "Erasers",
    category: "Erasers",
    collection: "Vintage",
    price: 11.87,
    rating: 4.9,
    reviews: 14,
    image:
      "https://i.etsystatic.com/23837629/r/il/18ec52/6831285388/il_1588xN.6831285388_pdvc.jpg",
  },
  {
    id: 8,
    name: "80s Vintage set of 12 erasers yellow",
    description:
      "Radiere retro galbene din anii '80, ideale pentru colecționari.",
    filter: "Erasers",
    category: "Erasers",
    collection: "Vintage",
    price: 5.83,
    rating: 4.4,
    reviews: 12,
    image:
      "https://i.etsystatic.com/23837629/r/il/e9f4f4/6879209825/il_1588xN.6879209825_jtuh.jpg",
  },
  {
    id: 9,
    name: "Sanrio Character Ballpoint Pen",
    description:
      "Stilou oficial Sanrio cu personaje precum Hello Kitty, Kuromi și My Melody, cu cerneală neagră 0.5mm și charm decorativ.",
    filter: "Pens & Pencils",
    category: "Pens",
    collection: "Sanrio",
    price: 6.99,
    rating: 4.7,
    reviews: 128,
    image:
      "https://kawaiipenshop.com/cdn/shop/products/Sanrio-Character-Ballpoint-Pen-Kuromi-My-Melody-Hello-Kitty-Little-Twin-Stars-Cinnamoroll-Pochacco-Pompompurin-Kawaii-Pen-Themed-Ballpoint-Pen-25_48999536-ef54-4364-861f-d9e8b1f94b25_1024x1024.png?v=1747252366",
  },
  {
    id: 10,
    name: "Sanrio Spring Sakura Mini Pouch",
    description:
      "Pungă mini ediție limitată cu motive de cireș înflorit și personaje Sanrio brodate, perfectă pentru accesorii sau cosmetice.",
    filter: "Cases & Bags",
    category: "Purses",
    collection: "Sanrio",
    price: 24.99,
    rating: 4.9,
    reviews: 86,
    image:
      "https://kawaiipenshop.com/cdn/shop/files/Sanrio-Spring-Sakura-Mini-Pouch-Small-Bag-Mini-Sanrio-Characters-Cute-Toiletry-Bag-1_e9135996-4788-4876-9b57-c7ec9d0558c4_1024x1024.jpg?v=1747692876",
  },
  {
    id: 11,
    name: "Vintage Sanrio 2007 Hello Kitty Apple Diary Personal Notebook",
    description:
      "Jurnal Hello Kitty din 2007 cu tematică de măr, ideal pentru notițe personale.",
    filter: "Notebooks",
    category: "Notebooks",
    collection: "Vintage",
    price: 47.47,
    rating: 5,
    reviews: 8,
    image:
      "https://i.etsystatic.com/23837629/r/il/a29682/3921535790/il_1588xN.3921535790_9e02.jpg",
  },
  {
    id: 12,
    name: "Vintage Sanrio 2002 Hello Kitty Blue Angel Purse Wallet",
    description:
      "Portofel elegant vintage Sanrio în nuanțe de albastru deschis.",
    filter: "Cases & Bags",
    category: "Purses",
    collection: "Vintage",
    price: 77.13,
    rating: 4.8,
    reviews: 4,
    image:
      "https://i.etsystatic.com/23837629/r/il/bec477/6778183517/il_1588xN.6778183517_jf0l.jpg",
  },
  {
    id: 13,
    name: "80s Vintage Stypen Black Plastic Fountain Pen",
    description:
      "Stilou clasic negru Stypen din anii '80, cu design elegant și atemporal.",
    filter: "Pens & Pencils",
    category: "Fountain Pens",
    collection: "Vintage",
    price: 16.61,
    rating: 4.4,
    reviews: 14,
    image:
      "https://i.etsystatic.com/23837629/r/il/0127f5/5836544304/il_1588xN.5836544304_l5qq.jpg",
  },
  {
    id: 14,
    name: "80s Vintage Stypen Marbled Purple Plastic Fountain Pen",
    description:
      "Stilou violet cu efect marmurat din anii '80, pentru un scris cu stil.",
    filter: "Pens & Pencils",
    category: "Fountain Pens",
    collection: "Vintage",
    price: 16.61,
    rating: 4.6,
    reviews: 12,
    image:
      "https://i.etsystatic.com/23837629/r/il/eeda3c/4592942223/il_1588xN.4592942223_bmh0.jpg",
  },
  {
    id: 15,
    name: "1 box (40pcs) Cute Mini Fruit Rubber Erasers",
    description:
      "O cutie cu 40 de radiere miniaturale în formă de fructe, distractive și practice.",
    filter: "Erasers",
    category: "Erasers",
    collection: "",
    price: 6.65,
    rating: 3.8,
    reviews: 159,
    image:
      "https://i.etsystatic.com/31658233/r/il/590926/3561769784/il_1588xN.3561769784_m0rr.jpg",
  },
  {
    id: 16,
    name: "Beautiful Daisies flower Silicone Gel Pen",
    description:
      "Un stilou gel fermecător cu design floral, perfect pentru a aduce o notă de prospețime notițelor tale.",
    filter: "Pens & Pencils",
    category: "Gel Pens",
    collection: "",
    price: 3.99,
    rating: 4.1,
    reviews: 234,
    image:
      "https://i.etsystatic.com/31658233/r/il/d627d6/5451353859/il_1588xN.5451353859_c875.jpg",
  },
  {
    id: 17,
    name: "Capybara Silicone Gel Pen",
    description:
      "Stilou gel adorabil cu un capybara în vârf, ideal pentru iubitorii de animale.",
    filter: "Pens & Pencils",
    category: "Gel Pens",
    collection: "",
    price: 3.99,
    rating: 4.2,
    reviews: 344,
    image:
      "https://i.etsystatic.com/31658233/r/il/4a70a0/5869601372/il_1588xN.5869601372_qyva.jpg",
  },
  {
    id: 18,
    name: "Cat Paw Silicone Gel Pen",
    description:
      "Stilou gel cu o pisicuță pufoasă în vârf, pentru cei care adoră animalele.",
    filter: "Pens & Pencils",
    category: "Gel Pens",
    collection: "",
    price: 3.99,
    rating: 4.8,
    reviews: 444,
    image:
      "https://i.etsystatic.com/31658233/r/il/ca9a16/4712899203/il_1588xN.4712899203_753t.jpg",
  },
  {
    id: 19,
    name: "12pcs Popcorn Shaped Erasers",
    description:
      "Set de 12 radiere în formă de popcorn, distractive și practice pentru iubitorii de articole de papetărie tematice.",
    filter: "Erasers",
    category: "Erasers",
    collection: "",
    price: 6.65,
    rating: 3.4,
    reviews: 359,
    image:
      "https://i.etsystatic.com/31658233/r/il/526f9c/3649915562/il_1588xN.3649915562_1usw.jpg",
  },
  {
    id: 20,
    name: "Cute Candy Bag Cake Rubber Pencil Eraser",
    description:
      "Radieră delicată în formă de prăjitură, care aduce un strop de dulceață pe biroul tău.",
    filter: "Erasers",
    category: "Erasers",
    collection: "",
    price: 3.32,
    rating: 4.4,
    reviews: 119,
    image:
      "https://i.etsystatic.com/31658233/r/il/08682f/3846106277/il_1588xN.3846106277_fiph.jpg",
  },
  {
    id: 21,
    name: "Cherry Blossoms Bear Silicone Gel Pen",
    description:
      "Stilou gel cu un ursuleț și flori de cireș, inspirat din estetica delicată a primăverii japoneze.",
    filter: "Pens & Pencils",
    category: "Gel Pens",
    collection: "Blush Bloom",
    price: 3.99,
    rating: 4.2,
    reviews: 467,
    image:
      "https://i.etsystatic.com/31658233/r/il/5f3132/4744189557/il_1588xN.4744189557_lqrg.jpg",
  },
  {
    id: 22,
    name: "50 Downtown Girly Vintage Stickers",
    description:
      "Set de stickere vintage cu un farmec retro, perfecte pentru decorarea jurnalelor sau a laptopurilor.",
    filter: "Stickers",
    category: "Stickers",
    collection: ["Cherrywood Letters", "Vintage"],
    price: 2.84,
    rating: 4.6,
    reviews: 126,
    image:
      "https://i.etsystatic.com/56517486/r/il/7eb319/6559146671/il_1588xN.6559146671_j8gv.jpg",
  },
  {
    id: 23,
    name: "50 Vintage Coquette Red Girl Stickers",
    description:
      "Colecție de stickere în tonuri de roșu, cu ilustrații inspirate din stilul vintage coquet.",
    filter: "Stickers",
    category: "Stickers",
    collection: ["Cherrywood Letters", "Vintage"],
    price: 4.49,
    rating: 4.3,
    reviews: 89,
    image:
      "https://i.etsystatic.com/45541872/r/il/08955c/6686374271/il_1588xN.6686374271_oxf8.jpg",
  },
  {
    id: 24,
    name: "Italian Hand Crafted Leather Notepad",
    description:
      "Caiet elegant legat în piele, confecționat manual în Italia, pentru cei care apreciază calitatea superioară.",
    filter: "Notebooks",
    category: "Notepads",
    collection: ["Cherrywood Letters", "Vintage"],
    price: 35.6,
    rating: 4,
    reviews: 14,
    image:
      "https://i.etsystatic.com/18381727/r/il/4ca9b0/6639836514/il_1588xN.6639836514_dzwp.jpg",
  },
  {
    id: 25,
    name: "Vintage Advertising Notepad Royal Crown Cola",
    description:
      "Caiet retro cu design inspirat de reclamele clasice Royal Crown Cola, pentru iubitorii de nostalgie.",
    filter: "Notebooks",
    category: "Notepads",
    collection: ["Cherrywood Letters", "Vintage"],
    price: 12.3,
    rating: 4.9,
    reviews: 36,
    image:
      "https://i.etsystatic.com/14898969/r/il/629b26/6247413648/il_1588xN.6247413648_tso9.jpg",
  },
  {
    id: 26,
    name: "Vintage Parker 51 Fountain Pen",
    description:
      "Stilou Parker 51 vintage, o piesă de colecție pentru cunoscători, cu un design clasic și rafinat.",
    filter: "Pens & Pencils",
    category: "Fountain Pens",
    collection: ["Cherrywood Letters", "Vintage"],
    price: 153.46,
    rating: 5,
    reviews: 3,
    image:
      "https://i.etsystatic.com/17217478/r/il/8490ba/6953890015/il_1588xN.6953890015_qr9s.jpg",
  },
  {
    id: 27,
    name: "Strawberry Kewpie Sticker",
    description:
      "Sticker adorabil cu personajul Kewpie și căpșuni, într-un stil retro încântător.",
    filter: "Stickers",
    category: "Stickers",
    collection: "",
    price: 3.03,
    rating: 4.4,
    reviews: 225,
    image:
      "https://i.etsystatic.com/55493355/r/il/8c41ed/6505892478/il_1588xN.6505892478_f5ud.jpg",
  },
  {
    id: 28,
    name: "Strawberry Bunny Sticker",
    description:
      "Sticker cu un iepurel drăgălaș ținând o căpșună, plin de farmec și dulceață.",
    filter: "Stickers",
    category: "Stickers",
    collection: "",
    price: 3.03,
    rating: 4.8,
    reviews: 212,
    image:
      "https://i.etsystatic.com/55493355/r/il/e7f891/6636825049/il_1588xN.6636825049_pkuc.jpg",
  },
  {
    id: 29,
    name: "Strawberry Cat Locket Sticker",
    description:
      "Sticker cu o pisică și un lănțișor în formă de căpșună, ideal pentru decorarea jurnalelor sau a cărnțelelor.",
    filter: "Stickers",
    category: "Stickers",
    collection: "",
    price: 3.03,
    rating: 4.7,
    reviews: 245,
    image:
      "https://i.etsystatic.com/55493355/r/il/5d60a1/6543436022/il_1588xN.6543436022_ilrh.jpg",
  },
  {
    id: 30,
    name: "Stationary Set Vintage Notepad And Envelopes",
    description:
      "Set de papetărie vintage cu un caiet texturat și plicuri coordonate, perfect pentru scrisori și notițe elegante.",
    filter: "Notebooks",
    category: "Notepads",
    collection: "Vintage",
    price: 17.04,
    rating: 4.2,
    reviews: 128,
    image: "https://i.ebayimg.com/images/g/XW4AAeSwJ2FoN4cf/s-l1600.webp",
  },
  {
    id: 31,
    name: "Starlight Headphone Stand",
    description:
      "Suvet pentru căști cu design constelatii, care aduce un aer cosmic biroului tău.",
    filter: "Desk Accessories",
    category: "Headphone Stands",
    collection: "",
    price: 57.2,
    rating: 4.3,
    reviews: 427,
    image:
      "https://i.etsystatic.com/27054861/r/il/5e6f09/5876472922/il_1588xN.5876472922_tuva.jpg",
  },
  {
    id: 32,
    name: "Angel Wings Headphone Stand",
    description:
      "Suvet pentru căști în formă de aripi de înger, care aduce o atmosferă angelică spațiului tău de lucru.",
    filter: "Desk Accessories",
    category: "Headphone Stands",
    collection: "Blush Bloom",
    price: 57.2,
    rating: 4.7,
    reviews: 298,
    image:
      "https://i.etsystatic.com/27054861/r/il/c5ef45/5805181352/il_1588xN.5805181352_skhv.jpg",
  },
  {
    id: 33,
    name: "Daisy Headphone Stand",
    description:
      "Suvet pentru căști cu design floral, inspirat de margarete, perfect pentru cei care adoră natura.",
    filter: "Desk Accessories",
    category: "Headphone Stands",
    collection: "",
    price: 57.2,
    rating: 4.0,
    reviews: 187,
    image:
      "https://i.etsystatic.com/27054861/r/il/a0c167/5697475798/il_1588xN.5697475798_2l86.jpg",
  },
  {
    id: 34,
    name: "Heart Headphone Stand",
    description:
      "Suvet pentru căști în formă de inimă, care aduce o notă romantică biroului tău.",
    filter: "Desk Accessories",
    category: "Headphone Stands",
    collection: "Blush Bloom",
    price: 57.2,
    rating: 3.9,
    reviews: 276,
    image:
      "https://i.etsystatic.com/27054861/r/il/9164f9/5652719832/il_1588xN.5652719832_habu.jpg",
  },
  {
    id: 35,
    name: "Flake Headphone Stand",
    description:
      "Suvet pentru căști cu model de fulg de zăpadă, perfect pentru cei care adoră magia iernii.",
    filter: "Desk Accessories",
    category: "Headphone Stands",
    collection: "",
    price: 57.2,
    rating: 3.8,
    reviews: 142,
    image:
      "https://i.etsystatic.com/27054861/r/il/28bbbb/6456174207/il_1588xN.6456174207_eyqa.jpg",
  },
  {
    id: 36,
    name: "Fall Leaves Headphone Stand",
    description:
      "Suvet pentru căști cu motive de frunze de toamnă, care aduce culorile sezonului pe biroul tău.",
    filter: "Desk Accessories",
    category: "Headphone Stands",
    collection: "",
    price: 57.2,
    rating: 4.1,
    reviews: 203,
    image:
      "https://i.etsystatic.com/27054861/r/il/fff997/6341745501/il_1588xN.6341745501_9md5.jpg",
  },
  {
    id: 37,
    name: "Sunflower Headphone Stand",
    description:
      "Suvet pentru căști cu design de floarea-soarelui, care aduce bucuria verii în orice sezon.",
    filter: "Desk Accessories",
    category: "Headphone Stands",
    collection: "",
    price: 57.2,
    rating: 4.5,
    reviews: 354,
    image:
      "https://i.etsystatic.com/27054861/r/il/69607b/6240595748/il_1588xN.6240595748_cd5o.jpg",
  },
  {
    id: 38,
    name: "Monstera Headphone Stand",
    description:
      "Suvet pentru căști cu frunză de monstera, ideal pentru iubitorii de plante și design modern.",
    filter: "Desk Accessories",
    category: "Headphone Stands",
    collection: "",
    price: 57.2,
    rating: 3.6,
    reviews: 412,
    image:
      "https://i.etsystatic.com/27054861/r/il/365bd6/6278434452/il_1588xN.6278434452_cwts.jpg",
  },
  {
    id: 39,
    name: "Moon Headphone Stand",
    description:
      "Suvet pentru căști în formă de lună, perfect pentru cei fascinați de magia nopții și a cosmosului.",
    filter: "Desk Accessories",
    category: "Headphone Stands",
    collection: "",
    price: 57.2,
    rating: 4.4,
    reviews: 387,
    image:
      "https://i.etsystatic.com/27054861/r/il/8a6274/5879060587/il_1588xN.5879060587_20w2.jpg",
  },
  {
    id: 40,
    name: "Bat Headphone Stand",
    description:
      "Suvet pentru căști în formă de liliac, ideal pentru decorul de Halloween sau pentru cei pasionați de estetică gotică.",
    filter: "Desk Accessories",
    category: "Headphone Stands",
    collection: "",
    price: 57.2,
    rating: 4.2,
    reviews: 198,
    image:
      "https://i.etsystatic.com/27054861/r/il/8b8f1a/5853340077/il_1588xN.5853340077_erza.jpg",
  },
  {
    id: 41,
    name: "Sakura Headphone Stand",
    description:
      "Suvet pentru căști cu flori de cireș, inspirat de frumusețea primăverii japoneze.",
    filter: "Desk Accessories",
    category: "Headphone Stands",
    collection: "Blush Bloom",
    price: 57.2,
    rating: 4.9,
    reviews: 467,
    image:
      "https://i.etsystatic.com/27054861/r/il/5ed256/5791546157/il_1588xN.5791546157_p5xf.jpg",
  },
  {
    id: 42,
    name: "Blob Headphone Stand",
    description:
      "Suvet pentru căști cu design minimalist și linii curbe, perfect pentru birourile moderne.",
    filter: "Desk Accessories",
    category: "Headphone Stands",
    collection: "",
    price: 57.2,
    rating: 4.6,
    reviews: 543,
    image:
      "https://i.etsystatic.com/27054861/r/il/a71646/6309240879/il_1588xN.6309240879_olv2.jpg",
  },
  {
    id: 43,
    name: "Butterfly Bow Headphone Stand",
    description:
      "Suvet pentru căști cu fundiță și fluturi, care aduce o notă feminină și elegantă biroului tău.",
    filter: "Desk Accessories",
    category: "Headphone Stands",
    collection: "",
    price: 57.2,
    rating: 4.4,
    reviews: 587,
    image:
      "https://i.etsystatic.com/27054861/r/il/e009d5/6173638052/il_1588xN.6173638052_2u0g.jpg",
  },
  {
    id: 44,
    name: "Mecha Angel Wings Headphone Stand",
    description:
      "Suvet pentru căști cu aripi mecanizate de înger, perfect pentru pasionații de sci-fi și gaming.",
    filter: "Desk Accessories",
    category: "Headphone Stands",
    collection: "",
    price: 57.2,
    rating: 4.7,
    reviews: 156,
    image:
      "https://i.etsystatic.com/27054861/r/il/787fb5/6657995812/il_1588xN.6657995812_ot5k.jpg",
  },
  {
    id: 45,
    name: "The Cloud Pen Holder",
    description:
      "Suvet pentru pixuri în formă de nor, care aduce o atmosferă visătoare biroului tău.",
    filter: "Desk Accessories",
    category: "Pen Holders",
    collection: "",
    price: 19.07,
    rating: 4.5,
    reviews: 382,
    image:
      "https://i.etsystatic.com/27054861/r/il/fb7f1e/5921618849/il_1588xN.5921618849_fge8.jpg",
  },
  {
    id: 46,
    name: "Minecraft Animal Pen Holders",
    description:
      "Set de suporturi pentru pixuri cu animale din Minecraft, perfect pentru fanii jocului.",
    filter: "Desk Accessories",
    category: "Pen Holders",
    collection: "",
    price: 34.2,
    rating: 4.9,
    reviews: 512,
    image:
      "https://i.etsystatic.com/27054861/r/il/69a236/6849014008/il_1588xN.6849014008_1254.jpg",
  },
  {
    id: 47,
    name: "Frog Pen Holder",
    description:
      "Suvet pentru pixuri în formă de broscuță, adorabil și plin de farmec, perfect pentru iubitorii de animale.",
    filter: "Desk Accessories",
    category: "Pen Holders",
    collection: "",
    price: 19.07,
    rating: 4.7,
    reviews: 145,
    image:
      "https://i.etsystatic.com/27054861/r/il/ef4ad3/6288554543/il_1588xN.6288554543_gwo2.jpg",
  },
  {
    id: 48,
    name: "Lemon Notepad Set",
    description:
      "Set de caiete cu design de lămâi, care aduce prospețime și vitalitate pe biroul tău.",
    filter: "Notebooks",
    category: "Notepads",
    collection: "",
    price: 14.99,
    rating: 4.7,
    reviews: 112,
    image:
      "https://thehumblewildflower.com/cdn/shop/files/5-DSC05078_ba838bab-6d05-429a-b469-626ea812e8d6.jpg?v=1726528906&width=823",
  },
  {
    id: 49,
    name: "Blueberry Notepad Set",
    description:
      "Set de caiete cu design de afine, perfect pentru cei care adoră culorile vibrante și fructele.",
    filter: "Notebooks",
    category: "Notepads",
    collection: "",
    price: 12.95,
    rating: 4.3,
    reviews: 92,
    image:
      "https://thehumblewildflower.com/cdn/shop/files/5-DSC05067.jpg?v=1726529596&width=823",
  },
  {
    id: 50,
    name: "Strawberry Notepad Set",
    description:
      "Set de caiete cu căpșuni dulci și jucăușe, ideal pentru iubitorii de designuri fruity.",
    filter: "Notebooks",
    category: "Notepads",
    collection: "",
    price: 13.5,
    rating: 4.5,
    reviews: 76,
    image:
      "https://thehumblewildflower.com/cdn/shop/files/PhotoMar292024_25321PM.jpg?v=1712090293&width=823",
  },
  {
    id: 51,
    name: "Cat Memo Note Pad",
    description:
      "Caiet de notițe adorabil cu tematică pisicească, ilustrat cu ființe pufoase perfecte pentru însemnări rapide sau iubitorii de pisici.",
    filter: "Notebooks",
    category: "Notepads",
    collection: "",
    price: 2.55,
    rating: 4.8,
    reviews: 143,
    image:
      "https://i.etsystatic.com/46730486/r/il/5c18f5/5973948343/il_1588xN.5973948343_5ydb.jpg",
  },
  {
    id: 52,
    name: "Cat Illustrations Memo Note Pad",
    description:
      "Caiet artistic cu desene de pisici în diverse poze și expresii amuzante, ideal pentru notițe creative sau schițe pline de inspirație.",
    filter: "Notebooks",
    category: "Notepads",
    collection: "",
    price: 5.38,
    rating: 4.7,
    reviews: 97,
    image:
      "https://i.etsystatic.com/46730486/r/il/6871c5/6080450530/il_1588xN.6080450530_kd45.jpg",
  },
  {
    id: 53,
    name: "Fickle Plan Elephant Memo Note",
    description:
      "Notițe originale în formă de elefant cu partea lipicioasă, perfecte pentru remindere sau planificare decorativă.",
    filter: "Notebooks",
    category: "Notepads",
    collection: "Rainbow Desk",
    price: 3.19,
    rating: 4.4,
    reviews: 68,
    image:
      "https://i.etsystatic.com/46730486/r/il/e68945/6222127306/il_1588xN.6222127306_ej8u.jpg",
  },
  {
    id: 54,
    name: "Cat Receipt Memo Notepad",
    description:
      "Caiet amuzant sub formă de bon fiscal cu tranzactii tematice pentru pisici, ideal pentru liste sau jurnal creative.",
    filter: "Notebooks",
    category: "Notepads",
    collection: "",
    price: 3.23,
    rating: 4.9,
    reviews: 124,
    image:
      "https://i.etsystatic.com/46730486/r/il/6fb6dd/6128585553/il_1588xN.6128585553_tczb.jpg",
  },
  {
    id: 55,
    name: "Daily Routine Cat Memo Notepad",
    description:
      "Caiet de planificare zilnică cu temă pisicească și ilustrații adorabile, perfect pentru a-ți organiza activitățile cu un strop de farmec felin.",
    filter: "Notebooks",
    category: "Notepads",
    collection: "",
    price: 6.99,
    rating: 4.7,
    reviews: 142,
    image:
      "https://i.etsystatic.com/46730486/r/il/1829ff/6030330166/il_1588xN.6030330166_pry2.jpg",
  },
  {
    id: 56,
    name: "Fruit-scented Quick Dry Colorful Ink Pen",
    description:
      "Set de 6 pixuri gel cu arome delicioase de fructe (căpșuni, lămâie, struguri etc.) și cerneală de uscare rapidă care nu pătează.",
    filter: "Pens & Pencils",
    category: "Pens",
    collection: "Rainbow Desk",
    price: 12.5,
    rating: 4.4,
    reviews: 328,
    image:
      "https://i.etsystatic.com/18882223/r/il/50e100/5815806376/il_1588xN.5815806376_il6c.jpg",
  },
  {
    id: 57,
    name: "KOKUYO Stamp Line Highlighter",
    description:
      "Marker inovator cu vârf ștampilă pentru a crea linii perfecte sau modele punctate, ideal pentru planificatoare și notițe organizate.",
    filter: "Markers & Highlighters",
    category: "Highlighters",
    collection: "Rainbow Desk",
    price: 7.25,
    rating: 4.8,
    reviews: 215,
    image:
      "https://i.etsystatic.com/18882223/r/il/7d1fda/4226843755/il_1588xN.4226843755_76a2.jpg",
  },
  {
    id: 58,
    name: "Zebra 2022 New Mildliner Double-Sided Highlighter",
    description:
      "Highlighter dublu cu vârfuri diferite în culori pastel delicate care nu se întind pe hârtie, perfect pentru evidențiere subtilă.",
    filter: "Markers & Highlighters",
    category: "Highlighters",
    collection: "Rainbow Desk",
    price: 3.25,
    rating: 4.9,
    reviews: 487,
    image:
      "https://i.etsystatic.com/18882223/r/il/11607e/4681242029/il_1588xN.4681242029_60bx.jpg",
  },
  {
    id: 59,
    name: "45pcs Cute Cat Sticker Pack",
    description:
      "Colectie de 45 autocolante adorabile cu pisici în diverse poze și designuri jucăușe, perfecte pentru decorarea jurnalelor sau laptopurilor.",
    filter: "Stickers",
    category: "Stickers",
    collection: "",
    price: 2.99,
    rating: 4.6,
    reviews: 176,
    image:
      "https://i.etsystatic.com/18882223/r/il/36ff12/6255382455/il_1588xN.6255382455_7fbr.jpg",
  },
  {
    id: 60,
    name: "Lunettes Rondes Pens",
    description:
      "Pixuri inspirate de moda franceză în formă de ochelari rotunzi, cu cerneală neagră 0.5mm și grip confortabil.",
    filter: "Pens & Pencils",
    category: "Pens",
    collection: "",
    price: 4.5,
    rating: 4.2,
    reviews: 89,
    image:
      "https://stationerypal.com/cdn/shop/articles/LUNETTES_RONDES.png?v=1748313929&width=1280",
  },
  {
    id: 61,
    name: "Monami Plus Pen 3000 - Set of 6",
    description:
      "Set premium de pixuri gel coreene cu culori vibrante, debit constant de cerneală și grip din cauciuc pentru scris îndelungat.",
    filter: "Pens & Pencils",
    category: "Pens",
    collection: "",
    price: 8.75,
    rating: 4.5,
    reviews: 254,
    image:
      "https://stationerypal.com/cdn/shop/files/MonamiPlusPen3000-CreamColor-Setof6_5.png?v=1719393291&width=1220",
  },
  {
    id: 62,
    name: "Tombow MONO eraser",
    description:
      "Radieră de precizie japoneză care șterge curat fără urme, cu durată de viață mai lungă decât radierile obișnuite.",
    filter: "Erasers",
    category: "Erasers",
    collection: "",
    price: 2.25,
    rating: 4.7,
    reviews: 512,
    image: "https://www.tombow.com/files/2012/12/mono_main.png",
  },
  {
    id: 63,
    name: "Tombow MONO Air 5 Correction Tape",
    description:
      "Bandă corectoare cu aplicator precis de 5mm, uscare rapidă și design refilabil pentru corecții fără riduri.",
    filter: "Erasers",
    category: "Correction Tapes",
    collection: "",
    price: 3.5,
    rating: 4.3,
    reviews: 187,
    image:
      "https://stationerypal.com/cdn/shop/files/TombowMONOAir5CorrectionTape-BlueBody.png?v=1695452990&width=1220",
  },
  {
    id: 64,
    name: "Pentel Fitline Double-Sided Highlighter - 8 Pastel Colors Set",
    description:
      "Set complet de 8 markere duble cu culori pastel delicate (vârf lat și subțire), perfecte pentru evidențiere elegantă.",
    filter: "Markers & Highlighters",
    category: "Highlighters",
    collection: "Rainbow Desk",
    price: 11.99,
    rating: 4.8,
    reviews: 342,
    image:
      "https://stationerypal.com/cdn/shop/files/PentelFitlineDouble-SidedHighlighter-ChiselFineTip-8PastelColorsSet_7.png?v=1716368006&width=1220",
  },
  {
    id: 65,
    name: "Pilot FriXion Light Highlighter",
    description:
      "Markere evidențiator cu cerneală termo-sensibilă care dispare la frecare cu vârful special FriXion, în culori naturale.",
    filter: "Markers & Highlighters",
    category: "Highlighters",
    collection: "Rainbow Desk",
    price: 3.75,
    rating: 4.1,
    reviews: 276,
    image:
      "https://pilotpen.com.au/img/containers/images/markers/622677--frixionlight-natural-wallet-6.png/82f177ef35e7407e0e63b524b886a3f0.png",
  },
  {
    id: 66,
    name: "Movie Ticket Archive Journal Notebook",
    description:
      "Jurnal special cu buzunare pentru bilete și pagini tematice de cinema, perfect pentru a-ți păstra amintirile filmelor preferate.",
    filter: "Notebooks",
    category: "Notebooks",
    collection: "",
    price: 16.99,
    rating: 4.3,
    reviews: 184,
    image:
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2024/6/5/47faceda-0f6e-4e89-a69b-1727f83b6873.jpg",
  },
  {
    id: 67,
    name: "i will get through this sticker",
    description:
      "Autocolant motivational cu mesaj înălțător, perfect pentru laptopuri sau jurnale personale.",
    filter: "Stickers",
    category: "Stickers",
    collection: "",
    price: 3.5,
    rating: 4.7,
    reviews: 326,
    image:
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2024/6/5/59e03f85-d09d-4173-9d19-ce3a50008e80.jpg",
  },
  {
    id: 68,
    name: "i want us both to live well sticker",
    description:
      "Autocolant emoționant despre prietenie, imprimat pe material waterproof cu finish mat.",
    filter: "Stickers",
    category: "Stickers",
    collection: "",
    price: 3.25,
    rating: 4.8,
    reviews: 412,
    image:
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2024/6/5/430171da-cd8e-40f9-983f-a8d3b69340cd.jpg",
  },
  {
    id: 69,
    name: "i want us both to eat well sticker",
    description:
      "Autocolant hazliu pentru iubitorii de mâncare, ideal pentru bucătărie sau cutii de prânz.",
    filter: "Stickers",
    category: "Stickers",
    collection: "",
    price: 2.99,
    rating: 4.5,
    reviews: 287,
    image:
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2024/6/5/cad239cf-df83-459b-8761-3ff3981487d0.jpg",
  },
  {
    id: 70,
    name: "but i'm just a girl with tummy aches sticker",
    description:
      "Autocolant amuzant și relatable cu design feminin, perfect pentru sticle de apă sau jurnale.",
    filter: "Stickers",
    category: "Stickers",
    collection: "",
    price: 3.75,
    rating: 4.6,
    reviews: 198,
    image:
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2024/6/5/ccec9b3a-a955-4dfe-9f52-6ac5d0061c4e.jpg",
  },
  {
    id: 71,
    name: "i deserve a pay raise sticker",
    description:
      "Autocolant plin de umor pentru mediul de lucru, cu mesaj bold pentru laptopuri de birou.",
    filter: "Stickers",
    category: "Stickers",
    collection: "",
    price: 3.5,
    rating: 4.4,
    reviews: 156,
    image:
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2024/6/5/6e3a5ff5-7bd0-4bd5-8cc1-26d44fbfffc1.jpg",
  },
  {
    id: 72,
    name: "i deserve a break sticker",
    description:
      "Autocolant relaxant care te reamintește să faci pauze, ideal pentru self-care.",
    filter: "Stickers",
    category: "Stickers",
    collection: "",
    price: 3.25,
    rating: 4.9,
    reviews: 523,
    image:
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2024/6/5/1f22631c-1251-4c03-9cfc-02e4d7b5c2a4.jpg",
  },
  {
    id: 73,
    name: "reason to work: travel sticker",
    description:
      "Autocolant pentru pasionații de călătorii, cu design inspirator și citat motivațional.",
    filter: "Stickers",
    category: "Stickers",
    collection: "",
    price: 3.99,
    rating: 4.2,
    reviews: 231,
    image:
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2024/6/5/6672a02a-e862-4ba1-8f24-374a98d2f5fc.jpg",
  },
  {
    id: 74,
    name: "Multicolor Transparent Ballpoint Pen",
    description:
      "Pix cu corp transparent și cerneală colorată vibrantă, ideal pentru codificarea notițelor. Face parte din colecția Rainbow Desk.",
    filter: "Pens & Pencils",
    category: "Pens",
    collection: "Rainbow Desk",
    price: 8.49,
    rating: 4.5,
    reviews: 218,
    image:
      "https://i.etsystatic.com/7997901/r/il/0917d8/6317916928/il_1588xN.6317916928_3u05.jpg",
  },
  {
    id: 75,
    name: "Hello Kitty Gel Pens",
    description:
      "Set de 6 pixuri gel pastelatoare cu charmuri Hello Kitty pe capac. Vârfuri de 0.7mm pentru scris fluid în culori vibrante: roz, mentă, lavandă, galben, bleu și piersică.",
    filter: "Pens & Pencils",
    category: "Pens",
    collection: "Sanrio",
    price: 12.99,
    rating: 4.8,
    reviews: 342,
    image:
      "https://shop.sukikawaii.com/cdn/shop/files/S00412e84161d4135ad5c553a239a9a4bC.webp?v=1715593732&width=823",
  },
  {
    id: 76,
    name: "Hello Kitty Slim Spiral Notebook",
    description:
      "Caiet subțire format A5 cu 80 de file cu linii pastelate. Copertă strălucitoare cu Hello Kitty și spirală argintie. Perfect pentru notițe sau jurnal, cu spațiere de 7mm între linii.",
    filter: "Notebooks",
    category: "Notebooks",
    collection: "Sanrio",
    price: 9.99,
    rating: 4.6,
    reviews: 287,
    image:
      "https://www.sanrio.com/cdn/shop/files/zz-2501430731_KT_--1_800x.jpg?v=1737698618",
  },
  {
    id: 77,
    name: "Cinnamoroll Slim Spiral Notebook",
    description:
      "Caiet cu tematică nori, avându-l pe Cinnamoroll zburând pe copertă. Conține 70 de file de hârtie premium care previn pătarea cernelei. Spirală albastră care se potrivește cu designul ceresc.",
    filter: "Notebooks",
    category: "Notebooks",
    collection: "Sanrio",
    price: 10.49,
    rating: 4.9,
    reviews: 412,
    image:
      "https://www.sanrio.com/cdn/shop/files/zz-2501430731_CN_--1_800x.jpg?v=1737698162",
  },
  {
    id: 78,
    name: "Kuromi Slim Spiral Notebook",
    description:
      "Caiet în stil gotic cu estetică punk a lui Kuromi. Copertă neagră cu accente violet și 90 de file cu margini întunecate. Spirală violetă completează look-ul edgy.",
    filter: "Notebooks",
    category: "Notebooks",
    collection: "Sanrio",
    price: 11.25,
    rating: 4.7,
    reviews: 198,
    image:
      "https://www.sanrio.com/cdn/shop/files/zz-2501430731_KU_--1_800x.jpg?v=1737698674",
  },
  {
    id: 79,
    name: "Hello Kitty Everyday Slim Pencil Pouch",
    description:
      "Pungă rezistentă la apă din poliester cu broderie Hello Kitty. Dimensiuni 20x10cm cu fermoar pe toată lungimea. Are mai multe buzunare interioare pentru organizarea creioanelor.",
    filter: "Cases & Bags",
    category: "Pencil Cases",
    collection: "Sanrio",
    price: 14.95,
    rating: 4.5,
    reviews: 176,
    image:
      "https://www.sanrio.com/cdn/shop/files/zz-2501427268_KT_--1_800x.jpg?v=1737697179",
  },
  {
    id: 80,
    name: "Cinnamoroll Everyday Slim Pencil Pouch",
    description:
      "Pungă din material cu print de nori și aplică Cinnamoroll. Are umplutură extra pentru protecție și buzunar secret pentru gumă sau stick-uri USB. Măsoară 19x9cm.",
    filter: "Cases & Bags",
    category: "Pencil Cases",
    collection: "Sanrio",
    price: 15.5,
    rating: 4.8,
    reviews: 231,
    image:
      "https://www.sanrio.com/cdn/shop/files/zz-2501427268_CN_--1_800x.jpg?v=1737696821",
  },
  {
    id: 81,
    name: "Kuromi Everyday Slim Pencil Pouch",
    description:
      "Pungă din piele vegană neagră cu cusături violet și emblemă craniu Kuromi. Include breloc detașabil și zipper metalic. Design subțire pentru 12 creioane standard.",
    filter: "Cases & Bags",
    category: "Pencil Cases",
    collection: "Sanrio",
    price: 16.75,
    rating: 4.4,
    reviews: 143,
    image:
      "https://www.sanrio.com/cdn/shop/files/zz-2501427268_KU_--1_800x.jpg?v=1737697238",
  },
  {
    id: 82,
    name: "Keroppi Everyday Slim Pencil Pouch",
    description:
      "Pungă verde rezistentă la apă cu fața zâmbitoare a lui Keroppi. Are fereastră transparentă PVC și buzunar interior din plasă. Fermoar galben adaugă un contrast plăcut.",
    filter: "Cases & Bags",
    category: "Pencil Cases",
    collection: "Sanrio",
    price: 13.99,
    rating: 4.3,
    reviews: 87,
    image:
      "https://www.sanrio.com/cdn/shop/files/zz-2501427268_KR_--1_800x.jpg?v=1737697135",
  },
  {
    id: 83,
    name: "Hello Kitty Plush Pal Pencil Case",
    description:
      "Pungă 3D din pluș în formă de cap al lui Hello Kitty. Exterior pufos din poliester cu spațiu pentru 8-10 creioane. Detalii brodate și fermoar care se camuflează în design.",
    filter: "Cases & Bags",
    category: "Pencil Cases",
    collection: "Sanrio",
    price: 18.99,
    rating: 4.9,
    reviews: 398,
    image:
      "https://www.sanrio.com/cdn/shop/files/035246-Zoom.1_800x.jpg?v=1726079499",
  },
  {
    id: 84,
    name: "Cinnamoroll Plush Pal Pencil Case",
    description:
      "Pungă pluș adorabilă în formă de Cinnamoroll cu urechi flască. Exterior din minky fabric cu spațiu pentru creioane și un calculator mic. Măsoară 15x10x8cm când e plină.",
    filter: "Cases & Bags",
    category: "Pencil Cases",
    collection: "Sanrio",
    price: 19.5,
    rating: 4.7,
    reviews: 265,
    image:
      "https://www.sanrio.com/cdn/shop/files/035491-Zoom.1_800x.jpg?v=1726079446",
  },
  {
    id: 85,
    name: "Kuromi Mini Sticker Collect Book",
    description:
      "Album pentru stickere cu copertă dură și 30 de pagini tematice. Include 15 stickere exclusive și pagini acid-free pentru păstrarea calității adezivului.",
    filter: "Notebooks",
    category: "Notebooks",
    collection: "Sanrio",
    price: 12.25,
    rating: 4.6,
    reviews: 154,
    image:
      "https://www.sanrio.com/cdn/shop/files/snr-913952_1_800x.jpg?v=1734733263",
  },
  {
    id: 86,
    name: "Creative Cute Cream Roll Pen Bag",
    description:
      "Design unic rulabil cu 12 bucle elastice pentru creioane. Material crem cu cusături în culori pastel. Se fixează cu panglică și include un creion din material coordonat.",
    filter: "Cases & Bags",
    category: "Pencil Cases",
    collection: "",
    price: 17.99,
    rating: 4.2,
    reviews: 76,
    image:
      "https://i.pinimg.com/736x/5e/86/50/5e86506a51557aa4740906aa7b1cf6f9.jpg",
  },
  {
    id: 87,
    name: "Rosyposy Star Series Drawstring Pencil Bag",
    description:
      "Pungă cu cordon și print galaxie cu accente stele strălucitoare. Interior spațios pentru 15 creioane. Ușor de curățat, măsoară 23x13cm.",
    filter: "Cases & Bags",
    category: "Pencil Cases",
    collection: "",
    price: 11.49,
    rating: 4.0,
    reviews: 63,
    image:
      "https://i.pinimg.com/736x/cc/cc/89/cccc896d7a7319315102a7d1c2adad68.jpg",
  },
  {
    id: 88,
    name: "Retro Doggy Hologram Seal Sticker Set",
    description:
      "Set de 50 de stickere retro cu câini și accente holografice. Fiecare sticker (3-5cm) prezintă diferite rase de câini pe fundaluri colorate. Perfect pentru planșe sau laptopuri.",
    filter: "Stickers",
    category: "Stickers",
    collection: "",
    price: 6.99,
    rating: 4.7,
    reviews: 128,
    image:
      "https://www.durunaru.com/cdn/shop/files/1_609db698-2c9e-4542-b87a-172e007e1d23.png?v=1718095778&width=1946",
  },
  {
    id: 89,
    name: "4pcs Sakura Rabbit Gel Pens",
    description:
      "Set de pixuri gel cu tematică de primăvară și brelocuri iepurași. Include culori roz, mentă, lavandă și piersică cu vârf de 0.5mm. Cerneală rezistentă la apă și care nu pătează.",
    filter: "Pens & Pencils",
    category: "Pens",
    collection: "Blush Bloom",
    price: 9.25,
    rating: 4.5,
    reviews: 87,
    image:
      "https://i.etsystatic.com/18164750/r/il/6f328f/5051295807/il_1588xN.5051295807_jwag.jpg",
  },
  {
    id: 90,
    name: "Tyeign Novelty Cute Mini Bear Highlighter Pens",
    description:
      "Set de 4 markere pastel cu capace în formă de urși. Vârfuri duble (3mm/1mm) pentru evidențiere și subliniere. Cerneală non-toxică cu uscare rapidă.",
    filter: "Markers & Highlighters",
    category: "Highlighters",
    collection: "Rainbow Desk",
    price: 7.49,
    rating: 4.3,
    reviews: 215,
    image:
      "https://i5.walmartimages.com/asr/67cd2eec-206f-49ca-ad27-9588b0280fc5.c9e2556e793275d1066fd399378c92be.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
  },
  {
    id: 91,
    name: "6pcs, 12 colors, Cat Paw Highlighter Pens Set",
    description:
      "Markere duble cu amprente de labă de pisică pe capace. Fiecare marker are două culori complementare (total 12 nuanțe). Include un set gratuit de stickere cu pisici.",
    filter: "Markers & Highlighters",
    category: "Highlighters",
    collection: "Rainbow Desk",
    price: 12.99,
    rating: 4.8,
    reviews: 342,
    image:
      "https://i.etsystatic.com/13103566/r/il/41b192/4025796478/il_1588xN.4025796478_1y1q.jpg",
  },
  {
    id: 92,
    name: "Sanrio Ohuhu 48 Pastel Marker Set",
    description:
      "Set premium de 48 de markere cu personaje Sanrio. Culori pastel blendable cu vârfuri duble. Include husă de transport și ghid de culori. Funcționează pe hârtie, lemn și ceramică.",
    filter: "Markers & Highlighters",
    category: "Markers",
    collection: "Sanrio",
    price: 39.99,
    rating: 4.9,
    reviews: 587,
    image: "https://i.ebayimg.com/images/g/x7kAAOSwW~xnbVGo/s-l1600.webp",
  },
  {
    id: 93,
    name: "Courier Seal Sticker Set",
    description:
      "Colecție vintage de stickere poștale cu 60+ designuri. Sigilii de ceară, ștampile și ilustrații de colete. Finish mat cu accente aurii. Perfect pentru jurnal sau scrisori.",
    filter: "Stickers",
    category: "Stickers",
    collection: "",
    price: 8.5,
    rating: 4.6,
    reviews: 94,
    image:
      "https://www.durunaru.com/cdn/shop/files/1_c1b714ee-68a6-4b4a-aad8-1f38c9972c99.png?v=1685896461&width=1946",
  },
  {
    id: 94,
    name: "Chiikawa & Friends Fluffy Pencil Case",
    description:
      "Pungă pluș în formă de Chiikawa cu exterior din blană sintetică. Măsoară 20x13cm cu compartiment spațios. Include detalii brodate și fermoar rezistent. Vine cu un breloc surpriză.",
    filter: "Cases & Bags",
    category: "Pencil Cases",
    collection: "Chiikawa & Friends",
    price: 16.75,
    rating: 4.7,
    reviews: 203,
    image:
      "https://i.etsystatic.com/5252587/r/il/b8f538/6881182332/il_1588xN.6881182332_7pj3.jpg",
  },
  {
    id: 95,
    name: "Chiikawa & Friends Pencil Case",
    description:
      "Pungă din material dur EVA cu toți membrii echipei Chiikawa. Interior cu bucle elastice pentru 10 creioane și buzunar din plasă. Măsoară 19x10cm.",
    filter: "Cases & Bags",
    category: "Pencil Cases",
    collection: "Chiikawa & Friends",
    price: 14.99,
    rating: 4.4,
    reviews: 156,
    image:
      "https://i.etsystatic.com/25943590/r/il/10c8d2/6174086752/il_1588xN.6174086752_f43n.jpg",
  },
  {
    id: 96,
    name: "Chiikawa Chii Series B5 Notebook",
    description:
      "Caiet format B5 (18x25cm) cu 80 de file premium. Prezintă Chiikawa în diverse poze pe copertă. Include 5 separatoare tematice și stickere cu personaje.",
    filter: "Notebooks",
    category: "Notebooks",
    collection: "Chiikawa & Friends",
    price: 12.5,
    rating: 4.8,
    reviews: 278,
    image:
      "https://i.etsystatic.com/25943590/r/il/dca5ed/6561753737/il_1588xN.6561753737_l4r6.jpg",
  },
  {
    id: 97,
    name: "Hachiware Chii Series B5 Notebook",
    description:
      "Caiet cu tematică de albină și personajul Hachiware. Copertă galbenă cu model fagure și 192 de pagini cu grid. Include elastic de închidere și buzunar pentru foi.",
    filter: "Notebooks",
    category: "Notebooks",
    collection: "Chiikawa & Friends",
    price: 13.25,
    rating: 4.5,
    reviews: 142,
    image:
      "https://i.etsystatic.com/25943590/r/il/a53682/6561753747/il_1588xN.6561753747_8ufb.jpg",
  },
  {
    id: 98,
    name: "Usagi Chii Series B5 Notebook",
    description:
      "Caiet inspirat de iepuri cu personajul Usagi. Copertă roz pastel cu 160 de file punctate. Include panglică marker și stickere coordonate.",
    filter: "Notebooks",
    category: "Notebooks",
    collection: "Chiikawa & Friends",
    price: 12.99,
    rating: 4.6,
    reviews: 189,
    image:
      "https://i.etsystatic.com/25943590/r/il/6d9469/6561753743/il_1588xN.6561753743_sucs.jpg",
  },
  {
    id: 99,
    name: "Momonga Chii Series B5 Notebook",
    description:
      "Caiet cu tematică de veveriță zburătoare și personajul Momonga. Copertă albastră cu textură soft-touch și 144 de pagini goale pentru schițe. Include foi memo tematice.",
    filter: "Notebooks",
    category: "Notebooks",
    collection: "Chiikawa & Friends",
    price: 13.5,
    rating: 4.3,
    reviews: 97,
    image:
      "https://i.etsystatic.com/25943590/r/il/3bdaa1/6513623798/il_1588xN.6513623798_72qh.jpg",
  },
  {
    id: 100,
    name: "Chiikawa & Friends Retractable Gel Pens",
    description:
      "Set de 5 pixuri gel cu diferite personaje Chiikawa. Vârfuri fine 0.38mm în culori galben, albastru, roșu, verde și violet. Fiecare pix are un breloc cu personajul corespunzător.",
    filter: "Pens & Pencils",
    category: "Pens",
    collection: "Chiikawa & Friends",
    price: 11.99,
    rating: 4.9,
    reviews: 421,
    image:
      "https://i.etsystatic.com/25943590/r/il/6293d5/6222251735/il_1588xN.6222251735_ivab.jpg",
  },
];

const ProductCard = {
  renderStars: (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let starsHTML = "";

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        starsHTML += '<i class="fas fa-star"></i>';
      } else if (i === fullStars + 1 && hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
      } else {
        starsHTML += '<i class="far fa-star"></i>';
      }
    }

    return starsHTML;
  },

  create: (product) => {
    const stars = ProductCard.renderStars(product.rating);

    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.setAttribute("data-product-id", product.id);
    productCard.onclick = () => ProductCard.navigateToProduct(product.id);

    productCard.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <button class="wishlist-btn ${
          window.wishlistManager?.isInWishlist(product.id) ? "active" : ""
        }" 
                onclick="event.stopPropagation(); UIHandlers.toggleWishlist(${
                  product.id
                }, event)">
          <i class="fas fa-heart"></i>
        </button>
      </div>
      <div class="product-details">
        <div class="product-category">${product.category}</div>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-rating" aria-label="Evaluare: ${product.rating.toFixed(
          1
        )} din 5 stele">
          <div class="stars">${stars}</div>
          <div class="review-count">(${product.reviews})</div>
        </div>
        <div class="product-footer">
          <div class="product-price">$${product.price.toFixed(2)}</div>
          <button class="add-to-cart-btn" onclick="event.stopPropagation(); UIHandlers.addToCart(${
            product.id
          }, event)">
            <i class="fa-solid fa-plus"></i>
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    `;

    return productCard;
  },

  navigateToProduct: (productId) => {
    window.location.href = `productRO.html?id=${productId}`;
  },
};

const HomepageProducts = {
  display: () => {
    const productsContainer = document.getElementById("products-container");
    if (!productsContainer) return;

    const screenWidth = window.innerWidth;
    const productCount = screenWidth < 1200 ? 6 : 5;
    const recentProducts = [...products].reverse().slice(0, productCount);

    productsContainer.innerHTML = "";
    recentProducts.forEach((product) => {
      productsContainer.appendChild(ProductCard.create(product));
    });
  },
};

const ProductsPage = {
  currentFilters: {
    categories: [],
    ratings: [],
    collections: [],
  },
  currentSort: "recomandate",
  currentSearchTerm: "",
  currentPage: 1,
  productsPerPage: 20,

  init: () => {
    const productsGrid = document.getElementById("products-grid");
    if (!productsGrid) return;

    ProductsPage.parseUrlParams();
    ProductsPage.display();
    ProductsPage.setupEventListeners();
  },

  parseUrlParams: () => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlSort = urlParams.get("sort");
    const urlCategory = urlParams.get("category");
    const urlRating = urlParams.get("rating");
    const urlCollection = urlParams.get("collection");
    const urlSearch = urlParams.get("search");
    const urlPage = urlParams.get("page");

    if (urlSort) ProductsPage.currentSort = urlSort;
    if (urlSearch) ProductsPage.currentSearchTerm = urlSearch.toLowerCase();
    if (urlPage) ProductsPage.currentPage = parseInt(urlPage);

    if (urlCategory) {
      ProductsPage.currentFilters.categories = urlCategory.split(",");
      ProductsPage.updateCheckboxes(
        "category",
        ProductsPage.currentFilters.categories
      );
    }

    if (urlRating) {
      ProductsPage.currentFilters.ratings = urlRating.split(",").map(Number);
      ProductsPage.updateCheckboxes(
        "rating",
        ProductsPage.currentFilters.ratings
      );
    }

    if (urlCollection) {
      ProductsPage.currentFilters.collections = urlCollection.split(",");
      ProductsPage.updateCheckboxes(
        "collection",
        ProductsPage.currentFilters.collections
      );
    }

    const sortSelect = document.getElementById("sort-by");
    if (sortSelect && urlSort) {
      sortSelect.value = urlSort;
    }
  },

  updateCheckboxes: (name, values) => {
    const filterCheckboxes = document.querySelectorAll(
      `.filter-options input[name="${name}"]`
    );

    filterCheckboxes.forEach((checkbox) => {
      if (
        values.includes(
          name === "rating" ? parseInt(checkbox.value) : checkbox.value
        )
      ) {
        checkbox.checked = true;
      }
    });
  },

  getFilteredProducts: () => {
    let filtered = [...products];

    if (ProductsPage.currentSearchTerm) {
      filtered = filtered.filter((product) => {
        const searchFields = [
          product.name.toLowerCase(),
          product.filter.toLowerCase(),
          ...(Array.isArray(product.collection)
            ? product.collection.map((c) => c.toLowerCase())
            : [product.collection?.toLowerCase() || ""]),
        ];
        return searchFields.some((field) =>
          field.includes(ProductsPage.currentSearchTerm)
        );
      });
    }

    if (ProductsPage.currentFilters.categories.length > 0) {
      filtered = filtered.filter((product) =>
        ProductsPage.currentFilters.categories.includes(product.filter)
      );
    }

    if (ProductsPage.currentFilters.ratings.length > 0) {
      filtered = filtered.filter((product) =>
        ProductsPage.currentFilters.ratings.some(
          (rating) => Math.floor(product.rating) >= rating
        )
      );
    }

    if (ProductsPage.currentFilters.collections.length > 0) {
      filtered = filtered.filter((product) => {
        if (!product.collection) return false;
        return Array.isArray(product.collection)
          ? product.collection.some((col) =>
              ProductsPage.currentFilters.collections.includes(col)
            )
          : ProductsPage.currentFilters.collections.includes(
              product.collection
            );
      });
    }

    return filtered;
  },

  sortProducts: (productsToSort) => {
    switch (ProductsPage.currentSort) {
      case "price-low":
        return [...productsToSort].sort((a, b) => a.price - b.price);
      case "price-high":
        return [...productsToSort].sort((a, b) => b.price - a.price);
      case "rating":
        return [...productsToSort].sort((a, b) => b.rating - a.rating);
      case "newest":
        return [...productsToSort].reverse();
      default:
        return productsToSort;
    }
  },

  updatePagination: (totalPages) => {
    const pageNumbers = document.querySelector(".page-numbers");
    if (!pageNumbers) return;
    pageNumbers.textContent = `${ProductsPage.currentPage} din ${
      totalPages || 1
    }`;

    const paginationBtns = document.querySelectorAll(".pagination-btn");
    if (paginationBtns[0]) {
      paginationBtns[0].disabled = ProductsPage.currentPage === 1;
    }
    if (paginationBtns[1]) {
      paginationBtns[1].disabled =
        ProductsPage.currentPage === totalPages || totalPages === 0;
    }
  },

  updateURL: () => {
    const params = new URLSearchParams();

    if (ProductsPage.currentSort !== "recomandate")
      params.set("sort", ProductsPage.currentSort);
    if (ProductsPage.currentSearchTerm)
      params.set("search", ProductsPage.currentSearchTerm);
    if (ProductsPage.currentPage > 1)
      params.set("page", ProductsPage.currentPage);
    if (ProductsPage.currentFilters.categories.length > 0)
      params.set("category", ProductsPage.currentFilters.categories.join(","));
    if (ProductsPage.currentFilters.ratings.length > 0)
      params.set("rating", ProductsPage.currentFilters.ratings.join(","));
    if (ProductsPage.currentFilters.collections.length > 0)
      params.set(
        "collection",
        ProductsPage.currentFilters.collections.join(",")
      );

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, "", newUrl);
  },

  display: () => {
    const filteredProducts = ProductsPage.getFilteredProducts();
    const sortedProducts = ProductsPage.sortProducts(filteredProducts);
    const totalProducts = sortedProducts.length;
    const totalPages = Math.ceil(totalProducts / ProductsPage.productsPerPage);

    ProductsPage.currentPage = Math.max(
      1,
      Math.min(ProductsPage.currentPage, totalPages || 1)
    );

    const startIndex =
      (ProductsPage.currentPage - 1) * ProductsPage.productsPerPage;
    const endIndex = Math.min(
      startIndex + ProductsPage.productsPerPage,
      totalProducts
    );
    const productsToDisplay = sortedProducts.slice(startIndex, endIndex);

    const productsGrid = document.getElementById("products-grid");
    productsGrid.innerHTML = "";

    if (filteredProducts.length === 0) {
      ProductsPage.showEmptyState();
      document
        .querySelector(".pagination")
        ?.style?.setProperty("display", "none");
    } else {
      productsToDisplay.forEach((product) => {
        productsGrid.appendChild(ProductCard.create(product));
      });
      document
        .querySelector(".pagination")
        ?.style?.setProperty("display", "flex");
    }

    ProductsPage.updatePagination(totalPages);
    ProductsPage.updateURL();
  },

  showEmptyState: () => {
    const emptyStateContainer = document.createElement("div");
    emptyStateContainer.className = "empty-state-container";

    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";

    const emptyIcon = document.createElement("div");
    emptyIcon.className = "empty-icon";
    emptyIcon.innerHTML = '<i class="fas fa-box-open"></i>';

    const emptyTitle = document.createElement("h3");
    emptyTitle.className = "empty-title";
    emptyTitle.textContent = "Nu s-au găsit produse";

    const emptyMessage = document.createElement("p");
    emptyMessage.className = "empty-message";

    if (ProductsPage.currentSearchTerm) {
      emptyMessage.textContent = `Nu am găsit produse care să corespundă termenului "${ProductsPage.currentSearchTerm}". Încearcă alt cuvânt cheie.`;
    } else if (
      ProductsPage.currentFilters.categories.length > 0 ||
      ProductsPage.currentFilters.ratings.length > 0 ||
      ProductsPage.currentFilters.collections.length > 0
    ) {
      emptyMessage.textContent =
        "Nu există produse care să corespundă filtrelor tale. Încearcă să modifici criteriile de filtrare.";
    } else {
      emptyMessage.textContent =
        "Momentan nu avem produse disponibile. Te rugăm să verifici mai târziu.";
    }

    const clearFiltersButton = document.createElement("button");
    clearFiltersButton.className = "empty-action-btn";
    clearFiltersButton.textContent = "Resetează toate filtrele";

    clearFiltersButton.addEventListener("click", () => {
      ProductsPage.clearFilters();
    });

    emptyState.appendChild(emptyIcon);
    emptyState.appendChild(emptyTitle);
    emptyState.appendChild(emptyMessage);

    if (
      ProductsPage.currentSearchTerm ||
      ProductsPage.currentFilters.categories.length > 0 ||
      ProductsPage.currentFilters.ratings.length > 0 ||
      ProductsPage.currentFilters.collections.length > 0
    ) {
      emptyState.appendChild(clearFiltersButton);
    }

    emptyStateContainer.appendChild(emptyState);
    document.getElementById("products-grid").appendChild(emptyStateContainer);
  },

  clearFilters: () => {
    const filterCheckboxes = document.querySelectorAll(
      '.filter-options input[type="checkbox"]'
    );
    const sortSelect = document.getElementById("sort-by");
    const searchInputs = [
      document.querySelector(".search_bar input"),
      document.querySelector(".header_search-bar input"),
    ].filter(Boolean);

    filterCheckboxes.forEach((checkbox) => (checkbox.checked = false));
    ProductsPage.currentFilters = {
      categories: [],
      ratings: [],
      collections: [],
    };
    ProductsPage.currentSort = "recomandate";
    ProductsPage.currentSearchTerm = "";
    ProductsPage.currentPage = 1;

    if (sortSelect) sortSelect.value = "recomandate";
    searchInputs.forEach((input) => (input.value = ""));

    ProductsPage.display();
  },

  setupEventListeners: () => {
    const filterCheckboxes = document.querySelectorAll(
      '.filter-options input[type="checkbox"]'
    );
    const clearFiltersBtn = document.querySelector(".clear-filters");
    const sortSelect = document.getElementById("sort-by");
    const searchInputs = [
      document.querySelector(".search_bar input"),
      document.querySelector(".header_search-bar input"),
    ].filter(Boolean);
    const paginationBtns = document.querySelectorAll(".pagination-btn");

    filterCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
        const filterType =
          this.name === "category"
            ? "categories"
            : this.name === "rating"
            ? "ratings"
            : this.name === "collection"
            ? "collections"
            : null;

        if (filterType) {
          const value =
            this.name === "rating" ? parseInt(this.value) : this.value;
          if (this.checked) {
            ProductsPage.currentFilters[filterType].push(value);
          } else {
            ProductsPage.currentFilters[filterType] =
              ProductsPage.currentFilters[filterType].filter(
                (item) => item !== value
              );
          }
          ProductsPage.currentPage = 1;
          ProductsPage.display();
        }
      });
    });

    if (clearFiltersBtn) {
      clearFiltersBtn.addEventListener("click", ProductsPage.clearFilters);
    }

    if (sortSelect) {
      sortSelect.addEventListener("change", function () {
        ProductsPage.currentSort = this.value;
        ProductsPage.currentPage = 1;
        ProductsPage.display();
      });
    }

    searchInputs.forEach((input) => {
      input.addEventListener("input", function () {
        ProductsPage.currentSearchTerm = this.value.toLowerCase();
        ProductsPage.currentPage = 1;
        ProductsPage.display();
      });
    });

    paginationBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        if (this.querySelector(".fa-chevron-left")) {
          if (ProductsPage.currentPage > 1) {
            ProductsPage.currentPage--;
            ProductsPage.display();
          }
        } else {
          const totalPages = Math.ceil(
            ProductsPage.getFilteredProducts().length /
              ProductsPage.productsPerPage
          );
          if (ProductsPage.currentPage < totalPages) {
            ProductsPage.currentPage++;
            ProductsPage.display();
          }
        }
      });
    });

    ProductsPage.setupFilterSections();
  },

  setupFilterSections: () => {
    const filterSections = document.querySelectorAll(".filter-section");
    filterSections.forEach((section) => {
      const title = section.querySelector(".filter-title");
      title.addEventListener("click", (e) => {
        if (e.target.tagName !== "INPUT") {
          section.classList.toggle("active");
          const options = section.querySelector(".filter-options");

          if (section.classList.contains("active")) {
            options.style.display = "flex";
            options.style.height = "auto";
            const height = options.offsetHeight;
            options.style.height = "0";
            options.offsetHeight;
            options.style.height = height + "px";

            setTimeout(() => {
              options.style.height = "";
            }, 300);
          } else {
            options.style.height = options.offsetHeight + "px";
            options.offsetHeight;
            options.style.height = "0";

            setTimeout(() => {
              options.style.display = "none";
              options.style.height = "";
            }, 300);
          }
        }
      });

      section.classList.add("active");
      const options = section.querySelector(".filter-options");
      options.style.display = "flex";
    });
  },
};

const ProductDetailsPage = {
  init: () => {
    const productId = ProductDetailsPage.getProductIdFromUrl();
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    document.title = `Mochi Memo | ${product.name}`;

    ProductDetailsPage.setupProductInfo(product);
    ProductDetailsPage.setupEventListeners(product);
  },

  getProductIdFromUrl: () => {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get("id"));
  },

  setupProductInfo: (product) => {
    const elements = {
      "product-category": product.filter || product.category,
      "product-main-image": { src: product.image, alt: product.name },
      "product-name": product.name,
      ".product-category": product.category || product.filter,
      "product-price": `$${product.price.toFixed(2)}`,
      "product-description-text": product.description,
    };

    Object.entries(elements).forEach(([selector, value]) => {
      const element =
        document.querySelector(selector) || document.getElementById(selector);
      if (!element) return;

      if (typeof value === "object") {
        Object.entries(value).forEach(([attr, val]) => {
          element[attr] = val;
        });
      } else {
        element.textContent = value;
      }
    });

    const ratingContainer = document.getElementById("product-rating");
    if (ratingContainer) {
      ratingContainer.innerHTML = ProductCard.renderStars(product.rating);

      ratingContainer.setAttribute(
        "aria-label",
        `Evaluare: ${product.rating.toFixed(1)} din 5 stele`
      );
    }

    const reviewCountElement = document.getElementById("review-count");
    if (reviewCountElement) {
      reviewCountElement.textContent = `(${product.reviews} recenzii)`;
    }

    const descriptionSection = document.querySelector(".product-description");
    if (!product.description && descriptionSection) {
      descriptionSection.style.display = "none";
    }
  },

  setupEventListeners: (product) => {
    const addToCartBtn = document.getElementById("add-to-cart");
    if (addToCartBtn) {
      addToCartBtn.addEventListener("click", (e) => {
        e.preventDefault();
        UIHandlers.addToCart(product.id);
      });
    }

    const wishlistBtn = document.querySelector(".wishlist-btn-circle");
    if (wishlistBtn) {
      const heartIcon = wishlistBtn.querySelector("i");
      heartIcon.classList.remove("far");
      heartIcon.classList.add("fas");

      if (window.wishlistManager.isInWishlist(product.id)) {
        wishlistBtn.classList.add("active");
      }

      wishlistBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const isInWishlist = window.wishlistManager.isInWishlist(product.id);

        if (isInWishlist) {
          window.wishlistManager.removeItem(product.id);
          wishlistBtn.classList.remove("active");
        } else {
          window.wishlistManager.addItem(product.id);
          wishlistBtn.classList.add("active");
        }
      });
    }
  },
};

const PageInitializer = {
  init: () => {
    if (document.getElementById("products-container")) {
      HomepageProducts.display();
      window.addEventListener("resize", HomepageProducts.display);
    } else if (document.getElementById("products-grid")) {
      ProductsPage.init();
    } else if (document.querySelector(".product-container")) {
      ProductDetailsPage.init();
    }
  },
};

document.addEventListener("DOMContentLoaded", PageInitializer.init);
