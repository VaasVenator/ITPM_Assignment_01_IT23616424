import { test, expect } from '@playwright/test';

// Postive test cases
test('Pos_Fun_0001 - Convert a simple interrogative phrase', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputText = 'Oyaage nama mokakdha?';
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(inputText);
  const output = page.locator('div.w-full.h-80.p-3.whitespace-pre-wrap.overflow-y-auto');
  const expectedText = 'ඔයාගෙ නම මොකක්ද?';
  await page.waitForTimeout(2000);
  await expect(output).toHaveText(expectedText);
});

test('Pos_Fun_0002 - Positive: Convert a simple response phrase containing a English word', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputText = 'Mama thamayi Bat man.';
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(inputText);
  const output = page.locator('div.w-full.h-80.p-3.whitespace-pre-wrap.overflow-y-auto');
  const expectedText = 'මම තමයි Bat man.';
  await page.waitForTimeout(2000);
  await expect(output).toHaveText(expectedText);
});

test('Pos_Fun_0003 - Positive: Convert a complex & plural sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputText = 'Heta pooyanan api pansal yamu.';
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(inputText);
  const output = page.locator('div.w-full.h-80.p-3.whitespace-pre-wrap.overflow-y-auto');
  const expectedText = 'හෙට පෝයනන් අපි පන්සල් යමු.';
  await page.waitForTimeout(2000);
  await expect(output).toHaveText(expectedText);
});

test('Pos_Fun_0004 - Positive: Convert a long polite phrase in present tense', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputText = 'Mama adha podi hadhissi vaedakata eliyata yanavaa. eekata mata vaahanayak hoyaaganna veevi. parakku nisaa dhaen velaava naee. thava bohoma sulu kaalayak vitharayi thiyenne. Mama uthsaaha karanne kohoma hari mee vaedee ivara karanna.';
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(inputText);
  const output = page.locator('div.w-full.h-80.p-3.whitespace-pre-wrap.overflow-y-auto');
  const expectedText = 'මම අද පොඩි හදිස්සි වැඩකට එලියට යනවා. ඒකට මට වාහනයක් හොයාගන්න වේවි. පරක්කු නිසා දැන් වෙලාව නෑ. තව බොහොම සුලු කාලයක් විතරයි තියෙන්නෙ. මම උත්සාහ කරන්නේ කොහොම හරි මේ වැඩේ ඉවර කරන්න.';
  await page.waitForTimeout(2000);
  await expect(output).toHaveText(expectedText);
});

test('Pos_Fun_0005 - Positive: Convert a slang, colloquial and interrogative phrasing', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputText = 'mama aeththa kivvama ridhunadha sudhdhaa?';
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(inputText);
  const output = page.locator('div.w-full.h-80.p-3.whitespace-pre-wrap.overflow-y-auto');
  const expectedText = 'මම ඇත්ත කිව්වම රිදුනද සුද්දා?';
  await page.waitForTimeout(2000);
  await expect(output).toHaveText(expectedText);
});

test('Pos_Fun_0006 - Positive: Convert a simple sentence with English abbreviations and short forms', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputText = 'oyaata mama activity ekee PDF eka evannan.';
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(inputText);
  const output = page.locator('div.w-full.h-80.p-3.whitespace-pre-wrap.overflow-y-auto');
  const expectedText = 'ඔයාට මම activity එකේ PDF එක එවන්නන්.';
  await page.waitForTimeout(2000);
  await expect(output).toHaveText(expectedText);
});

test('Pos_Fun_0007 - Positive: Convert a polite negation pattern phrase', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputText = 'Mata meeka therunee naee. karunakaralaa aapahu kiyalaa dhenna.';
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(inputText);
  const output = page.locator('div.w-full.h-80.p-3.whitespace-pre-wrap.overflow-y-auto');
  const expectedText = 'මට මේක තෙරුනේ නෑ. කරුනකරලා ආපහු කියලා දෙන්න.';
  await page.waitForTimeout(2000);
  await expect(output).toHaveText(expectedText);
});

