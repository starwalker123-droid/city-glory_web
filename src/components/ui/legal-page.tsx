import type { LegalDocument } from "@/config/legal";

/**
 * Shared renderer for the mandatory legal documents (terms, complaints,
 * privacy, cookies) — one heading/paragraph/list/link vocabulary reused by
 * all of them instead of four one-off page layouts.
 */
export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <div className="space-y-10">
      {document.sections.map((section, i) => (
        <div key={i} className="space-y-4">
          {section.heading && (
            <h2 className="text-lg font-semibold tracking-tight text-ink">{section.heading}</h2>
          )}
          {section.blocks.map((block, j) => {
            if (block.type === "p") {
              return (
                <p key={j} className="text-sm leading-relaxed text-muted">
                  {block.text}
                </p>
              );
            }
            if (block.type === "list") {
              return (
                <ul key={j} className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
                  {block.items.map((item, k) => (
                    <li key={k}>{item}</li>
                  ))}
                </ul>
              );
            }
            return (
              <a
                key={j}
                href={block.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-ink underline-offset-2 hover:underline"
              >
                {block.text}
              </a>
            );
          })}
        </div>
      ))}
      {document.updated && (
        <p className="border-t border-border pt-6 text-xs text-muted">
          Posledná aktualizácia: {document.updated}
        </p>
      )}
    </div>
  );
}
