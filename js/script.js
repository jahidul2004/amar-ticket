function buttonClick(btnId) {
    let btn = document.getElementById(btnId);
    let totalPrice = parseInt(document.getElementById("total-price").innerText);
    let grandTotal = parseInt(document.getElementById("grand-total").innerText);
    let div = document.createElement("div");
    div.innerHTML = `
        <div class="flex justify-between">
            <p>${btnId}</p>
            <p>Economy</p>
            <p>550</p>
        </div>
        `;
    div.setAttribute("id", `${btnId}ticket`);
    let ticketContainer = document.getElementById("selected-ticket");

    // Check if the button is selected
    let isSelected = btn.getAttribute("data-selected") === "true";

    if (!isSelected) {
        // If seat is not selected
        btn.classList.add("bg-[#1bd300]");
        btn.setAttribute("data-selected", "true");
        let newPrice = totalPrice + 550;
        let newGrand = grandTotal + 550;
        ticketContainer.appendChild(div);
        document.getElementById("total-price").innerText = newPrice;
        document.getElementById("grand-total").innerText = newGrand;
    } else {
        // If seat is selected
        btn.classList.remove("bg-[#1bd300]");
        btn.setAttribute("data-selected", "false");
        let rid = document.getElementById(`${btnId}ticket`);
        let newPrice = totalPrice - 550;
        let newGrand = grandTotal - 550;
        ticketContainer.removeChild(rid);
        document.getElementById("total-price").innerText = newPrice;
        document.getElementById("grand-total").innerText = newGrand;
    }
}

document.getElementById("coupon-apply").addEventListener("click", function () {
    let coupon = document.getElementById("coupon-input").value;
    if (coupon === "tsi") {
        let grandTotal = parseInt(
            document.getElementById("grand-total").innerText
        );
        let newGrand = grandTotal - 50;
        document.getElementById("grand-total").innerText = newGrand;
        document.getElementById("coupon-input").value = "";

        document.getElementById("discount-line").classList.remove("hidden");
        document.getElementById("discount-line").classList.add("flex");
        document.getElementById("discount-amount").innerText = 50;
        document.getElementById("coupon-apply").classList.add("hidden");
    } else {
        alert("Invalid Coupon Code");
    }
});

document.getElementById("next").addEventListener("click", function (event) {
    event.preventDefault();
    let fullName = document.getElementById("full-name").value;
    let phoneNumber = document.getElementById("phone-number").value;
    let email = document.getElementById("email").value;

    if (fullName === "" || phoneNumber === "" || email === "") {
        alert("Please fill all the fields");
    } else {
        my_modal_1.showModal();
    }
});

function reloadPage() {
    location.reload();
}