test('Pos_Fun_0008 - Positive: Convert a sentence with common English words in imperative form', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputText = 'mee notes vala printout ekak ganna.';
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(inputText);
  const output = page.locator('div.w-full.h-80.p-3.whitespace-pre-wrap.overflow-y-auto');
  const expectedText = 'මේ notes වල printout එකක් ගන්න.';
  await page.waitForTimeout(2000);
  await expect(output).toHaveText(expectedText);
});

test('Pos_Fun_0009 - Positive: Convert a complex content mixed with past, present and future tense', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputText = 'api mee aDhiraajYAyehi kenehelikam bohoomayak ivasaa dhaaragena hitiyaa. adha dhina patan api kisidhu paalanayakata yatath novee. siyaluma raajyan apagee aNasaka idhiriyee dhaNa namaavi. ee vageema ovun mathaka thabaaganiivi adha mema aDhiraajYAyehi avasaanaya bava.';
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(inputText);
  const output = page.locator('div.w-full.h-80.p-3.whitespace-pre-wrap.overflow-y-auto');
  const expectedText = 'අපි මේ අධිරාජ්‍යයෙහි කෙනෙහෙලිකම් බොහෝමයක් ඉවසා දාරගෙන හිටියා. අද දින පටන් අපි කිසිදු පාලනයකට යටත් නොවේ. සියලුම රාජ්යන් අපගේ අණසක ඉදිරියේ දණ නමාවි. ඒ වගේම ඔවුන් මතක තබාගනීවි අද මෙම අධිරාජ්‍යයෙහි අවසානය බව.';
  await page.waitForTimeout(2000);
  await expect(output).toHaveText(expectedText);
});

test('Pos_Fun_0010 - Positive: Convert a phrase with a brand name and a unit of measurement', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputText = 'Ford samaagama visin nipadhavana mootar raThaya 7000 rpm pasu kalaa.';
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(inputText);
  const output = page.locator('div.w-full.h-80.p-3.whitespace-pre-wrap.overflow-y-auto');
  const expectedText = 'Ford සමාගම විසින් නිපදවන මෝටර් රථය 7000 rpm පසු කලා.';
  await page.waitForTimeout(2000);
  await expect(output).toHaveText(expectedText);
});

test('Pos_Fun_0011 - Positive: Convert a slang, colloquial phrasing', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputText = 'Machan maara vaedak unaane.';
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(inputText);
  const output = page.locator('div.w-full.h-80.p-3.whitespace-pre-wrap.overflow-y-auto');
  const expectedText = 'මචන් මාර වැඩක් උනානෙ.';
  await page.waitForTimeout(2000);
  await expect(output).toHaveText(expectedText);
});

test('Pos_Fun_0012 - Positive: Convert a request contained with English terms', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputText = 'oyaage CV eka mata Email ekak dhaanavadha?';
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(inputText);
  const output = page.locator('div.w-full.h-80.p-3.whitespace-pre-wrap.overflow-y-auto');
  const expectedText = 'ඔයාගෙ CV එක මට Email එකක් දානවද?';
  await page.waitForTimeout(2000);
  await expect(output).toHaveText(expectedText);
});

test('Pos_Fun_0013 - Positive: Convert a simple paragrahph style input', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputText = 'dheviyangee mallita otunu dhaemmama minissu gaava thiyena vatina gathiguna pirihila yanavaa. pava pina kiyana dheeval therenne naethuva yanavaa. Minissu pirihenavaa kiyannee samaajayata sampuurNayen nogaeLapuNu kotasak varDhanaya venavaa kiyana eka.';
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(inputText);
  const output = page.locator('div.w-full.h-80.p-3.whitespace-pre-wrap.overflow-y-auto');
  const expectedText = 'දෙවියන්ගේ මල්ලිට ඔටුනු දැම්මම මිනිස්සු ගාව තියෙන වටින ගතිගුන පිරිහිල යනවා. පව පින කියන දේවල් තෙරෙන්නෙ නැතුව යනවා. මිනිස්සු පිරිහෙනවා කියන්නේ සමාජයට සම්පූර්ණයෙන් නොගැළපුණු කොටසක් වර්ධනය වෙනවා කියන එක.';
  await page.waitForTimeout(2000);
  await expect(output).toHaveText(expectedText);
});

