import { useCallback, useEffect, useRef, useState } from 'react';
import type { CSSProperties, MouseEvent as ReactMouseEvent } from 'react';
import './CareerTimeline.css';

type TrackId = 'clinic' | 'author' | 'advocate' | 'educator';
/** Circle diameter tier — the OVERALL impact of this moment on women's
    health internationally (broadly, the product of all four strands). */
type Impact = 'sm' | 'md' | 'lg' | 'xl';
/** How a single circle's impact is *composed* across the four strands.
    Values are relative artistic weights (they need not sum to anything);
    they drive the concentric rings that make up the circle's diameter. */
type Weights = Partial<Record<TrackId, number>>;

interface Track {
  id: TrackId;
  name: string;
  since: string;
}

/** One itemized record — a single, individual data point. Every publication,
    award, and role is its own entry (we never auto-combine them in the list).
    `mi` links an entry back to the chart circle it belongs to, for the
    chart <-> list highlight; ongoing/undated entries have no `mi`. */
interface Entry {
  year?: string;
  title: string;
  detail?: string;
  track: TrackId;
}

interface Milestone {
  year: string;
  track: TrackId;
  impact: Impact;
  weights: Weights;
  /** Short label shown on the chart callout. */
  short: string;
  /** Full title shown in the lightbox. */
  title: string;
  body: string;
  /** The individual records this circle stands for (itemized in the list and
      the lightbox). If omitted, the milestone itself is its single record. */
  entries?: Entry[];
  capstone?: boolean;
  cluster?: boolean;
}

/* One shared timeline. Every moment in Rebecca's career is a circle on the
   same line, coloured by its PRIMARY strand and SIZED by its overall impact on
   women's health internationally. But each circle's impact is a BLEND: on
   hover the circle comes to life as concentric rotating rings — one per strand,
   each ring's width proportional to how much that strand composes the moment.
   Because the circles are large and placed in career order they OVERLAP, and
   the line visibly swells (bigger, denser rings) where her impact concentrates
   — the textbooks, the research burst, the capstone that distils all four
   strands at once. Click any circle to open its full record. */
const TRACKS: Track[] = [
  { id: 'clinic', name: 'Clinician', since: 'since the 1980s' },
  { id: 'author', name: 'Author & Scholar', since: 'since 1990' },
  { id: 'advocate', name: 'Advocate', since: 'since 1998' },
  { id: 'educator', name: 'Educator', since: 'since 2002' },
];

const TRACK_NAME: Record<TrackId, string> = {
  clinic: 'Clinician',
  author: 'Author & Scholar',
  advocate: 'Advocate',
  educator: 'Educator',
};

/* Fixed strand order — rings stack from the core outward in this order so the
   composition reads consistently from circle to circle. */
const TRACK_ORDER: TrackId[] = ['clinic', 'author', 'advocate', 'educator'];

