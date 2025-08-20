app/page.js

import ChatWidget from "../components/ChatWidget";

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", padding: "2rem" }}>
      <header style={{ display: "flex", justifyContent: "space-between", maxWidth: 960, margin: "0 auto" }}>
        <h1>AI HR Agent</h1>
        <nav style={{ display: "flex", gap: 16 }}>
          <a href="#about">About</a>
          <a href="#try">Try it</a>
        </nav>
      </header>

      <section id="about" style={{ maxWidth: 960, margin: "3rem auto 2rem" }}>
        <h2>Careers Assistant (EN / FR / AR)</h2>
        <p>Ask about roles, process, or say “apply”.</p>
      </section>

      <section id="try" style={{ maxWidth: 960, margin: "2rem auto" }}>
        <div style={{ padding: 24, border: "1px solid #e5e7eb", borderRadius: 12 }}>
          <p>Open the chat at the bottom right and say hello 👋</p>
        </div>
      </section>

      <ChatWidget />
    </main>
  );
}
