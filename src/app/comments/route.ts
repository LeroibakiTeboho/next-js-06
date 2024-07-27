import { comments } from "./data";

// GET all comments
export async function GET() {
  return Response.json(comments);
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
