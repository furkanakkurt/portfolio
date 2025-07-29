import { ImageResponse } from '@vercel/og';
// App router includes @vercel/og.
// No need to install it.
 
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          fontSize: 20,
          color: 'black',
          background: 'white',
          width: '100%',
          height: '100%',
          padding: '20px 100px',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src="https://avatars.githubusercontent.com/u/39063959?v=4" alt="Furkan Akkurt" style={{ width: '300px', height: '300px', borderRadius: '50%' }} />
        <h1>Furkan Akkurt</h1>
        <p>Software Engineer</p>
      </div>
    ),
    {
      width: 900,
      height: 450,
    },
  );
}