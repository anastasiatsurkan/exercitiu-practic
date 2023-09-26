const products = [
    {
        name: "Floral satin dress",
        image: floraldress.png,
        category: "dresses",
        price: 566,
        originCountry: { name: "Italy", code: "IT" },
    },
    {
        name: "Tailored wide leg trousers",
        image: trousers.png,
        category: "office suits",
        price: 854,
        originCountry: { name: "United Kingdom", code: "UK" },
    },
    {
        name: "Linen wrap suit blazzer",
        image: blazer.png,
        category: "office suits",
        price: 1055,
        originCountry: { name: "Italy", code: "IT" },
    },
    {
        name: "Sleeveless plunge neck mini dress",
        image: dress.png,
        category: "dresses",
        price: 786,
        originCountry: { name: "China", code: "CN" },
    },
    {
        name: "Faux hooded coat",
        image: coat.png,
        category: "coats",
        price: 1720,
        originCountry: { name: "United Kingdom", code: "UK" },
    },
]

function renderProducts() {
    arr.forEach(product => {
        const div = document.createElement('div');
        const h2 = document.createElement('h2');
        h2.appendChild(document.createTextNode("Nume: " + product.name))
        image.setAttribute("src", "./assets/media/" + product.image);

        const editBtn = document.createElement('button');
        editBtn.appendChild(document.createTextNode("Edit"));
        editBtn.addEventListener("click", () => editProduct(product));

        const removeBtn = document.createElement('button');
        removeBtn.appendChild(document.createTextNode("Remove"));

        div.appendChild(h2);
        div.appendChild(editBtn);
        div.appendChild(removeBtn);

        container.appendChild(div);
    });

}

function editProduct(product) {
    const name = prompt("Introdu noul numele: ", product.name);
    const price = prompt("Introdu noul preț: ", product.price);

    renderProducts()
}

function removeProduct(product) {
    getProductByName(product.name);

    renderProducts();
}

function addProduct() {
    const name = prompt("Introduceti numele:");
    const image = prompt("Introduceti denumirea imaginii:");
    const category = prompt("Introduceti categoria:");
    const price = prompt("Introduceti prețul:");
    const originCountry = prompt("Introduceti țara de origine:");


    addProduct({
        name: name,
        image: image,
        category: category,
        price: price,
        originCountry: {
            name: name,
            code: code,
        }
    });

    renderProducts(arr);
}

function findMostExpensive() {
    let mostExpensive = products[0];

    products.forEach((product) => {
        if (product.price > mostExpensive.price) {
            mostExpensive = product;
        }
    });

    renderProducts()
}

function findTheCheapest() {
    let theCheapest = products[0];

    products.forEach((product) => {
        if (product.price < theCheapest.price) {
            theCheapest = product;
        }
    });

    renderProducts()
}

function filterByCategory() {
    const category = prompt("Introdu categoria1:");
    const productsByCategory = filterByCategory(category);

    renderProducts()
}


