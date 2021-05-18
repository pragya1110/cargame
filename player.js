class Player{
    constructor(){
        this.index=null;
        this.distance=0;
        this.name=null;
    }
    getCount(){
       var pcRef=database.ref('playerCount');
       pcRef.on("value",function(data){
           playerCount=data.val();
       })
    }
    updateCount(count){
        database.ref('/').update({playerCount:count});
    }
    update(){
        var playerIndex="players/player"+this.index;
        database.ref(this.playerIndex).set({name:this.name,
        distance:this.distance});
    }
   static getPlayerInfo(){
       var playerInfoRef=database.ref('players');
       playerInfoRef.on("value",(data)=>{
           allPlayers=data.val();
       });
   }
}