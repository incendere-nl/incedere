var codesEl;
var jsonData = [
[
 {
  "latijn": "audire ",
  "nederlands": "horen"
 },
 {
  "latijn": "clamare ",
  "nederlands": "schreeuwen"
 },
 {
  "latijn": "iacēre ",
  "nederlands": "liggen"
 },
 {
  "latijn": "iubēre ",
  "nederlands": "bevelen"
 },
 {
  "latijn": "lacrimare ",
  "nederlands": "huilen"
 },
 {
  "latijn": "necare ",
  "nederlands": "doden"
 },
 {
  "latijn": "ponere ",
  "nederlands": "plaatsen"
 },
 {
  "latijn": "portare ",
  "nederlands": "dragen"
 },
 {
  "latijn": "recusare ",
  "nederlands": "weigeren"
 },
 {
  "latijn": "timēre ",
  "nederlands": "vrezen "
 },
 {
  "latijn": "tollere ",
  "nederlands": "optillen"
 },
 {
  "latijn": "venire ",
  "nederlands": "komen"
 },
 {
  "latijn": "vidēre ",
  "nederlands": "zien"
 },
 {
  "latijn": "vocare ",
  "nederlands": "1 roepen "
 },
 {
  "latijn": "aqua ",
  "nederlands": "water"
 },
 {
  "latijn": "arbor ",
  "nederlands": "boom"
 },
 {
  "latijn": "flumen ",
  "nederlands": "flumina "
 },
 {
  "latijn": "locus ",
  "nederlands": "plaats"
 },
 {
  "latijn": "mandatum ",
  "nederlands": "opdracht"
 },
 {
  "latijn": "puer ",
  "nederlands": " pueri "
 },
 {
  "latijn": "rex ",
  "nederlands": " reges "
 },
 {
  "latijn": "servus ",
  "nederlands": "slaaf"
 },
 {
  "latijn": "ad + acc ",
  "nederlands": "1 naar "
 },
 {
  "latijn": "in + acc ",
  "nederlands": "in "
 },
 {
  "latijn": "inter + acc ",
  "nederlands": "1 tussen 2 tijdens"
 },
 {
  "latijn": "et ",
  "nederlands": "1 en 2 ook"
 },
 {
  "latijn": "ibi ",
  "nederlands": "daar"
 },
 {
  "latijn": "ideo ",
  "nederlands": "daarom"
 },
 {
  "latijn": "non ",
  "nederlands": "niet"
 },
 {
  "latijn": "tamen ",
  "nederlands": "toch"
 },
 {
  "latijn": "ubi ",
  "nederlands": "waar"
 },
 {
  "latijn": "accedere ",
  "nederlands": "1 gaan naar 2 naderen"
 },
 {
  "latijn": "bibere ",
  "nederlands": "drinken"
 },
 {
  "latijn": "cogitare ",
  "nederlands": "(na)denken"
 },
 {
  "latijn": "custodire ",
  "nederlands": "bewaken"
 },
 {
  "latijn": "dare ",
  "nederlands": "geven"
 },
 {
  "latijn": "dicere ",
  "nederlands": "zeggen"
 },
 {
  "latijn": "esse ",
  "nederlands": "zijn"
 },
 {
  "latijn": "favēre + dat ",
  "nederlands": "steun geven aan"
 },
 {
  "latijn": "praebēre ",
  "nederlands": "(aan)bieden"
 },
 {
  "latijn": "protegere ",
  "nederlands": "beschermen"
 },
 {
  "latijn": "ridēre ",
  "nederlands": "lachen"
 },
 {
  "latijn": "tradere ",
  "nederlands": "overhandigen"
 },
 {
  "latijn": "deus ",
  "nederlands": "god"
 },
 {
  "latijn": "femina ",
  "nederlands": "vrouw"
 },
 {
  "latijn": "filius ",
  "nederlands": "zoon"
 },
 {
  "latijn": "mater ",
  "nederlands": " matres "
 },
 {
  "latijn": "nomen ",
  "nederlands": " nomina "
 },
 {
  "latijn": "pater ",
  "nederlands": " patres "
 },
 {
  "latijn": "uxor ",
  "nederlands": " uxores "
 },
 {
  "latijn": "haud ",
  "nederlands": "helemaal niet"
 },
 {
  "latijn": "nam ",
  "nederlands": "want"
 },
 {
  "latijn": "sic ",
  "nederlands": "zo"
 },
 {
  "latijn": "sicut ",
  "nederlands": "zoals"
 },
 {
  "latijn": "subito ",
  "nederlands": "plotseling"
 },
 {
  "latijn": "aedificare ",
  "nederlands": "bouwen"
 },
 {
  "latijn": "dividere ",
  "nederlands": "verdelen"
 },
 {
  "latijn": "facere ",
  "nederlands": "facio "
 },
 {
  "latijn": "intrare ",
  "nederlands": "binnenkomen"
 },
 {
  "latijn": "licet (+dat) ",
  "nederlands": "het is toegestaan (aan)"
 },
 {
  "latijn": "placēre + dat ",
  "nederlands": "bevallen"
 },
 {
  "latijn": "stare ",
  "nederlands": "staan"
 },
 {
  "latijn": "tacēre ",
  "nederlands": "zwijgen"
 },
 {
  "latijn": "amicus ",
  "nederlands": "vriend"
 },
 {
  "latijn": "civis ",
  "nederlands": " cives "
 },
 {
  "latijn": "frater ",
  "nederlands": " fratres "
 },
 {
  "latijn": "gladius ",
  "nederlands": "zwaard"
 },
 {
  "latijn": "hostis ",
  "nederlands": " hostes "
 },
 {
  "latijn": "mons ",
  "nederlands": " montes "
 },
 {
  "latijn": "murus ",
  "nederlands": "muur"
 },
 {
  "latijn": "populus ",
  "nederlands": "volk"
 },
 {
  "latijn": "saxum ",
  "nederlands": "rots "
 },
 {
  "latijn": "urbs ",
  "nederlands": " urbes "
 },
 {
  "latijn": "vir ",
  "nederlands": " mv viri "
 },
 {
  "latijn": "cum + abl ",
  "nederlands": "met"
 },
 {
  "latijn": "de + abl ",
  "nederlands": "1 van(af) 2 over"
 },
 {
  "latijn": "in + abl ",
  "nederlands": "1 in 2 op"
 },
 {
  "latijn": "cur ",
  "nederlands": "waarom"
 },
 {
  "latijn": "dum ",
  "nederlands": "1 terwijl 2 zolang als"
 },
 {
  "latijn": "iam ",
  "nederlands": "al "
 },
 {
  "latijn": "primum bijw ",
  "nederlands": "eerst"
 },
 {
  "latijn": "quoque ",
  "nederlands": "ook"
 },
 {
  "latijn": "sed ",
  "nederlands": "maar"
 },
 {
  "latijn": "tandem ",
  "nederlands": "eindelijk"
 },
 {
  "latijn": "cadere ",
  "nederlands": "vallen"
 },
 {
  "latijn": "dormire ",
  "nederlands": "slapen"
 },
 {
  "latijn": "retinēre ",
  "nederlands": "tegenhouden"
 },
 {
  "latijn": "servare ",
  "nederlands": "redden"
 },
 {
  "latijn": "temptare ",
  "nederlands": "proberen"
 },
 {
  "latijn": "arma mv ",
  "nederlands": "wapens"
 },
 {
  "latijn": "arx ",
  "nederlands": " arces "
 },
 {
  "latijn": "auxilium ",
  "nederlands": "hulp"
 },
 {
  "latijn": "custos ",
  "nederlands": " custodes "
 },
 {
  "latijn": "miles ",
  "nederlands": " milites "
 },
 {
  "latijn": "nox ",
  "nederlands": " noctes "
 },
 {
  "latijn": "pars ",
  "nederlands": " partes "
 },
 {
  "latijn": "periculum ",
  "nederlands": "gevaar"
 },
 {
  "latijn": "puella ",
  "nederlands": "meisje"
 },
 {
  "latijn": "Roma ",
  "nederlands": "Rome"
 },
 {
  "latijn": "Romanus ",
  "nederlands": "Romein"
 },
 {
  "latijn": "silentium ",
  "nederlands": "stilte"
 },
 {
  "latijn": "turba ",
  "nederlands": "menigte"
 },
 {
  "latijn": "post + acc ",
  "nederlands": "1 achter 2 na"
 },
 {
  "latijn": "ecce ",
  "nederlands": "kijk"
 },
 {
  "latijn": "semper ",
  "nederlands": "altijd"
 },
 {
  "latijn": "si ",
  "nederlands": "als "
 },
 {
  "latijn": "statim ",
  "nederlands": "meteen"
 },
 {
  "latijn": "abesse ",
  "nederlands": "afwezig zijn"
 },
 {
  "latijn": "addere ",
  "nederlands": "toevoegen"
 },
 {
  "latijn": "ardēre ",
  "nederlands": "branden"
 },
 {
  "latijn": "debēre ",
  "nederlands": "moeten"
 },
 {
  "latijn": "discedere ",
  "nederlands": "weggaan"
 },
 {
  "latijn": "docēre ",
  "nederlands": "onderwijzen"
 },
 {
  "latijn": "ludere ",
  "nederlands": "spelen"
 },
 {
  "latijn": "orare ",
  "nederlands": "1 bidden (tot) 2 smeken (om)"
 },
 {
  "latijn": "ostendere ",
  "nederlands": "tonen"
 },
 {
  "latijn": "vivere ",
  "nederlands": "leven"
 },
 {
  "latijn": "annus ",
  "nederlands": "jaar"
 },
 {
  "latijn": "culpa ",
  "nederlands": "schuld"
 },
 {
  "latijn": "dea ",
  "nederlands": "godin"
 },
 {
  "latijn": "ignis ",
  "nederlands": " ignes "
 },
 {
  "latijn": "poena ",
  "nederlands": "straf"
 },
 {
  "latijn": "signum ",
  "nederlands": "teken"
 },
 {
  "latijn": "sol ",
  "nederlands": " soles "
 },
 {
  "latijn": "e\/ex + abl ",
  "nederlands": "uit"
 },
 {
  "latijn": "super + acc ",
  "nederlands": "boven(op) "
 },
 {
  "latijn": "autem ",
  "nederlands": "echter"
 },
 {
  "latijn": "diu ",
  "nederlands": "lang "
 },
 {
  "latijn": "mox ",
  "nederlands": "spoedig"
 },
 {
  "latijn": "nuper ",
  "nederlands": "kort geleden"
 },
 {
  "latijn": "tantum ",
  "nederlands": "slechts "
 },
 {
  "latijn": "amare ",
  "nederlands": "houden van "
 },
 {
  "latijn": "celebrare ",
  "nederlands": "(feest)vieren"
 },
 {
  "latijn": "cupere ",
  "nederlands": " cupio "
 },
 {
  "latijn": "exspectare ",
  "nederlands": "wachten (op)"
 },
 {
  "latijn": "fugere ",
  "nederlands": " fugio "
 },
 {
  "latijn": "gerere ",
  "nederlands": "1 dragen 2 voeren"
 },
 {
  "latijn": "narrare ",
  "nederlands": "vertellen"
 },
 {
  "latijn": "pugnare ",
  "nederlands": "vechten"
 },
 {
  "latijn": "sedēre ",
  "nederlands": "zitten"
 },
 {
  "latijn": "vendere ",
  "nederlands": "verkopen"
 },
 {
  "latijn": "vincere ",
  "nederlands": "(over)winnen"
 },
 {
  "latijn": "bellum ",
  "nederlands": "oorlog"
 },
 {
  "latijn": "dux ",
  "nederlands": " duces "
 },
 {
  "latijn": "equus ",
  "nederlands": "paard"
 },
 {
  "latijn": "forum ",
  "nederlands": "forum "
 },
 {
  "latijn": "pugna ",
  "nederlands": "gevecht"
 },
 {
  "latijn": "templum ",
  "nederlands": "tempel"
 },
 {
  "latijn": "victoria ",
  "nederlands": "overwinning"
 },
 {
  "latijn": "vita ",
  "nederlands": "(het) leven"
 },
 {
  "latijn": "pro + abl ",
  "nederlands": "1 voor 2 in plaats van"
 },
 {
  "latijn": "prope + acc ",
  "nederlands": "dichtbij"
 },
 {
  "latijn": "interea ",
  "nederlands": "intussen"
 },
 {
  "latijn": "num ",
  "nederlands": "(toch) zeker niet"
 },
 {
  "latijn": "scilicet ",
  "nederlands": "natuurlijk"
 },
 {
  "latijn": "complēre ",
  "nederlands": "vullen"
 },
 {
  "latijn": "curare + acc ",
  "nederlands": "verzorgen "
 },
 {
  "latijn": "emere ",
  "nederlands": "kopen"
 },
 {
  "latijn": "habēre ",
  "nederlands": "hebben"
 },
 {
  "latijn": "incipere ",
  "nederlands": " incipio "
 },
 {
  "latijn": "manēre ",
  "nederlands": "blijven"
 },
 {
  "latijn": "respondēre ",
  "nederlands": "antwoorden"
 },
 {
  "latijn": "rogare ",
  "nederlands": "vragen"
 },
 {
  "latijn": "vetare ",
  "nederlands": "verbieden"
 },
 {
  "latijn": "filia ",
  "nederlands": "dochter"
 },
 {
  "latijn": "initium ",
  "nederlands": "begin"
 },
 {
  "latijn": "pecunia ",
  "nederlands": "geld"
 },
 {
  "latijn": "poculum ",
  "nederlands": "beker"
 },
 {
  "latijn": "soror ",
  "nederlands": " sorores "
 },
 {
  "latijn": "spectator ",
  "nederlands": " -ores "
 },
 {
  "latijn": "via ",
  "nederlands": "weg "
 },
 {
  "latijn": "ante + acc ",
  "nederlands": "voor"
 },
 {
  "latijn": "sub + abl ",
  "nederlands": "onder"
 },
 {
  "latijn": "aut ",
  "nederlands": "of"
 },
 {
  "latijn": "fortasse ",
  "nederlands": "misschien"
 },
 {
  "latijn": "hic ",
  "nederlands": "hier"
 },
 {
  "latijn": "immo ",
  "nederlands": "integendeel"
 },
 {
  "latijn": "nihil ",
  "nederlands": "niets"
 },
 {
  "latijn": "nonne ",
  "nederlands": "(toch) zeker wel"
 },
 {
  "latijn": "quando ",
  "nederlands": "wanneer"
 },
 {
  "latijn": "quod ",
  "nederlands": "1 omdat 2 (datgene) wat"
 },
 {
  "latijn": "claudere ",
  "nederlands": "sluiten"
 },
 {
  "latijn": "currere ",
  "nederlands": "rennen"
 },
 {
  "latijn": "finire ",
  "nederlands": "beëindigen"
 },
 {
  "latijn": "fluere ",
  "nederlands": "stromen"
 },
 {
  "latijn": "gaudēre ",
  "nederlands": "blij zijn"
 },
 {
  "latijn": "nuntiare ",
  "nederlands": "berichten "
 },
 {
  "latijn": "posse ",
  "nederlands": "kunnen"
 },
 {
  "latijn": "spectare ",
  "nederlands": "kijken (naar)"
 },
 {
  "latijn": "superare ",
  "nederlands": "1 overtreffen 2 overwinnen"
 },
 {
  "latijn": "animal ",
  "nederlands": " animalia "
 },
 {
  "latijn": "nemo ",
  "nederlands": " gen neminis "
 },
 {
  "latijn": "oculus ",
  "nederlands": "oog"
 },
 {
  "latijn": "sanguis ",
  "nederlands": " gen -guinis "
 },
 {
  "latijn": "spectaculum ",
  "nederlands": "voorstelling"
 },
 {
  "latijn": "cito bijw ",
  "nederlands": "snel"
 },
 {
  "latijn": "deinde ",
  "nederlands": "daarna"
 },
 {
  "latijn": "domi ",
  "nederlands": "thuis"
 },
 {
  "latijn": "hodie ",
  "nederlands": "vandaag"
 },
 {
  "latijn": "ita ",
  "nederlands": "zo"
 },
 {
  "latijn": "iterum ",
  "nederlands": "weer "
 },
 {
  "latijn": "numquam ",
  "nederlands": "nooit"
 },
 {
  "latijn": "quid ",
  "nederlands": "wat"
 },
 {
  "latijn": "quis ",
  "nederlands": "wie"
 },
 {
  "latijn": "quo ",
  "nederlands": "waarheen"
 },
 {
  "latijn": "ubique ",
  "nederlands": "overal"
 },
 {
  "latijn": "valde ",
  "nederlands": "zeer "
 },
 {
  "latijn": "pendēre ",
  "nederlands": "hangen"
 },
 {
  "latijn": "petere ",
  "nederlands": "aanvallen"
 },
 {
  "latijn": "procedere ",
  "nederlands": "1 voortgaan 2 lopen"
 },
 {
  "latijn": "resistere ",
  "nederlands": "weerstand bieden"
 },
 {
  "latijn": "salutare ",
  "nederlands": "(be)groeten"
 },
 {
  "latijn": "tenēre ",
  "nederlands": "(vast)houden"
 },
 {
  "latijn": "vulnerare ",
  "nederlands": "verwonden"
 },
 {
  "latijn": "agmen ",
  "nederlands": " agmina "
 },
 {
  "latijn": "caput ",
  "nederlands": " capita "
 },
 {
  "latijn": "corpus ",
  "nederlands": " corpora "
 },
 {
  "latijn": "homo ",
  "nederlands": " homines "
 },
 {
  "latijn": "leo ",
  "nederlands": " leones "
 },
 {
  "latijn": "pes ",
  "nederlands": " pedes "
 },
 {
  "latijn": "terra ",
  "nederlands": "aarde "
 },
 {
  "latijn": "umbra ",
  "nederlands": "schaduw"
 },
 {
  "latijn": "vinum ",
  "nederlands": "wijn"
 },
 {
  "latijn": "a\/ab + abl ",
  "nederlands": "1 vanaf 2 door"
 },
 {
  "latijn": "per + acc ",
  "nederlands": "1 door(heen) 2 gedurende 3 over(heen)"
 },
 {
  "latijn": "enim ",
  "nederlands": "immers "
 },
 {
  "latijn": "frustra ",
  "nederlands": "tevergeefs"
 },
 {
  "latijn": "longe ",
  "nederlands": "ver (weg) "
 },
 {
  "latijn": "alere ",
  "nederlands": "voeden"
 },
 {
  "latijn": "effugere ",
  "nederlands": " effugio (+ acc) "
 },
 {
  "latijn": "exstinguere ",
  "nederlands": "blussen"
 },
 {
  "latijn": "omittere ",
  "nederlands": "achterwege laten "
 },
 {
  "latijn": "persuadēre + dat ",
  "nederlands": "1 overhalen 2 overtuigen"
 },
 {
  "latijn": "effugi ",
  "nederlands": "pf van effugere"
 },
 {
  "latijn": "evasi ",
  "nederlands": "pf van evadere"
 },
 {
  "latijn": "persuasi ",
  "nederlands": "pf van persuadēre"
 },
 {
  "latijn": "adulescens ",
  "nederlands": " -entes "
 },
 {
  "latijn": "bona mv ",
  "nederlands": "goederen"
 },
 {
  "latijn": "exitium ",
  "nederlands": "ondergang"
 },
 {
  "latijn": "fama ",
  "nederlands": "1 gerucht 2 goede naam 3 slechte naam"
 },
 {
  "latijn": "flamma ",
  "nederlands": "vlam"
 },
 {
  "latijn": "incendium ",
  "nederlands": "brand"
 },
 {
  "latijn": "poeta ",
  "nederlands": "dichter"
 },
 {
  "latijn": "salus ",
  "nederlands": " gen salutis "
 },
 {
  "latijn": "tardus ",
  "nederlands": "1 traag 2 (te) laat"
 },
 {
  "latijn": "hinc ",
  "nederlands": "hiervandaan"
 },
 {
  "latijn": "itaque ",
  "nederlands": "dus"
 },
 {
  "latijn": "aliquid ",
  "nederlands": "iets"
 },
 {
  "latijn": "aliquis ",
  "nederlands": "iemand"
 },
 {
  "latijn": "gratias agere ",
  "nederlands": "dank betuigen"
 },
 {
  "latijn": "imponere ",
  "nederlands": "plaatsen op "
 },
 {
  "latijn": "perdere ",
  "nederlands": "1 vernietigen 2 verliezen"
 },
 {
  "latijn": "perire ",
  "nederlands": "omkomen"
 },
 {
  "latijn": "dedidi ",
  "nederlands": "pf van dedere"
 },
 {
  "latijn": "perdidi ",
  "nederlands": "pf van perdere"
 },
 {
  "latijn": "perii ",
  "nederlands": "pf van perire"
 },
 {
  "latijn": "recepi ",
  "nederlands": "pf van recipere"
 },
 {
  "latijn": "fames ",
  "nederlands": " gen famis "
 },
 {
  "latijn": "inopia ",
  "nederlands": "1 gebrek 2 armoede"
 },
 {
  "latijn": "sacerdos ",
  "nederlands": " sacerdotes "
 },
 {
  "latijn": "immensus ",
  "nederlands": " -a "
 },
 {
  "latijn": "sanctus ",
  "nederlands": "1 heilig 2 onschendbaar"
 },
 {
  "latijn": "securus ",
  "nederlands": " -a "
 },
 {
  "latijn": "sacer ",
  "nederlands": " sacra "
 },
 {
  "latijn": "captivus ",
  "nederlands": " -a "
 },
 {
  "latijn": "aliqui ",
  "nederlands": " aliqua "
 },
 {
  "latijn": "quidam ",
  "nederlands": " quaedam "
 },
 {
  "latijn": "quisque ",
  "nederlands": " quaeque "
 },
 {
  "latijn": "(non) quicquam ",
  "nederlands": "(n)iets"
 },
 {
  "latijn": "(non) quisquam ",
  "nederlands": "(n)iemand"
 },
 {
  "latijn": "apparēre ",
  "nederlands": "1 verschijnen 2 duidelijk zijn"
 },
 {
  "latijn": "augēre ",
  "nederlands": "vergroten "
 },
 {
  "latijn": "continēre ",
  "nederlands": "1 bijeenhouden 2 bevatten"
 },
 {
  "latijn": "instituere ",
  "nederlands": "oprichten"
 },
 {
  "latijn": "pergere ",
  "nederlands": "doorgaan"
 },
 {
  "latijn": "studēre (+ dat) ",
  "nederlands": "zijn best doen (voor)"
 },
 {
  "latijn": "adfui ",
  "nederlands": "pf van adesse"
 },
 {
  "latijn": "decrevi ",
  "nederlands": "pf van decernere"
 },
 {
  "latijn": "discessi ",
  "nederlands": "pf van discedere"
 },
 {
  "latijn": "perrexi ",
  "nederlands": "pf van pergere"
 },
 {
  "latijn": "acceptus ",
  "nederlands": "ppp van accipere"
 },
 {
  "latijn": "cultus 4 ",
  "nederlands": "1 verzorging "
 },
 {
  "latijn": "ingenium ",
  "nederlands": "1 karakter 2 aanleg"
 },
 {
  "latijn": "oriens ",
  "nederlands": " gen orientis "
 },
 {
  "latijn": "provincia ",
  "nederlands": "provincie "
 },
 {
  "latijn": "saeculum ",
  "nederlands": "tijdperk "
 },
 {
  "latijn": "potens ",
  "nederlands": " potent- "
 },
 {
  "latijn": "an in vraag ",
  "nederlands": "of"
 },
 {
  "latijn": "igitur ",
  "nederlands": "dus"
 },
 {
  "latijn": "utique ",
  "nederlands": "hoe dan ook"
 },
 {
  "latijn": "qualis ",
  "nederlands": " -e 1 "
 },
 {
  "latijn": "ullus ",
  "nederlands": " -a "
 },
 {
  "latijn": "consulere ",
  "nederlands": "1 beraadslagen 2 + acc raadplegen"
 },
 {
  "latijn": "convertere ",
  "nederlands": "(om)draaien"
 },
 {
  "latijn": "delectare ",
  "nederlands": "blij maken"
 },
 {
  "latijn": "mandare ",
  "nederlands": "opdragen"
 },
 {
  "latijn": "prohibēre (+ inf) ",
  "nederlands": "verhinderen (om)"
 },
 {
  "latijn": "statuere ",
  "nederlands": "besluiten"
 },
 {
  "latijn": "suadēre ",
  "nederlands": "aanraden "
 },
 {
  "latijn": "turbare ",
  "nederlands": "verstoren"
 },
 {
  "latijn": "converti ",
  "nederlands": "pf van convertere"
 },
 {
  "latijn": "statui ",
  "nederlands": "pf van statuere"
 },
 {
  "latijn": "suasi ",
  "nederlands": "pf van suadēre"
 },
 {
  "latijn": "consultus ",
  "nederlands": "ppp van consulere"
 },
 {
  "latijn": "pressus ",
  "nederlands": "ppp van premere"
 },
 {
  "latijn": "periturus ",
  "nederlands": "pfa van perire"
 },
 {
  "latijn": "conspectus 4 ",
  "nederlands": "aanblik"
 },
 {
  "latijn": "legatus ",
  "nederlands": "1 gezant 2 onderbevelhebber"
 },
 {
  "latijn": "pons ",
  "nederlands": " pontes "
 },
 {
  "latijn": "quies ",
  "nederlands": " gen quietis "
 },
 {
  "latijn": "sedes ",
  "nederlands": " sedes "
 },
 {
  "latijn": "vates ",
  "nederlands": " vates "
 },
 {
  "latijn": "aureus ",
  "nederlands": " -a "
 },
 {
  "latijn": "extra ",
  "nederlands": "1 + acc buiten 2 bijw buiten"
 },
 {
  "latijn": "oportet ",
  "nederlands": "het behoort"
 },
 {
  "latijn": "conari ",
  "nederlands": "proberen"
 },
 {
  "latijn": "fiere ",
  "nederlands": "1 (gemaakt) worden 2 gebeuren"
 },
 {
  "latijn": "fungi + abl ",
  "nederlands": "verrichten "
 },
 {
  "latijn": "hortari ",
  "nederlands": "aansporen"
 },
 {
  "latijn": "loqui ",
  "nederlands": "spreken"
 },
 {
  "latijn": "mirari ",
  "nederlands": "1 zich verwonderen 2 bewonderen"
 },
 {
  "latijn": "mori ",
  "nederlands": " morior "
 },
 {
  "latijn": "oriri ",
  "nederlands": "ontstaan "
 },
 {
  "latijn": "pati ",
  "nederlands": " patior "
 },
 {
  "latijn": "proficisci ",
  "nederlands": "vertrekken"
 },
 {
  "latijn": "reri ",
  "nederlands": "menen"
 },
 {
  "latijn": "scribere ",
  "nederlands": "schrijven"
 },
 {
  "latijn": "spargere ",
  "nederlands": "1 strooien 2 verspreiden"
 },
 {
  "latijn": "uti + abl ",
  "nederlands": "gebruiken"
 },
 {
  "latijn": "vereri ",
  "nederlands": "vrezen"
 },
 {
  "latijn": "videri ",
  "nederlands": "schijnen "
 },
 {
  "latijn": "locutus sum ",
  "nederlands": "pf van loqui"
 },
 {
  "latijn": "ortus sum ",
  "nederlands": "pf van oriri"
 },
 {
  "latijn": "passus sum ",
  "nederlands": "pf van pati"
 },
 {
  "latijn": "profectus sum ",
  "nederlands": "pf van profisci"
 },
 {
  "latijn": "ratus sum ",
  "nederlands": "pf van reri"
 },
 {
  "latijn": "scripsi ",
  "nederlands": "pf van scribere"
 },
 {
  "latijn": "sparsus ",
  "nederlands": "ppp van spargere"
 },
 {
  "latijn": "ventus ",
  "nederlands": "wind"
 },
 {
  "latijn": "epistula ",
  "nederlands": "brief"
 },
 {
  "latijn": "aggredi ",
  "nederlands": " aggredior "
 },
 {
  "latijn": "frui + abl ",
  "nederlands": "genieten van"
 },
 {
  "latijn": "morari ",
  "nederlands": "1 verblijven 2 + acc vertragen"
 },
 {
  "latijn": "oblivisci ",
  "nederlands": "vergeten"
 },
 {
  "latijn": "pertinēre ",
  "nederlands": "ad + acc 1 zich uitstrekken over 2 betrekking hebben op"
 },
 {
  "latijn": "queri (+ acc) ",
  "nederlands": "klagen (over)"
 },
 {
  "latijn": "solēre ",
  "nederlands": "gewend zijn "
 },
 {
  "latijn": "tueri ",
  "nederlands": "1 bekijken "
 },
 {
  "latijn": "aggressus sum ",
  "nederlands": "pf van aggredi"
 },
 {
  "latijn": "oblitus sum ",
  "nederlands": "pf van oblivisci"
 },
 {
  "latijn": "questus sum ",
  "nederlands": "pf van queri"
 },
 {
  "latijn": "usus sum ",
  "nederlands": "pf van uti"
 },
 {
  "latijn": "amissus ",
  "nederlands": "ppp van amittere"
 },
 {
  "latijn": "rutus ",
  "nederlands": "ppp van ruere"
 },
 {
  "latijn": "scriptus ",
  "nederlands": "ppp van scribere"
 },
 {
  "latijn": "fons ",
  "nederlands": " fontes "
 },
 {
  "latijn": "lapis ",
  "nederlands": " lapides "
 },
 {
  "latijn": "varius ",
  "nederlands": " -a "
 },
 {
  "latijn": "quietus ",
  "nederlands": " -a "
 },
 {
  "latijn": "potius ",
  "nederlands": "1 liever 2 eerder"
 },
 {
  "latijn": "alii ... alii mv ",
  "nederlands": "sommige(n) ... andere(n)"
 },
 {
  "latijn": "adhibēre ",
  "nederlands": "toepassen "
 },
 {
  "latijn": "complecti ",
  "nederlands": "omarmen"
 },
 {
  "latijn": "egredi ",
  "nederlands": " egredior "
 },
 {
  "latijn": "ignoscere + dat ",
  "nederlands": "vergeven"
 },
 {
  "latijn": "prohibēre ",
  "nederlands": "1 (a\/ab) + abl afhouden van 2 + inf verhinderen"
 },
 {
  "latijn": "rumpere ",
  "nederlands": "breken"
 },
 {
  "latijn": "sequi ",
  "nederlands": "volgen"
 },
 {
  "latijn": "vehere ",
  "nederlands": "1 *act* vervoeren 2 *pas* reizen"
 },
 {
  "latijn": "complexus sum ",
  "nederlands": "pf van complecti"
 },
 {
  "latijn": "mansi ",
  "nederlands": "pf van manēre"
 },
 {
  "latijn": "secutus sum ",
  "nederlands": "pf van sequi"
 },
 {
  "latijn": "egressus sum ",
  "nederlands": "pf van egredi"
 },
 {
  "latijn": "mortuus sum ",
  "nederlands": "pf van mori"
 },
 {
  "latijn": "solutus ",
  "nederlands": "ppp van solvere"
 },
 {
  "latijn": "relictus ",
  "nederlands": "ppp van relinquere"
 },
 {
  "latijn": "victus ",
  "nederlands": "ppp van vincere"
 },
 {
  "latijn": "avus ",
  "nederlands": "grootvader"
 },
 {
  "latijn": "coniunx ",
  "nederlands": " coniuges "
 },
 {
  "latijn": "currus 4 ",
  "nederlands": "wagen"
 },
 {
  "latijn": "lacrima ",
  "nederlands": "traan"
 },
 {
  "latijn": "lex ",
  "nederlands": " leges "
 },
 {
  "latijn": "necessitas ",
  "nederlands": " -tates "
 },
 {
  "latijn": "praeceptum ",
  "nederlands": "voorschrift"
 },
 {
  "latijn": "usus 4 ",
  "nederlands": "1 gebruik 2 nut"
 },
 {
  "latijn": "cingere ",
  "nederlands": "omringen"
 },
 {
  "latijn": "furere ",
  "nederlands": "tekeer gaan"
 },
 {
  "latijn": "latēre ",
  "nederlands": "verborgen zijn"
 },
 {
  "latijn": "reddere ",
  "nederlands": "teruggeven"
 },
 {
  "latijn": "reperire ",
  "nederlands": "vinden "
 },
 {
  "latijn": "sternere ",
  "nederlands": "1 neergooien 2 bedekken"
 },
 {
  "latijn": "rettuli ",
  "nederlands": "pf van referre"
 },
 {
  "latijn": "repperi ",
  "nederlands": "pf van reperire"
 },
 {
  "latijn": "redditus ",
  "nederlands": "ppp van reddere"
 },
 {
  "latijn": "repertus ",
  "nederlands": "ppp van reperire"
 },
 {
  "latijn": "aestus 4 ",
  "nederlands": "1 hitte 2 branding"
 },
 {
  "latijn": "classis ",
  "nederlands": " classes "
 },
 {
  "latijn": "fluctus 4 ",
  "nederlands": "golf"
 },
 {
  "latijn": "hiems ",
  "nederlands": " hiemes "
 },
 {
  "latijn": "navis ",
  "nederlands": " naves "
 },
 {
  "latijn": "oceanus ",
  "nederlands": "oceaan "
 },
 {
  "latijn": "pectus ",
  "nederlands": " pectora "
 },
 {
  "latijn": "signum ",
  "nederlands": "1 teken 2 veldteken"
 },
 {
  "latijn": "unda ",
  "nederlands": "golf"
 },
 {
  "latijn": "incertus ",
  "nederlands": " -a "
 },
 {
  "latijn": "modo ... modo ",
  "nederlands": "nu eens ... dan weer"
 },
 {
  "latijn": "undique ",
  "nederlands": "van alle kanten"
 },
 {
  "latijn": "vale ",
  "nederlands": " mv valete "
 },
 {
  "latijn": "adducere ",
  "nederlands": "brengen (naar)"
 },
 {
  "latijn": "adipisci ",
  "nederlands": "verkrijgen"
 },
 {
  "latijn": "committere ",
  "nederlands": "1 toevertrouwen 2 *scelus* begaan 3 *proelium* aangaan"
 },
 {
  "latijn": "imperare ",
  "nederlands": "bevelen "
 },
 {
  "latijn": "poscere ",
  "nederlands": "(op)eisen"
 },
 {
  "latijn": "potiri + abl ",
  "nederlands": "zich meester maken van"
 },
 {
  "latijn": "desii ",
  "nederlands": "pf van desinere"
 },
 {
  "latijn": "obsedi ",
  "nederlands": "pf van obsidēre"
 },
 {
  "latijn": "profui ",
  "nederlands": "pf van prodesse"
 },
 {
  "latijn": "fractus ",
  "nederlands": "ppp van frangere"
 },
 {
  "latijn": "factus ",
  "nederlands": "ppp van facere"
 },
 {
  "latijn": "inventus ",
  "nederlands": "ppp van invenire"
 },
 {
  "latijn": "futurum ",
  "nederlands": "pfa van esse"
 },
 {
  "latijn": "cohors ",
  "nederlands": " cohortes "
 },
 {
  "latijn": "condicio ",
  "nederlands": " -ones "
 },
 {
  "latijn": "exilium ",
  "nederlands": "verbanning "
 },
 {
  "latijn": "facinus ",
  "nederlands": " facinora "
 },
 {
  "latijn": "militia ",
  "nederlands": "krijgsdienst"
 },
 {
  "latijn": "ripa ",
  "nederlands": "oever"
 },
 {
  "latijn": "scelus ",
  "nederlands": " scelera "
 },
 {
  "latijn": "alienus ",
  "nederlands": " -a "
 },
 {
  "latijn": "proprius ",
  "nederlands": " -a "
 },
 {
  "latijn": "causa gen + ",
  "nederlands": "wegens"
 },
 {
  "latijn": "ac ",
  "nederlands": "en"
 },
 {
  "latijn": "uterque ",
  "nederlands": " utraque "
 },
 {
  "latijn": "auferre ",
  "nederlands": "1 wegnemen 2 *se* zich verwijderen"
 },
 {
  "latijn": "detrahere ",
  "nederlands": "wegnemen "
 },
 {
  "latijn": "errare ",
  "nederlands": "1 zwerven 2 zich vergissen"
 },
 {
  "latijn": "exigere ",
  "nederlands": "1 verdrijven 2 (op)eisen"
 },
 {
  "latijn": "expellere ",
  "nederlands": "verdrijven"
 },
 {
  "latijn": "fallere ",
  "nederlands": "1 bedriegen 2 ontgaan"
 },
 {
  "latijn": "parere ",
  "nederlands": " pario "
 },
 {
  "latijn": "tegere ",
  "nederlands": "bedekken"
 },
 {
  "latijn": "abstuli ",
  "nederlands": "pf van auferre"
 },
 {
  "latijn": "expuli ",
  "nederlands": "pf van expellere"
 },
 {
  "latijn": "fefelli ",
  "nederlands": "pf van fallere"
 },
 {
  "latijn": "nolui ",
  "nederlands": "pf van nolle"
 },
 {
  "latijn": "peperi ",
  "nederlands": "pf van parere"
 },
 {
  "latijn": "receptus ",
  "nederlands": "pf van recipere"
 },
 {
  "latijn": "sedi ",
  "nederlands": "pf van sedēre"
 },
 {
  "latijn": "exegi ",
  "nederlands": "pf van exigere"
 },
 {
  "latijn": "detractus ",
  "nederlands": "ppp van detrahere"
 },
 {
  "latijn": "expulsus ",
  "nederlands": "ppp van expellere"
 },
 {
  "latijn": "positus ",
  "nederlands": "ppp van ponere"
 },
 {
  "latijn": "insula ",
  "nederlands": "eiland"
 },
 {
  "latijn": "modus ",
  "nederlands": "1 manier 2 maat"
 },
 {
  "latijn": "negotium ",
  "nederlands": "bezigheid "
 },
 {
  "latijn": "semel ",
  "nederlands": "eenmaal"
 },
 {
  "latijn": "appropinquare + dat ",
  "nederlands": "naderen"
 },
 {
  "latijn": "consistere ",
  "nederlands": "blijven staan"
 },
 {
  "latijn": "ire ",
  "nederlands": "gaan"
 },
 {
  "latijn": "negare ",
  "nederlands": "1 ontkennen 2 weigeren"
 },
 {
  "latijn": "scire ",
  "nederlands": "weten"
 },
 {
  "latijn": "terrēre ",
  "nederlands": "bang maken"
 },
 {
  "latijn": "vertere ",
  "nederlands": "keren "
 },
 {
  "latijn": "vitare ",
  "nederlands": "vermijden"
 },
 {
  "latijn": "causa ",
  "nederlands": "reden"
 },
 {
  "latijn": "hora ",
  "nederlands": "uur"
 },
 {
  "latijn": "verbum ",
  "nederlands": "woord"
 },
 {
  "latijn": "victor ",
  "nederlands": " victores "
 },
 {
  "latijn": "contra + acc ",
  "nederlands": "tegen(over)"
 },
 {
  "latijn": "sine ",
  "nederlands": "+ abl zonder"
 },
 {
  "latijn": "adhuc ",
  "nederlands": "nog "
 },
 {
  "latijn": "antea ",
  "nederlands": "eerder"
 },
 {
  "latijn": "centum ",
  "nederlands": "honderd"
 },
 {
  "latijn": "domum ",
  "nederlands": "naar huis"
 },
 {
  "latijn": "id nom\/acc ",
  "nederlands": "dit"
 },
 {
  "latijn": "nondum ",
  "nederlands": "nog niet"
 },
 {
  "latijn": "nunc ",
  "nederlands": "nu"
 },
 {
  "latijn": "quidem ... sed ",
  "nederlands": "wel(iswaar) ... maar"
 },
 {
  "latijn": "tunc ",
  "nederlands": "toen "
 },
 {
  "latijn": "cedere ",
  "nederlands": "1 (aan de kant) gaan 2 toegeven"
 },
 {
  "latijn": "ducere ",
  "nederlands": "leiden "
 },
 {
  "latijn": "parare ",
  "nederlands": "klaarmaken"
 },
 {
  "latijn": "regere ",
  "nederlands": "besturen "
 },
 {
  "latijn": "tangere ",
  "nederlands": "aanraken"
 },
 {
  "latijn": "cecidi ",
  "nederlands": "pf van cadere"
 },
 {
  "latijn": "constiti ",
  "nederlands": "pf van consistere"
 },
 {
  "latijn": "dixi ",
  "nederlands": "pf van dicere"
 },
 {
  "latijn": "duxi ",
  "nederlands": "pf van ducere"
 },
 {
  "latijn": "feci ",
  "nederlands": "pf van facere"
 },
 {
  "latijn": "fui ",
  "nederlands": "pf van esse"
 },
 {
  "latijn": "incepi ",
  "nederlands": "pf van incipere"
 },
 {
  "latijn": "potui ",
  "nederlands": "pf van posse"
 },
 {
  "latijn": "respondi ",
  "nederlands": "pf van respondēre"
 },
 {
  "latijn": "rexi ",
  "nederlands": "pf van regere"
 },
 {
  "latijn": "risi ",
  "nederlands": "pf van ridēre"
 },
 {
  "latijn": "tetigi ",
  "nederlands": "pf van tangere"
 },
 {
  "latijn": "veni ",
  "nederlands": "pf van venire"
 },
 {
  "latijn": "vici ",
  "nederlands": "pf van vincere"
 },
 {
  "latijn": "certamen ",
  "nederlands": " certamina "
 },
 {
  "latijn": "iniura ",
  "nederlands": "onrecht"
 },
 {
  "latijn": "heri ",
  "nederlands": "gisteren"
 },
 {
  "latijn": "postquam + pf ",
  "nederlands": "nadat"
 },
 {
  "latijn": "saepe ",
  "nederlands": "vaak"
 },
 {
  "latijn": "satis ",
  "nederlands": "genoeg"
 },
 {
  "latijn": "capere ",
  "nederlands": " capio "
 },
 {
  "latijn": "credere ",
  "nederlands": "geloven"
 },
 {
  "latijn": "habitare ",
  "nederlands": "(be)wonen"
 },
 {
  "latijn": "cucurri ",
  "nederlands": "pf van currere"
 },
 {
  "latijn": "dedi ",
  "nederlands": "pf van dare"
 },
 {
  "latijn": "fugi ",
  "nederlands": "pf van fugere"
 },
 {
  "latijn": "ostendi ",
  "nederlands": "pf van ostendere"
 },
 {
  "latijn": "posui ",
  "nederlands": "pf van ponere"
 },
 {
  "latijn": "sustuli ",
  "nederlands": "pf van tollere"
 },
 {
  "latijn": "vidi ",
  "nederlands": "pf van vidēre"
 },
 {
  "latijn": "vixi ",
  "nederlands": "pf van vivere"
 },
 {
  "latijn": "aedificium ",
  "nederlands": "gebouw"
 },
 {
  "latijn": "dominus ",
  "nederlands": "meester "
 },
 {
  "latijn": "domus ",
  "nederlands": "huis"
 },
 {
  "latijn": "exemplum ",
  "nederlands": "voorbeeld"
 },
 {
  "latijn": "fabula ",
  "nederlands": "verhaal"
 },
 {
  "latijn": "hospes ",
  "nederlands": " hospites "
 },
 {
  "latijn": "iter ",
  "nederlands": " itinera "
 },
 {
  "latijn": "senex ",
  "nederlands": " senes "
 },
 {
  "latijn": "sermo ",
  "nederlands": " sermones "
 },
 {
  "latijn": "apud + acc ",
  "nederlands": "bij"
 },
 {
  "latijn": "trans + acc ",
  "nederlands": "over "
 },
 {
  "latijn": "priusquam ",
  "nederlands": "voordat"
 },
 {
  "latijn": "quondam ",
  "nederlands": "eens "
 },
 {
  "latijn": "Romam ",
  "nederlands": "naar Rome"
 },
 {
  "latijn": "amittere ",
  "nederlands": "verliezen"
 },
 {
  "latijn": "amisi ",
  "nederlands": "pf van amittere"
 },
 {
  "latijn": "amor ",
  "nederlands": " amores "
 },
 {
  "latijn": "consilium ",
  "nederlands": "1 plan 2 besluit"
 },
 {
  "latijn": "liberi mv ",
  "nederlands": "kinderen"
 },
 {
  "latijn": "maritus ",
  "nederlands": "echtgenoot"
 },
 {
  "latijn": "matrona ",
  "nederlands": "matrona "
 },
 {
  "latijn": "mors ",
  "nederlands": " mortes "
 },
 {
  "latijn": "tempus ",
  "nederlands": " tempora "
 },
 {
  "latijn": "bonus ",
  "nederlands": " -a "
 },
 {
  "latijn": "carus ",
  "nederlands": " -a "
 },
 {
  "latijn": "contentus ",
  "nederlands": " -a "
 },
 {
  "latijn": "laetus ",
  "nederlands": " -a "
 },
 {
  "latijn": "longus ",
  "nederlands": " -a "
 },
 {
  "latijn": "magnus ",
  "nederlands": " -a "
 },
 {
  "latijn": "miser ",
  "nederlands": " -sera "
 },
 {
  "latijn": "multus ",
  "nederlands": " -a "
 },
 {
  "latijn": "novus ",
  "nederlands": " -a "
 },
 {
  "latijn": "parvus ",
  "nederlands": " -a "
 },
 {
  "latijn": "pulcher ",
  "nederlands": " -chra "
 },
 {
  "latijn": "Romanus (-a ",
  "nederlands": " -um) "
 },
 {
  "latijn": "unus ",
  "nederlands": " -a "
 },
 {
  "latijn": "meus ",
  "nederlands": " -a "
 },
 {
  "latijn": "tuus ",
  "nederlands": " -a "
 },
 {
  "latijn": "suus ",
  "nederlands": " -a "
 },
 {
  "latijn": "noster ",
  "nederlands": " -stra "
 },
 {
  "latijn": "vester ",
  "nederlands": " -stra "
 },
 {
  "latijn": "adesse ",
  "nederlands": "aanwezig zijn (bij)"
 },
 {
  "latijn": "desinere ",
  "nederlands": "ophouden"
 },
 {
  "latijn": "invitare ",
  "nederlands": "uitnodigen"
 },
 {
  "latijn": "accessi ",
  "nederlands": "pf van accedere"
 },
 {
  "latijn": "protexi ",
  "nederlands": "pf van protegere"
 },
 {
  "latijn": "tradidi ",
  "nederlands": "pf van tradere"
 },
 {
  "latijn": "cena ",
  "nederlands": "maaltijd"
 },
 {
  "latijn": "familia ",
  "nederlands": "1 huishouden 2 familie"
 },
 {
  "latijn": "gaudium ",
  "nederlands": "vreugde"
 },
 {
  "latijn": "parentes ",
  "nederlands": "ouders"
 },
 {
  "latijn": "vox ",
  "nederlands": " voces "
 },
 {
  "latijn": "brevis ",
  "nederlands": " -e "
 },
 {
  "latijn": "communis ",
  "nederlands": " -e "
 },
 {
  "latijn": "dulcis ",
  "nederlands": " -e "
 },
 {
  "latijn": "fortis ",
  "nederlands": " -e "
 },
 {
  "latijn": "illustris ",
  "nederlands": " -e "
 },
 {
  "latijn": "ingens ",
  "nederlands": " ingent- "
 },
 {
  "latijn": "omnes mv m\/v ",
  "nederlands": "1 bnw alle 2 znw allen"
 },
 {
  "latijn": "omnia mv o ",
  "nederlands": "1 bnw alle 2 znw alles"
 },
 {
  "latijn": "omnis ",
  "nederlands": " -e ev "
 },
 {
  "latijn": "optimus ",
  "nederlands": " -a "
 },
 {
  "latijn": "similis ",
  "nederlands": " -e "
 },
 {
  "latijn": "ergo ",
  "nederlands": "dus "
 },
 {
  "latijn": "non iam ",
  "nederlands": "niet meer"
 },
 {
  "latijn": "postea ",
  "nederlands": "later"
 },
 {
  "latijn": "accendere ",
  "nederlands": "aansteken "
 },
 {
  "latijn": "apparēre ",
  "nederlands": "verschijnen"
 },
 {
  "latijn": "carēre + abl ",
  "nederlands": "missen"
 },
 {
  "latijn": "exire ",
  "nederlands": "naar buiten gaan"
 },
 {
  "latijn": "invenire ",
  "nederlands": "vinden"
 },
 {
  "latijn": "quaerere ",
  "nederlands": "1 zoeken 2 vragen"
 },
 {
  "latijn": "accendi ",
  "nederlands": "pf van accendere"
 },
 {
  "latijn": "exii ",
  "nederlands": "pf van exire"
 },
 {
  "latijn": "ii ",
  "nederlands": "pf van ire"
 },
 {
  "latijn": "inveni ",
  "nederlands": "pf van invenire"
 },
 {
  "latijn": "processi ",
  "nederlands": "pf van procedere"
 },
 {
  "latijn": "funus ",
  "nederlands": " funera "
 },
 {
  "latijn": "vestis ",
  "nederlands": " vestes "
 },
 {
  "latijn": "umbra ",
  "nederlands": "1 schaduw 2 schim (van een overledene)"
 },
 {
  "latijn": "acer ",
  "nederlands": " acris "
 },
 {
  "latijn": "celer ",
  "nederlands": " celeris "
 },
 {
  "latijn": "felix ",
  "nederlands": " felic- "
 },
 {
  "latijn": "iratus ",
  "nederlands": " -a "
 },
 {
  "latijn": "lenis ",
  "nederlands": " -e "
 },
 {
  "latijn": "malus ",
  "nederlands": " -a "
 },
 {
  "latijn": "nudus ",
  "nederlands": " -a "
 },
 {
  "latijn": "secundus ",
  "nederlands": " -a "
 },
 {
  "latijn": "timidus ",
  "nederlands": " -a "
 },
 {
  "latijn": "tristis ",
  "nederlands": " -e "
 },
 {
  "latijn": "bene bijw ",
  "nederlands": "goed"
 },
 {
  "latijn": "etiam ",
  "nederlands": "zelfs"
 },
 {
  "latijn": "magnopere ",
  "nederlands": "1 zeer 2 erg"
 },
 {
  "latijn": "paulum ",
  "nederlands": "een beetje"
 },
 {
  "latijn": "agere ",
  "nederlands": "1 leiden "
 },
 {
  "latijn": "legere ",
  "nederlands": "lezen"
 },
 {
  "latijn": "mittere ",
  "nederlands": "sturen"
 },
 {
  "latijn": "putare ",
  "nederlands": "1 menen 2 vinden "
 },
 {
  "latijn": "credidi ",
  "nederlands": "pf van credere"
 },
 {
  "latijn": "emi ",
  "nederlands": "pf van emere"
 },
 {
  "latijn": "iussi ",
  "nederlands": "pf van iubēre"
 },
 {
  "latijn": "littera ",
  "nederlands": "letter"
 },
 {
  "latijn": "onus ",
  "nederlands": " onera "
 },
 {
  "latijn": "pretium ",
  "nederlands": "prijs"
 },
 {
  "latijn": "ceteri ",
  "nederlands": " -ae "
 },
 {
  "latijn": "difficilis ",
  "nederlands": " -e "
 },
 {
  "latijn": "facilis ",
  "nederlands": " -e "
 },
 {
  "latijn": "fidus ",
  "nederlands": " -a "
 },
 {
  "latijn": "gravis ",
  "nederlands": " -e "
 },
 {
  "latijn": "humilis ",
  "nederlands": "1 laag 2 nederig"
 },
 {
  "latijn": "maior ",
  "nederlands": "groter"
 },
 {
  "latijn": "melior ",
  "nederlands": "beter"
 },
 {
  "latijn": "minimus ",
  "nederlands": " -a "
 },
 {
  "latijn": "peior ",
  "nederlands": "slechter"
 },
 {
  "latijn": "magis ",
  "nederlands": "meer"
 },
 {
  "latijn": "minime ",
  "nederlands": "1 (aller)minst 2 helemaal niet"
 },
 {
  "latijn": "multo bijw ",
  "nederlands": "veel"
 },
 {
  "latijn": "quam ",
  "nederlands": "1 com ... dan 2 sup zo ... mogelijk"
 },
 {
  "latijn": "alius ",
  "nederlands": " -a "
 },
 {
  "latijn": "fugere ",
  "nederlands": " fugio "
 },
 {
  "latijn": "movēre ",
  "nederlands": "bewegen"
 },
 {
  "latijn": "parcere + dat ",
  "nederlands": "sparen"
 },
 {
  "latijn": "tribuere ",
  "nederlands": "toekennen"
 },
 {
  "latijn": "cepi ",
  "nederlands": "pf van capere"
 },
 {
  "latijn": "peperci ",
  "nederlands": "pf van parcere"
 },
 {
  "latijn": "cibus ",
  "nederlands": "voedsel"
 },
 {
  "latijn": "clamor ",
  "nederlands": " clamores "
 },
 {
  "latijn": "libertas ",
  "nederlands": " libertates "
 },
 {
  "latijn": "lingua ",
  "nederlands": "1 tong 2 taal"
 },
 {
  "latijn": "silva ",
  "nederlands": "bos"
 },
 {
  "latijn": "vulnus ",
  "nederlands": " vulnera "
 },
 {
  "latijn": "altus ",
  "nederlands": " -a "
 },
 {
  "latijn": "audax ",
  "nederlands": " audac- "
 },
 {
  "latijn": "crudelis ",
  "nederlands": " -e "
 },
 {
  "latijn": "ferox ",
  "nederlands": " feroc- "
 },
 {
  "latijn": "lentus ",
  "nederlands": " -a "
 },
 {
  "latijn": "maximus ",
  "nederlands": " -a "
 },
 {
  "latijn": "parum ",
  "nederlands": "niet genoeg"
 },
 {
  "latijn": "que ",
  "nederlands": "en"
 },
 {
  "latijn": "quia ",
  "nederlands": "omdat"
 },
 {
  "latijn": "se acc ",
  "nederlands": "zich(zelf)"
 },
 {
  "latijn": "audēre ",
  "nederlands": "durven"
 },
 {
  "latijn": "consituere ",
  "nederlands": "besluiten"
 },
 {
  "latijn": "crescere ",
  "nederlands": "groeien"
 },
 {
  "latijn": "relinquere ",
  "nederlands": "1 verlaten 2 achterlaten"
 },
 {
  "latijn": "redire ",
  "nederlands": "teruggaan"
 },
 {
  "latijn": "constitui ",
  "nederlands": "pf van constituere"
 },
 {
  "latijn": "misi ",
  "nederlands": "pf van mittere"
 },
 {
  "latijn": "reliqui ",
  "nederlands": "pf van relinquere"
 },
 {
  "latijn": "ager ",
  "nederlands": " mv agri "
 },
 {
  "latijn": "consul ",
  "nederlands": " consules "
 },
 {
  "latijn": "fuga ",
  "nederlands": "vlucht"
 },
 {
  "latijn": "legio ",
  "nederlands": " legiones v "
 },
 {
  "latijn": "litus ",
  "nederlands": " litora "
 },
 {
  "latijn": "mille ",
  "nederlands": " milia "
 },
 {
  "latijn": "numerus ",
  "nederlands": "aantal"
 },
 {
  "latijn": "minor ",
  "nederlands": "kleiner"
 },
 {
  "latijn": "minus ",
  "nederlands": "minder"
 },
 {
  "latijn": "pauci ",
  "nederlands": " -ae "
 },
 {
  "latijn": "plurimi ",
  "nederlands": " -ae "
 },
 {
  "latijn": "plus ",
  "nederlands": " plures com "
 },
 {
  "latijn": "cotidie ",
  "nederlands": "dagelijks"
 },
 {
  "latijn": "maxime ",
  "nederlands": "1 het meest 2 vooral"
 },
 {
  "latijn": "neque ",
  "nederlands": "1 en niet "
 },
 {
  "latijn": "Romae ",
  "nederlands": "te Rome "
 },
 {
  "latijn": "arcessere ",
  "nederlands": "laten komen"
 },
 {
  "latijn": "coniungere ",
  "nederlands": "verbinden"
 },
 {
  "latijn": "decet + acc ",
  "nederlands": "(het) past bij"
 },
 {
  "latijn": "laudare ",
  "nederlands": "prijzen"
 },
 {
  "latijn": "noscere ",
  "nederlands": "1 te weten komen 2 leren kennen"
 },
 {
  "latijn": "novisse ",
  "nederlands": "1 weten 2 kennen"
 },
 {
  "latijn": "arcessivi ",
  "nederlands": "pf van arcessere"
 },
 {
  "latijn": "novi ",
  "nederlands": "pf van noscere"
 },
 {
  "latijn": "dolus ",
  "nederlands": "list"
 },
 {
  "latijn": "opus ",
  "nederlands": " opera "
 },
 {
  "latijn": "sentientia ",
  "nederlands": "1 mening 2 uitspraak "
 },
 {
  "latijn": "virtus ",
  "nederlands": " virtutes "
 },
 {
  "latijn": "clarus ",
  "nederlands": " -a "
 },
 {
  "latijn": "stultus ",
  "nederlands": " -a "
 },
 {
  "latijn": "-ne ",
  "nederlands": "vraagwoord (niet vertalen)"
 },
 {
  "latijn": "at ",
  "nederlands": "maar"
 },
 {
  "latijn": "quomodo ",
  "nederlands": "hoe"
 },
 {
  "latijn": "utrum....an ",
  "nederlands": "(of)...of"
 },
 {
  "latijn": "vero ",
  "nederlands": "1 inderdaad 2 echter"
 },
 {
  "latijn": "ipse ",
  "nederlands": " "
 },
 {
  "latijn": "aspicere ",
  "nederlands": " aspicio "
 },
 {
  "latijn": "conspicere ",
  "nederlands": " conspicio "
 },
 {
  "latijn": "deficere ",
  "nederlands": " dificio "
 },
 {
  "latijn": "intellegere ",
  "nederlands": "begrijpen"
 },
 {
  "latijn": "iuvat (me) ",
  "nederlands": "het doet (me) plezier"
 },
 {
  "latijn": "laborare ",
  "nederlands": "hard werken"
 },
 {
  "latijn": "possidēre ",
  "nederlands": "bezitten"
 },
 {
  "latijn": "sumere ",
  "nederlands": "nemen"
 },
 {
  "latijn": "aspexi ",
  "nederlands": "pf van aspicere"
 },
 {
  "latijn": "conspexi ",
  "nederlands": "pf van conspicere"
 },
 {
  "latijn": "sumpsi ",
  "nederlands": "pf van sumere"
 },
 {
  "latijn": "verti ",
  "nederlands": "pf van vertere"
 },
 {
  "latijn": "forma ",
  "nederlands": "gestalte "
 },
 {
  "latijn": "mensa ",
  "nederlands": "tafel"
 },
 {
  "latijn": "misericordia ",
  "nederlands": "medelijden"
 },
 {
  "latijn": "serva ",
  "nederlands": "slavin"
 },
 {
  "latijn": "cuncti ",
  "nederlands": " -ae "
 },
 {
  "latijn": "dives ",
  "nederlands": " divit- "
 },
 {
  "latijn": "cum voegwoord ",
  "nederlands": "wanneer "
 },
 {
  "latijn": "libenter ",
  "nederlands": "graag"
 },
 {
  "latijn": "nisi ",
  "nederlands": "als niet"
 },
 {
  "latijn": "praeterea ",
  "nederlands": "bovendien"
 },
 {
  "latijn": "quamquam ",
  "nederlands": "hoewel"
 },
 {
  "latijn": "ut ",
  "nederlands": "1 zoals 2 +pf zodra"
 },
 {
  "latijn": "condere ",
  "nederlands": "1 stichten 2 verbergen"
 },
 {
  "latijn": "dubitare ",
  "nederlands": "aarzelen "
 },
 {
  "latijn": "inquit ",
  "nederlands": "1 hij\/zij zegt 2 hij\/zij zei"
 },
 {
  "latijn": "mutare ",
  "nederlands": "veranderen"
 },
 {
  "latijn": "punire ",
  "nederlands": "straffen"
 },
 {
  "latijn": "repetere ",
  "nederlands": "herhalen"
 },
 {
  "latijn": "sentire ",
  "nederlands": "1 merken "
 },
 {
  "latijn": "spernere ",
  "nederlands": "afwijzen"
 },
 {
  "latijn": "condidi ",
  "nederlands": "pf van condere"
 },
 {
  "latijn": "cupivi ",
  "nederlands": "pf van cupere"
 },
 {
  "latijn": "movi ",
  "nederlands": "pf van movēre"
 },
 {
  "latijn": "repetivi ",
  "nederlands": "pf van repetere"
 },
 {
  "latijn": "sensi ",
  "nederlands": "pf van sentire"
 },
 {
  "latijn": "sprevi ",
  "nederlands": "pf van spernere"
 },
 {
  "latijn": "dolor ",
  "nederlands": " dolores "
 },
 {
  "latijn": "imago ",
  "nederlands": " imagines "
 },
 {
  "latijn": "iuvenis ",
  "nederlands": " iuvenes "
 },
 {
  "latijn": "superbia ",
  "nederlands": "trots "
 },
 {
  "latijn": "mollis ",
  "nederlands": " -e "
 },
 {
  "latijn": "ultimus ",
  "nederlands": " -a "
 },
 {
  "latijn": "ob + acc ",
  "nederlands": "wegens"
 },
 {
  "latijn": "donec ",
  "nederlands": "totdat"
 },
 {
  "latijn": "nusquam ",
  "nederlands": "nergens"
 },
 {
  "latijn": "ultro ",
  "nederlands": "uit zichzelf"
 },
 {
  "latijn": "nullus ",
  "nederlands": " -a "
 },
 {
  "latijn": "qui ",
  "nederlands": " quae "
 },
 {
  "latijn": "accidere ",
  "nederlands": "gebeuren"
 },
 {
  "latijn": "canere ",
  "nederlands": "zingen"
 },
 {
  "latijn": "colligere ",
  "nederlands": "verzamelen"
 },
 {
  "latijn": "fundere ",
  "nederlands": "gieten "
 },
 {
  "latijn": "laedere ",
  "nederlands": "beledigen "
 },
 {
  "latijn": "lavare ",
  "nederlands": "wassen"
 },
 {
  "latijn": "perficere ",
  "nederlands": " perficio "
 },
 {
  "latijn": "addidi ",
  "nederlands": "pf van addere"
 },
 {
  "latijn": "intellexi ",
  "nederlands": "pf van intellegere"
 },
 {
  "latijn": "laesi ",
  "nederlands": "pf van laedere"
 },
 {
  "latijn": "scii\/scivi ",
  "nederlands": "pf van scire"
 },
 {
  "latijn": "vendidi ",
  "nederlands": "pf van vendere"
 },
 {
  "latijn": "carmen ",
  "nederlands": " carmina "
 },
 {
  "latijn": "labor ",
  "nederlands": " labores "
 },
 {
  "latijn": "certus ",
  "nederlands": " -a "
 },
 {
  "latijn": "perpetuus ",
  "nederlands": " -a "
 },
 {
  "latijn": "primus ",
  "nederlands": " -a "
 },
 {
  "latijn": "neque ... neque ",
  "nederlands": "niet ... en ook niet"
 },
 {
  "latijn": "olim ",
  "nederlands": "vroeger "
 },
 {
  "latijn": "plenus (+ gen) ",
  "nederlands": "vol (met)"
 },
 {
  "latijn": "alius ... alius ",
  "nederlands": "de een ... de ander"
 },
 {
  "latijn": "se ",
  "nederlands": "1 zich 2 aci dat hij "
 },
 {
  "latijn": "censēre ",
  "nederlands": "van mening zijn"
 },
 {
  "latijn": "committere ",
  "nederlands": "toevertrouwen"
 },
 {
  "latijn": "egēre + abl ",
  "nederlands": "nodig hebben"
 },
 {
  "latijn": "meminisse pf ",
  "nederlands": "1 + aci zich herinneren dat 2 + gen zich (iets) herinneren"
 },
 {
  "latijn": "pervenire ",
  "nederlands": "aankomen"
 },
 {
  "latijn": "praeterire ",
  "nederlands": "voorbijgaan"
 },
 {
  "latijn": "premere ",
  "nederlands": "drukken (op)"
 },
 {
  "latijn": "commisi ",
  "nederlands": "pf van committere"
 },
 {
  "latijn": "egi ",
  "nederlands": "pf van agere"
 },
 {
  "latijn": "perveni ",
  "nederlands": "pf van pervenire"
 },
 {
  "latijn": "praeterii ",
  "nederlands": "pf van praeterire"
 },
 {
  "latijn": "finis ",
  "nederlands": " fines "
 },
 {
  "latijn": "frumentum ",
  "nederlands": "graan"
 },
 {
  "latijn": "iuventus ",
  "nederlands": " gen -tutis "
 },
 {
  "latijn": "officium ",
  "nederlands": "plicht "
 },
 {
  "latijn": "orbis ",
  "nederlands": " orbes "
 },
 {
  "latijn": "villa ",
  "nederlands": "landgoed"
 },
 {
  "latijn": "ignotus ",
  "nederlands": " -a "
 },
 {
  "latijn": "amplus ",
  "nederlands": " -a "
 },
 {
  "latijn": "procul ",
  "nederlands": "ver "
 },
 {
  "latijn": "cogere ",
  "nederlands": "1 bijeenbrengen 2 dwingen"
 },
 {
  "latijn": "delēre ",
  "nederlands": "vernielen"
 },
 {
  "latijn": "necesse est ",
  "nederlands": "het is nodig"
 },
 {
  "latijn": "nescire ",
  "nederlands": "niet weten"
 },
 {
  "latijn": "rapere ",
  "nederlands": " rapio "
 },
 {
  "latijn": "ruere ",
  "nederlands": "1 zich haasten 2 neerstorten "
 },
 {
  "latijn": "tremere ",
  "nederlands": "trillen "
 },
 {
  "latijn": "accidi ",
  "nederlands": "pf van accidere"
 },
 {
  "latijn": "coegi ",
  "nederlands": "pf van cogere"
 },
 {
  "latijn": "perfeci ",
  "nederlands": "pf van perficere"
 },
 {
  "latijn": "rapui ",
  "nederlands": "pf van rapere"
 },
 {
  "latijn": "rui ",
  "nederlands": "pf van ruere"
 },
 {
  "latijn": "Iovis ",
  "nederlands": "gen van Iupiter"
 },
 {
  "latijn": "regio ",
  "nederlands": " regiones "
 },
 {
  "latijn": "anxius ",
  "nederlands": " -a "
 },
 {
  "latijn": "frequens ",
  "nederlands": " frequent- "
 },
 {
  "latijn": "nonnulli ",
  "nederlands": " -ae "
 },
 {
  "latijn": "vehemens ",
  "nederlands": " vehement- "
 },
 {
  "latijn": "vetus ",
  "nederlands": " veter- "
 },
 {
  "latijn": "post ",
  "nederlands": "1 + acc achter "
 },
 {
  "latijn": "unde ",
  "nederlands": "waarvandaan"
 },
 {
  "latijn": "quisque ",
  "nederlands": "iedereen"
 },
 {
  "latijn": "abire ",
  "nederlands": "weggaan"
 },
 {
  "latijn": "colere ",
  "nederlands": "1 verzorgen 2 bebouwen 3 vereren"
 },
 {
  "latijn": "discere (a\/ab +abl) ",
  "nederlands": "leren (van)"
 },
 {
  "latijn": "expugnare ",
  "nederlands": "veroveren"
 },
 {
  "latijn": "frangere ",
  "nederlands": "breken"
 },
 {
  "latijn": "odisse pf ",
  "nederlands": "haten"
 },
 {
  "latijn": "perdere ",
  "nederlands": "vernietigen"
 },
 {
  "latijn": "permittere ",
  "nederlands": "toelaten "
 },
 {
  "latijn": "iurare (per + acc) ",
  "nederlands": "zweren (bij)"
 },
 {
  "latijn": "abii ",
  "nederlands": "pf van abire"
 },
 {
  "latijn": "collegi ",
  "nederlands": "pf van colligere"
 },
 {
  "latijn": "didici ",
  "nederlands": "pf van discere"
 },
 {
  "latijn": "fregi ",
  "nederlands": "pf van frangere"
 },
 {
  "latijn": "animus ",
  "nederlands": "geest "
 },
 {
  "latijn": "ara ",
  "nederlands": "altaar"
 },
 {
  "latijn": "ars ",
  "nederlands": " artes "
 },
 {
  "latijn": "copiae mv ",
  "nederlands": "troepen"
 },
 {
  "latijn": "divitiae mv ",
  "nederlands": "rijkdom"
 },
 {
  "latijn": "mare ",
  "nederlands": " maria "
 },
 {
  "latijn": "mari ",
  "nederlands": "abl van mare"
 },
 {
  "latijn": "patria ",
  "nederlands": "vaderland"
 },
 {
  "latijn": "senator ",
  "nederlands": " senatores "
 },
 {
  "latijn": "militaris ",
  "nederlands": " -e "
 },
 {
  "latijn": "umquam ",
  "nederlands": "ooit"
 },
 {
  "latijn": "accipere ",
  "nederlands": " accipio "
 },
 {
  "latijn": "aperire ",
  "nederlands": "openen"
 },
 {
  "latijn": "convenire ",
  "nederlands": "bijeenkomen"
 },
 {
  "latijn": "defendere ",
  "nederlands": "verdedigen"
 },
 {
  "latijn": "dolēre ",
  "nederlands": "treuren "
 },
 {
  "latijn": "habēre ",
  "nederlands": "1 hebben 2 houden"
 },
 {
  "latijn": "intendere ",
  "nederlands": "richten"
 },
 {
  "latijn": "accepi ",
  "nederlands": "pf van accipere"
 },
 {
  "latijn": "conveni ",
  "nederlands": "pf van convenire"
 },
 {
  "latijn": "castra mv ",
  "nederlands": "legerkamp"
 },
 {
  "latijn": "clades ",
  "nederlands": " clades "
 },
 {
  "latijn": "curia ",
  "nederlands": "senaatsgebouw"
 },
 {
  "latijn": "moenia mv ",
  "nederlands": "(stads)muren"
 },
 {
  "latijn": "multitudo ",
  "nederlands": " -tudines "
 },
 {
  "latijn": "nuntius ",
  "nederlands": "1 bode2 bericht"
 },
 {
  "latijn": "porta ",
  "nederlands": "poort"
 },
 {
  "latijn": "mortuus (-a ",
  "nederlands": " -um) "
 },
 {
  "latijn": "privatus ",
  "nederlands": " -a "
 },
 {
  "latijn": "publicus ",
  "nederlands": " -a "
 },
 {
  "latijn": "tutus ",
  "nederlands": "veilig"
 },
 {
  "latijn": "cras ",
  "nederlands": "morgen"
 },
 {
  "latijn": "paulatim ",
  "nederlands": "langzamerhand"
 },
 {
  "latijn": "postremo ",
  "nederlands": "tenslotte"
 },
 {
  "latijn": "quantus ",
  "nederlands": " -a "
 },
 {
  "latijn": "instruere ",
  "nederlands": "opstellen"
 },
 {
  "latijn": "interficere ",
  "nederlands": " -ficio "
 },
 {
  "latijn": "malle inf.prs ",
  "nederlands": "liever willen"
 },
 {
  "latijn": "merēre ",
  "nederlands": "verdienen"
 },
 {
  "latijn": "obsidēre ",
  "nederlands": "belegeren"
 },
 {
  "latijn": "offerre ",
  "nederlands": "aanbieden"
 },
 {
  "latijn": "parēre ",
  "nederlands": "gehoorzamen"
 },
 {
  "latijn": "referre ",
  "nederlands": "1 terugbrengen 2 (be)halen 3 rapporteren"
 },
 {
  "latijn": "revocare ",
  "nederlands": "terugroepen"
 },
 {
  "latijn": "velle inf.prs ",
  "nederlands": "willen"
 },
 {
  "latijn": "vis van velle ",
  "nederlands": "jij wilt"
 },
 {
  "latijn": "instructus ",
  "nederlands": "ppp van instruere"
 },
 {
  "latijn": "interfectus ",
  "nederlands": "ppp van interficere"
 },
 {
  "latijn": "relatus ",
  "nederlands": "ppp van referre"
 },
 {
  "latijn": "relictus ",
  "nederlands": "ppp van relinquere"
 },
 {
  "latijn": "victus ",
  "nederlands": "ppp van vincere"
 },
 {
  "latijn": "campus ",
  "nederlands": "veld"
 },
 {
  "latijn": "laus ",
  "nederlands": " laudes "
 },
 {
  "latijn": "pax ",
  "nederlands": " gen pacis "
 },
 {
  "latijn": "proelium ",
  "nederlands": "gevecht "
 },
 {
  "latijn": "spatium ",
  "nederlands": "1 afstand 2 ruimte"
 },
 {
  "latijn": "latus ",
  "nederlands": " -a "
 },
 {
  "latijn": "totus ",
  "nederlands": " -a "
 },
 {
  "latijn": "propter + acc ",
  "nederlands": "wegens"
 },
 {
  "latijn": "paene ",
  "nederlands": "bijna"
 },
 {
  "latijn": "afferre ",
  "nederlands": "(mee)brengen"
 },
 {
  "latijn": "ascendere ",
  "nederlands": "bestijgen "
 },
 {
  "latijn": "deicere ",
  "nederlands": " deicio "
 },
 {
  "latijn": "ferre ",
  "nederlands": "1 dragen "
 },
 {
  "latijn": "petere ",
  "nederlands": "1 zoeken "
 },
 {
  "latijn": "promittere ",
  "nederlands": "beloven"
 },
 {
  "latijn": "ascendi ",
  "nederlands": "pf van ascendere"
 },
 {
  "latijn": "attuli ",
  "nederlands": "pf van afferre"
 },
 {
  "latijn": "deieci ",
  "nederlands": "pf van deicere"
 },
 {
  "latijn": "obtuli ",
  "nederlands": "pf van offerre"
 },
 {
  "latijn": "pressi ",
  "nederlands": "pf van premere"
 },
 {
  "latijn": "promisi ",
  "nederlands": "pf van promittere"
 },
 {
  "latijn": "tuli ",
  "nederlands": "pf van ferre"
 },
 {
  "latijn": "deiectus ",
  "nederlands": "ppp van deicere"
 },
 {
  "latijn": "mercator ",
  "nederlands": " mercatores "
 },
 {
  "latijn": "magnitudo ",
  "nederlands": " -dinis "
 },
 {
  "latijn": "regnum ",
  "nederlands": "1 koningschap 2 koninkrijk"
 },
 {
  "latijn": "mirus ",
  "nederlands": " -a "
 },
 {
  "latijn": "nisi ",
  "nederlands": "1 als niet 2 behalve"
 },
 {
  "latijn": "par ",
  "nederlands": " par- "
 },
 {
  "latijn": "atque ",
  "nederlands": "en"
 },
 {
  "latijn": "afficere ",
  "nederlands": " afficio "
 },
 {
  "latijn": "constat ",
  "nederlands": "het staat vast"
 },
 {
  "latijn": "invenire ",
  "nederlands": "1 vinden 2 uitvinden"
 },
 {
  "latijn": "nocēre + dat ",
  "nederlands": "schaden "
 },
 {
  "latijn": "nolle inf.prs ",
  "nederlands": "niet willen"
 },
 {
  "latijn": "sperare ",
  "nederlands": "hopen"
 },
 {
  "latijn": "interfeci ",
  "nederlands": "pf van interficere"
 },
 {
  "latijn": "affectus ",
  "nederlands": "ppp van afficere"
 },
 {
  "latijn": "collectus ",
  "nederlands": "ppp van colligere"
 },
 {
  "latijn": "doctus ",
  "nederlands": "ppp van docēre"
 },
 {
  "latijn": "ductus ",
  "nederlands": "ppp van ducere"
 },
 {
  "latijn": "factus ",
  "nederlands": "ppp van facere"
 },
 {
  "latijn": "inventus ",
  "nederlands": "ppp van invenire"
 },
 {
  "latijn": "futurum ",
  "nederlands": "pfa van esse"
 },
 {
  "latijn": "aetas ",
  "nederlands": " aetates "
 },
 {
  "latijn": "ira ",
  "nederlands": "woede"
 },
 {
  "latijn": "lumen ",
  "nederlands": " lumina "
 },
 {
  "latijn": "mens ",
  "nederlands": " mentes "
 },
 {
  "latijn": "mundus ",
  "nederlands": "wereld"
 },
 {
  "latijn": "pondus ",
  "nederlands": " pondera "
 },
 {
  "latijn": "scientia ",
  "nederlands": "kennis "
 },
 {
  "latijn": "summus ",
  "nederlands": " -a "
 },
 {
  "latijn": "tener ",
  "nederlands": " -era "
 },
 {
  "latijn": "utilis ",
  "nederlands": " -e "
 },
 {
  "latijn": "nimium + gen ",
  "nederlands": "teveel"
 },
 {
  "latijn": "confirmare ",
  "nederlands": "bevestigen"
 },
 {
  "latijn": "contemnere ",
  "nederlands": "minachten"
 },
 {
  "latijn": "desiderare ",
  "nederlands": "verlangen (naar)"
 },
 {
  "latijn": "praeferre ",
  "nederlands": "liever hebben "
 },
 {
  "latijn": "bibi ",
  "nederlands": "pf van bibere"
 },
 {
  "latijn": "contempsi ",
  "nederlands": "pf van contemnere"
 },
 {
  "latijn": "possedi ",
  "nederlands": "pf van possidēre"
 },
 {
  "latijn": "quaesivi ",
  "nederlands": "pf van quaerere"
 },
 {
  "latijn": "accensus ",
  "nederlands": "ppp van accendere"
 },
 {
  "latijn": "dictum ",
  "nederlands": "ppp van dicere"
 },
 {
  "latijn": "canis ",
  "nederlands": " canes "
 },
 {
  "latijn": "gloria ",
  "nederlands": "roem"
 },
 {
  "latijn": "honor ",
  "nederlands": " honores "
 },
 {
  "latijn": "lux ",
  "nederlands": " luces "
 },
 {
  "latijn": "potestas ",
  "nederlands": " -ates "
 },
 {
  "latijn": "studium ",
  "nederlands": "1 ijver "
 },
 {
  "latijn": "falsus ",
  "nederlands": " -a "
 },
 {
  "latijn": "pauper ",
  "nederlands": " pauper- "
 },
 {
  "latijn": "verus ",
  "nederlands": " -a "
 },
 {
  "latijn": "ne ... quidem ",
  "nederlands": "zelfs niet"
 },
 {
  "latijn": "quare ",
  "nederlands": "waarom"
 },
 {
  "latijn": "quasi ",
  "nederlands": "1 als(of) 2 als het ware"
 },
 {
  "latijn": "certare ",
  "nederlands": "strijden"
 },
 {
  "latijn": "decernere ",
  "nederlands": "beslissen"
 },
 {
  "latijn": "haerēre ",
  "nederlands": "blijven steken"
 },
 {
  "latijn": "iacere ",
  "nederlands": " iacio "
 },
 {
  "latijn": "impedire ",
  "nederlands": "belemmeren "
 },
 {
  "latijn": "instare + dat ",
  "nederlands": "achterna zitten"
 },
 {
  "latijn": "invadere ",
  "nederlands": "binnendringen "
 },
 {
  "latijn": "recipere ",
  "nederlands": " recipio "
 },
 {
  "latijn": "trahere ",
  "nederlands": "trekken"
 },
 {
  "latijn": "urgēre ",
  "nederlands": "in het nauw brengen"
 },
 {
  "latijn": "acies 5 ",
  "nederlands": "slaglinie"
 },
 {
  "latijn": "cornu 4 ",
  "nederlands": "hoorn"
 },
 {
  "latijn": "dies 5 m ",
  "nederlands": "dag"
 },
 {
  "latijn": "exercitus 4 ",
  "nederlands": "leger"
 },
 {
  "latijn": "gradus 4 ",
  "nederlands": "stap "
 },
 {
  "latijn": "impetus 4 ",
  "nederlands": "1 het aanstormen 2 aanval"
 },
 {
  "latijn": "manus 4 v ",
  "nederlands": "hand"
 },
 {
  "latijn": "metus 4 ",
  "nederlands": "vrees "
 },
 {
  "latijn": "res 5 ",
  "nederlands": "zaak "
 },
 {
  "latijn": "strepitus 4 ",
  "nederlands": "lawaai"
 },
 {
  "latijn": "tumultus 4 ",
  "nederlands": "opschudding "
 },
 {
  "latijn": "dexter ",
  "nederlands": " -tra "
 },
 {
  "latijn": "incolumis ",
  "nederlands": " -e "
 },
 {
  "latijn": "universus ",
  "nederlands": " -a "
 },
 {
  "latijn": "uterque ",
  "nederlands": "elk van beiden"
 },
 {
  "latijn": "uter ",
  "nederlands": " utra "
 },
 {
  "latijn": "corrumpere ",
  "nederlands": "1 bederven 2 omkopen"
 },
 {
  "latijn": "obtinēre ",
  "nederlands": "1 in bezit krijgen 2 in bezit hebben"
 },
 {
  "latijn": "captus ",
  "nederlands": "ppp van capere"
 },
 {
  "latijn": "datum ",
  "nederlands": "ppp van dare"
 },
 {
  "latijn": "adventus 4 ",
  "nederlands": "aankomst"
 },
 {
  "latijn": "auxilium ",
  "nederlands": "1 hulp 2 mv hulptroepen"
 },
 {
  "latijn": "centurio ",
  "nederlands": " -ones "
 },
 {
  "latijn": "color ",
  "nederlands": " colores "
 },
 {
  "latijn": "gens ",
  "nederlands": " gentes "
 },
 {
  "latijn": "munus ",
  "nederlands": " munera "
 },
 {
  "latijn": "oppidum ",
  "nederlands": "(vesting)stad"
 },
 {
  "latijn": "praemium ",
  "nederlands": "beloning"
 },
 {
  "latijn": "socius ",
  "nederlands": "bondgenoot"
 },
 {
  "latijn": "species 5 ",
  "nederlands": "uiterlijk"
 },
 {
  "latijn": "vis ",
  "nederlands": " vires "
 },
 {
  "latijn": "barbarus ",
  "nederlands": " -a "
 },
 {
  "latijn": "saevus ",
  "nederlands": " -a "
 },
 {
  "latijn": "solus ",
  "nederlands": " -a "
 },
 {
  "latijn": "usque ad + acc ",
  "nederlands": "tot aan"
 },
 {
  "latijn": "bis ",
  "nederlands": "tweemaal"
 },
 {
  "latijn": "paulo ",
  "nederlands": "een beetje"
 },
 {
  "latijn": "quoniam ",
  "nederlands": "aangezien"
 },
 {
  "latijn": "tam ",
  "nederlands": "zo"
 },
 {
  "latijn": "convocare ",
  "nederlands": "bijeenroepen"
 },
 {
  "latijn": "dedere (se) ",
  "nederlands": "(zich) overgeven"
 },
 {
  "latijn": "descendere ",
  "nederlands": "afdalen"
 },
 {
  "latijn": "inire ",
  "nederlands": "1 ingaan 2 beginnen"
 },
 {
  "latijn": "patēre ",
  "nederlands": "openstaan"
 },
 {
  "latijn": "properare ",
  "nederlands": "zich haasten"
 },
 {
  "latijn": "proponere ",
  "nederlands": "1 voorleggen 2 voorstellen"
 },
 {
  "latijn": "descendi ",
  "nederlands": "pf van descendere"
 },
 {
  "latijn": "inii ",
  "nederlands": "pf van inire"
 },
 {
  "latijn": "clausus ",
  "nederlands": "ppp van claudere"
 },
 {
  "latijn": "missus ",
  "nederlands": "ppp van mittere"
 },
 {
  "latijn": "propositus ",
  "nederlands": "ppp van proponere"
 },
 {
  "latijn": "exitus 4 ",
  "nederlands": "1 uitgang 2 afloop"
 },
 {
  "latijn": "fides 5 ",
  "nederlands": "1 (woord van) trouw 2 vertrouwen"
 },
 {
  "latijn": "imperator ",
  "nederlands": " -ores "
 },
 {
  "latijn": "imperium ",
  "nederlands": "1 bevel "
 },
 {
  "latijn": "legatus ",
  "nederlands": "gezant"
 },
 {
  "latijn": "princeps ",
  "nederlands": " principes "
 },
 {
  "latijn": "spes 5 ",
  "nederlands": "hoop "
 },
 {
  "latijn": "posterus ",
  "nederlands": " -a "
 },
 {
  "latijn": "singuli ",
  "nederlands": " -ae "
 },
 {
  "latijn": "vivus ",
  "nederlands": " -a "
 },
 {
  "latijn": "intra + acc ",
  "nederlands": "binnen"
 },
 {
  "latijn": "vix ",
  "nederlands": "met moeite "
 },
 {
  "latijn": "coepi ",
  "nederlands": "pf ik ben begonnen"
 },
 {
  "latijn": "imminēre (+ dat) ",
  "nederlands": "(be)dreigen"
 },
 {
  "latijn": "metuere ",
  "nederlands": "vrezen"
 },
 {
  "latijn": "praestare ",
  "nederlands": "1 verrichten 2 se zich betonen"
 },
 {
  "latijn": "prodesse ",
  "nederlands": "voordelig zijn"
 },
 {
  "latijn": "transire ",
  "nederlands": "oversteken"
 },
 {
  "latijn": "transii ",
  "nederlands": "pf van transire"
 },
 {
  "latijn": "actus ",
  "nederlands": "ppp van agere"
 },
 {
  "latijn": "iactus ",
  "nederlands": "ppp van iacere"
 },
 {
  "latijn": "obtentus ",
  "nederlands": "ppp van obtinēre"
 },
 {
  "latijn": "civitas ",
  "nederlands": " civitates "
 },
 {
  "latijn": "clementia ",
  "nederlands": "genade "
 },
 {
  "latijn": "luxuria ",
  "nederlands": "(zucht naar) weelde"
 },
 {
  "latijn": "plebs ",
  "nederlands": " gen plebis "
 },
 {
  "latijn": "res publica ",
  "nederlands": "staat "
 },
 {
  "latijn": "senatus 4 ",
  "nederlands": "senaat"
 },
 {
  "latijn": "virgo ",
  "nederlands": " virgines "
 },
 {
  "latijn": "civilis ",
  "nederlands": " -e "
 },
 {
  "latijn": "inimicus ",
  "nederlands": " (-a "
 },
 {
  "latijn": "inanis ",
  "nederlands": " -e "
 },
 {
  "latijn": "adire (ad) + acc ",
  "nederlands": "gaan naar"
 },
 {
  "latijn": "efferre ",
  "nederlands": "naar buiten dragen"
 },
 {
  "latijn": "includere ",
  "nederlands": "insluiten"
 },
 {
  "latijn": "iuvare ",
  "nederlands": "helpen"
 },
 {
  "latijn": "liberare (a + abl) ",
  "nederlands": "bevrijden (van)"
 },
 {
  "latijn": "regnare ",
  "nederlands": "koning zijn"
 },
 {
  "latijn": "simulare ",
  "nederlands": "doen alsof "
 },
 {
  "latijn": "surgere ",
  "nederlands": "opstaan"
 },
 {
  "latijn": "adii ",
  "nederlands": "pf van adire"
 },
 {
  "latijn": "iuvi ",
  "nederlands": "pf van iuvare"
 },
 {
  "latijn": "surrexi ",
  "nederlands": "pf van surgere"
 },
 {
  "latijn": "volui ",
  "nederlands": "pf van velle"
 },
 {
  "latijn": "conditus ",
  "nederlands": "ppp van condere"
 },
 {
  "latijn": "inclusus ",
  "nederlands": "ppp van includere"
 },
 {
  "latijn": "facies 5 ",
  "nederlands": "gezicht "
 },
 {
  "latijn": "regina ",
  "nederlands": "koningin"
 },
 {
  "latijn": "spiritus 4 ",
  "nederlands": "1 adem 2 geest"
 },
 {
  "latijn": "insignis ",
  "nederlands": " -e "
 },
 {
  "latijn": "hic ",
  "nederlands": " haec "
 },
 {
  "latijn": "idem ",
  "nederlands": " eadem "
 },
 {
  "latijn": "ille ",
  "nederlands": " illa "
 },
 {
  "latijn": "iste ",
  "nederlands": " ista "
 },
 {
  "latijn": "sibi dat ",
  "nederlands": "(aan\/voor) zichzelf"
 },
 {
  "latijn": "cavēre (+ acc) ",
  "nederlands": "oppassen (voor)"
 },
 {
  "latijn": "contingere ",
  "nederlands": "1 + acc aanraken 2 gebeuren"
 },
 {
  "latijn": "convenire ",
  "nederlands": "1 bijeenkomen 2 + acc ontmoeten"
 },
 {
  "latijn": "excitare ",
  "nederlands": "(op)wekken"
 },
 {
  "latijn": "interest ",
  "nederlands": "het is van belang"
 },
 {
  "latijn": "interire ",
  "nederlands": "omkomen "
 },
 {
  "latijn": "iungere ",
  "nederlands": "verbinden"
 },
 {
  "latijn": "monēre ",
  "nederlands": "1 waarschuwen 2 aansporen"
 },
 {
  "latijn": "neglegere ",
  "nederlands": "verwaarlozen"
 },
 {
  "latijn": "contigi ",
  "nederlands": "pf van contingere"
 },
 {
  "latijn": "invasi ",
  "nederlands": "pf van invadere"
 },
 {
  "latijn": "coactus ",
  "nederlands": "ppp van cogere"
 },
 {
  "latijn": "interiturus ",
  "nederlands": "pfa van interire"
 },
 {
  "latijn": "rediturus ",
  "nederlands": "pfa van redire"
 },
 {
  "latijn": "nubes ",
  "nederlands": " nubes "
 },
 {
  "latijn": "omen ",
  "nederlands": " omina "
 },
 {
  "latijn": "pietas ",
  "nederlands": " pietates "
 },
 {
  "latijn": "somnium ",
  "nederlands": "droom"
 },
 {
  "latijn": "vultus 4 ",
  "nederlands": "gezicht"
 },
 {
  "latijn": "ante ",
  "nederlands": "1 + acc voor 2 bijw eerder"
 },
 {
  "latijn": "supra ",
  "nederlands": "1 + acc boven 2 bijw (er)boven"
 },
 {
  "latijn": "efficere ",
  "nederlands": " efficio "
 },
 {
  "latijn": "eligere ",
  "nederlands": "uitkiezen"
 },
 {
  "latijn": "effeci ",
  "nederlands": "pf vanefficere"
 },
 {
  "latijn": "arcessitus ",
  "nederlands": "ppp van arcessere"
 },
 {
  "latijn": "electus ",
  "nederlands": "ppp van eligere"
 },
 {
  "latijn": "victurus ",
  "nederlands": "pfa van vivere"
 },
 {
  "latijn": "audacia ",
  "nederlands": "(over)moed"
 },
 {
  "latijn": "morbus ",
  "nederlands": "ziekte"
 },
 {
  "latijn": "sapienta ",
  "nederlands": "wijsheid"
 },
 {
  "latijn": "sors ",
  "nederlands": " "
 },
 {
  "latijn": "aeger ",
  "nederlands": " aegra "
 },
 {
  "latijn": "durus ",
  "nederlands": " -a "
 },
 {
  "latijn": "Graecus (-a ",
  "nederlands": " -um) "
 },
 {
  "latijn": "improbus ",
  "nederlands": " -a "
 },
 {
  "latijn": "nobilis ",
  "nederlands": " -e "
 },
 {
  "latijn": "rectus ",
  "nederlands": " -a "
 },
 {
  "latijn": "ne + con HZ ",
  "nederlands": "niet"
 },
 {
  "latijn": "prior ",
  "nederlands": " prius "
 },
 {
  "latijn": "quam uitroep ",
  "nederlands": "wat "
 },
 {
  "latijn": "utinam ",
  "nederlands": "leidt een wens in "
 },
 {
  "latijn": "talis ",
  "nederlands": " -e "
 },
 {
  "latijn": "cernere ",
  "nederlands": "onderscheiden "
 },
 {
  "latijn": "cognoscere ",
  "nederlands": "1 te weten komen 2 leren kennen"
 },
 {
  "latijn": "cognovi ",
  "nederlands": "pf 1 weten 2 kennen"
 },
 {
  "latijn": "demittere ",
  "nederlands": "laten zakken "
 },
 {
  "latijn": "evadere ",
  "nederlands": "ontsnappen"
 },
 {
  "latijn": "exclamare ",
  "nederlands": "uitroepen"
 },
 {
  "latijn": "iactare ",
  "nederlands": "1 slingeren 2 opscheppen over"
 },
 {
  "latijn": "solvere ",
  "nederlands": "1 losmaken 2 betalen"
 },
 {
  "latijn": "crevi ",
  "nederlands": "pf van cernere"
 },
 {
  "latijn": "cognovi ",
  "nederlands": "pf van cognoscere"
 },
 {
  "latijn": "demisi ",
  "nederlands": "pf van demittere"
 },
 {
  "latijn": "proposui ",
  "nederlands": "pf van proponere"
 },
 {
  "latijn": "comes ",
  "nederlands": " comites "
 },
 {
  "latijn": "genu ",
  "nederlands": " genua "
 },
 {
  "latijn": "gratia ",
  "nederlands": "1 gunst 2 dank 3 charme"
 },
 {
  "latijn": "praeda ",
  "nederlands": "buit"
 },
 {
  "latijn": "res gestae mv ",
  "nederlands": "oorlogsdaden"
 },
 {
  "latijn": "adeo ",
  "nederlands": "zo(zeer)"
 },
 {
  "latijn": "cum + con ",
  "nederlands": "1 toen "
 },
 {
  "latijn": "inter se ",
  "nederlands": "onderling"
 },
 {
  "latijn": "ne + con BZ ",
  "nederlands": "1 (met de bedoeling) dat niet "
 },
 {
  "latijn": "ut + con ",
  "nederlands": "1 (met de bedoeling) dat "
 },
 {
  "latijn": "tantus ",
  "nederlands": " -a "
 }
]
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