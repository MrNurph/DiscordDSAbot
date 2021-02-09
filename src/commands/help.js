module.exports = async (message) => {
    message.channel.send(
        '**$create** - Erzeugt einen Datenbankeintrag für Deinen User.\n' +
        '**$show** - Zeigt die aktuellen Werte Deines Users an.\n' +
        'LeP <:globe_hp:793443892367982603>, AsP <:globe_mana:793443931572011039>, Gold <:2992_Terraria_GoldCoin:793443084368216075>, Silber <:2436_Terraria_SilverCoin:793443120951590942>, Kupfer <:8717_Terraria_CopperCoin:793442344178548737>, Verfall :wilted_rose:\n' +
        '**$add** - Fügt den spezifizierten Wert zu Deinem User hinzu.\n' +
        '**$remove** - Entfernt den spezifizierten Wert von Deinem User.\n' +
        '**$random** - Führt einen Zufallswurf auf einer spezifizierten Liste aus:\n' +
        'Charakter, Wetter, Waffe, Krankheit, Witz, Name ( -> Albernia, Gareth, Horasreich, Weiden, Bornland, Tulamidisch' +
        ' -> männlich, weiblich) \n' +
        '**$help** - Zeigt diese Liste von Befehlen an.\n'
    )

}