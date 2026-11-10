/**
 * "LAKE ANALYTICS" written only with glyphs: a 5×7 pixel font, so the name is 7 lines tall. Every
 * lit pixel becomes two dense characters (#$%&8@…) and every dark one a sparse, dim scatter of 0 1 . : +.
 * Deterministic, so it renders identically on every load.
 */
const FONT: Record<string, string[]> = {
  A: ['.###.', '#...#', '#...#', '#####', '#...#', '#...#', '#...#'],
  C: ['.####', '#....', '#....', '#....', '#....', '#....', '.####'],
  E: ['#####', '#....', '#....', '####.', '#....', '#....', '#####'],
  I: ['#####', '..#..', '..#..', '..#..', '..#..', '..#..', '#####'],
  K: ['#...#', '#..#.', '#.#..', '##...', '#.#..', '#..#.', '#...#'],
  L: ['#....', '#....', '#....', '#....', '#....', '#....', '#####'],
  N: ['#...#', '##..#', '##..#', '#.#.#', '#..##', '#..##', '#...#'],
  S: ['.####', '#....', '#....', '.###.', '....#', '....#', '####.'],
  T: ['#####', '..#..', '..#..', '..#..', '..#..', '..#..', '..#..'],
  Y: ['#...#', '#...#', '.#.#.', '..#..', '..#..', '..#..', '..#..'],
  ' ': ['...', '...', '...', '...', '...', '...', '...'],
}
const DENSE = '#$%&8@#$%&8@0S'
const SPARSE = '01.:+01.:'
const PIXEL_COLS = 2 // characters across one font pixel: two glyph cells make a roughly square pixel
const PIXEL_ROWS = 1 // one line per font pixel, so the name is 7 lines tall
const MARGIN_COLS = 12
const MARGIN_ROWS = 4

interface Run {
  lit: boolean
  text: string
}

function render(lines: string[]) {
  let seed = 31
  const rand = () => {
    seed = (seed * 16807) % 2147483647
    return seed / 2147483647
  }

  // Lay each text line out as rows of lit/unlit pixels, one blank pixel between letters.
  const bitmaps = lines.map((line) => {
    const rows = Array.from({ length: 7 }, () => '')
    ;[...line].forEach((ch, i) => {
      const glyph = FONT[ch] ?? FONT[' ']
      glyph.forEach((row, r) => (rows[r] += (i ? '.' : '') + row))
    })
    return rows
  })
  const width = Math.max(...bitmaps.map((rows) => rows[0].length)) * PIXEL_COLS + MARGIN_COLS * 2

  const pixelRows: string[] = []
  const blank = '.'.repeat(width)
  for (let m = 0; m < MARGIN_ROWS; m++) pixelRows.push(blank)
  bitmaps.forEach((rows, index) => {
    if (index) for (let g = 0; g < PIXEL_ROWS * 2; g++) pixelRows.push(blank)
    for (const row of rows) {
      const cells = [...row].map((p) => p.repeat(PIXEL_COLS)).join('')
      const left = Math.floor((width - cells.length) / 2)
      const line = '.'.repeat(left) + cells + '.'.repeat(width - left - cells.length)
      for (let k = 0; k < PIXEL_ROWS; k++) pixelRows.push(line)
    }
  })
  for (let m = 0; m < MARGIN_ROWS; m++) pixelRows.push(blank)

  return {
    width,
    rows: pixelRows.map((row) => {
      const runs: Run[] = []
      for (const cell of row) {
        const lit = cell === '#'
        const char = lit ? DENSE[Math.floor(rand() * DENSE.length)] : rand() < 0.16 ? SPARSE[Math.floor(rand() * SPARSE.length)] : ' '
        const last = runs.at(-1)
        if (last && last.lit === lit) last.text += char
        else runs.push({ lit, text: char })
      }
      return runs
    }),
  }
}

const wide = render(['LAKE ANALYTICS'])
const narrow = render(['LAKE', 'ANALYTICS'])

function Grid({ art, className }: { art: ReturnType<typeof render>; className: string }) {
  return (
    <pre
      aria-hidden="true"
      // Size the characters so the grid always spans the full width (Geist Mono advance ≈ 0.6em).
      style={{ fontSize: `calc(100vw / ${art.width * 0.6})` }}
      className={`font-mono leading-[1.15] whitespace-pre select-none ${className}`}
    >
      {art.rows.map((runs, r) => (
        <span key={r} className="block">
          {runs.map((run, i) => (
            <span key={i} className={run.lit ? 'text-ink/35' : 'text-ink/[0.12]'}>
              {run.text}
            </span>
          ))}
        </span>
      ))}
    </pre>
  )
}

export default function GlyphWordmark({ label }: { label: string }) {
  return (
    <div role="img" aria-label={label} className="w-full overflow-hidden">
      <Grid art={wide} className="hidden text-center sm:block" />
      <Grid art={narrow} className="text-center sm:hidden" />
    </div>
  )
}
