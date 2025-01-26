import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            Built by{" "}
            <a
              href="https://github.com/BlueRabbit-ai"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Ramin
            </a>
            . The source code is available on{" "}
            <a
              href="https://github.com/BlueRabbit-ai"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
        <p className="text-center text-sm md:text-left">
          <Link href="/terms" className="underline underline-offset-4">
            Terms of Service
          </Link>
          {" | "}
          <Link href="/privacy" className="underline underline-offset-4">
            Privacy
          </Link>
        </p>
      </div>
    </footer>
  )
}

