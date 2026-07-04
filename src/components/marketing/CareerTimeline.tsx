import { useEffect, useRef } from 'react';
import './CareerTimeline.css';

type TrackId = 'clinic' | 'author' | 'advocate' | 'educator';
/** Circle diameter tier — encodes overall impact on women's health
    internationally (broadly, the product of all four strands). */
type Impact = 'sm' | 'md' | 'lg' | 'xl';

interface Track {
  id: TrackId;
  name: string;
  since: string;
}

interface Milestone {
  year: string;
  track: TrackId;
  impact: Impact;
  /** Short label shown on the chart callout. */
  short: string;
  /** Full title shown in the facts list. */
  title: string;
  body: string;
  capstone?: boolean;
  cluster?: boolean;
}

/* One shared timeline. Every distinction in Rebecca's career is a circle on
   the same line, coloured by which strand it belongs to and SIZED by its
   overall impact on women's health internationally. Because the circles are
   large and placed in career order, neighbouring circles OVERLAP — and where
   different-coloured circles overlap, you are seeing two distinctions held at
   once. Concurrency is drawn, not stated; the line visibly swells where her
   international impact concentrates (the textbooks and research). */
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

/* Chronological — this is also left-to-right order along the timeline. */
const MILESTONES: Milestone[] = [
  {
    year: '1980s',
    track: 'clinic',
    impact: 'lg',
    short: 'The clinical foundation',
    title: 'The clinical foundation',
    body: 'Doctorate at the MGH Institute of Health Professions, then Urogynecology Coordinator at Brigham & Women’s and clinical specialist in pelvic health at Mass General — building women’s-health PT programs at two world-class hospitals.',
  },
  {
    year: '1990',
    track: 'author',
    impact: 'lg',
    short: 'First textbook',
    title: 'First textbook — Obstetric & Gynecological Care in Physical Therapy',
    body: 'Co-authored with Linda J. O’Connor (SLACK Inc.), with a second edition in 2000. An early text that helped define the field, and where her published scholarship begins.',
  },
  {
    year: '1998',
    track: 'advocate',
    impact: 'md',
    short: 'Elizabeth Noble Award',
    title: 'The Elizabeth Noble Award',
    body: 'Honored by the APTA Section on Women’s Health for outstanding vision and service — advocacy for the field itself begins.',
  },
  {
    year: '2002',
    track: 'educator',
    impact: 'sm',
    short: 'Barbara Adams Fellow',
    title: 'Barbara Adams Fellow',
    body: 'Recognized by the MGH Institute of Health Professions for leadership and the potential to contribute as a clinical scholar.',
  },
  {
    year: '2012',
    track: 'clinic',
    impact: 'md',
    short: 'Partners in Excellence ×2',
    title: 'Partners in Excellence — twice in one year',
    body: 'At Brigham & Women’s: for building and leading the breast-oncology care team, and for a high-risk pregnancy education video used on the inpatient unit.',
  },
  {
    year: '2013',
    track: 'advocate',
    impact: 'lg',
    short: 'Lucy Blair Service Award',
    title: 'Lucy Blair Service Award',
    body: 'One of the American Physical Therapy Association’s most distinguished honors, for sustained, exceptional service to the profession.',
  },
  {
    year: '2013',
    track: 'author',
    impact: 'sm',
    short: 'IOPTWH conference',
    title: 'Conference scholarship — IOPTWH & IPTOP, Boston',
    body: 'Proceedings published in GeriNotes; a marker of her international women’s-health leadership.',
  },
  {
    year: '2015',
    track: 'author',
    impact: 'md',
    short: 'Cancer-survivorship study',
    title: 'Cancer-survivorship research',
    body: 'Co-author of a study on physical impairments and PT utilization among cancer survivors of Puerto Rican descent (Journal of Oncology Navigation & Survivorship).',
  },
  {
    year: '2017',
    track: 'advocate',
    impact: 'md',
    short: 'Section Service Award',
    title: 'Section on Women’s Health Service Award',
    body: 'For ongoing commitment and years of volunteer service to the Section on Women’s Health.',
  },
  {
    year: '2018',
    track: 'educator',
    impact: 'sm',
    short: 'Distinguished Alumni',
    title: 'Distinguished Alumni Award',
    body: 'Named a distinguished graduate of the MGH Institute of Health Professions — where she now teaches as adjunct faculty.',
  },
  {
    year: '2020–22',
    track: 'author',
    impact: 'lg',
    short: 'Peer-reviewed research ×4',
    title: 'A burst of peer-reviewed research',
    body: 'Four journal publications in three years: the international Women’s & Pelvic Health PT practice survey (JWHPT, 2020); the Advanced Topics in Pregnancy & Postpartum PT lab manual (2020); online-EdD pedagogy (Impacting Education, 2021); and allied-health roles in rural Australia (J. Multidisciplinary Healthcare, 2022) — alongside ongoing service as a JWHPT/JWPHPT peer reviewer.',
    cluster: true,
  },
  {
    year: '2025',
    track: 'author',
    impact: 'xl',
    short: 'Routledge textbook',
    title: 'The Physical Therapists’ Guide to Pelvic, Perinatal & Reproductive Health',
    body: 'Lead author and editor (Routledge) — the field’s comprehensive clinical text, distilling a career of practice, advocacy, and teaching.',
    capstone: true,
  },
];

