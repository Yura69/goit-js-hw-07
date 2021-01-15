const inputFontSizeRef = document.querySelector('#font-size-control');
const textSpanRef = document.querySelector('#text');

inputFontSizeRef.addEventListener('input', inputSizeChangeHandler);
    // textSpanRef.style.fontSize = "100%";
function inputSizeChangeHandler(event) {
    textSpanRef.style.fontSize = event.target.value + "px";
    
}