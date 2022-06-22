const puppeteer = require('puppeteer');
const dappeteer = require('@chainsafe/dappeteer');
const mass = require("./SortMass.js");

let METAMASK_MNEMONIC_PHRASE = "";
let METAMASK_PASSWORD = "degradater123";

let i = 6;

myLoop();

function myLoop() {
    setTimeout(function () {

        if (i < mass.length) {
            i++;
            try {
                METAMASK_MNEMONIC_PHRASE = mass[i];
                main();
            } catch (error) {
                console.log(`Ошибка №${i}`);
                myLoop();
                return;
            }
            myLoop();
        }

    }, 180000)
}

async function main() {
    const browser = await dappeteer.launch(puppeteer, { metamaskVersion: 'v10.8.1', args: ["--disable-notifications"] });
    const pageEmail = await browser.newPage();
    await pageEmail.goto("https://tempmail.plus/ru");
    console.log("Start");
    const page = await browser.newPage();
    await page.goto('https://myria.com/sigil/?code=fb85d434-0d41-4a47-9837-0219a61b2ac3');
    await page.waitForSelector('#__next > div.en > div > div > div.bg-dark > div.hidden.md\\:block > div > div:nth-child(1) > div > div > button');
    await page.click('#__next > div.en > div > div > div.bg-dark > div.hidden.md\\:block > div > div:nth-child(1) > div > div > button');
    browser.once('targetcreated', async (target) => {
        if (target.type() === 'page') {
            const pageAuth = await target.page();
            await pageAuth.waitForTimeout(3000)
            if (pageAuth.url() === "chrome-extension://kachdgbjnmbeegojalkmndmeijaajcnd/home.html") {
                await pageAuth.reload();
            }
            await pageAuth.waitForSelector("#app-content > div > div.main-container-wrapper > div > div > div > button");
            await pageAuth.click("#app-content > div > div.main-container-wrapper > div > div > div > button");
            await pageAuth.waitForSelector("#app-content > div > div.main-container-wrapper > div > div > div.select-action__wrapper > div > div.select-action__select-buttons > div:nth-child(1) > button");
            await pageAuth.click("#app-content > div > div.main-container-wrapper > div > div > div.select-action__wrapper > div > div.select-action__select-buttons > div:nth-child(1) > button");
            await pageAuth.waitForSelector("#app-content > div > div.main-container-wrapper > div > div > div > div.metametrics-opt-in__footer > div.page-container__footer > footer > button.button.btn--rounded.btn-secondary.page-container__footer-button");
            await pageAuth.click("#app-content > div > div.main-container-wrapper > div > div > div > div.metametrics-opt-in__footer > div.page-container__footer > footer > button.button.btn--rounded.btn-secondary.page-container__footer-button");
            await pageAuth.waitForSelector("#app-content > div > div.main-container-wrapper > div > div > form > div.first-time-flow__textarea-wrapper > div.MuiFormControl-root.MuiTextField-root.first-time-flow__textarea.first-time-flow__seedphrase > div > input");
            await pageAuth.focus("#app-content > div > div.main-container-wrapper > div > div > form > div.first-time-flow__textarea-wrapper > div.MuiFormControl-root.MuiTextField-root.first-time-flow__textarea.first-time-flow__seedphrase > div > input");
            await pageAuth.keyboard.type(mnemonicReturn());
            await pageAuth.click("#app-content > div > div.main-container-wrapper > div > div > form > div.first-time-flow__textarea-wrapper > div.first-time-flow__checkbox-container > div");
            await pageAuth.focus("#password");
            await pageAuth.keyboard.type(passwordReturn());
            await pageAuth.focus("#confirm-password");
            await pageAuth.keyboard.type(passwordReturn());
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
                await pageMetaMask.waitForTimeout(2000)
                await pageMetaMask.waitForSelector('#app-content > div > div.main-container-wrapper > div > div.permissions-connect-choose-account > div.permissions-connect-choose-account__footer-container > div.permissions-connect-choose-account__bottom-buttons > button.button.btn--rounded.btn-primary');
                await pageMetaMask.click('#app-content > div > div.main-container-wrapper > div > div.permissions-connect-choose-account > div.permissions-connect-choose-account__footer-container > div.permissions-connect-choose-account__bottom-buttons > button.button.btn--rounded.btn-primary');
                await pageMetaMask.waitForSelector('#app-content > div > div.main-container-wrapper > div > div.page-container.permission-approval-container > div.permission-approval-container__footers > div.page-container__footer > footer > button.button.btn--rounded.btn-primary.page-container__footer-button');
                await pageMetaMask.click('#app-content > div > div.main-container-wrapper > div > div.page-container.permission-approval-container > div.permission-approval-container__footers > div.page-container__footer > footer > button.button.btn--rounded.btn-primary.page-container__footer-button');
                await pageMetaMask.waitForSelector('#app-content > div > div.main-container-wrapper > div > div.request-signature__footer > button.button.btn--rounded.btn-primary.btn--large.request-signature__footer__sign-button');
                await pageMetaMask.click('#app-content > div > div.main-container-wrapper > div > div.request-signature__footer > button.button.btn--rounded.btn-primary.btn--large.request-signature__footer__sign-button');
                await pageMetaMask.close();
                await vib();
            }
        });
    }
    async function vib() {
        await page.waitForSelector("#__next > div.en > div > div > div.bg-dark > div.hidden.md\\:block > div > div:nth-child(1) > div > div > div > div.absolute.top-0.flex.h-full.w-full.items-center.justify-center > div.absolute.bottom-\\[30\\%\\].flex.flex-col.items-center.justify-center.left-\\[17\\%\\].w-\\[22\\%\\] > div");
        await page.hover("#__next > div.en > div > div > div.bg-dark > div.hidden.md\\:block > div > div:nth-child(1) > div > div > div > div.absolute.top-0.flex.h-full.w-full.items-center.justify-center > div.absolute.bottom-\\[30\\%\\].flex.flex-col.items-center.justify-center.left-\\[17\\%\\].w-\\[22\\%\\] > div");
        await page.waitForSelector("#__next > div.en > div > div > div.bg-dark > div.hidden.md\\:block > div > div:nth-child(1) > div > div > div > div.absolute.top-0.flex.h-full.w-full.items-center.justify-center > div.absolute.bottom-\\[30\\%\\].flex.flex-col.items-center.justify-center.left-\\[17\\%\\].w-\\[22\\%\\] > div > div.absolute.flex.h-\\[116px\\].w-full.items-end.justify-center.transition-all.delay-100.bottom-\\[-70px\\].opacity-100.xl\\:bottom-\\[-75px\\].\\32 xl\\:bottom-\\[-100px\\] > button")
        await page.click("#__next > div.en > div > div > div.bg-dark > div.hidden.md\\:block > div > div:nth-child(1) > div > div > div > div.absolute.top-0.flex.h-full.w-full.items-center.justify-center > div.absolute.bottom-\\[30\\%\\].flex.flex-col.items-center.justify-center.left-\\[17\\%\\].w-\\[22\\%\\] > div > div.absolute.flex.h-\\[116px\\].w-full.items-end.justify-center.transition-all.delay-100.bottom-\\[-70px\\].opacity-100.xl\\:bottom-\\[-75px\\].\\32 xl\\:bottom-\\[-100px\\] > button")
        await page.waitForSelector("#radix-30 > div > div > div > div > div.flex.flex-1.flex-col.items-start.justify-center > button")
        await page.click("#radix-30 > div > div > div > div > div.flex.flex-1.flex-col.items-start.justify-center > button")
        await page.waitForTimeout(2000)
        await page.waitForSelector("#__next > div.en > div > div > div.bg-dark > div.hidden.md\\:block > div > div > div > div > div.overflow-auto > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(3) > div.relative.z-20.min-h-\\[128px\\].w-full.rounded-lg.bg-brand-deep-blue > div > div.flex.h-\\[80px\\].flex-col > a > div > div")
        await page.click("#__next > div.en > div > div > div.bg-dark > div.hidden.md\\:block > div > div > div > div > div.overflow-auto > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(3) > div.relative.z-20.min-h-\\[128px\\].w-full.rounded-lg.bg-brand-deep-blue > div > div.flex.h-\\[80px\\].flex-col > a > div > div")
        browser.once('targetcreated', async (target) => {
            if (target.type() === 'page') {
                const pageDel = await target.page();
                await pageDel.waitForTimeout(2000)
                await pageDel.close()
            }
        });
        await page.waitForSelector("#__next > div.en > div > div > div.bg-dark > div.hidden.md\\:block > div > div > div > div > div.overflow-auto > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(4) > div.relative.z-20.min-h-\\[128px\\].w-full.rounded-lg.bg-brand-deep-blue > div > div.flex.h-\\[80px\\].flex-col > a > div > div")
        await page.click("#__next > div.en > div > div > div.bg-dark > div.hidden.md\\:block > div > div > div > div > div.overflow-auto > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(4) > div.relative.z-20.min-h-\\[128px\\].w-full.rounded-lg.bg-brand-deep-blue > div > div.flex.h-\\[80px\\].flex-col > a > div > div")
        browser.once('targetcreated', async (target) => {
            if (target.type() === 'page') {
                const pageDel = await target.page();
                await pageDel.waitForTimeout(2000)
                await pageDel.close()
            }
        });
        await page.waitForSelector("#__next > div.en > div > div > div.bg-dark > div.hidden.md\\:block > div > div > div > div > div.overflow-auto > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(5) > div.relative.z-20.min-h-\\[128px\\].w-full.rounded-lg.bg-brand-deep-blue > div > div.flex.h-\\[80px\\].flex-col > a > div > div")
        await page.click("#__next > div.en > div > div > div.bg-dark > div.hidden.md\\:block > div > div > div > div > div.overflow-auto > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(5) > div.relative.z-20.min-h-\\[128px\\].w-full.rounded-lg.bg-brand-deep-blue > div > div.flex.h-\\[80px\\].flex-col > a > div > div")
        browser.once('targetcreated', async (target) => {
            if (target.type() === 'page') {
                const pageDel = await target.page();
                await pageDel.waitForTimeout(2000)
                await pageDel.close()
            }
        });
        await page.waitForSelector("#__next > div.en > div > div > div.bg-dark > div.hidden.md\\:block > div > div > div > div > div.overflow-auto > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(1) > div.relative.z-20.min-h-\\[128px\\].w-full.rounded-lg.bg-brand-deep-blue > div > div.flex.h-\\[80px\\].flex-col > a > div > div")
        await page.click("#__next > div.en > div > div > div.bg-dark > div.hidden.md\\:block > div > div > div > div > div.overflow-auto > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(1) > div.relative.z-20.min-h-\\[128px\\].w-full.rounded-lg.bg-brand-deep-blue > div > div.flex.h-\\[80px\\].flex-col > a > div > div")
        await page.waitForSelector("#radix-1 > div > div.px-8.text-white > form > div.mb-2.grid.grid-cols-1.gap-1.md\\:grid-cols-2.md\\:gap-8 > div:nth-child(1) > div > div > input")
        await page.focus("#radix-1 > div > div.px-8.text-white > form > div.mb-2.grid.grid-cols-1.gap-1.md\\:grid-cols-2.md\\:gap-8 > div:nth-child(1) > div > div > input")
        await page.keyboard.type("Mike");
        await page.waitForSelector("#radix-1 > div > div.px-8.text-white > form > div.mb-2.grid.grid-cols-1.gap-1.md\\:grid-cols-2.md\\:gap-8 > div:nth-child(2) > div > div > input")
        await page.focus("#radix-1 > div > div.px-8.text-white > form > div.mb-2.grid.grid-cols-1.gap-1.md\\:grid-cols-2.md\\:gap-8 > div:nth-child(2) > div > div > input")
        await page.keyboard.type("Smith");
        const textEmail = await pageEmail.$eval("#pre_button", (el) => {
            return el.value + "@mailto.plus";
        })
        let textUsername = ""
        if (textEmail.length > 16) {
            for (let i = 0; i < 16; i++) {
                textUsername += textEmail[i]
            }
        } else {
            textUsername = textEmail;
        }
        await page.waitForSelector("#radix-1 > div > div.px-8.text-white > form > div.mb-2.mt-4 > div:nth-child(1) > div > div > input")
        await page.focus("#radix-1 > div > div.px-8.text-white > form > div.mb-2.mt-4 > div:nth-child(1) > div > div > input")
        await page.keyboard.type(textUsername);
        await page.waitForSelector("#radix-1 > div > div.px-8.text-white > form > div.mb-2.mt-4 > div:nth-child(2) > div > div > input")
        await page.focus("#radix-1 > div > div.px-8.text-white > form > div.mb-2.mt-4 > div:nth-child(2) > div > div > input")
        await page.keyboard.type(textEmail);
        await page.waitForSelector("#radix-1 > div > div.px-8.text-white > form > div.mb-2.mt-4 > div:nth-child(3) > div > div > input")
        await page.focus("#radix-1 > div > div.px-8.text-white > form > div.mb-2.mt-4 > div:nth-child(3) > div > div > input")
        await page.keyboard.type("Degradater123!");
        await page.waitForSelector("#radix-1 > div > div.px-8.text-white > form > div.mb-2.mt-4 > div:nth-child(4) > div > div > input")
        await page.focus("#radix-1 > div > div.px-8.text-white > form > div.mb-2.mt-4 > div:nth-child(4) > div > div > input")
        await page.keyboard.type("Degradater123!")
        await page.click("#radix-1 > div > div.px-8.text-white > form > button");
        await page.waitForTimeout(3000);
        await page.close()
        await pageEmail.waitForTimeout(10000);
        await pageEmail.reload();
        await pageEmail.waitForSelector("#container-body > div.container-xl.body > div.inbox > div.mail > div")
        await pageEmail.click("#container-body > div.container-xl.body > div.inbox > div.mail > div")
        await pageEmail.waitForSelector("#info > div.overflow-auto.mb-20 > table > tbody > tr > td:nth-child(2) > div > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td > a")
        await pageEmail.click("#info > div.overflow-auto.mb-20 > table > tbody > tr > td:nth-child(2) > div > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td > a")
        await pageEmail.screenshot({ path: "EmailPage.png" })
        await pageEmail.waitForTimeout(1000);
        await pageEmail.close()
        await browser.close()
        console.log("End");
    }
}
function passwordReturn() {
    return METAMASK_PASSWORD;
}
function mnemonicReturn() {
    return METAMASK_MNEMONIC_PHRASE;
}