var box1 = document.querySelector("#task1Box");
var box2 = document.querySelector("#task2Box");
var box3 = document.querySelector("#task3Box");
var box4 = document.querySelector("#task4Box");
var box5 = document.querySelector("#task5Box");
var task1 = document.querySelector("#task1");
var task2 = document.querySelector("#task2");
var task3 = document.querySelector("#task3");
var task4 = document.querySelector("#task4");
var task5 = document.querySelector("#task5");

window.onload = function() {
    box1.addEventListener("input", function() {chrome.storage.sync.set({b1: box1.checked})});
    box2.addEventListener("input", function() {chrome.storage.sync.set({b2: box2.checked})});
    box3.addEventListener("input", function() {chrome.storage.sync.set({b3: box3.checked})});
    box4.addEventListener("input", function() {chrome.storage.sync.set({b4: box4.checked})});
    box5.addEventListener("input", function() {chrome.storage.sync.set({b5: box5.checked})});

    task1.addEventListener("focusout", function() {chrome.storage.sync.set({t1: task1.value})});
    task2.addEventListener("focusout", function() {chrome.storage.sync.set({t2: task2.value})});
    task3.addEventListener("focusout", function() {chrome.storage.sync.set({t3: task3.value})});
    task4.addEventListener("focusout", function() {chrome.storage.sync.set({t4: task4.value})});
    task5.addEventListener("focusout", function() {chrome.storage.sync.set({t5: task5.value})});

    chrome.storage.sync.get({b1:false}, function(items) {box1.checked = items.b1; updateBox(box1)});
    chrome.storage.sync.get({b2:false}, function(items) {box2.checked = items.b2; updateBox(box2)});
    chrome.storage.sync.get({b3:false}, function(items) {box3.checked = items.b3; updateBox(box3)});
    chrome.storage.sync.get({b4:false}, function(items) {box4.checked = items.b4; updateBox(box4)});
    chrome.storage.sync.get({b5:false}, function(items) {box5.checked = items.b5; updateBox(box5)});

    chrome.storage.sync.get({t1:"Task #1 (click to edit)"}, function(items) {task1.value = items.t1;});
    chrome.storage.sync.get({t2:"Task #2 (click to edit)"}, function(items) {task2.value = items.t2;});
    chrome.storage.sync.get({t3:"Task #3 (click to edit)"}, function(items) {task3.value = items.t3;});
    chrome.storage.sync.get({t4:"Task #4 (click to edit)"}, function(items) {task4.value = items.t4;});
    chrome.storage.sync.get({t5:"Task #5 (click to edit)"}, function(items) {task5.value = items.t5;});

    chrome.storage.sync.get({nightMode:false}, function(items) {
        if (items.nightMode) {
            var i,
                tags = document.getElementsByTagName("*"),
                total = tags.length;
            for ( i = 0; i < total; i++ ) {
              tags[i].style.background = '#444';
              tags[i].style.color = 'white';
            }
        }
    });
}

let checksArray = [box1, box2, box3, box4, box5];
let textArray = [task1, task2, task3, task4, task5]

checksArray.forEach(function(elem) {

    updateBox(elem);

    elem.addEventListener("input", function() {

        value = elem.checked

        if (value) {
            elem.parentElement.style.opacity = '.3';
            elem.nextElementSibling.style.textDecoration = 'line-through';
            elem.nextElementSibling.setAttribute("disabled", "disabled");
        } else {
            elem.parentElement.style.opacity = '.9';
            elem.nextElementSibling.style.textDecoration = 'none';
            elem.nextElementSibling.removeAttribute("disabled");
        }

    });

});

function updateBox(elem) {

    value = elem.checked

    if (value) {
        elem.parentElement.style.opacity = '.3';
        elem.nextElementSibling.style.textDecoration = 'line-through';
        elem.nextElementSibling.setAttribute("disabled", "disabled");
    } else {
        elem.parentElement.style.opacity = '.9';
        elem.nextElementSibling.style.textDecoration = 'none';
        elem.nextElementSibling.removeAttribute("disabled");
    }
}

textArray.forEach(function(elem) {
    elem.addEventListener("click", function() {
        elem.select();
    });
});