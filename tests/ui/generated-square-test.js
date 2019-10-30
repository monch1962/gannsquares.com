describe('generated-square-9-page', () => {
    let page

    beforeAll(async () => {
        page = await __BROWSER__.newPage()
        //page = global.pages[0]
        await page.goto('file:///Users/davidm/Projects/gannsquares.com/index.html')
        await page.waitForSelector('#submit')
        await page.click('#submit')
        const popup = await browser.waitForTarget(target => target.ur() === link.textContent())
        //let popup = global.pages[global.pages.length - 1]
        await popup.waitForNavigation({
            waitUntil: 'networkidle0',
        });

    }, 5000)

    afterAll(async () => {
        await page.close()
    })

    it(
        "should take a screenshot, just to prove tests were run on a real browser!",
        async () => {
                await page.screenshot({
                    path: 'square-9-screenshot.png',
                    fullPage: true
                })
            },
            5000,
    )
})