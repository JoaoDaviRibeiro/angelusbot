module.exports = {
    name: 'paternoster',
    description: "this is a pater noster command!",
    execute(message, args){
        message.channel.send('Pater Noster, qui es in caelis, sanctificetur nomen tuum. Adveniat regnum tuum. Fiat voluntas tua, sicut in caelo et in terra. Panem nostrum quotidianum da nobis hodie, et dimitte nobis debita nostra sicut et nos dimittimus debitoribus nostris. Et ne nos inducas in tentiationem, sed libera nos a malo. Amen.');
        
    }
}