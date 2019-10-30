describe('landing page', () => {
    let page

    beforeAll(async () => {
        page = await __BROWSER__.newPage()
        await page.goto('file:///Users/davidm/Projects/gannsquares.com/index.html')
    }, 5000)

    afterAll(async () => {
        await page.close()
    })

    it(
        "should have the title set to 'Gann Page generator'",
        async () => {
                const title = await page.title()
                expect(title).toEqual('Gann Square generator')
            },
            5000,
    )

    it(
        "should include a copyright symbol",
        async () => {
                const text = await page.evaluate(() => document.body);
                expect(text).toContain('&copy;')
            },
            5000,
    )

    it(
        "should include a MIT licence message",
        async () => {
                const text = await page.evaluate(() => document.body.textContent)
                expect(text).toContain('MIT licence')
            },
            5000,
    )

    it(
        "should include a 'Gann Square generator' title",
        async () => {
                const text = await page.evaluate(() => document.body.textContent)
                expect(text).toContain('Gann Square generator')
            },
            5000,
    )

    it(
        "should include a 'Parameters' subtitle",
        async () => {
                const text = await page.evaluate(() => document.body.textContent)
                expect(text).toContain('Parameters')
            },
            5000,
    )

    it(
        "should include a square of 4 radio button",
        async () => {
                const text = await page.evaluate(() => document.body.textContent)
                expect(text).toContain('Square of 4')
            },
            5000,
    )

    it(
        "should include a starting number field",
        async () => {
                await page.waitForSelector('#startno')
            },
            5000,
    )

    it(
        "should include a cell increment field",
        async () => {
                await page.waitForSelector('#increment')
            },
            5000,
    )

    it(
        "should include a number of rings field",
        async () => {
                await page.waitForSelector('#levels')
            },
            5000,
    )

    it(
        "should include a title text field",
        async () => {
                await page.waitForSelector('#title')
            },
            5000,
    )

    it(
        "should include a 'Create Square' button",
        async () => {
                await page.waitForSelector('#submit')
            },
            5000,
    )

    it(
        "should take a screenshot, just to prove tests were run on a real browser!",
        async () => {
                await page.screenshot({
                    path: 'landing-page-screenshot.png',
                    fullPage: true
                })
            },
            5000,
    )
})