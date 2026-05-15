export default function Home() {
  return (
    <main style={{fontFamily:'system-ui',maxWidth:960,margin:'0 auto',padding:'4rem 1.5rem',lineHeight:1.6}}>
      <h1 style={{fontSize:'3rem',fontWeight:800,marginBottom:'1rem'}}>Agent Sentinel</h1>
      <p style={{fontSize:'1.25rem',marginBottom:'2rem'}}>
        Secure AI Agent Access with Open-Source MCP Governance.
      </p>
      <p>
        Agent Sentinel helps organizations securely connect AI agents to external tools using MCP authentication,
        tool governance, audit logging, and PII protection.
      </p>
      <div style={{display:'flex',gap:'1rem',marginTop:'2rem'}}>
        <a href='https://cal.com' style={{padding:'0.75rem 1.25rem',background:'#111',color:'#fff',borderRadius:8,textDecoration:'none'}}>Book a Demo</a>
        <a href='https://github.com/AGenNext/Agent-Security' style={{padding:'0.75rem 1.25rem',border:'1px solid #ccc',borderRadius:8,textDecoration:'none'}}>View GitHub</a>
      </div>
    </main>
  )
}
