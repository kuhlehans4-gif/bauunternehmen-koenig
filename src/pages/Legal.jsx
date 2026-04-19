import { RevealSection } from '../components/UI'
import { contactDetails } from '../data/contactDetails'
import SEO from '../components/SEO'

export function Impressum() {
  return (
    <>
      <SEO
        title="Impressum | Bauunternehmen König Leipzig"
        description="Impressum und Anbieterkennzeichnung gemäß § 5 TMG des Bauunternehmen König — Maurer- und Betonbauermeister Tim König, Leipzig."
        path="/impressum"
        noindex={true}
      />
      <section className="pt-40 sm:pt-48 md:pt-52 pb-10 bg-charcoal overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-900 text-white">Impressum</h1>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4 prose prose-sm sm:prose-base prose-gray break-words">
          <RevealSection>
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              {contactDetails.businessName}<br />
              Inh. {contactDetails.ownerName}<br />
              Maurer- und Betonbauermeister<br />
              {contactDetails.addressLine1}<br />
              {contactDetails.addressLine2}
            </p>

            <h2>Kontakt</h2>
            <p>
              Telefon: <a href={contactDetails.phoneHref}>{contactDetails.phoneDisplay}</a><br />
              E-Mail: <a href={contactDetails.emailHref}>{contactDetails.email}</a>
            </p>

            <h2>Berufsbezeichnung</h2>
            <p>
              Maurer- und Betonbauermeister<br />
              Verliehen in: Deutschland<br />
              Zuständige Handwerkskammer: HWK zu Leipzig
            </p>

            <h2>Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer"> https://ec.europa.eu/consumers/odr/</a>.
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </RevealSection>
        </div>
      </section>
    </>
  )
}

export function Datenschutz() {
  return (
    <>
      <SEO
        title="Datenschutzerklärung | Bauunternehmen König Leipzig"
        description="Datenschutzerklärung des Bauunternehmen König Leipzig gemäß DSGVO — Informationen zu Hosting, Kontaktformular, Google Fonts, Google Maps und WhatsApp."
        path="/datenschutz"
        noindex={true}
      />
      <section className="pt-40 sm:pt-48 md:pt-52 pb-10 bg-charcoal overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-900 text-white">Datenschutz</h1>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4 prose prose-sm sm:prose-base prose-gray break-words">
          <RevealSection>
            <h2>1. Datenschutz auf einen Blick</h2>
            <h3>Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persönlich identifiziert werden können.
            </p>

            <h3>Datenerfassung auf dieser Website</h3>
            <p>
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
              können Sie dem Impressum dieser Website entnehmen.
            </p>

            <h2>2. Hosting</h2>
            <p>
              Diese Website wird bei einem externen Dienstleister gehostet (Vercel Inc.).
              Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern
              des Hosters gespeichert.
            </p>

            <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3>Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln
              Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften
              sowie dieser Datenschutzerklärung.
            </p>

            <h2>4. Datenerfassung auf dieser Website</h2>
            <h3>Kontaktformular</h3>
            <p>
              Das Kontaktformular ist derzeit noch nicht an einen Versanddienst oder ein Backend
              angebunden. Beim Absenden werden daher aktuell keine Daten an uns übermittelt oder bei
              uns gespeichert.
            </p>

            <h3>Google Fonts</h3>
            <p>
              Diese Website bindet Schriftarten von Google Fonts ein. Beim Aufruf der Website kann
              Ihre IP-Adresse an Server der Google Ireland Limited übertragen werden, damit die
              Schriftarten im Browser dargestellt werden können.
            </p>

            <h3>Google Maps</h3>
            <p>
              Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited.
              Durch die Nutzung von Google Maps können Informationen über Ihre Benutzung dieser Website
              an Google in den USA übertragen werden.
            </p>

            <h3>WhatsApp</h3>
            <p>
              Wenn Sie den WhatsApp-Link auf dieser Website nutzen, werden Sie zu einem Angebot der
              WhatsApp Ireland Limited weitergeleitet. Dabei können personenbezogene Daten wie Ihre
              IP-Adresse oder Meta-Daten der Verbindung verarbeitet werden.
            </p>
          </RevealSection>
        </div>
      </section>
    </>
  )
}
