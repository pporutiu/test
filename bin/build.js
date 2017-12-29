class InputField {
    constructor() {
        this.html = $("<input>");
        this.initialize();
    }
    initialize() {
        let self = this;
        this.html.on("keyup", () => {
            self.html.val(self.html.val().toString().toUpperCase());
        });
    }
    getEmbaddable() {
        return this.html;
    }
}
class Label {
    constructor(value) {
        this.html = $("<lable>");
        this.setLabel(value);
    }
    setLabel(value) {
        this.value = value;
        this.html.text(this.value.toString());
    }
    getLabel() {
        return this.value;
    }
    getEmbaddable() {
        return this.html;
    }
}
class Select {
    constructor() {
        this.input = new InputField();
        this.label = new Label("Default");
    }
    getLabel() {
        return this.label.getLabel();
    }
    setLabel(label) {
        this.label.setLabel(label);
    }
    draw(container) {
        let prev = container.prev();
        let parent = prev.length == 0 ? container.parent() : null;
        container.detach();
        container.append(this.label.getEmbaddable());
        container.append(this.input.getEmbaddable());
        if (parent == null) {
            container.after(prev);
        }
        else {
            parent.append(container);
        }
    }
}
