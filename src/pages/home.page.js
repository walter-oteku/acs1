module.exports=new class Homepage{
    get doGetsearchBar(){
        return $ ('#twotabearchtextbox');
    }
    
    async searchForProduct(){
        await this.docGetSearcher.setValue('bean bag')
    }
}