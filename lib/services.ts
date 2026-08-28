/**
 * Services page content model.
 *
 * COMPLIANCE — Canadian health advertising. Read before editing any string here:
 *  - Never name a neuromodulator brand. The service is always "Cosmetic Injectables".
 *  - Never describe laser hair removal as lasting forever. Use "long-term reduction".
 *  - No guaranteed outcomes, no promised timelines, no "you will" claims.
 *  - `concerns` are the reasons patients BOOK a treatment, not outcomes we promise.
 *    They render under the label "Patients book this for" for exactly that reason.
 *  - No patient testimonials anywhere on the site (CPSS advertising standards).
 *
 * IMAGES — every card reads `image` below. The current files are brand-drawn SVG
 * placeholders in /public/services. To use a real photograph, drop it in that same
 * folder and change the one path string on the service; nothing else needs to move.
 * Landscape 4:3 crops at roughly 960x720 or larger look best.
 */

export type TabId = 'hormones' | 'skin' | 'body' | 'longevity'

export type Service = {
  id: string
  name: string
  /** A service may sit under more than one tab when patients arrive at it from different concerns. */
  tabs: TabId[]
  /** Reasons patients come in — used for the concern filter and the card's tag list. */
  concerns: string[]
  description: string
  /** Short factual note. Keep it factual (setting, supervision, format) — never an outcome. */
  note: string
  image: string
}

export type Tab = {
  id: TabId
  label: string
  /** Legacy hashes that must keep resolving to this tab (linked from Footer + ServicePillars). */
  aliases: string[]
  intro: string
}

export const TABS: Tab[] = [
  {
    id: 'hormones',
    label: 'Hormones & Energy',
    aliases: ['hormones', 'hormone-health'],
    intro:
      'If you feel flat, foggy, or not like yourself, hormones are the first place we look — and we look with bloodwork, not guesswork.',
  },
  {
    id: 'skin',
    label: 'Skin',
    aliases: ['skin', 'aesthetics'],
    intro:
      'Texture, tone, lines, and congestion respond to different tools. We start by working out which one your skin actually needs.',
  },
  {
    id: 'body',
    label: 'Body',
    aliases: ['body'],
    intro:
      'Treatments aimed at the things you notice day to day — unwanted hair, weight, and how your metabolism is behaving.',
  },
  {
    id: 'longevity',
    label: 'Longevity',
    aliases: ['longevity'],
    intro:
      'Programmes for patients who want to get ahead of things rather than manage them later. This is the area we are actively growing.',
  },
]

