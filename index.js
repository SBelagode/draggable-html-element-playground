
//declaring object start positions and mouse start positions. 

var startX = 0 ;
var startY = 0;


var fill_newX = 0;
var fill_newY = 0;


var bttn_newX = 0;
var bttn_newY = 0;


var circle_newX = 0;
var circle_newY = 0;


var square_newX = 0;
var square_newY = 0;

var tri_newX = 0;
var tri_newY = 0;


var form_newX = 0;
var form_newY = 0;







//selecting html elements to have draggable property and adding event listeners to them 
var card = document.querySelector('#card');
var bttn = document.querySelector('#bttn');
var circle = document.querySelector('.circle');
var square = document.querySelector('.square');
var triangle = document.querySelector('.triangle');
var form = document.querySelector('form');

var initial_cardX = 10;
var initial_cardY = 150;

var initial_bttnX = 10;
var initial_bttnY = 270;

var initial_circleX = 10;
var initial_circleY = 590;

var initial_squareX = 10;
var initial_squareY = 470;


var initial_triangleX = 10;
var initial_triangleY = 340;

var initial_formX = 10;
var initial_formY = 730;



//dictionary of start positions
var initialPositions = {
    'card': [initial_cardX, initial_cardY],
    'bttn':[initial_bttnX, initial_bttnY],
    'circle': [initial_circleX, initial_circleY],
    'square': [initial_squareX, initial_squareY],
    'triangle': [initial_triangleX, initial_triangleY],
    'form': [initial_formX, initial_formY]
};



//creating counter to keep track of items on the playground
var counter = 0;

//creating array of the html elements
var arr = [card, bttn, circle, square, triangle, form];
var dictionaryKeys = ['card', 'bttn', 'circle', 'square', 'triangle', 'form'];


console.log()


//setting initial value of currElem to null

var currElem = null;

//adding draggable ability for copies of elents 

function addDraggableForCopy(htmlElement){

    
    
    htmlElement.addEventListener('mousedown', click);



    function click(e){

        currElem = htmlElement;

        console.log('inside the event listener click');


        //add function for setting changes. 

        //get mouse position
        startX = e.clientX;
        startY = e.clientY;


        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', mouseUp);
    }

    function drag(e){

        console.log('inside the event listener drag');

        //calculates change in position
        X = startX - e.clientX ;
        Y = startY - e.clientY;
    
        //updates current mouse position
        startX = e.clientX;
        startY = e.clientY;

        //replace che with htmlelement
        htmlElement.style.top = (htmlElement.offsetTop - Y) + 'px';
        htmlElement.style.left = (htmlElement.offsetLeft - X) + 'px';
    }

    function mouseUp(e){

        
        var computed = window.getComputedStyle(htmlElement);
        var rightProperty = computed.right;

        //if out of playground, delete item
        if((parseInt(htmlElement.style.left) < 455) || (parseInt(rightProperty) < 300)){
            htmlElement.remove();
            currElem = null;
        }
        
        document.removeEventListener('mousemove', drag);

        //if the element is not within specified draggable area, then return to original position. 
    }



}







//creating function to add draggable functionality to a specific html element

