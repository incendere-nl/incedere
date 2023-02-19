var codesEl;
var jsonData = [
 {
  "code": "audire ",
  "name": "horen"
 },
 {
  "code": "clamare ",
  "name": "schreeuwen"
 },
 {
  "code": "iacēre ",
  "name": "liggen"
 },
 {
  "code": "iubēre ",
  "name": "bevelen"
 },
 {
  "code": "lacrimare ",
  "name": "huilen"
 },
 {
  "code": "necare ",
  "name": "doden"
 },
 {
  "code": "ponere ",
  "name": "plaatsen"
 },
 {
  "code": "portare ",
  "name": "dragen"
 },
 {
  "code": "recusare ",
  "name": "weigeren"
 },
 {
  "code": "timēre ",
  "name": "vrezen "
 },
 {
  "code": "tollere ",
  "name": "optillen"
 },
 {
  "code": "venire ",
  "name": "komen"
 },
 {
  "code": "vidēre ",
  "name": "zien"
 },
 {
  "code": "vocare ",
  "name": "1 roepen "
 },
 {
  "code": "aqua ",
  "name": "water"
 },
 {
  "code": "arbor ",
  "name": "boom"
 },
 {
  "code": "flumen ",
  "name": "flumina "
 },
 {
  "code": "locus ",
  "name": "plaats"
 },
 {
  "code": "mandatum ",
  "name": "opdracht"
 },
 {
  "code": "puer ",
  "name": " pueri "
 },
 {
  "code": "rex ",
  "name": " reges "
 },
 {
  "code": "servus ",
  "name": "slaaf"
 },
 {
  "code": "ad + acc ",
  "name": "1 naar "
 },
 {
  "code": "in + acc ",
  "name": "in "
 },
 {
  "code": "inter + acc ",
  "name": "1 tussen 2 tijdens"
 },
 {
  "code": "et ",
  "name": "1 en 2 ook"
 },
 {
  "code": "ibi ",
  "name": "daar"
 },
 {
  "code": "ideo ",
  "name": "daarom"
 },
 {
  "code": "non ",
  "name": "niet"
 },
 {
  "code": "tamen ",
  "name": "toch"
 },
 {
  "code": "ubi ",
  "name": "waar"
 },
 {
  "code": "accedere ",
  "name": "1 gaan naar 2 naderen"
 },
 {
  "code": "bibere ",
  "name": "drinken"
 },
 {
  "code": "cogitare ",
  "name": "(na)denken"
 },
 {
  "code": "custodire ",
  "name": "bewaken"
 },
 {
  "code": "dare ",
  "name": "geven"
 },
 {
  "code": "dicere ",
  "name": "zeggen"
 },
 {
  "code": "esse ",
  "name": "zijn"
 },
 {
  "code": "favēre + dat ",
  "name": "steun geven aan"
 },
 {
  "code": "praebēre ",
  "name": "(aan)bieden"
 },
 {
  "code": "protegere ",
  "name": "beschermen"
 },
 {
  "code": "ridēre ",
  "name": "lachen"
 },
 {
  "code": "tradere ",
  "name": "overhandigen"
 },
 {
  "code": "deus ",
  "name": "god"
 },
 {
  "code": "femina ",
  "name": "vrouw"
 },
 {
  "code": "filius ",
  "name": "zoon"
 },
 {
  "code": "mater ",
  "name": " matres "
 },
 {
  "code": "nomen ",
  "name": " nomina "
 },
 {
  "code": "pater ",
  "name": " patres "
 },
 {
  "code": "uxor ",
  "name": " uxores "
 },
 {
  "code": "haud ",
  "name": "helemaal niet"
 },
 {
  "code": "nam ",
  "name": "want"
 },
 {
  "code": "sic ",
  "name": "zo"
 },
 {
  "code": "sicut ",
  "name": "zoals"
 },
 {
  "code": "subito ",
  "name": "plotseling"
 },
 {
  "code": "aedificare ",
  "name": "bouwen"
 },
 {
  "code": "dividere ",
  "name": "verdelen"
 },
 {
  "code": "facere ",
  "name": "facio "
 },
 {
  "code": "intrare ",
  "name": "binnenkomen"
 },
 {
  "code": "licet (+dat) ",
  "name": "het is toegestaan (aan)"
 },
 {
  "code": "placēre + dat ",
  "name": "bevallen"
 },
 {
  "code": "stare ",
  "name": "staan"
 },
 {
  "code": "tacēre ",
  "name": "zwijgen"
 },
 {
  "code": "amicus ",
  "name": "vriend"
 },
 {
  "code": "civis ",
  "name": " cives "
 },
 {
  "code": "frater ",
  "name": " fratres "
 },
 {
  "code": "gladius ",
  "name": "zwaard"
 },
 {
  "code": "hostis ",
  "name": " hostes "
 },
 {
  "code": "mons ",
  "name": " montes "
 },
 {
  "code": "murus ",
  "name": "muur"
 },
 {
  "code": "populus ",
  "name": "volk"
 },
 {
  "code": "saxum ",
  "name": "rots "
 },
 {
  "code": "urbs ",
  "name": " urbes "
 },
 {
  "code": "vir ",
  "name": " mv viri "
 },
 {
  "code": "cum + abl ",
  "name": "met"
 },
 {
  "code": "de + abl ",
  "name": "1 van(af) 2 over"
 },
 {
  "code": "in + abl ",
  "name": "1 in 2 op"
 },
 {
  "code": "cur ",
  "name": "waarom"
 },
 {
  "code": "dum ",
  "name": "1 terwijl 2 zolang als"
 },
 {
  "code": "iam ",
  "name": "al "
 },
 {
  "code": "primum bijw ",
  "name": "eerst"
 },
 {
  "code": "quoque ",
  "name": "ook"
 },
 {
  "code": "sed ",
  "name": "maar"
 },
 {
  "code": "tandem ",
  "name": "eindelijk"
 },
 {
  "code": "cadere ",
  "name": "vallen"
 },
 {
  "code": "dormire ",
  "name": "slapen"
 },
 {
  "code": "retinēre ",
  "name": "tegenhouden"
 },
 {
  "code": "servare ",
  "name": "redden"
 },
 {
  "code": "temptare ",
  "name": "proberen"
 },
 {
  "code": "arma mv ",
  "name": "wapens"
 },
 {
  "code": "arx ",
  "name": " arces "
 },
 {
  "code": "auxilium ",
  "name": "hulp"
 },
 {
  "code": "custos ",
  "name": " custodes "
 },
 {
  "code": "miles ",
  "name": " milites "
 },
 {
  "code": "nox ",
  "name": " noctes "
 },
 {
  "code": "pars ",
  "name": " partes "
 },
 {
  "code": "periculum ",
  "name": "gevaar"
 },
 {
  "code": "puella ",
  "name": "meisje"
 },
 {
  "code": "Roma ",
  "name": "Rome"
 },
 {
  "code": "Romanus ",
  "name": "Romein"
 },
 {
  "code": "silentium ",
  "name": "stilte"
 },
 {
  "code": "turba ",
  "name": "menigte"
 },
 {
  "code": "post + acc ",
  "name": "1 achter 2 na"
 },
 {
  "code": "ecce ",
  "name": "kijk"
 },
 {
  "code": "semper ",
  "name": "altijd"
 },
 {
  "code": "si ",
  "name": "als "
 },
 {
  "code": "statim ",
  "name": "meteen"
 },
 {
  "code": "abesse ",
  "name": "afwezig zijn"
 },
 {
  "code": "addere ",
  "name": "toevoegen"
 },
 {
  "code": "ardēre ",
  "name": "branden"
 },
 {
  "code": "debēre ",
  "name": "moeten"
 },
 {
  "code": "discedere ",
  "name": "weggaan"
 },
 {
  "code": "docēre ",
  "name": "onderwijzen"
 },
 {
  "code": "ludere ",
  "name": "spelen"
 },
 {
  "code": "orare ",
  "name": "1 bidden (tot) 2 smeken (om)"
 },
 {
  "code": "ostendere ",
  "name": "tonen"
 },
 {
  "code": "vivere ",
  "name": "leven"
 },
 {
  "code": "annus ",
  "name": "jaar"
 },
 {
  "code": "culpa ",
  "name": "schuld"
 },
 {
  "code": "dea ",
  "name": "godin"
 },
 {
  "code": "ignis ",
  "name": " ignes "
 },
 {
  "code": "poena ",
  "name": "straf"
 },
 {
  "code": "signum ",
  "name": "teken"
 },
 {
  "code": "sol ",
  "name": " soles "
 },
 {
  "code": "e\/ex + abl ",
  "name": "uit"
 },
 {
  "code": "super + acc ",
  "name": "boven(op) "
 },
 {
  "code": "autem ",
  "name": "echter"
 },
 {
  "code": "diu ",
  "name": "lang "
 },
 {
  "code": "mox ",
  "name": "spoedig"
 },
 {
  "code": "nuper ",
  "name": "kort geleden"
 },
 {
  "code": "tantum ",
  "name": "slechts "
 },
 {
  "code": "amare ",
  "name": "houden van "
 },
 {
  "code": "celebrare ",
  "name": "(feest)vieren"
 },
 {
  "code": "cupere ",
  "name": " cupio "
 },
 {
  "code": "exspectare ",
  "name": "wachten (op)"
 },
 {
  "code": "fugere ",
  "name": " fugio "
 },
 {
  "code": "gerere ",
  "name": "1 dragen 2 voeren"
 },
 {
  "code": "narrare ",
  "name": "vertellen"
 },
 {
  "code": "pugnare ",
  "name": "vechten"
 },
 {
  "code": "sedēre ",
  "name": "zitten"
 },
 {
  "code": "vendere ",
  "name": "verkopen"
 },
 {
  "code": "vincere ",
  "name": "(over)winnen"
 },
 {
  "code": "bellum ",
  "name": "oorlog"
 },
 {
  "code": "dux ",
  "name": " duces "
 },
 {
  "code": "equus ",
  "name": "paard"
 },
 {
  "code": "forum ",
  "name": "forum "
 },
 {
  "code": "pugna ",
  "name": "gevecht"
 },
 {
  "code": "templum ",
  "name": "tempel"
 },
 {
  "code": "victoria ",
  "name": "overwinning"
 },
 {
  "code": "vita ",
  "name": "(het) leven"
 },
 {
  "code": "pro + abl ",
  "name": "1 voor 2 in plaats van"
 },
 {
  "code": "prope + acc ",
  "name": "dichtbij"
 },
 {
  "code": "interea ",
  "name": "intussen"
 },
 {
  "code": "num ",
  "name": "(toch) zeker niet"
 },
 {
  "code": "scilicet ",
  "name": "natuurlijk"
 },
 {
  "code": "complēre ",
  "name": "vullen"
 },
 {
  "code": "curare + acc ",
  "name": "verzorgen "
 },
 {
  "code": "emere ",
  "name": "kopen"
 },
 {
  "code": "habēre ",
  "name": "hebben"
 },
 {
  "code": "incipere ",
  "name": " incipio "
 },
 {
  "code": "manēre ",
  "name": "blijven"
 },
 {
  "code": "respondēre ",
  "name": "antwoorden"
 },
 {
  "code": "rogare ",
  "name": "vragen"
 },
 {
  "code": "vetare ",
  "name": "verbieden"
 },
 {
  "code": "filia ",
  "name": "dochter"
 },
 {
  "code": "initium ",
  "name": "begin"
 },
 {
  "code": "pecunia ",
  "name": "geld"
 },
 {
  "code": "poculum ",
  "name": "beker"
 },
 {
  "code": "soror ",
  "name": " sorores "
 },
 {
  "code": "spectator ",
  "name": " -ores "
 },
 {
  "code": "via ",
  "name": "weg "
 },
 {
  "code": "ante + acc ",
  "name": "voor"
 },
 {
  "code": "sub + abl ",
  "name": "onder"
 },
 {
  "code": "aut ",
  "name": "of"
 },
 {
  "code": "fortasse ",
  "name": "misschien"
 },
 {
  "code": "hic ",
  "name": "hier"
 },
 {
  "code": "immo ",
  "name": "integendeel"
 },
 {
  "code": "nihil ",
  "name": "niets"
 },
 {
  "code": "nonne ",
  "name": "(toch) zeker wel"
 },
 {
  "code": "quando ",
  "name": "wanneer"
 },
 {
  "code": "quod ",
  "name": "1 omdat 2 (datgene) wat"
 },
 {
  "code": "claudere ",
  "name": "sluiten"
 },
 {
  "code": "currere ",
  "name": "rennen"
 },
 {
  "code": "finire ",
  "name": "beëindigen"
 },
 {
  "code": "fluere ",
  "name": "stromen"
 },
 {
  "code": "gaudēre ",
  "name": "blij zijn"
 },
 {
  "code": "nuntiare ",
  "name": "berichten "
 },
 {
  "code": "posse ",
  "name": "kunnen"
 },
 {
  "code": "spectare ",
  "name": "kijken (naar)"
 },
 {
  "code": "superare ",
  "name": "1 overtreffen 2 overwinnen"
 },
 {
  "code": "animal ",
  "name": " animalia "
 },
 {
  "code": "nemo ",
  "name": " gen neminis "
 },
 {
  "code": "oculus ",
  "name": "oog"
 },
 {
  "code": "sanguis ",
  "name": " gen -guinis "
 },
 {
  "code": "spectaculum ",
  "name": "voorstelling"
 },
 {
  "code": "cito bijw ",
  "name": "snel"
 },
 {
  "code": "deinde ",
  "name": "daarna"
 },
 {
  "code": "domi ",
  "name": "thuis"
 },
 {
  "code": "hodie ",
  "name": "vandaag"
 },
 {
  "code": "ita ",
  "name": "zo"
 },
 {
  "code": "iterum ",
  "name": "weer "
 },
 {
  "code": "numquam ",
  "name": "nooit"
 },
 {
  "code": "quid ",
  "name": "wat"
 },
 {
  "code": "quis ",
  "name": "wie"
 },
 {
  "code": "quo ",
  "name": "waarheen"
 },
 {
  "code": "ubique ",
  "name": "overal"
 },
 {
  "code": "valde ",
  "name": "zeer "
 },
 {
  "code": "pendēre ",
  "name": "hangen"
 },
 {
  "code": "petere ",
  "name": "aanvallen"
 },
 {
  "code": "procedere ",
  "name": "1 voortgaan 2 lopen"
 },
 {
  "code": "resistere ",
  "name": "weerstand bieden"
 },
 {
  "code": "salutare ",
  "name": "(be)groeten"
 },
 {
  "code": "tenēre ",
  "name": "(vast)houden"
 },
 {
  "code": "vulnerare ",
  "name": "verwonden"
 },
 {
  "code": "agmen ",
  "name": " agmina "
 },
 {
  "code": "caput ",
  "name": " capita "
 },
 {
  "code": "corpus ",
  "name": " corpora "
 },
 {
  "code": "homo ",
  "name": " homines "
 },
 {
  "code": "leo ",
  "name": " leones "
 },
 {
  "code": "pes ",
  "name": " pedes "
 },
 {
  "code": "terra ",
  "name": "aarde "
 },
 {
  "code": "umbra ",
  "name": "schaduw"
 },
 {
  "code": "vinum ",
  "name": "wijn"
 },
 {
  "code": "a\/ab + abl ",
  "name": "1 vanaf 2 door"
 },
 {
  "code": "per + acc ",
  "name": "1 door(heen) 2 gedurende 3 over(heen)"
 },
 {
  "code": "enim ",
  "name": "immers "
 },
 {
  "code": "frustra ",
  "name": "tevergeefs"
 },
 {
  "code": "longe ",
  "name": "ver (weg) "
 },
 {
  "code": "alere ",
  "name": "voeden"
 },
 {
  "code": "effugere ",
  "name": " effugio (+ acc) "
 },
 {
  "code": "exstinguere ",
  "name": "blussen"
 },
 {
  "code": "omittere ",
  "name": "achterwege laten "
 },
 {
  "code": "persuadēre + dat ",
  "name": "1 overhalen 2 overtuigen"
 },
 {
  "code": "effugi ",
  "name": "pf van effugere"
 },
 {
  "code": "evasi ",
  "name": "pf van evadere"
 },
 {
  "code": "persuasi ",
  "name": "pf van persuadēre"
 },
 {
  "code": "adulescens ",
  "name": " -entes "
 },
 {
  "code": "bona mv ",
  "name": "goederen"
 },
 {
  "code": "exitium ",
  "name": "ondergang"
 },
 {
  "code": "fama ",
  "name": "1 gerucht 2 goede naam 3 slechte naam"
 },
 {
  "code": "flamma ",
  "name": "vlam"
 },
 {
  "code": "incendium ",
  "name": "brand"
 },
 {
  "code": "poeta ",
  "name": "dichter"
 },
 {
  "code": "salus ",
  "name": " gen salutis "
 },
 {
  "code": "tardus ",
  "name": "1 traag 2 (te) laat"
 },
 {
  "code": "hinc ",
  "name": "hiervandaan"
 },
 {
  "code": "itaque ",
  "name": "dus"
 },
 {
  "code": "aliquid ",
  "name": "iets"
 },
 {
  "code": "aliquis ",
  "name": "iemand"
 },
 {
  "code": "gratias agere ",
  "name": "dank betuigen"
 },
 {
  "code": "imponere ",
  "name": "plaatsen op "
 },
 {
  "code": "perdere ",
  "name": "1 vernietigen 2 verliezen"
 },
 {
  "code": "perire ",
  "name": "omkomen"
 },
 {
  "code": "dedidi ",
  "name": "pf van dedere"
 },
 {
  "code": "perdidi ",
  "name": "pf van perdere"
 },
 {
  "code": "perii ",
  "name": "pf van perire"
 },
 {
  "code": "recepi ",
  "name": "pf van recipere"
 },
 {
  "code": "fames ",
  "name": " gen famis "
 },
 {
  "code": "inopia ",
  "name": "1 gebrek 2 armoede"
 },
 {
  "code": "sacerdos ",
  "name": " sacerdotes "
 },
 {
  "code": "immensus ",
  "name": " -a "
 },
 {
  "code": "sanctus ",
  "name": "1 heilig 2 onschendbaar"
 },
 {
  "code": "securus ",
  "name": " -a "
 },
 {
  "code": "sacer ",
  "name": " sacra "
 },
 {
  "code": "captivus ",
  "name": " -a "
 },
 {
  "code": "aliqui ",
  "name": " aliqua "
 },
 {
  "code": "quidam ",
  "name": " quaedam "
 },
 {
  "code": "quisque ",
  "name": " quaeque "
 },
 {
  "code": "(non) quicquam ",
  "name": "(n)iets"
 },
 {
  "code": "(non) quisquam ",
  "name": "(n)iemand"
 },
 {
  "code": "apparēre ",
  "name": "1 verschijnen 2 duidelijk zijn"
 },
 {
  "code": "augēre ",
  "name": "vergroten "
 },
 {
  "code": "continēre ",
  "name": "1 bijeenhouden 2 bevatten"
 },
 {
  "code": "instituere ",
  "name": "oprichten"
 },
 {
  "code": "pergere ",
  "name": "doorgaan"
 },
 {
  "code": "studēre (+ dat) ",
  "name": "zijn best doen (voor)"
 },
 {
  "code": "adfui ",
  "name": "pf van adesse"
 },
 {
  "code": "decrevi ",
  "name": "pf van decernere"
 },
 {
  "code": "discessi ",
  "name": "pf van discedere"
 },
 {
  "code": "perrexi ",
  "name": "pf van pergere"
 },
 {
  "code": "acceptus ",
  "name": "ppp van accipere"
 },
 {
  "code": "cultus 4 ",
  "name": "1 verzorging "
 },
 {
  "code": "ingenium ",
  "name": "1 karakter 2 aanleg"
 },
 {
  "code": "oriens ",
  "name": " gen orientis "
 },
 {
  "code": "provincia ",
  "name": "provincie "
 },
 {
  "code": "saeculum ",
  "name": "tijdperk "
 },
 {
  "code": "potens ",
  "name": " potent- "
 },
 {
  "code": "an in vraag ",
  "name": "of"
 },
 {
  "code": "igitur ",
  "name": "dus"
 },
 {
  "code": "utique ",
  "name": "hoe dan ook"
 },
 {
  "code": "qualis ",
  "name": " -e 1 "
 },
 {
  "code": "ullus ",
  "name": " -a "
 },
 {
  "code": "consulere ",
  "name": "1 beraadslagen 2 + acc raadplegen"
 },
 {
  "code": "convertere ",
  "name": "(om)draaien"
 },
 {
  "code": "delectare ",
  "name": "blij maken"
 },
 {
  "code": "mandare ",
  "name": "opdragen"
 },
 {
  "code": "prohibēre (+ inf) ",
  "name": "verhinderen (om)"
 },
 {
  "code": "statuere ",
  "name": "besluiten"
 },
 {
  "code": "suadēre ",
  "name": "aanraden "
 },
 {
  "code": "turbare ",
  "name": "verstoren"
 },
 {
  "code": "converti ",
  "name": "pf van convertere"
 },
 {
  "code": "statui ",
  "name": "pf van statuere"
 },
 {
  "code": "suasi ",
  "name": "pf van suadēre"
 },
 {
  "code": "consultus ",
  "name": "ppp van consulere"
 },
 {
  "code": "pressus ",
  "name": "ppp van premere"
 },
 {
  "code": "periturus ",
  "name": "pfa van perire"
 },
 {
  "code": "conspectus 4 ",
  "name": "aanblik"
 },
 {
  "code": "legatus ",
  "name": "1 gezant 2 onderbevelhebber"
 },
 {
  "code": "pons ",
  "name": " pontes "
 },
 {
  "code": "quies ",
  "name": " gen quietis "
 },
 {
  "code": "sedes ",
  "name": " sedes "
 },
 {
  "code": "vates ",
  "name": " vates "
 },
 {
  "code": "aureus ",
  "name": " -a "
 },
 {
  "code": "extra ",
  "name": "1 + acc buiten 2 bijw buiten"
 },
 {
  "code": "oportet ",
  "name": "het behoort"
 },
 {
  "code": "conari ",
  "name": "proberen"
 },
 {
  "code": "fiere ",
  "name": "1 (gemaakt) worden 2 gebeuren"
 },
 {
  "code": "fungi + abl ",
  "name": "verrichten "
 },
 {
  "code": "hortari ",
  "name": "aansporen"
 },
 {
  "code": "loqui ",
  "name": "spreken"
 },
 {
  "code": "mirari ",
  "name": "1 zich verwonderen 2 bewonderen"
 },
 {
  "code": "mori ",
  "name": " morior "
 },
 {
  "code": "oriri ",
  "name": "ontstaan "
 },
 {
  "code": "pati ",
  "name": " patior "
 },
 {
  "code": "proficisci ",
  "name": "vertrekken"
 },
 {
  "code": "reri ",
  "name": "menen"
 },
 {
  "code": "scribere ",
  "name": "schrijven"
 },
 {
  "code": "spargere ",
  "name": "1 strooien 2 verspreiden"
 },
 {
  "code": "uti + abl ",
  "name": "gebruiken"
 },
 {
  "code": "vereri ",
  "name": "vrezen"
 },
 {
  "code": "videri ",
  "name": "schijnen "
 },
 {
  "code": "locutus sum ",
  "name": "pf van loqui"
 },
 {
  "code": "ortus sum ",
  "name": "pf van oriri"
 },
 {
  "code": "passus sum ",
  "name": "pf van pati"
 },
 {
  "code": "profectus sum ",
  "name": "pf van profisci"
 },
 {
  "code": "ratus sum ",
  "name": "pf van reri"
 },
 {
  "code": "scripsi ",
  "name": "pf van scribere"
 },
 {
  "code": "sparsus ",
  "name": "ppp van spargere"
 },
 {
  "code": "ventus ",
  "name": "wind"
 },
 {
  "code": "epistula ",
  "name": "brief"
 },
 {
  "code": "aggredi ",
  "name": " aggredior "
 },
 {
  "code": "frui + abl ",
  "name": "genieten van"
 },
 {
  "code": "morari ",
  "name": "1 verblijven 2 + acc vertragen"
 },
 {
  "code": "oblivisci ",
  "name": "vergeten"
 },
 {
  "code": "pertinēre ",
  "name": "ad + acc 1 zich uitstrekken over 2 betrekking hebben op"
 },
 {
  "code": "queri (+ acc) ",
  "name": "klagen (over)"
 },
 {
  "code": "solēre ",
  "name": "gewend zijn "
 },
 {
  "code": "tueri ",
  "name": "1 bekijken "
 },
 {
  "code": "aggressus sum ",
  "name": "pf van aggredi"
 },
 {
  "code": "oblitus sum ",
  "name": "pf van oblivisci"
 },
 {
  "code": "questus sum ",
  "name": "pf van queri"
 },
 {
  "code": "usus sum ",
  "name": "pf van uti"
 },
 {
  "code": "amissus ",
  "name": "ppp van amittere"
 },
 {
  "code": "rutus ",
  "name": "ppp van ruere"
 },
 {
  "code": "scriptus ",
  "name": "ppp van scribere"
 },
 {
  "code": "fons ",
  "name": " fontes "
 },
 {
  "code": "lapis ",
  "name": " lapides "
 },
 {
  "code": "varius ",
  "name": " -a "
 },
 {
  "code": "quietus ",
  "name": " -a "
 },
 {
  "code": "potius ",
  "name": "1 liever 2 eerder"
 },
 {
  "code": "alii ... alii mv ",
  "name": "sommige(n) ... andere(n)"
 },
 {
  "code": "adhibēre ",
  "name": "toepassen "
 },
 {
  "code": "complecti ",
  "name": "omarmen"
 },
 {
  "code": "egredi ",
  "name": " egredior "
 },
 {
  "code": "ignoscere + dat ",
  "name": "vergeven"
 },
 {
  "code": "prohibēre ",
  "name": "1 (a\/ab) + abl afhouden van 2 + inf verhinderen"
 },
 {
  "code": "rumpere ",
  "name": "breken"
 },
 {
  "code": "sequi ",
  "name": "volgen"
 },
 {
  "code": "vehere ",
  "name": "1 *act* vervoeren 2 *pas* reizen"
 },
 {
  "code": "complexus sum ",
  "name": "pf van complecti"
 },
 {
  "code": "mansi ",
  "name": "pf van manēre"
 },
 {
  "code": "secutus sum ",
  "name": "pf van sequi"
 },
 {
  "code": "egressus sum ",
  "name": "pf van egredi"
 },
 {
  "code": "mortuus sum ",
  "name": "pf van mori"
 },
 {
  "code": "solutus ",
  "name": "ppp van solvere"
 },
 {
  "code": "relictus ",
  "name": "ppp van relinquere"
 },
 {
  "code": "victus ",
  "name": "ppp van vincere"
 },
 {
  "code": "avus ",
  "name": "grootvader"
 },
 {
  "code": "coniunx ",
  "name": " coniuges "
 },
 {
  "code": "currus 4 ",
  "name": "wagen"
 },
 {
  "code": "lacrima ",
  "name": "traan"
 },
 {
  "code": "lex ",
  "name": " leges "
 },
 {
  "code": "necessitas ",
  "name": " -tates "
 },
 {
  "code": "praeceptum ",
  "name": "voorschrift"
 },
 {
  "code": "usus 4 ",
  "name": "1 gebruik 2 nut"
 },
 {
  "code": "cingere ",
  "name": "omringen"
 },
 {
  "code": "furere ",
  "name": "tekeer gaan"
 },
 {
  "code": "latēre ",
  "name": "verborgen zijn"
 },
 {
  "code": "reddere ",
  "name": "teruggeven"
 },
 {
  "code": "reperire ",
  "name": "vinden "
 },
 {
  "code": "sternere ",
  "name": "1 neergooien 2 bedekken"
 },
 {
  "code": "rettuli ",
  "name": "pf van referre"
 },
 {
  "code": "repperi ",
  "name": "pf van reperire"
 },
 {
  "code": "redditus ",
  "name": "ppp van reddere"
 },
 {
  "code": "repertus ",
  "name": "ppp van reperire"
 },
 {
  "code": "aestus 4 ",
  "name": "1 hitte 2 branding"
 },
 {
  "code": "classis ",
  "name": " classes "
 },
 {
  "code": "fluctus 4 ",
  "name": "golf"
 },
 {
  "code": "hiems ",
  "name": " hiemes "
 },
 {
  "code": "navis ",
  "name": " naves "
 },
 {
  "code": "oceanus ",
  "name": "oceaan "
 },
 {
  "code": "pectus ",
  "name": " pectora "
 },
 {
  "code": "signum ",
  "name": "1 teken 2 veldteken"
 },
 {
  "code": "unda ",
  "name": "golf"
 },
 {
  "code": "incertus ",
  "name": " -a "
 },
 {
  "code": "modo ... modo ",
  "name": "nu eens ... dan weer"
 },
 {
  "code": "undique ",
  "name": "van alle kanten"
 },
 {
  "code": "vale ",
  "name": " mv valete "
 },
 {
  "code": "adducere ",
  "name": "brengen (naar)"
 },
 {
  "code": "adipisci ",
  "name": "verkrijgen"
 },
 {
  "code": "committere ",
  "name": "1 toevertrouwen 2 *scelus* begaan 3 *proelium* aangaan"
 },
 {
  "code": "imperare ",
  "name": "bevelen "
 },
 {
  "code": "poscere ",
  "name": "(op)eisen"
 },
 {
  "code": "potiri + abl ",
  "name": "zich meester maken van"
 },
 {
  "code": "desii ",
  "name": "pf van desinere"
 },
 {
  "code": "obsedi ",
  "name": "pf van obsidēre"
 },
 {
  "code": "profui ",
  "name": "pf van prodesse"
 },
 {
  "code": "fractus ",
  "name": "ppp van frangere"
 },
 {
  "code": "factus ",
  "name": "ppp van facere"
 },
 {
  "code": "inventus ",
  "name": "ppp van invenire"
 },
 {
  "code": "futurum ",
  "name": "pfa van esse"
 },
 {
  "code": "cohors ",
  "name": " cohortes "
 },
 {
  "code": "condicio ",
  "name": " -ones "
 },
 {
  "code": "exilium ",
  "name": "verbanning "
 },
 {
  "code": "facinus ",
  "name": " facinora "
 },
 {
  "code": "militia ",
  "name": "krijgsdienst"
 },
 {
  "code": "ripa ",
  "name": "oever"
 },
 {
  "code": "scelus ",
  "name": " scelera "
 },
 {
  "code": "alienus ",
  "name": " -a "
 },
 {
  "code": "proprius ",
  "name": " -a "
 },
 {
  "code": "causa gen + ",
  "name": "wegens"
 },
 {
  "code": "ac ",
  "name": "en"
 },
 {
  "code": "uterque ",
  "name": " utraque "
 },
 {
  "code": "auferre ",
  "name": "1 wegnemen 2 *se* zich verwijderen"
 },
 {
  "code": "detrahere ",
  "name": "wegnemen "
 },
 {
  "code": "errare ",
  "name": "1 zwerven 2 zich vergissen"
 },
 {
  "code": "exigere ",
  "name": "1 verdrijven 2 (op)eisen"
 },
 {
  "code": "expellere ",
  "name": "verdrijven"
 },
 {
  "code": "fallere ",
  "name": "1 bedriegen 2 ontgaan"
 },
 {
  "code": "parere ",
  "name": " pario "
 },
 {
  "code": "tegere ",
  "name": "bedekken"
 },
 {
  "code": "abstuli ",
  "name": "pf van auferre"
 },
 {
  "code": "expuli ",
  "name": "pf van expellere"
 },
 {
  "code": "fefelli ",
  "name": "pf van fallere"
 },
 {
  "code": "nolui ",
  "name": "pf van nolle"
 },
 {
  "code": "peperi ",
  "name": "pf van parere"
 },
 {
  "code": "receptus ",
  "name": "pf van recipere"
 },
 {
  "code": "sedi ",
  "name": "pf van sedēre"
 },
 {
  "code": "exegi ",
  "name": "pf van exigere"
 },
 {
  "code": "detractus ",
  "name": "ppp van detrahere"
 },
 {
  "code": "expulsus ",
  "name": "ppp van expellere"
 },
 {
  "code": "positus ",
  "name": "ppp van ponere"
 },
 {
  "code": "insula ",
  "name": "eiland"
 },
 {
  "code": "modus ",
  "name": "1 manier 2 maat"
 },
 {
  "code": "negotium ",
  "name": "bezigheid "
 },
 {
  "code": "semel ",
  "name": "eenmaal"
 },
 {
  "code": "appropinquare + dat ",
  "name": "naderen"
 },
 {
  "code": "consistere ",
  "name": "blijven staan"
 },
 {
  "code": "ire ",
  "name": "gaan"
 },
 {
  "code": "negare ",
  "name": "1 ontkennen 2 weigeren"
 },
 {
  "code": "scire ",
  "name": "weten"
 },
 {
  "code": "terrēre ",
  "name": "bang maken"
 },
 {
  "code": "vertere ",
  "name": "keren "
 },
 {
  "code": "vitare ",
  "name": "vermijden"
 },
 {
  "code": "causa ",
  "name": "reden"
 },
 {
  "code": "hora ",
  "name": "uur"
 },
 {
  "code": "verbum ",
  "name": "woord"
 },
 {
  "code": "victor ",
  "name": " victores "
 },
 {
  "code": "contra + acc ",
  "name": "tegen(over)"
 },
 {
  "code": "sine ",
  "name": "+ abl zonder"
 },
 {
  "code": "adhuc ",
  "name": "nog "
 },
 {
  "code": "antea ",
  "name": "eerder"
 },
 {
  "code": "centum ",
  "name": "honderd"
 },
 {
  "code": "domum ",
  "name": "naar huis"
 },
 {
  "code": "id nom\/acc ",
  "name": "dit"
 },
 {
  "code": "nondum ",
  "name": "nog niet"
 },
 {
  "code": "nunc ",
  "name": "nu"
 },
 {
  "code": "quidem ... sed ",
  "name": "wel(iswaar) ... maar"
 },
 {
  "code": "tunc ",
  "name": "toen "
 },
 {
  "code": "cedere ",
  "name": "1 (aan de kant) gaan 2 toegeven"
 },
 {
  "code": "ducere ",
  "name": "leiden "
 },
 {
  "code": "parare ",
  "name": "klaarmaken"
 },
 {
  "code": "regere ",
  "name": "besturen "
 },
 {
  "code": "tangere ",
  "name": "aanraken"
 },
 {
  "code": "cecidi ",
  "name": "pf van cadere"
 },
 {
  "code": "constiti ",
  "name": "pf van consistere"
 },
 {
  "code": "dixi ",
  "name": "pf van dicere"
 },
 {
  "code": "duxi ",
  "name": "pf van ducere"
 },
 {
  "code": "feci ",
  "name": "pf van facere"
 },
 {
  "code": "fui ",
  "name": "pf van esse"
 },
 {
  "code": "incepi ",
  "name": "pf van incipere"
 },
 {
  "code": "potui ",
  "name": "pf van posse"
 },
 {
  "code": "respondi ",
  "name": "pf van respondēre"
 },
 {
  "code": "rexi ",
  "name": "pf van regere"
 },
 {
  "code": "risi ",
  "name": "pf van ridēre"
 },
 {
  "code": "tetigi ",
  "name": "pf van tangere"
 },
 {
  "code": "veni ",
  "name": "pf van venire"
 },
 {
  "code": "vici ",
  "name": "pf van vincere"
 },
 {
  "code": "certamen ",
  "name": " certamina "
 },
 {
  "code": "iniura ",
  "name": "onrecht"
 },
 {
  "code": "heri ",
  "name": "gisteren"
 },
 {
  "code": "postquam + pf ",
  "name": "nadat"
 },
 {
  "code": "saepe ",
  "name": "vaak"
 },
 {
  "code": "satis ",
  "name": "genoeg"
 },
 {
  "code": "capere ",
  "name": " capio "
 },
 {
  "code": "credere ",
  "name": "geloven"
 },
 {
  "code": "habitare ",
  "name": "(be)wonen"
 },
 {
  "code": "cucurri ",
  "name": "pf van currere"
 },
 {
  "code": "dedi ",
  "name": "pf van dare"
 },
 {
  "code": "fugi ",
  "name": "pf van fugere"
 },
 {
  "code": "ostendi ",
  "name": "pf van ostendere"
 },
 {
  "code": "posui ",
  "name": "pf van ponere"
 },
 {
  "code": "sustuli ",
  "name": "pf van tollere"
 },
 {
  "code": "vidi ",
  "name": "pf van vidēre"
 },
 {
  "code": "vixi ",
  "name": "pf van vivere"
 },
 {
  "code": "aedificium ",
  "name": "gebouw"
 },
 {
  "code": "dominus ",
  "name": "meester "
 },
 {
  "code": "domus ",
  "name": "huis"
 },
 {
  "code": "exemplum ",
  "name": "voorbeeld"
 },
 {
  "code": "fabula ",
  "name": "verhaal"
 },
 {
  "code": "hospes ",
  "name": " hospites "
 },
 {
  "code": "iter ",
  "name": " itinera "
 },
 {
  "code": "senex ",
  "name": " senes "
 },
 {
  "code": "sermo ",
  "name": " sermones "
 },
 {
  "code": "apud + acc ",
  "name": "bij"
 },
 {
  "code": "trans + acc ",
  "name": "over "
 },
 {
  "code": "priusquam ",
  "name": "voordat"
 },
 {
  "code": "quondam ",
  "name": "eens "
 },
 {
  "code": "Romam ",
  "name": "naar Rome"
 },
 {
  "code": "amittere ",
  "name": "verliezen"
 },
 {
  "code": "amisi ",
  "name": "pf van amittere"
 },
 {
  "code": "amor ",
  "name": " amores "
 },
 {
  "code": "consilium ",
  "name": "1 plan 2 besluit"
 },
 {
  "code": "liberi mv ",
  "name": "kinderen"
 },
 {
  "code": "maritus ",
  "name": "echtgenoot"
 },
 {
  "code": "matrona ",
  "name": "matrona "
 },
 {
  "code": "mors ",
  "name": " mortes "
 },
 {
  "code": "tempus ",
  "name": " tempora "
 },
 {
  "code": "bonus ",
  "name": " -a "
 },
 {
  "code": "carus ",
  "name": " -a "
 },
 {
  "code": "contentus ",
  "name": " -a "
 },
 {
  "code": "laetus ",
  "name": " -a "
 },
 {
  "code": "longus ",
  "name": " -a "
 },
 {
  "code": "magnus ",
  "name": " -a "
 },
 {
  "code": "miser ",
  "name": " -sera "
 },
 {
  "code": "multus ",
  "name": " -a "
 },
 {
  "code": "novus ",
  "name": " -a "
 },
 {
  "code": "parvus ",
  "name": " -a "
 },
 {
  "code": "pulcher ",
  "name": " -chra "
 },
 {
  "code": "Romanus (-a ",
  "name": " -um) "
 },
 {
  "code": "unus ",
  "name": " -a "
 },
 {
  "code": "meus ",
  "name": " -a "
 },
 {
  "code": "tuus ",
  "name": " -a "
 },
 {
  "code": "suus ",
  "name": " -a "
 },
 {
  "code": "noster ",
  "name": " -stra "
 },
 {
  "code": "vester ",
  "name": " -stra "
 },
 {
  "code": "adesse ",
  "name": "aanwezig zijn (bij)"
 },
 {
  "code": "desinere ",
  "name": "ophouden"
 },
 {
  "code": "invitare ",
  "name": "uitnodigen"
 },
 {
  "code": "accessi ",
  "name": "pf van accedere"
 },
 {
  "code": "protexi ",
  "name": "pf van protegere"
 },
 {
  "code": "tradidi ",
  "name": "pf van tradere"
 },
 {
  "code": "cena ",
  "name": "maaltijd"
 },
 {
  "code": "familia ",
  "name": "1 huishouden 2 familie"
 },
 {
  "code": "gaudium ",
  "name": "vreugde"
 },
 {
  "code": "parentes ",
  "name": "ouders"
 },
 {
  "code": "vox ",
  "name": " voces "
 },
 {
  "code": "brevis ",
  "name": " -e "
 },
 {
  "code": "communis ",
  "name": " -e "
 },
 {
  "code": "dulcis ",
  "name": " -e "
 },
 {
  "code": "fortis ",
  "name": " -e "
 },
 {
  "code": "illustris ",
  "name": " -e "
 },
 {
  "code": "ingens ",
  "name": " ingent- "
 },
 {
  "code": "omnes mv m\/v ",
  "name": "1 bnw alle 2 znw allen"
 },
 {
  "code": "omnia mv o ",
  "name": "1 bnw alle 2 znw alles"
 },
 {
  "code": "omnis ",
  "name": " -e ev "
 },
 {
  "code": "optimus ",
  "name": " -a "
 },
 {
  "code": "similis ",
  "name": " -e "
 },
 {
  "code": "ergo ",
  "name": "dus "
 },
 {
  "code": "non iam ",
  "name": "niet meer"
 },
 {
  "code": "postea ",
  "name": "later"
 },
 {
  "code": "accendere ",
  "name": "aansteken "
 },
 {
  "code": "apparēre ",
  "name": "verschijnen"
 },
 {
  "code": "carēre + abl ",
  "name": "missen"
 },
 {
  "code": "exire ",
  "name": "naar buiten gaan"
 },
 {
  "code": "invenire ",
  "name": "vinden"
 },
 {
  "code": "quaerere ",
  "name": "1 zoeken 2 vragen"
 },
 {
  "code": "accendi ",
  "name": "pf van accendere"
 },
 {
  "code": "exii ",
  "name": "pf van exire"
 },
 {
  "code": "ii ",
  "name": "pf van ire"
 },
 {
  "code": "inveni ",
  "name": "pf van invenire"
 },
 {
  "code": "processi ",
  "name": "pf van procedere"
 },
 {
  "code": "funus ",
  "name": " funera "
 },
 {
  "code": "vestis ",
  "name": " vestes "
 },
 {
  "code": "umbra ",
  "name": "1 schaduw 2 schim (van een overledene)"
 },
 {
  "code": "acer ",
  "name": " acris "
 },
 {
  "code": "celer ",
  "name": " celeris "
 },
 {
  "code": "felix ",
  "name": " felic- "
 },
 {
  "code": "iratus ",
  "name": " -a "
 },
 {
  "code": "lenis ",
  "name": " -e "
 },
 {
  "code": "malus ",
  "name": " -a "
 },
 {
  "code": "nudus ",
  "name": " -a "
 },
 {
  "code": "secundus ",
  "name": " -a "
 },
 {
  "code": "timidus ",
  "name": " -a "
 },
 {
  "code": "tristis ",
  "name": " -e "
 },
 {
  "code": "bene bijw ",
  "name": "goed"
 },
 {
  "code": "etiam ",
  "name": "zelfs"
 },
 {
  "code": "magnopere ",
  "name": "1 zeer 2 erg"
 },
 {
  "code": "paulum ",
  "name": "een beetje"
 },
 {
  "code": "agere ",
  "name": "1 leiden "
 },
 {
  "code": "legere ",
  "name": "lezen"
 },
 {
  "code": "mittere ",
  "name": "sturen"
 },
 {
  "code": "putare ",
  "name": "1 menen 2 vinden "
 },
 {
  "code": "credidi ",
  "name": "pf van credere"
 },
 {
  "code": "emi ",
  "name": "pf van emere"
 },
 {
  "code": "iussi ",
  "name": "pf van iubēre"
 },
 {
  "code": "littera ",
  "name": "letter"
 },
 {
  "code": "onus ",
  "name": " onera "
 },
 {
  "code": "pretium ",
  "name": "prijs"
 },
 {
  "code": "ceteri ",
  "name": " -ae "
 },
 {
  "code": "difficilis ",
  "name": " -e "
 },
 {
  "code": "facilis ",
  "name": " -e "
 },
 {
  "code": "fidus ",
  "name": " -a "
 },
 {
  "code": "gravis ",
  "name": " -e "
 },
 {
  "code": "humilis ",
  "name": "1 laag 2 nederig"
 },
 {
  "code": "maior ",
  "name": "groter"
 },
 {
  "code": "melior ",
  "name": "beter"
 },
 {
  "code": "minimus ",
  "name": " -a "
 },
 {
  "code": "peior ",
  "name": "slechter"
 },
 {
  "code": "magis ",
  "name": "meer"
 },
 {
  "code": "minime ",
  "name": "1 (aller)minst 2 helemaal niet"
 },
 {
  "code": "multo bijw ",
  "name": "veel"
 },
 {
  "code": "quam ",
  "name": "1 com ... dan 2 sup zo ... mogelijk"
 },
 {
  "code": "alius ",
  "name": " -a "
 },
 {
  "code": "fugere ",
  "name": " fugio "
 },
 {
  "code": "movēre ",
  "name": "bewegen"
 },
 {
  "code": "parcere + dat ",
  "name": "sparen"
 },
 {
  "code": "tribuere ",
  "name": "toekennen"
 },
 {
  "code": "cepi ",
  "name": "pf van capere"
 },
 {
  "code": "peperci ",
  "name": "pf van parcere"
 },
 {
  "code": "cibus ",
  "name": "voedsel"
 },
 {
  "code": "clamor ",
  "name": " clamores "
 },
 {
  "code": "libertas ",
  "name": " libertates "
 },
 {
  "code": "lingua ",
  "name": "1 tong 2 taal"
 },
 {
  "code": "silva ",
  "name": "bos"
 },
 {
  "code": "vulnus ",
  "name": " vulnera "
 },
 {
  "code": "altus ",
  "name": " -a "
 },
 {
  "code": "audax ",
  "name": " audac- "
 },
 {
  "code": "crudelis ",
  "name": " -e "
 },
 {
  "code": "ferox ",
  "name": " feroc- "
 },
 {
  "code": "lentus ",
  "name": " -a "
 },
 {
  "code": "maximus ",
  "name": " -a "
 },
 {
  "code": "parum ",
  "name": "niet genoeg"
 },
 {
  "code": "que ",
  "name": "en"
 },
 {
  "code": "quia ",
  "name": "omdat"
 },
 {
  "code": "se acc ",
  "name": "zich(zelf)"
 },
 {
  "code": "audēre ",
  "name": "durven"
 },
 {
  "code": "consituere ",
  "name": "besluiten"
 },
 {
  "code": "crescere ",
  "name": "groeien"
 },
 {
  "code": "relinquere ",
  "name": "1 verlaten 2 achterlaten"
 },
 {
  "code": "redire ",
  "name": "teruggaan"
 },
 {
  "code": "constitui ",
  "name": "pf van constituere"
 },
 {
  "code": "misi ",
  "name": "pf van mittere"
 },
 {
  "code": "reliqui ",
  "name": "pf van relinquere"
 },
 {
  "code": "ager ",
  "name": " mv agri "
 },
 {
  "code": "consul ",
  "name": " consules "
 },
 {
  "code": "fuga ",
  "name": "vlucht"
 },
 {
  "code": "legio ",
  "name": " legiones v "
 },
 {
  "code": "litus ",
  "name": " litora "
 },
 {
  "code": "mille ",
  "name": " milia "
 },
 {
  "code": "numerus ",
  "name": "aantal"
 },
 {
  "code": "minor ",
  "name": "kleiner"
 },
 {
  "code": "minus ",
  "name": "minder"
 },
 {
  "code": "pauci ",
  "name": " -ae "
 },
 {
  "code": "plurimi ",
  "name": " -ae "
 },
 {
  "code": "plus ",
  "name": " plures com "
 },
 {
  "code": "cotidie ",
  "name": "dagelijks"
 },
 {
  "code": "maxime ",
  "name": "1 het meest 2 vooral"
 },
 {
  "code": "neque ",
  "name": "1 en niet "
 },
 {
  "code": "Romae ",
  "name": "te Rome "
 },
 {
  "code": "arcessere ",
  "name": "laten komen"
 },
 {
  "code": "coniungere ",
  "name": "verbinden"
 },
 {
  "code": "decet + acc ",
  "name": "(het) past bij"
 },
 {
  "code": "laudare ",
  "name": "prijzen"
 },
 {
  "code": "noscere ",
  "name": "1 te weten komen 2 leren kennen"
 },
 {
  "code": "novisse ",
  "name": "1 weten 2 kennen"
 },
 {
  "code": "arcessivi ",
  "name": "pf van arcessere"
 },
 {
  "code": "novi ",
  "name": "pf van noscere"
 },
 {
  "code": "dolus ",
  "name": "list"
 },
 {
  "code": "opus ",
  "name": " opera "
 },
 {
  "code": "sentientia ",
  "name": "1 mening 2 uitspraak "
 },
 {
  "code": "virtus ",
  "name": " virtutes "
 },
 {
  "code": "clarus ",
  "name": " -a "
 },
 {
  "code": "stultus ",
  "name": " -a "
 },
 {
  "code": "-ne ",
  "name": "vraagwoord (niet vertalen)"
 },
 {
  "code": "at ",
  "name": "maar"
 },
 {
  "code": "quomodo ",
  "name": "hoe"
 },
 {
  "code": "utrum....an ",
  "name": "(of)...of"
 },
 {
  "code": "vero ",
  "name": "1 inderdaad 2 echter"
 },
 {
  "code": "ipse ",
  "name": " "
 },
 {
  "code": "aspicere ",
  "name": " aspicio "
 },
 {
  "code": "conspicere ",
  "name": " conspicio "
 },
 {
  "code": "deficere ",
  "name": " dificio "
 },
 {
  "code": "intellegere ",
  "name": "begrijpen"
 },
 {
  "code": "iuvat (me) ",
  "name": "het doet (me) plezier"
 },
 {
  "code": "laborare ",
  "name": "hard werken"
 },
 {
  "code": "possidēre ",
  "name": "bezitten"
 },
 {
  "code": "sumere ",
  "name": "nemen"
 },
 {
  "code": "aspexi ",
  "name": "pf van aspicere"
 },
 {
  "code": "conspexi ",
  "name": "pf van conspicere"
 },
 {
  "code": "sumpsi ",
  "name": "pf van sumere"
 },
 {
  "code": "verti ",
  "name": "pf van vertere"
 },
 {
  "code": "forma ",
  "name": "gestalte "
 },
 {
  "code": "mensa ",
  "name": "tafel"
 },
 {
  "code": "misericordia ",
  "name": "medelijden"
 },
 {
  "code": "serva ",
  "name": "slavin"
 },
 {
  "code": "cuncti ",
  "name": " -ae "
 },
 {
  "code": "dives ",
  "name": " divit- "
 },
 {
  "code": "cum voegwoord ",
  "name": "wanneer "
 },
 {
  "code": "libenter ",
  "name": "graag"
 },
 {
  "code": "nisi ",
  "name": "als niet"
 },
 {
  "code": "praeterea ",
  "name": "bovendien"
 },
 {
  "code": "quamquam ",
  "name": "hoewel"
 },
 {
  "code": "ut ",
  "name": "1 zoals 2 +pf zodra"
 },
 {
  "code": "condere ",
  "name": "1 stichten 2 verbergen"
 },
 {
  "code": "dubitare ",
  "name": "aarzelen "
 },
 {
  "code": "inquit ",
  "name": "1 hij\/zij zegt 2 hij\/zij zei"
 },
 {
  "code": "mutare ",
  "name": "veranderen"
 },
 {
  "code": "punire ",
  "name": "straffen"
 },
 {
  "code": "repetere ",
  "name": "herhalen"
 },
 {
  "code": "sentire ",
  "name": "1 merken "
 },
 {
  "code": "spernere ",
  "name": "afwijzen"
 },
 {
  "code": "condidi ",
  "name": "pf van condere"
 },
 {
  "code": "cupivi ",
  "name": "pf van cupere"
 },
 {
  "code": "movi ",
  "name": "pf van movēre"
 },
 {
  "code": "repetivi ",
  "name": "pf van repetere"
 },
 {
  "code": "sensi ",
  "name": "pf van sentire"
 },
 {
  "code": "sprevi ",
  "name": "pf van spernere"
 },
 {
  "code": "dolor ",
  "name": " dolores "
 },
 {
  "code": "imago ",
  "name": " imagines "
 },
 {
  "code": "iuvenis ",
  "name": " iuvenes "
 },
 {
  "code": "superbia ",
  "name": "trots "
 },
 {
  "code": "mollis ",
  "name": " -e "
 },
 {
  "code": "ultimus ",
  "name": " -a "
 },
 {
  "code": "ob + acc ",
  "name": "wegens"
 },
 {
  "code": "donec ",
  "name": "totdat"
 },
 {
  "code": "nusquam ",
  "name": "nergens"
 },
 {
  "code": "ultro ",
  "name": "uit zichzelf"
 },
 {
  "code": "nullus ",
  "name": " -a "
 },
 {
  "code": "qui ",
  "name": " quae "
 },
 {
  "code": "accidere ",
  "name": "gebeuren"
 },
 {
  "code": "canere ",
  "name": "zingen"
 },
 {
  "code": "colligere ",
  "name": "verzamelen"
 },
 {
  "code": "fundere ",
  "name": "gieten "
 },
 {
  "code": "laedere ",
  "name": "beledigen "
 },
 {
  "code": "lavare ",
  "name": "wassen"
 },
 {
  "code": "perficere ",
  "name": " perficio "
 },
 {
  "code": "addidi ",
  "name": "pf van addere"
 },
 {
  "code": "intellexi ",
  "name": "pf van intellegere"
 },
 {
  "code": "laesi ",
  "name": "pf van laedere"
 },
 {
  "code": "scii\/scivi ",
  "name": "pf van scire"
 },
 {
  "code": "vendidi ",
  "name": "pf van vendere"
 },
 {
  "code": "carmen ",
  "name": " carmina "
 },
 {
  "code": "labor ",
  "name": " labores "
 },
 {
  "code": "certus ",
  "name": " -a "
 },
 {
  "code": "perpetuus ",
  "name": " -a "
 },
 {
  "code": "primus ",
  "name": " -a "
 },
 {
  "code": "neque ... neque ",
  "name": "niet ... en ook niet"
 },
 {
  "code": "olim ",
  "name": "vroeger "
 },
 {
  "code": "plenus (+ gen) ",
  "name": "vol (met)"
 },
 {
  "code": "alius ... alius ",
  "name": "de een ... de ander"
 },
 {
  "code": "se ",
  "name": "1 zich 2 aci dat hij "
 },
 {
  "code": "censēre ",
  "name": "van mening zijn"
 },
 {
  "code": "committere ",
  "name": "toevertrouwen"
 },
 {
  "code": "egēre + abl ",
  "name": "nodig hebben"
 },
 {
  "code": "meminisse pf ",
  "name": "1 + aci zich herinneren dat 2 + gen zich (iets) herinneren"
 },
 {
  "code": "pervenire ",
  "name": "aankomen"
 },
 {
  "code": "praeterire ",
  "name": "voorbijgaan"
 },
 {
  "code": "premere ",
  "name": "drukken (op)"
 },
 {
  "code": "commisi ",
  "name": "pf van committere"
 },
 {
  "code": "egi ",
  "name": "pf van agere"
 },
 {
  "code": "perveni ",
  "name": "pf van pervenire"
 },
 {
  "code": "praeterii ",
  "name": "pf van praeterire"
 },
 {
  "code": "finis ",
  "name": " fines "
 },
 {
  "code": "frumentum ",
  "name": "graan"
 },
 {
  "code": "iuventus ",
  "name": " gen -tutis "
 },
 {
  "code": "officium ",
  "name": "plicht "
 },
 {
  "code": "orbis ",
  "name": " orbes "
 },
 {
  "code": "villa ",
  "name": "landgoed"
 },
 {
  "code": "ignotus ",
  "name": " -a "
 },
 {
  "code": "amplus ",
  "name": " -a "
 },
 {
  "code": "procul ",
  "name": "ver "
 },
 {
  "code": "cogere ",
  "name": "1 bijeenbrengen 2 dwingen"
 },
 {
  "code": "delēre ",
  "name": "vernielen"
 },
 {
  "code": "necesse est ",
  "name": "het is nodig"
 },
 {
  "code": "nescire ",
  "name": "niet weten"
 },
 {
  "code": "rapere ",
  "name": " rapio "
 },
 {
  "code": "ruere ",
  "name": "1 zich haasten 2 neerstorten "
 },
 {
  "code": "tremere ",
  "name": "trillen "
 },
 {
  "code": "accidi ",
  "name": "pf van accidere"
 },
 {
  "code": "coegi ",
  "name": "pf van cogere"
 },
 {
  "code": "perfeci ",
  "name": "pf van perficere"
 },
 {
  "code": "rapui ",
  "name": "pf van rapere"
 },
 {
  "code": "rui ",
  "name": "pf van ruere"
 },
 {
  "code": "Iovis ",
  "name": "gen van Iupiter"
 },
 {
  "code": "regio ",
  "name": " regiones "
 },
 {
  "code": "anxius ",
  "name": " -a "
 },
 {
  "code": "frequens ",
  "name": " frequent- "
 },
 {
  "code": "nonnulli ",
  "name": " -ae "
 },
 {
  "code": "vehemens ",
  "name": " vehement- "
 },
 {
  "code": "vetus ",
  "name": " veter- "
 },
 {
  "code": "post ",
  "name": "1 + acc achter "
 },
 {
  "code": "unde ",
  "name": "waarvandaan"
 },
 {
  "code": "quisque ",
  "name": "iedereen"
 },
 {
  "code": "abire ",
  "name": "weggaan"
 },
 {
  "code": "colere ",
  "name": "1 verzorgen 2 bebouwen 3 vereren"
 },
 {
  "code": "discere (a\/ab +abl) ",
  "name": "leren (van)"
 },
 {
  "code": "expugnare ",
  "name": "veroveren"
 },
 {
  "code": "frangere ",
  "name": "breken"
 },
 {
  "code": "odisse pf ",
  "name": "haten"
 },
 {
  "code": "perdere ",
  "name": "vernietigen"
 },
 {
  "code": "permittere ",
  "name": "toelaten "
 },
 {
  "code": "iurare (per + acc) ",
  "name": "zweren (bij)"
 },
 {
  "code": "abii ",
  "name": "pf van abire"
 },
 {
  "code": "collegi ",
  "name": "pf van colligere"
 },
 {
  "code": "didici ",
  "name": "pf van discere"
 },
 {
  "code": "fregi ",
  "name": "pf van frangere"
 },
 {
  "code": "animus ",
  "name": "geest "
 },
 {
  "code": "ara ",
  "name": "altaar"
 },
 {
  "code": "ars ",
  "name": " artes "
 },
 {
  "code": "copiae mv ",
  "name": "troepen"
 },
 {
  "code": "divitiae mv ",
  "name": "rijkdom"
 },
 {
  "code": "mare ",
  "name": " maria "
 },
 {
  "code": "mari ",
  "name": "abl van mare"
 },
 {
  "code": "patria ",
  "name": "vaderland"
 },
 {
  "code": "senator ",
  "name": " senatores "
 },
 {
  "code": "militaris ",
  "name": " -e "
 },
 {
  "code": "umquam ",
  "name": "ooit"
 },
 {
  "code": "accipere ",
  "name": " accipio "
 },
 {
  "code": "aperire ",
  "name": "openen"
 },
 {
  "code": "convenire ",
  "name": "bijeenkomen"
 },
 {
  "code": "defendere ",
  "name": "verdedigen"
 },
 {
  "code": "dolēre ",
  "name": "treuren "
 },
 {
  "code": "habēre ",
  "name": "1 hebben 2 houden"
 },
 {
  "code": "intendere ",
  "name": "richten"
 },
 {
  "code": "accepi ",
  "name": "pf van accipere"
 },
 {
  "code": "conveni ",
  "name": "pf van convenire"
 },
 {
  "code": "castra mv ",
  "name": "legerkamp"
 },
 {
  "code": "clades ",
  "name": " clades "
 },
 {
  "code": "curia ",
  "name": "senaatsgebouw"
 },
 {
  "code": "moenia mv ",
  "name": "(stads)muren"
 },
 {
  "code": "multitudo ",
  "name": " -tudines "
 },
 {
  "code": "nuntius ",
  "name": "1 bode2 bericht"
 },
 {
  "code": "porta ",
  "name": "poort"
 },
 {
  "code": "mortuus (-a ",
  "name": " -um) "
 },
 {
  "code": "privatus ",
  "name": " -a "
 },
 {
  "code": "publicus ",
  "name": " -a "
 },
 {
  "code": "tutus ",
  "name": "veilig"
 },
 {
  "code": "cras ",
  "name": "morgen"
 },
 {
  "code": "paulatim ",
  "name": "langzamerhand"
 },
 {
  "code": "postremo ",
  "name": "tenslotte"
 },
 {
  "code": "quantus ",
  "name": " -a "
 },
 {
  "code": "instruere ",
  "name": "opstellen"
 },
 {
  "code": "interficere ",
  "name": " -ficio "
 },
 {
  "code": "malle inf.prs ",
  "name": "liever willen"
 },
 {
  "code": "merēre ",
  "name": "verdienen"
 },
 {
  "code": "obsidēre ",
  "name": "belegeren"
 },
 {
  "code": "offerre ",
  "name": "aanbieden"
 },
 {
  "code": "parēre ",
  "name": "gehoorzamen"
 },
 {
  "code": "referre ",
  "name": "1 terugbrengen 2 (be)halen 3 rapporteren"
 },
 {
  "code": "revocare ",
  "name": "terugroepen"
 },
 {
  "code": "velle inf.prs ",
  "name": "willen"
 },
 {
  "code": "vis van velle ",
  "name": "jij wilt"
 },
 {
  "code": "instructus ",
  "name": "ppp van instruere"
 },
 {
  "code": "interfectus ",
  "name": "ppp van interficere"
 },
 {
  "code": "relatus ",
  "name": "ppp van referre"
 },
 {
  "code": "relictus ",
  "name": "ppp van relinquere"
 },
 {
  "code": "victus ",
  "name": "ppp van vincere"
 },
 {
  "code": "campus ",
  "name": "veld"
 },
 {
  "code": "laus ",
  "name": " laudes "
 },
 {
  "code": "pax ",
  "name": " gen pacis "
 },
 {
  "code": "proelium ",
  "name": "gevecht "
 },
 {
  "code": "spatium ",
  "name": "1 afstand 2 ruimte"
 },
 {
  "code": "latus ",
  "name": " -a "
 },
 {
  "code": "totus ",
  "name": " -a "
 },
 {
  "code": "propter + acc ",
  "name": "wegens"
 },
 {
  "code": "paene ",
  "name": "bijna"
 },
 {
  "code": "afferre ",
  "name": "(mee)brengen"
 },
 {
  "code": "ascendere ",
  "name": "bestijgen "
 },
 {
  "code": "deicere ",
  "name": " deicio "
 },
 {
  "code": "ferre ",
  "name": "1 dragen "
 },
 {
  "code": "petere ",
  "name": "1 zoeken "
 },
 {
  "code": "promittere ",
  "name": "beloven"
 },
 {
  "code": "ascendi ",
  "name": "pf van ascendere"
 },
 {
  "code": "attuli ",
  "name": "pf van afferre"
 },
 {
  "code": "deieci ",
  "name": "pf van deicere"
 },
 {
  "code": "obtuli ",
  "name": "pf van offerre"
 },
 {
  "code": "pressi ",
  "name": "pf van premere"
 },
 {
  "code": "promisi ",
  "name": "pf van promittere"
 },
 {
  "code": "tuli ",
  "name": "pf van ferre"
 },
 {
  "code": "deiectus ",
  "name": "ppp van deicere"
 },
 {
  "code": "mercator ",
  "name": " mercatores "
 },
 {
  "code": "magnitudo ",
  "name": " -dinis "
 },
 {
  "code": "regnum ",
  "name": "1 koningschap 2 koninkrijk"
 },
 {
  "code": "mirus ",
  "name": " -a "
 },
 {
  "code": "nisi ",
  "name": "1 als niet 2 behalve"
 },
 {
  "code": "par ",
  "name": " par- "
 },
 {
  "code": "atque ",
  "name": "en"
 },
 {
  "code": "afficere ",
  "name": " afficio "
 },
 {
  "code": "constat ",
  "name": "het staat vast"
 },
 {
  "code": "invenire ",
  "name": "1 vinden 2 uitvinden"
 },
 {
  "code": "nocēre + dat ",
  "name": "schaden "
 },
 {
  "code": "nolle inf.prs ",
  "name": "niet willen"
 },
 {
  "code": "sperare ",
  "name": "hopen"
 },
 {
  "code": "interfeci ",
  "name": "pf van interficere"
 },
 {
  "code": "affectus ",
  "name": "ppp van afficere"
 },
 {
  "code": "collectus ",
  "name": "ppp van colligere"
 },
 {
  "code": "doctus ",
  "name": "ppp van docēre"
 },
 {
  "code": "ductus ",
  "name": "ppp van ducere"
 },
 {
  "code": "factus ",
  "name": "ppp van facere"
 },
 {
  "code": "inventus ",
  "name": "ppp van invenire"
 },
 {
  "code": "futurum ",
  "name": "pfa van esse"
 },
 {
  "code": "aetas ",
  "name": " aetates "
 },
 {
  "code": "ira ",
  "name": "woede"
 },
 {
  "code": "lumen ",
  "name": " lumina "
 },
 {
  "code": "mens ",
  "name": " mentes "
 },
 {
  "code": "mundus ",
  "name": "wereld"
 },
 {
  "code": "pondus ",
  "name": " pondera "
 },
 {
  "code": "scientia ",
  "name": "kennis "
 },
 {
  "code": "summus ",
  "name": " -a "
 },
 {
  "code": "tener ",
  "name": " -era "
 },
 {
  "code": "utilis ",
  "name": " -e "
 },
 {
  "code": "nimium + gen ",
  "name": "teveel"
 },
 {
  "code": "confirmare ",
  "name": "bevestigen"
 },
 {
  "code": "contemnere ",
  "name": "minachten"
 },
 {
  "code": "desiderare ",
  "name": "verlangen (naar)"
 },
 {
  "code": "praeferre ",
  "name": "liever hebben "
 },
 {
  "code": "bibi ",
  "name": "pf van bibere"
 },
 {
  "code": "contempsi ",
  "name": "pf van contemnere"
 },
 {
  "code": "possedi ",
  "name": "pf van possidēre"
 },
 {
  "code": "quaesivi ",
  "name": "pf van quaerere"
 },
 {
  "code": "accensus ",
  "name": "ppp van accendere"
 },
 {
  "code": "dictum ",
  "name": "ppp van dicere"
 },
 {
  "code": "canis ",
  "name": " canes "
 },
 {
  "code": "gloria ",
  "name": "roem"
 },
 {
  "code": "honor ",
  "name": " honores "
 },
 {
  "code": "lux ",
  "name": " luces "
 },
 {
  "code": "potestas ",
  "name": " -ates "
 },
 {
  "code": "studium ",
  "name": "1 ijver "
 },
 {
  "code": "falsus ",
  "name": " -a "
 },
 {
  "code": "pauper ",
  "name": " pauper- "
 },
 {
  "code": "verus ",
  "name": " -a "
 },
 {
  "code": "ne ... quidem ",
  "name": "zelfs niet"
 },
 {
  "code": "quare ",
  "name": "waarom"
 },
 {
  "code": "quasi ",
  "name": "1 als(of) 2 als het ware"
 },
 {
  "code": "certare ",
  "name": "strijden"
 },
 {
  "code": "decernere ",
  "name": "beslissen"
 },
 {
  "code": "haerēre ",
  "name": "blijven steken"
 },
 {
  "code": "iacere ",
  "name": " iacio "
 },
 {
  "code": "impedire ",
  "name": "belemmeren "
 },
 {
  "code": "instare + dat ",
  "name": "achterna zitten"
 },
 {
  "code": "invadere ",
  "name": "binnendringen "
 },
 {
  "code": "recipere ",
  "name": " recipio "
 },
 {
  "code": "trahere ",
  "name": "trekken"
 },
 {
  "code": "urgēre ",
  "name": "in het nauw brengen"
 },
 {
  "code": "acies 5 ",
  "name": "slaglinie"
 },
 {
  "code": "cornu 4 ",
  "name": "hoorn"
 },
 {
  "code": "dies 5 m ",
  "name": "dag"
 },
 {
  "code": "exercitus 4 ",
  "name": "leger"
 },
 {
  "code": "gradus 4 ",
  "name": "stap "
 },
 {
  "code": "impetus 4 ",
  "name": "1 het aanstormen 2 aanval"
 },
 {
  "code": "manus 4 v ",
  "name": "hand"
 },
 {
  "code": "metus 4 ",
  "name": "vrees "
 },
 {
  "code": "res 5 ",
  "name": "zaak "
 },
 {
  "code": "strepitus 4 ",
  "name": "lawaai"
 },
 {
  "code": "tumultus 4 ",
  "name": "opschudding "
 },
 {
  "code": "dexter ",
  "name": " -tra "
 },
 {
  "code": "incolumis ",
  "name": " -e "
 },
 {
  "code": "universus ",
  "name": " -a "
 },
 {
  "code": "uterque ",
  "name": "elk van beiden"
 },
 {
  "code": "uter ",
  "name": " utra "
 },
 {
  "code": "corrumpere ",
  "name": "1 bederven 2 omkopen"
 },
 {
  "code": "obtinēre ",
  "name": "1 in bezit krijgen 2 in bezit hebben"
 },
 {
  "code": "captus ",
  "name": "ppp van capere"
 },
 {
  "code": "datum ",
  "name": "ppp van dare"
 },
 {
  "code": "adventus 4 ",
  "name": "aankomst"
 },
 {
  "code": "auxilium ",
  "name": "1 hulp 2 mv hulptroepen"
 },
 {
  "code": "centurio ",
  "name": " -ones "
 },
 {
  "code": "color ",
  "name": " colores "
 },
 {
  "code": "gens ",
  "name": " gentes "
 },
 {
  "code": "munus ",
  "name": " munera "
 },
 {
  "code": "oppidum ",
  "name": "(vesting)stad"
 },
 {
  "code": "praemium ",
  "name": "beloning"
 },
 {
  "code": "socius ",
  "name": "bondgenoot"
 },
 {
  "code": "species 5 ",
  "name": "uiterlijk"
 },
 {
  "code": "vis ",
  "name": " vires "
 },
 {
  "code": "barbarus ",
  "name": " -a "
 },
 {
  "code": "saevus ",
  "name": " -a "
 },
 {
  "code": "solus ",
  "name": " -a "
 },
 {
  "code": "usque ad + acc ",
  "name": "tot aan"
 },
 {
  "code": "bis ",
  "name": "tweemaal"
 },
 {
  "code": "paulo ",
  "name": "een beetje"
 },
 {
  "code": "quoniam ",
  "name": "aangezien"
 },
 {
  "code": "tam ",
  "name": "zo"
 },
 {
  "code": "convocare ",
  "name": "bijeenroepen"
 },
 {
  "code": "dedere (se) ",
  "name": "(zich) overgeven"
 },
 {
  "code": "descendere ",
  "name": "afdalen"
 },
 {
  "code": "inire ",
  "name": "1 ingaan 2 beginnen"
 },
 {
  "code": "patēre ",
  "name": "openstaan"
 },
 {
  "code": "properare ",
  "name": "zich haasten"
 },
 {
  "code": "proponere ",
  "name": "1 voorleggen 2 voorstellen"
 },
 {
  "code": "descendi ",
  "name": "pf van descendere"
 },
 {
  "code": "inii ",
  "name": "pf van inire"
 },
 {
  "code": "clausus ",
  "name": "ppp van claudere"
 },
 {
  "code": "missus ",
  "name": "ppp van mittere"
 },
 {
  "code": "propositus ",
  "name": "ppp van proponere"
 },
 {
  "code": "exitus 4 ",
  "name": "1 uitgang 2 afloop"
 },
 {
  "code": "fides 5 ",
  "name": "1 (woord van) trouw 2 vertrouwen"
 },
 {
  "code": "imperator ",
  "name": " -ores "
 },
 {
  "code": "imperium ",
  "name": "1 bevel "
 },
 {
  "code": "legatus ",
  "name": "gezant"
 },
 {
  "code": "princeps ",
  "name": " principes "
 },
 {
  "code": "spes 5 ",
  "name": "hoop "
 },
 {
  "code": "posterus ",
  "name": " -a "
 },
 {
  "code": "singuli ",
  "name": " -ae "
 },
 {
  "code": "vivus ",
  "name": " -a "
 },
 {
  "code": "intra + acc ",
  "name": "binnen"
 },
 {
  "code": "vix ",
  "name": "met moeite "
 },
 {
  "code": "coepi ",
  "name": "pf ik ben begonnen"
 },
 {
  "code": "imminēre (+ dat) ",
  "name": "(be)dreigen"
 },
 {
  "code": "metuere ",
  "name": "vrezen"
 },
 {
  "code": "praestare ",
  "name": "1 verrichten 2 se zich betonen"
 },
 {
  "code": "prodesse ",
  "name": "voordelig zijn"
 },
 {
  "code": "transire ",
  "name": "oversteken"
 },
 {
  "code": "transii ",
  "name": "pf van transire"
 },
 {
  "code": "actus ",
  "name": "ppp van agere"
 },
 {
  "code": "iactus ",
  "name": "ppp van iacere"
 },
 {
  "code": "obtentus ",
  "name": "ppp van obtinēre"
 },
 {
  "code": "civitas ",
  "name": " civitates "
 },
 {
  "code": "clementia ",
  "name": "genade "
 },
 {
  "code": "luxuria ",
  "name": "(zucht naar) weelde"
 },
 {
  "code": "plebs ",
  "name": " gen plebis "
 },
 {
  "code": "res publica ",
  "name": "staat "
 },
 {
  "code": "senatus 4 ",
  "name": "senaat"
 },
 {
  "code": "virgo ",
  "name": " virgines "
 },
 {
  "code": "civilis ",
  "name": " -e "
 },
 {
  "code": "inimicus ",
  "name": " (-a "
 },
 {
  "code": "inanis ",
  "name": " -e "
 },
 {
  "code": "adire (ad) + acc ",
  "name": "gaan naar"
 },
 {
  "code": "efferre ",
  "name": "naar buiten dragen"
 },
 {
  "code": "includere ",
  "name": "insluiten"
 },
 {
  "code": "iuvare ",
  "name": "helpen"
 },
 {
  "code": "liberare (a + abl) ",
  "name": "bevrijden (van)"
 },
 {
  "code": "regnare ",
  "name": "koning zijn"
 },
 {
  "code": "simulare ",
  "name": "doen alsof "
 },
 {
  "code": "surgere ",
  "name": "opstaan"
 },
 {
  "code": "adii ",
  "name": "pf van adire"
 },
 {
  "code": "iuvi ",
  "name": "pf van iuvare"
 },
 {
  "code": "surrexi ",
  "name": "pf van surgere"
 },
 {
  "code": "volui ",
  "name": "pf van velle"
 },
 {
  "code": "conditus ",
  "name": "ppp van condere"
 },
 {
  "code": "inclusus ",
  "name": "ppp van includere"
 },
 {
  "code": "facies 5 ",
  "name": "gezicht "
 },
 {
  "code": "regina ",
  "name": "koningin"
 },
 {
  "code": "spiritus 4 ",
  "name": "1 adem 2 geest"
 },
 {
  "code": "insignis ",
  "name": " -e "
 },
 {
  "code": "hic ",
  "name": " haec "
 },
 {
  "code": "idem ",
  "name": " eadem "
 },
 {
  "code": "ille ",
  "name": " illa "
 },
 {
  "code": "iste ",
  "name": " ista "
 },
 {
  "code": "sibi dat ",
  "name": "(aan\/voor) zichzelf"
 },
 {
  "code": "cavēre (+ acc) ",
  "name": "oppassen (voor)"
 },
 {
  "code": "contingere ",
  "name": "1 + acc aanraken 2 gebeuren"
 },
 {
  "code": "convenire ",
  "name": "1 bijeenkomen 2 + acc ontmoeten"
 },
 {
  "code": "excitare ",
  "name": "(op)wekken"
 },
 {
  "code": "interest ",
  "name": "het is van belang"
 },
 {
  "code": "interire ",
  "name": "omkomen "
 },
 {
  "code": "iungere ",
  "name": "verbinden"
 },
 {
  "code": "monēre ",
  "name": "1 waarschuwen 2 aansporen"
 },
 {
  "code": "neglegere ",
  "name": "verwaarlozen"
 },
 {
  "code": "contigi ",
  "name": "pf van contingere"
 },
 {
  "code": "invasi ",
  "name": "pf van invadere"
 },
 {
  "code": "coactus ",
  "name": "ppp van cogere"
 },
 {
  "code": "interiturus ",
  "name": "pfa van interire"
 },
 {
  "code": "rediturus ",
  "name": "pfa van redire"
 },
 {
  "code": "nubes ",
  "name": " nubes "
 },
 {
  "code": "omen ",
  "name": " omina "
 },
 {
  "code": "pietas ",
  "name": " pietates "
 },
 {
  "code": "somnium ",
  "name": "droom"
 },
 {
  "code": "vultus 4 ",
  "name": "gezicht"
 },
 {
  "code": "ante ",
  "name": "1 + acc voor 2 bijw eerder"
 },
 {
  "code": "supra ",
  "name": "1 + acc boven 2 bijw (er)boven"
 },
 {
  "code": "efficere ",
  "name": " efficio "
 },
 {
  "code": "eligere ",
  "name": "uitkiezen"
 },
 {
  "code": "effeci ",
  "name": "pf vanefficere"
 },
 {
  "code": "arcessitus ",
  "name": "ppp van arcessere"
 },
 {
  "code": "electus ",
  "name": "ppp van eligere"
 },
 {
  "code": "victurus ",
  "name": "pfa van vivere"
 },
 {
  "code": "audacia ",
  "name": "(over)moed"
 },
 {
  "code": "morbus ",
  "name": "ziekte"
 },
 {
  "code": "sapienta ",
  "name": "wijsheid"
 },
 {
  "code": "sors ",
  "name": " "
 },
 {
  "code": "aeger ",
  "name": " aegra "
 },
 {
  "code": "durus ",
  "name": " -a "
 },
 {
  "code": "Graecus (-a ",
  "name": " -um) "
 },
 {
  "code": "improbus ",
  "name": " -a "
 },
 {
  "code": "nobilis ",
  "name": " -e "
 },
 {
  "code": "rectus ",
  "name": " -a "
 },
 {
  "code": "ne + con HZ ",
  "name": "niet"
 },
 {
  "code": "prior ",
  "name": " prius "
 },
 {
  "code": "quam uitroep ",
  "name": "wat "
 },
 {
  "code": "utinam ",
  "name": "leidt een wens in "
 },
 {
  "code": "talis ",
  "name": " -e "
 },
 {
  "code": "cernere ",
  "name": "onderscheiden "
 },
 {
  "code": "cognoscere ",
  "name": "1 te weten komen 2 leren kennen"
 },
 {
  "code": "cognovi ",
  "name": "pf 1 weten 2 kennen"
 },
 {
  "code": "demittere ",
  "name": "laten zakken "
 },
 {
  "code": "evadere ",
  "name": "ontsnappen"
 },
 {
  "code": "exclamare ",
  "name": "uitroepen"
 },
 {
  "code": "iactare ",
  "name": "1 slingeren 2 opscheppen over"
 },
 {
  "code": "solvere ",
  "name": "1 losmaken 2 betalen"
 },
 {
  "code": "crevi ",
  "name": "pf van cernere"
 },
 {
  "code": "cognovi ",
  "name": "pf van cognoscere"
 },
 {
  "code": "demisi ",
  "name": "pf van demittere"
 },
 {
  "code": "proposui ",
  "name": "pf van proponere"
 },
 {
  "code": "comes ",
  "name": " comites "
 },
 {
  "code": "genu ",
  "name": " genua "
 },
 {
  "code": "gratia ",
  "name": "1 gunst 2 dank 3 charme"
 },
 {
  "code": "praeda ",
  "name": "buit"
 },
 {
  "code": "res gestae mv ",
  "name": "oorlogsdaden"
 },
 {
  "code": "adeo ",
  "name": "zo(zeer)"
 },
 {
  "code": "cum + con ",
  "name": "1 toen "
 },
 {
  "code": "inter se ",
  "name": "onderling"
 },
 {
  "code": "ne + con BZ ",
  "name": "1 (met de bedoeling) dat niet "
 },
 {
  "code": "ut + con ",
  "name": "1 (met de bedoeling) dat "
 },
 {
  "code": "tantus ",
  "name": " -a "
 }
];

function printData(Arr) {
  for(var i=0; i<Arr.length; i++) {
    codesEl.innerText += `\n${Arr[i].name} code: ${Arr[i].code}`;
  }
}

// it is a case insensitive search
function search(ev) {
  var key = ev.target.value;
  codesEl.innerText = null;
  
  printData(jsonData.filter((data)=>{
    var regex = new RegExp(key, "i");
    return data.name.match(regex) || data.code.match(regex);
  }));
}

window.onload = function() {
  codesEl = document.getElementById("codes");
  printData(jsonData);
}