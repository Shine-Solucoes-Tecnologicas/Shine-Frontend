import type { ReactNode } from 'react'

type IconProps = {
  className?: string
}

function IconFrame({ className, children, viewBox = '0 0 240 240' }: IconProps & { children: ReactNode; viewBox?: string }) {
  return (
    <svg className={className} viewBox={viewBox} aria-hidden="true" focusable="false">
      {children}
    </svg>
  )
}

export function CalendarIcon({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <path fill="var(--illustration-dark)" opacity=".18" d="M52 62h142a18 18 0 0 1 18 18v118a18 18 0 0 1-18 18H52a18 18 0 0 1-18-18V80a18 18 0 0 1 18-18Z" transform="translate(5 7)" />
      <rect x="34" y="55" width="172" height="154" rx="20" fill="var(--illustration-surface)" stroke="var(--illustration-primary)" strokeWidth="9" />
      <path fill="var(--illustration-primary)" d="M34 78c0-13 10-23 23-23h126c13 0 23 10 23 23v25H34V78Z" />
      <g fill="var(--illustration-dark)">
        <rect x="67" y="28" width="12" height="54" rx="6" />
        <rect x="113" y="28" width="12" height="54" rx="6" />
        <rect x="159" y="28" width="12" height="54" rx="6" />
      </g>
      <g fill="var(--illustration-soft)">
        <rect x="58" y="122" width="24" height="20" rx="5" />
        <rect x="94" y="122" width="24" height="20" rx="5" />
        <rect x="130" y="122" width="24" height="20" rx="5" />
        <rect x="166" y="122" width="24" height="20" rx="5" />
        <rect x="58" y="156" width="24" height="20" rx="5" />
        <rect x="94" y="156" width="24" height="20" rx="5" />
        <rect x="166" y="156" width="24" height="20" rx="5" />
      </g>
      <rect x="128" y="154" width="28" height="24" rx="6" fill="var(--illustration-accent)" />
    </IconFrame>
  )
}

export function ClockIcon({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <g fill="var(--illustration-primary)" stroke="var(--illustration-dark)" strokeWidth="7" strokeLinejoin="round">
        <path d="m67 50-22 23-18-18 23-22c10-10 28 7 17 17Z" />
        <path d="m173 50 22 23 18-18-23-22c-10-10-28 7-17 17Z" />
      </g>
      <path d="M75 193 58 216M165 193l17 23" fill="none" stroke="var(--illustration-dark)" strokeWidth="11" strokeLinecap="round" />
      <circle cx="120" cy="126" r="78" fill="var(--illustration-primary)" stroke="var(--illustration-dark)" strokeWidth="9" />
      <circle cx="120" cy="126" r="57" fill="var(--illustration-surface)" />
      <g fill="var(--illustration-dark)">
        <circle cx="120" cy="82" r="4" />
        <circle cx="164" cy="126" r="4" />
        <circle cx="120" cy="170" r="4" />
        <circle cx="76" cy="126" r="4" />
      </g>
      <path d="M120 126V93M120 126l27 17" fill="none" stroke="var(--illustration-accent)" strokeWidth="10" strokeLinecap="round" />
      <circle cx="120" cy="126" r="8" fill="var(--illustration-dark)" />
    </IconFrame>
  )
}

export function TaskListIcon({ className }: IconProps) {
  return (
    <IconFrame className={className} viewBox="0 0 220 260">
      <path fill="var(--illustration-dark)" opacity=".17" d="M42 48h146a18 18 0 0 1 18 18v168a18 18 0 0 1-18 18H42a18 18 0 0 1-18-18V66a18 18 0 0 1 18-18Z" transform="translate(4 5)" />
      <rect x="25" y="44" width="170" height="198" rx="20" fill="var(--illustration-surface)" stroke="var(--illustration-primary)" strokeWidth="9" />
      <path fill="var(--illustration-primary)" d="M78 29h20a15 15 0 0 1 29 0h18c11 0 20 9 20 20v17H58V49c0-11 9-20 20-20Z" />
      <circle cx="112" cy="27" r="7" fill="var(--illustration-surface)" />
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <g stroke="var(--illustration-accent)" strokeWidth="8">
          <path d="m48 111 8 8 15-19" />
          <path d="m48 158 8 8 15-19" />
        </g>
        <rect x="45" y="191" width="27" height="27" rx="6" stroke="var(--illustration-soft)" strokeWidth="7" />
        <g stroke="var(--illustration-dark)" strokeWidth="7" opacity=".72">
          <path d="M91 109h69" />
          <path d="M91 156h58" />
          <path d="M91 204h69" />
        </g>
      </g>
    </IconFrame>
  )
}

export function GrowthChartIcon({ className }: IconProps) {
  return (
    <IconFrame className={className} viewBox="0 0 300 220">
      <path d="M38 185h228" fill="none" stroke="var(--illustration-dark)" strokeWidth="10" strokeLinecap="round" />
      <g>
        <rect x="55" y="125" width="38" height="60" rx="8" fill="var(--illustration-soft)" />
        <rect x="108" y="100" width="38" height="85" rx="8" fill="var(--illustration-primary)" opacity=".58" />
        <rect x="161" y="72" width="38" height="113" rx="8" fill="var(--illustration-primary)" opacity=".78" />
        <rect x="214" y="42" width="38" height="143" rx="8" fill="var(--illustration-primary)" />
      </g>
      <path d="M45 105 104 74l48 11 88-59" fill="none" stroke="var(--illustration-accent)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m214 23 31-2-5 31" fill="none" stroke="var(--illustration-accent)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
    </IconFrame>
  )
}