/* Chronological — this is also left-to-right order along the timeline. */
const MILESTONES: Milestone[] = [
  {
    year: '1980s',
    track: 'clinic',
    impact: 'lg',
    weights: { clinic: 8, educator: 2, advocate: 1 },
    short: 'The clinical foundation',
    title: 'The clinical foundation',
    body: 'A doctorate, then women’s-health PT programs built at two world-class hospitals — the clinical bedrock everything else grows from.',
    entries: [
      {
        year: '1980s',
        track: 'clinic',
        title: 'Doctorate in Physical Therapy — MGH Institute of Health Professions',
        detail: 'The advanced clinical training that anchors a career in women’s and pelvic health.',
      },
      {
        year: '1980s',
        track: 'clinic',
        title: 'Urogynecology Coordinator — Brigham & Women’s Hospital',
        detail: 'Building and leading women’s-health physical therapy at a world-class hospital.',
      },
      {
        year: '1980s',
        track: 'clinic',
        title: 'Clinical specialist in pelvic health — Massachusetts General Hospital',
        detail: 'Advancing pelvic-health rehabilitation at a second major academic center.',
      },
    ],
  },
  {
    year: '1990',
    track: 'author',
    impact: 'lg',
    weights: { author: 7, clinic: 3 },
    short: 'First textbook',
    title: 'First textbook — Obstetric & Gynecological Care in Physical Therapy',
    body: 'An early text that helped define the field, and where her published scholarship begins.',
    entries: [
      {
        year: '1990',
        track: 'author',
        title: 'Obstetric & Gynecological Care in Physical Therapy',
        detail: 'Co-authored with Linda J. O’Connor (SLACK Inc.); second edition 2000.',
      },
    ],
  },
  {
    year: '1998',
    track: 'advocate',
    impact: 'md',
    weights: { advocate: 8, clinic: 2 },
    short: 'Elizabeth Noble Award',
    title: 'The Elizabeth Noble Award',
    body: 'Honored by the APTA Section on Women’s Health for outstanding vision and service — advocacy for the field itself begins.',
  },
  {
    year: '2002',
    track: 'educator',
    impact: 'sm',
    weights: { educator: 7, clinic: 2, author: 1 },
    short: 'Barbara Adams Fellow',
    title: 'Barbara Adams Fellow',
    body: 'Recognized by the MGH Institute of Health Professions for leadership and the potential to contribute as a clinical scholar.',
  },
  {
    year: '2012',
    track: 'clinic',
    impact: 'md',
    weights: { clinic: 7, educator: 2, advocate: 1 },
    short: 'Partners in Excellence ×2',
    title: 'Partners in Excellence — twice in one year',
    body: 'At Brigham & Women’s: leadership on the wards, recognized twice in a single year — plus a grant to keep clinical knowledge flowing.',
    entries: [
      {
        year: '2012',
        track: 'clinic',
        title: 'Partners in Excellence — Breast-Oncology care team',
        detail: 'For building and leading the breast-oncology care team at Brigham & Women’s.',
      },
      {
        year: '2012',
        track: 'clinic',
        title: 'Partners in Excellence — High-Risk Pregnancy education video',
        detail: 'For a high-risk pregnancy education video used on the inpatient unit.',
      },
      {
        track: 'advocate',
        title: 'Library Grant ($8,400) — Knowledge Management System',
        detail: 'Co-written and awarded to maintain a knowledge-management system supporting clinical practice at Brigham & Women’s.',
      },
    ],
  },
  {
    year: '2013',
    track: 'advocate',
    impact: 'lg',
    weights: { advocate: 8, clinic: 2 },
    short: 'Lucy Blair Service Award',
    title: 'Lucy Blair Service Award',
    body: 'One of the American Physical Therapy Association’s most distinguished honors, for sustained, exceptional service to the profession.',
  },
  {
    year: '2013',
    track: 'author',
    impact: 'sm',
    weights: { author: 5, advocate: 4, educator: 2 },
    short: 'IOPTWH conference',
    title: 'Conference scholarship — IOPTWH & IPTOP, Boston',
    body: 'A marker of her international women’s-health leadership.',
    entries: [
      {
        year: '2013',
        track: 'author',
        title: 'IOPTWH & IPTOP Conference — Boston',
        detail: 'April 26–28, 2013; proceedings published in GeriNotes (20(4):36–38).',
      },
    ],
  },
  {
    year: '2015',
    track: 'author',
    impact: 'md',
    weights: { author: 6, clinic: 4 },
    short: 'Cancer-survivorship study',
    title: 'Cancer-survivorship research',
    body: 'Research on physical impairments and PT utilization among cancer survivors — clinical insight turned into published evidence.',
    entries: [
      {
        year: '2015',
        track: 'author',
        title: 'Physical & Functional Impairments and PT Utilization in Cancer Survivors of Puerto Rican Descent',
        detail: 'Journal of Oncology Navigation & Survivorship, 6(3):46–55.',
      },
    ],
  },
  {
    year: '2017',
    track: 'advocate',
    impact: 'md',
    weights: { advocate: 9, educator: 1 },
    short: 'Section Service Award',
    title: 'Section on Women’s Health Service Award',
    body: 'For ongoing commitment and years of volunteer service to the Section on Women’s Health.',
  },
  {
    year: '2018',
    track: 'educator',
    impact: 'sm',
    weights: { educator: 7, clinic: 2, advocate: 1 },
    short: 'Distinguished Alumni',
    title: 'Distinguished Alumni Award',
    body: 'Named a distinguished graduate of the MGH Institute of Health Professions — where she now teaches as adjunct faculty.',
  },
  {
    year: '2020–22',
    track: 'author',
    impact: 'lg',
    weights: { author: 6, educator: 2, advocate: 2, clinic: 1 },
    short: 'Peer-reviewed research',
    title: 'A burst of peer-reviewed research',
    body: 'Multiple journal publications in three years — spanning clinical practice, pedagogy, and international collaboration — alongside ongoing peer-review service. This is where all four strands run at full density at once.',
    cluster: true,
    entries: [
      {
        year: '2020',
        track: 'author',
        title: 'An International Survey of Women’s & Pelvic Health PT Organizational Practice',
        detail: 'Journal of Women’s Health Physical Therapy, 44(4):160–175.',
      },
      {
        year: '2020',
        track: 'author',
        title: 'Advanced Topics of Pregnancy & Postpartum Physical Therapy — Laboratory Manual',
        detail: 'A teaching manual for advanced perinatal practice.',
      },
      {
        year: '2021',
        track: 'educator',
        title: 'Tools for Implementing Social Justice Practices Online',
        detail: 'Impacting Education, 6(2):34–38 — pedagogy for a new fully-online EdD program.',
      },
      {
        year: '2021',
        track: 'advocate',
        title: 'JWHPT peer-review service',
        detail: 'Journal of Women’s Health Physical Therapy, 45(4):E26.',
      },
      {
        year: '2022',
        track: 'author',
        title: 'Bridging Allied-Health Roles in Rural & Remote Australia',
        detail: 'Journal of Multidisciplinary Healthcare, 15:541–551.',
      },
    ],
  },
  {
    year: '2025',
    track: 'author',
    impact: 'xl',
    weights: { author: 5, clinic: 2, educator: 2, advocate: 1 },
    short: 'Routledge textbook',
    title: 'The Physical Therapist’s Guide to Women’s Pelvic, Perinatal, and Reproductive Health',
    body: 'Lead author and editor (Routledge) — the field’s comprehensive clinical text, distilling a career of practice, advocacy, and teaching into one volume. Every strand at once.',
    capstone: true,
    entries: [
      {
        year: '2025',
        track: 'author',
        title: 'The Physical Therapist’s Guide to Women’s Pelvic, Perinatal, and Reproductive Health',
        detail: 'Lead author and editor, Routledge — the field’s comprehensive clinical text.',
      },
    ],
  },
  {
    year: '2026',
    track: 'advocate',
    impact: 'sm',
    weights: { author: 6, advocate: 4 },
    short: 'Still shaping the field',
    title: 'Peer reviewer — still shaping the field’s scholarship',
    body: 'The most recent line in a decades-long record: still reviewing the research that moves the field forward.',
    entries: [
      {
        year: '2026',
        track: 'advocate',
        title: 'JWPHPT peer-review service',
        detail: 'Journal of Women’s & Pelvic Health Physical Therapy, 50(1):3.',
      },
    ],
  },
];

