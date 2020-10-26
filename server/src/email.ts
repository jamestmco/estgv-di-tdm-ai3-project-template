import { logger } from './shared/Logger';
import sendGridEmailClient from '@sendgrid/mail';

/**
 * Abstract sending of email
 * @param from Email address
 * @param to Email address
 * @param subject Title of message
 * @param message Contents of message
 */
export function sendEmail(
  from: string,
  to: string,
  subject: string,
  message: string,
) {
  sendGridEmailClient.setApiKey(process.env.SENDGRID_API_KEY as string);
   const msg = {
    to: to,
    from: from,
    subject: subject,
    text: message,
    html: '<p>'+message+'</p>',
  };
  logger.info(`Sending email ${JSON.stringify(msg)}`);
  return sendGridEmailClient.send(msg);
}
