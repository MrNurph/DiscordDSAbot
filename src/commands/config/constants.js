const weather = Array(':sunny:', ':white_sun_small_cloud:', ':partly_sunny:', ':white_sun_cloud:', ':cloud:', ':white_sun_rain_cloud:', ':cloud_rain:', ':thunder_cloud_rain:',
    ':cloud_lightning:', ':cloud_snow:', ':fog:');

const group = Array('<:iko:808677030090375178>', '<:arnbold:808676902944243722>', '<:fedesco:808676310436020255>', '<:heide:808685197230735370>');

const metal = Array('Eisen', 'Stahl', 'Zwergenstahl', '50% Endurium', '100% Endurium', '50% Titanium', '100% Titanium');

const lightDisease = Array('Blutiger Rotz', 'Dumpfschädel', 'Flinker Difar');
const seriousDisease = Array('Blaue Keuche', 'Blutiger Difar', 'Gliederfäule', 'Lutanas', 'Orkenkrätze', 'Schwarze Wut');
const demonicDisease = Array('Duglumspest', 'Zorgan-Pocken');

const jokes = Array('Geht ein Zwerg ins Badehaus...', 'Denkt ein Zwerg...', 'Elf: "Ich habe festgestellt, ' +
    'dass Zwerge nur ein Drittel ihres Gehirns gebrauchen... "Zwerg: "Ach, und was machen sie mit der anderen Hälfte?"',
    'Sagt ein Zwerg zum anderen: "Kennst du eigentlich die Geschichte, wie der Elf mit dem Strick in der Hand in den Wald geht?" ' +
    '"Nein, aber sie fängt ganz gut an."', '"Herr Medicus, wohin bringt Ihr mich denn?" "Zum Boronsanger." ' +
    '"Aber - ich bin doch noch gar nicht tot!" "Wir sind ja auch noch nicht da."', 'Was ist ein Oger, der seinen Vater gefressen hat? Halbwaise. ' +
    'Was ist ein Oger, der seinen Vater und seine Mutter gefressen hat? Satt.', 'Die letzten Worte einer Stadtwache: „Kein Durchgang!“',
    'Die letzten Worte eines Adligen: „Pah, das sind doch nur Bauern!“', 'Die letzten Worte eines Magiers: ' +
    '„Keine Angst, ich hab gelesen wie es funktioniert.“', 'Die letzten Worte eines Magiers: „Hat ein Pentagramm nicht normalerweise 5 Ecken?“',
    'Die letzten Worte eines Schankwirtes: „Kein Bier mehr für dich und deinen Zwergenfreund, mein Herr Thorwaler!“',
    'Die letzten Worte eines Kriegers: „Nein, der sieht nicht wie ein Zauberer aus.“');

