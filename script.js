let changeBtn = document.querySelector(".change-image");
let changeImg = document.querySelector(".preview-container");
let checkState = false;

function changePreview() {
  if (checkState == false) {
    changeBtn.src = "./assets/x.svg";
    changeImg.innerHTML = '<iframe class="embed" title="Sofá Margot II - Rosé" frameborder="0" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="449" height="253" src="https://sketchfab.com/models/b3d693a003c94f4e989c08fe08c3af8c/embed?autospin=1&autostart=1&preload=1&transparent=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_hint=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&ui_color=271A45&dnt=1"> </iframe>';
    checkState = true;
  } else {
    changeBtn.src = "./assets/360.svg";
    changeImg.innerHTML = '<img class="preview-image" src="./assets/product.png" alt="Sofá Margot II - Rosé" />;';
    checkState = false;
  }
}
