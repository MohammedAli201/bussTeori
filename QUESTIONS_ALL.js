// const QUESTIONS_ALL = [
//     {
//         "category": "",
//         "question": "Denne bussen skal kjøre en BK10 veg. Hver passasjer med begasje veier 85 Kg. Hvor mange passasjer kan du maksimalt ta med?",
//         "options": [
//             "48 passasjerer",
//             "50 passasjerer",
//             "51 passasjerer",
//             "52 passasjerer"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Det er vinter og vegen er glatt. Vogntoget kjører opp mot krysset. Hva bør du som bussjåfør gjøre?",
//         "options": [
//             "Øke farten for å komme før vogntoget",
//             "Stoppe fordi jeg har vikeplikt for vogntoget",
//             "Varsle med lydhorn for å vise at jeg vil kjøre først",
//             "Tydelig vise at jeg vil slippe vogntoget fram først"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du er bussfører og kjører mellom Trondheim og Oslo. Hva er riktig om ditt ansvar for passasjerenes bruk av bilbelte?",
//         "options": [
//             "Føreren har plikt",
//             "til å etterse om passasjerene har festet bilbelte",
//             "Føreren har bare plikt til å informere passasjerer under 15 år",
//             "Passasjerene skal informeres om plikten til å bruke bilbelte",
//             "Barn under 3 år er fritatt for bruk av bilbelte",
//             "Førerett i klasse D gjelder normalt ...",
//             "i 3 år",
//             "i 5 år",
//             "i 10 år",
//             "i 65 år"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du får en forespørsel om å hente hotellgjester med denne bussen. Veien er en Bk T8 veg med tillatt kjøretøy-/ vongtog lengde 19,50 meter. Gjennomsnittsvekt for hver passasjer med bagasje er 100 kg. Hva er riktig?",
//         "options": [
//             "Jeg kan ta med 49 passasjerer",
//             "Bussen kan ikke benyttes på en 19,50 meter veg",
//             "Jeg kan ta med 69 passasjerer.",
//             "Bussen kan ikke benyttes på en Bk T8 veg"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du har kjørt en eldre buss med stor motor belastning opp en brett bakken og stanse på en rasteplass. Hvorfor det viktig at motoren går noen minutter på tomgang for den stoppes?",
//         "options": [
//             "For at motoroljen ikke skal koke",
//             "For å holde radete ren kald",
//             "For å hjelp motoren",
//             "For å redusere drivstofbruker"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du har kjørt en eldre buss med stor motorbelastning opp en bratt bakke og stanser på en rasteplass. Hvorfor er det viktig at motoren går noen minutter på tomgang før den stoppes?",
//         "options": [
//             "For at motoroljen ikke skal koke",
//             "For å holde intercooleren kald",
//             "For å avkjøle motoren",
//             "For å redusere drivstofforbruket"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du har kjørt langt, og skal laste opp et reisefølge fra en alpinbakke. Der er snødekt og helling på oppstillingsplassen. Hva må du være forberedt på når dekkene er varme?",
//         "options": [
//             "Varmen i dekkene vil smelte snøen under hjulene, og bussen kan begynne å gli",
//             "Dekkene kjøles raskt ned og rimdannelse vil holde bussen i ro",
//             "Der som dekkene er M+S merket, er det ikke behov for ytterligere sikring"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du kjører buss i januar måned. Bussen har montert automatisk opererte kjettingslynger for drivhjulene (on spot). Hvor mange kjettinger skal minst være med i bussen?",
//         "options": [
//             "1",
//             "2",
//             "3",
//             "4"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du kjører buss i Januar måned. Hvor mange kjettinger skal minst være med i bussen?",
//         "options": [
//             "1",
//             "2",
//             "3",
//             "4"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du kjører buss i kollektivfeltet som er lengst til høyre hva betyr lyskombinasjonen?",
//         "options": [
//             "Kan svinge til høyre fordi det er hvit ‘’S’’",
//             "Kan svinge til høyre fordi det er grønn lys",
//             "Kan kjøre rett frem fordi det er grønn lys",
//             "Kan ikke kjøre fordi det er hvit ‘’S’’"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du kjører buss i kollektivfeltetsom er lengst til høyre. Hva betyr hvit ‘’s’’?",
//         "options": [
//             "Sving til høyre",
//             "Sving til venstre",
//             "Kjøre rett fram",
//             "Stopp"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du kjører buss med digitalfartsskriver. Hva må du blant annet gjøre når du overlater bussen til en ny sjåfør?",
//         "options": [
//             "Bekrefte hvilken land jeg er i før sjåførkortet tas ut",
//             "Ta ut sjåførkortet og fartsskriveren vil ordne resten",
//             "La sjåførkortet mitt stå i og legge inn den nye sjåførens navn",
//             "Lagre data om kjøringen på bedriftskortet før kortet tas ut"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du Kjører buss med høyde 3,19 meter. Hvor kan du kjøre?",
//         "options": [
//             "Mot E18",
//             "Mot Gjøvik",
//             "Mot E6",
//             "Mot sentralest."
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du kjører buss med luftfjæring på en BK  10 veg. Hva er største tillatte boggilast når akselavstanden i boggien er 139 cm?",
//         "options": [
//             "16 tonn",
//             "18 tonn",
//             "19 tonn",
//             "20 tonn"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du kjører buss med luftfjæring på en Bk 10 veg. Hva er største tillatte boggilast når akselavstanden i boggien er 136 cm?",
//         "options": [
//             "12tonn",
//             "14tonn",
//             "16",
//             "tonn",
//             "18 tonn"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du kjører buss og må legge på kjetting.  Du må bruke refleksvest for å være synlig. Hvordan  skal denne refleksvesten oppbevares?",
//         "options": [
//             "I lasterommet",
//             "Sammen med kjettingene",
//             "Lett tilgjengelig",
//             "for fører",
//             "I bussens sikringsskap"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du kjører buss og ser annen buss som skal forlate holdeplassen. Hva sier trafikkreglene om denne situasjonen?",
//         "options": [
//             "Bussen som skal forlate holdeplassen har vikeplikt",
//             "Reglene om fletting gjelder",
//             "Jeg har vikeplikt for bussen",
//             "Jeg må skifte kjørefelt for å slippe bussen frem"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du kjører bybuss en mørk høstkveld. Hva er riktig?",
//         "options": [
//             "Fotgjenger som ikke bruker refleks kan være vanskelig å oppdage selv om veien er opplyst",
//             "Fotgjengere oppdages like lett om han bruker refleks eller ikke",
//             "Med møtende trafikk blir det lettere å oppdage fotgjengre på høyre side",
//             "Ved av- og på stigning på holdeplass er det viktig å beholde nærlys på"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du kjører denne bussen  BK 8 i oppland fylke på Rv 4 i Biri /Akershus Med 75 passasjerer ,hvor mange passasjerer med bagasje kan du maksimalt Ta med?",
//         "options": [
//             "7100 kg",
//             "3085 kg",
//             "3250 kg",
//             "3000 kg"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du kjører denne bussen i Nord- Trøndelag fylke på E6 fra Sør-Trøndelag grense til Nordland grense. Hva er største tillatte boggilast?",
//         "options": [
//             "16 000 kg",
//             "17 250 kg",
//             "18 000 kg",
//             "19 250 kg"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du kjører denne bussen på en Bk t8 veg. Gjennomsnittsvekt for hver passasjer med bagasje er 85 kg. Hvor mange passasjerer kan du ta med?",
//         "options": [
//             "61 passasjerer",
//             "73 passasjerer",
//             "85 passasjerer",
//             "86 passasjerer"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du kjører denne bussen på en Bk T8. Gjennomsnittsvekt for hver passasjer med bagasje er 73 kg. Hvor mange passasjerer kan du maksimalt ta med?",
//         "options": [
//             "56 passasjerer",
//             "61 passasjerer",
//             "71 passasjerer",
//             "85 passasjerer"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du kjører en buss med digital fartsskriver. Hva må du gjøre for å registrere pause og hviletid?",
//         "options": [
//             "Sette fartsskriveren på ‘’OUT’’",
//             "Aktivisere riktig innstilling",
//             "Ta ut sjåførkortet",
//             "Ta utskrift"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du kjører en buss og ser at lyset begynner å sluk. Hva er årsaken til at kontroll lyslampen blinker?",
//         "options": [
//             "Drivreima til dynamoen ødelagt",
//             "Elektriske sikring ødelagt",
//             "En hovedlys kan være ødelgt",
//             "Mekanisk brudd på ladening"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du kjører en fullastet buss og det ene dekket i tvillingmonteringen punkterer. Hva kan skje om du velger å kjøre videre?",
//         "options": [
//             "Det andre dekket kan skades",
//             "Det andre dekket kan ikke påvirkes av punkteringen",
//             "Mønsteret i det punkterte dekket kan slites vekk",
//             "Slitebanen på det punkterte dekket kan løsne fra felgen",
//             "Dekk som er beregnet for bruk om vinteren er merker med bokstavene ...",
//             "V + U",
//             "K + L",
//             "H + R",
//             "M + S"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du kjører i mørket og har møtende trafikk. Hvilket lys skal være tent når du står i ro på en bussholdeplass?",
//         "options": [
//             "Tåkelys",
//             "Fjernlys",
//             "Parkeringslys",
//             "Nærlys"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du kjører leddbuss på en BK 10 veg og hver passasjer veier 130 kg, hvor mye passasjeren med bagasje kan du ta med?",
//         "options": [
//             "81 kg",
//             "80 kg",
//             "70 kg",
//             "66 kg"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du kjører til i en tunnel og har skjedd ulykke hvordan skal du ringe til?",
//         "options": [
//             "Bruk din egen mobil å ringe til",
//             "Bruk nødtelefonen for å ringe til",
//             "Spør en person mobile til å ringe",
//             "Nødaggregat"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du skal kjøer denne bussen på følgende strekning i Nordland Fylke E6 fra Mo i Rana. Saltfjellet. Rv. 812 til Misvær. Hva er største tillatte nyttelast?",
//         "options": [
//             "7465 kg",
//             "4065 kg",
//             "5065 kg",
//             "7565 kg"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du skal kjør en buss med digital fartsskriver. Hva må du gjøre før kjøringen starter?",
//         "options": [
//             "Sette inn sjåførkortet og aktivere fartsskriveren",
//             "Sette inn sjåførkortet og fartsskriveren aktiverer seg selv",
//             "Aktivere fartsskriveren med førerkortet",
//             "Aktivere fartsskriveren med bedriftskortet"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du skal kjøre buss i ruta. Hva må du ta med deg?",
//         "options": [
//             "Reservehjul",
//             "Servicebok",
//             "Instruksjonsbok",
//             "Kjøreseddel"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du skal kjøre buss med digital fartsskriver.  Hva  må du ha med deg?",
//         "options": [
//             "Bedriftskort",
//             "Sjåførkort",
//             "Reserve Sjåførkort",
//             "Bankkort"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du skal kjøre buss og passasjerene har med bagasje. Hvem har ansvaret for at bagasjen er sikret under kjøringen?",
//         "options": [
//             "Sjåføren",
//             "Passasjerene selv",
//             "Medpassasjerene",
//             "Den som sitter nærmest bagasjen",
//             "Etter bestemmelsene om pliktmessig avhold er det forbudt å ...",
//             "ha alkohol i blodet 9 timer etter tjenestetiden",
//             "Nytte alkohol 8 timer før og i tjenestetiden.",
//             "nytte alkohol 10 timer før og i tjenesten",
//             "ha alkohol i blodet 24 timer før tjenestetiden"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du skal kjøre buss og skal til sentrum. Høyden på bussen er 3,4 meter. Hva betyr skiltningen for deg?",
//         "options": [
//             "Det er forbudt å kjøre rett frem i dette krysset",
//             "Skiltet gjelder ikke for buss i rute",
//             "Jeg må kjøre en annen vei for komme til sentrum",
//             "Jeg følger skiltet mot sentrum da det er tillatt med inntil 20 cm større høyde enn det skiltet viser"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du skal kjøre denne bussen fra Vadsø til Alta Finnmark Fylke. E 75-E6-even 92-Rv 93. Hva er største tillatte nyttelast på foraksel?",
//         "options": [
//             "1135 kg",
//             "2635 kg",
//             "3135 kg",
//             "4975 kg"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du skal kjøre denne bussen på Bk 8 veg. Hva er største tillatte drivaksellast?",
//         "options": [
//             "6 500 kg",
//             "8 000 kg",
//             "9 000 kg",
//             "11 500 kg"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du skal kjøre denne bussen på en Bk 10 veg. Gjennomsnittsvekt for hver passasjer med begasje er  80 kg. Hvor mange passasjerer kan du maksimalt ta med?",
//         "options": [
//             "107 passasjerer",
//             "130 passasjerer",
//             "145 passasjerer",
//             "147 passasjerer"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du skal kjøre denne bussen på en Bk 10 veg. Hva blir største tillatte boggilast?",
//         "options": [
//             "16 00 kg",
//             "17 250 kg",
//             "18 000 kg",
//             "19 250 kg"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du skal kjøre denne bussen på en Bk 8 veg.  Hva blir største tillatte boggilast?",
//         "options": [
//             "12 000 kg",
//             "13 500 kg",
//             "14 000 kg",
//             "18 000 kg"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du skal kjøre denne bussen på en Bk T8 veg. Hva er største tillatte nyttelast på foraksel?",
//         "options": [
//             "2855 kg",
//             "2930 kg",
//             "4570 kg",
//             "7500 kg"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du skal kjøre denne bussen på følgende strekning i finnmark fylke Rv. 94 Skaidi x E6 – Hammerfest kai. Hva blir største tillatte nyttelast på foraksel?",
//         "options": [
//             "1940 Kg",
//             "2015 Kg",
//             "4840 Kg",
//             "7100 Kg"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du skal kjøre denne bussen på følgende strekning i Rogaland fylke Rv. 13 Hogstadkrossen – ims – Høle KrK  xKv. Hva er største tillatte drivaksellast?",
//         "options": [
//             "6 500 kg",
//             "8 000 kg",
//             "9 000 kg",
//             "11 500 kg"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du skal kjøre denne bussen til Hordaland fylka på E134 fra Haukeli X E134 – Midtlæger X E134. Hva er riktig?",
//         "options": [
//             "Største tillatte totallvekt på strekningen er 19 000 Kg",
//             "Største tillatte kjøretøylengde for buss på strekningen er 12,40 meter",
//             "Når bussen er fullastet, kan hver passasjer med bagasje veie 100Kg",
//             "Bussen kan ha 51 passasjerer"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du skal kjøre denne leddbussen på en BK 10 Veg. Hvar normal tilt svekt for hver passasjer med bagasje er 75 kg. Hvor mange passasjerer kan du maksimalt ta med?",
//         "options": [
//             "50 passasjerer",
//             "79 passasjerer",
//             "128 passasjerer",
//             "132 passasjerer"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du skal kjøre en turbuss hvor det er montert bilbelte for sjåfør. Hva er riktig om bruk av bilbeltet?",
//         "options": [
//             "Må altid brukes ved kjøring i og utenfor tettbygd strøk",
//             "Må bare brukes ved kjøring utenfor tettbygd strøk",
//             "Må bare brukes ved kjøring i tettbygd strøk",
//             "Må bare brukes når der er passasjerer i bussen"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du skal kjøre følgende strekning i rogaland fylke: Rv. 13 Hogstadkrossen – Ims – Høle Krk X Kv. Hva er største tillatte boggilast på buss med luftfjæring?",
//         "options": [
//             "11 500 Kg",
//             "12 000 Kg",
//             "14 000 Kg",
//             "16 000 Kg"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du skal kjøre persontransport mot viderlag med en turbuss. Hvilken dokument skal du ha med i kjøretøyet?",
//         "options": [
//             "Forsikringsbevis",
//             "Politiattest",
//             "Pass",
//             "Løyve"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du skal kjører buss i tett trafikk . Hva er riktig om avstand til bilen foran?",
//         "options": [
//             "Bilføreren foran deg avgjør hvor stor avstand skal være",
//             "Kjøretøyenes hastighet har betydning for stor avstand må være",
//             "Avstand til bilen foran må ikke være over enn 2 sekunder",
//             "Avstand til bilen foran 1 sekund er uansett tilstrekkelig."
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du skal klargjøre en buss etter at det har falt 30 cm våt snø. Hva må du gjøre før du kjører?",
//         "options": [
//             "Påse at tillegsvarmeren er slått av før kjøring",
//             "Sjekke om dekkene har minst 1 mm mønsterdybde",
//             "Fjerne eventuell is og snø fra bussens tak",
//             "Sørge for å ha minst to kjettinger tilgjengelig"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du skal videre til i en tunnel med blinkende rødt lys, hva er riktig?",
//         "options": [
//             "Kjøre videre fordi bom åpens",
//             "Tunnelen er stengt for bil og lastbil",
//             "Det er ikke tillat å kjøre videre til tunnelen",
//             "Vent til kjørende fra tunnelen"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du skal videre til tunnelen med blinkende rødt lys, hva er riktig?",
//         "options": [
//             "Tunnelen er stengte en time for alle trafikanter",
//             "Tunnelen er stengte for all trafikanter",
//             "Tunnelen er stengte bil og lastbil",
//             "Du må kjøre lav fart i tunnelen"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Du som kjører buss kan bruke feltet helt til høyre. Hvilken andre kjøretøy kan bruke det?",
//         "options": [
//             "Taxi med inntil 5 sitteplasser",
//             "Sykkel",
//             "Lastbil",
//             "Traktor"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Enkelt dieselmotorer krever bruk av tilsetningsstoffet Ad Blue. Hvorfor tilsettes dette?",
//         "options": [
//             "For å bedre motorens kaldstarsegenskaper",
//             "For å fjerne bly i dieselen og smøre motoren bedre",
//             "For å erstatte katalysatorens oppgave",
//             "For å gi renere avgass og et lavere drivstoff forbruk"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Enkelte dieselmotorer må bruke tilsetningsstoffet AdBlue. Hvorfor tilsettes dette?",
//         "options": [
//             "For å lette kaldstarten",
//             "For å øke motoreffekten",
//             "For å rense avgassen",
//             "For å smøre motoren"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Her vises registreringsnummer på fire busser. Hvilken av disse skal senest fremstilles til periodisk kontroll (EU-kontroll) i november måned?",
//         "options": [
//             "GA 10021",
//             "GA 10022",
//             "GA 10027",
//             "GA 10029"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hva betyr dette skiltet som har SOS i tunellen?",
//         "options": [
//             "Snuplass",
//             "Parken plass",
//             "Buss holdeplass",
//             "Havarilomme"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hva betyr skiltet?",
//         "options": [
//             "Sidevind",
//             "Bru",
//             "Tunnel",
//             "Flyplass"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hva er hensiktsmessig kjøring i denne situasjon?",
//         "options": [
//             "Det er ingen kjøremåte som er mest hensiktsmessig enn andre i en slik sitasjon",
//             "Senke farten i tide å unngå stanse.",
//             "kjøre med jevn fart fram mot krysset for å stanse",
//             "Øke farten fram mot krysset"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "hva er høyeste aktuelle boggilast der dette skiltet gjelder?",
//         "options": [
//             "12 tonn",
//             "11 tonn",
//             "9 tonn",
//             "6 tonn"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hva er mest hensiktsmessig plassering av hjelpemann når bussen skal rygge?",
//         "options": [
//             "Ved punkt 1",
//             "Ved punkt 2",
//             "Ved punkt 3",
//             "Ved punkt 4"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hva er normal gyldighetstid for kjøreseddel for persontransport mot vederlag når innehaveren er under 60 år?",
//         "options": [
//             "5 år",
//             "7 år",
//             "10 år",
//             "15 år"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hva er riktig der dette skiltet står?",
//         "options": [
//             "Det kan stå parkerte biler på vegkanten",
//             "Motgående kjørefelt er nylig asfaltert",
//             "Ved møting må høyre hjul plasseres utenfor asfaltkanten",
//             "Fart og plassering tilpasses før møting"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hva er riktig om bruk av piggdekk på buss med tillatt totalvekt over 3500 kg?",
//         "options": [
//             "Det må være montert piggdekk på alle hjul",
//             "Det er tillatt å kjøre med piggdekk på bare et av forhjulene",
//             "Det er forbudt å bruke piggdekk på bybusser",
//             "Ved tvillingmontering må de plasseres likt på høyre og venstre side."
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hva er riktig om dekk på buss?",
//         "options": [
//             "Dekk som er M+S merket har tilstrekkelig veggrep uansett førerforhold",
//             "Dekk med pigger gir tilstrekkelig veggrep under alle førerforhold",
//             "Dekk med mønsterdypde under 1,6 mm kan utstyres med pigger",
//             "Dekk som benyttes i desember måned skal ha minst 5 mm mønsterdybde"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hva er riktig om driftsøkonomi når du kjører buss?",
//         "options": [
//             "Tett luftfilter medfører som oftest økt forbruk av drivstoff",
//             "Bruk av motorbrems øker forbruket av drivstoff",
//             "Lufttrykket i dekkene har ikke betydning for forbruk av drivstoff",
//             "Teknisk vedlikehold har ikke innvirkning på driftsøkonomi",
//             "Du skal kjøre denne bussen fra Vadsø til Alta Finmark Fylke. E 75-E6-even 92-Rv 93. Hva er største tillatte nyttelat på foraksel",
//             "1135 kg",
//             "2635 kg",
//             "3135 kg",
//             "4975 kg"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hva er riktig om gyldighet for førerett i klasse D?",
//         "options": [
//             "Gelder også for lett motorsykkel",
//             "Gjelder også motorvogn i klasse C",
//             "Gleder også for trekking av tilhenger med tillatt totalvekt over 750 kg",
//             "Gjelder også for leddbuss"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hva er riktig om merking av førstehjelpskrinets plassering i buss?",
//         "options": [
//             "Det skal være informasjon ved alle sitteplasser om hvor førstehjelpsskrinet er plassert",
//             "Det skal være avmerket i bussens vognkort hvor førstehjelpsskrinet er plassert",
//             "Merkingen skal plasseres foren i bussen hvor alle kan se den",
//             "Merkingen skal plasseres ved førstehjelpsskrinet"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hva er riktig om pliktmessig avhold?",
//         "options": [
//             "Gjelder for alle Yrkssjøfører",
//             "Gjelder bare de som utfører persontransport",
//             "En bussjåfør kan ha inntil 0,5 promille",
//             "Gjelder kun for sjåfør av buss med over 16 sitte plasser"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hva er riktig?",
//         "options": [
//             "Når farten dobles. Vil bevegelsesenergien øke fire ganger",
//             "Når farten dobles. Vil bevegelsesenergien øke fem ganger",
//             "Når farten dobles. Vil bevegelsesenergien øke tre ganger",
//             "Når farten dobles. Vil bevegelsesenergien øke to ganger"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hva forteller vegoppmerkingen?",
//         "options": [
//             "Vegen er smal",
//             "Svak vegskulder",
//             "Fartsgrensen er 50 km/t",
//             "Fartsgrensen er 70 km/t"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hva får du hvis du åpner dette Brannskapet som finnes i tunnel?",
//         "options": [
//             "Førstehjelp utstyr",
//             "Brannsikrings apparat",
//             "Brannslukningsapparat"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hva innebærer denne vegoppmerkingen når du kjører buss?",
//         "options": [
//             "Forbikjøring er forbudt",
//             "Høyeste fartsgrense er 60 km/t",
//             "Asfalten veg tar slutt",
//             "Farten må tilpasses før møting av større kjøretøy"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hva kan en av årsakene være til at det tar lang tid å fylle lufttankene?",
//         "options": [
//             "Kompressoren er slitt",
//             "Slaglengden på bremsehevarmene er lang",
//             "Det er lekkasje i manøverdelen",
//             "Stor slitasje på bremsebelegg"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hva kan være galt når ladelampa begynner å lyse?",
//         "options": [
//             "En sikring i ladekretsen kan være ødelagt",
//             "En av bussens hovedlys kan være ødelagt",
//             "Det kan være brudd på strømmen til ladelampa",
//             "Det kan være feil med drivreima til dynamoen"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hva kan være årsaken til at det kommer ut olje når trykklufttanken tappes?",
//         "options": [
//             "Oljefilteret er tett",
//             "Lufttanken er ikke tømt på en stund",
//             "Formye olje på motoren",
//             "Kompressoren er slitt"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hva kan være årsaken til at røyken fra en deiselmotor er svart?",
//         "options": [
//             "Lekkasje i eksosanlegget",
//             "Luft kan ha kommet inn i drivstoffanlegget",
//             "Kjølevann kan ha kommet inn i sylinderene",
//             "Luftfilteret kan være tett"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hva kreves for å få utstedt kjøreseddel for persontransport?",
//         "options": [
//             "Arbeidsavtale",
//             "Sjåførkort",
//             "Løyve for persontransport",
//             "Tilfredsstillende vandel"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hva skal den digitale fartsskriveren blant annet registeret?",
//         "options": [
//             "Antall passasjerer",
//             "Akserelerasjon/Retardasjon",
//             "Ferie",
//             "Hviletid"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hva skal den fartsskriveren blant annet registrere?",
//         "options": [
//             "Drivstofforbruk",
//             "Antall giringer",
//             "Annet arbeid",
//             "Aktuell totalvekt"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hva skal du gjøre når fartsskriveren slutter å fungere?",
//         "options": [
//             "Oppsøke et godkjent verksted og få den reparert",
//             "Oppsøke en trafikkstasjon og få den reparert",
//             "Oppsøke en politistasjon og få en dispensasjon for videre kjøring",
//             "Oppsøke en tollstasjon og få en dispensasjon for videre kjøring"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hva skjer når bussens parkering bremse i (fjærbremse) Settes på?",
//         "options": [
//             "Fjærbremsen spennes mekanisk ved hjelp av trykkluft",
//             "Trykkluft slippes inn i fjærbremssylinderen",
//             "Fjæren spennes automatisk ved hjelp av vakuum",
//             "Trykkluft slippes ut av fjærbremssylinderen"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hva skjer når du tar ut Brannslukingsapperat fra Brannskapet som finnes i tunnel?",
//         "options": [
//             "Brannslukkingsapparat tømmes",
//             "Veitrafikksentralen varsles automatisk",
//             "Forsikringsselskapet ditt varsles",
//             "Statensvegvesen varsles automatisk"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hvem er ansvarlig for at vikepliktbestemmelsene ved rygging overholdes?",
//         "options": [
//             "Bussføreren",
//             "Busselskapet",
//             "Passasjeren",
//             "Hjelpmannen"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hvem er ansvarlig for lastsikring i buss?",
//         "options": [
//             "Føreren",
//             "Passasjeren",
//             "Busspedtøren",
//             "Trafikklederen i busselskapet"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hvilke konsekvenser kan det få hvis bussfører snakker med passasjerer under kjøring?",
//         "options": [
//             "Det får ingen konsekvenser så lenge føreren bare snakker med en person av gangen",
//             "Førerens oppmerksomhet mot trafikken blir bedre",
//             "Det har ingen betydning for kjøringen så lenge føreren ser på trafikken",
//             "Det kan føre til at føreren blir distrahert"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hvilken av disse tilfellene må sjåføren inneha gyldig yrkessjåførkomptansebevis?",
//         "options": [
//             "Ved privat bruk av buss",
//             "Når en lærer ved barneskole kjører sine elever på tur",
//             "Ved rutetransport på strekringer under 50 km.",
//             "Når mekaniker prøvekjører buss etter reparasjon"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hvilken dokument må du som sjåfør ha med når du kjører turbuss mot vederlag?",
//         "options": [
//             "Kompetansebevis for transport av funksjonshemmede",
//             "Bevis for yrkessjåførkompetanse",
//             "Kart for tungtrafikk på riks- og fylkesveger",
//             "Veggliste for riksveger"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hvilken dokument må føreren ha med seg i tillegg til førerkort og vognkort når det kjøres turbuss?",
//         "options": [
//             "Kjøreseddel",
//             "Sonetaksttabel",
//             "Ruteplan",
//             "Vegliste",
//             "En fullastet buss vil få...",
//             "Kortere bremselengde enn en personbil i samme fart",
//             "Lengre bremse lengde enn en personbil i samme fart",
//             "Like lang bremselengde som en minibuss i samme fart",
//             "Like lang bremselengde som en minibuss uansett fart"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hvilken forsikring er påbudt for buss i persontransport?",
//         "options": [
//             "Trafikkforsikring (ansvarforsikring)",
//             "Delkasko",
//             "Kaskoforsikring",
//             "Tabbeforsikring"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hvilken forsikring er påbudt for buss i personyransport?",
//         "options": [
//             "Godsforsikring",
//             "Pensjonforsikring",
//             "Brannforsikring",
//             "Ansvarsforsikring (trafikkforsikring)"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hvilken forsikring må busselskapet ha for å få dekket skade på egne kjøretøy?",
//         "options": [
//             "Trafikkforsikring (ansvarsforsikring)",
//             "Kaskoforsikring",
//             "Løsørforsikring",
//             "Tabbeforsikring"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hvilken informasjon gir veggoppmerkingen deg når du kjører buss?",
//         "options": [
//             "Den viser at det kun er ett kjørefelt",
//             "Den varsler om svak vegskulder",
//             "Det kan bli liten plass når du møter andre kjøretøy",
//             "Den viser at du snart kommer til tettbygde strøk"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hvilken konsekvenser kan det få hvis bussfører snakker med passasjerer under kjøring?",
//         "options": [
//             "Det får ingen konsekvenser så lenge føreren bare snakker med en person av gangen",
//             "Førerens oppmerksomhet mot trafikken blir bedre",
//             "Det har ingen betydning for kjøringen så lenge føreren ser på trafikken",
//             "Det kan føre til at føreren blir forstyrret"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hvilken oppgave har støtdemperne på buss med luftfjæring?",
//         "options": [
//             "Øke lasteevnen",
//             "Sikre god kontakt mellom hjul og veg under kjøring",
//             "Regulere trykket i luftbelgene",
//             "Beskytte akslingene mot skade"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hvilken påstand er riktig om dekkøkonomi?",
//         "options": [
//             "Rigtig lufttrykk i dekkene gir normalt lengst levetid",
//             "Høyere lufttrykk enn anbefalt gir dekkene lengst levetid",
//             "Motoreffekt og kjørestil har ingen innvirkning på dekkene",
//             "Kjøretøyets aksellast har ingen betydning for dekkenes livetid"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hvilken påstand om fart er riktig ?",
//         "options": [
//             "Når farten øker to ganger, vil bevegelsesenergien øke to ganger",
//             "Når farten øker to ganger, vil bevegelseseneergien øke fire ganger",
//             "I lav fart har en buss vanligvis kortere stoppstrekning enn en personbil",
//             "I høy fart har en buss vanligvis like lang stoppstrekning som en personbil"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hvilken påstand om overlast er riktig?",
//         "options": [
//             "Buss er fritatt for overlastgebyr",
//             "Det brukes lavere gebyrsatser enn for lastbiler",
//             "Det kan kreves at passasjerer må forlate bussen",
//             "Frimargin er 1500 kg på bakaksel for buss som har luftfjæring"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hvilken type bremseanlegg er vist på tegningen?",
//         "options": [
//             "Mekanisk med trykkluftforsterker",
//             "Trykkluftmekanisk",
//             "Trykklufthydraulsk",
//             "Hydraulsk med vakuumforsterker"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hvilket utstyr er påbudt å ha med i buss?",
//         "options": [
//             "Reservehjul",
//             "Ekstra lyspærer til hovedlys",
//             "Lufttrykksmåler for dekk",
//             "Refleksvest",
//             "Sikringens ampèrstyrke i det elektriske anlegget må ...",
//             "Være lik eller lavere enn beskrevet",
//             "Alltid ha korrekt ampèrstyrke",
//             "Være høyere enn beskrevet",
//             "Kunne tilpasse seg automatisk til aktuell ampèrstyrke",
//             "I en buss med 50 sitteplasser må brannslukningsapparatet være montert ...",
//             "i lasterommet",
//             "i motorrommet",
//             "lett tilgjengelig for føreren",
//             "i låst skap ved føreren"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hvor gjelder kjøreseddel for persontransport mot vederlag?",
//         "options": [
//             "Bare i den kommunen den er utstedt",
//             "Bare i det fylket hvor bedriften har konsesjon",
//             "Bare i det politidistriktet hvor den er utstedt",
//             "I hele Norge",
//             "Ukentlig kjøretid i henhold til kjøre- og hviletidsbestemmelsene skal ikke overstige ...",
//             "56 timer",
//             "37,5 timer",
//             "40 timer",
//             "44 timer"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hvor lang gyldighetstid er det normalt på et sjåførkort?",
//         "options": [
//             "1 år",
//             "3 år",
//             "5 år",
//             "10 år"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hvor lang tid kan en bussfører maksimalt kjøre for den pålagte 45 minutters pausen må tas?",
//         "options": [
//             "5 timer",
//             "4 timer"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hvor langt tid kan en bussfører maksimalt kjøre det pålagt 45 minutters pausen kan tas?",
//         "options": [
//             "5,5 timer",
//             "4,5 timer",
//             "5 timer",
//             "4 timer"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hvor mange brannslukningsapperat på 6 kg er det krav om i en buss med 40 sitteplasser?",
//         "options": [
//             "1",
//             "2",
//             "3",
//             "4"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "hvor mange ganger i løpet av en uke kan døgnhvilen reduseres til under 11 timer i følge kjøre- og hviletidsbestemmelsene?",
//         "options": [
//             "Høyst tre ganger",
//             "Høyst en gang",
//             "Høyst to ganger",
//             "Høyst fire ganger"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hvor mange ganger øker bevegelsen når vakten Dobles og hasteheten er den sammen?",
//         "options": [
//             "2",
//             "3",
//             "4",
//             "6"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hvor mange ganger øker bevegelsesenergien når vekten dobles, og hastigheten er den samme?",
//         "options": [
//             "2",
//             "3",
//             "4",
//             "6"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hvor mange ganger øker bremse langende når farten dobles?",
//         "options": [
//             "2 ganger",
//             "3 ganger",
//             "4 ganger",
//             "5 ganger"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hvor mange Passasjerer er bussen maksimalt godkjent for?",
//         "options": [
//             "59",
//             "passasjerer",
//             "97 passasjerer",
//             "145 passasjerer",
//             "147 passasjerer"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hvor mye reduseres forbikjøringsstrekningen hvis personbilen senker farten til 60 km/t?",
//         "options": [
//             "Ca. En fjerdedel (1/4)",
//             "Ca. En tredjedel (1/3)",
//             "Ca. To tredjedel (2/3)",
//             "Ca. Halvpasten (1/2)"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hvor ofte bør trykklufttankene dreneres for å kontrollere at lufttørken virker?",
//         "options": [
//             "En gang i måneden",
//             "En gang i uka",
//             "Etter instruksjonsbokens anbefalinger",
//             "Kun når bilen er til service"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hvor ofte skal den digitale fartsskriveren kontrolleres og godkjennes?",
//         "options": [
//             "Hver andre år",
//             "Hver tredje år",
//             "Hver fjerde år",
//             "Hvert femte år"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hvor ofte skal en buss fremstilles til periodisk kontrol ( EU-kontroll)?",
//         "options": [
//             "Hvert halvår",
//             "Hvert år",
//             "Hvert annet år",
//             "Hvert fjerde år"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hvor stor tilhenger kan du lovlig trekke med førerett i klasse D?",
//         "options": [
//             "Lik bussens egenvekt",
//             "Lik bussens aktuelle vekt",
//             "Tillatt totalvekt 750 kg",
//             "Tillatt totalvekt 1500 kg"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hvordan kan du kontrollere frostvernet (lufttørken) i et bremseanlegg om trykkluft virker?",
//         "options": [
//             "Pumpe bremsepedalen og kontrollere trykkfall",
//             "Kontrollere kompressorens ladekapasitet",
//             "Kontrollere at varsellampe for lav frostvern virker",
//             "Tappe trykklufttanken for å se at det ikke kommer vann ut"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hvordan kan du merke at servostyringen på bussen er i orden?",
//         "options": [
//             "Jeg hører ulyder ved sving til høyre og venstre",
//             "Jeg kan svinge fult til høyre og venstre uten motor i gang",
//             "Bussen svinger mer enn rattutslaget tilsier",
//             "Bussen er lett å styre når motoren er i gang"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hvordan kan miljøet spares ved  kjøring med buss?",
//         "options": [
//             "Unngå bruk av hjelpbremser",
//             "Kjør på høyt turtall",
//             "Tidlig fartsreduksjon for å få flere girskifta",
//             "Færrest mulig girskifter"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hvordan kontrollerer du om servostyringen virker?",
//         "options": [
//             "Ved å se at det ikke er lekkasje ved påfyllingen",
//             "Ved å kjenne at rattet blir lettere å dreie når jeg stopper motoren",
//             "Ved å kjenne at rattet blir lettere å dreie når jeg starter motoren",
//             "Ved å se at det bobler i servo beholderen når det dreies på rattet"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hvordan oppleves avstand til trafikk bak når du ser i et speil med buet overflate (buet utover)?",
//         "options": [
//             "Det ser ut som trafikken er nærmere enn den i virkligheten er",
//             "Det ser ut som trafikken er lengre bak enn i virkeligheten er",
//             "Avstand til trafikk bak oppfattes likt enten speilet har rett",
//             "eller buet overflate",
//             "Det er avhengig av hvor på speilet du ser"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hvordan skal bussføreren forholde seg til syklister langs vegen?",
//         "options": [
//             "Holde avstand på omtrent 1 meter",
//             "Kjøre raskt forbi for å redusere risiko",
//             "Det må varsles med lydsignal for å bedre bussens fremkomelighet",
//             "Tilpasse fart og avstand"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hvordan skal du bruke brannsikrings apparat montert i tunnelen?",
//         "options": [
//             "Forsikrings selskapet til tunnelen varsles",
//             "Forsikrings selskap varles",
//             "Brannslokningsapparat",
//             "koblet til vegmeldings sentralen"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Hvordan skal en bussførerforholde seg til ved forbikjøring av syklister på landsvegen?",
//         "options": [
//             "Holde en meters avstand",
//             "Holde Bussen innenfor eget kjørefelt",
//             "Avpasse farten og holde god avtand",
//             "Avpasse farten etter fartsgrensen på stedet"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "I en gitt hastighet blir bremselengden ca. 25 meter hvor lang blir bremselengden når hastighetem dobles?",
//         "options": [
//             "Ca. 50 meter",
//             "Ca. 75 meter",
//             "Ca. 100 meter",
//             "Ca. 125 meter"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "I hvilket tidsrom er det krav om å ha med kjettinger i bussen?",
//         "options": [
//             "Kjettinger skal medbringes hele året",
//             "I perioden mellom 1. september og 1. mai i hele landet",
//             "I perioden fra og med 1. september til og med andre mandag etter 2. påskedag, untatt i Nordland, Troms og Finnmark",
//             "I perioden fra og med 16. oktober til og med 30. april i Nordland, Troms og Finnmark"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "I Nord-Trøndelag fylke skal du kjøre buss med luftfjering på E6 fra Sør-trøndelag grense til Nordland grense. Hva er største tillatte boggilast når akselavstanden er 136 cm?",
//         "options": [
//             "15 000 kg",
//             "18 000 kg",
//             "19 000 kg",
//             "20 000 kg"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "I Nordland fylke skal du kjøre buss med tilhenger på Rv. 80 Fauske rkj X E6 – Bodø lufthavn. Hvor langt kan vogntoget maksimalt være?",
//         "options": [
//             "18,75 meter",
//             "12,40 meter",
//             "15,00 meter",
//             "18,00 meter"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Når kan langt overheng på buss skape problemer?",
//         "options": [
//             "Ved skifte av kjørefelt",
//             "Ved utkjøring fra bussholdeplass",
//             "Ved forbikjøring",
//             "Ved rygging på rett strekning",
//             "Riktig kjøre måte med buss ut fra holdeplass på veg med",
//             "fartsgrense 60 km/t er å ...",
//             "Sette på tegn og kontrollere om trafikantene bak overholder vikeplikt",
//             "Sette bussen i bevegelse og der etter sette på tegn",
//             "Sette på tegn, kjøre ut og regne med at andre trafikanter overholder vikeplikt",
//             "Vente til det er klart bak fordi bussføreren har vikeplikt"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "Når skal denne GT13287 bussen, EU kontrolleres?",
//         "options": [
//             "Januar",
//             "August",
//             "November",
//             "Mai"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "På en buss med trommelbremser brukes det unormalt mye luft under kraftig oppbremsing. Hva kan være årsaken?",
//         "options": [
//             "Feil ved kompressoren",
//             "Bremsehevarmen har for lang slaglengde",
//             "Kondens i lufttankene",
//             "Bremsehevarmen har for kort slaglengde"
//         ],
//         "answer": null,
//         "explanation": ""
//     },
//     {
//         "category": "",
//         "question": "På hvilken måte får du best oversikt over trafikk bak når du kjører buss?",
//         "options": [
//             "Ved å se i innvendig speil når jeg kjører i en sving",
//             "Ved å se innvendig speil når jeg kjører på rett strekning",
//             "Ved å se i utvendig speil når jeg kjører i en sving",
//             "Ved å se i utvendig speil når jeg kjører på rett strekning"
//         ],
//         "answer": null,
//         "explanation": ""
//     }
// ];

// export default QUESTIONS_ALL;
