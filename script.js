/*
THIS IS AWESOME AND BEN GRADECK PROGRAMMED DA WHOLE THING!!!
GIVE ME A 100% please please please please please please please please please please please please please
please please please please please please please please please please please please please please please
please please please please please please please pleasepleaseplease please pleaseplease pleaseplease please
*/
var data =[{
    x: [],
    y: [],
    type: 'bar'
}];


function main_driver(e) {
    
    
    addItem(e);
    //data[1].push(5);
    //add("bemmy");
    //plotStuff();
    //Plotly.newPlot("myPlot", data, layout);
}

function addItem(e){
    e.preventDefault();
    var itemName = document.getElementById("itemName");
    var itemPrice = document.getElementById("itemPrice");
    data[0].x.push(itemName.value);
    data[0].y.push(parseInt(itemPrice.value));
    plotStuff();


    
}

function addMoney(){
    //this needs to keep track if there is 50 dollars and 50/n is greater than the amount lft
    //you need to split the money so like if it totally covers it
    //you need to take the excess and distribute it to other things
}

function plotStuff(){
    const layout = {
        xaxis: {title: "Item/s" },
        yaxis: { title: "Price" },
        title: "Items to budgetFor"
    };
    Plotly.newPlot("myPlot", data, layout);
}

