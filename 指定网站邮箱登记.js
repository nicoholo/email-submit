const puppeteer = require('puppeteer');

(async () => {
  // 启动一个浏览器实例
  const browser = await puppeteer.launch();

  // 打开一个新页面
  const page = await browser.newPage();

  // 导航到目标网站
  await page.goto('https://www.wincast.io/pass');

  // 找到邮箱输入框并输入邮箱
  const emailInput = await page.$('#standard-name');  // 根据实际情况找到相应的输入框元素
  const email = 'xxxxxxxx@gmail.com';  // 替换为你想要输入的邮箱地址
  await emailInput.type(email);

  // 提交表单
  const submitButton = await page.$('#submit-button');  // 根据实际情况找到相应的提交按钮元素
  await submitButton.click();

  // 等待页面加载完成
  await page.waitForNavigation();

  // 关闭浏览器
  await browser.close();
})();
