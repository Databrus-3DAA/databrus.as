import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import style from '@styles/Home/Main.module.css';
import { Header, Footer } from '@components/Home';
import { useMediaQuery } from 'react-responsive';

function PurchaseTerms() {
	const mobile = useMediaQuery({ maxWidth: 768 });

	if(typeof window == 'undefined') return null;

	return (
		<div>
			<Head>
				<title>Databrus UB | Kjøpsvilkår</title>
				<link rel="icon" href="./favicon.ico" />
				<meta name="description" content="Homepage of the company Databrus UB" />
			</Head>

			<Header ignore={true} />

			<div className={style.container} style={{ backgroundColor: "var(--darkbackground)", justifyContent: "flex-start" }}>
				<div className={style.main} style={{ width: "100%" }}>
					<h1 className={style.center} style={{ fontSize: "28px", letterSpacing: "3px", marginBottom: "20px" }}>KJØPSVILKÅR</h1>

					<details open={!mobile}>
						<summary>1. Avtalen</summary>
						<p>Avtalen består av disse salgsbetingelsene, opplysninger gitt i bestillingsløsningen og eventuelt særskilt avtalte vilkår. Ved eventuell motstrid mellom opplysningene, går det som særskilt er avtalt mellom partene foran, så fremt det ikke strider mot ufravikelig lovgivning.</p>
						<p>Avtalen vil i tillegg bli utfylt av relevante lovbestemmelser som regulerer kjøp av varer mellom næringsdrivende og forbrukere.</p>
					</details>

					<details open={!mobile}>
						<summary>2. Partene</summary>
						<p>Selger er Databurs UB og betegnes i det følgende som selger/selgeren.</p>
						<p>Kjøper er den forbrukeren som foretar bestillingen, og betegnes i det følgende som kjøper/kjøperen.</p>
					</details>

					<details open={!mobile}>
						<summary>3. Pris</summary>
						<p>Den oppgitte prisen for varen og tjenester er den totale prisen kjøper skal betale. Denne prisen inkluderer alle avgifter og tilleggskostnader. Ytterligere kostnader som selger før kjøpet ikke har informert om, skal kjøper ikke bære.</p>
					</details>

					<details open={!mobile}>
						<summary>4. Avtaleinngåelse</summary>
						<p>Avtalen er bindende for begge parter når kjøperen har sendt sin bestilling til selgeren.</p>
						<p>Avtalen er likevel ikke bindende hvis det har forekommet skrive- eller tastefeil i tilbudet fra selgeren i bestillingsløsningen i nettbutikken eller i kjøperens bestilling, og den annen part innså eller burde ha innsett at det forelå en slik feil.</p>
					</details>

					<details open={!mobile}>
						<summary>5. Betalingen</summary>
						<p>Selgeren kan kreve betaling for varen fra det tidspunkt den blir sendt fra selgeren til kjøperen.</p>
						<p>Dersom kjøperen bruker kredittkort eller debetkort ved betaling, kan selgeren reservere kjøpesummen på kortet ved bestilling. Kortet blir belastet samme dag som varen sendes.</p>
						<p>Ved betaling med faktura, blir fakturaen til kjøperen utstedt ved forsendelse av varen. Betalingsfristen fremgår av fakturaen og er på minimum 14 dager fra mottak.</p>
						<p>Kjøpere under 18 år kan ikke betale med etterfølgende faktura.</p>
					</details>

					<details open={!mobile}>
						<summary>6. Levering</summary>
						<p>Levering er skjedd når kjøperen, eller hans representant, har overtatt tingen.</p>
						<p>Om varen ikke er hentet samme dag som bestilt, innenfor skolens åpningstider, termineres bestillingen, og kjøper vil ikke få betalt sum tilbake.</p>
					</details>

					<details open={!mobile}>
						<summary>7. Risikoen for varen</summary>
						<p>Risikoen for varen går over på kjøper når han, eller hans representant, har fått varene levert i tråd med punkt 6.</p>
					</details>

					<details open={!mobile}>
						<summary>8. Angrerett</summary>
						<p>Med mindre avtalen er unntatt fra angrerett, kan kjøperen angre kjøpet av varen i henhold til angrerettloven. Angrerett gjelder <text style={{ fontWeight: "bold", margin: 0, color: "var(--highlight)" }}>ikke</text> når forseglingen på varen er brutt, eller at varens holdbarhet utgår etter at varen har blitt utlevert.</p>
						<p>Kjøperen må gi selger melding om bruk av angreretten innen 14 dager fra fristen begynner å løpe. I fristen inkluderes alle kalenderdager. Dersom fristen ender på en lørdag, helligdag eller høytidsdag forlenges fristen til nærmeste virkedag.</p>
						<p>Angrefristen anses overholdt dersom melding er sendt før utløpet av fristen. Kjøper har bevisbyrden for at angreretten er blitt gjort gjeldende, og meldingen bør derfor skje skriftlig (angrerettskjema, e-post eller brev).</p>
						<p>Angrefristen begynner å løpe:</p>

						<ul style={{ marginBottom: "20px" }}>
							<li style={{ marginLeft: "30px" }}>Ved kjøp av enkeltstående varer vil angrefristen løpe fra dagen etter varen(e) er mottatt.</li>
							<li style={{ marginLeft: "30px" }}>Selges et abonnement, eller innebærer avtalen regelmessig levering av identiske varer, løper fristen fra dagen etter første forsendelse er mottatt.</li>
							<li style={{ marginLeft: "30px" }}>Består kjøpet av flere leveranser, vil angrefristen løpe fra dagen etter siste leveranse er mottatt.</li>
						</ul>

						<p>Angrefristen utvides til 12 måneder etter utløpet av den opprinnelige fristen dersom selger ikke før avtaleinngåelsen opplyser om at det foreligger angrerett og standardisert angreskjema. Tilsvarende gjelder ved manglende opplysning om vilkår, tidsfrister og fremgangsmåte for å benytte angreretten. Sørger den næringsdrivende for å gi opplysningene i løpet av disse 12 månedene, utløper angrefristen likevel 14 dager etter den dagen kjøperen mottok opplysningene.</p>
						<p>Ved bruk av angreretten må varen leveres tilbake til selgeren uten unødig opphold og senest 14 dager fra melding om bruk av angreretten er gitt. Kjøper dekker de direkte kostnadene ved å returnere varen, med mindre annet er avtalt eller selger har unnlatt å opplyse om at kjøper skal dekke returkostnadene. Selgeren kan ikke fastsette gebyr for kjøperens bruk av angreretten.</p>
						<p>Kjøper kan prøve eller teste varen på en forsvarlig måte for å fastslå varens art, egenskaper og funksjon, uten at angreretten faller bort. Dersom prøving eller test av varen går utover hva som er forsvarlig og nødvendig, kan kjøperen bli ansvarlig for eventuell redusert verdi på varen.</p>
						<p>Selgeren er forpliktet til å tilbakebetale kjøpesummen til kjøperen uten unødig opphold, og senest 14 dager fra selgeren fikk melding om kjøperens beslutning om å benytte angreretten. Selger har rett til å holde tilbake betalingen til han har mottatt varene fra kjøperen, eller til kjøper har lagt frem dokumentasjon for at varene er sendt tilbake.</p>
					</details>

					<details open={!mobile}>
						<summary>9. Forsinkelse og manglende levering - kjøpernes rettigheter og frist for å melde krav</summary>
						<p>Dersom selgeren ikke leverer varen eller leverer den for sent i henhold til avtalen mellom partene, og dette ikke skyldes kjøperen eller forhold på kjøperens side, kan kjøperen i henhold til reglene i forbrukerkjøpslovens kapittel 5 etter omstendighetene holde kjøpesummen tilbake, kreve oppfyllelse, heve avtalen og/eller kreve erstatning fra selgeren.</p>
						<p>Ved krav om misligholdsbeføyelser bør meldingen av bevishensyn være skriftlig (for eksempel e-post).</p>
						<text style={{ fontWeight: "bold", color: "var(--highlight)" }}>Oppfyllelse</text>
						<p>Kjøper kan fastholde kjøpet og kreve oppfyllelse fra selger. Kjøper kan imidlertid ikke kreve oppfyllelse dersom det foreligger en hindring som selgeren ikke kan overvinne, eller dersom oppfyllelse vil medføre en så stor ulempe eller kostnad for selger at det står i vesentlig misforhold til kjøperens interesse i at selgeren oppfyller. Skulle vanskene falle bort innen rimelig tid, kan kjøper likevel kreve oppfyllelse.</p>
						<p>Kjøperen taper sin rett til å kreve oppfyllelse om han eller hun venter urimelig lenge med å fremme kravet.</p>
						<text style={{ fontWeight: "bold", color: "var(--highlight)" }}>Heving</text>
						<p>Dersom selgeren ikke leverer varen på leveringstidspunktet, skal kjøperen oppfordre selger til å levere innen en rimelig tilleggsfrist for oppfyllelse. Dersom selger ikke leverer varen innen tilleggsfristen, kan kjøperen heve kjøpet.</p>
						<p>Kjøper kan imidlertid heve kjøpet umiddelbart hvis selger nekter å levere varen. Tilsvarende gjelder dersom levering til avtalt tid var avgjørende for inngåelsen av avtalen, eller dersom kjøperen har underrettet selger om at leveringstidspunktet er avgjørende.</p>
						<p>Leveres tingen etter tilleggsfristen forbrukeren har satt eller etter leveringstidspunktet som var avgjørende for inngåelsen av avtalen, må krav om heving gjøres gjeldende innen rimelig tid etter at kjøperen fikk vite om leveringen.</p>
						<text style={{ fontWeight: "bold", color: "var(--highlight)" }}>Erstatning</text>
						<p>Kjøperen kan kreve erstatning for lidt tap som følge av forsinkelsen. Dette gjelder imidlertid ikke dersom selgeren godtgjør at forsinkelsen skyldes hindring utenfor selgers kontroll som ikke med rimelighet kunne blitt tatt i betraktning på avtaletiden, unngått, eller overvunnet følgene av.</p>
					</details>

					<details open={!mobile}>
						<summary>10. Mangel ved varen - kjøperens rettigheter og reklamasjonsfrist</summary>
						<p>Hvis det foreligger en mangel ved varen må kjøper innen rimelig tid etter at den ble oppdaget eller burde ha blitt oppdaget, gi selger melding om at han eller hun vil påberope seg mangelen. Kjøper har alltid reklamert tidsnok dersom det skjer innen 2 mnd. fra mangelen ble oppdaget eller burde blitt oppdaget. Reklamasjon kan skje senest to år etter at kjøper overtok varen. Dersom varen eller deler av den er ment å vare vesentlig lenger enn to år, er reklamasjonsfristen fem år.</p>
						<p>Dersom varen har en mangel og dette ikke skyldes kjøperen eller forhold på kjøperens side, kan kjøperen i henhold til reglene i forbrukerkjøpsloven kapittel 6 etter omstendighetene holde kjøpesummen tilbake, velge mellom retting og omlevering, kreve prisavslag, kreve avtalen hevet og/eller kreve erstatning fra selgeren.</p>
						<p>Reklamasjon til selgeren bør skje skriftlig.</p>
						<text style={{ fontWeight: "bold", color: "var(--highlight)" }}>Retting eller omlevering</text>
						<p>Kjøperen kan velge mellom å kreve mangelen rettet eller levering av tilsvarende ting. Selger kan likevel motsette seg kjøperens krav dersom gjennomføringen av kravet er umulig eller volder selgeren urimelige kostnader. Retting eller omlevering skal foretas innen rimelig tid. Selger har i utgangspunktet ikke rett til å foreta mer enn to avhjelpsforsøk for samme mangel.</p>
						<text style={{ fontWeight: "bold", color: "var(--highlight)" }}>Prisavslag</text>
						<p>Kjøper kan kreve et passende prisavslag dersom varen ikke blir rettet eller omlevert. Dette innebærer at forholdet mellom nedsatt og avtalt pris svarer til forholdet mellom tingens verdi i mangelfull og kontraktsmessig stand. Dersom særlige grunner taler for det, kan prisavslaget i stedet settes lik mangelens betydning for kjøperen.</p>
						<text style={{ fontWeight: "bold", color: "var(--highlight)" }}>Heving</text>
						<p>Dersom varen ikke er rettet eller omlevert, kan kjøperen også heve kjøpet når mangelen ikke er uvesentlig.</p>
					</details>

					<details open={!mobile}>
						<summary>11. Selgerens rettigheter ved kjøperens mislighold </summary>
						<p>Dersom kjøperen ikke betaler eller oppfyller de øvrige pliktene etter avtalen eller loven, og dette ikke skyldes selgeren eller forhold på selgerens side, kan selgeren i henhold til reglene i forbrukerkjøpsloven kapittel 9 etter omstendighetene holde varen tilbake, kreve oppfyllelse av avtalen, kreve avtalen hevet samt kreve erstatning fra kjøperen. Selgeren vil også etter omstendighetene kunne kreve renter ved forsinket betaling, inkassogebyr og et rimelig gebyr ved uavhentede varer.</p>
						<text style={{ fontWeight: "bold", color: "var(--highlight)" }}>Oppfyllelse</text>
						<p>Selger kan fastholde kjøpet og kreve at kjøperen betaler kjøpesummen. Er varen ikke levert, taper selgeren sin rett dersom han venter urimelig lenge med å fremme kravet.</p>
						<text style={{ fontWeight: "bold", color: "var(--highlight)" }}>Heving</text>
						<p>Selger kan heve avtalen dersom det foreligger vesentlig betalingsmislighold eller annet vesentlig mislighold fra kjøperens side. Selger kan likevel ikke heve dersom hele kjøpesummen er betalt. Fastsetter selger en rimelig tilleggsfrist for oppfyllelse og kjøperen ikke betaler innen denne fristen, kan selger heve kjøpet.</p>
						<text style={{ fontWeight: "bold", color: "var(--highlight)" }}>Renter ved forsinket betaling/inkassogebyr</text>
						<p>Dersom kjøperen ikke betaler kjøpesummen i henhold til avtalen, kan selger kreve renter av kjøpesummen etter forsinkelsesrenteloven. Ved manglende betaling kan kravet, etter forutgående varsel, bli sendt til Kjøper kan da bli holdt ansvarlig for gebyr etter inkassoloven.</p>
						<text style={{ fontWeight: "bold", color: "var(--highlight)" }}>Gebyr ved uavhentede ikke-forskuddsbetalte varer</text>
						<p>Dersom kjøperen unnlater å hente ubetalte varer, kan selger belaste kjøper med et gebyr. Gebyret skal maksimalt dekke selgerens faktiske utlegg for å levere varen til kjøperen. Et slikt gebyr kan ikke belastes kjøpere under 18 år.</p>
					</details>

					<details open={!mobile}>
						<summary>12. Garanti</summary>
						<p>Garanti som gis av selgeren eller produsenten, gir kjøperen rettigheter i tillegg til de kjøperen allerede har etter ufravikelig lovgivning. En garanti innebærer dermed ingen begrensninger i kjøperens rett til reklamasjon og krav ved forsinkelse eller mangler etter punkt 9 og 10.</p>
					</details>

					<details open={!mobile}>
						<summary>13. Personopplysninger</summary>
						<p>Behandlingsansvarlig for innsamlede personopplysninger er selger. Med mindre kjøperen samtykker til noe annet, kan selgeren, i tråd med personopplysningsloven, kun innhente og lagre de personopplysninger som er nødvendig for at selgeren skal kunne gjennomføre forpliktelsene etter avtalen. Kjøperens personopplysninger vil kun bli utlevert til andre hvis det er nødvendig for at selger skal få gjennomført avtalen med kjøperen, eller i lovbestemte tilfelle.</p>
						<p>Kjøpers telefonnummer lagres i selgers database i opptil en uke, i tilfelle det skulle oppstå problemer med kjøpers ordre, eller om de skulle ha en eventuell refundering av penger.</p>
					</details>

					<details open={!mobile}>
						<summary>14. Konfliktløsning</summary>
						<p>Klager rettes til selger innen rimelig tid, jf. punkt 9 og 10. Partene skal forsøke å løse eventuelle tvister i minnelighet. Dersom dette ikke lykkes, kan kjøperen ta kontakt med Forbrukerrådet for mekling. Forbrukerrådet er tilgjengelig på telefon 23 400 500 eller <Link href="https://www.forbrukerradet.no/"><a className={style.normalLink}>https://www.forbrukerradet.no</a></Link>.</p>
						<p>Europa-Kommisjonens klageportal kan også brukes hvis du ønsker å inngi en klage. Det er særlig relevant, hvis du er forbruker bosatt i et annet EU-land. Klagen inngis her: <Link href="https://ec.europa.eu/odr"><a className={style.normalLink}>https://ec.europa.eu/odr</a></Link>.</p>
					</details>
				</div>
			</div>

			<Footer />
		</div>
	)
};

export default PurchaseTerms;