export const SERVICES: Service[] = [
  {
    id: 'hrt-women',
    name: "Women's HRT & Menopause Care",
    tabs: ['hormones'],
    concerns: ['Hot flashes & night sweats', 'Sleep disruption', 'Low energy & mood', 'Brain fog'],
    description:
      'Hormone replacement therapy for perimenopause and menopause, built from your bloodwork and your symptoms rather than a standard template. We look at sleep, mood, energy, body composition, and sexual health together, then adjust as your body responds.',
    note: 'Physician-supervised',
    image: '/services/hrt-women.svg',
  },
  {
    id: 'trt-men',
    name: "Men's Testosterone Replacement (TRT)",
    tabs: ['hormones'],
    concerns: ['Low energy', 'Strength & recovery', 'Low libido', 'Mood changes'],
    description:
      'A full assessment for low testosterone — complete hormone panel, symptom review, and a protocol matched to how you actually feel rather than to where you land on a reference range. Monitoring continues for as long as you are on therapy.',
    note: 'Physician-supervised',
    image: '/services/trt-men.svg',
  },
  {
    id: 'hormone-panels',
    name: 'Hormone Panels & Lab Review',
    tabs: ['hormones', 'longevity'],
    concerns: ['Unexplained fatigue', 'Thyroid questions', 'Metabolic markers', 'Baseline testing'],
    description:
      'Comprehensive bloodwork covering sex hormones, thyroid, and metabolic markers — followed by a proper sit-down to go through what the numbers mean. You leave understanding your own results.',
    note: 'In-clinic review',
    image: '/services/hormone-panels.svg',
  },
  {
    id: 'cosmetic-injectables',
    name: 'Cosmetic Injectables',
    tabs: ['skin'],
    concerns: ['Frown lines', 'Forehead lines', 'Lines around the eyes'],
    description:
      'Precision neuromodulator treatment for expression lines, placed conservatively by trained medical practitioners. The goal is a face that still moves — softened, not frozen.',
    note: 'No downtime',
    image: '/services/cosmetic-injectables.svg',
  },
  {
    id: 'dermal-fillers',
    name: 'Dermal Fillers',
    tabs: ['skin'],
    concerns: ['Volume loss', 'Lip definition', 'Cheek & midface contour', 'Nasolabial folds'],
    description:
      'Hyaluronic acid fillers used to restore volume in the cheeks, midface, and lips. We work toward subtle correction that suits your face — small amounts, reviewed between sessions.',
    note: 'Reviewed between sessions',
    image: '/services/dermal-fillers.svg',
  },
  {
    id: 'laser-resurfacing',
    name: 'Laser Skin Resurfacing',
    tabs: ['skin'],
    concerns: ['Uneven texture', 'Fine lines', 'Pigmentation', 'Redness'],
    description:
      'Non-ablative laser that works beneath the surface to address texture, tone, and fine lines. Comfortable enough to fit around your week, with no downtime afterward.',
    note: 'No downtime',
    image: '/services/laser-resurfacing.svg',
  },
  {
    id: 'ipl-photofacial',
    name: 'IPL Photofacial',
    tabs: ['skin'],
    concerns: ['Sun damage', 'Rosacea & flushing', 'Cherry angiomas', 'Uneven tone'],
    description:
      'Intense pulsed light targeting sun damage, visible vessels, and uneven tone across the face, neck, and chest. Most patients see gradual change over a planned series of sessions.',
    note: 'Planned as a series',
    image: '/services/ipl-photofacial.svg',
  },
  {
    id: 'microneedling',
    name: 'Microneedling',
    tabs: ['skin'],
    concerns: ['Acne scarring', 'Enlarged pores', 'Uneven texture', 'Overall rejuvenation'],
    description:
      'Collagen induction therapy that uses controlled micro-injury to prompt your own skin to remodel. Often planned alongside peels or laser as part of a longer skin programme.',
    note: 'Combines with other treatments',
    image: '/services/microneedling.svg',
  },
  {
    id: 'hydrafacial',
    name: 'HydraFacial',
    tabs: ['skin'],
    concerns: ['Congestion & blackheads', 'Dullness', 'Dehydrated skin', 'Before an event'],
    description:
      'A medical-grade cleanse, exfoliation, extraction, and hydration infusion on the HydraFacial Syndeo. No downtime — this is the one to book when you want your skin looking its best this week.',
    note: 'No downtime',
    image: '/services/hydrafacial.svg',
  },
  {
    id: 'chemical-peels',
    name: 'Chemical Peels',
    tabs: ['skin'],
    concerns: ['Active acne', 'Pigmentation', 'Rough texture', 'Dullness'],
    description:
      'Clinical-grade peels selected to your skin type and goals, using the Vivier and Pro-Derm pharmaceutical lines we carry. Strength is built up gradually rather than pushed.',
    note: 'Pharmaceutical-grade lines',
    image: '/services/chemical-peels.svg',
  },
  {
    id: 'laser-hair-removal',
    name: 'Laser Hair Removal',
    tabs: ['body'],
    concerns: ['Unwanted hair', 'Ingrown hairs', 'Razor irritation', 'All skin tones'],
    description:
      'Medical-grade laser with melanin reader technology, which lets us treat safely across a full range of skin tones. Planned as a series of sessions working toward long-term hair reduction.',
    note: 'Long-term reduction',
    image: '/services/laser-hair-removal.svg',
  },
  {
    id: 'glp1-weight',
    name: 'GLP-1 Weight Management',
    tabs: ['body', 'longevity'],
    concerns: ['Weight & metabolism', 'Appetite regulation', 'Blood sugar markers', 'Body composition'],
    description:
      'Physician-supervised GLP-1 therapy for patients who are medically appropriate candidates — assessed, monitored, and backed by the lab work that should sit behind it. We will tell you honestly if it is not the right tool for you.',
    note: 'Candidacy assessed first',
    image: '/services/glp1-weight.svg',
  },
  {
    id: 'nad-iv',
    name: 'NAD+ IV Therapy',
    tabs: ['longevity'],
    concerns: ['Recovery', 'Cellular energy', 'Focus & clarity', 'Athletic demands'],
    description:
      'Intravenous nicotinamide adenine dinucleotide, administered in-clinic under supervision. Sessions run long by design — bring something to read.',
    note: 'Administered in-clinic',
    image: '/services/nad-iv.svg',
  },
]