/* Evenly spaced along the shared line (schematic order, real-year labels) —
   even spacing keeps every circle and callout readable while the year labels
   keep the chronology honest. */
const N = MILESTONES.length;
const xOf = (i: number) => 5 + (i / (N - 1)) * 83;

export function CareerTimeline() {
  const chartRef = useRef<HTMLDivElement>(null);

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

  const chartSummary =
    'A single career timeline of overlapping distinctions, coloured by strand and sized by international impact: clinician (from the 1980s), author & scholar (from 1990), advocate (from 1998), and educator (from 2002) — the circles overlap because the strands run at the same time, all the way to today, and swell where her impact on women’s health is greatest.';

  return (
    <section className="rm" aria-labelledby="rm-h">
      <div className="rm-head">
        <p className="ds-eyebrow">Professional Timeline</p>
        <h2 id="rm-h">Four distinctions, one career</h2>
        <p className="rm-lede">
          Clinician, author, advocate, educator — four strands of a single
          career, each a colour on one shared timeline. Each circle is sized by
          its impact on women’s health worldwide; where they overlap, two
          distinctions are being held at once.
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

      {/* The chart is a visual summary; the list below carries the facts. */}
      <div className="rm-scroll">
        <div className="rm-stage" ref={chartRef} role="img" aria-label={chartSummary}>
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
              <div
                key={m.year + m.track}
                className="rm-node"
                data-track={m.track}
                data-pos={i % 2 === 0 ? 'above' : 'below'}
                data-size={m.impact}
                style={{ left: `${xOf(i)}%` }}
                aria-hidden="true"
              >
                <span className={circleCls} />
                <span className="rm-dot" />
                <span className="rm-callout">
                  <span className="rm-year">{m.year}</span>
                  {m.short}
                </span>
              </div>
            );
          })}

          <div className="rm-today" aria-hidden="true">
            <span className="rm-today-dot" />
            <span className="rm-today-label">Today</span>
          </div>
        </div>
      </div>

      <ol className="rm-list">
        {MILESTONES.map((m) => (
          <li
            key={m.year + m.track}
            className={m.capstone ? 'rm-item is-capstone' : 'rm-item'}
            data-track={m.track}
          >
            <span className="rm-item-year">{m.year}</span>
            <div>
              <h3>{m.title}</h3>
              <p>{m.body}</p>
              <span className="rm-item-track">{TRACK_NAME[m.track]}</span>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
