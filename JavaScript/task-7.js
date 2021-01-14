const inputFontSizeRef = document.querySelector('#font-size-control');
const textSpanRef = document.querySelector('#text');

inputFontSizeRef.addEventListener('input', InputSizeChangeHandler);
    // textSpanRef.style.fontSize = "100%";
function InputSizeChangeHandler(event) {
    textSpanRef.style.fontSize = event.target.value + "px";
    
}