/**
 * Concern chips for the "What brings you in?" row, in display order.
 * Each chip names its services explicitly so filtering is deterministic — no string
 * matching against tag text that could silently return an empty grid when copy changes.
 * Only list services that actually sit under the chip's own tab.
 */
export const CONCERNS: { label: string; tab: TabId; services: string[] }[] = [
  { label: 'Low energy & fatigue', tab: 'hormones', services: ['trt-men', 'hrt-women', 'hormone-panels'] },
  { label: 'Hot flashes & night sweats', tab: 'hormones', services: ['hrt-women'] },
  { label: 'Brain fog', tab: 'hormones', services: ['hrt-women', 'hormone-panels'] },
  { label: 'Low libido', tab: 'hormones', services: ['trt-men', 'hrt-women'] },
  { label: 'Fine lines', tab: 'skin', services: ['cosmetic-injectables', 'laser-resurfacing', 'microneedling'] },
  { label: 'Volume loss', tab: 'skin', services: ['dermal-fillers'] },
  { label: 'Acne & scarring', tab: 'skin', services: ['microneedling', 'chemical-peels', 'hydrafacial'] },
  { label: 'Sun damage & redness', tab: 'skin', services: ['ipl-photofacial', 'laser-resurfacing'] },
  { label: 'Dull, congested skin', tab: 'skin', services: ['hydrafacial', 'chemical-peels'] },
  { label: 'Unwanted hair', tab: 'body', services: ['laser-hair-removal'] },
  { label: 'Weight & metabolism', tab: 'body', services: ['glp1-weight'] },
  { label: 'Recovery & performance', tab: 'longevity', services: ['nad-iv', 'hormone-panels', 'glp1-weight'] },
]

/**
 * Replaces the patient-testimonial section that a med spa site would normally carry.
 * CPSS advertising standards restrict patient testimonials, so this band earns trust
 * through process and credentials instead. Do not convert these into patient quotes.
 */
export const PROCESS = [
  {
    step: '01',
    title: 'The free consultation',
    body: 'A conversation with one of our health coaches. Bring your labs, your symptoms, and your questions. They will walk you through what we would look at and what treatment here actually involves.',
  },
  {
    step: '02',
    title: 'Assessment & bloodwork',
    body: 'Your coach runs the comprehensive intake and we get the numbers. Comprehensive panels, reviewed with you in detail — not emailed over with a one-line summary.',
  },
  {
    step: '03',
    title: 'A protocol built for you',
    body: 'A nurse practitioner reviews your labs and your file, meets you, and prescribes — working from treatment protocols written by our physician. Dosing and timing are matched to your assessment and explained properly.',
  },
  {
    step: '04',
    title: 'Ongoing review',
    body: 'We follow up, re-test, and adjust. Hormone therapy in particular is a long relationship rather than a single prescription.',
  },
]

