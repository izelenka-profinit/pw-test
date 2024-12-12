// https://www.saucedemo.com
// npx playwright test tests/smoke.spec.ts --headed
// npx playwright show-report

import { test } from "@playwright/test"

test.describe("příklad Test Suite", () => {
    test("User login", async ({ page }) => {
        const url = 'https://www.saucedemo.com'
        await page.goto(url, { waitUntil: 'load', timeout: 10_000 })
        // await page.waitForLoadState ('load', { timeout: 10_000 })
        // await page.waitForTimeout(2000)
        
        const usernameSelector = 'input[data-test="username"]'
        await page.locator(usernameSelector).first().fill("standard_user")
        // await page.waitForTimeout(5_000)

        const passwordSelector = 'input[id="password"]'
        await page.locator(passwordSelector).first().fill("secret_sauce")

        const loginButton = 'input[name="login-button"]'
        await page.locator(loginButton).first().click()

        await page.waitForLoadState('domcontentloaded', { timeout: 10_000 })
 
        await page.waitForURL(/inventory.html/, { timeout: 5_000, waitUntil: 'domcontentloaded' })
 
        await page.waitForTimeout(5_000)

    })
})

