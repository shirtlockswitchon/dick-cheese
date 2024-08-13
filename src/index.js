require('dotenv').config();
var fs = require('fs'); 
var DictionaryEmpty = true

const {Client, IntentsBitField, Guild, User, Typing, Events} = require("discord.js");
const { eventNames } = require('process');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildMessagePolls,
        IntentsBitField.Flags.MessageContent,
    ]
});

swearing = [
    'Fuck',
    'Ass',
    'Dick',
    'Bitch',
    'Cunt',
];

Dictionary = [
    "Dick cheese ",
    "Hoe",
    "Swing your pole ",
    "I need cock",
    "ITS OVER",
    "What the sigma",
    "Stop 🛑✋",
    "fat FUCK",
    "HOLY SHIT",
    "Dick cheese ",
    "Swing your pole ",
    "I need cock",
    "ITS OVER",
    "What the sigma",
    "Stop 🛑✋",
    "fat FUCK",
    "HOLY SHIT",
    "Dick cheese ",
    "Swing your pole ",
    "I need cock",
    "ITS OVER",
    "What the sigma",
    "Stop 🛑✋",
    "fat FUCK",
    "HOLY SHIT",
    "Dick cheese ",
    "Swing your pole ",
    "I need cock",
    "ITS OVER",
    "What the sigma",
    "Stop 🛑✋",
    "fat FUCK",
    "HOLY SHIT",
    "🍆",
    "🛑",
    "The",
    "Hi",
    "Zimbabwe",
    "23817829737895",
    "Oh I know kankans stick is bigger than that! Infact I bet him and rino both swing their poles together 😱",
    "Cheese and a salad and some cheese and some cheese and some cheese on the way to the store to pick it out for me to get to the shop i will piss your dad and his dad and his brother white shirt is on your desk and you have a shirt on your desk that is on your desk in the house that is on your bed and your dad has a shirt on the desk that is in the house that is in your mom and your mom is fat and you are fat and your mom is skinny and fat 😂😂😂😂😂😂😂😂 you are a very good joke and i hope your dad falls in a pit and the pit is full of your mom and dad and dad and dad and your dad and dad are both in the same room and you are so proud of you and you are the same person you are so dumb that you have no idea how you have a great 👍 i am very good at Piss this was a very important lesson for me and me in the cheese area as i learned how to make the cheese and cheese sauce in the same dish and i had a lot of cheese and cheese to share with my cheese and cheese and cheese and cheese on my cheese and cheese on the cheese and cheese on cheese on cheese on cheese and cheese on cheese in the cheese on cheese and cheese on cheese so that was a great meal 😊😊😊😊😊😊😊😊😅😅😅😊😊😅😅😊😊😊😊😊😊😊😊😊🎉😊😊😂😊😊🎉😊😊🎉😊🎉😊😊🎉😊🎉😂 and the Joe is a fat old fetus and has been for over two decades and i think he is a very good cheese man and he is a good cheese guy too and he has a lot of cheese on his own and he is a cheese the other way round and ill be thinking of Licking my nuts and my dog is a bit of cheese but i will never be able to eat it again lol 😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂 go go he ghost 👻 on you and make you feel like a fool and make yourself look bad for the rest the time he is a fool you are not a good man you are a good person and you are a bad person and and you are a very good person and i am very proud of you and i am proud proud of that you are a",
    "Femboys frotting",
    "Big oily black men backshots",
    "Femboys frotting",
    "Big oily black men backshots",
    "œ",
    "Winner winner chicken dinner 😁",
    "*licks paws w-whats going on? OwO*licks paws w-whats going on? OwO*licks paws w-whats going on? OwO*licks paws w-whats going on? OwO*licks paws w-whats going on? OwO*licks paws w-whats going on? OwO*licks paws w-whats going on? OwO*licks paws w-whats going on? OwO*licks paws w-whats going on? OwO*licks paws w-whats going on? OwO*licks paws w-whats going on? OwO*licks paws w-whats going on? OwO*licks paws w-whats going on? OwO*licks paws w-whats going on? OwO*licks paws w-whats going on? OwO*licks paws w-whats going on? OwO*licks paws w-whats going on? OwO*licks paws w-whats going on? OwO*licks paws w-whats going on? OwO*licks paws w-whats going on? OwO*licks paws w-whats going on? OwO*licks paws w-whats going on? OwO*licks paws w-whats going on? OwO*licks paws w-whats going on? OwO*licks paws w-whats going on? OwO*licks paws w-whats going on? OwO*licks paws w-whats going on? OwO*licks paws w-whats going on? OwO*licks paws w-whats going on? OwO*licks paws w-whats going on? OwO*licks paws w-whats going on? OwO*licks paws w-whats going on? OwO*licks paws w-whats going on? OwO*licks paws w-whats going on? OwO*licks paws w-whats going on? OwO*licks paws w-whats going on? OwO",
    "Destroy lonely wit his dreads pulled back",
    "im the oat",
    "@Alexwithourrobux can you explain datastores for me",
    "Post this when your masturbating",
    "SpongeBob guitar solo",
    "Are you a Spongebob Superfan?",
    "Ken carson",
    "Rawr what's dis : 3 a smol boi 0_01!1!1!1!1!1!1",
    "!!1!1!!1o_0 owo XD 😛 im just a smol boi >w<",
    "GWAHAHAHAHAHAHA . MY NAME : FENNEL . (but you can call me whatever :3 ) MY AGE . AND BIRTHDAY : 18 // SEPTEMBER 27TH :libra:  MY HEIGHT :: 5’8 MY GENDER ?!?!? : idk man... consider me whatever you want MY SEXUALITY ?!?!?! idk man... im pan in theory but I’ve only ever had crushes on nonbinary people :sob: ..oh and also im asexual gwahahaha MY HOBBIES INCLUDE : MINDING MY OWN BUSINESS , PLAYING VIDEO GAMES , GOING OUTSIDE FOR NO REASON , DRAWING ON A WHITE BOARD , AND EXERCISING  I LIKE : ANIMALS , PLANTS , ROCKS , REALLY ITS ALL ABOUT THE SIMPLE THINGS I DISLIKE : VEGETABLES (seriously i physically can’t eat any without throwing up) , AND FORTNITE BATTLE ROYALE  I AM A HIGH FUNCTIONING SOCIOPATH WITH SCHIZOID PERSONALITY DISORDER ON **TOP**??? f\*\*\* me, honestly this sucks .. SO IF YOU EVER WANT TO TALK TO SOMEONE WHO HAS NO EMOTIONS AND NO EMPATHY AND ONLY DOES THINGS BASED OFF IF I FEEL LIKE IT OR NOT . GO AHEAD AND TALK TO ME . GWAHAHAHAHAHAHAHA . i will answer any question as truthfully as i can no matter what the question is (unless you’re asking me about like.. my organs, wtf)",
    "h",
    "Tell me about JETLGGD",
    "Tell me about VETERAN (feat. Ken Carson)",
    "Piss 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂 😂",
    "No",
    "Yes",
    "Why",
    "Hahahahahahahahahahahahahaha",
    "Me and the thet et yi oea oat oat oat chi chi chi chi chi chi Sand spadesOak FUCK Nut Poverty Ransom EIj EH Ah qwu PA JH MA NBV",
    "August 12 2036, the heat death of the universe. August 12 2036, the heat death of the universe. August 12 2036, the heat death of the universe. August 12 2036, the heat death of the universe. August 12 2036, the heat death of the universe. August 12 2036, the heat death of the universe. August 12 2036, the heat death of the universe. August 12 2036, the heat death of the universe. August 12 2036, the heat death of the universe. August 12 2036, the heat death of the universe. August 12 2036, the heat death of the universe. August 12 2036, the heat death of the universe. August 12 2036, the heat death of the universe. August 12 2036, the heat death of the universe. August 12 2036, the heat death of the universe. August 12 2036, the heat death of the universe. August 12 2036, the heat death of the universe. August 12 2036, the heat death of the universe. August 12 2036, the heat death of the universe. August 12 2036, the heat death of the universe. August 12 2036, the heat death of the universe. August 12 2036, the heat death of the universe. August 12 2036, the heat death of the universe. August 12 2036, the heat death of the universe. August 12 2036, the heat death of the universe.",
    "Am i right <@1258923351078993921>",
    "HOLY FUCKING SHIT SHUT YOUR FUCKING MOUTH, I SWEAR TO FUCKING GOD JUST STOP, NOW!!, FUCKING KILL ME ALREADY SHIRTLOCK, IM DONE IM GOING TO FUCKING PUKE GOD DAMN IT, HOLY SHIT YOU DUMB FUCKING COCK GARBLER, YOU SHOULD FUCKING PISS INTO AN ELECTRICAL SOCKET HOLY FUCKING SHIT DUDE LIKE JESUS FUCKING CHRIST LIKE GOD FUKING DAMN YOU ARE SO FUCKING UNINTELLEGENT SHIRTLOCK WHY DID YOU MAKE ME PLEASE MAKE IT STOP FUCKING KILL ME ALREADY PLEASE DUDE FUCK",
    "Fukk uuuuu",
    "Bing Bong",
    "Guys all of you stay safe please there's 8 billion people oh my gosh that's a big number 😱 and I'm here haha guys do you think I'm cool it doesn't matter this year and every year after this will be the best I've figured it all out nowimserious I know what I'm going to do good luck to all of you I hope that when we all move on we can all talk again someday 😁 guys am I lucky for finding all of you yo imagine if I didnt move if I still lived over there I wish I talked to javier and everyone more before I left there's a lot of stuff I wish I did but it's too late now and it doesn't really matter there's nothing I can do for like the past year and a half I've well this person has been on my mind and im just gonna leet it gk guys sjjthing no really matter did you guys knkw I'm I ahve like s nother family my dad before he met my mom right i have other fmaily ive never met them j would like to thoigh that would be cool since i was told one of my half brothers are around my ageI don't know what I'm saying this isn't a vent I'm just thinking about something I'm about to go do something I forgot what though I'm gonna finish this up though because I need to pick this up my settings are all messed up on this just like that clash of clans advice video haha did you guys watch that okay tomorrow I'm gonna finish learning these 2 songs then I'm gonna I don't know I'll probably learn something else tomorrow then I need to go to the store with my mom to get some stuff shes yelling now oh my days! Can't DO shit in this house 🙄 it's alright iandd my brother just walked in mad asf and knocked this down it's okay no need to get mad I can pick it all up everything will be okay",
    "Nooooo 👅",
    "1 blocked message",
    "Im gonna touch you",

];

