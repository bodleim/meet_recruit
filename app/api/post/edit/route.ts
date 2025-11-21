import { connectDB } from "@/app/util/database";
import { ObjectId } from "mongodb";

export async function PUT(req: Request) {
  const body = await req.json();

  const edit_content = {
    title: body.title,
    content: body.content,
  };

  const db = (await connectDB).db("forum");
  await db
    .collection("post")
    .updateOne({ _id: new ObjectId(String(body._id)) }, { $set: edit_content });

  return Response.json("수정완료", { status: 200 });
}