/* Career-spanning work that has no single year — it runs underneath the whole
   timeline. Itemized in the list so nothing is missing; not pinned to a circle
   because inventing a date would be dishonest. */
const ONGOING: Entry[] = [
  {
    year: 'Ongoing',
    track: 'educator',
    title: 'Adjunct Clinical Assistant Professor — MGH Institute of Health Professions',
    detail: 'Training the next generation of physical therapists.',
  },
  {
    year: 'Ongoing',
    track: 'educator',
    title: 'International teaching — UAE, Korea, Ethiopia, Chile & beyond',
    detail: 'Expert clinical training delivered to clinicians across four continents.',
  },
  {
    year: 'Ongoing',
    track: 'advocate',
    title: 'InspireHer Global Women’s Health Initiative — Founder',
    detail: 'Expanding access to women’s-health education and clinical expertise in underserved regions.',
  },
  {
    year: 'Ongoing',
    track: 'clinic',
    title: 'Board-Certified Pelvic & Women’s Health Clinical Specialist (PWCS)',
    detail: 'The highest specialty certification, from the American Board of Physical Therapy Specialties.',
  },
];

/* Evenly spaced along the shared line (schematic order, real-year labels) —
   even spacing keeps every circle and callout readable while the year labels
   keep the chronology honest. */
const N = MILESTONES.length;
const xOf = (i: number) => 5 + (i / (N - 1)) * 82;

/** A concentric ring: its center radius, stroke width, dash pattern (against a
    normalised pathLength of 100), spin period and direction — everything the
    SVG and the CSS animation need to render one strand's slice of a circle. */
interface Ring {
  track: TrackId;
  r: number;
  width: number;
  dash: string;
  spin: string;
  reverse: boolean;
}

const DASH_PATTERNS = ['15 9', '12 8', '10 7', '8 6'];

/** Turn a circle's strand weights into stacked concentric rings that fill the
    radius from the core outward, widths proportional to each weight. */
