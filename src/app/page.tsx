 export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", background: "#f8fafc", minHeight: "100vh" }}>
      <header style={{ background: "white", borderBottom: "1px solid #e2e8f0", padding: "1rem 2rem" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#0f172a", margin: 0 }}>
          ⛪ ChurchOS Ghana
        </h1>
        <p style={{ color: "#64748b", margin: "0.25rem 0 0" }}>Church Management System</p>
      </header>

      <div style={{ padding: "2rem", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem", marginTop: "1rem" }}>
          
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
            <h3>👥 Members</h3>
            <p style={{ fontSize: "2rem", fontWeight: "bold", margin: "0.5rem 0" }}>1,248</p>
            <p style={{ color: "#64748b", fontSize: "0.9rem" }}>Total congregation</p>
          </div>

          <div style={{ background: "white", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
            <h3>💰 Tithes</h3>
            <p style={{ fontSize: "2rem", fontWeight: "bold", margin: "0.5rem 0" }}>GH₵ 12,400</p>
            <p style={{ color: "#64748b", fontSize: "0.9rem" }}>This month</p>
          </div>

          <div style={{ background: "white", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
            <h3>📅 Events</h3>
            <p style={{ fontSize: "2rem", fontWeight: "bold", margin: "0.5rem 0" }}>8</p>
            <p style={{ color: "#64748b", fontSize: "0.9rem" }}>Upcoming this week</p>
          </div>

          <div style={{ background: "white", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
            <h3>🏦 Branches</h3>
            <p style={{ fontSize: "2rem", fontWeight: "bold", margin: "0.5rem 0" }}>3</p>
            <p style={{ color: "#64748b", fontSize: "0.9rem" }}>Kumasi, Accra, Takoradi</p>
          </div>
        </div>

        <div style={{ background: "white", marginTop: "2rem", padding: "2rem", borderRadius: "12px" }}>
          <h2>Welcome to ChurchOS Ghana</h2>
          <p>Your admin is now live! ✅</p>
          <p style={{ color: "#64748b" }}>Next steps: Add Member Management, Finance, Attendance modules.</p>
        </div>
      </div>
    </main>
  );
}
