module.exports = {
    name: 'avemaria',
    description: "this is a ave maria command!",
    execute(message, args){
       if(message.member.roles.cache.has('824400698896285747')){
          message.channel.send('```Ave Maria, cheia de graça, o Senhor é convosco. Bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus. Santa Maria mãe de Deus, rogai por nós pecadores. Agora e na hora de nossa morte, amém.``` ');
       
       
    }else {
        message.channel.send('Converta-se ao catolicismo.');
    }
        
        
    }
}
