import puppeteer from 'puppeteer';
import dappeteer from '@chainsafe/dappeteer';

async function main() {

    const METAMASK_MNEMONIC_PHRASE = "claim bag essay finger major zero useful moon swim spider verify traffic"
    const METAMASK_PASSWORD = "20056manucher"

    const browser = await dappeteer.launch(puppeteer, { metamaskVersion: 'v10.8.1', args: ["--disable-notifications"] });

    const page = await browser.newPage();

    await page.goto('https://myria.com/sigil/');

    await page.waitForSelector('#__next > div.en > div > div > div.bg-dark > div.hidden.md\\:block > div > div:nth-child(1) > div > div > button');

    await page.click('#__next > div.en > div > div > div.bg-dark > div.hidden.md\\:block > div > div:nth-child(1) > div > div > button');

    browser.once('targetcreated', async (target) => {
        if (target.type() === 'page') {

            const pageAuth = await target.page();

            await pageAuth.waitForSelector("#app-content > div > div.main-container-wrapper > div > div > div > button");
            await pageAuth.click("#app-content > div > div.main-container-wrapper > div > div > div > button");

            await pageAuth.waitForSelector("#app-content > div > div.main-container-wrapper > div > div > div.select-action__wrapper > div > div.select-action__select-buttons > div:nth-child(1) > button");
            await pageAuth.click("#app-content > div > div.main-container-wrapper > div > div > div.select-action__wrapper > div > div.select-action__select-buttons > div:nth-child(1) > button");

            await pageAuth.waitForSelector("#app-content > div > div.main-container-wrapper > div > div > div > div.metametrics-opt-in__footer > div.page-container__footer > footer > button.button.btn--rounded.btn-secondary.page-container__footer-button");
            await pageAuth.click("#app-content > div > div.main-container-wrapper > div > div > div > div.metametrics-opt-in__footer > div.page-container__footer > footer > button.button.btn--rounded.btn-secondary.page-container__footer-button");


            await pageAuth.waitForSelector("#app-content > div > div.main-container-wrapper > div > div > form > div.first-time-flow__textarea-wrapper > div.MuiFormControl-root.MuiTextField-root.first-time-flow__textarea.first-time-flow__seedphrase > div > input");
            await pageAuth.focus("#app-content > div > div.main-container-wrapper > div > div > form > div.first-time-flow__textarea-wrapper > div.MuiFormControl-root.MuiTextField-root.first-time-flow__textarea.first-time-flow__seedphrase > div > input");
            await pageAuth.keyboard.type('version return define pair soup early combine region wonder ordinary entry surface');

            await pageAuth.click("#app-content > div > div.main-container-wrapper > div > div > form > div.first-time-flow__textarea-wrapper > div.first-time-flow__checkbox-container > div");

            await pageAuth.focus("#password");
            await pageAuth.keyboard.type("degradater123");

            await pageAuth.focus("#confirm-password");
            await pageAuth.keyboard.type("degradater123");

            await pageAuth.click("#app-content > div > div.main-container-wrapper > div > div > form > div.first-time-flow__checkbox-container > div");

            await pageAuth.click("#app-content > div > div.main-container-wrapper > div > div > form > button");

            await pageAuth.waitForSelector("#app-content > div > div.main-container-wrapper > div > div > button");
            await pageAuth.click("#app-content > div > div.main-container-wrapper > div > div > button");

            await pageAuth.close();
            await zero()
            return;
        }
    });

    async function zero() {
        await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });

        await page.waitForSelector('#__next > div.en > div > div > div.bg-dark > div.hidden.md\\:block > div > div:nth-child(1) > div > div > button');
        await page.click('#__next > div.en > div > div > div.bg-dark > div.hidden.md\\:block > div > div:nth-child(1) > div > div > button');


        browser.once('targetcreated', async (target) => {
            if (target.type() === 'page') {
                const pageMetaMask = await target.page();

                await pageMetaMask.waitForSelector('#app-content > div > div.main-container-wrapper > div > div.permissions-connect-choose-account > div.permissions-connect-choose-account__footer-container > div.permissions-connect-choose-account__bottom-buttons > button.button.btn--rounded.btn-primary');
                await pageMetaMask.click('#app-content > div > div.main-container-wrapper > div > div.permissions-connect-choose-account > div.permissions-connect-choose-account__footer-container > div.permissions-connect-choose-account__bottom-buttons > button.button.btn--rounded.btn-primary');

                await pageMetaMask.waitForSelector('#app-content > div > div.main-container-wrapper > div > div.page-container.permission-approval-container > div.permission-approval-container__footers > div.page-container__footer > footer > button.button.btn--rounded.btn-primary.page-container__footer-button');
                await pageMetaMask.click('#app-content > div > div.main-container-wrapper > div > div.page-container.permission-approval-container > div.permission-approval-container__footers > div.page-container__footer > footer > button.button.btn--rounded.btn-primary.page-container__footer-button');

                await pageMetaMask.waitForSelector('#app-content > div > div.main-container-wrapper > div > div.request-signature__footer > button.button.btn--rounded.btn-primary.btn--large.request-signature__footer__sign-button');
                await pageMetaMask.click('#app-content > div > div.main-container-wrapper > div > div.request-signature__footer > button.button.btn--rounded.btn-primary.btn--large.request-signature__footer__sign-button');

                one()

                return;
            }
        });


    }
    async function one() {

        await page.waitForTimeout(15000)

        async function u() {
            console.log("Click");
            await page.mouse.click(300, 480)
        }
        await page.screenshot({ path: "r.png" })
        u()
        // await page.waitForSelector("#__next > div.en > div > div > div.bg-dark > div.hidden.md\\:block > div > div:nth-child(1) > div > div > div > div.absolute.top-0.flex.h-full.w-full.items-center.justify-center > div.absolute.bottom-\\[30\\%\\].flex.flex-col.items-center.justify-center.left-\\[17\\%\\].w-\\[22\\%\\] > div > div.absolute.flex.h-\\[116px\\].w-full.items-end.justify-center.transition-all.delay-100.bottom-0.opacity-0.pointer-events-none > button")
        // await page.click("#__next > div.en > div > div > div.bg-dark > div.hidden.md\\:block > div > div:nth-child(1) > div > div > div > div.absolute.top-0.flex.h-full.w-full.items-center.justify-center > div.absolute.bottom-\\[30\\%\\].flex.flex-col.items-center.justify-center.left-\\[17\\%\\].w-\\[22\\%\\] > div > div.absolute.flex.h-\\[116px\\].w-full.items-end.justify-center.transition-all.delay-100.bottom-0.opacity-0.pointer-events-none > button")

        // await page.waitForSelector("#radix-30 > div > div > div > div > div.flex.flex-1.flex-col.items-start.justify-center > button")
        // await page.click("#radix-30 > div > div > div > div > div.flex.flex-1.flex-col.items-start.justify-center > button")

    }
}

main();