test('Pos_Fun_0014 - Positive: Convert a simple greeting with multiple punctuation marks', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputText = 'obata suba gaman!!!';
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(inputText);
  const output = page.locator('div.w-full.h-80.p-3.whitespace-pre-wrap.overflow-y-auto');
  const expectedText = 'ඔබට සුබ ගමන්!!!';
  await page.waitForTimeout(2000);
  await expect(output).toHaveText(expectedText);
});

test('Pos_Fun_0015 - Positive: Convert a simple negative form phrase', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputText = 'mee sindhuva ahalama naee.';
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(inputText);
  const output = page.locator('div.w-full.h-80.p-3.whitespace-pre-wrap.overflow-y-auto');
  const expectedText = 'මේ සින්දුව අහලම නෑ.';
  await page.waitForTimeout(2000);
  await expect(output).toHaveText(expectedText);
});

test('Pos_Fun_0016 - Positive: Convert a short informal phrase', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputText = 'ikmanata hoyapan.';
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(inputText);
  const output = page.locator('div.w-full.h-80.p-3.whitespace-pre-wrap.overflow-y-auto');
  const expectedText = 'ඉක්මනට හොයපන්.';
  await page.waitForTimeout(2000);
  await expect(output).toHaveText(expectedText);
});

test('Pos_Fun_0017 - Positive: Convert a sentence with time expression', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputText = 'Merlin series eke King Arthur kiyala kiyanne simple rajek nevei, eka hari loku destiny ekak saha deep meaning ekak thiyena character ekak. Muladi Arthur hari loku proud, ego thiyena, authority eka vitharak hitagena innā rajakumarayek vidhihata api dhakinna puluvan. Ohu Uther Pendragonge putha vidhihata haedhila thiyenava, e nisaa magic kiyala dheyata hari loku vairayak saha bayayak ohuge hithata thiyenava. Utherge strict rules nisa magic use karana aya maranna, punish karanna venava kiyala Arthur belief karanava. namuth mee situation eka slowly change venne Merlin saha Arthur athara haedhena friendship eka nisaa. Merlin outward vidhihata simple servant kenek vage penunath, aththatama ohu Arthurge jiivithaya rakina, ohuge destiny eka protect karana kenek. Marlinge magic eka secret ekak vidhihata thiyaagena, ohu Aartharta guidance dhenna, correct decisions ganna help karanava. Mulin Arthur hari rude, angry, unfair vage behave karanava, namuth kaalayak yadhdhi ohuge character eka slowly grow venava. Ohu janaathavata aadharee karanna, e ayage dhuka, baya, saha aasaaval theerenna patan gannava. Eka true king kenekta thiyenna ona main quality ekak. Excalibur sword eka Aartharta laebenakota, eka simple yudhdha astrayak vitharak newei, eka ohuge destiny eka saha future rajakama symbol karanava. Gwen saha Arthur athara thiyena love story ekath hari pure saha emotional. Gwen rajakumarayek newei, common kenek namuth Arthur ohuva respect karanava, adare karanava, saha equal kenek vidihata dakina eka ohuge maturity eka pennanava. Arthur king venakota, ohuge loku wish eka venne fair saha just ratak hadhanna, janaathava safe karanna, saha magic saha normal minissu ekama rataka jiivath venna puluvan avasthaavak hadhanna. namuth tragic vidhihata, Aartharta Merlin gaena full truth eka therum ganna laebenne hari late. Ehema venath, ohu marana velavedhi Merlin gena thiyena trust eka, friendship eka, saha belief eka hari loku balaya ekak thiyenava. Merlin series eke King Arthur kiyala kiyanne legendary warrior kenek vitarak nevei, ohu mistakes karana, learn karana, sacrifice karana, saha hope eka represent karana manussayek. E nisaa thamayi adha kalayedhi unath King Aartharge kathaava hithata loku vidihata bala paanne.';
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(inputText);
  const output = page.locator('div.w-full.h-80.p-3.whitespace-pre-wrap.overflow-y-auto');
  const expectedText = 'Merlin series eke King Arthur කියල කියන්නෙ simple රජෙක් නේවේ, එක හරි ලොකු destiny එකක් සහ deep meaning එකක් තියෙන character එකක්. මුලඩි Arthur හරි ලොකු proud, ego තියෙන, authority එක විතරක් හිටගෙන innā රජකුමරයෙක් විදිහට අපි දකින්න පුලුවන්. ඔහු උතෙර් ඵෙන්ඩ්‍රගොන්ගෙ පුත විදිහට හැදිල තියෙනව, එ නිසා magic කියල දෙයට හරි ලොකු වෛරයක් සහ බයයක් ඔහුගෙ හිතට තියෙනව. උතෙර්ගෙ strict rules නිස magic use කරන අය මරන්න, punish කරන්න වෙනව කියල Arthur belief කරනව. නමුත් මේ situation එක slowly change වෙන්නෙ Merlin සහ Arthur අතර හැදෙන friendship එක නිසා. Merlin outward විදිහට simple servant කෙනෙක් වගෙ පෙනුනත්, අත්තටම ඔහු අර්තුර්ගෙ ජීවිතය රකින, ඔහුගෙ destiny එක protect කරන කෙනෙක්. මර්ලින්ගෙ magic එක secret එකක් විදිහට තියාගෙන, ඔහු ආර්තර්ට guidance දෙන්න, correct decisions ගන්න help කරනව. මුලින් Arthur හරි rude, angry, unfair වගෙ behave කරනව, නමුත් කාලයක් යද්දි ඔහුගෙ character එක slowly grow වෙනව. ඔහු ජනාතවට ආදරේ කරන්න, එ අයගෙ දුක, බය, සහ ආසාවල් තේරෙන්න පටන් ගන්නව. එක true king කෙනෙක්ට තියෙන්න ඔන main quality එකක්. Excalibur sword එක ආර්තර්ට ලැබෙනකොට, එක simple යුද්ද අස්ට්‍රයක් විතරක් නෙwඑඉ, එක ඔහුගෙ destiny එක සහ future රජකම symbol කරනව. Gwen සහ Arthur අතර තියෙන love story එකත් හරි pure සහ emotional. Gwen රජකුමරයෙක් නෙwඑඉ, common කෙනෙක් නමුත් Arthur ඔහුව respect කරනව, අඩරෙ කරනව, සහ equal කෙනෙක් විඩිහට ඩකින එක ඔහුගෙ maturity එක පෙන්නනව. Arthur king වෙනකොට, ඔහුගෙ ලොකු wish එක වෙන්නෙ fair සහ just රටක් හදන්න, ජනාතව safe කරන්න, සහ magic සහ normal මිනිස්සු එකම රටක ජීවත් වෙන්න පුලුවන් අවස්තාවක් හදන්න. නමුත් tragic විදිහට, ආර්තර්ට Merlin ගැන full truth එක තෙරුම් ගන්න ලැබෙන්නෙ හරි late. එහෙම වෙනත්, ඔහු මරන වෙලවෙදි Merlin ගෙන තියෙන trust එක, friendship එක, සහ belief එක හරි ලොකු බලය එකක් තියෙනව. Merlin series eke King Arthur කියල කියන්නෙ legendary warrior කෙනෙක් විටරක් නේවේ, ඔහු mistakes කරන, learn කරන, sacrifice කරන, සහ hope එක represent කරන මනුස්සයෙක්. එ නිසා තමයි අද කලයෙදි උනත් King ආර්තර්ගෙ කතාව හිතට ලොකු විඩිහට බල පාන්නෙ.';
  await page.waitForTimeout(2000);
  await expect(output).toHaveText(expectedText);
});