function addDraggable(htmlElement, X, Y){
    
    htmlElement.addEventListener('mousedown', click);



    function click(e){

        //get mouse position
        startX = e.clientX;
        startY = e.clientY;


        /*to cut */
        copyhtmlElement = htmlElement.cloneNode(true);
        copyhtmlElement.classList.remove("start-card");

        currElem = copyhtmlElement;
        

        document.querySelector("#container").appendChild(copyhtmlElement);
        copyhtmlElement.style.left = X + 'px';
        copyhtmlElement.style.top = Y + 'px';

        for(var i = 0; i< arr.length; i++){
            if(arr[i] === htmlElement){
                console.log(initialPositions);
                console.log(initialPositions[dictionaryKeys[i]])
                console.log(initialPositions[dictionaryKeys[i]][0]);
                copyhtmlElement.style.left = initialPositions[dictionaryKeys[i]][0] + 'px';
                copyhtmlElement.style.top = initialPositions[dictionaryKeys[i]][1] + 'px';
                
            }
            
        }

        console.log(copyhtmlElement.style.top);
        
        console.log('done')





        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', mouseUp);
    }

    function drag(e){

        //calculates change in position
        X = startX - e.clientX ;
        Y = startY - e.clientY;
    
        //updates current mouse position
        startX = e.clientX;
        startY = e.clientY;

        //replace che with htmlelement
        copyhtmlElement.style.top = (copyhtmlElement.offsetTop - Y) + 'px';
        copyhtmlElement.style.left = (copyhtmlElement.offsetLeft - X) + 'px';
    }

    function mouseUp(e){

        
        var computed = window.getComputedStyle(copyhtmlElement);
        var rightProperty = computed.right;

        //add event listener to copied element
        addDraggableForCopy(copyhtmlElement);

        //console.log(rightValue); 

        if((parseInt(copyhtmlElement.style.left) < 455) || (parseInt(rightProperty) < 300)){

            // if(htmlElement === card){
            //     htmlElement.style.top = initial_cardY + 'px';
            // htmlElement.style.left = initial_cardX + 'px';

            // }
            // else if(htmlElement === bttn){
            //     htmlElement.style.top = initial_bttnY + 'px';
            // htmlElement.style.left = initial_bttnX + 'px';

            // }
            // else if(htmlElement === circle){
            //     htmlElement.style.top = initial_circleY + 'px';
            // htmlElement.style.left = initial_circleX + 'px';

            // }
            // else if(htmlElement === square){
            //     htmlElement.style.top = initial_squareY + 'px';
            // htmlElement.style.left = initial_squareX + 'px';

            // }
            // else if(htmlElement === triangle){
            //     htmlElement.style.top = initial_triangleY + 'px';
            // htmlElement.style.left = initial_triangleX + 'px';

            // }
            // else if(htmlElement === form){
            //     htmlElement.style.top = initial_formY + 'px';
            // htmlElement.style.left = initial_formX + 'px';

            // }

            copyhtmlElement.remove();



            


        }
        
        document.removeEventListener('mousemove', drag);

        //if the element is not within specified draggable area, then return to original position. 
    }



}

addDraggable(card, fill_newX, fill_newY);
addDraggable(bttn, bttn_newX, bttn_newY);
addDraggable(circle, circle_newX, circle_newY);
addDraggable(square, square_newX, square_newY);
addDraggable(triangle, tri_newX, tri_newY);
addDraggable(form, form_newX, form_newY);




//creating event listners for the setting configurations menu. currElem will be the current element clicked
document.getElementById('top-bttn').addEventListener('click', function(e) {
    console.log(e);

    var update = document.querySelector("#top-input").value;

    if(currElem === null){
        

    }
    else{
        currElem.style.top = update;
    }
    
});

document.getElementById('right-bttn').addEventListener('click', function(e) {

    var update = document.querySelector("#right-input").value;
    console.log(update);
    

    if(currElem === null){

    }
    else{

        currElem.style.left = "";
        currElem.style.right = update + "";

        var computed = window.getComputedStyle(currElem);
        var leftProperty = computed.left;
        if(parseInt(leftProperty) < 455){
            currElem.remove();
            currElem = null;
        }

        console.log("left property: " + leftProperty);
        
    }
});

document.getElementById('color-bttn').addEventListener('click', function(e) {

    var update = document.querySelector("#color-input").value;


    if(currElem === null){

    }
    else{
        currElem.style.backgroundColor = update;
    }
});

document.getElementById('width-bttn').addEventListener('click', function(e) {

    var update = document.querySelector("#width-input").value;


    if(currElem === null){

    }
    else{
        currElem.style.width = update;
    }
});

document.getElementById('height-bttn').addEventListener('click', function(e) {

    var update = document.querySelector("#height-input").value;


    if(currElem === null){

    }
    else{
        currElem.style.height = update;
    }
});










// card.addEventListener('mousedown', click);



// function click(e){

//     //get mouse position
//     startX = e.clientX;
//     startY = e.clientY;

//     document.addEventListener('mousemove', drag);
//     document.addEventListener('mouseup', mouseUp);
// }

// function drag(e){

//     //calculates change in position
//     card_newX = startX - e.clientX ;
//     card_newY = startY - e.clientY;

//     //updates current mouse position
//     startX = e.clientX;
//     startY = e.clientY;

//     card.style.top = (card.offsetTop - card_newY) + 'px';
//     card.style.left = (card.offsetLeft - card_newX) + 'px';
// }

// function mouseUp(e){
//     document.removeEventListener('mousemove', drag);
// }