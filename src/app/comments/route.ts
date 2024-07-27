import { NextRequest } from "next/server"; // Object | Provide methods to managing query parameters easily.
import { comments } from "./data";



// GET all comments
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams; // Access all query parameters
  const query = searchParams.get('query'); // get parameters called query
  const filteredComments = query ? comments.filter(comment => comment.text.includes(query)) : comments;
  

  return Response.json(filteredComments);
}

// POST (Add) a comment
export async function POST(request: Request) {
  const comment = await request.json();
  const newcomment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newcomment);
  return new Response(JSON.stringify(newcomment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
