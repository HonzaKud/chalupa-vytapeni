/* Konsolidovaný stav; historické odhady nejsou vstupem vykreslení. */
window.HEATING_DATA = {
  "updated": "2026-10-19",
  "devices": {
    "boiler": {
      "name": "Kotel",
      "model": "SLOKOV VARIANT SL27-3",
      "place": "Kotelna · K",
      "photo": "boiler",
      "status": "Označení na plášti",
      "kind": "known",
      "summary": "Zdroj tepla pro topnou vodu. Rodina topí uhlím i dřevem.",
      "facts": [
        "Dohledaný návod modelu uvádí výkon 27 kW. Výrobní štítek konkrétního kusu ještě chybí.",
        "Návod předepisuje hnědé uhlí ořech 1. Vhodnost běžného topení dřevem není potvrzená.",
        "Kotlové čerpadlo se podle otce zapíná přibližně při 60 °C na příložném termostatu."
      ],
      "unknown": "Typ ochrany zpátečky a odvod přebytečného tepla při výpadku elektřiny zůstávají neověřené.",
      "source": "Fotografie zařízení, sdělení rodiny a návod výrobce.",
      "link": "https://www.nase-kotle.cz/fotky3190/fotov/3190_26_3190_20__ps_10Navod-SL27-3-33-3-CZ-06_2012.pdf"
    },
    "tanks": {
      "name": "Akumulační nádrže",
      "model": "Pravděpodobně Regulus PS 800 E",
      "place": "Místnost s akumulací · A1 / A2",
      "photo": "tanks",
      "status": "Typ k potvrzení",
      "kind": "probable",
      "summary": "Uchovávají teplo ve větším objemu topné vody pro pozdější vytápění.",
      "facts": [
        "Volně nalezený štítek uvádí PS 800 E a skutečný objem 780 l. Příslušnost k oběma nádržím nepotvrzená.",
        "Pokud jsou oba kusy shodné, celkem jde o 1560 litrů.",
        "A1 a A2 jsou značky našeho plánku, nikoli označení pořadí proudění.",
        "Hodnota výstup AKU neukazuje průměrnou teplotu ani zásobu tepla obou nádrží."
      ],
      "unknown": "Sériové či paralelní propojení, přesná poloha čidel a model obou kusů.",
      "source": "Fotografie, nalezený štítek a návod Regulus.",
      "link": "https://www.regulus.cz/download/navody/cz/nn_cz_navod_ps-e-od-600.pdf"
    },
    "adex": {
      "name": "Hlavní regulátor",
      "model": "ADEX Comfort D · verze 13 dle dokladu",
      "place": "Mezi A2 a oknem na stěně · Ř",
      "photo": "adex",
      "status": "Dokumentace doložena",
      "kind": "known",
      "summary": "Řídí vytápění prostřednictvím připojených čidel, čerpadel a směšovacích pohonů.",
      "facts": [
        "Záruční list uvádí Comfort D, verzi 13 a rok 2025. Aktuální firmware nezávisle neověřený.",
        "Doložené dvě obrazovky: topení 1 a topení 2. Šipka dolů mezi nimi přepíná.",
        "PROG 45 / PROG 30 odpovídá programovému požadavku na teplotu vody, ne teplotě místnosti.",
        "Příloha D11 se dvěma směšovanými okruhy je zakroužkovaná. Je to silný kandidát, ne důkaz vybraného systému."
      ],
      "unknown": "Zvolený systém, skutečné zapojení výstupů a vliv pokojového termostatu.",
      "source": "Vlastní fotografie a kompletně archivovaný papírový návod 1–32 plus přílohy D11–D13."
    },
    "mix": {
      "name": "Směšovací skupiny",
      "model": "Pohony Regulus · čerpadla Grundfos",
      "place": "Za nádržemi · levá C2 / pravá C3",
      "photo": "mix",
      "status": "Pravá větev označena",
      "kind": "known",
      "summary": "Čerpadlo zajišťuje oběh, směšovací ventil upravuje teplotu vody přimícháním vratné vody.",
      "facts": [
        "Na pravé skupině je čitelný štítek „2 – podlahové topení“.",
        "Přiřazení pravé skupiny k topení 2 na ADEXu je pravděpodobné.",
        "Levá skupina nejspíš obsluhuje radiátory. Přímé ověření propojení zatím chybí."
      ],
      "unknown": "Přesné typy skupin, režimy čerpadel a zapojení pohonů.",
      "source": "Detaily obou skupin a štítek pravé větve."
    },
    "manifold": {
      "name": "Rozdělovač podlahovky",
      "model": "Šest vývodů · dvě vodorovné lišty",
      "place": "Pod schody v přízemí · P",
      "photo": "manifold",
      "status": "Šest vývodů ověřeno",
      "kind": "known",
      "summary": "Rozděluje vodu mezi podlahové smyčky jednotlivých prostorů.",
      "facts": [
        "Zleva: ložnice 1, ložnice 2, kuchyně 1, chodba, koupelna 1, jídelna.",
        "Bílé krytky ventilů nahoře, průtokoměry dole. Elektrické pohony smyček na snímku nejsou vidět.",
        "Štítek jídelna pracovně odpovídá prostoru u krbu podle posledního výkladu rodiny.",
        "Samostatný směšovač zde není doložen; směšovací skupina je u akumulace."
      ],
      "unknown": "Souvislé ověření tras od vývodů do místností, průtoky a délky smyček.",
      "source": "Čitelné fotografie štítků a popis pokládky rodinou."
    },
    "thermostat": {
      "name": "Pokojový termostat",
      "model": "TRINNITY · přesný model neověřen",
      "place": "Dočasně nad krbem · T",
      "photo": "thermostat",
      "status": "Umístění dočasné",
      "kind": "probable",
      "summary": "Pokojová jednotka s otočným ovladačem a samostatným přijímačem vedle ADEXu.",
      "facts": [
        "Návod k sadě je archivovaný. Pokojová jednotka používá dvě baterie AA.",
        "Skutečné párování a řízená větev nejsou nezávisle ověřené.",
        "Poloha nad krbem není vybraná jako trvalé místo. Návod požaduje umístění mimo zdroje tepla."
      ],
      "unknown": "Přesný typ, vazba na ADEX a vhodné konečné umístění.",
      "source": "Fotografie, návod TRINNITY a potvrzení dočasné polohy."
    },
    "water": {
      "name": "Bojler",
      "model": "Typ a objem zatím neznáme",
      "place": "Kotelna · B",
      "photo": "water",
      "status": "Ohřev k ověření",
      "kind": "probable",
      "summary": "Zásobník vody pro běžné použití. Vedle elektrické části má i další potrubní přípojky.",
      "facts": [
        "Boční přípojky naznačují kombinovaný ohřev elektřinou a topnou vodou přes výměník.",
        "Topná voda má předávat teplo užitkové vodě odděleně, nemá se s ní míchat."
      ],
      "unknown": "Model, objem, skutečné napojení a způsob řízení ohřevu.",
      "source": "Fotografie bojleru a umístění podle rodiny."
    },
    "switch": {
      "name": "Kotlový termostat",
      "model": "Mechanický kapilární termostat",
      "place": "Na stěně kotelny · O2",
      "photo": "switch",
      "status": "Funkce podle rodiny",
      "kind": "reported",
      "summary": "Podle otce po zahřátí přibližně na nastavených 60 °C zapíná kotlové čerpadlo.",
      "facts": [
        "Čidlo je páskou přitažené na trubce z kotle.",
        "60 °C na kolečku je nastavení, nikoli aktuální teplota vody.",
        "Zapnutí čerpadla není totéž jako zajištění minimální teploty vody vracející se do kotle."
      ],
      "unknown": "Typ, vypínací teplota, hystereze a přesná elektrická vazba.",
      "source": "Fotografie příložného čidla a vysvětlení otce."
    },
    "expansion": {
      "name": "Expanzní nádoba",
      "model": "AQUAFILL HS · VREM",
      "place": "Kotelna · E",
      "status": "Štítek doložen",
      "kind": "known",
      "summary": "Vyrovnává zvětšování objemu topné vody při zahřívání. Není další akumulační nádrží.",
      "facts": [
        "Objem na odřeném štítku je nečitelný.",
        "1,5 bar je standardní předtlak uvedený výrobcem. Současný předtlak neznáme.",
        "Maximální tlak nádoby 6 bar není dovolený provozní tlak celé soustavy."
      ],
      "unknown": "Objem, skutečné nastavení a dimenzování pro celý systém.",
      "source": "Detail štítku na nádobě. Identifikační údaje na webu nezveřejňujeme."
    }
  },
  "floors": {
    "ground": {
      "name": "Přízemí",
      "rooms": {
        "bedroom": {
          "name": "Ložnice",
          "shape": "M30 105H250V385H30Z",
          "label": [
            140,
            235
          ],
          "loops": 2,
          "rads": 1,
          "note": "Dvě podlahové smyčky a jeden radiátor R4 pod oknem na pravé stěně při pohledu ze dveří. Místnost má podle měření rodiny 570 × 430 cm. Naproti dveřím jsou dvě okna široká 100 cm, na pravé stěně jedno okno široké 160 cm.",
          "photo": "bed-radiator-2026-10-19",
          "history": [
            {
              "photo": "history-bedroom",
              "caption": "Pokládka v ložnici · 6. 8. 2024 podle názvu souboru",
              "note": "Pohled ze dveří. Dvě spirálové části a vývody u prahu odpovídají dvěma smyčkám popsaným rodinou. Úplné napojení na rozdělovač snímek neukazuje."
            }
          ],
          "measurements": {
            "widthCm": 570,
            "depthCm": 430,
            "source": "Měření rodiny, doplněno 19. 10. 2026. Vzdálenosti mezi stěnami, tloušťka obvodového zdiva nezměřena.",
            "oppositeWall": [
              115,
              100,
              123,
              100,
              132
            ],
            "rightWall": [
              130,
              160,
              140
            ],
            "orientation": "Pohled ze dveří: dvě okna naproti, jedno okno s radiátorem napravo. Poloha a šířka dveří nezměřena.",
            "doorFromRadiatorWall": [
              108,
              80,
              382
            ]
          }
        },
        "kitchen": {
          "name": "Kuchyň s jídelnou",
          "shape": "M250 105H470V385H250Z",
          "label": [
            360,
            235
          ],
          "loops": 1,
          "rads": 1,
          "note": "Kuchyň má podle měření rodiny 570 × 430 cm, jednu větší podlahovou smyčku a radiátor dlouhý 200 cm pod dvěma okny. Úseky ložnicových smyček tudy procházejí. Plánovaná linka do L patří do pravého rohu hned po vstupu z chodby; výklenky komínů nejsou zakreslené.",
          "photo": "kitchen-radiator-2026-10-19",
          "history": [
            {
              "photo": "history-kitchen",
              "caption": "Pokládka v kuchyni · 4. 10. 2024 podle názvu souboru",
              "note": "Pohled ze dveří z chodby. V zadní části vedou podle rodiny průchozí úseky ložnicových smyček. Nejde o další samostatnou smyčku kuchyně."
            }
          ],
          "kitchenMeasurements": {
            "acrossHouseCm": 570,
            "alongHouseCm": 430,
            "bedroomDoor": [
              108,
              80,
              382
            ],
            "hallDoor": [
              197,
              80,
              293
            ],
            "radiatorWall": [
              87,
              98,
              49,
              98,
              98
            ],
            "oppositeWall": [
              125,
              170,
              135
            ],
            "radiatorLengthCm": 200,
            "reference": "Oba dveřní otvory měřeny od stěny se dvěma okny a radiátorem. Okna měřena zleva při čelním pohledu na příslušnou stěnu.",
            "counter": "Pravý roh hned po vstupu z chodby; délky ramen nezměřené."
          }
        },
        "living": {
          "name": "Prostor s krbem",
          "shape": "M470 105H890V310H550V385H470Z",
          "label": [
            720,
            222
          ],
          "loops": 1,
          "rads": 1,
          "note": "Otevřený prostor do L: hlavní vchod vede do chodbičky vlevo vedle spíže. Po vstupu je spíž vpravo, dál kuchyň vlevo a čelně schody do L s rohovou čtvercovou podestou. Doprava se otevírá část s krbem, stolem a lavicí. Vlastní smyčka prostoru u krbu je pracovně přiřazena štítku jídelna.",
          "photo": "history-fire",
          "devices": [
            "thermostat",
            "manifold"
          ],
          "special": "Chodba: další samostatná smyčka, bez radiátoru.",
          "history": [
            {
              "photo": "history-hall",
              "caption": "Vstupní chodba · 1. 9. 2024 podle názvu souboru",
              "note": "Pohled ke vstupním dveřím. Historická pokládka samostatné smyčky chodby, která je součástí otevřeného prostoru s krbem."
            }
          ]
        },
        "pantry": {
          "name": "Spíž",
          "shape": "M550 310H650V385H550Z",
          "label": [
            600,
            347
          ],
          "loops": 0,
          "rads": 0,
          "note": "Spíž má jediné dveře z pravé strany vstupní chodbičky. Nemá venkovní vstup. Bez podlahovky; radiátor nebyl uveden."
        },
        "bath": {
          "name": "Koupelna",
          "shape": "M650 310H890V385H650Z",
          "label": [
            770,
            347
          ],
          "loops": 1,
          "rads": 0,
          "note": "Protáhlá koupelna s WC sahá až ke stěně kotelny. Zde je plná stěna bez dveří do kotelny. Vstup je pouze z prostoru s krbem. Jedna podlahová smyčka, bez radiátoru; provoz neověřený.",
          "photo": "history-bath"
        },
        "storage": {
          "name": "Místnost s akumulací",
          "shape": "M890 105H1150V260H890Z",
          "label": [
            1020,
            208
          ],
          "loops": 0,
          "rads": 1,
          "note": "Dvě nádrže a dvě směšovací skupiny, radiátor R1 pod oknem. ADEX je na stěně mezi A2 a oknem.",
          "devices": [
            "tanks",
            "adex",
            "mix"
          ]
        },
        "boilerroom": {
          "name": "Kotelna",
          "shape": "M890 260H1150V385H890Z",
          "label": [
            1020,
            357
          ],
          "loops": 0,
          "rads": null,
          "note": "Kotel před komínem, bojler a expanzní nádoba. Kotelna má samostatný venkovní vstup ze dvora.",
          "devices": [
            "boiler",
            "water",
            "switch",
            "expansion"
          ]
        }
      }
    },
    "upper": {
      "name": "Patro",
      "rooms": {
        "bedroomUp": {
          "name": "Levá ložnice",
          "shape": "M30 105H250V385H30Z",
          "label": [
            140,
            235
          ],
          "loops": 0,
          "rads": 1,
          "note": "Jeden radiátor R5 pod velkým oknem; další dvě malá okénka jsou ve štítu. Vstup přes pracovnu."
        },
        "office": {
          "name": "Pracovna",
          "shape": "M250 105H470V385H250Z",
          "label": [
            360,
            235
          ],
          "loops": 0,
          "rads": 1,
          "note": "Radiátor R6 pod okenní částí. Prosklené balkonové dveře jsou u strany nejblíž schodům, před nimi radiátor není."
        },
        "landing": {
          "name": "Chodba a schody",
          "shape": "M470 105H650V310H470Z",
          "label": [
            560,
            270
          ],
          "loops": 0,
          "rads": null,
          "note": "Společné schodiště s přízemím. Z chodby se vstupuje do pracovny, kuchyně, koupelny a WC. Topné těleso zatím nebylo upřesněno."
        },
        "bathUp": {
          "name": "Koupelna",
          "shape": "M470 310H560V385H470Z",
          "label": [
            515,
            347
          ],
          "loops": 0,
          "rads": null,
          "note": "Malé okno do dvora. Případné topné těleso zatím neznáme."
        },
        "wc": {
          "name": "WC",
          "shape": "M560 310H650V385H560Z",
          "label": [
            605,
            347
          ],
          "loops": 0,
          "rads": null,
          "note": "Samostatné WC s malým oknem do dvora. Případné topné těleso zatím neznáme."
        },
        "kitchenUp": {
          "name": "Kuchyň",
          "shape": "M650 105H890V385H650Z",
          "label": [
            770,
            235
          ],
          "loops": 0,
          "rads": 2,
          "note": "Dva radiátory: R7 pod oknem k balkonu, mimo dveře u chodby; R8 pod protilehlým oknem do dvora. Balkon je společný s pracovnou."
        },
        "bedroomRight": {
          "name": "Pravá ložnice",
          "shape": "M890 105H1150V385H890Z",
          "label": [
            1020,
            235
          ],
          "loops": 0,
          "rads": 1,
          "note": "Jedno okno a radiátor R9. Vstup přes kuchyň v patře."
        }
      }
    }
  },
  "guides": [
    [
      "Jak číst ADEX",
      "<p><strong>Topení 1 / 2</strong> znamená dva topné okruhy regulátoru. Není to počet podlahových smyček. Naměřená teplota je teplota vody u příslušného čidla.</p><p><strong>PROG 45 / PROG 30</strong> odpovídá režimu programu s požadavkem na 45 / 30 °C vody. Není to teplota pokoje.</p><p><strong>Výstup kotle</strong> je údaj výstupního čidla kotle. <strong>Výstup AKU</strong> popisuje čidlo u akumulace, nikoli průměr obou nádrží.</p><p>Na zařízení šipka dolů prokazatelně střídá dvě obrazovky. Přesná verze menu ještě není ověřená; internetový návod verze 17 se liší od dokladu verze 13.</p>"
    ],
    [
      "Šest smyček, dva topné okruhy — jaký je rozdíl?",
      "<p>ADEX zobrazuje <strong>dva topné okruhy</strong>. Podlahová větev se dále v rozdělovači rozděluje na <strong>šest smyček</strong>.</p><p>Ložnice 2 + kuchyň 1 + chodba 1 + prostor u krbu 1 + koupelna 1 = <strong>6</strong>. Šest vývodů je vidět na fotografii. Přesné trasy zbývá ověřit.</p><p>Radiátory samy o sobě nezvyšují počet podlahových smyček.</p>"
    ],
    [
      "Co dělá akumulace a směšování",
      "<p>Akumulace ukládá teplo do topné vody. Po dohoření kotle může soustava uložené teplo využívat dál.</p><p>Směšovací ventil přimíchává chladnější vratnou vodu a upravuje teplotu pro topnou větev. Čerpadlo zajišťuje oběh. Konkrétní zapojení dvojice nádrží ještě není vystopované.</p>"
    ],
    [
      "Pokojový termostat a místo nad krbem",
      "<p>TRINNITY je nad krbem zatím jen dočasně položený. Toto místo není doporučené jako trvalé: návod požaduje umístění mimo zdroje tepla.</p><p>Než vybereme konečné místo a nastavíme regulaci, potřebujeme ověřit, kterou větev termostat skutečně ovládá a jaký režim používá ADEX.</p>"
    ],
    [
      "Co už víme o spínání kotle",
      "<p>Podle otce příložný termostat při přibližně <strong>60 °C</strong> zapne kotlové čerpadlo. Čidlo je kovovou páskou přitažené k trubce z kotle.</p><p>Je to vysvětlení spínání čerpadla, nikoli doklad ochrany zpátečky nebo kompletní ochrany proti přehřátí. Tyto části ještě potřebujeme identifikovat.</p>"
    ],
    [
      "Co doplnit před konkrétním nastavováním",
      "<ul><li>Zvolený systém ADEXu a zapojení jeho výstupů; D11 je pracovní kandidát.</li><li>Typ kotlové skupiny a ochranu teploty zpátečky.</li><li>Odvod přebytečného tepla při výpadku proudu.</li><li>Zapojení bojleru, model obou nádrží a parametry expanze.</li><li>Vazbu TRINNITY na větve a jeho konečné umístění.</li></ul><p>Postupy pro zimní odjezd, příjezd a servisní nastavení zatím nejsou ověřené. Z ukázkových hodnot manuálů je nedoplňujeme.</p>"
    ],
    [
      "O podkladech a přesnosti plánku",
      "<p>Plánek vychází z ručních kreseb a slovního popisu rodiny, fotografie z návštěvy a historické pokládky. Obě podlaží používají stejný rámec a navazující schody.</p><p>Rozměry, délky radiátorů a polohy oken jsou orientační. Podlahovka je znázorněná plochou, nikoli přesnou trasou pro vrtání nebo stavební zásahy.</p><p>Historické fotografie chodby, kuchyně a ložnice byly doplněny 19. 10. 2026. Přiřazení místností a směr pohledu popisuje rodina. Soukromé doklady a výrobní čísla nejsou součástí zveřejněného webu.</p>"
    ]
  ],
  "groundWidthCmReported": 570
};
