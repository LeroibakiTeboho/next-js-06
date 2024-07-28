// || HOW TO OPT OUT OF CACHING?
// - dynamic mode in Segment Config Option
// - using the request object with the GET method
// - employing dynamic functions like headers() and cookies()
// - using any HTTP method other thab GET
export const dynamic = "force-dynamic"; // by default the value is auto
// - force-dynamic: the handeler is excuted for each user request

// Route handlers are cached by default when using the GET method with the Response object in Next.js

export async function GET() {
  return Response.json({
    time: new Date().toLocaleTimeString(),
  });
}
