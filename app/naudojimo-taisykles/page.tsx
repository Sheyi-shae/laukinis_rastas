
const terms = [
  {
    number: "01",
    title: "Bendra informacija ir svetainės paskirtis",
    paragraphs: [
      "Ši svetainė yra skirta teikti informaciją apie mūsų teikiamas paslaugas, veiklą ir profesionalias įžvalgas.",
      "Mes pasiliekame teisę bet kuriuo metu be išankstinio įspėjimo keisti, pildyti ar pašalinti svetainėje esantį turinį, funkcijas ar visą svetainės prieinamumą.",
    ],
  },
  {
    number: "02",
    title: "Intelektinės nuosavybės teisės",
    paragraphs: [
      "Visos teisės į svetainėje esantį turinį (įskaitant, bet neapsiribojant: tekstus, dizainą, prekių ženklus, logotipus, grafiką, vaizdinę bei garso medžiagą, programinį kodą) priklauso mums arba teisėtiems licencijos išdavėjams.",
      "Draudžiama be išankstinio raštiško sutikimo kopijuoti, atgaminti, platinti, keisti, perpublikuoti ar kitaip naudoti svetainės turinį komerciniams ar viešiems tikslams.",
      "Leidžiama peržiūrėti, atsisiųsti ir spausdinti svetainės medžiagą tik asmeniniams, nekomerciniams tikslams, su sąlyga, kad nebus pažeistos autoriaus teisės.",
    ],
  },
  {
    number: "03",
    title: "Vartotojo įsipareigojimai ir elgesio taisyklės",
    paragraphs: [
      "Vartotojas įsipareigoja naudotis svetainė teisėtai, sąžiningai ir tik pagal jos tiesioginę paskirtį.",
    ],
    listIntro: "Griežtai draudžiama:",
    list: [
      "Bandyti pažeisti svetainės saugumą, sistemų vientisumą ar gauti neįgaliotą prieigą prie serverių, duomenų bazių bei kitų vartotojų paskyrų.",
      "Platinti virusus, kenkėjiškas programas, nepageidaujamus el. laiškus (SPAM) ar kitą žalingą kodą.",
      "Naudoti automatizuotas duomenų rinkimo programas (pvz.,scraping, bots) be išankstinio leidimo.",
      "Pateikti klaidinančią, melagingą ar kitų asmenų teises pažeidžiančią informaciją.",
    ],
  },
  {
    number: "04",
    title: "Atsakomybės ribojimas ir garantijų nebuvimas",
    paragraphs: [
      "Svetainės turinys pateikiamas „toks, koks yra“ (as is) ir „koks prieinamas“ (as available). Mes neteikiame jokių tiesioginių ar numanomų garantijų dėl turinio tikslumo, išsamumo, savalaikiškumo ar tinkamumo konkrečiam tikslui.",
      "Svetainėje pateikiama informacija yra bendro pobūdžio ir negali būti laikoma oficialia teisine, finansine ar kitokio pobūdžio profesionalia konsultacija.",
      "Mes neatsakome už jokius tiesioginius, netiesioginius, atsitiktinius ar šalutinius nuostolius, atsiradusius dėl naudojimosi svetaine, negalėjimo ja naudotis arba dėl pasitikėjimo joje esančia informacija.",
    ],
  },
  {
    number: "05",
    title: "Atsakomybė už paslaugų sutrikimus",
    paragraphs: [
      "Mes nesuteikiame garantijos, kad svetainė veiks be pertrūkių, saugiai ir be klaidų. Mes neprisiimame atsakomybės už techninius gedimus, ryšio sutrikimus ar kitus trikdžius, nepriklausančius nuo mūsų kontrolės.",
    ],
  },
  {
    number: "06",
    title: "Privatumas ir asmens duomenų apsauga",
    paragraphs: [
      "Visi asmens duomenys, kuriuos pateikiate naudodamiesi šia svetaine, tvarkomi griežtai laikantis galiojančių teisės aktų (įskaitant BDAR) ir mūsų vidinių duomenų apsaugos taisyklių.",
    ],
  },
  {
    number: "07",
    title: "Taisyklių pakeitimai",
    paragraphs: [
      "Mes turime teisę bet kuriuo metu atnaujinti arba pakeisti šias Taisykles. Nauja Taisyklių redakcija įsigalioja nuo jos paskelbimo svetainėje momento. Rekomenduojame reguliariai peržiūrėti šį puslapį.",
    ],
  },
  {
    number: "08",
    title: "Taikytina teisė ir ginčų sprendimas",
    paragraphs: [
      "Šioms Taisyklėms ir santykiams, kylantiems dėl naudojimosi svetaine, taikoma Lietuvos Respublikos teisė.",
      "Visi nesutarimai ar ginčai, kylantys dėl šių Taisyklių, sprendžiami derybų keliu. Nepavykus susitarti, ginčai sprendžiami atitinkamame teisme pagal mūsų buveinės vietą.",
    ],
  },
];

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-[#F7F5EE] pb-24 pt-32 sm:pt-40">
      <div className="container">
        {/* Page heading */}
        <header className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
          <span className="mb-5 inline-flex items-center gap-3 text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-[#788C6A]">
          
            Teisinė informacija
          
          </span>

          <h2 className="font-heading text-4xl font-semibold tracking-tight text-[#262626] sm:text-5xl lg:text-6xl">
            Naudojimosi taisyklės
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#6B6F76] sm:text-lg">
            Susipažinkite su svetainės naudojimo taisyklėmis ir sąlygomis.
          </p>
        </header>

        {/* Terms content */}
        <div className="mx-auto max-w-4xl">
          <div className="divide-y divide-[#E5E0D5] border-y border-[#E5E0D5]">
            {terms.map((section) => (
              <section
                key={section.number}
                className="grid gap-5 py-9 sm:grid-cols-[76px_1fr] sm:gap-8 sm:py-11"
              >
                <span className="font-heading mt-1 text-sm md:text-base font-semibold tracking-wider text-[#B8875B]">
                  {section.number}
                </span>

                <div>
                  <h4 className="mb-6 font-heading text-xl font-semibold leading-snug text-[#262626] sm:text-2xl">
                    {section.title}
                  </h4>

                  <div className="space-y-5 text-justify text-[15px] leading-8 text-[#555B55] sm:text-base">
                    {section.paragraphs.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}

                    {section.listIntro && (
                      <p className="font-semibold text-justify text-[#404040]">
                        {section.listIntro}
                      </p>
                    )}

                    {section.list && (
                      <ul className="space-y-4 pl-5 text-justify">
                        {section.list.map((item, index) => (
                          <li
                            key={index}
                            className="list-disc pl-2 text-justify marker:text-[#B8875B]"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-12 flex flex-col gap-4 border-l-2 border-[#B8875B] bg-[#F0EDE4] px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p className="text-sm leading-7 text-[#555B55]">
              Turite klausimų dėl šių taisyklių? Susisiekite su mumis.
            </p>

            <a
              href="mailto:info@laukinisrastas.lt"
              className="shrink-0 text-sm font-semibold text-[#2F4A3B] transition-colors hover:text-[#B8875B]"
            >
              info@laukinisrastas.lt
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
