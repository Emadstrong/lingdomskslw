// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let result = await lib.discord.guilds['@0.2.4'].members.roles.update({
  role_id: `1207073159178879016`,
  user_id: `${context.params.event.member.user.id}`,
  guild_id: `${context.params.event.guild_id}`
})

await lib.discord.interactions['@1.0.1'].followups.ephemeral.create({
  token: `${context.params.event.token}`,
  content: `[**اضغظ هنا للانتقال للصفحة التالية!**](https://discord.com/channels/1203956999168200816/1214557074889904238) <a:emoji_15:1206774856818098227> <:vitk:1204356461032120330>`
});