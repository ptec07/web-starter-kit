export function Footer() {
  return (
    <footer className="border-t py-4 text-center text-xs text-muted-foreground">
      <p>
        Built with{" "}
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline underline-offset-4 hover:text-foreground"
        >
          Next.js
        </a>{" "}
        &{" "}
        <a
          href="https://ui.shadcn.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline underline-offset-4 hover:text-foreground"
        >
          shadcn/ui
        </a>
      </p>
    </footer>
  )
}
