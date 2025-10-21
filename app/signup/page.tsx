import "@/styles/signup.css";

export default function Signup() {
  return (
    <main className="auth-window">
      <div className="container">
        <section className="signup">
          <h2 className="title">That's meeting</h2>
          <h3 className="id-message">ID</h3>
          <div className="id-input-and-duplicated-checker">
            <input type="text" id="user-id"></input>
            <button className="duplicated-check-btn">중복확인</button>
          </div>
          <h3 className="password-message">비밀번호</h3>
          <input type="password" id="user-password"></input>
          <h3 className="password-message">비밀번호 확인</h3>
          <input type="password" id="user-password-checker"></input>
          <h3 className="nickname-message">닉네임</h3>
          <input type="text" id="user-nickname"></input>
          <button className="submit">회원가입</button>
        </section>
      </div>
    </main>
  );
}
