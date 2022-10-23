const rangeInput = document.getElementById('range-input');
const rangeOutput = document.getElementById('range-output');

rangeOutput.textContent = rangeInput.value;
rangeInput.addEventListener('input', e => rangeOutput.textContent = e.target.value);