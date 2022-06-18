import puppeteer from 'puppeteer';
import dappeteer from '@chainsafe/dappeteer';

async function main() {

    const METAMASK_MNEMONIC_PHRASE = "claim bag essay finger major zero useful moon swim spider verify traffic"
    const METAMASK_PASSWORD = "20056manucher"

    const browser = await dappeteer.launch(puppeteer, { metamaskVersion: 'v10.8.1', args: ["--no-sandbox", "--disable-setuid-sandbox"] });

    const metamask = await dappeteer.setupMetamask(browser, {
        seed: METAMASK_MNEMONIC_PHRASE,
        password: METAMASK_PASSWORD,
    });

    const page = await browser.newPage();

    await page.goto('https://myria.com/sigil/');

    await page.waitForSelector('#__next > div.en > div > div > div.bg-dark > div.hidden.md\\:block > div > div:nth-child(1) > div > div > button');

    const newPagePromise = new Promise(x => browser.once('targetcreated', target => { x(target.page()) }));

    await page.click('#__next > div.en > div > div > div.bg-dark > div.hidden.md\\:block > div > div:nth-child(1) > div > div > button');

    const newPage = await newPagePromise;

    await newPage.screenshot({ path: "e.png" })
}

main();