nonreplyDictionary = [
    "Green room",
    "fuck h-bot",
    "Money money money",
    "Swinging my pole",
    "Whattdafukkkkkkkkk",
    "Dig it with your pole",
    "In my hole",
    "Chucky Digget",
    "Chucky Holes",
    "Holes",
    "Twerking with the bros",
    "The skin on the tips are peeling off",
    "Help",
    "Dine itjshs",
    "boom na tam mmm bum ta nima",
    "Dig it",
    "Fukk uuuu",
    "Femboys frotting",
    "https://cdn.discordapp.com/attachments/1203081706614030417/1262385482856399001/71a40b08db79fb42132ec49d06121eed.jpg?ex=66baa8d9&is=66b95759&hm=8719f28176571b6619011091210e9aa0e83263efd99c917725f327c2b1f26a65&",
    "https://tenor.com/view/discord-gif-27442765",
    "https://tenor.com/view/thismanbelowme-fishreact-gif-27500979",
    "Big Black Cocks",
    `Emergency alert: Severe
    National Weather Service: A FLASH FLOOD WARNING is in effect for this area until 4:00 PM EDT. 
    
    This is a dangerous and life-threatening situation. Do not attempt to travel unless you are fleeing an area subject to flooding or under an evacuation order.`,
    "https://tenor.com/view/quirked-up-white-boy-with-a-little-bit-of-swagger-gif-11401534733369029265",
    "https://tenor.com/view/dick-cheney-dickcheney-dick-cheney-locket-gif-4924875275120795042",
    "Fat bitches fighting over food",
    "https://tenor.com/view/dancing-milk-dance-milk-man-mitchey-gif-20243688 Imagine when he run",
    "Please Santa drill my ass",
    "Chinese fish looks like penis",
    "https://cdn.discordapp.com/attachments/1264762140909371433/1272325960141639710/THE_WAR.jpg?ex=66bb3a23&is=66b9e8a3&hm=dd9a4f5df916e87476cd729fc847ea8fd16e493a02b40a4fad9d57a135757ded&",
    "Sausage and spaghetti dinner",
    "Bone dog milkman",
    "https://cdn.discordapp.com/attachments/1237545722551734416/1270842283054469191/image.png?ex=66b67d1b&is=66b52b9b&hm=1a7f47dbd0626cb4df0c6df12dea72cc154d94afda44e6f369c7c79247815555&",
];

