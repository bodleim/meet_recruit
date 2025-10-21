import "@/styles/signin.css";

export default function Signin() {
  return (
    <main className="auth-window">
      <div className="container">
        <section className="signin">
          <h2 className="title">That's meeting</h2>
          <h3 className="id-message">ID</h3>
          <input type="text" id="user-id"></input>
          <h3 className="password-message">Password</h3>
          <input type="password" id="user-password"></input>
          <button className="submit">로그인</button>
          <div className="other-help">
            <a className="find-account">ID/PW 찾기</a>
            <a className="move-signup">회원가입</a>
          </div>
        </section>
      </div>
    </main>
  );
}
