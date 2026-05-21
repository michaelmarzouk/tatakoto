import type { Lang } from '../consts';

export interface ArticleContent {
  title: string;
  description: string;
  body: string; // HTML
}

export interface Article {
  slug: string;
  date: string; // ISO
  updated: string;
  author: { name: string; role: string; orcid?: string };
  tags: ('ai' | 'medical')[];
  readTime: number;
  originalDoi: string;
  originalUrl: string;
  originalTitle: string;
  originalJournal: string;
  drugs?: { name: string; sameAs?: string }[];
  conditions?: { name: string; sameAs?: string }[];
  content: Record<Lang, ArticleContent>;
}

export const articles: Article[] = [
  {
    slug: 'semaglutide-essai-select',
    date: '2026-05-21',
    updated: '2026-05-21',
    author: {
      name: 'Dr. Camille Roux',
      role: 'Médecin rédactrice',
      orcid: 'https://orcid.org/0000-0000-0000-0000',
    },
    tags: ['medical', 'ai'],
    readTime: 7,
    originalDoi: '10.1056/NEJMoa2307563',
    originalUrl: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2307563',
    originalTitle: 'Semaglutide and Cardiovascular Outcomes in Obesity Without Diabetes',
    originalJournal: 'New England Journal of Medicine',
    drugs: [{ name: 'Sémaglutide', sameAs: 'https://www.wikidata.org/wiki/Q21105106' }],
    conditions: [{ name: 'Obésité', sameAs: 'https://www.wikidata.org/wiki/Q12174' }],
    content: {
      fr: {
        title: 'Sémaglutide et risque cardiovasculaire : ce que dit vraiment l\'essai SELECT',
        description: 'Analyse critique de SELECT, l\'essai sur 17 604 patients en surpoids sans diabète qui a montré une réduction du risque cardiovasculaire sous sémaglutide. Ce que l\'étude trouve, ce qu\'elle ne dit pas, et ce qui change.',
        body: `
<p class="lede"><strong>L'essai SELECT, publié dans le NEJM en novembre 2023, a suivi 17 604 patients en surpoids ou obèses, sans diabète, randomisés entre sémaglutide 2,4 mg par semaine et placebo. Sur 40 mois de suivi médian, le risque d'événement cardiovasculaire majeur a baissé de 20 % en relatif — soit 6,5 % d'événements dans le groupe traité contre 8,0 % dans le groupe placebo. C'est statistiquement net, cliniquement intéressant, mais à lire avec deux ou trois précautions.</strong></p>

<h2>Le contexte</h2>
<p>Le sémaglutide est un agoniste du récepteur GLP-1, initialement développé pour le diabète de type 2 (commercialisé sous le nom d'Ozempic), puis approuvé pour la perte de poids chez le sujet obèse (sous le nom de Wegovy). Depuis quelques années, des signaux d'effets cardiovasculaires bénéfiques émergeaient — d'abord chez les diabétiques, où les essais STEP et SUSTAIN avaient montré des réductions d'événements. SELECT est le premier grand essai conçu pour répondre à une question précise : <em>le sémaglutide protège-t-il aussi chez les patients en surpoids qui n'ont pas de diabète ?</em></p>

<h2>La méthode</h2>
<p>Essai contrôlé randomisé, en double aveugle, contre placebo. 17 604 patients âgés de 45 ans ou plus, IMC ≥ 27 kg/m², avec antécédent cardiovasculaire connu (infarctus, AVC, ou maladie artérielle périphérique). Aucun n'avait de diabète. Suivi médian de 40 mois. Le critère de jugement principal était composite : décès cardiovasculaire, infarctus non fatal, ou AVC non fatal. Préenregistré sur ClinicalTrials.gov (NCT03574597) en 2018, avant le démarrage de l'inclusion.</p>
<p>Financement : Novo Nordisk, fabricant du sémaglutide. Cinq des auteurs sont employés par le sponsor. Les autres déclarent des liens financiers avec le sponsor (consulting, conférences) — déclarations détaillées dans le supplément.</p>

<h2>Les résultats</h2>
<p>L'événement cardiovasculaire majeur composite est survenu chez 6,5 % des patients sous sémaglutide contre 8,0 % sous placebo. En relatif : <strong>réduction de 20 % du risque</strong> (HR 0,80 ; IC 95 % 0,72-0,90 ; p < 0,001). En absolu : <strong>1,5 point de pourcentage de différence</strong> sur 40 mois — soit <strong>environ 1 événement évité pour 67 patients traités sur 3 ans</strong> (NNT ≈ 67).</p>
<p>Les effets secondaires gastrointestinaux (nausées, diarrhées, constipation) ont conduit 16,6 % des patients sous sémaglutide à arrêter le traitement, contre 8,2 % sous placebo. La perte de poids moyenne dans le groupe traité a été de 9,4 %.</p>

<h2>Ce qui est bien</h2>
<p>Trois éléments forts dans cette étude. La <strong>taille de l'échantillon</strong> est imposante (plus de 17 000 patients), ce qui donne une puissance statistique solide. Le <strong>critère de jugement principal était composite et préenregistré</strong>, ce qui exclut le <em>outcome switching</em>. Et le <strong>suivi de 40 mois en médiane</strong> est long pour ce type d'essai — assez pour détecter les effets cardiovasculaires durables, même si encore court pour repérer certains effets tardifs.</p>

<h2>Ce qui est moins bien</h2>
<p>Trois points méritent vigilance. <strong>Le bénéfice absolu reste modeste</strong> : 1,5 point de pourcentage sur 40 mois, soit un NNT autour de 67 — ce qui signifie qu'il faut traiter 67 patients pendant 3 ans pour éviter un événement cardiovasculaire majeur chez un seul d'entre eux. C'est utile, ce n'est pas révolutionnaire.</p>
<p><strong>Les effets secondaires sont sous-représentés</strong> dans la communication du résultat principal. Plus d'un patient sur six abandonne le traitement à cause d'effets digestifs — c'est une donnée critique pour quiconque envisage la prise au long cours. La balance bénéfice/risque dépend autant de la tolérance que de l'efficacité.</p>
<p><strong>Le financement par Novo Nordisk et l'implication directe de cinq employés du sponsor</strong> parmi les auteurs ne disqualifient pas le résultat, mais imposent un examen indépendant. Plusieurs effets observés (perte de poids, baisse de tension, baisse de l'HbA1c chez les pré-diabétiques) sont des mécanismes plausibles pour expliquer le bénéfice, mais une étude indépendante de réplication serait précieuse.</p>

<h2>Ce qui change</h2>
<p>Pour un <strong>lecteur curieux</strong> : le sémaglutide n'est pas seulement un médicament de perte de poids — il a maintenant un signal de protection cardiovasculaire chez l'adulte en surpoids avec antécédent cardiovasculaire. C'est un changement de catégorie clinique.</p>
<p>Pour un <strong>patient concerné</strong> (surpoids, antécédent cardiovasculaire, sans diabète) : la question à poser à son médecin n'est pas <em>« est-ce que je devrais prendre du sémaglutide ? »</em> mais <em>« est-ce que les bénéfices probables dans ma situation dépassent le coût, les effets secondaires et la durée de prise nécessaire ? »</em>. La discussion individuelle reste indispensable, parce que le NNT moyen masque des sous-groupes où le bénéfice est probablement plus net.</p>
<p>Pour un <strong>professionnel de santé non-cardiologue</strong> : les recommandations européennes et américaines vont probablement intégrer ce résultat dans les 12-18 mois, sous réserve d'analyses indépendantes et de discussions sur le coût. À monitorer dans les guidelines ESC et AHA.</p>

<h2>Pour aller plus loin</h2>
<p>La publication originale est en accès libre via le NEJM (voir le lien dans la barre latérale). À lire en complément : la méta-analyse Cochrane 2024 sur les agonistes GLP-1 en prévention cardiovasculaire, et le rapport de la HAS française sur les indications du sémaglutide en France (disponible sur has-sante.fr).</p>
`,
      },
      en: {
        title: 'Semaglutide and cardiovascular risk: what the SELECT trial actually shows',
        description: 'Critical analysis of SELECT, the 17,604-patient trial of overweight non-diabetic patients showing semaglutide reduces cardiovascular risk. What the study finds, what it doesn\'t say, and what changes.',
        body: `
<p class="lede"><strong>The SELECT trial, published in the NEJM in November 2023, followed 17,604 overweight or obese patients without diabetes, randomized to weekly semaglutide 2.4 mg or placebo. Over a 40-month median follow-up, the risk of major cardiovascular event dropped 20% in relative terms — that is, 6.5% of events in the treated group versus 8.0% in placebo. Statistically clear, clinically interesting, but to be read with a few caveats.</strong></p>

<h2>The context</h2>
<p>Semaglutide is a GLP-1 receptor agonist, initially developed for type 2 diabetes (marketed as Ozempic), then approved for weight loss in obese adults (as Wegovy). Over recent years, signals of cardiovascular benefit had emerged — first in diabetics, where the STEP and SUSTAIN trials showed event reductions. SELECT is the first large trial designed to answer a precise question: <em>does semaglutide also protect overweight patients who don't have diabetes?</em></p>

<h2>The method</h2>
<p>Randomized, double-blind, placebo-controlled trial. 17,604 patients aged 45 or older, BMI ≥ 27 kg/m², with established cardiovascular disease (prior MI, stroke, or peripheral artery disease). None had diabetes. Median follow-up of 40 months. The primary outcome was composite: cardiovascular death, non-fatal MI, or non-fatal stroke. Pre-registered on ClinicalTrials.gov (NCT03574597) in 2018, before enrollment started.</p>
<p>Funding: Novo Nordisk, the maker of semaglutide. Five of the authors are employed by the sponsor. Other authors declare financial ties to the sponsor (consulting, lectures) — detailed disclosures in the supplement.</p>

<h2>The results</h2>
<p>The major cardiovascular composite event occurred in 6.5% of semaglutide patients versus 8.0% on placebo. In relative terms: <strong>20% relative risk reduction</strong> (HR 0.80; 95% CI 0.72–0.90; p < 0.001). In absolute terms: <strong>1.5 percentage point difference</strong> over 40 months — that is, <strong>roughly 1 event prevented per 67 patients treated for 3 years</strong> (NNT ≈ 67).</p>
<p>Gastrointestinal side effects (nausea, diarrhea, constipation) led 16.6% of semaglutide patients to discontinue treatment, versus 8.2% on placebo. Mean weight loss in the treated group was 9.4%.</p>

<h2>What's good</h2>
<p>Three strong points. The <strong>sample size</strong> is large (over 17,000 patients), giving solid statistical power. The <strong>primary outcome was composite and pre-registered</strong>, which rules out outcome switching. And the <strong>40-month median follow-up</strong> is long for this kind of trial — long enough to detect durable cardiovascular effects, though still short for picking up some late effects.</p>

<h2>What's less good</h2>
<p>Three points warrant caution. <strong>The absolute benefit remains modest</strong>: 1.5 percentage points over 40 months, that is an NNT around 67 — meaning 67 patients must be treated for 3 years to prevent one cardiovascular event in one of them. Useful, not revolutionary.</p>
<p><strong>Side effects are underrepresented</strong> in coverage of the main result. More than one patient in six discontinues treatment because of digestive effects — a critical data point for anyone considering long-term use. The risk-benefit balance depends as much on tolerance as on efficacy.</p>
<p><strong>Sponsorship by Novo Nordisk and direct involvement of five sponsor employees</strong> among the authors does not disqualify the result, but does call for independent scrutiny. Several observed effects (weight loss, blood pressure drop, HbA1c reduction in pre-diabetics) are plausible mechanisms for the benefit, but an independent replication study would be valuable.</p>

<h2>What changes</h2>
<p>For a <strong>curious reader</strong>: semaglutide is no longer just a weight-loss drug — it now has a cardiovascular protection signal in overweight adults with established cardiovascular disease. That's a clinical category shift.</p>
<p>For a <strong>concerned patient</strong> (overweight, cardiovascular history, non-diabetic): the question to ask your doctor is not <em>"should I take semaglutide?"</em> but <em>"do the likely benefits in my situation outweigh the cost, side effects, and required duration?"</em>. Individual discussion remains essential, because the average NNT hides subgroups where the benefit is probably more pronounced.</p>
<p>For a <strong>non-cardiologist health professional</strong>: European and American guidelines will likely integrate this result within 12-18 months, pending independent analyses and discussions on cost. Watch the ESC and AHA guideline updates.</p>

<h2>Further reading</h2>
<p>The original publication is open access via NEJM (see sidebar link). Also useful: the Cochrane 2024 meta-analysis on GLP-1 agonists in cardiovascular prevention, and the French HAS report on semaglutide indications in France (at has-sante.fr).</p>
`,
      },
      es: {
        title: 'Semaglutida y riesgo cardiovascular: lo que realmente muestra el ensayo SELECT',
        description: 'Análisis crítico de SELECT, el ensayo en 17.604 pacientes con sobrepeso sin diabetes que mostró que la semaglutida reduce el riesgo cardiovascular. Lo que el estudio encuentra, lo que no dice, y lo que cambia.',
        body: `
<p class="lede"><strong>El ensayo SELECT, publicado en NEJM en noviembre de 2023, siguió a 17.604 pacientes con sobrepeso u obesidad sin diabetes, asignados al azar a semaglutida 2,4 mg semanal o placebo. Tras un seguimiento mediano de 40 meses, el riesgo de evento cardiovascular mayor disminuyó un 20% en términos relativos: 6,5% de eventos en el grupo tratado frente a 8,0% en placebo. Estadísticamente claro, clínicamente interesante, pero leer con algunas precauciones.</strong></p>

<h2>El contexto</h2>
<p>La semaglutida es un agonista del receptor GLP-1, desarrollado inicialmente para la diabetes tipo 2 (comercializado como Ozempic), luego aprobado para la pérdida de peso en adultos obesos (como Wegovy). En los últimos años, señales de beneficio cardiovascular habían emergido — primero en diabéticos, donde los ensayos STEP y SUSTAIN mostraron reducciones de eventos. SELECT es el primer gran ensayo diseñado para responder a una pregunta precisa: <em>¿protege también la semaglutida a pacientes con sobrepeso sin diabetes?</em></p>

<h2>El método</h2>
<p>Ensayo controlado aleatorizado, doble ciego, contra placebo. 17.604 pacientes de 45 años o más, IMC ≥ 27 kg/m², con enfermedad cardiovascular establecida (infarto previo, ictus, o enfermedad arterial periférica). Ninguno tenía diabetes. Seguimiento mediano de 40 meses. El criterio principal era compuesto: muerte cardiovascular, infarto no fatal, o ictus no fatal. Preregistrado en ClinicalTrials.gov (NCT03574597) en 2018, antes del inicio del reclutamiento.</p>
<p>Financiación: Novo Nordisk, fabricante de la semaglutida. Cinco de los autores son empleados del patrocinador. Los demás declaran vínculos financieros con el patrocinador — detalles en el material suplementario.</p>

<h2>Los resultados</h2>
<p>El evento cardiovascular mayor compuesto ocurrió en 6,5% de los pacientes con semaglutida frente a 8,0% con placebo. En términos relativos: <strong>reducción del 20% del riesgo</strong> (HR 0,80; IC 95% 0,72–0,90; p < 0,001). En términos absolutos: <strong>1,5 puntos porcentuales de diferencia</strong> sobre 40 meses — es decir, <strong>aproximadamente 1 evento evitado por cada 67 pacientes tratados durante 3 años</strong> (NNT ≈ 67).</p>
<p>Los efectos gastrointestinales (náuseas, diarrea, estreñimiento) llevaron al 16,6% de los pacientes con semaglutida a abandonar el tratamiento, frente al 8,2% con placebo. La pérdida de peso media en el grupo tratado fue del 9,4%.</p>

<h2>Lo bueno</h2>
<p>Tres puntos fuertes. El <strong>tamaño de la muestra</strong> es grande (más de 17.000 pacientes), lo que da potencia estadística sólida. El <strong>criterio principal era compuesto y preregistrado</strong>, lo que excluye el <em>outcome switching</em>. Y el <strong>seguimiento mediano de 40 meses</strong> es largo para este tipo de ensayo — suficiente para detectar efectos cardiovasculares duraderos, aunque corto para detectar algunos efectos tardíos.</p>

<h2>Lo menos bueno</h2>
<p>Tres puntos requieren atención. <strong>El beneficio absoluto sigue siendo modesto</strong>: 1,5 puntos porcentuales sobre 40 meses, es decir un NNT alrededor de 67. Útil, no revolucionario.</p>
<p><strong>Los efectos secundarios están subrepresentados</strong> en la comunicación del resultado principal. Más de uno de cada seis pacientes abandona el tratamiento por efectos digestivos — un dato crítico para cualquiera que considere el uso prolongado.</p>
<p><strong>La financiación de Novo Nordisk y la implicación directa de cinco empleados del patrocinador</strong> entre los autores no descalifica el resultado, pero exige un examen independiente.</p>

<h2>Lo que cambia</h2>
<p>Para un <strong>lector curioso</strong>: la semaglutida ya no es solo un fármaco para perder peso — ahora tiene una señal de protección cardiovascular en adultos con sobrepeso y antecedentes cardiovasculares.</p>
<p>Para un <strong>paciente concernido</strong>: la pregunta que hacerle a tu médico no es <em>"¿debería tomar semaglutida?"</em> sino <em>"¿los beneficios probables en mi situación superan el coste, los efectos secundarios y la duración necesaria?"</em>.</p>
<p>Para un <strong>profesional de salud no cardiólogo</strong>: las guías europeas y americanas probablemente integrarán este resultado en 12-18 meses, pendiente de análisis independientes y discusiones sobre el coste.</p>

<h2>Para profundizar</h2>
<p>La publicación original está en acceso abierto vía NEJM. También útil: el meta-análisis Cochrane 2024 sobre agonistas GLP-1 en prevención cardiovascular, y el informe de la HAS francesa sobre indicaciones de la semaglutida.</p>
`,
      },
      zh: {
        title: '司美格鲁肽与心血管风险：SELECT试验究竟显示了什么',
        description: '对SELECT试验的批判性分析。该试验涵盖17604名超重无糖尿病患者，显示司美格鲁肽可降低心血管风险。研究发现了什么、没有说什么、以及会改变什么。',
        body: `
<p class="lede"><strong>SELECT试验于2023年11月发表于《新英格兰医学杂志》，追踪了17,604名超重或肥胖但无糖尿病的患者，随机分配至每周一次2.4毫克司美格鲁肽组或安慰剂组。中位40个月的随访中，主要心血管事件的相对风险降低了20%——即治疗组事件发生率为6.5%，安慰剂组为8.0%。统计学上明确，临床上有意义，但需谨慎解读。</strong></p>

<h2>背景</h2>
<p>司美格鲁肽是GLP-1受体激动剂，最初开发用于2型糖尿病（商品名Ozempic），后批准用于肥胖成人的减重（商品名Wegovy）。近年来，心血管获益的信号陆续出现——首先在糖尿病患者中，STEP和SUSTAIN试验显示了事件减少。SELECT是首个针对一个具体问题设计的大型试验：<em>司美格鲁肽是否也能保护无糖尿病的超重患者？</em></p>

<h2>方法</h2>
<p>随机、双盲、安慰剂对照试验。17,604名年龄≥45岁、BMI ≥ 27 kg/m²、有既往心血管疾病（心梗、卒中或外周动脉疾病）的患者。均无糖尿病。中位随访40个月。主要终点为复合终点：心血管死亡、非致命性心梗或非致命性卒中。2018年在ClinicalTrials.gov（NCT03574597）预注册，在入组开始前。</p>
<p>资助方：诺和诺德，司美格鲁肽的生产商。五名作者受雇于赞助商。其他作者声明与赞助商的财务关系——详细披露见补充材料。</p>

<h2>结果</h2>
<p>主要心血管复合事件在司美格鲁肽组发生率为6.5%，安慰剂组为8.0%。相对风险降低：<strong>20%</strong>（HR 0.80；95% CI 0.72–0.90；p < 0.001）。绝对风险差异：<strong>1.5个百分点</strong>，40个月期间——即<strong>大约每治疗67名患者3年可预防1例事件</strong>（NNT ≈ 67）。</p>
<p>胃肠道不良反应（恶心、腹泻、便秘）导致16.6%的司美格鲁肽组患者停药，安慰剂组为8.2%。治疗组的平均体重减轻为9.4%。</p>

<h2>优点</h2>
<p>三个优势。<strong>样本量大</strong>（超过17,000名患者），统计学功效强。<strong>主要终点为复合终点且预注册</strong>，排除了终点切换。<strong>中位40个月的随访</strong>对于此类试验来说较长——足以检测持续的心血管效应，但对某些晚期效应可能仍然较短。</p>

<h2>不足之处</h2>
<p>三点需谨慎。<strong>绝对获益仍然有限</strong>：40个月内1.5个百分点的差异，NNT约67——意味着治疗67名患者3年才能预防1例心血管事件。有用，但不算革命性。</p>
<p><strong>副作用在主要结果报告中代表性不足</strong>。超过六分之一的患者因消化道副作用停药——对任何考虑长期使用的人来说，这是关键数据。</p>
<p><strong>诺和诺德的资助和五名赞助商员工直接参与作者团队</strong>不否定结果，但需要独立审查。</p>

<h2>改变了什么</h2>
<p>对<strong>好奇的读者</strong>：司美格鲁肽不再只是减重药——它现在在有心血管病史的超重成人中具有心血管保护信号。</p>
<p>对<strong>相关患者</strong>（超重，有心血管病史，无糖尿病）：向医生提出的问题不是<em>"我应该服用司美格鲁肽吗？"</em>而是<em>"在我的具体情况下，可能的获益是否超过费用、副作用和所需治疗时间？"</em>。</p>
<p>对<strong>非心血管专科医务人员</strong>：欧美指南可能在12-18个月内整合这一结果，待独立分析和费用讨论。</p>

<h2>延伸阅读</h2>
<p>原始论文通过NEJM开放获取。补充阅读：Cochrane 2024关于GLP-1激动剂在心血管预防中的荟萃分析，以及法国HAS关于司美格鲁肽适应症的报告。</p>
`,
      },
    },
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
