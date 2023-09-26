const products = [
    {
        name: "Floral satin dress",
        image: "floraldress.png",
        category: "dresses",
        price: "24$",
        originCountry: { name: "Italy", code: "IT" },
        description: "Satin-style fabric: glossy, drapey and silky-smooth. Main: 100% Polyester."
    },
    {
        name: "Tailored wide leg trousers",
        image: "trousers.png",
        category: "office suits",
        price: "37$",
        originCountry: { name: "United Kingdom", code: "UK" },
        description: "Stretch, plain-woven fabric. Main: 77% Polyester, 19% Viscose, 4% Elastane."
    },
    {
        name: "Linen wrap suit blazzer",
        image: "blazer.png",
        category: "office suits",
        price: "55$",
        originCountry: { name: "Italy", code: "IT" },
        description: "Linen-mix fabric: soft and lightweight. Main: 79% Viscose, 21% Linen."
    },
    {
        name: "Sleeveless plunge neck mini dress",
        image: "dress.png",
        category: "dresses",
        price: "32$",
        originCountry: { name: "China", code: "CN" },
        description: "Plain-woven fabric. Main: 93% Polyester, 7% Elastane."
    },
    {
        name: "Faux hooded coat",
        image: "coat.png",
        category: "coats",
        price: "76$",
        originCountry: { name: "United Kingdom", code: "UK" },
        description: "Faux suede: soft, textured feel. Borg lining. Main: 100% Polyester, Faux Fur: 100% Polyester."
    },
]

const productList = document.getElementById('productList');


function renderProducts(items) {
    productList.innerHTML = "";
    items.forEach(product => {
        const div = document.createElement('div');
        div.setAttribute("class", "card");
        const leftSide = document.createElement('div');
        leftSide.setAttribute("class", "left");
        const rightSide = document.createElement('div');
        rightSide.setAttribute("class", "right");

        const image = document.createElement('img');
        image.setAttribute("src", "./assets/media/" + product.image);

        const productName = document.createElement('h2');
        productName.appendChild(document.createTextNode(product.name));

        const productPrice = document.createElement('h2');
        productPrice.appendChild(document.createTextNode(product.price));

        const productCategory = document.createElement('h4');
        productCategory.appendChild(document.createTextNode("Category: " + product.category));

        const productCountry = document.createElement('h4');
        productCountry.appendChild(document.createTextNode("Country: " + product.originCountry.name + " " + product.originCountry.code));

        const p = document.createElement('p')
        p.appendChild(document.createTextNode(product.description));

        const editBtn = document.createElement('button');
        editBtn.appendChild(document.createTextNode("Edit"));
        editBtn.addEventListener("click", () => editProduct(product));
        editBtn.setAttribute("class", "edit");

        const removeBtn = document.createElement('button');
        removeBtn.appendChild(document.createTextNode("Remove"));
        removeBtn.addEventListener("click", () => removeProduct(product));
        removeBtn.setAttribute("class", "remove");

        div.appendChild(leftSide);
        div.appendChild(rightSide);

        leftSide.appendChild(image);

        rightSide.appendChild(productName);
        rightSide.appendChild(productPrice);
        rightSide.appendChild(productCategory);
        rightSide.appendChild(productCountry);
        rightSide.appendChild(p);
        rightSide.appendChild(editBtn);
        rightSide.appendChild(removeBtn);


        productList.appendChild(div);
    });

}

function editProduct(product) {
    const newName = prompt("Introdu noul nume: ", product.name);
    const newPrice = prompt("Introdu noul preț: ", product.price);
    const newProduct = {
        ...product,
        name: newName,
        price: newPrice,
    }

    const productIndex = products.findIndex(item => item.name === product.name);

    products.splice(productIndex, 1, newProduct);


    renderProducts(products);
}

function removeProduct(product) {
    const canDelete = confirm("Esti sigur ca vrei sa stergi acest produs?");

    if (canDelete) {
        const productIndex = products.findIndex(item => item.name === product.name);

        products.splice(productIndex, 1);

        renderProducts(products);
    }
}

function addNewProduct() {
    const name = prompt("Introduceti numele:");
    const category = prompt("Introduceti categoria:");
    const price = prompt("Introduceti prețul:");
    const originCountryName = prompt("Introduceti țara de origine:");
    const originCountryCode = prompt("Introduceti codul țarii de origine:");

    const newProduct = {
        name: name,
        image: "default.jpg",
        category: category,
        price: price,
        originCountry: { name: originCountryName, code: originCountryCode },
    }

    products.unshift(newProduct);

    renderProducts(products);
}

function findMostExpensive() {
    let mostExpensive = products[0];

    products.forEach((product) => {
        if (product.price > mostExpensive.price) {
            mostExpensive = product;
        }
    });

    return mostExpensive;
}

function showMostExpensive() {
    let mostExpensive = findMostExpensive();

    renderProducts([mostExpensive]);
}

function showTheCheapest() {
    let theCheapest = products[0];

    products.forEach((product) => {
        if (product.price < theCheapest.price) {
            theCheapest = product;
        }
    });

    renderProducts([theCheapest])
}

function filterByCategory(category) {
    return products.filter(product => product.category === category);
}

function showByCategory() {
    const category = prompt("Introdu categoria:");
    const filteredCategory = filterByCategory(category);

    renderProducts(filteredCategory);
}

function resetPage() {
    renderProducts(products);
}


renderProducts(products);