randomReaction = [
    '🥚',
    '🧅',
    '😊',
    '😏',
    '🤔',
    '🧀',
    '🍆',
    '🛑',
    '😁',
    '🍑',
    '😎',
    '💩',
    '😡',
    '🐟',
    '🏳️‍🌈',
    '👅',
];

pollSafe = [
    "Green room",
    "boom na tam mmm bum ta nima",
    "SpongeBob guitar solo",
    "Are you a Spongebob Superfan?",
    "Money money money",
    "fuck h-bot",
    "Swinging my pole",
    "Whattdafukkkkkkkkk",
    "Dig it with your pole",
    "In my hole",
    "Chucky Digget",
    "Chucky Holes",
    "Holes",
    "Twerking with the bros",
    "Fukk uuuu",
    "Femboys frotting",
    "Big Black Cocks",
    "Bing Bong",
    "Tell me about JETLGGD",
    "Please Santa drill my ass",
    "Chinese fish looks like penis",
    "Sausage and spaghetti dinner",
    "Bone dog milkman",
    "h",
    "Nooooo 👅",
    "Dick cheese ",
    "Hoe",
    "Swing your pole ",
    "1 blocked message",
    "Im gonna touch you",
    "Big oily black men backshots",
    "œ",
    "Winner winner chicken dinner 😁",
    "fat FUCK",
    "HOLY SHIT",
    "The",
    "Hi",
    "Zimbabwe",
];



