let purchaseBtn = document.querySelectorAll(".btn-primary");
let cartList = document.getElementById("cart-list");

purchaseBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let itemName = btn.getAttribute("data-name");
    let itemPrice = btn.getAttribute("data-price");
    let newItem = document.createElement("li");
    newItem.textContent = `${itemName} ${itemPrice}`;

    let cancelButton = document.createElement("button");
    cancelButton.textContent = "Remove from cart";
    cancelButton.classList.add("cancel-btn", "btn", "btn-danger");
    cancelButton.addEventListener("click", function () {
      cartList.removeChild(newItem);
    });
    newItem.appendChild(cancelButton);
    cartList.appendChild(newItem);
  });
});
