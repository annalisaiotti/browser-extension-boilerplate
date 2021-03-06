// Listen for messages
browser.runtime.onMessage.addListener(receiver);
const body = document.querySelector("body");

// A message is received
function receiver(request, sender, sendResponse) {
  if (request.active) {
    //do something
    body.classList.toggle("my-beautiful-extension");


	const dictionary ={
		"🤞":[" Incrociamo le dita!"," Speriamo!!"],
		"🤞🏻":[" Incrociamo le dita!"," Speriamo!!"],
		"🤞🏼":[" Incrociamo le dita!"," Speriamo!!"],
		"🤞🏽":[" Incrociamo le dita!"," Speriamo!!"],
		"🤞🏾":[" Incrociamo le dita!"," Speriamo!!"],
		"🤞🏿":[" Incrociamo le dita!"," Speriamo!!"],
		"☝":[" Un momento..."," Ci tengo a puntualizzare", " Ho l'ultima parola in questa discussione"],
		"☝🏻":[" Un momento..."," Ci tengo a puntualizzare", " Ho l'ultima parola in questa discussione"],
		"☝🏼":[" Un momento..."," Ci tengo a puntualizzare", " Ho l'ultima parola in questa discussione"],
		"☝🏽":[" Un momento..."," Ci tengo a puntualizzare", " Ho l'ultima parola in questa discussione"],
		"☝🏾":[" Un momento..."," Ci tengo a puntualizzare", " Ho l'ultima parola in questa discussione"],
		"☝🏿":[" Un momento..."," Ci tengo a puntualizzare", " Ho l'ultima parola in questa discussione"],
		"🤟":[" Rock'n'Roll!"," Potente come la musica di una band rock"],
		"🤟🏻":[" Rock'n'Roll!"," Potente come la musica di una band rock"],
		"🤟🏼":[" Rock'n'Roll!"," Potente come la musica di una band rock"],
		"🤟🏽":[" Rock'n'Roll!"," Potente come la musica di una band rock"],
		"🤟🏾":[" Rock'n'Roll!"," Potente come la musica di una band rock"],
		"🤟🏿":[" Rock'n'Roll!"," Potente come la musica di una band rock"],
		"✌":[" Vittoria!"," Faccio un due con le dita in segno di vittoria", " Indice e medio alzati in segno di trionfo", " Gran successo!"],
		"✌🏻":[" Vittoria!"," Faccio un due con le dita in segno di vittoria", " Indice e medio alzati in segno di trionfo", " Gran successo!"],
		"✌🏼":[" Vittoria!"," Faccio un due con le dita in segno di vittoria", " Indice e medio alzati in segno di trionfo", " Gran successo!"],
		"✌🏽":[" Vittoria!"," Faccio un due con le dita in segno di vittoria", " Indice e medio alzati in segno di trionfo", " Gran successo!"],
		"✌🏾":[" Vittoria!"," Faccio un due con le dita in segno di vittoria", " Indice e medio alzati in segno di trionfo", " Gran successo!"],
		"✌🏿":[" Vittoria!"," Faccio un due con le dita in segno di vittoria", " Indice e medio alzati in segno di trionfo", " Gran successo!"],
		"👏":[" Merita un applauso"," Manifestazione di consenso, espressa battendo le mani", " Uno scroscio di applausi", " Osanna!"],
		"👏🏻":[" Merita un applauso"," Manifestazione di consenso, espressa battendo le mani", " Uno scroscio di applausi", " Osanna!"],
		"👏🏼":[" Merita un applauso"," Manifestazione di consenso, espressa battendo le mani", " Uno scroscio di applausi", " Osanna!"],
		"👏🏽":[" Merita un applauso"," Manifestazione di consenso, espressa battendo le mani", " Uno scroscio di applausi", " Osanna!"],
		"👏🏾":[" Merita un applauso"," Manifestazione di consenso, espressa battendo le mani", " Uno scroscio di applausi", " Osanna!"],
		"👏🏿":[" Merita un applauso"," Manifestazione di consenso, espressa battendo le mani", " Uno scroscio di applausi", " Osanna!"],
		"🤝":[" Siamo d'accordo"," Piacere di conoscerti"," Abbiamo stretto un accordo!", " Facciamo la pace"],
		"🤝🏻":[" Siamo d'accordo"," Piacere di conoscerti"," Abbiamo stretto un accordo!", " Facciamo la pace"],
		"🤝🏼":[" Siamo d'accordo"," Piacere di conoscerti"," Abbiamo stretto un accordo!", " Facciamo la pace"],
		"🤝🏽":[" Siamo d'accordo"," Piacere di conoscerti"," Abbiamo stretto un accordo!", " Facciamo la pace"],
		"🤝🏾":[" Siamo d'accordo"," Piacere di conoscerti"," Abbiamo stretto un accordo!", " Facciamo la pace"],
		"🤝🏿":[" Siamo d'accordo"," Piacere di conoscerti"," Abbiamo stretto un accordo!", " Facciamo la pace"],
		"👊":[" Batti pugno!"," Vorrei menarti", " Rischi di essere violentemente percosso"],
		"👊🏼":[" Batti pugno!"," Vorrei menarti", " Rischi di essere violentemente percosso"],
		"👊🏻":[" Batti pugno!"," Vorrei menarti", " Rischi di essere violentemente percosso"],
		"👊🏽":[" Batti pugno!"," Vorrei menarti", " Rischi di essere violentemente percosso"],
		"👊🏾":[" Batti pugno!"," Vorrei menarti", " Rischi di essere violentemente percosso"],
		"👊🏿":[" Batti pugno!"," Vorrei menarti", " Rischi di essere violentemente percosso"],
		"💪":[" Sono troppo forte", " Un bicipite così non lo ha nessuno"],
		"💪🏻":[" Sono troppo forte", " Un bicipite così non lo ha nessuno"],
		"💪🏼":[" Sono troppo forte", " Un bicipite così non lo ha nessuno"],
		"💪🏽":[" Sono troppo forte", " Un bicipite così non lo ha nessuno"],
		"💪🏾":[" Sono troppo forte", " Un bicipite così non lo ha nessuno"],
		"💪🏿":[" Sono troppo forte", " Un bicipite così non lo ha nessuno"],
		"🙌":[" Su le mani!"," Olè!", " Alla grande!"],
		"🙌🏻":[" Su le mani!"," Olè!", " Alla grande!"],
		"🙌🏼":[" Su le mani!"," Olè!", " Alla grande!"],
		"🙌🏽":[" Su le mani!"," Olè!", " Alla grande!"],
		"🙌🏾":[" Su le mani!"," Olè!", " Alla grande!"],
		"🙌🏿":[" Su le mani!"," Olè!", " Alla grande!"],
		"🖕":[" Non condivido quello che hai detto"," Ti sto invitando a fare un viaggio in un posto poco gradevole", " Vorrei offenderti!"],
		"🖕🏻":[" Non condivido quello che hai detto"," Ti sto invitando a fare un viaggio in un posto poco gradevole", " Vorrei offenderti!"],
		"🖕🏼":[" Non condivido quello che hai detto"," Ti sto invitando a fare un viaggio in un posto poco gradevole", " Vorrei offenderti!"],
		"🖕🏽":[" Non condivido quello che hai detto"," Ti sto invitando a fare un viaggio in un posto poco gradevole", " Vorrei offenderti!"],
		"🖕🏾":[" Non condivido quello che hai detto"," Ti sto invitando a fare un viaggio in un posto poco gradevole", " Vorrei offenderti!"],
		"🖕🏿":[" Non condivido quello che hai detto"," Ti sto invitando a fare un viaggio in un posto poco gradevole", " Vorrei offenderti!"],
		"👍":[" Mi piace!"," Bello!", " Ci sta!", " Può andare"],
		"👍🏻":[" Mi piace!"," Bello!", " Ci sta!", " Può andare"],
		"👍🏼":[" Mi piace!"," Bello!", " Ci sta!", " Può andare"],
		"👍🏽":[" Mi piace!"," Bello!", " Ci sta!", " Può andare"],
		"👍🏾":[" Mi piace!"," Bello!", " Ci sta!", " Può andare"],
		"👍🏿":[" Mi piace!"," Bello!", " Ci sta!", " Può andare"],
		"🖐":[" Presente!", " Io!", " Eccomi!"],
		"🖐🏻":[" Presente!", " Io!", " Eccomi!"],
		"🖐🏼":[" Presente!", " Io!", " Eccomi!"],
		"🖐🏽":[" Presente!", " Io!", " Eccomi!"],
		"🖐🏾":[" Presente!", " Io!", " Eccomi!"],
		"🖐🏿":[" Presente!", " Io!", " Eccomi!"],
		"👌":[" Perfetto!"," Ottimo!", " OK!"],
		"👌🏻":[" Perfetto!"," Ottimo!", " OK!"],
		"👌🏼":[" Perfetto!"," Ottimo!", " OK!"],
		"👌🏽":[" Perfetto!"," Ottimo!", " OK!"],
		"👌🏾":[" Perfetto!"," Ottimo!", " OK!"],
		"👌🏿":[" Perfetto!"," Ottimo!", " OK!"],
		"👎":[" Non mi finisce.."," Bruttino", " Disapprovo!", " Non mi piace"],
		"👎🏻":[" Non mi finisce.."," Bruttino", " Disapprovo!", " Non mi piace"],
		"👎🏼":[" Non mi finisce.."," Bruttino", " Disapprovo!", " Non mi piace"],
		"👎🏽":[" Non mi finisce.."," Bruttino", " Disapprovo!", " Non mi piace"],
		"👎🏾":[" Non mi finisce.."," Bruttino", " Disapprovo!", " Non mi piace"],
		"👎🏿":[" Non mi finisce.."," Bruttino", " Disapprovo!", " Non mi piace"],
		"🤳":[" Mi faccio un selfie"," Sono molto vanitoso"," Ho appena ripreso il telefono"],
		"🤳🏻":[" Mi faccio un selfie"," Sono molto vanitoso"," Ho appena ripreso il telefono"],
		"🤳🏼":[" Mi faccio un selfie"," Sono molto vanitoso"," Ho appena ripreso il telefono"],
		"🤳🏽":[" Mi faccio un selfie"," Sono molto vanitoso"," Ho appena ripreso il telefono"],
		"🤳🏾":[" Mi faccio un selfie"," Sono molto vanitoso"," Ho appena ripreso il telefono"],
		"🤳🏿":[" Mi faccio un selfie"," Sono molto vanitoso"," Ho appena ripreso il telefono"],
		"👶":[" Che bel bimbo!"," Un dolce piccolo pargolo"],
		"👶🏻":[" Che bel bimbo!"," Un dolce piccolo pargolo"],
		"👶🏼":[" Che bel bimbo!"," Un dolce piccolo pargolo"],
		"👶🏽":[" Che bel bimbo!"," Un dolce piccolo pargolo"],
		"👶🏾":[" Che bel bimbo!"," Un dolce piccolo pargolo"],
		"👶🏿":[" Che bel bimbo!"," Un dolce piccolo pargolo"],
		"👸🏻":[" Sono una regina"," Ho vinto", " Avevo ragione io", " Inchinatevi a me!"],
		"👸":[" Sono una regina"," Ho vinto", " Avevo ragione io", " Inchinatevi a me!"],
		"👸🏼":[" Sono una regina"," Ho vinto", " Avevo ragione io", " Inchinatevi a me!"],
		"👸🏽":[" Sono una regina"," Ho vinto", " Avevo ragione io", " Inchinatevi a me!"],
		"👸🏾":[" Sono una regina"," Ho vinto", " Avevo ragione io", " Inchinatevi a me!"],
		"👸🏿":[" Sono una regina"," Ho vinto", " Avevo ragione io", " Inchinatevi a me!"],
		"🤦♀":[" Che imbarazzo!"," Oh santo cielo!", " Oh mamma mia!"],
		"🤦♂":[" Che imbarazzo!"," Oh santo cielo!", " Oh mamma mia!"],
		"🤦🏻♀":[" Che imbarazzo!"," Oh santo cielo!", " Oh mamma mia!"],
		"🤦🏻♂":[" Che imbarazzo!"," Oh santo cielo!", " Oh mamma mia!"],
		"🤦🏼♀":[" Che imbarazzo!"," Oh santo cielo!", " Oh mamma mia!"],
		"🤦🏼♂":[" Che imbarazzo!"," Oh santo cielo!", " Oh mamma mia!"],
		"🤦🏽♀":[" Che imbarazzo!"," Oh santo cielo!", " Oh mamma mia!"],
		"🤦🏽♂":[" Che imbarazzo!"," Oh santo cielo!", " Oh mamma mia!"],
		"🤦🏾♀":[" Che imbarazzo!"," Oh santo cielo!", " Oh mamma mia!"],
		"🤦🏾♂":[" Che imbarazzo!"," Oh santo cielo!", " Oh mamma mia!"],
		"🤦🏿♀":[" Che imbarazzo!"," Oh santo cielo!", " Oh mamma mia!"],
		"🤦🏿♂":[" Che imbarazzo!"," Oh santo cielo!", " Oh mamma mia!"],
		"🙅‍♀":[" Me ne distacco facendo una X con le braccia"," Assolutamente no, croce sopra!", " Di qui non si passa"],
		"🙅‍♂":[" Me ne distacco facendo una X con le braccia"," Assolutamente no, croce sopra!", " Di qui non si passa"],
		"🤷‍♀":[" Non lo so..."," Non saprei cosa dire a riguardo", " Non ne ho la più pallida idea"],
		"🤷‍♂":[" Non lo so..."," Non saprei cosa dire a riguardo", " Non ne ho la più pallida idea"],
		"🙆♀":[" Altolà il sudore!"," Sto facendo OK con le braccia perché sono d'accordo con te"],
		"🙆‍♂":[" Altolà il sudore!"," Sto facendo OK con le braccia perché sono d'accordo con te"],
		"😚":[" Mando un bacio dolce e pieno di sentimento", " Ti dò un bacio mentre arrossisco", " Le mie gote sono rosee mentre protendo le mie labbra verso te"],
		"😘":[" Mando un bacetto ammiccante", " Ti dò un bacio un po' sbarazzino", " Bacioni a tutti"],
		"😊":[" Ti faccio un dolce sorriso", " Questo mi fa arrossire le gote", " Sono in un simpatico imbarazzo"],
		"😰":[" Sto sudando freddo", " Sono un po' a disagio", " Questa cosa mi spaventa un poco.."],
		"😅":[" Ehm sono un po' spiazzato", " Eh, è proprio come sembra..."],
		"😂":[" Sto ridendo talmente tanto che mi scendono le lacrime", " Piove dai miei dotti lacrimali dal gran che rido"],
		"🤣":[" Sto ridendo talmente tanto che ho la faccia storta mi scendono le lacrime", " Mi si è girata la faccia a 45° dal gran che rido!"],
		"😒":[" Non era necessario dirlo", " Sono basito", " Sempre il solito"],
		"😩":[" Oh caspita, questa non ci voleva proprio", " Il mio volto si distorce in un grugno disperato"],
		"😍":[" Talmente bello che i miei occhi diventano cuori", " È meraviglioso!"],
		"🤩":[" Sto guardando una cosa fantastica! "," È strabiliante!"," Stupefacente!!", " Sbalorditivo!"," Talmente sfavillante che i miei occhi diventano stelle", " Sono accecato dalla magnifocenza di questa cosa!"],
		"😳":[" Sto sgranando gli occhi per l'incredulità", " Non posso veramente crederci", " Sono talmente stupito che mi stanno uscendo gli occhi dalle orbite"],
		"😔":[" Ci sono rimasto male"," Sono sconsolato"," Sono abbattuto"," Questa notizia mi rattrista"],
		"😎":[" Mi sento sicuro di me"," Sono cool", " Sono sul pezzo", " Occhiali da sole scuri da detective"],
		"😭":[" Talmente triste da farmi piangere a dirotto"," Sono in una valle di lacrime", " La disperazione è tanta da farmi gemere"],
		"😻":[" Talmente bello che anche al mio gatto sono diventati gli occhi a cuore"],
		"🤥":[" Si ho detto una bugia","Pinocchio!"," Hai mentito!", " Ciò che dici è falso!"],
		"😤":[" Sono talmente arrabbiato che mi esce fumo dal naso"," Sto sbuffando dalla rabbia"],
		"😈":[" Sono biricchino", " Faccio il diavoletto dispettoso", " Il demonio sorride malvagio"],
		"😴":[" Ho molto sonno!", " Sono stanchissimo!", " Mi fa addormentare!", " Mi sta calando la palpebra"," Avrei bisogno di coricarmi per un pisolino", " Ho talmente sonno che produco un ronzio"],
		"😜":[" Sono in vena di scherzare"," Sono un burlone"," Che burla!"],
		"🤗":[" Ti mando un caldo abbraccio","  Protengo le mie mani verso la tua persona"],
		"😉":[" Una grande intesa la nostra"," Occhiolino ammiccante"],
		"😱":[" Talmente spaventoso da farmi diventare blu mentre urlo"," Urlo disperato come il dipinto di Munch", " Atterrito!"],
		"😇":[" Che angelo!"," Non ho alcuna colpa", " Sono una creatura alata angelica"," Sono innocente!", " Sono un santo!"],
		"🤯":[" Mi esplode la testa! "," Sto scoppiando", " Non capisco più nulla"],
		"🤔":[" Sono perplesso"," Lasciami pensare", " Non sono convinto"],
		"🤫":[" Taci!"," Fai silenzio", " Sshhh!"],
		"🤢":[" Disgustoso!"," Sto male!"," Ripugnante", " Ho lo stomaco in subbuglio!", " Che schifo!", " Sono stato malissimo!", " Ho vomitato l'anima", " Quel posto fa un cibo terribile!"],
		"🙃":[" Mi fai sorridere a testa in giù"," Sono felice al contrario", " Sono felice ma non troppo!"],
		"🤤":[" Che fame!"," Ho un certo languorino", " La mia bocca produce bava dalla fame che ho"],
		"😡":[" Sono rosso di rabbia"," Ma che siocchezze vai ciarlando?!", " Sono arrabbiato!", " Sono paonazzo dal furore!", " Mi sto infuriando!"],
		"🙀":[" Talmente spaventoso che hai fatto urlare il mio gatto"],
		"😋":[" Buonissimo"," Squisito!", " Da leccarsi i baffi!", " Che ricetta deliziosa!"],
		"😽":[" Talmente avvenente che il mio gatto vorrebbe baciarti"," Ti mando un bacio morbido come un micetto!"],
		"😹":[" Talmente simpatico che hai fatto piangere dal ridere il mio gatto"],
		"😿":[" Talmente complesso che hai spiazzato il mio gatto"," Talmente spiazzante che hai fatto sudare il mio gatto"],
		"😾":[" Talmente antipatico che hai fatto arrabbiare il mio gatto"," Tanto irritante da infastidire anche un dolce micetto"],
		"😺":[" Talmente carino che hai fatto sorridere il mio gatto"," Sorrido con innocenza felina!"],
		"🤨":[" Ne sei sicuro?"," Sinceramente ho dei dubbi a riguardo...", " Non mi trovo molto d'accordo..."],
		"🤐":[" Giuro che manterrò il tuo segreto"," Terrò la bocca chiusa", " Le tue confidenze sono al sicuro"," Ho chiuso la mia bocca con una zip", " Sarò muto come una tomba"],
		"🤬":[" Mannaggia &$!#%"," Sono talmente arrabbiato che potrei usare parole scurrili", " Non mi esprimo dal gran che sono incavolato!!"],
		"🎅":[" Ho ho ho Merry Christmas"," Buon Natale!", " Felice Natività a voi!", " Mi sento Babbo Natale!"],
		"🤧":[" Sono malato!"," Non mi sento molto bene...", " Sono un po' raffreddato"],
		"🤓":[" Che secchione"," Studiatissimo", " Gaglioffo!"],
		"😬":[" Ti piace la mia nuova dentiera? "," Ti mostro un sorriso poco naturale e sforzato", " Il mio sorriso indica preoccupazione"],
		"🧐":[" Analizziamo meglio la questione"," È troppo minuzioso e complicato", " Oggi mi sento solenne e raffinato", " Ho un monocolo per eviscerare meglio le informazioni"],
		"😏":[" Se capisci cosa intendo..."," Sei sicuro che sia andata proprio così?", " Vecchia volpe!", " Ti osservo..."], 
		"💵":[" Che ricchezza"],
		"💍":[" Talmente prezioso che lo potrei utilizzare per una proposta di nozze", " Davvero prezioso ed elegante", " Prezioso come il gioiello che porto al dito"],
		"©":[" Sento che questa cosa mi appartiene", " Su questo ho il copyright!"],
		"💥":[" Rombo di un'esplosione", " Esplosivo!", " BOOOOOM", " Sembra che sia esploso qualcosa di grosso!"],
		"🌈":[" Una tale felicità me la dà solo l'arcobaleno!", " Un tocco di colore per rallegrare la situazione", " Il mondo è vario e variopinto"],
		"🎄":[" Buon Natale!", " Ho fatto l'albero di Natale"],
		"💀":[" Piuttosto la morte", " Mi ricorda un teschio spaventoso!"],
		"❤":[" Provo un forte amore per te"," Ti amo!", " Ti voglio bene!", " Risulterebbe di lapalissiana fonte esternare l'amore che provo per te", " Il mio cuore rosso batte per te"],
		"♥":[" Provo un forte amore per te"," Ti amo!", " Ti voglio bene!", " Risulterebbe di lapalissiana fonte esternare l'amore che provo per te", " Il mio cuore rosso batte per te"],
		"❣":[" Cuore esclamativo!", " Un ti voglio bene concitato e un po' chic"],
		"🖤":[" Un sentimento nero e elegante, non esibito", " Cuore nero da Femme Fatal"],
		"🧡":[" Un forte sentimento color fuoco"],
		"💙":[" Ti voglio un bene azzurro, leggero come il cielo"],
		"&#x1F499":[" Ti voglio un bene azzurro, leggero come il cielo"],
		"💚":[" Un sentimento verde come la speranza"],
		"💛":[" Il bene che ti voglio, è caldo e splendente come il sole"],
		"💔":[" Il mio cuore si sta spezzando", " Per questo il mio muscolo cardiaco potrebbe spezzarsi", " Questa cosa mi ferisce nel profondo"],
		"💕":[" Che carino!"," Cuori delicati per un tema delicato"],
		"💘":[" Sono trafitto dall'amore che sto provando"," Il mio cuore è in tuo possesso"],
		"💖":[" Provo un sentimento rosa e splendente"," Mi sento di volerti un bene prezioso"],
		"💞":[" Mi piace tanto da farmi danzare il cuore"," Il mio cuore sta danzando pensando a te"],
		"💋":[" L'impronta di un bacio"," Un bacio che lascia il segno"],
		"✨":[" Brillante come una stella"," Faccio scintille", " Sprazzo di luce", " Faville luminose"],
		"🔝":[" Sei al top!"," Hai avuto l'idea più bella di tutte", " Geniale!"],
		"🎂":[" Buon compleanno!"," Una succulenta torta per celebrare l'anniversario della tua nascita"],
		"🔥":[" Vai a fuoco"," Un violento rogo", " Fuoco di bivacco"],
		"💣":[" Che bomba!"," Talmente esilarante da fare esplodere in me l'agitazione", " Dirompente come lo scoppio di una bomba!", " Lo scoppio di una bomba mi avrebbe scosso meno!"],
		"🌹":[" Un fiore romantico"," Una rosa rossa di passione"],
		"✈":[" Si parte!"," Vorrei salire sul primo aereo e viaggiare", " Ho voglia di prendere la valigia e andare", " Mi preme fortemente il desiderio di intraprendere un lungo viaggio"],
		"🎉":[" Una trombetta per festeggiare"," Un'esplosione di coriandoli colorati e stelle filanti"],
		"👄":[" Che belle labbra carnose"," Guarda che bocca prominente!", " Un paio di grosse labbra"],
		"🎁":[" Un bel pacco"," Un regalo per te", " Sorpresona!"],
		"🍾":[" Propongo un brindisi"," Si sboccia!", " Stappo lo spumante!"],
		"🌟":[" Brillante come una stella"," Una stella sfavillante", " Lucente astro del firmamento"],
		"🍑":[" Pesca matura"," Mi ricorda una pesca"],
		"🙊":[" Ops, non dovevo dirlo", " Non ho parole!", " Non parlo che è meglio"],
		"🙈":[" Mi rifiuto di guardare"," Mi copro gli occhi dalla disperazione", " Non voglio guardare"],
		"🙉":[" Mi rifiuto di ascoltare"," Mi tappo le orecchie!", " Non ascolto nulla"],
		"💃":[" Fantastico come una ballerina di tango"," Andiamo a festeggiare", " Che ragazza facile!", " Che sgarzigliona!", " Vorrei Ballare"],
		"🎣":[" Sono a pescare"," Vorrei pescare", " Mi sento in trappola come un pesce attaccato a un amo", " Non hai scampo"],
		"⏰":[" Sii puntuale"," Abbiamo una scadenza!", " Manca poco!", " Puntuale come un orologio svizzero"]
	}

    const emojisInTwitter = document.querySelectorAll(".Emoji.Emoji--forText");

    for (emojiInTwitter of emojisInTwitter) {
      const emojiReal = emojiInTwitter.getAttribute("alt");
      const newText = document.createElement("span");
      newText.classList.toggle("my-text-to-emoji");
      if (dictionary[emojiReal]) {
      	const rand = Math.floor(Math.random() * dictionary[emojiReal].length) + 1 
        newText.textContent = dictionary[emojiReal][rand-1];
      }

      emojiInTwitter.parentNode.insertBefore(newText, emojiInTwitter);
      emojiInTwitter.style["display"]="none"
      //console.log(dictionary[emojiReal]);
    }


     const emojisInTwitterWeb = document.querySelectorAll(".EmojiWeb.Emoji--forText");
    for (emojiInTwitter of emojisInTwitterWeb) {
      const emojiReal = emojiInTwitter.innerHTML;
      const newText = document.createElement("h4");
      newText.classList.toggle("my-text-to-emoji");
      if (dictionary[emojiReal]) {
      	const rand = Math.floor(Math.random() * dictionary[emojiReal].length) + 1 
        newText.textContent = dictionary[emojiReal][rand-1];
      }

      emojiInTwitter.parentNode.insertBefore(newText, emojiInTwitter);
      emojiInTwitter.style["display"]="none"
      //console.log(dictionary[emojiReal]);
    }

  } else {
    //do else
    body.classList.toggle("my-beautiful-extension");
  }
}
