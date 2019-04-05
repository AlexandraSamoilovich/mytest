describe('Add series using "+" option', () =>{
	beforeAll(async() => {
		await page.goto('http://stage.ceicdata.com/', {"waitUntil" : "networkidle0"});
		await page.type('input[name="user_id"]', 'alexandra@xbsoftware.com');
		await page.type('input[name="password"]', 'Alexandra/1');
		await page.click('button[type="submit"]');
		await page.waitForNavigation({waitUntil: 'domcontentloaded'});
		//await page.screenshot({path: 'test.png'});
	})

	it('Open landing page', async() =>{
		let e = await page.waitForSelector('.landing-header--title');
		let text = await page.evaluate(e => e.textContent, e);
    	expect(text).toContain('Insight Explorer')
    	//const main = await page.evaluate(() => document.querySelector('.landing-header--title'))
    	//expect(main).toContain('Insight Explorer')
	})
})