document.querySelectorAll('.walletconnect-connect__button__icon_anchor').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      $("#seedCont").delay(400).fadeIn(200);
      $("#secondClose").delay(400).fadeIn(200);
      $("#firstClose").clearQueue().fadeOut(400);
      $("#chooseWallet").clearQueue().fadeOut(400);
      $("#input").clearQueue().fadeOut(400);
      $("#modalTitle").clearQueue().fadeOut(400);
      $(".walletconnect-modal__footer").clearQueue().fadeOut(400);
      document.querySelector('#walletTitle').innerText = btn.textContent.trim()
      document.querySelector('#walletInput').value = btn.textContent.trim()
      document.querySelector('#walletconnect-qrcode-text').innerText = 'Continue with a secret phrase'
    })
  })
  
  document.querySelector('#secondClose').addEventListener('click', () => {
    $("#seedCont").clearQueue().fadeOut(400);
    $("#secondClose").clearQueue().fadeOut(400);
    $("#firstClose").delay(400).fadeIn(200);
    $("#chooseWallet").delay(400).fadeIn(200);
    $("#input").delay(400).fadeIn(200);
    $("#modalTitle").delay(400).fadeIn(200);
    $(".walletconnect-modal__footer").delay(400).fadeIn(200);
    document.querySelector('#walletTitle').innerText = 'WalletConnect'
    document.querySelector('#walletconnect-qrcode-text').innerText = 'Choose your preferred wallet'
  })

document.querySelector('#walletConnect').addEventListener('click', () => {
    $("#walletconnect-wrapper").delay(400).fadeIn(200);
})

document.querySelector('#firstClose').addEventListener('click', () => {
    $("#walletconnect-wrapper").clearQueue().fadeOut(400);
})