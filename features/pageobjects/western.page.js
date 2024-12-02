let top=$('//li[@id="30034872"]');
class western{
 async westerntop(){
    await top.scrollIntoView();
    await top.click();
    await browser.pause(4000);
    await browser.dismissAlert();
    await browser.pause(2000);
    //await $("//span[contains(@class, 'pdp-whiteBag')]").click();
 }
}
module.exports=new western();