
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



//creating function to add draggable functionality to a specific html element

function addDraggable(htmlElement, X, Y){
    htmlElement.addEventListener('mousedown', click);



    function click(e){

        //get mouse position
        startX = e.clientX;
        startY = e.clientY;

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

        htmlElement.style.top = (htmlElement.offsetTop - Y) + 'px';
        htmlElement.style.left = (htmlElement.offsetLeft - X) + 'px';
    }

    function mouseUp(e){
        if(parseInt(htmlElement.style.left) < 756){

            if(htmlElement === card){
                htmlElement.style.top = initial_cardY + 'px';
            htmlElement.style.left = initial_cardX + 'px';

            }
            else if(htmlElement === bttn){
                htmlElement.style.top = initial_bttnY + 'px';
            htmlElement.style.left = initial_bttnX + 'px';

            }
            else if(htmlElement === circle){
                htmlElement.style.top = initial_circleY + 'px';
            htmlElement.style.left = initial_circleX + 'px';

            }
            else if(htmlElement === square){
                htmlElement.style.top = initial_squareY + 'px';
            htmlElement.style.left = initial_squareX + 'px';

            }
            else if(htmlElement === triangle){
                htmlElement.style.top = initial_triangleY + 'px';
            htmlElement.style.left = initial_triangleX + 'px';

            }
            else if(htmlElement === form){
                htmlElement.style.top = initial_formY + 'px';
            htmlElement.style.left = initial_formX + 'px';

            }

            


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