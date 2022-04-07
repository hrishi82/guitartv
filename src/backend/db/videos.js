/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

 import { v4 as uuid } from "uuid";

export const videos = [
  {
    _id: uuid(),
    title: "Do you Djent?",
    creator: "Rick Beato",
    views: 156004,
    category: "Djent",
    src: "https://www.youtube.com/embed/nHshYg9ONls",
    thumbnail: "https://i.ytimg.com/vi/nHshYg9ONls/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA9ccMdePx-CKF9ngQatCJLumvdZQ"
  },
  {
    _id: uuid(),
    title: "ERRA - Nigh To Silence [Official Music Video]",
    creator: "ERRA",
    views: 136520,
    category: "Djent",
    src: "https://www.youtube.com/embed/mDKIIDQczWI",
    thumbnail: "https://i.ytimg.com/vi/mDKIIDQczWI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBGnXs_tSmPYLsLiEkRiMRl_MPRFw"
  },
  {
    _id: uuid(),
    title: "Periphery - Marigold (Guitar Playthrough)",
    creator: "Periphery",
    views: 80467,
    category: "Djent",
    src: "https://www.youtube.com/embed/zBWURleQuLc",
    thumbnail: "https://res.cloudinary.com/dac2rwutk/image/upload/v1649336619/marigold_pxmctg.jpg"
  },
  {
    _id: uuid(),
    title: "ERRA - Snowblood (Guitar Playthrough)",
    creator: "ERRA",
    views: 97467,
    category: "Djent",
    src: "https://www.youtube.com/embed/nP03YAzJEqY",
    thumbnail: "https://i.ytimg.com/vi/nP03YAzJEqY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDI8le4Pm_F0u4UN_dKTKbsZ5i5FQ"
  },
  {
    _id: uuid(),
    title: "Ishimura - Jason Richardson & Luke Holland",
    creator: "Jason Richardson",
    views: 34467,
    category: "Djent",
    src: "https://www.youtube.com/embed/yAG3inRtrmM",
    thumbnail: "https://res.cloudinary.com/dac2rwutk/image/upload/v1649336619/ishimura_brkh7g.jpg"
  },
  {
    _id: uuid(),
    title: "John Petrucci - Rock Discipline",
    creator: "John Petrucci",
    views: 124467,
    category: "Rock",
    src: "https://www.youtube.com/embed/3Ababg5Y8kA",
    thumbnail: "https://res.cloudinary.com/dac2rwutk/image/upload/v1649336613/rockdiscipline_gggixu.jpg"
  },
  {
    _id: uuid(),
    title: "Dream Theater - Hollow Years (Live at Budokan)",
    creator: "Dream Theater",
    views: 132267,
    category: "Progressive",
    src: "https://www.youtube.com/embed/Xc5tRUkiAe8",
    thumbnail: "https://i.ytimg.com/vi/Xc5tRUkiAe8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDbEy8YAQHKUzUzifPc53duoWDYuA"
  },
  {
    _id: uuid(),
    title: "B.B. King - The Thrill Is Gone [Crossroads 2010]",
    creator: "B.B. King",
    views: 264467,
    category: "Blues",
    src: "https://www.youtube.com/embed/SgXSomPE_FY",
    thumbnail: "https://res.cloudinary.com/dac2rwutk/image/upload/v1649336619/bbking_fhdh02.jpg"
  },

];


