const functions = require('firebase-functions');
const admin = require('firebase-admin');
const sgMail = require('@sendgrid/mail');

admin.initializeApp();

exports.sendMessage = functions.database.ref('/contactForm/{pushId}')
  .onCreate((snapshot) => {
    const msgData = snapshot.val();

    const sgApiKey = functions.config().sendgrid.key;
    sgMail.setApiKey(sgApiKey);

    /* save message into an object*/
    const msg = {
      to: 'thomasnaylor@outlook.com',
      from: msgData.from,
      subject: 'Thomas Naylor | Contact Me',
      text: msgData.text,
      html: '<strong>' + msgData.text + '<strong>'
    };

    return sgMail.send(msg);
});
