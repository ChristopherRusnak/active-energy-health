import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy & Medical Disclaimer | Active Energy Health',
}

export default function PrivacyPage() {
  return (
    <div className="pt-16">
      <div className="max-w-content mx-auto px-4 sm:px-[clamp(1rem,4vw,3rem)] py-[clamp(4rem,8vw,6rem)] max-w-3xl">

        <p className="kicker mb-4">Legal</p>
        <h1
          className="font-heading text-hero text-navy mb-12"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Privacy & Disclaimer
        </h1>

        <div className="prose-custom flex flex-col gap-10">

          <section id="medical-disclaimer">
            <h2 className="font-heading text-navy mb-4" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}>
              Medical Disclaimer
            </h2>
            <div className="flex flex-col gap-3 font-body text-sm text-navy/65 leading-[1.8]">
              <p>
                The information on this website is provided for general informational purposes only and does not constitute medical advice. Content on this site is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
              </p>
              <p>
                Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
              </p>
              <p>
                Active Energy Health Inc. provides services under physician supervision in accordance with applicable College of Physicians and Surgeons of Saskatchewan standards and guidelines.
              </p>
            </div>
          </section>

          <div className="h-px bg-navy/[0.07]" />

          <section>
            <h2 className="font-heading text-navy mb-4" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}>
              Privacy Policy
            </h2>
            <div className="flex flex-col gap-3 font-body text-sm text-navy/65 leading-[1.8]">
              <p>
                Active Energy Health Inc. is committed to protecting the privacy of our patients in accordance with the Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial health privacy legislation.
              </p>
              <p>
                <strong className="text-navy font-500">Information we collect:</strong> Personal information, health history, and contact details provided directly by you when booking or receiving care.
              </p>
              <p>
                <strong className="text-navy font-500">How we use it:</strong> To provide clinical care, communicate with you about appointments and treatment, and fulfil legal and regulatory obligations.
              </p>
              <p>
                <strong className="text-navy font-500">Sharing:</strong> We do not sell or share your personal information with third parties except as required to provide care (e.g., laboratory services) or as required by law.
              </p>
              <p>
                <strong className="text-navy font-500">Retention:</strong> Records are retained in accordance with provincial health records legislation.
              </p>
              <p>
                To request access to your information or raise a privacy concern, contact us at{' '}
                <a href="mailto:info@activeenergyhealth.ca" className="text-electric hover:underline">
                  info@activeenergyhealth.ca
                </a>
                .
              </p>
            </div>
          </section>

          <div className="h-px bg-navy/[0.07]" />

          <p className="font-body text-xs text-navy/35">
            Last updated: {new Date().getFullYear()}. These pages are placeholders pending formal legal review. Do not rely on them as complete legal documents.
          </p>
        </div>
      </div>
    </div>
  )
}
