import '../../globals.css'

export const metadata = {
  title: 'Lex - New Workspace',
  description: 'A new workspace experience',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
