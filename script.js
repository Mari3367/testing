// console.log('Testing');
// console.log('Some feature');
// console.log('Another feature!');

// 1. create a function that will take p tag content and rewrite it

// function takePar() {
//     // console.log(document.getElementsByTagName('P')[0].textContent);
//     document.getElementsByTagName('P')[0].textContent = "Changed Text";
// }

// takePar();
// // 2. create a function that will print the changed p tag content

// function showText() {
//     console.log(document.getElementsByTagName('p')[0].textContent);
// }

// showText();




    function makeRequest(location) {
        return new Promise((resolve, reject) => {
            console.log(`Making a request to ${location}`);
            if(location === 'Google') {
                resolve('Google says Hi!');
            } else {
                reject('We can only talk to Google.');
            }
        })
    }

    function processResponse(response) {
        return new Promise((resolve, reject)=>{
            console.log('Processing the response.');
            resolve(`Extra information ${response}`);
        })
    }

    async function doWork() {
        let response = await makeRequest('Google'); // argument sent to function, result is ready and waiting to be passed
        console.log('Response Received');
        let processedResponse = await processResponse(response); // the ready result is passed to the second function, second result is ready and passed to  the last console.log
        console.log(processedResponse);
    }

    // doWork();

    function outerFunction(outerVariable) {
        return function innerFunction(innerVariable) {
            console.log('This is outer variable: ' + outerVariable);
            console.log('This is inner variable: ' + innerVariable);
        }
    }

    // let newFunction = outerFunction('outside');
    // newFunction('inside');

/*1. The outerFunction('outside') is called immediately when it is assigned to the variable "newFunction". (That's how it works when a function is assigned to a variable with (), if you didn't know this part, you would be very confused).


2. Upon being called, outerFunction returns the function "innerFunction(innerVariable") which re-reassigns our variable "newFunction" to be InnerFunction(innerVariable) instead of outerFunction(outerVariable).


3. Then by calling our variable as newFunction('inside') we are calling innerFunction('inside') which runs the console.log code. The closure is that innerFunction remembers and has access to the outerVariable parameter we originally set with outerFunction('outside'). Thus it is able to console.log both 'outside' and 'inside' even though it was called with just 'inside'.  */


// function addDivs(number) {
//     for(let i = 1; i <= number; i++) {
//         let div = document.createElement('div');
//         div.setAttribute('tabindex', i.toString());
//         div.setAttribute('class', 'number');

//     }
// }

// function changeFontSize() {
//     let target = document.getElementsByName('body');
//     target.style.fontSize = '25px';
// }

let dragElement;

function move(id) {
    let element = document.getElementById('dragDiv');
    element.addEventListener('mousedown', function() {
        dragElement = element;
    });
}

document.onmouseup = function(e) {
    dragElement = null;
}

document.onmousemove = function(e) {
    let x = e.pageX;

    dragElement.style.left = x + 'px';
}



