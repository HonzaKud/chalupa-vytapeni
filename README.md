# Teplo doma – průvodce vytápěním chalupy

Statický rodinný průvodce se dvěma orientačními půdorysy, přehledem zařízení a vysvětlením vytápění. Stav podkladů: 19. 10. 2026.

## Spuštění a úpravy

Otevři `index.html` v prohlížeči nebo spusť `python -m http.server 8080` v této složce. Není potřeba build ani instalace knihoven.

- `data.js`: konsolidovaný model místností a zařízení, zdroje a stav ověření.
- `app.js`: SVG půdorysy a interakce.
- `style.css`: responzivní vzhled a tisk průvodce.
- `assets/`: vybrané fotografie převedené do WebP bez původních EXIF údajů. Výrobní štítky a soukromé doklady nejsou zveřejněné.

## Rozsah a přesnost

Půdorysy nejsou zaměřené. Obě podlaží sdílejí orientační obrys a schodiště. Rozměry doplníme později; podlahové smyčky jsou vyznačené plochou, nikoli trasou pro stavební zásahy.

Šest vývodů rozdělovače je ověřených fotografií. Přiřazení štítku jídelna k prostoru u krbu vychází z popisu rodiny. Devět radiátorů představuje dosud popsaná tělesa; horní koupelna, WC a chodba nejsou jednotlivě ověřené. Nula u podlahovky neznamená automaticky absenci radiátoru.

Model kotle je čitelný na plášti; příslušný výrobní štítek ještě chybí. Dvojice PS 800 E je pravděpodobná identifikace podle volně nalezeného štítku. Objem 1560 l platí pouze při shodnosti obou kusů. D11 je kandidátní konfigurace ADEXu podle zakroužkované přílohy, nikoli potvrzené nastavení. Web není živý monitoring ani ovládání topení.

## Podklady

Ruční plánky a popis rodiny, fotografie současného zařízení a historické pokládky, papírový návod ADEX Comfort D (doklad verze 13) a přílohy D11–D13, návod TRINNITY.

Veřejné reference:
- [Regulus PS E](https://www.regulus.cz/download/navody/cz/nn_cz_navod_ps-e-od-600.pdf)
- [Regulus CSE MIX – příklad produktové rodiny, nikoli potvrzený typ skupin](https://www.regulus.cz/cz/cerpadlova-skupina-cse-mix-g60-1-m.19110)
- [Původní návod SLOKOV SL27-3, kopie u prodejce](https://www.nase-kotle.cz/fotky3190/fotov/3190_26_3190_20__ps_10Navod-SL27-3-33-3-CZ-06_2012.pdf)

Přesné zapojení a ochrany, konfigurace regulace, propojení nádrží, skutečné parametry expanze a připojení bojleru zůstávají k ověření. Neověřené údaje nejsou návodem k nastavování.

## Nasazení

GitHub Pages z větve `main`, kořen repozitáře. Soubor `.nojekyll` vypíná Jekyll. Web nemá analytiku, formuláře ani externí skripty.

## Ověření

Interakce lze znovu ověřit pomocí `npm install`, spuštění lokálního HTTP serveru na portu 8080 a `npm run test:browser`. Test používá Microsoft Edge; jiný kanál lze nastavit proměnnou `PLAYWRIGHT_CHANNEL`. Proměnná `TEST_URL` umožňuje kontrolovat publikovanou adresu. Test kontroluje místnosti, zařízení, klávesnici, radiátory patra, vrstvu podlahovky, vyhledávání, galerii, průvodce i šířku mobilního zobrazení.

### Doplnění 19. 10. 2026

Historické fotografie pokládky ložnice, kuchyně a vstupní chodby jsou dostupné v detailech příslušných místností. Chodba je v plánku součást otevřeného prostoru s krbem. Datum fotografie vychází z původního názvu souboru, nejde o nezávisle ověřené datum. Fotografie nemění počet šesti smyček a nejsou zaměřením tras pro stavební zásahy.
