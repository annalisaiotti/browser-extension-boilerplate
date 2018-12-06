// Listen for messages
browser.runtime.onMessage.addListener(receiver);
const body = document.querySelector("body");

// A message is received
function receiver(request, sender, sendResponse) {
  if (request.active) {
    //do something
    body.classList.toggle("my-beautiful-extension");


	const dictionary ={
		"🤞🏻":["talmente bello che i miei occhi diventano cuori","bla bla"],
		"💕":["che carino!","cuori delicati per un tema delicato"],
		"👶":["che bel bimbo!","un dolce piccolo pargolo"],
		"💵":["che ricchezza"],
		"😂":["sto ridendo talmente tanto che mi scendono le lacrime", "piove dai miei dotti lacrimali dal gran che rido"],
		"😒":["non era necessario dirlo", "sono basito", "sempre il solito"],
		"💋":["l'impronta di un bacio","un bacio che lascia il segno"],
		"✨":["brillante come una stella","faccio scintille", "sprazzo di luce", "faville luminose"],
		"🔝":["sei al top!","hai avuto l'idea più bella di tutte", "geniale!"],
		"🎂":["Buon compleanno!","una succulenta torta per celebrare l'anniversario della tua nascita"],
		"🔥":["Vai a fuoco","un violento rogo", "Fuoco di bivacco"],
		"🌹":["Un fiore romantico","Una rosa rossa di passione"],
		"🎉":["Una trombetta per festeggiare","un'esplosione di coriandoli colorati e stelle filanti"],
		"👏":["Merita un applauso","manifestazione di consenso, espressa battendo le mani", "uno scroscio di applausi", "Osanna!"],
		"😜":["Sono in vena di scherzare","Sono un burlone","Che burla!"],
		"🤗":["Ti mando un caldo abbraccio","protengo le mie mani verso la tua persona"],
		"👄":["Che belle labbra carnose","Guarda che bocca prominente!", "Un paio di grosse labbra"],
		"🎁":["Un bel pacco","Un regalo per te", "Sorpresona!"],
		"🍾":["Propongo un brindisi","Si sboccia!", "Stappo lo spumante!"],
		"😎":["Mi sento sicuro di me","Sono cool", "Sono sul pezzo", "Occhiali da sole scuri da detective"],
		"😭":["Talmente triste da farmi piangere a dirotto","Sono in una valle di lacrime", "La disperazione è tanta da farmi gemere"],
		"😻":["Talmente bello che anche al mio gatto sono diventati gli occhi a cuore"],
		"🌟":["Brillante come una stella","Una stella sfavillante", "Lucente astro del firmamento"],
		"😉":["Una grande intesa la nostra","Occhiolino ammiccante"],
		"👊":["Batti pugno!","Vorrei menarti", "Rischi di essere violentemente percosso"],
		"😱":["Talmente spaventoso da farmi diventare blu mentre urlo","Urlo disperato come il dipinto di Munch", "Atterrito!"],
		"👍":["Mi piace!","Bello!", "Ci sta!", "Può andare"],
		"🙌":["Su le mani!","Olè!", "Alla grande!"],
		"🤦":["Che imbarazzo!","Oh santo cielo!", "Oh mamma mia!"],
		"😇":["Che angelo!","Non ho alcuna colpa", "Sono una creatura alata angelica","Sono innocente!", "Sono un santo!"],
		"🤯":["Mi esplode la testa! ","Sto scoppiando", "Non capisco più nulla"],
		"🤔":["Sono perplesso","Lasciami pensare", "Non sono convinto"],
		"🤫":["Taci!","Fai silenzio", "Sshhh!"],
		"🤢":["Disgustoso!","Sto male!","Ripugnante", "Ho lo stomaco in subbuglio!", "Che schifo!", "Sono stato malissimo!", "Ho vomitato l'anima", "Quel posto fa un cibo terribile!"],
		"🙃":["Mi fai sorridere a testa in giù","sono felice al contrario", "Sono felice ma non troppo!"],
		"🤤":["Che fame!","Ho un certo languorino", "La mia bocca produce bava dalla fame che ho"],
		"🤷‍":["Non lo so...","Non saprei cosa dire a riguardo", "Non ne ho la più pallida idea"],
		"🤓":["Che secchione","Studiatissimo", "Gaglioffo!"],
		"🖕":["Non condivido quello che hai detto","Ti sto invitando a fare un viaggio in un posto poco gradevole", "Vorrei offenderti!"],
		"😬":["Ti piace la mia nuova dentiera? ","Ti mostro un sorriso poco naturale e sforzato", "Il mio sorriso indica preoccupazione"],
		"🍑":["Pesca matura","Mi ricorda una pesca"],
		"🙈":["Mi rifiuto di guardare","Mi copro gli occhi dalla disperazione", "Non voglio guardare"],
		"🙉":["Mi rifiuto di ascoltare","Mi tappo le orecchie!", "Non ascolto nulla"],
		"❤":["Provo un forte amore per te","Ti amo!", "Ti voglio bene!", "risulterebbe di lapalissiana fonte esternare l'amore che provo per te", "Il mio cuore rosso batte per te"],
		"💃":["Fantastico come una ballerina di tango","Andiamo a festeggiare", "Che ragazza facile!", "Che sgarzigliona!", "Vorrei Ballare"],
		"😡":["Sono rosso di rabbia","Ma che siocchezze vai ciarlando?!", "Sono arrabbiato!", "Sono paonazzo dal furore!", "Mi sto infuriando!"],
		"🙀":["Talmente spaventoso che hai fatto urlare il mio gatto"],
		"😋":["Buonissimo","Squisito!", "Da leccarsi i baffi!", "Che ricetta deliziosa!"],
		"😽":["Talmente avvenente che il mio gatto vorrebbe baciarti","Ti mando un bacio morbido come un micetto!"],
		"😹":["Talmente simpatico che hai fatto piangere dal ridere il mio gatto"],
		"😿":["Talmente complesso che hai spiazzato il mio gatto","Talmente spiazzante che hai fatto sudare il mio gatto"],
		"😾":["Talmente antipatico che hai fatto arrabbiare il mio gatto","Tanto irritante da infastidire anche un dolce micetto"],
		"😺":["Talmente carino che hai fatto sorridere il mio gatto","Sorrido con innocenza felina!"],
		"🤨":["Ne sei sicuro?","Sinceramente ho dei dubbi a riguardo...", "non mi trovo molto d'accordo..."],
		"🤐":["Giuro che manterrò il tuo segreto","Terrò la bocca chiusa", "Le tue confidenze sono al sicuro","ho chiuso la mia bocca con una zip", "Sarò muto come una tomba"],
		"🤬":["Mannaggia &$!#%","Sono talmente arrabbiato che potrei usare parole scurrili", "Non mi esprimo dal gran che sono incavolato!!"],
		"🎅":["Ho ho ho Merry Christmas","Buon Natale!", "Felice Natività a voi!", "Mi sento Babbo Natale!"],
		"🤧":["Sono malato!","Non mi sento molto bene...", "Sono un po' raffreddato"],
		"🙆":["Altolà il sudore!","Sto facendo OK con le braccia perché sono d'accordo con te"],
		"🎣":["Sono a pescare","Vorrei pescare", "Mi sento in trappola come un pesce attaccato a un amo"],
		"🧐":["Analizziamo meglio la questione","È troppo minuzioso e complicato", "Oggi mi sento solenne e raffinato", "ho un monocolo per eviscerare meglio le informazioni"],
		"⏰":["Sii puntuale","Abbiamo una scadenza!", "Manca poco!", "Puntuale come un orologio svizzero"],
		"😏":["Se capisci cosa intendo...","Sei sicuro che sia andata proprio così?", "Vecchia volpe!", "Ti osservo..."] 
	}

    const emojisInTwitter = document.querySelectorAll(".Emoji.Emoji--forText");

    for (emojiInTwitter of emojisInTwitter) {
      const emojiReal = emojiInTwitter.getAttribute("alt");
      const newText = document.createElement("span");
      newText.classList.toggle("my-text-to-emoji");
      console.log(emojiReal)
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
