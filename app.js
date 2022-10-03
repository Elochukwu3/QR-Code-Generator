const innerWrapper = ` <h2>QR Code Generator</h2>
        <input type="text" id="text" placeholder="Enter text ..." class="input" />
        <button type="button"  id="button">Generate QR</button>
        <div class="qr-image">
          <span class="error"></span><br />
          <img src="" id="img" />
        </div>
`;
document.querySelector(".page-container").innerHTML = innerWrapper;
function generateQR() {
  document.querySelector(".qr-image").style.display = "block";
  let QRtext = document.querySelector("#text").value;

  if (QRtext == 0) {
    document.querySelector(".qr-image .error").innerHTML = "Please enter text";
    document.querySelector("#img").style.display = "none";
  } else {
    document.querySelector("#img").style.display = "block";
    document.querySelector(".qr-image .error").innerHTML = "";
    document.querySelector(
      "#img"
    ).src = `https://api.qrserver.com/v1/create-qr-code/?data=${QRtext}&amp;size=100x100`;
  }
}
document.getElementById("button").addEventListener("click", generateQR);
