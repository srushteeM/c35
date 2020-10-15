class Form{
    constructor() {
    }

    display(){
        var input=createInput("Enter your name");
        input.position(150,180);

        var button=createButton("Submit");
        button.position(200,220);
    }
}