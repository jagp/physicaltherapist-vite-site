import { useEffect, useRef } from 'react';
import './CareerTimeline.css';

type TrackId = 'clinic' | 'advocate' | 'educator' | 'author';

interface Track {
  id: TrackId;
  name: string;
  since: string;
  /** Era index (into ERAS) where this strand begins. */
  start: number;
}

interface Era {
  label: string;
  /** Hide this tick on the smallest screens to prevent label collisions. */
  minor?: boolean;
}

interface Milestone {
  era: number;
  track: TrackId;
  year: string;
  title: string;
  body: string;
  capstone?: boolean;
}

/* The time axis is a schematic sequence of eras, evenly spaced and
   labeled with the real years. Even spacing keeps every strand
   readable — true linear time would crush the 2025 strand to a sliver
   — while the labels keep it honest. */
const ERAS: Era[] = [
  { label: '1980s' },
  { label: '1998', minor: true },
  { label: '2002', minor: true },
  { label: '2012–13' },
  { label: '2017–18', minor: true },
  { label: '2025' },
  { label: 'Today' },
];
const LAST = ERAS.length - 1;

/* Ordered by when each strand began, so the bars stair-step inward
   from the top-left — the shape itself reads as "expertise
   accumulating over four decades." */
const TRACKS: Track[] = [
  { id: 'clinic', name: 'Clinician', since: 'since the 1980s', start: 0 },
  { id: 'advocate', name: 'Advocate', since: 'since 1998', start: 1 },
  { id: 'educator', name: 'Educator', since: 'since 2002', start: 2 },
  { id: 'author', name: 'Author', since: '2025', start: 5 },
];

const MILESTONES: Milestone[] = [
  {
    era: 0,
    track: 'clinic',
    year: '1980s',
    title: 'The clinical foundation',
    body: 'Doctorate at the MGH Institute of Health Professions, then Urogynecology Coordinator at Brigham & Women’s and clinical specialist in pelvic health at Mass General.',
  },
  {
    era: 1,
    track: 'advocate',
    year: '1998',
    title: 'The Elizabeth Noble Award',
    body: 'Honored by the APTA Section on Women’s Health for outstanding vision and service — advocacy for the field itself begins.',
  },
  {
    era: 2,
    track: 'educator',
    year: '2002',
    title: 'Barbara Adams Fellow',
    body: 'Recognized by the MGH Institute of Health Professions for leadership and the potential to contribute as a clinical scholar.',
  },
  {
    era: 3,
    track: 'clinic',
    year: '2012',
    title: 'Partners in Excellence — twice in one year',
    body: 'At Brigham & Women’s: for building and leading the breast-oncology care team, and for a high-risk pregnancy education video used on the inpatient unit.',
  },
  {
    era: 3,
    track: 'advocate',
    year: '2013',
    title: 'Lucy Blair Service Award',
    body: 'One of the American Physical Therapy Association’s most distinguished honors, for sustained, exceptional service to the profession.',
  },
  {
    era: 4,
    track: 'advocate',
    year: '2017',
    title: 'Section on Women’s Health Service Award',
    body: 'For ongoing commitment and years of volunteer service to the Section on Women’s Health.',
  },
  {
    era: 4,
    track: 'educator',
    year: '2018',
    title: 'Distinguished Alumni Award',
    body: 'Named a distinguished graduate of the MGH Institute of Health Professions — where she now teaches as adjunct faculty.',
  },
  {
    era: 5,
    track: 'author',
    year: '2025',
    title: 'The Physical Therapy Guide to Women’s, Pelvic, Reproductive & Perinatal Health',
    body: 'Lead author and editor of the field’s comprehensive clinical text (Routledge) — the newest strand, and the distillation of the other three.',
    capstone: true,
  },
];

const TRACK_NAME: Record<TrackId, string> = {
  clinic: 'Clinician',
  advocate: 'Advocate',
  educator: 'Educator',
  author: 'Author',
};

/** Map an era index to its horizontal position on the shared 0–100% axis. */
const pct = (era: number) => (era / LAST) * 100;

export function CareerTimeline() {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!('IntersectionObserver' in window)) return;

    chart.classList.add('cg-motion');
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
      { threshold: 0.3 },
    );
    io.observe(chart);
    return () => io.disconnect();
  }, []);

  const chartSummary =
    'Career timeline: four overlapping strands of expertise. Clinician from the 1980s, advocate from 1998, educator from 2002, and author from 2025 — all continuing today.';

  return (
    <section className="cg" aria-labelledby="cg-h">
      <div className="cg-head">
        <p className="ds-eyebrow">Professional Timeline</p>
        <h2 id="cg-h">Four distinctions, one career</h2>
        <p className="cg-lede">
          Clinician, advocate, educator, author — each strand began in a
          different decade, and none has ended. Follow any color across: it runs
          to today.
        </p>
        <ul className="cg-legend">
          {TRACKS.map((track) => (
            <li key={track.id}>
              <span className="cg-swatch" data-track={track.id} aria-hidden="true" />
              <strong>{track.name}</strong>
              <span>{track.since}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* The chart is a visual summary; the list below carries the facts. */}
      <div className="cg-chart" ref={chartRef} role="img" aria-label={chartSummary}>
        <div className="cg-axis cg-lane" aria-hidden="true">
          {ERAS.map((era, i) => {
            const cls =
              i === 0 ? 'cg-tick is-first' : i === LAST ? 'cg-tick is-now' : 'cg-tick';
            return (
              <span
                key={era.label}
                className={cls}
                data-density={era.minor ? 'low' : undefined}
                style={{ left: `${pct(i)}%` }}
              >
                {era.label}
              </span>
            );
          })}
        </div>

        <div className="cg-tracks" aria-hidden="true">
          {TRACKS.map((track) => {
            const dots = MILESTONES.filter((m) => m.track === track.id);
            return (
              <div key={track.id} className="cg-track">
                <div className="cg-lane" style={{ height: '100%' }}>
                  <span
                    className="cg-bar"
                    data-track={track.id}
                    style={{
                      left: `${pct(track.start)}%`,
                      right: 0,
                    }}
                  />
                  {dots.map((m) => (
                    <span
                      key={m.year}
                      className="cg-dot"
                      data-track={track.id}
                      style={{ left: `${pct(m.era)}%` }}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <span className="cg-today" aria-hidden="true" />
      </div>

      <ol className="cg-list">
        {MILESTONES.map((m) => (
          <li
            key={m.year + m.track}
            className={m.capstone ? 'cg-item is-capstone' : 'cg-item'}
            data-track={m.track}
          >
            <span className="cg-item-year">{m.year}</span>
            <div>
              <h3>{m.title}</h3>
              <p>{m.body}</p>
              <span className="cg-item-track">{TRACK_NAME[m.track]}</span>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
