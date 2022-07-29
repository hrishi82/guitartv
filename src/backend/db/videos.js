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
    genre: "Djent",
    src: "https://www.youtube.com/embed/nHshYg9ONls",
    thumbnail: "https://i.ytimg.com/vi/nHshYg9ONls/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA9ccMdePx-CKF9ngQatCJLumvdZQ"
  },
  {
    _id: uuid(),
    title: "ERRA - Nigh To Silence [Official Music Video]",
    creator: "ERRA",
    views: 136520,
    genre: "Djent",
    src: "https://www.youtube.com/embed/mDKIIDQczWI",
    thumbnail: "https://i.ytimg.com/vi/mDKIIDQczWI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBGnXs_tSmPYLsLiEkRiMRl_MPRFw"
  },
  {
    _id: uuid(),
    title: "Periphery - Marigold (Guitar Playthrough)",
    creator: "Periphery",
    views: 80467,
    genre: "Djent",
    src: "https://www.youtube.com/embed/zBWURleQuLc",
    thumbnail: "https://i.ytimg.com/vi/zBWURleQuLc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLASlIVcvUeKlgW-EyFvTemIRdrHJw"
  },
  {
    _id: uuid(),
    title: "ERRA - Snowblood (Guitar Playthrough)",
    creator: "ERRA",
    views: 97467,
    genre: "Djent",
    src: "https://www.youtube.com/embed/nP03YAzJEqY",
    thumbnail: "https://i.ytimg.com/vi/nP03YAzJEqY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDI8le4Pm_F0u4UN_dKTKbsZ5i5FQ"
  },
  {
    _id: uuid(),
    title: "TOP 80 GREATEST GUITAR INTROS",
    creator: "Paul Davids",
    views: 34467,
    genre: "Blues",
    src: "https://www.youtube.com/embed/Le9v4F7NXEI",
    thumbnail: "https://i.ytimg.com/vi/Le9v4F7NXEI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAoFqOsQ0Spjc4cTVM2S69dGnSweQ"
  },
  {
    _id: uuid(),
    title: "John Petrucci - Rock Discipline",
    creator: "John Petrucci",
    views: 124467,
    genre: "Rock",
    src: "https://www.youtube.com/embed/3Ababg5Y8kA",
    thumbnail: "https://res.cloudinary.com/dac2rwutk/image/upload/v1649336613/rockdiscipline_gggixu.jpg"
  },
  {
    _id: uuid(),
    title: "Dream Theater - Hollow Years (Live at Budokan)",
    creator: "Dream Theater",
    views: 132267,
    genre: "Progressive",
    src: "https://www.youtube.com/embed/Xc5tRUkiAe8",
    thumbnail: "https://i.ytimg.com/vi/Xc5tRUkiAe8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDbEy8YAQHKUzUzifPc53duoWDYuA"
  },
  {
    _id: uuid(),
    title: "Play Blues On Guitar In Any Key (with this riff)",
    creator: "Acoustic Life",
    views: 264467,
    genre: "Blues",
    src: "https://www.youtube.com/embed/okU5U4or928",
    thumbnail: "https://i.ytimg.com/vi/btoooVk54LY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDtP2dlM0_Q7N88VcrtmkpL-7AYgQ"
  },
  {
    _id: uuid(),
    title: "10 Levels of Math Rock (Feat. Manuel Gardner Fernandes)",
    creator: "Nik Nocturnal",
    views: 16467,
    genre: "Math rock",
    src: "https://www.youtube.com/embed/VGidMCdGJFA",
    thumbnail: "https://i.ytimg.com/vi/VGidMCdGJFA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDm6Fx_Fid3869ALMk0_yghH4fVyA"
  },
  {
    _id: uuid(),
    title: "Covet - Shibuya (ft.San Holo) (official video)",
    creator: "Covet",
    views: 524561,
    genre: "Math rock",
    src: "https://www.youtube.com/embed/RXGwVJCdV6A",
    thumbnail: "https://i.ytimg.com/vi/RXGwVJCdV6A/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAL7BEfuIcjTuXuKUlNrt-iJkCJIQ"
  },

];


