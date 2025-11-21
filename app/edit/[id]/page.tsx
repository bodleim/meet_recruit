import { connectDB } from "@/app/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props: { params: { id: string } }) {
  const db = (await connectDB).db("forum");
  const result = await db.collection("post").findOne({
    _id: new ObjectId(props.params.id),
  });

  if (!result) {
    return <div>존재하지 않는 게시물입니다.</div>;
  }

  return (
    <div className="p-20">
      <h4>수정하기</h4>

      <form action="/api/post/edit" method="POST">
        <input name="title" defaultValue={result.title} />
        <input name="content" defaultValue={result.content} />

        {/* 프론트에 보이지않음, _id 전송 목적 */}
        <input type="hidden" name="_id" value={result._id.toString()} />

        <button type="submit">수정</button>
      </form>
    </div>
  );
}
