export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl border-t border-slate-200 px-4 py-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex items-center gap-3">
          <img src="/GDSC_Logo.png" alt="GDSC NUS Logo" className="h-6 w-auto" />
          <div
            className="font-inter font-normal"
            style={{ color: "var(--color-grey-2570, #3C4043B2)" }}
          >
            © 2025 GDSC NUS. All rights reserved.
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
            <img src="/Instagram.svg" alt="Instagram" className="h-6 w-6 opacity-70 hover:opacity-100 transition" />
          </a>
          <a href="https://www.linkedin.com/in/yourpage" target="_blank" rel="noopener noreferrer">
            <img src="/Link.svg" alt="LinkedIn" className="h-6 w-6 opacity-70 hover:opacity-100 transition" />
          </a>
          <a href="mailto:your@email.com">
            <img src="/Email.svg" alt="Email" className="h-6 w-6 opacity-70 hover:opacity-100 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
}