test('Pos_Fun_0018 - Positive: Convert a sentence with modal verb', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputText = 'mama jaya gaththaa.';
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(inputText);
  const output = page.locator('div.w-full.h-80.p-3.whitespace-pre-wrap.overflow-y-auto');
  const expectedText = 'මම ජය ගත්තා.';
  await page.waitForTimeout(2000);
  await expect(output).toHaveText(expectedText);
});

test('Pos_Fun_0019 - Positive: Convert a sentence with conjunction', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputText = 'mama sindhuvak ahanavaa.';
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(inputText);
  const output = page.locator('div.w-full.h-80.p-3.whitespace-pre-wrap.overflow-y-auto');
  const expectedText = 'මම සින්දුවක් අහනවා.';
  await page.waitForTimeout(2000);
  await expect(output).toHaveText(expectedText);
});

test('Pos_Fun_0020 - Positive: Convert a sentence with question tag', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputText = 'SLC team eka meekata suudhaanam naee vagee.';
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(inputText);
  const output = page.locator('div.w-full.h-80.p-3.whitespace-pre-wrap.overflow-y-auto');
  const expectedText = 'SLC team එක මේකට සූදානම් නෑ වගේ.';
  await page.waitForTimeout(2000);
  await expect(output).toHaveText(expectedText);
});

