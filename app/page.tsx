import "@/styles/landing.css";

export default function Home() {
  return (
    <main className="landing">
      <div className="container">
        <nav className="site-nav">
          <div className="site-nav__brand">That's Meeting</div>
          <div className="site-nav__spacer" />
          <a href="/sign-in">로그인</a>
          <a href="/sign-up">가입</a>
        </nav>

        <section className="hero">
          <span className="hero__eyebrow">Build dream, Just doing.</span>
          <h1 className="hero__title">모임을 간편하게<br/>그건모임 에서.</h1>
          <p className="hero__subtitle">같은 목표, 함께하는 발전</p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="/sign-up">무료로 시작</a>
            <a className="btn btn--ghost" href="/sign-in">로그인</a>
          </div>
        </section>

        <section className="features">
          {["실시간 모집", "노쇼 회원 방지", "필터링"].map((t) => (
            <article className="feature-card" key={t}>
              <h3 className="feature-card__title">{t}</h3>
              <p className="feature-card__desc">내ㅐㅐㅐㅐ용</p>
            </article>
          ))}
        </section>

        <footer className="site-footer">
          <span>© {new Date().getFullYear()} dev.Jun</span>
          <span>Privacy · Terms</span>
        </footer>
      </div>
    </main>
  );
}
