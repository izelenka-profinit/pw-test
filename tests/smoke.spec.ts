// https://www.saucedemo.com
// npx playwright test tests/smoke.spec.ts --headed
// npx playwright show-report

import { expect, test } from "@playwright/test"

test.describe("příklad Test Suite", () => {
    test("User login", async ({ page }) => {
        await test.step("Otevřít stránku", async () => {
            const url = 'https://www.saucedemo.com'
            await page.goto(url, { waitUntil: 'load', timeout: 10_000 })
            // await page.waitForLoadState ('load', { timeout: 10_000 })
            // await page.waitForTimeout(2000)
        })
        
        await test.step("Vyplnit uživatele", async () => {
            const usernameSelector = 'input[data-test="username"]'
            const usernameLocator = page.locator(usernameSelector).first()
            await expect(usernameLocator).toHaveAttribute('data-test', 'username', {timeout: 5_000})
            
            await expect(usernameLocator).toBeVisible({timeout: 5_000})
            // await usernameLocator.fill("standard_user")
            await usernameLocator.click()
            await expect(usernameLocator).toBeFocused({timeout: 5_000})
            // await page.waitForTimeout(5_000)
            await usernameLocator.fill("standard_user")
        })
        
        await test.step("Vyplnit PWD a Klik na log-in", async () => {
            const passwordSelector = 'input[id="password"]'
            await page.locator(passwordSelector).first().fill("secret_sauce")

            const loginButton = 'input[name="login-button"]'
            await page.locator(loginButton).first().click()

            await page.waitForLoadState('domcontentloaded', { timeout: 10_000 })
 
            await page.waitForURL(/inventory.html/, { timeout: 5_000, waitUntil: 'domcontentloaded' })
            await expect(page).toHaveURL(/inventory.html/, { timeout: 5_000 })
 
            await page.waitForTimeout(5_000)

            const isTrue = true //'akcePlaywrightu vracejici boolean'
            if (isTrue) {
                // nejaka akce pokud TRUE
            } else {
                // nejaka akce pokud FALSE
                try {
                    // script
                } catch (e) {
                    const ignoreError = true
                    if (!ignoreError) {
                        throw new Error('Něco se nepovedlo' + e)
                    } else {
                        console.error('Něco se nepovedlo' + e)
                    }
                }
            }
        })
    })
})

