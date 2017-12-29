/// <reference path="Embeddable.ts" />

class InputField implements Embeddable{
    private html: JQuery;

    constructor(){
        this.html = $("<input>");
        this.initialize();
    }

    private initialize(): void {
        let self = this;
        this.html.on("keyup",()=>{
            self.html.val(self.html.val().toString().toUpperCase());
        });
    }

    getEmbaddable(): JQuery<HTMLElement> {
        return this.html;
    }

}