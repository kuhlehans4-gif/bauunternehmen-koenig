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
              persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen
              Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>

            <h3>Datenerfassung auf dieser Website</h3>
            <p>
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
              können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.
            </p>
            <p>
              <strong>Wie erfassen wir Ihre Daten?</strong><br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
            </p>
            <p>
              <strong>Wofür nutzen wir Ihre Daten?</strong><br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>

            <h2>2. Hosting</h2>
            <p>
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>
            <h3>Vercel</h3>
            <p>
              Anbieter ist die Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA (nachfolgend Vercel).
              Vercel ist eine Plattform zum Hosting und zur Bereitstellung von Websites. Wenn Sie unsere Website besuchen, werden Daten auf den Servern von Vercel verarbeitet. Hierbei kann es sich auch um die Übermittlung von personenbezogenen Daten in die USA handeln.
            </p>
            <p>
              Die Verwendung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p>
              Details entnehmen Sie der Datenschutzerklärung von Vercel: <a href="https://vercel.com/legal/privacy" target="_blank" rel="noopener noreferrer">https://vercel.com/legal/privacy</a>.
            </p>

            <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3>Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln
              Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften
              sowie dieser Datenschutzerklärung.
            </p>
            <p>
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Diese Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
            </p>

            <h3>Hinweis zur verantwortlichen Stelle</h3>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p>
              {contactDetails.businessName}<br />
              {contactDetails.ownerName}<br />
              {contactDetails.addressLine1}<br />
              {contactDetails.addressLine2}
            </p>
            <p>
              Telefon: {contactDetails.phoneDisplay}<br />
              E-Mail: {contactDetails.email}
            </p>
            <p>
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.&nbsp;B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
            </p>

            <h3>Speicherdauer</h3>
            <p>
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z.&nbsp;B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
            </p>

            <h3>Ihre Rechte als betroffene Person</h3>
            <p>
              Sie haben jederzeit das Recht:
            </p>
            <ul>
              <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten (Art. 15 DSGVO).</li>
              <li>Die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen (Art. 16 DSGVO).</li>
              <li>Die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen (Art. 17 DSGVO).</li>
              <li>Die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen (Art. 18 DSGVO).</li>
              <li>Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten (Art. 20 DSGVO).</li>
              <li>Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen (Art. 21 DSGVO).</li>
            </ul>

            <h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
            <p>
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. In Sachsen ist dies der:
            </p>
            <p>
              <strong>Sächsische Datenschutz- und Transparenzbeauftragte</strong><br />
              Devrientstraße 5, 01067 Dresden<br />
              Website: <a href="https://www.saechsptb.sachsen.de" target="_blank" rel="noopener noreferrer">www.saechsptb.sachsen.de</a>
            </p>

            <h2>4. Datenerfassung auf dieser Website</h2>
            <h3>Server-Log-Dateien</h3>
            <p>
              Der Hoster der Seiten (Vercel) erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul>
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet sowie unser berechtigtes Interesse an der technischen Optimierung der Website.
            </p>

            <h3>Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) falls diese abgefragt wurde.
            </p>
            <p>
              <strong>FormSubmit.co</strong><br />
              Für den Versand der Formulardaten nutzen wir den Dienst FormSubmit.co (Anbieter: FormSubmit, USA). Ihre Daten werden dabei sicher verschlüsselt an diesen Dienst übertragen, der die E-Mail an uns zustellt. FormSubmit speichert Ihre Daten nicht dauerhaft über den Versandzeitpunkt hinaus.
            </p>

            <h3>Google Fonts (Lokales Hosting)</h3>
            <p>
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts. Diese werden lokal auf unserem Server gehostet. Eine Verbindung zu Servern von Google findet nicht statt. Somit werden keine IP-Adressen an Google übertragen.
            </p>

            <h3>Google Maps (2-Klick-Lösung)</h3>
            <p>
              Wir nutzen auf dieser Website Google Maps. Erst wenn Sie die Karte aktiv durch Klick auf den Platzhalter laden, wird eine Verbindung zu den Servern von Google hergestellt. Dabei wird Ihre IP-Adresse an Google übertragen. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
            </p>

            <h3>WhatsApp</h3>
            <p>
              Wenn Sie den WhatsApp-Link auf dieser Website nutzen, werden Sie zu einem Angebot der
              WhatsApp Ireland Limited weitergeleitet. Dabei können personenbezogene Daten wie Ihre
              IP-Adresse oder Meta-Daten der Verbindung verarbeitet werden. Die Nutzung erfolgt auf Grundlage Ihrer freiwilligen Entscheidung, uns über diesen Kanal zu kontaktieren (Art. 6 Abs. 1 lit. a DSGVO).
            </p>
          </RevealSection>
        </div>
      </section>
    </>
  )
}

