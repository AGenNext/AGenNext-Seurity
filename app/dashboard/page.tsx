const modules = [
  ['MCP Authentication','OAuth/OIDC based agent-to-tool auth'], 
  ['Tool Governance','Allowlists and policy controls'],
  ['Audit Logs','Full visibility into agent actions'],
  ['PII Protection','Detection and redaction'],
  ['Secrets Abstraction','Brokered credential access'],
  ['Deployment Hardening','Production readiness checks']
]

export default function Dashboard(){
  return (
    <main className='container'>
      <h1>Agent Sentinel Dashboard</h1>
      <p>Operational control plane for secure AI agents.</p>
      <div className='grid grid-3' style={{marginTop:'2rem'}}>
        {modules.map(([title,desc]) => (
          <div className='card' key={title}>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
