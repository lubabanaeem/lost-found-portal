//storing items
let items = JSON.parse(localStorage.getItem("items")) || [];
displayitems();

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
    localStorage.setItem("items",JSON.stringify(items));



    //displaying items
    displayitems();

    //resettimg form
    form.reset();

});

document.getElementById("searchInput").addEventListener("input", function () {
    displayitems(this.value);
});

function displayitems(search = "") {
    const container = document.getElementById("itemsContainer");
    container.innerHTML = ""; // clear previous rows

    let rows = "";

for (let i = 0; i < items.length; i++) {

    let text = (items[i].name + items[i].category).toLowerCase();

    if (text.includes(search.toLowerCase())) {

        rows += `
            <tr>
                <td>${items[i].name}</td>
                <td>
                    <span class="badge ${items[i].type.toLowerCase()}">
                        ${items[i].type}
                    </span>
                </td>
                <td>${items[i].category}</td>
                <td>${items[i].location}</td>
                <td>${items[i].date}</td>
                <td>${items[i].contact}</td>
                <td>
                    <button class="btn-danger" onclick="deleteItem(${i})">Delete</button>
                </td>
            </tr>
        `;
    }
}

container.innerHTML = rows;
}

function deleteItem(index) {
    items.splice(index, 1); // remove 1 item at position index

    localStorage.setItem("items", JSON.stringify(items)); // update storage

    displayitems(); // re-render UI
}
