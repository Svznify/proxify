import { Router, type Request, type Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json(
  { 
    message: 'NekoProxy is ready🎉',
    endpoints: [
      {
        method: 'GET',
        usage: '/fetch',
        description: 'Fetch a video stream from a URL',
        query: {
          url: 'The URL of the video or image.',
          ref: 'The referrer URL'
        }
      },
      {
        method: 'GET',
        usage: '/fetch/segment',
        description: 'Fetch a video segment from a URL',
        query: {
          url: 'The URL of the video segment.'
        }
      },
      /// added
      {
        method: 'GET',
        usage: '/health',
        description: 'Check the health status of the server'
      }
    ]
   }
  );
});

router.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK' });
});

export default router;