function ringsFor(weights: Weights): Ring[] {
  const present = TRACK_ORDER.filter((t) => (weights[t] ?? 0) > 0).map((t) => ({
    track: t,
    w: weights[t] as number,
  }));
  const total = present.reduce((s, e) => s + e.w, 0) || 1;
  const maxR = 46; // viewBox is 0 0 100 100; leave a little breathing room
  const gap = 1.5; // hairline gap between rings so they read as distinct
  const avail = maxR - gap * Math.max(0, present.length - 1);

  let cursor = 0; // running inner edge, from the core outward
  return present.map((e, i) => {
    const width = (e.w / total) * avail;
    const rCenter = cursor + width / 2;
    cursor += width + gap;
    return {
      track: e.track,
      r: rCenter,
      width,
      dash: DASH_PATTERNS[i % DASH_PATTERNS.length],
      spin: `${34 - i * 6}s`, // inner rings turn slowly, outer rings quicker
      reverse: i % 2 === 1, // alternate direction for a living, woven feel
    };
  });
}

/** Percentage split of a circle's strands, for the lightbox legend. */
function compositionOf(weights: Weights): { track: TrackId; pct: number }[] {
  const present = TRACK_ORDER.filter((t) => (weights[t] ?? 0) > 0);
  const total = present.reduce((s, t) => s + (weights[t] as number), 0) || 1;
  return present.map((t) => ({ track: t, pct: Math.round(((weights[t] as number) / total) * 100) }));
}

/** SVG of concentric rings — reused at chart scale and (larger) in the lightbox. */
function CompositionRings({ weights }: { weights: Weights }) {
  const rings = ringsFor(weights);
  return (
    <svg className="rm-rings" viewBox="0 0 100 100" aria-hidden="true">
      {rings.map((ring) => (
        <circle
          key={ring.track}
          className="rm-ring"
          data-track={ring.track}
          data-reverse={ring.reverse || undefined}
          cx="50"
          cy="50"
          r={ring.r}
          fill="none"
          strokeWidth={ring.width}
          pathLength={100}
          strokeDasharray={ring.dash}
          strokeLinecap="round"
          style={{ '--spin': ring.spin } as CSSProperties}
        />
      ))}
    </svg>
  );
}

