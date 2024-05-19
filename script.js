document.addEventListener('DOMContentLoaded', () => {
    const addToCartButton = document.getElementById('add-to-cart');
    const notification = document.getElementById('notification');

    if (addToCartButton) {
        addToCartButton.addEventListener('click', () => {
            showNotification();
        });
    }

    function showNotification() {
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
});
