import { connectDB } from "@/app/util/database";
import { ObjectId } from "mongodb";
import "@/styles/detail.css";

export default async function Detail({ params }: { params: { id: string } }) {
  const db = (await connectDB).db("forum");
  const post = await db.collection("post").findOne({
    _id: new ObjectId(params.id),
  });

  if (!post) {
    return <div>존재하지 않는 게시물입니다.</div>;
  }

  return (
    <div className="detail-page">
      <div className="detail-back-row">
        <a href="/" className="detail-back-btn"></a>
      </div>
      <div className="detail-container">
        <main className="detail-main">
          <header className="detail-header">
            <h1 className="detail-title">{post.title}</h1>

            <div className="detail-meta">
              <span className="detail-author">{post.author ?? "작성자"}</span>
              <span className="detail-dot">.</span>
              <span className="detail-text">조회수 {post.views ?? 0}</span>
            </div>
          </header>

          <div className="detail-divider"></div>

          <section className="detail-content-section">
            <pre className="detail-content">{post.content}</pre>
          </section>
        </main>

        <aside className="detail-side">
          <button className="detail-status">모집중</button>
          <button className="detail-btn">
            <span className="detail-icon">❤️</span>
            <span className="detail-btn-label">0</span>
          </button>
          <button className="detail-btn">
            <span className="detail-icon">⇪</span>
            <span className="detail-btn-label">공유</span>
          </button>
        </aside>
      </div>
    </div>
  );
}