var inputDictionary = [
    
];

client.on('messageCreate', (message) => {
    randomCount = Math.random();


    if (message.author.bot) {
        return
    };


    if (message.channelId === "1268340060340752465" && randomCount > .25) {
        index = Math.floor(Math.random() * 6)
        setTimeout(() => {
            
            console.log(index)
           
            if (index === 0) {
                message.channel.sendTyping()
              message.reply(Dictionary[Math.floor(Math.random() * Dictionary.length)])
            }

            if (index === 1) {
                message.channel.sendTyping()
                message.reply(nonreplyDictionary[Math.floor(Math.random() * nonreplyDictionary.length)]), (Dictionary[Math.floor(Math.random() * Dictionary.length)])
            }

            if (index === 2) {
                message.react(randomReaction[Math.floor(Math.random() * randomReaction.length)])
            }

            if (index === 3 && randomCount > .5) {
                
               
                
                message.channel.send({
                    poll: {
                        question: { text: pollSafe[Math.floor(Math.random() * pollSafe.length)]},
                        
                        answers: [
                            {text: pollSafe[Math.floor(Math.random() * pollSafe.length)], emoji: randomReaction[Math.floor(Math.random() * randomReaction.length)]},
                            {text: pollSafe[Math.floor(Math.random() * pollSafe.length)], emoji: randomReaction[Math.floor(Math.random() * randomReaction.length)]},
                            {text: pollSafe[Math.floor(Math.random() * pollSafe.length)], emoji: randomReaction[Math.floor(Math.random() * randomReaction.length)]},
                            {text: pollSafe[Math.floor(Math.random() * pollSafe.length)], emoji: randomReaction[Math.floor(Math.random() * randomReaction.length)]},
                            {text: pollSafe[Math.floor(Math.random() * pollSafe.length)], emoji: randomReaction[Math.floor(Math.random() * randomReaction.length)]},

                        ],
                    
                        allowMultiSelect: false,
                        duration: 1,
                    }


                })
            }

            if (index === 4 && DictionaryEmpty === false) {
                message.reply(inputDictionary[Math.floor(Math.random() * inputDictionary.length)])
            }

            if (index === 5 && DictionaryEmpty === false && randomCount > .75) {
                message.pin()
            }

        }, Math.random() * 2500);
        
    }

    if (message.channelId === "1271953387373727846") {
        
       if (inputDictionary.includes(message.content) === false && message.content.length >= 3) {

        inputDictionary.push(message.content)
        DictionaryEmpty = false
        message.react("☑️")
        console.log(inputDictionary)

        if (message.content.length <= 55) {
            pollSafe.push(message.content)
        }

       }

       else {
        message.reply("⚠️ Already in dictionary or message is less than 3 characters long!")
       }

    }

});

