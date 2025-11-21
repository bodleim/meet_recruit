/*
  .main-board
    \.subnav-wrapper
      \.subnav-title
      |.subnav-tabs
        \(button) 여러 개 (카테고리 탭)
    \.board-toolbar
      \.toolbar-title
      |.toolbar-tabs
        \(button) 여러 개 (정렬/필터용)
    \.board-container
      \.board-row (헤더)
      \.board-row (게시글 여러 개)
        \(div) 번호 / 제목 / 작성자 / 작성일 / 모집인원
*/

import "@/styles/meetboard.css";
import Link from "next/link";

// 게시물 데이터베이스 연결
import { connectDB } from "../util/database";

export default async function Meetboard() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <main className="main-board">
      <div className="subnav-wrapper">
        <div className="subnav-title">스터디</div>
        <div className="subnav-tabs">
          <button className="tab active">프로그래밍</button>
          <button className="tab">자격증</button>
        </div>
      </div>

      {/* 표 위 컨트롤 바 */}
      <div className="board-toolbar">
        <div className="toolbar-title">
          <span className="count">2</span>개의 모집 글이 있습니다.
        </div>
        <div className="toolbar-tabs" role="tablist" aria-label="정렬/필터">
          <button className="tab-chip active" role="tab" aria-selected="true">
            <span className="check" aria-hidden="true">
              ✔
            </span>
            최신순
          </button>
          <button className="tab-chip" role="tab">
            인원순
          </button>
          <button className="tab-chip" role="tab">
            조회수
          </button>
          <button className="tab-chip" role="tab">
            추천순
          </button>
        </div>
      </div>

      {/*모집 게시글 리스트*/}
      <div className="board-container">
        <div className="board-row board-header">
          <div>번호</div>
          <div>제목</div>
          <div>작성자</div>
          <div>작성일</div>
          <div>모집인원</div>
        </div>
        {result.map((item, i) => (
          <div className="board-row" key={i}>
            {" "}
            {/* 다이나믹 라우트 */}
            <div>{item.number}</div>
            <Link href={`/detail/${item._id}`}>
              <div>{item.title}</div>
            </Link>
            <div>{item.author}</div>
            <div>{item.date}</div>
            <div>{item.recruit_amount}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
