module.expo=new class BASEpaje{
    async navigateToUrl(){
        await browser.url ('https://www.amazon.in/')
        await browser.maximizeWindow();
        await browser.pause(5000);
    }
}