export function CareerTimeline() {
  const chartRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  /** Which circle is "lit" (hovered or keyboard-focused) — drives the
      focus/dim of the chart and the chart <-> list highlight. */
  const [hot, setHot] = useState<number | null>(null);
  /** Which milestone's lightbox is open (null = closed). */
  const [active, setActive] = useState<number | null>(null);

  // Entrance bloom — unchanged: circles grow in, in career order, once in view.
  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!('IntersectionObserver' in window)) return;

    chart.classList.add('rm-motion');
    if (reduce) {
      chart.classList.add('is-in');
      return;
    }
    const io = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            obs.disconnect();
          }
        }
      },
      { threshold: 0.25 },
    );
    io.observe(chart);
    return () => io.disconnect();
  }, []);

  // Open/close the native <dialog> in the top layer as `active` changes.
  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (active != null && !d.open) d.showModal();
    else if (active == null && d.open) d.close();
  }, [active]);

  const closeModal = useCallback(() => setActive(null), []);
  const onBackdropClick = useCallback((e: ReactMouseEvent<HTMLDialogElement>) => {
    // Native <dialog> fills the top layer; a click whose target is the dialog
    // itself (not the inner panel) landed on the backdrop → close.
    if (e.target === dialogRef.current) setActive(null);
  }, []);

  const chartSummary =
    'A single career timeline of overlapping distinctions, coloured by strand and sized by international impact: clinician (from the 1980s), author & scholar (from 1990), advocate (from 1998), and educator (from 2002). The circles overlap because the strands run at the same time, all the way to today, and swell where her impact on women’s health is greatest. Select any circle for its full record.';

  // The itemized record: every milestone's entries flattened, tagged with the
  // index of the circle they belong to, then the undated ongoing work.
  const listEntries: (Entry & { mi?: number })[] = [
    ...MILESTONES.flatMap((m, mi) =>
      (m.entries ?? [{ year: m.year, track: m.track, title: m.title, detail: m.body }]).map((e) => ({
        ...e,
        mi,
      })),
    ),
    ...ONGOING,
  ];

  const activeM = active != null ? MILESTONES[active] : null;

  return (
    <section className="rm" aria-labelledby="rm-h">
      <div className="rm-head">
        <p className="ds-eyebrow">Professional Timeline</p>
        <h2 id="rm-h">Four distinctions, one career</h2>
        <p className="rm-lede">
          Clinician, author, advocate, educator — four strands of a single
          career, each a colour on one shared timeline. Each circle is sized by
          its impact on women’s health worldwide and woven from the strands that
          made it; hover to see the weave, click for the full record.
        </p>
        <ul className="rm-legend">
          {TRACKS.map((track) => (
            <li key={track.id}>
              <span className="rm-swatch" data-track={track.id} aria-hidden="true" />
              <strong>{track.name}</strong>
              <span>{track.since}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* The chart is an interactive visual summary; the list below carries the
          same facts as always-legible, itemized text. */}
      <div className="rm-scroll">
        <div
          className="rm-stage"
          ref={chartRef}
          role="group"
          aria-label={chartSummary}
          data-focus={hot != null || undefined}
        >
          <span className="rm-axis" aria-hidden="true" />

          {MILESTONES.map((m, i) => {
            const circleCls = [
              'rm-circle',
              m.capstone && 'is-capstone',
              m.cluster && 'is-cluster',
            ]
              .filter(Boolean)
              .join(' ');
            return (
              <button
                type="button"
                key={m.year + m.track}
                className="rm-node"
                data-track={m.track}
                data-pos={i % 2 === 0 ? 'above' : 'below'}
                data-size={m.impact}
                data-hot={hot === i || undefined}
                style={{ left: `${xOf(i)}%` }}
                aria-label={`${m.year}: ${m.title}. Open full record.`}
                onMouseEnter={() => setHot(i)}
                onMouseLeave={() => setHot((h) => (h === i ? null : h))}
                onFocus={() => setHot(i)}
                onBlur={() => setHot((h) => (h === i ? null : h))}
                onClick={() => setActive(i)}
              >
                <span className={circleCls} aria-hidden="true">
                  <span className="rm-disc" />
                  <CompositionRings weights={m.weights} />
                </span>
                <span className="rm-dot" aria-hidden="true" />
                <span className="rm-callout" aria-hidden="true">
                  <span className="rm-year">{m.year}</span>
                  {m.short}
                </span>
              </button>
            );
          })}

          <div className="rm-today" aria-hidden="true">
            <span className="rm-today-dot" />
            <span className="rm-today-label">Today</span>
          </div>
        </div>
      </div>

      <ol className="rm-list">
        {listEntries.map((e, idx) => (
          <li
            key={idx}
            className="rm-item"
            data-track={e.track}
            data-linked={e.mi != null && hot === e.mi ? true : undefined}
            onMouseEnter={() => e.mi != null && setHot(e.mi)}
            onMouseLeave={() => e.mi != null && setHot((h) => (h === e.mi ? null : h))}
          >
            <span className="rm-item-year">{e.year ?? ''}</span>
            <div>
              <h3>{e.title}</h3>
              {e.detail && <p>{e.detail}</p>}
              <span className="rm-item-track">{TRACK_NAME[e.track]}</span>
            </div>
          </li>
        ))}
      </ol>

      {/* Lightbox — native <dialog> renders in the top layer (above everything)
          with a focus trap + Esc close for free. Closed on the server; opened
          only by the client effect above, so SSG hydration stays clean. */}
      <dialog ref={dialogRef} className="rm-modal" onClose={closeModal} onClick={onBackdropClick}>
        {activeM && (
          <div className="rm-modal-panel" data-track={activeM.track}>
            <button type="button" className="rm-modal-close" onClick={closeModal} aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>

            <div className="rm-modal-head">
              <div className="rm-modal-art" data-size={activeM.impact} aria-hidden="true">
                <span className="rm-disc" />
                <CompositionRings weights={activeM.weights} />
              </div>
              <div>
                <span className="rm-modal-year">{activeM.year}</span>
                <h3 className="rm-modal-title">{activeM.title}</h3>
                <p className="rm-modal-body">{activeM.body}</p>
              </div>
            </div>

            <div className="rm-modal-weave">
              <p className="rm-modal-weave-label">How this moment is woven</p>
              <ul className="rm-weave-bars">
                {compositionOf(activeM.weights).map((c) => (
                  <li key={c.track} data-track={c.track}>
                    <span className="rm-weave-name">{TRACK_NAME[c.track]}</span>
                    <span className="rm-weave-bar">
                      <span className="rm-weave-fill" style={{ width: `${c.pct}%` }} />
                    </span>
                    <span className="rm-weave-pct">{c.pct}%</span>
                  </li>
                ))}
              </ul>
            </div>

            {activeM.entries && activeM.entries.length > 0 && (
              <div className="rm-modal-records">
                <p className="rm-modal-weave-label">
                  {activeM.entries.length > 1 ? 'The record' : 'On the record'}
                </p>
                <ul>
                  {activeM.entries.map((rec, ri) => (
                    <li key={ri} data-track={rec.track}>
                      <h4>
                        {rec.year && <span className="rm-rec-year">{rec.year}</span>}
                        {rec.title}
                      </h4>
                      {rec.detail && <p>{rec.detail}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </dialog>
    </section>
  );
}