test('Pos_Fun_0021 - Positive: Convert a sentence with exclamation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputText = 'Samsung saha Apple dhurakaThana, looka veLaDHApolee ithaama ihalin inna dhurakaThana sannaama dhekak. Mema maadhili dheka sambanDhayen vuu viviDha matha saha adhahas minussungen apita asanna laebenavaa. namuth idhiriyenma sitinnee kumakdha yanna thavamath prashnaarthayaki.';
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(inputText);
  const output = page.locator('div.w-full.h-80.p-3.whitespace-pre-wrap.overflow-y-auto');
  const expectedText = 'Samsung සහ Apple දුරකථන, ලෝක වෙළඳපොලේ ඉතාම ඉහලින් ඉන්න දුරකථන සන්නාම දෙකක්. මෙම මාදිලි දෙක සම්බන්ධයෙන් වූ විවිධ මත සහ අදහස් මිනුස්සුන්ගෙන් අපිට අසන්න ලැබෙනවා. නමුත් ඉදිරියෙන්ම සිටින්නේ කුමක්ද යන්න තවමත් ප්‍රශ්නාර්තයකි.';
  await page.waitForTimeout(2000);
  await expect(output).toHaveText(expectedText);
});

test('Pos_Fun_0022 - Positive: Convert a sentence with adjective', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputText = 'gaalla harima sundhara nagarayak.';
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(inputText);
  const output = page.locator('div.w-full.h-80.p-3.whitespace-pre-wrap.overflow-y-auto');
  const expectedText = 'ගාල්ල හරිම සුන්දර නගරයක්.';
  await page.waitForTimeout(2000);
  await expect(output).toHaveText(expectedText);
});

test('Pos_Fun_0023 - Positive: Convert a sentence with adverb', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputText = 'Singlish Bhaashaava Sinhala vetha parivarthanaya kiriima.';
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(inputText);
  const output = page.locator('div.w-full.h-80.p-3.whitespace-pre-wrap.overflow-y-auto');
  const expectedText = 'සින්ග්ලිශ් භාශාව Sinhala වෙත පරිවර්තනය කිරීම.';
  await page.waitForTimeout(2000);
  await expect(output).toHaveText(expectedText);
});

test('Pos_Fun_0024 - Positive: Convert a sentence with complex structure', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputText = 'ratee bihisuNuma Keedhavaachakayak unu sunaami anathurata muhuna dhenna sidhdha unee 2004 avurudhdhee dhesaembar 26 vaeni pooya dhina. ahinsaka minisun 35,000 kata aasanna pramaaNayakagee jiivitha eyin ahimi unaa.';
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(inputText);
  const output = page.locator('div.w-full.h-80.p-3.whitespace-pre-wrap.overflow-y-auto');
  const expectedText = 'රටේ බිහිසුණුම ඛේදවාචකයක් උනු සුනාමි අනතුරට මුහුන දෙන්න සිද්ද උනේ 2004 අවුරුද්දේ දෙසැම්බර් 26 වැනි පෝය දින. අහින්සක මිනිසුන් 35,000 කට ආසන්න ප්‍රමාණයකගේ ජීවිත එයින් අහිමි උනා.';
  await page.waitForTimeout(2000);
  await expect(output).toHaveText(expectedText);
});

