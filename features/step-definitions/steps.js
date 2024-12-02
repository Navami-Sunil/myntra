const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const topsearching=require("../pageobjects/search.page");
const western =require("../pageobjects/western.page");
Given(/^I am on the Myntra homepage$/,async() => {
    await browser.url("https://www.myntra.com/");
    await browser.maximizeWindow();
});

When(/^I search for western tops$/,async () => {
    await topsearching.topsearch();
});

When(/^I add the selected top to the cart$/,async () => {
	await western.westerntop();
});

Then(/^I proceed to the payment page$/,async () => {
	return true;
});

