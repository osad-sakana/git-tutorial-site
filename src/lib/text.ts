const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** `code` 記法を含む文字列を、インラインコード付きの HTML に変換する */
export function withCode(text: string): string {
  return text
    .split(/`([^`]+)`/)
    .map((part, i) =>
      i % 2
        ? `<code class="font-mono text-[0.85em] text-orange-700 bg-orange-50 px-1.5 py-0.5 rounded border border-orange-200">${escape(part)}</code>`
        : escape(part),
    )
    .join('')
}
