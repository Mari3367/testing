// console.log('Testing');
// console.log('Some feature');
// console.log('Another feature!');

// 1. create a function that will take p tag content and rewrite it

function takePar() {
    // console.log(document.getElementsByTagName('P')[0].textContent);
    document.getElementsByTagName('P')[0].textContent = "Changed Text";
}

takePar();
// 2. create a function that will print the changed p tag content

function showText() {
    console.log(document.getElementsByTagName('p')[0].textContent);
}

showText();