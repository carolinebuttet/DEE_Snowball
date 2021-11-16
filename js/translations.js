translations = {
  title: {
    fr: 'Comme Neige',
    de: 'Comme Neige en allemand'
  },
  note:{
    fr:'Evoluant dans un dispositif qui évoque la boule à neige de notre enfance, une nuée pâle s’anime lorsque s’ouvre la fenêtre de ce calendrier de l’Avent, laissant entrer jour après jour un souffle imprévisible. Tempête minuscule dans l’horizon confiné, où l’univers entier semble pourtant contenu. <br>Puis, dans le chuchotement de la blancheur qui enfin s’apaise, naît le poème. Deux alexandrins se juxtaposent, l’un porté vers la nostalgie des neiges éternelles, l’autre porteur d’une interrogation – et si nous habitions le dernier hiver du monde ? <br>Au fil de l’Avent, le poète ouvre les présents et envisage l’après, rêvant un avenir apaisé. Où l’espoir ne fondrait plus comme neige au soleil mais se tiendrait droit, comme une virgule capable de nous relier.',
    de:'note DE',
  },
  dee_presente:{
    fr:'LA DEE PRÉSENTE:',
    de:'dee-presente DE',
  },
  project_description:{
    fr:'A l’occasion des fêtes de fin d’année, nous avons créé une installation interactive qui se trouve à l’entrée du bâtiment de la DEE (Espace 25, Pérolles, Fribourg). <br>Vous pouvez activer cette installation depuis ce site web et voir le résultat en direct.',
    de:'Texte d’intro auf deutsch',
  },
  live_stream: {
    fr:'Live Stream',
    de:'de',
  },
  live_instructions: {
    fr:'Interragissez avec notre installation à distance et voyez le résultat en live. ',
    de:'de',
  },
  poem_of_the_day: {
    fr:'Poème du jour',
    de:'de',
  },
  poem_by_thierry_raboud: {
    fr:'Lisez le poème du jour écrit par Thierry Raboud.',
    de:'de',
  },
  share: {
    fr:'Partage',
    de:'',
  },
  share_text: {
    fr:'Partagez la carte de voeux à votre entourage !',
    de:'',
  },
  start: {
    fr:'Commencer l’expérience',
    de:'',
  },
  email_address: {
    fr:'Votre adresse E-Mail ',
    de:'',
  },
  recipient_address: {
    fr:'Adresse E-Mail du destinataire',
    de:'',
  },
  share_action: {
    fr:'PARTAGER',
    de:'',
  },
  share_action_text: {
    fr:'Partagez votre carte !',
    de:'',
  },
  made_by_eikonlab: {
    fr:'Projet réalisé par eikonlab',
    de:'',
  },
  poems_by: {
    fr:'Poèmes en français par Thierry Raboud',
    de:'',
  },
  translations_by: {
    fr:'Traduction des poèmes par la DEE',
    de:'',
  },
  legal: {
    fr:'Mentions légales ',
    de:'',
  },
  cg: {
    fr:'Conditions générales',
    de:'',
  },

}

const translateButton = document.querySelector("#language-switch");
let language = 'fr';

const initTranslations = () => {
  console.log('initTranslations!', translations);
  translateButton.addEventListener("click",changeLanguage)
}

const changeLanguage =() => {
  if(language == 'fr'){
    language = 'de'
  }
  else language = 'fr'
  console.log('language is now', language);


  const keys = Object.keys(translations);
  keys.forEach((key, index) => {
      const translatedText  = translations[key][language]
      console.log('key=', key);
      const elementToBeTranslated = document.getElementById(key);
      if(elementToBeTranslated) elementToBeTranslated.innerHTML = translatedText;
  });

}

initTranslations();