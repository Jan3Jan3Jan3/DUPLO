let tasks = localStorage.getItem('tasks');
let descriptions = localStorage.getItem('descriptions')
let labels = localStorage.getItem('labels');
let dates = localStorage.getItem('dates');
let finished = localStorage.getItem('finished');

window.onload = function () {
    if (tasks) {
        showButtons();
    } else {
        let tasks = "";
        localStorage.setItem('tasks', tasks);
        let descriptions = "";
        localStorage.setItem('descriptions', descriptions);
        let labels = "";
        localStorage.setItem('labels', labels);
        let dates = "";
        localStorage.setItem('dates', dates);
        let finished = "";
        localStorage.setItem('finished', finished);
    }
};

function submitTask() {
    var x = document.getElementById("frm1");
    if(task = "")
    {

    }
    else
    {
        let task = x.elements[0].value;
        const tasks = localStorage.getItem('tasks');
        let result = tasks.concat("#", task)
        localStorage.setItem('tasks', result);
        let description = x.elements[1].value;
        let descriptions = localStorage.getItem('descriptions');
        result = descriptions.concat("#", description)
        localStorage.setItem('descriptions', result);
        let label = x.elements[2].value;
        let labels = localStorage.getItem('labels');
        result = labels.concat("#", label)
        localStorage.setItem('labels', result);
        let date = x.elements[3].value;
        let dates = localStorage.getItem('dates');
        result = dates.concat("#", date)
        localStorage.setItem('dates', result);
        let finished = localStorage.getItem('finished');
        result = finished.concat("#0")
        localStorage.setItem('finished', result);
        showButtons();
        x.reset();
    }
}

function showButtons() {
    const tasks = localStorage.getItem('tasks');
    const descriptions = localStorage.getItem('descriptions')
    const labels = localStorage.getItem('labels');
    const dates = localStorage.getItem('dates');
    const finished = localStorage.getItem('finished');
    const split = tasks.split("#");
    const splitlabels = labels.split("#");
    const splitdates = dates.split("#");
    const splitfinished = finished.split("#");
    var container1 = document.getElementById("container1");
    let datesarray = [];
    for (let i = 1; i < splitdates.length; i++) {
        datesarray.push(new Date(splitdates[i]))
    }
    let finishedarray = [];
    for (let i = 1; i < splitdates.length; i++) {
        finishedarray.push(splitfinished[i])
    }
    let indices = [];
    for (let i = 1; i < splitdates.length; i++) {
        indices.push(i);
    }
    const map = finishedarray.map((item, i) => [item, datesarray[i], indices[i]]);
    const sorted_map = map.sort(sortFunction);
    let aux = sorted_map.length;
    for (let i = 0; i < sorted_map.length; i++) {
        if (sorted_map[i][0] === '1') {
            aux = i;
            break;
        }
    }
    const unfinishedmap = sorted_map.slice(0, aux);
    const finishedmap = sorted_map.slice(aux, sorted_map.length);
    const unfinished_sorted = unfinishedmap.sort(compareSecondColumn);
    const finished_sorted = finishedmap.sort(compareSecondColumn);
    const order = [];
    for (let i = 0; i < unfinished_sorted.length; i++) {
        order.push(unfinished_sorted[i][2]-1);
    }
    for (let i = 0; i < finished_sorted.length; i++) {
        order.push(finished_sorted[i][2]-1);
    }
    var array = sortWithIndeces(datesarray);
    const look = array.sortIndices;
    while (container1.firstChild) {
        container1.removeChild(container1.firstChild);
    }
    var container1 = document.getElementById("container2");
    while (container2.firstChild) {
        container2.removeChild(container2.firstChild);
    }
    var container3 = document.getElementById("container3");
    while (container3.firstChild) {
        container3.removeChild(container3.firstChild);
    }
    var container4 = document.getElementById("container4");
    while (container4.firstChild) {
        container4.removeChild(container4.firstChild);
    }
    for (let i = 1; i < split.length; i++) {
        var buttons1 = document.getElementById("container1");
        var button1 = document.createElement("button");
        button1.textContent = split[order[i-1] + 1];
        buttons1.appendChild(button1);
    }
    for (let i = 1; i < split.length; i++) {
        var buttons2 = document.getElementById("container2");
        var button1 = document.createElement("button");
        button1.textContent = splitlabels[order[i-1] + 1];
        buttons2.appendChild(button1);
    }
    for (let i = 1; i < split.length; i++) {
        var buttons3 = document.getElementById("container3");
        var button1 = document.createElement("button");
        button1.textContent = splitdates[order[i-1] + 1];
        buttons3.appendChild(button1);
    }
    for (let i = 1; i < split.length; i++) {
        var buttons4 = document.getElementById("container4");
        var button4 = document.createElement("button");
        if (splitfinished[order[i-1] + 1] === "0") {
            button4.style.background = 'orange';
            button4.textContent = 'Niet Afgerond';
        }
        else
        {
            button4.style.background = 'green';
            button4.textContent = 'Afgerond';
        }
        buttons4.appendChild(button4);
        const int = order[i - 1] + 1
        button4.onclick = function () { changeColor(int ) }; 
    }
}
function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}
function compareSecondColumn(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }
}
function sortWithIndeces(toSort) {
    for (var i = 0; i < toSort.length; i++) {
        toSort[i] = [toSort[i], i];
    }
    toSort.sort(function (left, right) {
        return left[0] < right[0] ? -1 : 1;
    });
    toSort.sortIndices = [];
    for (var j = 0; j < toSort.length; j++) {
        toSort.sortIndices.push(toSort[j][1]);
        toSort[j] = toSort[j][0];
    }
    return toSort;
}

function changeColor(int)
{
    let finished = localStorage.getItem('finished');
    let check1 = int*2 - 1
    let check = finished[int*2-1]
    if (check === "0") {
        finished = setCharAt(finished,(int*2-1),"1")
    }
    else {
        finished = setCharAt(finished, (int * 2 - 1), "0")
    }
    localStorage.setItem('finished', finished);
    showButtons();
}

function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
}