function calc() {
    var bill = document.getElementById('bill').value;
    var people = document.getElementById('people').value;
    var sq = document.getElementById('list').value;
    var markup = '';


    document.getElementById('error').innerHTML = markup;
    if (!bill || typeof bill === !'number') {
        markup = `<p> First Tell Us The Bill </p>`
        document.getElementById('error').innerHTML = markup;

    } else if (!people) {
        markup = `<p>Please enter how many are you </p>`
        document.getElementById('error').innerHTML = markup;
    } else {
        var res = ((bill * sq) / 100) / people;
        var rounded = res.toFixed(2)

        document.getElementById('res').innerText = rounded + ' ' + 'Tip for Service'
    }
}

function checkInput(input) {
    var regExp = /[^0-9]/gi;
    input.value = input.value.replace(regExp, '');
}