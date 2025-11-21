import { connectDB } from "@/app/util/database";
import { ObjectId } from "mongodb";

export async function POST(req: Request) {
  const body = await req.json();

  // 검사
  if (!body.title) {
    return Response.json("제목 입력 필수", { status: 400 });
  }

  const db = (await connectDB).db("forum");
  await db.collection("post").insertOne(body);

  return Response.json("저장완료", { status: 200 });
}
