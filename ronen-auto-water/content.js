(function () {
    if (window.location.href === "https://pvr.ronencoin.tech/v/farm.php" || window.location.href === "https://pvr.ronencoin.tech/v/farm") {
        const style = document.createElement('style');
        style.textContent = `
            body {
            max-width: 100% !important;
            }

            .container {
            max-width: 98% !important;
            }

            .farm-grid {
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
            }

            .plot-box {
            width: 140px !important;
            height: 140px !important;
            margin-top: 40px;
            background: none !important;
            }
        `;
        document.head.appendChild(style);

        // Click the image
        const targetImg = document.querySelector('img.status-icon[src="images/icon_water.png"][title="Water Plant"]');
        if (targetImg) {
            targetImg.click();

            // Wait for modal and click "Yes"
            const interval = setInterval(() => {
            const yesButton = document.querySelector('#confirm-modal button[onclick="confirmProceed()"]');
            const modal = document.getElementById('confirm-modal');

            if (modal && modal.style.display !== 'none' && window.getComputedStyle(modal).visibility !== 'hidden') {
                if (yesButton) {
                yesButton.click();
                clearInterval(interval);
                }
            }
            }, 200);
        } else {
            const harvestButton = document.querySelector('button.harvest-button');
            if (harvestButton) {
                harvestButton.click();
            }
        }
    }
})();
