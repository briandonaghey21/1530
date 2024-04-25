
var data =[{
    x: [],
    y: [],
    type: 'bar'
}];

var totalSpent  = 0;
function main_driver(e) 
{
    var userBudget = parseFloat(document.getElementById("budget").value); 
    if (isNaN(userBudget)  || userBudget < 0) 
    {
        alert("Please enter a valid budget.");
        return;
    }
    var itemName = document.getElementById("itemName").value;
    var itemPrice = parseFloat(document.getElementById("itemPrice").value);
    if (!itemName)
    {
        alert("Please enter an expense name");
        return;
    }
    if (isNaN(itemPrice) || itemPrice < 0) 
    {
        alert("Please enter a proper price");
        return;
    }
   

    var remainingBudget = userBudget - totalSpent;
    if (itemPrice > remainingBudget) 
    {
        alert("This item exceeds your remaining budget.");
        return;
    }
    totalSpent += itemPrice;
    remainingBudget -= itemPrice;
    var budgetDisplay = document.getElementById('budgetDisplay');
    budgetDisplay.textContent = "Remaining budget: $" + remainingBudget.toFixed(2); // add the additional cents

    data[0].x.push(itemName); // graphs
    data[0].y.push(itemPrice);
    plot(userBudget);
    
}

function plot(userBudget) 
{
    const layout = {
        xaxis: { title: "Items"},
        yaxis: {
            title: "Price",
            range: [0, userBudget] 
        },
        title: "Items to Budget For"
    };
    Plotly.newPlot("myPlot", data, layout);
}
 // We could use node.js to implement a permanent file that could be written to containing all the data thats ever been written in this app. However, in two sprint meetings we could not achieve this.
function downloadTextFile() 
{
    var userBudget = parseFloat(document.getElementById("budget").value); 
    var remainingBudget = userBudget - totalSpent; 
    var text = "Budget Details:\n";
    text += "Initial Budget: $" + userBudget.toFixed(2) + "\n";
    text += "Total Spent: $" + totalSpent.toFixed(2) + "\n";
    text += "Remaining Budget: $" + remainingBudget.toFixed(2) + "\n";
    text += "Items Purchased:\n";

    for (let i = 0; i < data[0].x.length; i++) 
        text += data[0].x[i] + " - $" + data[0].y[i].toFixed(2) + "\n"; // go through the graph
    var blob = new Blob([text], {type: 'text/plain'}); // we have to use a blob to write to a text file. We can't write individuall and just have to write a big string.

    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "budget-details-for-current_user.txt";
    document.body.appendChild(a);
    a.click();
}
