/**
 * Team section — rendered on the About page.
 *
 * PHOTOS: just drop headshots into /public/team/ named after the person's slug —
 * e.g. andrea-clinton.jpg. They are picked up automatically at build time, so adding a
 * photo needs no code change at all. See /public/team/README.md for the exact filenames.
 * .jpg, .jpeg, .png, .webp and .avif all work; portrait 4:5 crops look best.
 * A member with no matching file shows a neutral "Photo coming" state. A member with
 * `hidePhoto: true` has chosen not to appear at all — they render an initials monogram
 * instead, which reads as deliberate rather than as a missing asset, and no file will
 * override that. An explicit `photo` path still wins if you ever need to override one.
 *
 * COMPLIANCE — read before editing:
 *  - `role` and `credentials` must reflect what a person is actually registered to do.
 *    Never upgrade a title for marketing effect.
 *  - Never name a neuromodulator brand. Megan's role is "Cosmetic Injectables" — the
 *    brand names used internally must not appear on the site.
 *  - Nurse practitioners are the prescribers here; the physician authors the protocols
 *    they prescribe against. Do not write copy implying the physician treats patients.
 */

import Image from 'next/image'
import fs from 'node:fs'
import path from 'node:path'

const PHOTO_DIR = path.join(process.cwd(), 'public', 'team')
const PHOTO_EXTS = ['.jpg', '.jpeg', '.png', '.webp', '.avif']

