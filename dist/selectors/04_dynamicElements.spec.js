"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)("Dynamické prvky na stránce", async ({ page }) => {
    const dynamicElement = '#dynamic-element';
    // Čeká, dokud element odpovídající selektoru není přítomen v DOM
    await page.waitForSelector(dynamicElement);
});
//# sourceMappingURL=04_dynamicElements.spec.js.map