class Player{
    constructor(){}

    getCount(){
        db.ref("gameState").on("value",(data)=>{
            playercount=data.val();
        })
    }

    updateState(count){
        db.ref("/").set({
            playercount:count
        })
    }
}