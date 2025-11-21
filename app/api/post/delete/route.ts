import { connectDB } from "@/app/util/database";
import { ObjectId } from "mongodb";

export async function DELETE(req: Request) {
  const id: string = await req.text(); // fetch body는 text임

  const db = (await connectDB).db("forum");
  await db.collection("post").deleteOne({ _id: new ObjectId(id) });
}
