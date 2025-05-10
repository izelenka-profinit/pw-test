/*
Rekapitulace zadání:

test na navigaci po stránce https://www.principal.tech/
 
Scénář na příště bude obsahovat:
Navigaci na Homepage
Navigaci do všech podkategorií kategorie "Portfolio"
Navigaci na About Us
Navigaci na Blog
Navigaci do všech podkategoriích kategorie "Pro koho děláme"
Navigaci na Kariéru
Zadání také obsahuje čekání na načtení stránek a printscreen na každé stránce NEBO screen po dokončení animace

Spuštění:
npx playwright test tests/testNavigacePrincipal.spec.ts --headed

*/

import { expect, test } from "@playwright/test"
import dotenv from 'dotenv'
dotenv.config();

test.describe("Principal Navigation Test Suite", () => {
    // Navigace na Homepage
    test("Homepage Navigation", async ({ page }) => {
        await test.step("Otevřít stránku", async () => {
            const url = 'https://www.principal.tech/'
            await page.goto(url, { waitUntil: 'load', timeout: 10_000 })
            // await page.waitForLoadState ('load', { timeout: 10_000 })
            await page.waitForTimeout(3_000)
        })

    // Potvrzení Cookies
    // test("Cookies Acceptation", async ({ page }) => {
    //    const cookies = 'input[name="login-button"]'
    //    await page.locator(cookies).first().click()

    // Navigace do podkategorie "Produkty"
        await test.step("Otevřít Produkty", async () => {
            const url2 = 'https://www.principal.tech/cz/portfolio/produkty'
            await page.goto(url2, { waitUntil: 'load', timeout: 10_000 })
            // await page.waitForLoadState ('load', { timeout: 10_000 })
            await page.waitForTimeout(3_000)
        }) 
    // Navigace do podkategorie "Služby"
        await test.step("Otevřít Služby", async () => {
            const url3 = 'https://www.principal.tech/cz/portfolio/sluzby'
            await page.goto(url3, { waitUntil: 'load', timeout: 10_000 })
            // await page.waitForLoadState ('load', { timeout: 10_000 })
            await page.waitForTimeout(3_000)
        }) 
        // Navigace do podkategorie "Řešení"
        await test.step("Otevřít Řešení", async () => {
            const url4 = 'https://www.principal.tech/cz/portfolio/reseni'
            await page.goto(url4, { waitUntil: 'load', timeout: 10_000 })
            // await page.waitForLoadState ('load', { timeout: 10_000 })
            await page.waitForTimeout(3_000)
        }) 
    })
})

// Screenshot
export async function scrshot(label: string, page: Page) {
    const buffer = await page.screenshot({ type: "jpeg", animations: "disabled" });
    await test.info().attach(label, { body: buffer, contentType: "image/jpeg"});
}