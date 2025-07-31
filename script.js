let products = JSON.parse(localStorage.getItem('products')) || [];

function addProduct() {
  const name = document.getElementById("product-name").value;
  const price = parseFloat(document.getElementById("product-price").value);

  if (name && price > 0) {
    products.push({ name, price });
    localStorage.setItem("products", JSON.stringify(products));
    document.getElementById("product-name").value = "";
    document.getElementById("product-price").value = "";
    displayProducts();
  } else {
    alert("Enter valid name and price!");
  }
}

function deleteProduct(index) {
  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));
  displayProducts();
}

function displayProducts() {
  const productList = document.getElementById("products");
  productList.innerHTML = "";

  let total = 0;
  products.forEach((prod, i) => {
    total += prod.price;

    const li = document.createElement("li");
    li.innerHTML = `
      ${prod.name} - ₹${prod.price.toFixed(2)}
      <button onclick="deleteProduct(${i})">X</button>
    `;
    productList.appendChild(li);
  });

  document.getElementById("total").innerText = total.toFixed(2);
}

window.onload = displayProducts;