/** Turn "Dr. Christopher Rusnak" into "christopher-rusnak". */
function slugify(name: string) {
  return name
    .replace(/^Dr\.\s*/, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

/** Leading first-name token of a filename: "Michael_07_13_2026.png" -> "michael". */
function firstNameKey(filename: string) {
  const base = path.basename(filename, path.extname(filename)).toLowerCase()
  return base.split(/[^a-z0-9]+/).filter(Boolean)[0] ?? ''
}

/**
 * Index whatever headshots currently sit in /public/team, keyed both by full slug
 * ("andrea-clinton") and by leading first name ("andrea"), so a file can be dropped in
 * either renamed or exactly as exported from Drive. Read once at module load; this is a
 * server component, so it never reaches the client. A missing folder is not an error —
 * it just means no photos have been added yet.
 */
function loadPhotos(): { bySlug: Record<string, string>; byFirstName: Record<string, string> } {
  const bySlug: Record<string, string> = {}
  const byFirstName: Record<string, string> = {}
  let files: string[] = []
  try {
    files = fs.readdirSync(PHOTO_DIR).filter((f) => PHOTO_EXTS.includes(path.extname(f).toLowerCase()))
  } catch {
    return { bySlug, byFirstName }
  }
  for (const f of files) {
    bySlug[path.basename(f, path.extname(f)).toLowerCase()] = `/team/${f}`
    const first = firstNameKey(f)
    // Two files sharing a first name are ambiguous — index neither rather than guess.
    if (first) byFirstName[first] = first in byFirstName ? '' : `/team/${f}`
  }
  return { bySlug, byFirstName }
}

type PhotoIndex = ReturnType<typeof loadPhotos>

/** Resolve one member's headshot, or undefined if we have nothing unambiguous. */
function resolvePhoto(member: Member, photos: PhotoIndex) {
  if (member.hidePhoto) return undefined
  if (member.photo) return member.photo
  const slug = slugify(member.name)
  if (photos.bySlug[slug]) return photos.bySlug[slug]
  // Only fall back to a first-name match when no one else shares that first name.
  for (const first of [slug.split('-')[0], ...(member.photoAliases ?? [])]) {
    const sameFirst = TEAM_FIRST_NAMES.filter((n) => n === first).length
    if (sameFirst <= 1 && photos.byFirstName[first]) return photos.byFirstName[first]
  }
  return undefined
}

type Member = {
  name: string
  credentials: string
  role: string
  does: string
  photo?: string
  /** Never show a photo, even if a matching file exists. */
  hidePhoto?: boolean
  /** When no photo is available, show initials rather than the "Photo coming" tile. */
  monogram?: boolean
  /** Extra first-name spellings to match filenames on, e.g. a "Chris_*.png" for a Christopher. */
  photoAliases?: string[]
}

type Group = {
  label: string
  blurb: string
  members: Member[]
}

const groups: Group[] = [
  {
    label: 'Medical oversight',
    blurb: 'They set the standards the clinic runs on.',
    members: [
      {
        name: 'Dr. Christopher Rusnak',
        credentials: 'MD, CCFP(EM)',
        role: 'Medical Director',
        does: 'Writes and maintains the treatment protocols and clinical guidelines every programme here runs on.',
        monogram: true,
        photoAliases: ['chris'],
      },
      {
        name: 'Marina Da Silva',
        credentials: '',
        role: 'Clinical Pharmacist',
        does: 'Reviews medications, dosing, and interactions across our hormone and weight management programmes.',
      },
    ],
  },
  {
    label: 'Nurse practitioners',
    blurb: 'They review your labs, meet you in person, and write your prescription.',
    members: [
      {
        name: 'Andrea Clinton',
        credentials: 'NP',
        role: 'Nurse Practitioner',
        does: 'Hormone replacement and testosterone replacement therapy.',
      },
      {
        name: 'Falan Speakman',
        credentials: 'NP',
        role: 'Nurse Practitioner',
        does: 'Hormone replacement and testosterone replacement therapy.',
      },
      {
        name: 'Heather Plaxton',
        credentials: 'NP',
        role: 'Nurse Practitioner',
        does: 'Hormone replacement and testosterone replacement therapy.',
      },
      {
        name: 'Michael McFadden',
        credentials: 'NP',
        role: 'Nurse Practitioner',
        does: 'Testosterone replacement therapy.',
      },
      {
        name: 'TJ Olamide',
        credentials: 'NP',
        role: 'Nurse Practitioner',
        does: 'Testosterone replacement therapy.',
      },
    ],
  },
  {
    label: 'Coaching',
    blurb: 'Who you meet first, and who runs your intake.',
    members: [
      {
        name: 'Brent Robinson',
        credentials: '',
        role: 'Hormone & TRT Coach',
        does: 'Leads free consultations and runs the comprehensive intake for hormone and testosterone programmes.',
      },
      {
        name: 'James Priddell',
        credentials: '',
        role: 'Hormone & TRT Coach',
        does: 'Leads free consultations and runs the comprehensive intake for hormone and testosterone programmes.',
      },
      {
        name: 'Heidi Merkosky',
        credentials: '',
        role: 'Coach & Medical Aesthetician',
        does: 'Leads hormone and TRT consultations, and carries out skin treatments in clinic.',
      },
    ],
  },
  {
    label: 'Aesthetics',
    blurb: 'Who carries out your skin and injectable appointments.',
    members: [
      {
        name: 'Megan Park',
        credentials: 'LPN',
        role: 'Cosmetic Injectables',
        does: 'Carries out cosmetic injectable and dermal filler appointments.',
      },
      {
        name: 'Adrea Anderson',
        credentials: '',
        role: 'Medical Aesthetician',
        does: 'Carries out skin and laser treatments in clinic.',
      },
    ],
  },
  {
    label: 'Clinic operations',
    blurb: 'Everything around your appointment.',
    members: [
      {
        name: 'Melody McCoy',
        credentials: '',
        role: 'Clinic Operations',
        does: 'Runs booking, scheduling, and the day-to-day of the clinic.',
      },
    ],
  },
]

const TEAM_FIRST_NAMES = groups.flatMap((g) => g.members.map((m) => slugify(m.name).split('-')[0]))

function initials(name: string) {
  return name
    .replace(/^Dr\.\s*/, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
}

function MemberCard({ member, photos }: { member: Member; photos: PhotoIndex }) {
  const photo = resolvePhoto(member, photos)
  return (
    <div className="rounded-card border border-navy/[0.07] overflow-hidden flex flex-col">
      <div className="relative aspect-[4/5] bg-navy/[0.03] border-b border-navy/[0.07] overflow-hidden">
        {photo ? (
          /*
           * next/image resizes and re-encodes (WebP/AVIF) on demand. The source files are
           * ~600kB PNGs but render a few hundred pixels wide, so `sizes` matters here —
           * it is what stops the browser fetching the full-resolution original.
           */
          <Image
            src={photo}
            alt={`${member.name}, ${member.role} at Active Energy Health`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover"
          />
        ) : member.hidePhoto || member.monogram ? (
          <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-navy to-electric">
            <span
              className="font-heading text-white/85"
              style={{ fontFamily: 'var(--font-heading)', fontSize: '2.6rem', letterSpacing: '0.06em' }}
            >
              {initials(member.name)}
            </span>
          </div>
        ) : (
          <div className="h-full w-full flex flex-col items-center justify-center gap-2 text-navy/20">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <circle cx="20" cy="15" r="8" stroke="currentColor" strokeWidth="1.5" />
              <path d="M4 38c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="font-body text-xs uppercase tracking-wider">Photo coming</span>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <p
          className="font-heading text-navy mb-0.5"
          style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', lineHeight: 1.25 }}
        >
          {member.name}
        </p>
        {member.credentials && (
          <p className="font-body text-xs text-electric font-500 mb-1">{member.credentials}</p>
        )}
        <p className="font-body text-xs text-navy/45 uppercase tracking-[0.1em]">{member.role}</p>
        <p className="mt-3 font-body text-sm text-navy/60 leading-[1.65]">{member.does}</p>
      </div>
    </div>
  )
}

export default function Team() {
  const photos = loadPhotos()
  return (
    <section className="py-[clamp(4rem,8vw,7rem)] bg-white border-t border-navy/[0.07]">
      <div className="max-w-content mx-auto px-4 sm:px-[clamp(1rem,4vw,3rem)]">

        <div className="mb-14 max-w-2xl">
          <p className="kicker mb-3">The team</p>
          <h2
            className="font-heading text-section text-navy"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Who you&apos;ll actually{' '}
            <span className="italic text-electric">see.</span>
          </h2>
          <p className="mt-5 font-body text-[0.98rem] leading-relaxed text-navy/55">
            Different appointments are led by different people. Here is who does what, so you know
            before you walk in.
          </p>
        </div>

        <div className="flex flex-col gap-14">
          {groups.map((group) => (
            <div key={group.label}>
              <div className="mb-6 pb-3 border-b border-navy/[0.09] flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <p className="kicker">{group.label}</p>
                <p className="font-body text-sm text-navy/45">{group.blurb}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {group.members.map((member) => (
                  <MemberCard key={member.name} member={member} photos={photos} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
