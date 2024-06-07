function applyChanges() {
    const bgColor = document.getElementById('bgColor').value;
    const textColor = document.getElementById('textColor').value;
    const fontSize = document.getElementById('fontSize').value + 'px';
    const fontFamily = document.getElementById('fontFamily').value;
    const fontWeight = document.getElementById('fontWeight').value;
    
    const output = document.getElementById('output');
    const text = document.getElementById('text');
    
    output.style.backgroundColor = bgColor;
    output.style.color = textColor;
    output.style.fontSize = fontSize;
    output.style.fontFamily = fontFamily;
    output.style.fontWeight = fontWeight;
}