test('Pos_Fun_0025 - Positive: Convert a sentence with idiomatic expression', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputText = 'dhutugaemunu rajathumaa anuraaDhapura raajaDhaaniyee ithihasayee hari loku sThaanayak gaththa viirayek vidhihata api haemadhaama mathaka thiyagena innavaa. Ohuge jiivithaya muladhi ohu dhutugaemunu neveyi, gaamani ABhaya kiyala nam karala thibuna saha ohu hari loku adhahas godak hithata thiyaagena haedhuna kenek. ee adhahasa venne dheeshaya ek karanna, beedha velaa thibuna Bhuumiya ekama rajyaya vidhihata hadhanna kiyala. E kaalayee anuraaDhapura raajaDhaaniyee Elaara rajathumaa yatathin thibuna nisaa Sinhala janathaavata loku dhukak saha avamaanayak thibunaa. dhutugaemunu mee thathvaya eka balaagena inna eka hari loku sathutakata maaru karanna puluvan dheyak neveyi kiyala ohu hithuva. Ohu yudhdha karanna adhahas kalee paudhgalika vairayakata neveyi, namuth janathaavage nidhahasa saha dharmaya raekaganna oonaa nisaa. Ohugee mava vana vihaaramahaadhevi ohuta dhairya saha aDhishtaanaya hithata ekathu karanavaa. dhutugaemunu rajathumaa saha ohugee sahoodharayaa sadhdhaathissa athara muladhi thiyena yudha vaedhunu namuth pasu kaalaye ovun elaarata virudhDhava ekata ekva satan karanavaa. yudhdha karadhdhi dhutugaemunu rajathumaa pamaNak nova, ohugee dhasa maha yooDhayandha yudhdhata sahaaya venavaa. elaara rajun samaga yudhdha kota jaya gath pasu, dhutugaemunu rajathumaa ithaa suvisheeShii dheyak karanava. Ohu elaara rajathumaata gauravaya dhenava saha ohu maruna thana sthupayak hadhanna aNa dhenava. eeka ohuge guNaya saha nihathamaaniikama penvana kadıma udhaharanayak. pasu kaalaye ohu mahaa viharaya saha ruvanvaelisaeeya vage sthupa idhi karala baudhDha dharshanaya nagaa situvanavaa. dhutugaemunu rajathumaa yanu yudha karapu raja keneku vitharak nova, ohu dheeshaya, Dharmaya saha janathaavata behevin upakaara karapu rajek. E nisaa anuraaDhapura yugayee ohuge naamaya adha kaalayedhiith udinma thibena namaki.';
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(inputText);
  const output = page.locator('div.w-full.h-80.p-3.whitespace-pre-wrap.overflow-y-auto');
  const expectedText = 'දුටුගැමුනු රජතුමා අනුරාධපුර රාජධානියේ ඉතිහසයේ හරි ලොකු ස්ථානයක් ගත්ත වීරයෙක් විදිහට අපි හැමදාම මතක තියගෙන ඉන්නවා. ඔහුගෙ ජීවිතය මුලදි ඔහු දුටුගැමුනු නෙවෙයි, ගාමනි අභය කියල නම් කරල තිබුන සහ ඔහු හරි ලොකු අදහස් ගොඩක් හිතට තියාගෙන හැදුන කෙනෙක්. ඒ අදහස වෙන්නෙ දේශය එක් කරන්න, බේද වෙලා තිබුන භූමිය එකම රජ්යය විදිහට හදන්න කියල. එ කාලයේ අනුරාධපුර රාජධානියේ එලාර රජතුමා යටතින් තිබුන නිසා Sinhala ජනතාවට ලොකු දුකක් සහ අවමානයක් තිබුනා. දුටුගැමුනු මේ තත්වය එක බලාගෙන ඉන්න එක හරි ලොකු සතුටකට මාරු කරන්න පුලුවන් දෙයක් නෙවෙයි කියල ඔහු හිතුව. ඔහු යුද්ද කරන්න අදහස් කලේ පෞද්ගලික වෛරයකට නෙවෙයි, නමුත් ජනතාවගෙ නිදහස සහ දර්මය රැකගන්න ඕනා නිසා. ඔහුගේ මව වන විහාරමහාදෙවි ඔහුට දෛර්ය සහ අධිශ්ටානය හිතට එකතු කරනවා. දුටුගැමුනු රජතුමා සහ ඔහුගේ සහෝදරයා සද්දාතිස්ස අතර මුලදි තියෙන යුද වැදුනු නමුත් පසු කාලයෙ ඔවුන් එලාරට විරුද්ධව එකට එක්ව සටන් කරනවා. යුද්ද කරද්දි දුටුගැමුනු රජතුමා පමණක් නොව, ඔහුගේ දස මහ යෝධයන්ද යුද්දට සහාය වෙනවා. එලාර රජුන් සමග යුද්ද කොට ජය ගත් පසු, දුටුගැමුනු රජතුමා ඉතා සුවිශේෂී දෙයක් කරනව. ඔහු එලාර රජතුමාට ගෞරවය දෙනව සහ ඔහු මරුන තන ස්තුපයක් හදන්න අණ දෙනව. ඒක ඔහුගෙ ගුණය සහ නිහතමානීකම පෙන්වන කඩ්ıම උදහරනයක්. පසු කාලයෙ ඔහු මහා විහරය සහ රුවන්වැලිසෑය වගෙ ස්තුප ඉදි කරල බෞද්ධ දර්ශනය නගා සිටුවනවා. දුටුගැමුනු රජතුමා යනු යුද කරපු රජ කෙනෙකු විතරක් නොව, ඔහු දේශය, ධර්මය සහ ජනතාවට බෙහෙවින් උපකාර කරපු රජෙක්. එ නිසා අනුරාධපුර යුගයේ ඔහුගෙ නාමය අද කාලයෙදීත් උඩින්ම තිබෙන නමකි.';
  await page.waitForTimeout(2000);
  await expect(output).toHaveText(expectedText);
});


