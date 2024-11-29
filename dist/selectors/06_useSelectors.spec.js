"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
// Import selektorů ze souboru
const _06_selectorLibrary_1 = require("./06_selectorLibrary");
(0, test_1.test)("Import selektorů z TS souboru a použití", async ({ page }) => {
    await page.locator(_06_selectorLibrary_1.storeSelectors.FIELD_USERNAME).fill('admin');
    await page.locator(_06_selectorLibrary_1.storeSelectors.FIELD_PASSWORD).fill('password123');
    await page.locator(_06_selectorLibrary_1.storeSelectors.BUTTON_LOGIN).click();
});
//# sourceMappingURL=06_useSelectors.spec.js.map