const maleFirstNameSingleStringMR = 'Adran, Alf, Alrik, Andaryn, Angrond, Anjun, Answin, Ardo, Ardor, Astrosius, Baldur, Beltram, Bardo, Berman, Bernhelm, Bogumil, Bomil, Boromil, Boromir, Bosper, Brin, Burgol, Burian, Calmor, Cassim, Colga, Colgan, Connar, Cordovan, Curthan, Cyberian, Dabbert, Darian, Devon, Dexter, Eberhelm, Eboreus, Edo, Edorian, Efferdan, Elbarim, Elbrecht, Elgor, Emmeran, Eolus, Ernbrecht, Eran, Erlan, Erzian, Ettel, Falk, Felian, Fingorn, Firunian, Firu Firutin, Folmian, Fredo, Frumol, Geppert, Gerding, Gernot, Gero, Gerrik, Geron, Gerion, Godefried, Gorm, Gormian, Goswin, Groben, Grordan, Grorthin, Gumbald, Hagen, Hal, Haldan, Hakon, Hane, Harad, Helmar, Helmarion, Helme, Helmbrecht, Hesindian, Hilgerd, Iber, Iberjan, Igan, Ilyamur, Ingalf, Ingolf, Irian, Irion, Iryk, Jariel, Jergan, Jobdan, Jost, Kalman, Karon, Kedio, Kulman, Kvalor, Lares, Lechdan, Leomar, Leon, Linnert, Ogdan, Olk, Olrik, Orlan, Orelan, Pagol, Parinor, Patras, Peradan, Peradan, Perainian, Perainor, Praiodan, Quanion, Quendan, Quin(n), Radulf, Rahjadan, Rahjan, Rank, Rauert, Raul, Refardeon, Reo, Robak, Roban, Rondrian, Rudgar, Rukus, Rumpo, Sal, Salix, Salixendan, Savertin, Sindar, Stipen, Stordan, Stordian, Sumudan, Thallian, Thalion, Thimorn, Thisdan, Timshal, Torben, Trautman, Travi(a)dan, Travin, Trondwig, Tsafried, Tsadan, Ugdalf, Ugdan, Ugo, Ulfran, Ulfried, Ungolf, Valpo, Varman, Vibrun, Vitus, Voltan, Vorlop, Wahnfried, Welf, Wolf, Wolfhardt, Wolfman, Wulf, Wulfhelm, Xandros, Xindan, Xebbert, Xerber, Yann, Yantur, Yendan, Yendar, Yendor, Yerodin, Yeto, Zondan, Zolthan, Zordan';
const maleFirstNamesMR = maleFirstNameSingleStringMR.split(', ');
const femaleFirstNameSingleStringMR = 'Adaque, Alda, Alena, Alinde, Alruna, Alvide, Arba, Belona, Berinka, Berna, Binya, Birsel, Boriane, Caya, Celissa, Cella, Charine, Coruna, Dara, Dari, Daria, Dela, Derya, Dhana, Dilga, Dimiona, Doride, Dorlen, Dorfriede, Drala, Dramina, Duridanya, Dythilde, Dythlind, Edala, Efferdane, Elida, Elene, Elwene, Emer, Fenia, Fiana, Fina, Firsa, Firuna, Franka, Gala, Galtraud, Ginaya, Girte, Gissa, Gunelde, Gwynna, Harika, Harka, Heiltrud, Hela, Hesindiane, Hesine, Hitta, Idra, Ifirnia, Ilke, Ingrimma, Isida, Jadwina, Jasinai, Jette, Josmine, Jule, Junivera, Karima, Khorena, Krona, Kysira, Lana, Larona, Leia, Leta, Lidda, Linai, Livia, Losiane, Lufilla, Maline, Maren, Mirya, Mo, Mora, Morena, Nana, Neetya, Nella, Niam, Odelinde, Ola, Oleana, Olorande, Ondinai, Ondwina, Palinai, Perdia, Praiosmin, Perainiane, Praiadne, Quenia, Quelina, Quisira, Rahjalieb, Rahjane, Rahjada, Ragnar, Renzi, Roana, Rondirai, Rondralied, Rondriane, Rovena, Saginta, Sagitta, Sannah, Sari(a), Selinde, Sumudai, Susa, Sylvette, Tanit, Thornia, Thyria, Tita, Titina, Tsaja, Turike, Udha, Ulinai, Ulmia, Utsinde, Uthjande, Vana, Viridai, Vistella, Wala, Waliburia, Walpurgia, Wina, Wilimai, Xaida, Xaviera, Xerane, Xinda, Yanis, Yasmina, Yassia, Ysinthe, Yola, Yolande, Yolde, Yosmia, Ysilda, Zekla, Zelda, Zidane, Zidona, Zita, Zoe, Zyla, Zylya';
const femaleFirstNamesMR = femaleFirstNameSingleStringMR.split(', ');
const familyNamesSingleStringMR = 'Adersin, Algerein, Alfaran, Alff, Angbarer, Anjuhal, Aberdan, Arres, Arsteener, Babek, Bachental, Bagosch, Ballurat, Bartlenhaus, Bellentor, Berlind, Brauer, Bregelsaum, Bochsbansen, Bodiak, Burkherdall, Damotil, Darben, Dargel, Daribon, Daske, Derp, Derpel, Dorc, Drachenjäger, Durenald, Ehrwald, Eichenblatt, Engstrand, Eslebon, Ferictas, Fernel, Fidian, Folmin, Fredor, Fröhling, Fuxfell, Galdifei, Garje, Gemiol, Gerdenwald, Gerrich, Gesse, Gillisen, Glimmerdiek, Gorbas, Grabensalb, Groterian, Ghune, Hainsate, Harnischmacher, Havensgaard, Heerdeburg, Helmbrecht, Helmisch, Hevelsen, Hiligon, Honorald, Horger, Horigan, Huisdorn, Hullheimer, Ilgur, Inke, Jetsam, Jolen, Karolus, Keres, Korber, Kormin, Korninger, Kremso, Kroninger, Kürzer, Lassan, Lonnert, Liegerfeld, Lowanger, Marnion, Mauernbrecher, Meeltheuer, Musker, Nattel, Okdarn, Okenheld, Olben, Oldenport, Ottresker, Rogel, Peresen, Plötzbogen, Prem, Prutz, Quarzen, Rabenstein, Redo, Rodiak, Rundarek, Ruttel, Sandström, Schattenjäger, Seehoff, Spichbrecher, Steinhauer, Sturmfels, Tannhaus, Termoil, Tiefhuser, Timerlan, Toberen, Trallo, Treublatt, Treufusz, Triffon, Tucher, Tulop, Ulfaran, Welzelin, Wertimol, Westfal, Winterkalt, Zornbold, Zandor, Zeel, Zertel';
const familyNamesMR = familyNamesSingleStringMR.split(', ');

