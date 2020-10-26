
import { Request, Response, Router } from 'express';
import { INTERNAL_SERVER_ERROR } from 'http-status-codes';
import { buildApiErrorMessage, logger } from '../shared/index';
import { sendEmail } from 'src/email';

const router = Router();

/**
 * Send email on behalf of the logged in user
 * @param req Request
 * @param res Response
 */
async function handleCreateSupportTicket(req: Request, res: Response) {
    const SupportRequest = req.body as Api.SupportRequest;
    
    try{
        logger.info(`Got support ticket request ${JSON.stringify(SupportRequest)}`);
        await sendEmail(
            SupportRequest.email,
            process.env.ADMIN_SUPPORT_EMAIL || 'j.pascoa99@gmail.com',
            SupportRequest.subject,
            SupportRequest.message);
        //res.status(200);
        logger.info(`Support request ticket handled`);
        res.status(200)
        .send(buildApiErrorMessage('OK'));
    } catch(err) {
        res.status(INTERNAL_SERVER_ERROR);
        //res.status(INTERNAL_SERVER_ERROR).send(buildApiErrorMessage('Not implemented'));
    }
}
// Register routes
router.post('/ticket', handleCreateSupportTicket);

export default router;