// Negative test case
test('Neg_Fun_0001 - Negative: Convert input with newlines and spaces', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputText = 'visthara\nvichaaraya\nnsavuththuyi. ';
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(inputText);
  const output = page.locator('div.w-full.h-80.p-3.whitespace-pre-wrap.overflow-y-auto');
  const expectedText = 'විස්තර විචාරය සවුත්තුයි. ';
  await page.waitForTimeout(2000);
  await expect(output).toHaveText(expectedText);
});

test('Neg_Fun_0002 - Negative: Convert concatenated word', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputText = 'puluvandheyakkarapan';
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(inputText);
  const output = page.locator('div.w-full.h-80.p-3.whitespace-pre-wrap.overflow-y-auto');
  const expectedText = 'පුලුවන් දෙයක් කරපන්';
  await page.waitForTimeout(2000);
  await expect(output).toHaveText(expectedText);
});

test('Neg_Fun_0003 - Negative: Convert phrase with English slang', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputText = 'vandiyak gtta bro';
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(inputText);
  const output = page.locator('div.w-full.h-80.p-3.whitespace-pre-wrap.overflow-y-auto');
  const expectedText = 'වන්ඩියක් ගත්තා bro';
  await page.waitForTimeout(2000);
  await expect(output).toHaveText(expectedText);
});

test('Neg_Fun_0004 - Negative: Convert phrase with mixed numbers and words', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputText = 'magee 4n eka oyaa gaavadha?';
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(inputText);
  const output = page.locator('div.w-full.h-80.p-3.whitespace-pre-wrap.overflow-y-auto');
  const expectedText = 'මගේ phone එක ඔයා ගාවද?';
  await page.waitForTimeout(2000);
  await expect(output).toHaveText(expectedText);
});

test('Neg_Fun_0005 - Negative: Convert phrase with repeated letters', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputText = 'meeka lassanaiiiiiiiiiiiiii';
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(inputText);
  const output = page.locator('div.w-full.h-80.p-3.whitespace-pre-wrap.overflow-y-auto');
  const expectedText = 'මේක ලස්සනයි';
  await page.waitForTimeout(2000);
  await expect(output).toHaveText(expectedText);
});

