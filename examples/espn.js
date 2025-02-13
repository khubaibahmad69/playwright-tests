const { firefox } = require("playwright");

(async () => {
  const browser = await firefox.launch();
  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto("https://www.espn.com/");

  await page.click('nav[id="global-nav"] >> text="NBA"');

  await page.goto("https://www.espn.com/nba/");

  await page.click('a[id="global-search-trigger"]');

  await page.fill('input[placeholder="Search Sports, Teams or Players..."]', "warriors");

  await page.press('input[placeholder="Search Sports, Teams or Players..."]', "Enter");

  await page.goto("https://www.espn.com/search/_/q/warriors");

  await page.close();

  await context.close();
  await browser.close();
})();
