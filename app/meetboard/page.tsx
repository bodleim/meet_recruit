import "@/styles/meetboard.css";

export default function Meetboard() {
  return (
    <main className="main-bard">
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
        <div className="board-row">
          <div>1</div>
          <div>스터디 모집합니다 (서울/프론트엔드)</div>
          <div>장지원</div>
          <div>2025-11-04</div>
          <div>7/4</div>
        </div>

        <div className="board-row">
          <div>2</div>
          <div>딥러닝을 위한 선형대수학 스터디</div>
          <div>이정현</div>
          <div>2025-11-04</div>
          <div>5/1</div>
        </div>
      </div>
    </main>
  );
}
