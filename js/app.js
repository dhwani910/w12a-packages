


class Quote {
    content = '';


    constructor(getQuote) {
        this.getNewTweet();
    }


    getNewTweet() {


        let button = document.querySelector('.get-quote');
        button.addEventListener('click', function () {
        let ajax = new XMLHttpRequest();
        let self = this;
        ajax.onreadystatechange = function () {
            if (this.readyState == 1) {
                target.innerHTML = 'loading....';
            } else if (this.readyState == 4 && this.status == 200) {
                let text = JSON.parse(this.responseText);
                target.innerHTML = text.quote;
            }
        }

        ajax.open("GET", "https://cors-anywhere.herokuapp.com/https://api.kanye.rest", true);
        ajax.send();
        });

        button.click();


    }
}
let target = document.querySelector('.quote');
console.log(this.content);
let quote = new Quote();
console.log(quote);

