import { cookies, headers } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();

  // || Other way to set cookie
  cookies().set("resultsPerPage", "20");

  const theme = request.cookies.get("theme");
  console.log(theme);

  console.log(headerList.get("User-Agent"));
  console.log(requestHeaders.get("Authorization"));

  console.log(cookies().get("resultsPerPage")); 


  

  return new Response("<h1>Profile API data</h1>", {
    headers: { "Content-Type": "text/html", "Set-Cookie": "theme=dark" },
  });
}

// || COOKIES IN ROUTE HANDLERS
// - Are small pieces of data that a server sends to a user's web brower
// - Browser may store the cookies and send it back to the same server with later requests

// || COOKIES ARE MAINLY USED FRO THREE PURPOSES
// - Session managemant like logins and shopping cart
// - Personalization like user preferences and themes
// - Tracking like recording and analyzing user behaviour
