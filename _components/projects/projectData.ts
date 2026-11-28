export interface Project {
  id: string;
  name: string;
  title: string;
  location: string;
  category: string;
  shortDescription: string;
  story: string[];
  images: string[];
  coverImage: string;
}

export const projects: Project[] = [
  {
    id: "raimonda",
    name: "Raimonda",
    title: "Namai prie Nemuno",
    location: "Jurbarko rajonas, Lietuva",
    category: "Gyvenamasis rąstinis namas",
    shortDescription:
      "Jaukūs rąstiniai namai gamtos apsuptyje, prie Nemuno upės.",

    story: [
      "Kai Raimonda kreipėsi į „Laukinio rąsto“ komandą, jos vizija buvo jaukus rąstinis namas išskirtinėje gamtos apsuptyje – Jurbarko rajone, prie Nemuno.",

      "Profesionali komanda, sklandus bendravimas ir įsiklausymas į klientės lūkesčius leido sklandžiai įgyvendinti projektą.",

      "Šiandien Raimonda džiaugiasi natūralaus medžio grožiu, namų jaukumu ir nuostabiu Nemuno kraštovaizdžiu.",
    ],

    coverImage: "/images/projects/raimonda/1.jpg",
    images: [
         "/images/projects/raimonda/1.jpg",
    "/images/projects/raimonda/2.jpg",
 "/images/projects/raimonda/3.jpg",
   "/images/projects/raimonda/4.jpg",
   "/images/projects/raimonda/6.jpg",
    ],
  },

  {
    id: "fredis",
    name: "Fredis",
    title: "Daugiau nei namai",
    location: "Tartu, Estija",
    category: "Rąstinių pastatų kompleksas",
    shortDescription:
      "Gyvenimo, poilsio ir verslo erdvė, kurioje dera natūrali mediena ir funkcionalumas.",

    story: [
      "Fredis norėjo ne tik rąstinio namo. Jo vizija buvo erdvė, kurioje būtų galima gyventi, ilsėtis, mėgautis pirtimi ir plėtoti verslą.",

      "Taip gimė rąstinių pastatų kompleksas, kuriame susijungia natūralus medis, meistrystė ir funkcionalumas.",

      "Šiandien tai vieta, kurioje asmeninis gyvenimas, poilsis ir verslas papildo vienas kitą.",
    ],

    coverImage: "/images/projects/fredis/1.jpg",
    images: [
       "/images/projects/fredis/1.jpg",
  "/images/projects/fredis/2.jpg",
  "/images/projects/fredis/3.jpg",
    "/images/projects/fredis/4.jpg",
  "/images/projects/fredis/5.jpg",
    ],
  },

  {
    id: "ruslanas",
    name: "Ruslanas",
    title: "Poilsio akimirkoms savo namuose",
    location: "Stoniškiai, Lietuva",
    category: "Rąstinė pirtis",
    shortDescription:
      "Jauki rąstinė pirtis, tapusi natūralia namų aplinkos ir poilsio dalimi.",

    story: [
      "Ruslanas svajojo apie jaukią rąstinę pirtį šalia savo namų – vietą, kurioje galėtų atsipalaiduoti ir pabėgti nuo kasdienybės.",

      "Klientą maloniai nustebino tai, kaip greitai jo vizija tapo realybe. Sklandus darbas, dėmesys detalėms ir meistrų kruopštumas padėjo įgyvendinti sumanymą.",

      "Dabar pirtis tapo neatsiejama namų aplinkos dalimi – vieta poilsiui, gerai savijautai ir jaukioms šeimos akimirkoms.",
    ],

    coverImage: "/images/projects/ruslan/1.jpg",
    images: [
       "/images/projects/ruslan/1.jpg",
  "/images/projects/ruslan/2.jpg",
  "/images/projects/ruslan/3.jpg",
    ],
  },
];