import { test, Page, expect } from "@playwright/test"

const defTimeout = 5_000

test("Simple navigation", { tag: '@ukol'}, async ({ page }) => {
    await test.step("Go to homepage", async () => {
        await page.goto('https://www.principal.tech', { waitUntil: 'load', timeout: 10_000 })
        await scrshot('homepage', page)

        await page.locator('[id="cm"] button[id="c-p-bn"]').first().click({ timeout: defTimeout })
        await scrshot('accept_cookies', page)
    })

    await test.step("Navigate to Portfolio - Products", async () => {
        await page.locator('[class*="item-221"]').first().hover({ timeout: defTimeout })
        await page.locator('[class*="item-222"]').first().click({ timeout: defTimeout })
        await page.waitForLoadState('domcontentloaded', { timeout: defTimeout })
        await scrshot('portfolio-products', page)
    })

    await test.step("Navigate to Portfolio - Services", async () => {
        await page.locator('[class*="item-221"]').first().hover({ timeout: defTimeout })
        await page.locator('[class*="item-223"]').first().click({ timeout: defTimeout })
        await page.waitForLoadState('domcontentloaded', { timeout: defTimeout })
        await scrshot('portfolio-services', page)
    })

    await test.step("Navigate to Portfolio - Solutions", async () => {
        await page.locator('[class*="item-221"]').first().hover({ timeout: defTimeout })
        await page.locator('[class*="item-224"]').first().click({ timeout: defTimeout })
        await page.waitForLoadState('domcontentloaded', { timeout: defTimeout })
        await scrshot('portfolio-solutions', page)
    })

    await test.step("Navigate to About Us", async () => {
        await page.locator('[class*="item-225"]').first().click({ timeout: defTimeout })
        await page.waitForLoadState('domcontentloaded', { timeout: defTimeout })
        await scrshot('aboutUs', page)
    })

    await test.step("Navigate to Blog", async () => {
        await page.locator('[class*="item-226"]').first().click({ timeout: defTimeout })
        await page.waitForLoadState('domcontentloaded', { timeout: defTimeout })
        await scrshot('blog', page)
    })

    await test.step("Navigate to Portfolio - Finance", async () => {
        await page.locator('[class*="item-295"]').first().hover({ timeout: defTimeout })
        await page.locator('[class*="item-296"]').first().click({ timeout: defTimeout })
        await page.waitForLoadState('domcontentloaded', { timeout: defTimeout })
        await expect(page.locator('tr[id="finance"]').first()).toBeInViewport({ timeout: defTimeout })
        await scrshot('portfolio-finance', page)
    })

    await test.step("Navigate to Portfolio - Utilities", async () => {
        await page.locator('[class*="item-295"]').first().hover({ timeout: defTimeout })
        await page.locator('[class*="item-297"]').first().click({ timeout: defTimeout })
        await expect(page.locator('tr[id="utilities"]').first()).toBeInViewport({ timeout: defTimeout })
        await scrshot('portfolio-utilities', page)
    })

    await test.step("Navigate to Portfolio - Industry", async () => {
        await page.locator('[class*="item-295"]').first().hover({ timeout: defTimeout })
        await page.locator('[class*="item-298"]').first().click({ timeout: defTimeout })
        await expect(page.locator('tr[id="industry"]').first()).toBeInViewport({ timeout: defTimeout })
        await scrshot('portfolio-industry', page)
    })

    await test.step("Navigate to Portfolio - Public Administration", async () => {
        await page.locator('[class*="item-295"]').first().hover({ timeout: defTimeout })
        await page.locator('[class*="item-299"]').first().click({ timeout: defTimeout })
        await expect(page.locator('tr[id="public-administration"]').first()).toBeInViewport({ timeout: defTimeout })
        await scrshot('portfolio-publicAdministration', page)
    })

    await test.step("Navigate to Portfolio - Telecommunication", async () => {
        await page.locator('[class*="item-295"]').first().hover({ timeout: defTimeout })
        await page.locator('[class*="item-300"]').first().click({ timeout: defTimeout })
        await expect(page.locator('tr[id="telecommunication"]').first()).toBeInViewport({ timeout: defTimeout })
        await scrshot('portfolio-telecommunication', page)
    })

    await test.step("Navigate to Career", async () => {
        await page.evaluate(() => window.scrollTo(0, 0))
        await page.locator('[class*="item-228"]').first().click({ timeout: defTimeout })
        await page.waitForLoadState('domcontentloaded', { timeout: defTimeout })
        await scrshot('career', page)
    })
})

export async function scrshot(label: string, page: Page) {
    const buffer = await page.screenshot({ type: "jpeg", animations: "disabled" });
    await test.info().attach(label, { body: buffer, contentType: "image/jpeg"});
}