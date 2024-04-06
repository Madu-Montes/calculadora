document.addEventListener('DOMContentLoaded', function () {
    const inputBox = document.getElementById('inputBox');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.textContent === '=') {
                try {
                    inputBox.value = eval(inputBox.value);
                } catch (error) {
                    inputBox.value = 'Error';
                }
            } else if (button.textContent === 'AC') {
                inputBox.value = '';
            } else {
                inputBox.value += button.textContent;
            }
        });
    });
});
