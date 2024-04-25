
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
    data[0].x.push(itemName); // graphs
    data[0].y.push(itemPrice);
    plot(userBudget);
    totalSpent += itemPrice;
    var remainingBudget = userBudget - totalSpent;
    var budgetDisplay = document.getElementById('budgetDisplay');
    budgetDisplay.textContent = "Remaining budget: $" + remainingBudget.toFixed(2);


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