const maleFirstNameSingleStringHR = 'Abelmir, Acco, Alricio, Alrizio, Amaldo, Andruil, Antaris, Asandrio, Aquitanius, Avaricus, Belvolio, Berytos, Bibractus, Bran, Broderico, Caralis, Cassim, Cavillo, Corallyo, Crassus, Croëmar, Croënar, Cusimo, Cybaris, Cyrano, Cyrill, Danuvies, Dapifer, Diliacus, Efferdanus, Elavus, Elfis, Elvolio, Elcarnor, Engerd, Eolan, Erdano, Esuvios, Ezzelino, Faldor, Fildôrn, Filyinor, Folnor, Fran, Furro, Gaius, Gardelan, Gilindor, Gilmon, Golpio, Gorfar, Haakan, Hardo, Harsen, Hauce, Hauvolio, Hercynes, Horasio, Horasius, Horatio, Hesindigo, Hypperio, Illyricus, Indutio, Itios, Jarras, Jucco, Kyrillion, Labienus, Landor, Leonardo, Lessandero, Ludovigo, Luidario, Lurio, Majendron, Migaêle, Mondino, Nemolus, Nepolemo, Padrigo, Palamydas, Phrenos, Praionor, Refardeon, Rhodeon, Sarpedon, Sayon, Scaldis, Selenio, Sestemalius, Shafirion, Silandris, Silvolio, Solates, Staryun, Sybaris, Tanglan, Tassilo, Thalyin, Tilfur, Timor, Tizzo, Torvon, Urras, Urro, Uÿos, Valerio, Verian, Vesontio, Vitus, Xhindan, Yagumil, Zandor';
const maleFirstNamesHR = maleFirstNameSingleStringHR.split(', ');
const femaleFirstNameSingleStringHR = 'Adaon, Aldare, Alesia, Alexanyïa, Alricia, Amaryllis, Amene, Ancalita, Anci, Aquileia, Arela, Arissa, Arsella, Axona, Aylin, Bascanai, Bella, Cassandra, Cebenna, Cedare, Cella, Charina, Cusmina, Cyrilla, Daphne, Daria, Decetia, Desiria, Desideria, Divia, Dulcia, Dylla, Ela, Elmira, Elfya, Eolane, Eylin, Fiaga, Filyina, Fulminia, Galoya, Gergovie, Gilinda, Gilmone, Gylvana, Hauca, Horatiane, Illyrica, Isdara, Isida, Isis, Isora, Khorena, Kusmina, Kyrill(a), Landoria, Larissia, Lessandra, Lutecia, Lutisana, Lya, Lynn, Lysiane, Lyssandra, Madolina, Mandaïa, Messolia, Minerva, Mirèïa, Mondina, Niam, Nita, Noreie, Odina, Oljana, Pagola, Rahjamanda, Rondria, Saria, Saya, Scipione, Selinde, Shafiria, Sheranya, Silvana, Sinjara, Solatia, Svelinya, Tassilane, Thalya, Thamar, Thalionmel, Tizza, Urri, Valponia, Veriane, Vesontiae, Wytria, Yaretta, Yasinde, Ysilda, Zedare, Zulja';
const femaleFirstNamesHR = femaleFirstNameSingleStringHR.split(', ');
const familyNamesSingleStringHR = 'Aifingla, Aphiano, Aquedicco, Aralzin, Balliguri, Barroco, Bredero, Bresefinck, Cavacasta, Cerastelli, Chababieni, Cordayo, Cordovi, Crasulet, Darando, Dolvaran, Ebrinsfurt, Finsterwalde, Flarngau, Fock, Biagiotti, Gerrano, Gilindor, Gorfar, Hanskar, Hohenstein, Hÿlphur, Irendor, Kolemaîstos, Kureon, Fürstenbrück, Liegerfeld, Loriano, Mairechi, Malagreía, Marquisas, Meboccio, Menderath, Meniona, Merici, Mezzetta, Mhoremis, Mylames, Nervuk, Nociëlla, Pirras, Podillio, Ravendoza, Sanceria, Sandfurt, Savertin, Sciadappa, Stipenbrink, Strozza, Terdilion, Terubis, Tesquadiki, Thirindar, Torrean, Torèse, Tovenkis, Trequona, Triforica, Vardeen, Westfar, Weyringer, Windeck, Yaladan, Yaquielli, Zazzera, Zeforika';
const familyNamesHR = familyNamesSingleStringHR.split(', ');


exports.weather = weather;
exports.group = group;
exports.metal = metal;
exports.lightDisease = lightDisease;
exports.seriousDisease = seriousDisease;
exports.demonicDisease = demonicDisease;
exports.jokes = jokes;
exports.maleFirstNamesMR = maleFirstNamesMR;
exports.femaleFirstNamesMR = femaleFirstNamesMR;
exports.familyNamesMR = familyNamesMR;
exports.maleFirstNamesHR = maleFirstNamesHR;
exports.femaleFirstNamesHR = femaleFirstNamesHR;
exports.familyNamesHR = familyNamesHR;
