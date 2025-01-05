
let tabContents = document.getElementsByClassName('tab-content');

// console.log("tabContents", tabContents);

let tabLists = document.getElementsByTagName("li")


console.log("tabContents", tabContents);


function changeTab(e, tabName) {

    // console.log("tabName", tabName);


    for (let i = 0; i < tabContents.length; i++) {

        tabContents[i].classList.remove("active");

        //styling the clicked link
        tabLists[i].style.backgroundColor = "gray"
        tabLists[i].style.color = "white"
        tabLists[i].style.border = "1px solid gray"

        // console.log("tabContents[i].classList", tabContents[i]);

    }


    //Since ID is unique, we can now use each ID to add back the class once we clicked
    document.getElementById(tabName).className += " active",

        e.currentTarget.style.backgroundColor = "white"
    e.currentTarget.style.color = "black"
    e.currentTarget.style.borderBottom = "none"




}
