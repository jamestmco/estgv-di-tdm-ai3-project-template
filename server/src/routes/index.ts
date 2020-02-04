<<<<<<< HEAD
import { Router } from 'express';
=======
import { Request, Response, Router } from 'express';
>>>>>>> dc1b8d0a80793683eeda13f7237f9a5fbdb15cc2
import AccountRouter from './Account';
import CommunicationRouter from './Communication';
import SupportRouter from './Support';
import UserRouter from './Users';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users', UserRouter);
router.use('/communication', CommunicationRouter);
router.use('/support', SupportRouter);
router.use('/account', AccountRouter);

// Export the base-router
export default router;