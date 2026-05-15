import './globals.css'

export const metadata = {
  title: 'Agent Sentinel',
  description: 'Secure AI Agent Access with Open-Source MCP Governance',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
