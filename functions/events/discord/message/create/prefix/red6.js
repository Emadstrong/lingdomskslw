const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.2'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "components": [
    {
      "type": 1,
      "components": [
        {
          "style": 3,
          "label": `التالي`,
          "custom_id": `saud`,
          "disabled": false,
          "type": 2
        },
        {
          "style": 5,
          "label": `السابق`,
          "url": `https://discord.com/channels/1203956999168200816/1207073578437312642`,
          "disabled": false,
          "type": 2
        }
      ]
    }
  ],
  "embeds": [
    {
      "type": "rich",
      "title": `قوانين فيتك : صفحة 4/8`,
      "description": `**14. يمنع حرق الانمي، المسلسلات، الأفلام، أو حتى تسريب المانجا بدون أخفاء الكلام أو الصور.**\n\n\n**15. يمنع ان يكون هناك سب او كلام مخل فالبايو او محاوله تلميح لسب او افتعال المشاكل بالبايو.**\n\n\n**16. ممنوع وضع صورة عرض مخله منعا باتاََ.**\n\n\n**17. ممنوع استخدام أوامر البوت في رومات غير الروم الخاص بالأوامر.**`,
      "color": 0xcac083,
       "thumbnail": {
        "url": `https://cdn.discordapp.com/attachments/1203981520214302730/1210699966855512114/InShot_20240223_225946611.jpg?ex=65eb8335&is=65d90e35&hm=61c679303a6ef3adab892d1526301ec5d89d94905ed777247b227e2f209e7f78&`,
        "height": 0,
        "width": 0
      }
    }
  ]
}); 