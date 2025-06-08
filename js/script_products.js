const products = [
  {
    id: 1,
    name: "Kawaii Animals Pencil Erasers",
    description:
      "A cute set of animal-shaped erasers, perfect for school or gifts.",
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
    description: "Fun and quirky alien-themed erasers with a galactic vibe.",
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
    description: "Bright and colorful erasers shaped like juicy fruit slices.",
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
      "Sweet heart-shaped erasers that add charm to any pencil case.",
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
    description: "Roar into school with these adorable dinosaur erasers.",
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
      "A nostalgic set of 80s collectible erasers from a variety of cartoons.",
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
    description: "Retro yellow erasers from the 80s, great for collectors.",
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
      "Official Sanrio character pen featuring Hello Kitty, Kuromi, My Melody, and other favorites with smooth 0.5mm black ink and collectible charm topper.",
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
      "Limited edition cherry blossom-themed pouch with embroidered Sanrio characters, perfect for storing stationery or small cosmetics.",
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
      "A 2007 Hello Kitty diary with apple theme, ideal for journaling.",
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
    description: "Stylish vintage Sanrio baby blue purse wallet.",
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
      "Classic black Stypen fountain pen from the 80s with timeless design.",
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
      "Elegant purple marbled fountain pen from the 80s for writing in style.",
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
      "A full box of 40 tiny fruit-shaped erasers, fun and functional.",
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
    description: "A lovely daisy-themed gel pen to brighten up your writing.",
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
    description: "Charming gel pen with a capybara topper for animal lovers.",
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
    description: "Soft gel pen featuring a cute cat paw on top.",
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
      "Set of 12 popcorn-style erasers, perfect for snack-themed stationery fans.",
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
    description: "Sweet-themed eraser that looks like cake.",
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
      "Gel pen featuring a bear and cherry blossoms for a soft aesthetic touch.",
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
    description: "A girly vintage sticker set with a downtown charm aesthetic.",
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
      "Sticker pack with red-toned vintage coquette style illustrations.",
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
    description: "Elegant leather-bound notepad crafted by hand in Italy.",
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
    description: "Retro notepad featuring classic Royal Crown Cola branding.",
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
      "Luxury vintage Parker 51 fountain pen, a true collector's piece.",
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
      "Adorable strawberry Kewpie character sticker with retro charm.",
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
      "Whimsical bunny sticker holding a strawberry, full of sweetness.",
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
    description: "Charming cat locket sticker with a strawberry-themed design.",
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
      "Elegant vintage-inspired stationery set featuring a premium linen-textured notepad and matching envelopes, perfect for handwritten letters and notes.",
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
      "Sleek metallic headphone stand with a constellation design that adds a cosmic touch to your workspace while keeping your headphones secure.",
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
      "Beautiful white resin headphone stand featuring delicate angel wings design that brings a heavenly aesthetic to your desk setup.",
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
      "Charming floral-inspired headphone stand with realistic daisy details, adding a fresh spring vibe to your workspace organization.",
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
      "Romantic heart-shaped headphone stand with a glossy finish, perfect for adding a touch of love to your gaming or work station.",
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
      "Unique snowflake-inspired headphone stand with intricate geometric patterns, bringing winter wonderland charm to your desk year-round.",
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
      "Autumn-themed headphone stand featuring detailed leaf patterns in warm seasonal colors, perfect for nature-inspired setups.",
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
      "Bright and cheerful sunflower design headphone stand that brings summer sunshine to your workspace all year long.",
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
      "Trendy monstera leaf design headphone stand that combines modern aesthetics with functional organization for plant lovers.",
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
      "Mystical crescent moon headphone stand with a celestial glow effect, perfect for astronomy enthusiasts and dreamers.",
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
      "Gothic-inspired bat-shaped headphone stand with wing details, ideal for Halloween decor or year-round spooky aesthetics.",
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
      "Delicate cherry blossom headphone stand with pink floral accents, bringing Japanese spring beauty to your desktop.",
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
      "Minimalist modern headphone stand with smooth curves and a weighted base for stability in contemporary workspaces.",
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
      "Elegant headphone stand featuring a graceful butterfly bow design that adds feminine charm to any desk arrangement.",
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
      "Futuristic mechanical angel wings headphone stand with detailed metallic finish for sci-fi and gaming enthusiasts.",
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
      "Whimsical floating cloud-shaped pen holder that brings a dreamy atmosphere to your desk while keeping writing tools organized.",
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
      "Set of pixel-style Minecraft animal pen holders featuring popular creatures from the game, perfect for gamer workspaces.",
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
      "Adorable ceramic frog pen holder with glossy finish and cute expression, adding playful nature vibes to your stationery collection.",
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
      "Zesty lemon-themed notepad set with vibrant yellow covers and matching accessories, bringing summer freshness to your notes.",
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
      "Sweet blueberry print notepad collection featuring rich blue hues and fruity designs for berry-loving stationery fans.",
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
      "Delicious strawberry-patterned notepad set with juicy red accents and matching accessories for fruity stationery lovers.",
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
    id: 50,
    name: "Strawberry Notepad Set",
    description:
      "Delicious strawberry-patterned notepad set with juicy red accents and matching accessories for fruity stationery lovers.",
    filter: "Notebooks",
    category: "Notepads",
    collection: "",
    price: 44.5,
    rating: 4.5,
    reviews: 76,
    image:
      "https://thehumblewildflower.com/cdn/shop/files/PhotoMar292024_25321PM.jpg?v=1712090293&width=823",
  },
  {
    id: 51,
    name: "Cat Memo Note Pad",
    description:
      "Adorable cat-themed memo pad featuring cute feline illustrations, perfect for quick notes and cat enthusiasts.",
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
      "Artistic cat illustration memo pad with various feline poses and expressions, ideal for creative notes and sketches.",
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
      "Whimsical elephant-shaped memo notes with adhesive backing, perfect for reminders and decorative planning.",
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
      "Fun receipt-style cat memo pad with playful feline-themed 'transactions' for creative note-taking and lists.",
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
      "Adorable cat-themed daily planner notepad with checklist format, featuring playful kitten illustrations for organizing your tasks with feline charm.",
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
      "Set of 6 vibrant gel pens with delicious fruit aromas (strawberry, lemon, grape, etc.) and quick-drying ink that prevents smudging for smooth writing.",
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
      "Innovative highlighter with built-in stamp tip for creating perfect straight lines or dotted patterns, ideal for planners and note-taking.",
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
      "Popular dual-tip mildliner with chisel and fine point in soft pastel colors that won't bleed through paper, perfect for subtle highlighting.",
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
      "Assortment of 45 adorable cat stickers featuring various breeds, poses, and playful designs for decorating planners, laptops, and notebooks.",
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
      "French-inspired round glasses-shaped pens with comfortable grip and smooth 0.5mm black ink, combining fashion and function.",
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
      "Premium Korean gel pen set featuring vibrant colors with consistent ink flow and comfortable rubber grip for extended writing sessions.",
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
      "Japanese precision eraser known for its clean erasing with minimal residue and durable construction that lasts longer than standard erasers.",
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
      "Smooth-gliding correction tape with 5mm width, quick-drying formula, and refillable design for precise error coverage without wrinkles.",
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
      "Complete set of 8 soft pastel highlighters with dual tips (chisel and fine) for versatile marking and gentle colors that won't overwhelm text.",
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
      "Erasable highlighters in natural colors with thermo-sensitive ink that disappears when rubbed with the special FriXion eraser tip.",
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
      "Specialty journal with ticket stub pockets and cinema-themed pages to preserve your movie memories, featuring vintage film reel designs.",
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
      "Motivational vinyl sticker with uplifting message, perfect for laptops, water bottles, or journals to provide daily encouragement.",
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
      "Heartwarming friendship sticker with caring message, printed on durable waterproof vinyl with matte finish.",
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
      "Foodie-themed encouragement sticker with cute typography, perfect for kitchen laptops or lunchboxes.",
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
      "Relatable humorous sticker with playful feminine design, great for water bottles or journals.",
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
      "Workplace humor vinyl sticker with bold statement, perfect for laptops in office environments.",
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
      "Self-care reminder sticker with soothing pastel design, ideal for self-care journals or work devices.",
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
      "Wanderlust-inspired sticker with suitcase design and motivational quote, perfect for travel journals or passports.",
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
      "Sleek transparent barrel ballpoint pen with vibrant multicolor ink option, perfect for color-coding notes or adding a pop of brightness to your writing. Part of the Rainbow Desk collection.",
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
      "Set of 6 pastel gel pens featuring Hello Kitty charms on each cap. Smooth 0.7mm tips for vibrant writing with minimal pressure. Includes pink, mint, lavender, yellow, baby blue, and peach colors.",
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
      "A5 size notebook with 80 sheets of pastel-lined paper. Features a glittery Hello Kitty cover with silver spiral binding. Perfect for school notes or journaling with 7mm line spacing.",
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
      "Cloud-themed notebook featuring Cinnamoroll flying across the cover. Includes 70 sheets of premium quality paper that resists ink bleeding. Blue spiral binding matches the sky theme.",
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
      "Gothic-style notebook with Kuromi's punk aesthetic. Black cover with purple accents and 90 sheets of dark-edged paper. Purple spiral binding completes the edgy look.",
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
      "Water-resistant polyester pouch with Hello Kitty embroidery. Measures 8x4 inches with a full-length zipper. Features multiple interior pockets for organizing pens and small stationery.",
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
      "Fluffy cloud-print fabric case with Cinnamoroll appliqué. Extra padding protects pens, includes a secret back pocket for erasers or USB drives. Measures 7.5x3.5 inches.",
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
      "Black vegan leather case with purple stitching and Kuromi's skull emblem. Includes a removable keychain and metal zipper pull. Sleek design fits up to 12 standard pens.",
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
      "Green water-resistant case with Keroppi's smiling face. Features a clear PVC window to see contents and an interior mesh pocket. Bright yellow zipper adds playful contrast.",
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
      "3D plush pencil case shaped like Hello Kitty's head. Soft polyester exterior with room for 8-10 pens. Features embroidered details and a side zipper that blends with the design.",
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
      "Adorable plush case shaped like Cinnamoroll with floppy ears. Super soft minky fabric exterior with enough space for pens and a small calculator. Measures 6x4x3 inches when full.",
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
      "Hardcover sticker album with 30 themed pages for organizing your Kuromi stickers. Includes 15 exclusive die-cut stickers and acid-free pages to preserve adhesive quality.",
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
      "Unique roll-up design that unfolds to reveal 12 elastic pen loops. Cream-colored fabric with pastel rainbow stitching. Secures with a ribbon tie and includes a matching fabric pencil.",
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
      "Galaxy-print drawstring pouch with glitter star accents. Made from durable nylon that's easy to clean. Roomy interior fits up to 15 pens plus other small supplies. Measures 9x5 inches.",
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
      "Set of 50 vintage-style dog-themed stickers with holographic foil accents. Each 1-2 inch sticker features different retro dog breeds with colorful backgrounds. Perfect for planners, laptops, or water bottles.",
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
      "Spring-themed gel pen set featuring delicate cherry blossom designs and rabbit charms. Includes pink, mint, lavender, and peach colors with 0.5mm fine tips for precise writing. Ink is water-resistant and smear-proof.",
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
      "Set of 4 pastel highlighters with adorable bear-shaped caps. Chisel tips (3mm/1mm) for both broad highlighting and underlining. Non-toxic, quick-drying ink that won't bleed through standard notebook paper.",
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
      "Dual-tipped highlighters with cat paw prints on each cap. Each pen contains two complementary colors (total 12 shades). Features both broad and fine tips for versatile marking. Includes a free sticker sheet with cat designs.",
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
      "Premium alcohol-based markers featuring Sanrio characters. Includes 48 blendable pastel shades with dual tips (fine & chisel). Comes with a carrying case and color chart. Works on paper, wood, and ceramics.",
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
      "Vintage postal-themed sticker collection with 60+ designs. Features wax seals, postmarks, stamps, and parcel illustrations. Matte finish with some gold foil accents. Perfect for journaling or decorating letters.",
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
      "Plush pencil case shaped like Chiikawa with soft faux fur exterior. Measures 8x5 inches with a roomy main compartment. Features embroidered face details and a sturdy zipper. Includes a surprise keychain.",
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
      "Hard-shell pencil case featuring the entire Chiikawa crew. Durable EVA material with smooth zipper. Interior has elastic loops for 10 pens and a mesh pocket. Measures 7.5x4 inches.",
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
      "B5 size notebook (7x10 inches) with 80 sheets of premium paper. Features Chiikawa in various poses across the cover. Includes 5 themed divider pages and a sheet of character stickers.",
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
      "Bee-themed notebook starring Hachiware character. Yellow cover with honeycomb pattern and 192 pages of grid paper. Includes a golden elastic closure and back pocket for loose papers.",
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
      "Rabbit-inspired notebook with Usagi character art. Pastel pink cover with 160 sheets of dotted paper. Special features include a ribbon bookmark and matching sticker sheet.",
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
      "Flying squirrel-themed notebook with Momonga character. Soft-touch blue cover with 144 pages of blank paper for sketching. Includes a sheet of Momonga-themed memo papers.",
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
      "Set of 5 gel pens featuring different Chiikawa characters. 0.38mm fine tips for precise writing in yellow, blue, red, green, and purple. Each pen has a unique character topper that matches the ink color.",
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
        <div class="product-rating" aria-label="Rating: ${product.rating.toFixed(
          1
        )} out of 5">
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
    window.location.href = `product.html?id=${productId}`;
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
  currentSort: "featured",
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
    pageNumbers.textContent = `${ProductsPage.currentPage} of ${
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

    if (ProductsPage.currentSort !== "featured")
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
    emptyTitle.textContent = "No Products Found";

    const emptyMessage = document.createElement("p");
    emptyMessage.className = "empty-message";

    if (ProductsPage.currentSearchTerm) {
      emptyMessage.textContent = `We couldn't find any products matching "${ProductsPage.currentSearchTerm}". Try a different search term.`;
    } else if (
      ProductsPage.currentFilters.categories.length > 0 ||
      ProductsPage.currentFilters.ratings.length > 0 ||
      ProductsPage.currentFilters.collections.length > 0
    ) {
      emptyMessage.textContent =
        "No products match your current filters. Try adjusting your filters.";
    } else {
      emptyMessage.textContent =
        "We couldn't find any products at the moment. Please check back later.";
    }

    const clearFiltersButton = document.createElement("button");
    clearFiltersButton.className = "empty-action-btn";
    clearFiltersButton.textContent = "Clear All Filters";

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
    ProductsPage.currentSort = "featured";
    ProductsPage.currentSearchTerm = "";
    ProductsPage.currentPage = 1;

    if (sortSelect) sortSelect.value = "featured";
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
        `Rating: ${product.rating.toFixed(1)} out of 5`
      );
    }

    const reviewCountElement = document.getElementById("review-count");
    if (reviewCountElement) {
      reviewCountElement.textContent = `(${product.reviews} reviews)`;
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
