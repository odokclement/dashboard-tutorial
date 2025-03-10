import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID || "",
      clientSecret: process.env.AUTH_GITHUB_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "Enter your email" },
        password: { label: "Password", type: "password", placeholder: "Enter password" }
      },
      async authorize(credentials) {
        // Hardcoded user data
        const users = [
          { id: "1", name: "John Doe", email: "john@example.com", password: "password123" },
          { id: "2", name: "Jane Smith", email: "jane@example.com", password: "securepass" }
        ];

        // Find user
        if (!credentials) {
          throw new Error("Credentials not provided");
        }
        const user = users.find(u => u.email === credentials.email && u.password === credentials.password);

        if (user) {
          return { id: user.id,name: user.name,email: user.email };
        }
        throw new Error("Invalid credentials");
      }
    })
  ],
  
  // Add other NextAuth configuration options here
});

export { handler as GET, handler as POST };