test('Neg_Fun_0006 - Negative: Convert long concatenated text', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputText = 'shriilankaavaharimasundhararatak.ehikadhu,vaevu,jalaashasahavanaantharavaenisvaBhaavasaundharyenlaebunudhaayaadhabohomayi.aagamikasanskruthikavashayenpohosathratakvanashriilankaavaaasiyaaveemuthuaetayalesadhahadhunvayi.';
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(inputText);
  const output = page.locator('div.w-full.h-80.p-3.whitespace-pre-wrap.overflow-y-auto');
  const expectedText = 'ශ්‍රී ලන්කාව හරිම සුන්දර රටක්. එහි කදු, වැවු, ජලාශ සහ වනාන්තර වැනි ස්වභාව සෞන්දර්යෙන් ලැබුනු දායාද බොහොමයි. ආගමික සන්ස්ක්‍රුතික වශයෙන් පොහොසත් රටක් වන ශ්‍රී ලන්කාව ආසියාවේ මුතු ඇටය ලෙසද හදුන්වයි.';
  await page.waitForTimeout(2000);
  await expect(output).toHaveText(expectedText);
});

test('Neg_Fun_0007 - Negative: Convert phrase with mixed English and Singlish', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputText = 'Ela machan 2morrow set vemu.';
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(inputText);
  const output = page.locator('div.w-full.h-80.p-3.whitespace-pre-wrap.overflow-y-auto');
  const expectedText = 'එල මචන් tomorrow සෙට් වෙමු.';
  await page.waitForTimeout(2000);
  await expect(output).toHaveText(expectedText);
});

test('Neg_Fun_0008 - Negative: Convert simple phrase', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputText = 'sinhala kathaa karanna';
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(inputText);
  const output = page.locator('div.w-full.h-80.p-3.whitespace-pre-wrap.overflow-y-auto');
  const expectedText = 'සිංහල කතා කරන්න';
  await page.waitForTimeout(2000);
  await expect(output).toHaveText(expectedText);
});

test('Neg_Fun_0009 - Negative: Convert multi-line phrase with English words', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputText = 'Star Wars film franchise eka supiri galactic kathavak kiyala kiyanna puluvan.\nJedi Sith forces samaga fight karanavaa.\nLuke aenakin Darth Vader wage characters  saha space yudhdha, adventures,  emotions,  friendship saha sacrifices okkoma lassanata pennanavaa.';
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(inputText);
  const output = page.locator('div.w-full.h-80.p-3.whitespace-pre-wrap.overflow-y-auto');
  const expectedText = 'Star Wars film franchise එක සුපිරි galactic කතවක් කියල කියන්න පුලුවන්. Jedi සිත් forces සමග fight කරනවා. Luke Anakin Darth Vader wage characters සහ space යුද්ද, adventures, emotions, friendship සහ sacrifices ඔක්කොම ලස්සනට පෙන්නනවා.';
  await page.waitForTimeout(2000);
  await expect(output).toHaveText(expectedText);
});

test('Neg_Fun_0010 - Negative: Convert phrase with abbreviation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputText = 'api adha ravumak gahamu r8?';
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(inputText);
  const output = page.locator('div.w-full.h-80.p-3.whitespace-pre-wrap.overflow-y-auto');
  const expectedText = 'අපි අද රවුමක් ගහමු right?';
  await page.waitForTimeout(2000);
  await expect(output).toHaveText(expectedText);
});


// UI test case
test('Pos_UI_0001 - Positive: UI elements are visible and functional', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await expect(inputBox).toBeVisible();
  await expect(inputBox).toBeEnabled();

  const outputBox = page.locator('div.w-full.h-80.p-3.whitespace-pre-wrap.overflow-y-auto');
  await expect(outputBox).toBeVisible();

  const copyButton = page.getByRole('button', { name: /copy/i }).first();
  await expect(copyButton).toBeVisible();

  const clearButton = page.getByRole('button', { name: /clear/i }).first();
  await expect(clearButton).toBeVisible();

  const placeholderInput = 'mama meeka kalaa';
  await inputBox.fill(placeholderInput);

  await expect(outputBox).not.toHaveText('', { timeout: 5000 });
});