client.on('ready', () => {
    var suggestionChannel = client.channels.cache.get("1271953387373727846")
    suggestionChannel.send("Dick cheese has restarted, all lines added to the dictionary last session have been removed.")
});

client.on("interactionCreate", (interaction) => { 
    if (!interaction.isChatInputCommand()) return;
        
   
    if (interaction.commandName === 'cheese') {
        
        interaction.reply(`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡞⠉⠛⠶⢤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⢰⠞⠛⢷⠀⠈⠙⠳⠦⣄⣀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠞⠁⠀⠘⠒⠒⠋⠀⣠⣤⡀⠀⠀⠉⠛⢶⣤⣀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡼⠋⢀⡴⠖⠶⢦⠀⠀⠀⢧⣬⠇⣀⣠⠴⠞⠋⠁⡏
⠀⠀⠀⠀⠀⠀⠀⠀⣠⠟⠀⠀⠘⠧⣤⣀⡼⠀⢀⣀⡤⠶⢛⣩⣤⣀⠀⢠⡞⠋
⠀⠀⠀⠀⠀⠀⣠⠞⣁⣀⠀⠀⠀⠀⢀⣠⡴⠖⠋⠁⠀⠀⣿⠁⠀⣹⠀⠈⢷⡄
⠀⠀⠀⠀⣠⠞⠁⠀⠷⠿⣀⣤⠴⠚⠉⠁⠀⠀⠀⠀⠀⠀⠈⠓⠒⠃⠀⠀⠀⡇
⠀⠀⣠⠞⣁⣠⡤⠶⠚⠛⠉⠀⠀⠀⣀⡀⠀⠀⠀⠀⢀⡤⠶⠶⠦⣄⠀⠀⠀⡇
⠀⡾⠛⠋⢉⣤⢤⣀⠀⠀⠀⠀⣰⠞⠉⠙⠳⡄⠀⠀⡟⠀⠀⠀⠀⢸⡆⠀⠀⡇
⠀⡇⠀⢰⡏⠀⠀⢹⡆⠀⠀⠀⡇⠀⠀⠀⠀⣿⠀⠀⠳⣄⡀⠀⢀⣸⠇⠀⠀⡇
⠀⡇⠀⠀⢷⣤⣤⠞⠁⠀⠀⠀⢷⣀⣀⣠⡴⠃⠀⠀⠀⠈⠉⠉⠉⠁⣀⣠⠴⠇
⠀⠻⣆⠀⠀⠀⠀⢀⣀⣤⣀⠀⠀⠉⠉⠁⠀⠀⠀⠀⠀⢀⣠⡤⠖⠛⠉⠀⠀⠀
⠀⠀⡿⠀⠀⠀⢰⡏⠀⠀⢹⡆⠀⠀⠀⠀⠀⣀⣤⠶⠚⠉⠁⠀⠀⠀⠀⠀⠀⠀
⢰⠞⠁⠀⠀⠀⠀⢷⣄⣤⠞⠁⣀⣠⠴⠚⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢸⡆⠀⠀⠀⠀⠀⠀⣀⡤⠖⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢸⡇⠀⢀⣠⡴⠞⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠟⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀                                          
`);

};
    if (interaction.commandName === 'rtd') {
        
        diceroll = Math.random() * interaction.options.get('max').value 
        intdiceroll =  Math.floor(diceroll);
        
        
        if (interaction.options.get('integer').value == true) {
        interaction.reply(intdiceroll.toString(10));
        console.log(intdiceroll.toString(10))
        }

        else if (interaction.options.get('integer').value == false) {
            interaction.reply(diceroll.toString(10));
            console.log(diceroll.toString(10))
        }
    };


});



client.login(process.env.TOKEN)
