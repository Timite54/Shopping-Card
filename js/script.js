document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const cartTotalElement = document.getElementById('total')

    function updateTotalPrice() {
        let cartTotal = 0;

        cards.forEach(card => {
            const quantitySpan = card.querySelector('.quantity');
            const unitPriceEl = card.querySelector('.unit-price');

            const quantity = parseInt(quantitySpan.textContent);
            const unitPrice = parseFloat(unitPriceEl.textContent.replace(' $', ''));

            const itemTotal = quantity * unitPrice;
            cartTotal += itemTotal;
        });

        cartTotalElement.textContent = `${cartTotal.toFixed(2)} $`;
    }

    cards.forEach(card => {
        const plusBtn = card.querySelector('.fa-plus-circle');
        const minusBtn = card.querySelector('.fa-minus-circle');
        const quantitySpan = card.querySelector('.quantity');
        const trashBtn = card.querySelector('.fa-trash-alt');
        const heartBtn = card.querySelector('.fa-heart');
        const unitPriceEl = card.querySelector('.unit-price');

        // Extract unit price
        const unitPrice = parseFloat(unitPriceEl.textContent.replace(' $', ''));

        // Quantity adjustment
        plusBtn.addEventListener('click', () => {
            let currentQuantity = parseInt(quantitySpan.textContent);
            currentQuantity++;
            quantitySpan.textContent = currentQuantity;
            updateTotalPrice();
        });

        minusBtn.addEventListener('click', () => {
            let currentQuantity = parseInt(quantitySpan.textContent);
            if (currentQuantity > 0) {
                currentQuantity--;
                quantitySpan.textContent = currentQuantity;
                updateTotalPrice();
            }
        });

        // Delete item
        trashBtn.addEventListener('click', () => {
            // Reset quantity to 0
            quantitySpan.textContent = '0';
            updateTotalPrice();
        });

        // Like
        heartBtn.addEventListener('click', () => {
            heartBtn.classList.toggle('text-danger');
        });
    });

    // Initial total price calculation
    updateTotalPrice();
});