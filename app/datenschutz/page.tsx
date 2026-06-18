import { Container } from '@/components/elements/container'
import { Document } from '@/components/elements/document'
import { ObfuscatedEmailTextLink } from '@/components/elements/obfuscated-contact'
import { SiteFooter } from '@/components/sections/site-footer'
import { SiteHeader } from '@/components/sections/site-header'

export default function DatenschutzPage() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        <section className="py-16">
          <Container className="flex flex-col gap-10 sm:gap-16">
            <div className="flex flex-col items-center gap-6">
              <h1 className="max-w-5xl text-center text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Daten<wbr />
                schutz<wbr />
                erklärung
              </h1>
              <p className="max-w-xl text-center text-lg text-muted">
                Förderverein Kloster Nordalbanien | Version vom 06.2026
              </p>
            </div>

            <Document className="mx-auto max-w-2xl">
              <p>
                In dieser Datenschutzerklärung erläutern wir, der Förderverein Kloster Nordalbanien, wie wir Personendaten
                erheben und bearbeiten. Sie ist keine abschliessende Beschreibung; allenfalls regeln andere
                Datenschutzerklärungen oder besondere Bedingungen spezifische Sachverhalte. Unter Personendaten werden
                alle Angaben verstanden, die sich auf eine bestimmte oder über die Daten bestimmbare Person beziehen.
              </p>
              <p>
                Es ist keine Einwilligung seitens unserer Mitglieder, Spenderinnen und Spender, Mitarbeitenden oder
                anderer betroffener Personen in die Datenschutzerklärung notwendig. Es handelt sich bei der
                Datenschutzerklärung lediglich um die Information über Art, Umfang und Zweck der Nutzung von
                Personendaten durch den Förderverein Kloster Nordalbanien.
              </p>
              <p>
                Wenn Sie uns Personendaten anderer Personen (z.B. Familienmitglieder, Daten von Mitspenderinnen,
                Mitgliedern oder Partnern) zur Verfügung stellen, stellen Sie bitte sicher, dass diese Personen die
                vorliegende Datenschutzerklärung kennen und teilen Sie uns deren Personendaten nur mit, wenn Sie dies
                dürfen und wenn diese Personendaten korrekt sind.
              </p>

              <h2>1. Verantwortlicher</h2>
              <p>
                Verantwortlich für die Datenbearbeitungen, die wir hier beschreiben, ist der Förderverein Kloster
                Nordalbanien, Hochwachtstrasse 8, 6312 Steinhausen, Schweiz, soweit im Einzelfall nichts anderes
                angegeben ist. Wenn Sie datenschutzrechtliche Anliegen haben, können Sie uns diese an folgende
                Kontaktadresse mitteilen: <ObfuscatedEmailTextLink className="align-baseline" />.
              </p>

              <h2>2. Erhebung und Bearbeitung von Personendaten</h2>
              <p>
                Wir bearbeiten Personendaten, die wir im Rahmen unserer Vereinstätigkeit von Mitgliedern, Spenderinnen
                und Spendern, Partnern und weiteren beteiligten Personen erhalten sowie die wir beim Betrieb unserer
                Website von deren Nutzern erheben.
              </p>
              <p>
                Soweit dies erlaubt ist, entnehmen wir auch öffentlich zugänglichen Quellen gewisse Daten oder erhalten
                solche von Dritten. Nebst den Daten, die Sie uns direkt geben, umfassen die Kategorien von Personendaten,
                die wir von Dritten über Sie erhalten, insbesondere Angaben aus öffentlichen Registern, in Korrespondenz
                und Besprechungen mit Dritten sowie im Zusammenhang mit der Benutzung der Website (z.B. IP-Adresse,
                Geräteinformationen, Cookies, Datum und Zeit des Besuchs, abgerufene Inhalte, Standortangaben).
              </p>

              <h2>3. Zwecke der Datenbearbeitung und Rechtsgrundlagen</h2>
              <p>
                Wir verwenden die von uns erhobenen Personendaten in erster Linie, um den Vereinszweck zu erfüllen,
                insbesondere zur Verwaltung von Mitgliedschaften und Spenden, zur Abwicklung der Hilfsprojekte mit
                unseren Partnern vor Ort sowie um unseren gesetzlichen Pflichten im In- und Ausland nachzukommen.
              </p>
              <p>
                Darüber hinaus bearbeiten wir Personendaten, soweit erlaubt und es uns als angezeigt erscheint, auch für
                weitere Zwecke mit berechtigtem Interesse: Kommunikation mit Dritten, Information über unsere Tätigkeit,
                Weiterentwicklung unserer Angebote und Website, Rechtsdurchsetzung und Verteidigung, Verhinderung und
                Aufklärung von Straftaten sowie Gewährleistung des Betriebs und der IT-Sicherheit.
              </p>
              <p>
                Soweit Sie uns eine Einwilligung zur Bearbeitung Ihrer Personendaten für bestimmte Zwecke erteilt haben,
                bearbeiten wir diese Daten gestützt auf die Einwilligung, soweit wir keine andere Rechtsgrundlage haben
                und wir eine solche benötigen. Eine erteilte Einwilligung kann jederzeit widerrufen werden, was jedoch
                keine Auswirkung auf bereits erfolgte Datenbearbeitungen hat.
              </p>

              <h2>4. Cookies / Tracking und andere Technologien</h2>
              <p>
                Wenn Sie auf unsere Website zugreifen, werden automatisch technische Informationen erfasst. Diese
                Informationen werden im Server-Logfile erfasst und beinhalten insbesondere IP-Adresse, HTTP-Statuscode,
                Betriebssystem, Browser, Sprache des Browsers, aufgerufene Inhalte, verweisende Website, Datum und Zeit
                inklusive Zeitzone des Aufrufes und Aufenthaltsdauer. Diese Daten dienen der Datensicherheit und um
                unsere Website dauerhaft nutzerfreundlich und zuverlässig bereitstellen zu können.
              </p>
              <p>
                Cookies werden von Ihrem Browser gespeichert und können dazu dienen, eine bereits aufgerufene Website
                wieder zu erkennen. Ohne Cookies kann eine Website unter Umständen nicht vollständig angezeigt werden.
                Einstellungen zu Cookies können Sie in Ihrem Browser anpassen.
              </p>
              <p>
                Sollten wir künftig soziale Netzwerke oder Plug-ins einsetzen, ist dies ersichtlich. Bei Nutzung solcher
                Links oder Funktionen werden Personendaten an die jeweiligen Plattformen übertragen. Die Bearbeitung
                dort liegt in der Verantwortung des jeweiligen Betreibers.
              </p>
              <p>
                Wenn uns Daten via E-Mail oder sonstigen Medien freiwillig übermittelt werden, gehen wir davon aus, dass
                Sie damit einverstanden sind. Sollten Personen auf unseren Fotos zu sehen sein, die mit einer
                Veröffentlichung nicht einverstanden sind, können sie sich bei uns melden.
              </p>

              <h2>5. Datenweitergabe und Datenübermittlung ins Ausland</h2>
              <p>
                Wir geben Personendaten im Rahmen unserer Vereinstätigkeit und der Zwecke gemäss Ziffer 3, soweit
                erlaubt, auch Dritten bekannt, insbesondere Dienstleistern, Partnern und Trägerschaften vor Ort, Banken,
                Behörden und Gerichten. Diese Empfänger sind mehrheitlich im Inland, können aber weltweit sein,
                insbesondere auch in Albanien und Europa.
              </p>
              <p>
                Befindet sich ein Empfänger in einem Land ohne angemessenen gesetzlichen Datenschutz, verpflichten wir
                ihn vertraglich zur Einhaltung des anwendbaren Datenschutzes, soweit keine gesetzliche Ausnahme greift.
              </p>

              <h2>6. Dauer der Aufbewahrung von Personendaten</h2>
              <p>
                Wir verarbeiten und speichern Personendaten so lange, wie es für die Erfüllung unserer vertraglichen und
                gesetzlichen Pflichten oder sonst die mit der Bearbeitung verfolgten Zwecke erforderlich ist. Sobald
                Personendaten hierfür nicht mehr erforderlich sind, werden sie grundsätzlich und soweit möglich gelöscht
                oder anonymisiert.
              </p>

              <h2>7. Datensicherheit</h2>
              <p>
                Wir treffen angemessene technische und organisatorische Sicherheitsvorkehrungen zum Schutz Ihrer
                Personendaten vor unberechtigtem Zugriff und Missbrauch.
              </p>

              <h2>8. Pflicht zur Bereitstellung von Personendaten</h2>
              <p>
                Im Rahmen einer Mitgliedschaft oder Spende müssen Sie diejenigen Personendaten bereitstellen, die für die
                Aufnahme und Durchführung der Beziehung und der Erfüllung der damit verbundenen Pflichten erforderlich
                sind. Ohne diese Daten sind wir in der Regel nicht in der Lage, eine Mitgliedschaft zu führen oder eine
                Spende ordnungsgemäss zuzuordnen.
              </p>

              <h2>9. Profiling und automatisierte Entscheidfindung</h2>
              <p>
                Wir nutzen grundsätzlich kein Profiling und keine vollautomatisierte Entscheidungsfindung aus
                Personendaten. Sollten wir solche Verfahren in Einzelfällen einsetzen, informieren wir Sie entsprechend
                den gesetzlichen Vorgaben.
              </p>

              <h2>10. Anwendbarkeit des Datenschutzrechts</h2>
              <p>
                Diese Datenschutzerklärung ist auf die Anforderungen des Schweizer Datenschutzgesetzes (DSG), des
                revidierten Schweizer Datenschutzgesetzes (revDSG) sowie der EU-Datenschutz-Grundverordnung (DSGVO)
                ausgelegt. Ob und inwieweit diese Gesetze anwendbar sind, hängt vom Einzelfall ab.
              </p>

              <h2>11. Rechte der betroffenen Person</h2>
              <p>
                Sie haben im Rahmen des auf Sie anwendbaren Datenschutzrechts und soweit darin vorgesehen das Recht auf
                Auskunft, Berichtigung, Löschung, Einschränkung der Datenbearbeitung, Widerspruch sowie auf Herausgabe
                gewisser Personendaten zwecks Übertragung an eine andere Stelle. Zur Geltendmachung Ihrer Rechte können
                Sie uns unter der in Ziffer 1 angegebenen Adresse kontaktieren.
              </p>
              <p>
                Jede betroffene Person hat überdies das Recht, ihre Ansprüche gerichtlich durchzusetzen oder bei der
                zuständigen Datenschutzbehörde eine Beschwerde einzureichen. Zuständige Behörde in der Schweiz ist der
                Eidgenössische Datenschutz- und Öffentlichkeitsbeauftragte.
              </p>

              <h2>12. Änderungen</h2>
              <p>
                Wir können diese Datenschutzerklärung jederzeit ohne Vorankündigung anpassen. Es gilt die jeweils
                aktuelle, auf unserer Website publizierte Fassung.
              </p>
            </Document>
          </Container>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
