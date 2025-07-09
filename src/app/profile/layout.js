import '../globals.css'

export const metadata = {
  title: 'Lex - User Profile',
  description: 'Edit your profile information',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
