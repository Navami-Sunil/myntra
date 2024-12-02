class search{
  async topsearch(){
     await $('//input[@placeholder="Search for products, brands and more"]').click();
     await $('//input[@placeholder="Search for products, brands and more"]').setValue("western tops women");
     await $("//li[text()='Western Tops Women']").click();
     await browser.pause(2000);
  }
}
module.exports=new search();