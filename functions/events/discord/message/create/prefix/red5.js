const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});await lib.discord.channels['@0.3.2'].messages.create({  "channel_id": `${context.params.event.channel_id}`,  "content": "",  "tts": false,  "components": [    {      "type": 1,      "components": [        {          "style": 3,          "label": `التالي`,          "custom_id": `omar_2`,          "disabled": false,          "type": 2        },        {          "style": 5,          "label": `السابق `,          "url": `https://discord.com/channels/1203956999168200816/1207067843032776835`,          "disabled": false,          "type": 2        }      ]    }  ],  "embeds": [    {      "type": "rich",      "title": `قوانين فيتك : صفحة 3/8`,      "description": `**10. يمنع نشر الأعمال الخاصة من سيرفرات، سلع، أو الترويج لحسابات التواصل الاجتماعي.**\n\n\n**11. يمنع تشغيل مقاطع صوتيه في المايك أو استخدام برنامج الـ ساوند باد + يمنع ارسال مقاطع مزعجه ( خرشات وصوت عالي مزعج ).**\n\n\n**12. يمنع أزعاج الادارة.**\n\n\n**13. يمنع الرد على الخطيئة بالخطيئة.**`,      "color": 0xcac689,      "thumbnail": {        "url": `https://cdn.discordapp.com/attachments/1203981520214302730/1210699966855512114/InShot_20240223_225946611.jpg?ex=65eb8335&is=65d90e35&hm=61c679303a6ef3adab892d1526301ec5d89d94905ed777247b227e2f209e7f78&`,        "height": 0,        "width": 0      }    }  ]});