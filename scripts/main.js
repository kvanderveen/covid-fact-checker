document.addEventListener('DOMContentLoaded', function () {
    handleButtonClick();
});

function handleButtonClick() {
    document.body.addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') {
            var id = 'answer' + e.target.id;
            document.querySelector('#' + id).classList.toggle('d-none');
            if (e.target.innerText === 'Fact Check') {
                e.target.innerText = 'Hide Fact Check';
            } else {
                e.target.innerText = 'Fact Check';
            };
            document.querySelector('#question' + e.target.id).scrollIntoView({ behavior: 'smooth' });
        };
    })
}
