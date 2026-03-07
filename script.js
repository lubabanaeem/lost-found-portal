//storing items
let items = [];

// getting form
const form = document.getElementById("report-form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    //getting values
    const type = document.getElementById("type").value;
    const name = document.getElementById("name").value;
    const category = document.getElementById("category").value;
    const location = document.getElementById("location").value;
    const date = document.getElementById("date").value;
    const contact = document.getElementById("contact").value;

    //creating object
    let item = {
        type: type,
        name: name,
        category: category,
        location: location,
        date: date,
        contact: contact
    };

    //pushing items into my array
    items.push(item);



    //displaying items
    displayitems();

    //resettimg form
    form.reset();

});

function displayitems() {
    const container = document.getElementById("itemsContainer");
    container.innerHTML = ""; // clear previous rows

    for (let i = 0; i < items.length; i++) {
        container.innerHTML += `
            <tr>
                <td>${items[i].name}</td>
                <td>${items[i].type}</td>
                <td>${items[i].category}</td>
                <td>${items[i].location}</td>
                <td>${items[i].date}</td>
                <td>${items[i].contact}</td>
            </tr>
         `;

    }
}
