import ChatWidget from "../components/ChatWidget";
export default function Page() {
  return (
    <main style={{ minHeight: "100vh", padding: "2rem" }}>
      <h1>AI HR Agent</h1>
      <p>Open the chat at the bottom right and say hello 👋</p>
      <ChatWidget />
    </main>
  );
}
