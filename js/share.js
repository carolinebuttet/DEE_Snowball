console.log("share!")

const shareButton = document.querySelector("#native-share");

const shareData = {
    title: 'MDN',
    text: 'Learn web development on MDN!',
    url: 'https://developer.mozilla.org'
  }

  
shareButton.addEventListener('click', async () => {
    try {
      await navigator.share(shareData)
    } catch(err) {
      console.log('Error: ' + err)
    }
  });
