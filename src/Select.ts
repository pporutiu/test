/// <reference path="InputField.ts" />
/// <reference path="Label.ts" />

class Select {
    private label: Label;
    private input: InputField;

    constructor() {
        this.input = new InputField();
        this.label = new Label("Default");
    }

    public getLabel(): String {
        return this.label.getLabel();
    }

    public setLabel(label: String): void {
        this.label.setLabel(label);
    }

    public draw(container: JQuery): void {
        let prev = container.prev();
        let parent = prev.length == 0 ? container.parent() : null;
        container.detach();
        container.append(this.label.getEmbaddable());
        container.append(this.input.getEmbaddable());
        if (parent == null) {
            container.after(prev);
        } else {
            parent.append(container);
        }
    }

}