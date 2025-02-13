const { firefox } = require("playwright");

(async () => {
  const browser = await firefox.launch();
  const context = await browser.newContext();

  const page = await context.newPage();
  await page.goto("https://bvaughn.github.io/react-virtualized/#/components/List");

  await page.click('text="Use dynamic row heights?"');
  await page.click('text="Show scrolling placeholder?"');

  await page.close();

  await context.close();
  await browser.close();
})();
