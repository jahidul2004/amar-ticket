function buttonClick(btnId) {
    let select = false;
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
    if (select == false) {
        document.getElementById(btnId).classList.add("bg-[#1bd300]");
        select = true;
        let newPrice = totalPrice + 550;
        let newGrand = grandTotal + 550;
        ticketContainer.appendChild(div);
        document.getElementById("total-price").innerText = newPrice;
        document.getElementById("grand-total").innerText = newGrand;
        return;
    } else if (select == true) {
        document.getElementById(btnId).classList.remove("bg-[#1bd300]");
        let rid = document.getElementById(`${btnId}ticket`);
        let newPrice = totalPrice - 550;
        let newGrand = grandTotal - 550;
        ticketContainer.removeChild(rid);
        document.getElementById("total-price").innerText = newPrice;
        document.getElementById("grand-total").innerText = newGrand;
        select = false;
        return;
    }
}

document.getElementById("coupon-apply").addEventListener("click", function () {
    let coupon = document.getElementById("coupon-input").value;
    if (coupon === "tsi") {
        let grandTotal = document.getElementById("grand-total").innerText;
        let newGrand = grandTotal - 50;
        document.getElementById("grand-total").innerText = newGrand;
        document.getElementById("coupon-input").value = "";

        document.getElementById("discount-line").classList.remove("hidden");
        document.getElementById("discount-line").classList.add("flex");
        document.getElementById("discount-amount").innerText = 50;
        document.getElementById("coupon-apply").classList.add("hidden");
    }
});
