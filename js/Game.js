class Game{
    constructor(){}

    getState(){
        db.ref("gameState").on("value",(data)=>{
            gameState=data.val();
        })
    }

    updateState(gameState){
        db.ref("/").set({
            gameState:gameState
        })
    }
}