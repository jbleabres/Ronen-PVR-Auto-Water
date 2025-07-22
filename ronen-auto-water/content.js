(function () {
    const url = window.location.href;
    if (url !== "https://pvr.ronencoin.tech/v/farm.php" && url !== "https://pvr.ronencoin.tech/v/farm") return;

    const style = document.createElement('style');
    style.textContent = `
        body { max-width: 100% !important; }
        .container { max-width: 98% !important; }
        .farm-grid { grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); }
        .plot-box {
            width: 140px !important;
            height: 140px !important;
            margin-top: 40px;
            background: none !important;
        }
    `;
    document.head.appendChild(style);

    const water = document.querySelector('img.status-icon[src="images/icon_water.png"][title="Water Plant"]');
    const jihoz = document.querySelector('img.status-icon[src="images/icon_jihoz.png"][title="Use Jihoz"]');
    const harvest = document.querySelector('button.harvest-button');

    const clickYes = () => {
        const interval = setInterval(() => {
            const modal = document.getElementById('confirm-modal');
            const yes = document.querySelector('#confirm-modal button[onclick="confirmProceed()"]');
            if (modal && modal.style.display !== 'none' && getComputedStyle(modal).visibility !== 'hidden' && yes) {
                yes.click();
                clearInterval(interval);
            }
        }, 200);
    };

    if (water) {
        water.click();
        clickYes();
    } else if (jihoz) {
        jihoz.click();
        clickYes();
    } else if (harvest) {
        harvest.click();
    }
})();
