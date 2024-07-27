import { comments } from "../comments/data";

export async function GET() {
  return Response.json(comments);
}
