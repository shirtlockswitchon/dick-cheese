require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
 
  {
    name: 'cheese',
    description: 'cheese',
  },


  {
    name: 'rtd',
    description: 'roll the dice',
    options: [
        {
            name: 'max',
            description: 'highest value the roll can return',
            type: ApplicationCommandOptionType.Number,
            required: true
        },
        {
            name: 'integer',
            description: 'roll returns as integer if true',
            type: ApplicationCommandOptionType.Boolean,
            required: true
        }
    ]
  },
  
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Registering slash commands...');

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );

    console.log('Slash commands were registered successfully!');
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
})();