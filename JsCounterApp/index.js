let count = 0;


const countHeader = document.getElementById("count");
const countAddBtn = document.getElementById("add");
const countSubtractBtn = document.getElementById("subtract");

countHeader.innerText = count

countAddBtn.addEventListener("click", () => {

    count++;
    countHeader.innerText = count;
});

countSubtractBtn.addEventListener("click", () =>{
    count--;
    //countHeader.innerText = count;
    countHeader.innerHTML = count;

});

/*
-find the html element
-tell the element to listen to an event
-execute logic when event is triggered

*/