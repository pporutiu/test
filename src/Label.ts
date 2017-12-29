class Label implements Embeddable{
    private html: JQuery;
    private value: String;

    constructor(value:String){
        this.html = $("<lable>");
        this.setLabel(value);
    }

    public setLabel(value: String):void{
        this.value = value;
        this.html.text(this.value.toString());
    }

    public getLabel():String{
        return this.value;
    }
    
    public getEmbaddable(): JQuery<HTMLElement> {
        return this.html;
    }
}