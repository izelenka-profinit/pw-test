// Příkazy pro osahání stránky Principal
.hover()
.click()
// Funkce k doplnění:
export async function scrshot(label: string, page: Page) {
    const buffer = await page.screenshot({ type: "jpeg", animations: "disabled" });
    await test.info().attach(label, { body: buffer, contentType: "image/jpeg"});
}
// Popužití v testu 
await scrshot('Homepage', page)
 
// Příkauz pro MAcOS pro spuštěšní start.sh
chmod u+x *.sh
 