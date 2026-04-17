import { RevealSection } from '../components/UI'

export function Impressum() {
  return (
    <>
      <section className="pt-32 pb-10 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-900 text-white">Impressum</h1>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4 prose prose-gray">
          <RevealSection>
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              Bauunternehmen König<br />
              Inh. Tim König<br />
              Maurer- und Betonbauermeister<br />
              Leipzig, Sachsen
            </p>

            <h2>Kontakt</h2>
            <p>
              Telefon: <a href="tel:01796849863">0179 684 98 63</a><br />
              E-Mail: <a href="mailto:maurermeister.koenig@web.de">maurermeister.koenig@web.de</a>
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
      <section className="pt-32 pb-10 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-900 text-white">Datenschutz</h1>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4 prose prose-gray">
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
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
              Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
              der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>

            <h3>Google Maps</h3>
            <p>
              Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited.
              Durch die Nutzung von Google Maps können Informationen über Ihre Benutzung dieser Website
              an Google in den USA übertragen werden.
            </p>
          </RevealSection>
        </div>
      </section>
    </>
  )
}
