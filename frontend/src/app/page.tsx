export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <section className="w-full max-w-3xl rounded-3xl border border-black/10 bg-[var(--surface)] p-8 shadow-[0_24px_80px_rgba(31,41,55,0.08)] sm:p-12">
        <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-[var(--accent)] uppercase">
          withtutu
        </p>
        <h1 className="text-4xl leading-tight font-semibold tracking-[-0.04em] sm:text-6xl">
          一张写给未来 AI Agent 产品经理的交互式探索地图。
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted-foreground)] sm:text-lg">
          前端工程基线已就绪，后续功能将按迭代逐步建设。
        </p>
      </section>
    </main>
  );
}
