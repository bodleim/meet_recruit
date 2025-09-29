import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        // 이메일, 패스워드 방식으로 사용자가 직접 DB를 컨트롤 가능
        CredentialsProvider({
            name: "Credentials",
            
            // 로그인 form
            credentials: {
                username: {label: "이메일", type: "text", placeholder: "이메일 입력"},
                password: {label: "비밀번호", type: "password"},
            },

            // 이메일, 패스워드 부분 체크, 맞으면 user 객체 리턴 틀리면 null 리턴
            async authorize(credentials, req) {
                const user = {id: "1", name: "smith", email: "smith@example.com"};

                if (user) {
                    return user;
                } else {
                    return null;
                }
            },
        }),
    ],
});

export { handler as GET, handler as POST };