export const STANDARDS = [
  'Treatment protocols designed and maintained by a licensed physician',
  'Labs reviewed and prescriptions written by a nurse practitioner who meets you in person',
  'Medication and dosing reviewed by a clinical pharmacist',
  'Melanin reader laser technology, so we can treat a full range of skin tones',
  'Vivier and Pro-Derm pharmaceutical-grade skincare',
  'We decline treatments we do not think will help you',
]

/**
 * Pricing. Confirmed by the clinic: the first consultation is free for both hormones
 * and aesthetics. The $175 is the SEPARATE comprehensive HRT/TRT intake that follows
 * if a patient proceeds — it is never described as the "value" of the free visit,
 * because that would be an ordinary-price claim on something we do not charge for.
 */
export const CONSULT = {
  intakeFee: '$175',
}

export const FAQS = [
  {
    q: 'What actually happens at the free consultation?',
    a: 'You sit down with one of our health coaches and talk through what brought you in — symptoms, history, anything you have already tried, and any bloodwork you are carrying. They will tell you what we would look at and what treatment here would involve. There is no charge and no obligation to book anything afterward.',
  },
  {
    q: 'Is the consultation really free for aesthetics too?',
    a: 'Yes. Aesthetic consultations are complimentary, and always have been. For hormone care, the consultation is also free; if you decide to go ahead with HRT or TRT, the comprehensive intake and lab review that follows is ' + CONSULT.intakeFee + '. We would rather you knew that number up front than found it on an invoice.',
  },
  {
    q: 'Who will I actually see?',
    a: 'Your first conversation is with a health coach. If you go ahead, your coach runs the comprehensive intake, and a nurse practitioner reviews your labs and your file, meets you in person, and writes any prescription. They work from treatment protocols designed and maintained by our physician. Aesthetic treatments are carried out by our trained aesthetics team.',
  },
  {
    q: 'Do I need a referral?',
    a: 'No. You can book with us directly. If you would like us to coordinate with your family physician we are happy to, but nothing here waits on a referral.',
  },
  {
    q: 'Will any of this be covered?',
    a: 'Lab work is publicly covered in Saskatchewan, as it is across most of Canada, so standard bloodwork ordered through the provincial system is not something you pay us for. Consultations and aesthetic treatments are not publicly covered. Some patients do have private benefits that cover part of what we do, but that is entirely plan-specific — bring your plan details and we will help you work out where you stand before you commit to anything.',
  },
  {
    q: 'How quickly will I feel different on HRT or TRT?',
    a: 'It genuinely varies between patients, and we do not put a timeline on it. What we can tell you is how we work: we re-test, we review how you are feeling against what the bloodwork shows, and we adjust. If something is not working, we would rather change it than wait it out.',
  },
  {
    q: 'Is laser hair removal permanent?',
    a: 'No, and we will not tell you it is. Laser treatment works toward long-term hair reduction over a planned series of sessions, and many patients choose to come back for occasional maintenance afterward. We would rather set that expectation properly at the start than oversell it.',
  },
  {
    q: 'Can I treat a range of skin tones safely?',
    a: 'Our laser platform uses melanin reader technology, which measures the skin before treating and lets us set parameters appropriate to your tone. We assess every patient individually and will say so if we think a different treatment suits you better.',
  },
  {
    q: 'Can I combine treatments?',
    a: 'Often, yes — microneedling, peels, and laser are frequently planned together as a sequence rather than done in isolation. Spacing matters, so we will map the order and the intervals with you rather than stacking everything at once.',
  },
  {
    q: 'How should I prepare for a first appointment?',
    a: 'Bring any bloodwork from the last year, a list of medications and supplements, and the questions you actually want answered. If you are coming in for skin, come without makeup where you can. That is all we need.',
  },
]

/**
 * Clinic video for the "Inside the clinic" band.
 * Set this to a path under /public (e.g. '/services/clinic-loop.mp4') once footage
 * exists and the band will switch from the still image to an autoplaying muted loop.
 * The still below is used as the poster frame either way, so nothing breaks while
 * this stays null.
 */
export const CLINIC_VIDEO: string | null = null
export const CLINIC_POSTER = '/hero-clinic.jpg'
