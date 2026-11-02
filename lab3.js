document.addEventListener('DOMContentLoaded', () => {
    let count = 0;

    const itemCount = document.getElementById('item-count');
    const addItemBtn = document.getElementById('add-item');
    const add2Btn = document.getElementById('+2');
    const add3Btn = document.getElementById('+3');
    const resetBtn = document.getElementById('reset');

    function updateCount() {
        itemCount.textContent = count;
    }

    addItemBtn.addEventListener('click', () => {
        count += 1;
        updateCount();
    });

    add2Btn.addEventListener('click', () => {
        count += 2;
        updateCount();
    });

    add3Btn.addEventListener('click', () => {
        count += 3;
        updateCount();
    });

    resetBtn.addEventListener('click', () => {
        if (count > 0) {
            count = 0;
        }
        updateCount();
    });

    const calcBtn = document.getElementById('Calc');
    calcBtn.addEventListener('click', () => {
        const total = count * 10; // Assuming each item costs $10
        alert(`Total: $${total}`);
    });
});