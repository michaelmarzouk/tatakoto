import type { Lang } from '../consts';

export interface ArticleContent {
  title: string;
  description: string;
  body: string; // HTML
}

export interface Article {
  slug: string;
  date: string;
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
    slug: 'gigapath-foundation-model-pathologie',
    date: '2026-05-21',
    updated: '2026-05-21',
    author: {
      name: 'Tatakoto',
      role: '',
    },
    tags: ['ai', 'medical'],
    readTime: 8,
    originalDoi: '10.1038/s41586-024-07441-w',
    originalUrl: 'https://www.nature.com/articles/s41586-024-07441-w',
    originalTitle: 'A whole-slide foundation model for digital pathology from real-world data',
    originalJournal: 'Nature',
    conditions: [
      { name: 'Cancer', sameAs: 'https://www.wikidata.org/wiki/Q12078' },
    ],
    content: {
      fr: {
        title: 'GigaPath en pathologie numérique : ce que change un foundation model entraîné sur 1,3 milliard de tuiles',
        description: 'Décryptage du papier Nature 2024 sur Prov-GigaPath, foundation model transformer pour la pathologie numérique. Architecture, données, performance sur 26 benchmarks de cancer, et ce que cela change vraiment pour le diagnostic.',
        body: `
<p class="lede"><strong>Le papier publié dans Nature en mai 2024 par Microsoft Research et Providence Health présente GigaPath, un modèle de fondation pour la pathologie numérique entraîné sur 1,3 milliard de tuiles d'images extraites de 171 189 lames histopathologiques, issues de 30 060 patients couvrant 28 types de cancer. Évalué sur 26 benchmarks publics, il dépasse les modèles antérieurs sur 18 d'entre eux, avec des gains notables sur la classification de sous-types de cancers rares et la prédiction de mutations à partir d'images. C'est un palier méthodologique réel, à lire avec quelques précautions sur la généralisation et la disponibilité du modèle.</strong></p>

<h2>Le contexte</h2>
<p>La pathologie numérique consiste à numériser les lames de microscope pour les analyser informatiquement. Depuis 2017, l'IA en pathologie reposait sur des réseaux convolutionnels (CNN) entraînés pour des tâches spécifiques — détecter le cancer du sein, classer les sous-types de lymphome, etc. Ces modèles fonctionnaient mais demandaient à chaque fois un dataset annoté propre à la tâche, coûteux à constituer.</p>
<p>L'arrivée des <em>foundation models</em> change cette logique. Ces modèles, pré-entraînés sur d'énormes corpus sans tâche spécifique, apprennent des représentations générales qu'on peut adapter rapidement à n'importe quelle tâche aval avec peu de données annotées. C'est ce qui a transformé le NLP avec BERT puis les LLMs. En pathologie, les premiers <em>vision foundation models</em> à grande échelle sont apparus en 2023-2024 : CTransPath, RudolfV, Prov-GigaPath (le papier décrypté ici) et d'autres.</p>

<h2>La méthode</h2>
<p>L'architecture est en deux étages. <strong>Premier étage</strong>, un <em>vision transformer</em> dérivé de DINOv2 extrait des représentations (embeddings) de chaque tuile carrée de 256×256 pixels d'une lame. Ce transformer a 1,1 milliard de paramètres et est entraîné par apprentissage auto-supervisé (sans étiquettes) sur 1,3 milliard de tuiles. Le sigle <em>transformer</em> désigne une architecture neuronale basée sur le mécanisme d'attention, devenue standard depuis 2017 en NLP et plus récemment en vision.</p>
<p><strong>Deuxième étage</strong>, un transformer de séquence appelé <em>LongNet</em> agrège les milliers de tuiles d'une lame entière en une représentation globale. LongNet est conçu pour traiter des séquences très longues sans exploser en coût mémoire, ce qui était une limite des transformers classiques face aux lames histopathologiques (qui contiennent typiquement 5 000 à 50 000 tuiles).</p>
<p>Les données d'entraînement viennent du système hospitalier Providence Health, aux États-Unis. 171 189 lames numérisées, 30 060 patients, 28 types de cancer, période 2017-2023. <strong>Tous américains, tous d'un seul réseau hospitalier.</strong> L'évaluation se fait ensuite sur 26 benchmarks externes publics, couvrant classification de sous-types, détection de mutations génétiques à partir d'images, prédiction de survie.</p>

<h2>Les résultats</h2>
<p>Sur 18 des 26 tâches testées, GigaPath dépasse l'état de l'art précédent (principalement CTransPath, modèle de référence publié fin 2022). Les gains les plus marqués portent sur trois domaines.</p>
<p><strong>La classification de sous-types de cancers rares</strong>, où les datasets traditionnels manquent d'exemples. Sur certaines tâches de classification de lymphomes ou de sarcomes, GigaPath gagne 3 à 8 points d'AUC (aire sous la courbe ROC, qui mesure la capacité à distinguer un positif d'un négatif — 1 est parfait, 0,5 est le hasard).</p>
<p><strong>La prédiction de mutations génétiques à partir des images seules</strong> — par exemple détecter une mutation PIK3CA dans le cancer du sein juste en regardant les coupes histologiques, sans séquencer l'ADN. C'est un usage non évident des images, et GigaPath y gagne plusieurs points d'AUC sur des mutations comme TP53, KRAS, PIK3CA.</p>
<p><strong>La prédiction de survie</strong> pour certains cancers à partir de l'image histologique. Sur le glioblastome et certains sous-types de cancer du sein, GigaPath améliore la stratification des patients en groupes de risque.</p>

<h2>Ce qui est bien</h2>
<p>Trois forces notables.</p>
<p><strong>L'échelle d'entraînement</strong> est sans précédent. CTransPath en 2022 utilisait 32 000 lames. GigaPath en utilise 171 000. La règle des foundation models — *plus de données, plus de paramètres, mieux ça marche* — semble tenir aussi en pathologie.</p>
<p><strong>L'architecture LongNet</strong> est un vrai apport technique. Elle permet pour la première fois de traiter une lame entière sans la découper artificiellement, et donc de capturer des relations spatiales entre régions distantes — utile par exemple pour les cancers à composante stromale étendue.</p>
<p><strong>Le code et les poids du modèle ont été publiés</strong> sur GitHub et Hugging Face, sous licence non-commerciale mais accessible à la recherche académique. C'est mieux que les modèles entièrement propriétaires de certains concurrents, et permet la réplication et l'extension par d'autres équipes.</p>

<h2>Ce qui est moins bien</h2>
<p>Trois limites sérieuses à garder en tête.</p>
<p><strong>Les données d'entraînement viennent d'un seul système hospitalier.</strong> Providence Health est un grand réseau (51 hôpitaux), mais tous américains, avec des protocoles de fixation et de coloration probablement homogènes. La pathologie est sensible aux variations de pratiques techniques entre laboratoires — un même cancer ne ressemble pas exactement à lui-même selon le scanner utilisé, le temps de fixation, l'opérateur. Aucune validation prospective sur des populations européennes, asiatiques ou africaines n'est rapportée. La performance reste à prouver hors du contexte américain.</p>
<p><strong>La licence non-commerciale verrouille l'usage clinique réel.</strong> Aucun hôpital ne peut déployer GigaPath en production diagnostique sans renégocier avec Microsoft. C'est compréhensible commercialement, mais cela signifie que le modèle reste un outil de recherche, pas un outil clinique. Plusieurs concurrents — RudolfV (Aignostics), Virchow (Paige) — sont eux aussi sous licences restrictives ou entièrement propriétaires. Le champ a un problème de bien commun.</p>
<p><strong>L'évaluation comparative est partielle.</strong> GigaPath est comparé principalement à CTransPath (2022) et à quelques modèles antérieurs. Or 2024 a vu émerger en parallèle plusieurs autres foundation models en pathologie (RudolfV, Virchow, Phikon-v2) qui ne sont pas systématiquement comparés. Sans benchmark indépendant et rigoureux entre ces modèles, l'affirmation « état de l'art » mérite prudence.</p>
<p>Mention complémentaire : tous les auteurs principaux travaillent chez Microsoft Research ou Providence Health, qui détiennent les droits du modèle. Cinq des sept auteurs corresponding sont employés du sponsor. Cela ne disqualifie pas le résultat, mais une étude de réplication indépendante serait bienvenue.</p>

<h2>Ce que ça change</h2>
<p>Pour la <strong>communauté de recherche</strong>, c'est une nouvelle baseline. GigaPath rejoint quelques autres modèles disponibles qu'on peut fine-tuner sur n'importe quelle tâche pathologie avec peu de données annotées. Le coût d'expérimentation baisse, l'innovation s'accélère.</p>
<p>Pour les <strong>cliniciens pathologistes</strong>, rien ne change immédiatement. Aucun déploiement en routine n'est imminent — il faudrait validation prospective multi-centres, certification réglementaire (FDA SaMD, CE), intégration dans les workflows existants des systèmes de gestion de lames numériques. Horizon réaliste : 3 à 7 ans pour un usage clinique généralisé, avec d'abord des indications limitées (sous-typage de tumeurs rares, où l'IA est plus rapide que la consultation d'experts).</p>
<p>Pour les <strong>patients et le grand public</strong>, le changement est à venir mais réel. La pathologie est la discipline médicale la plus susceptible d'être profondément transformée par l'IA dans les dix prochaines années, parce qu'elle repose entièrement sur l'analyse visuelle de patterns — exactement ce que ces modèles font. Ce qui se prépare en silence dans les papiers comme GigaPath finira par changer la rapidité, la cohérence et probablement la précision des diagnostics oncologiques.</p>

<h2>Pour aller plus loin</h2>
<p>Le code et les poids de Prov-GigaPath sont disponibles sur <a href="https://github.com/prov-gigapath/prov-gigapath">GitHub</a> et <a href="https://huggingface.co/prov-gigapath/prov-gigapath">Hugging Face</a> sous licence non-commerciale. Pour le panorama des autres foundation models en pathologie, voir la revue de 2024 de Zhang et al. dans <em>npj Digital Medicine</em>. Pour le débat sur la régulation FDA des modèles de fondation en imagerie, le rapport 2024 de la FDA sur les "AI/ML-Enabled Medical Devices" est en accès libre.</p>
`,
      },
      en: {
        title: 'GigaPath in digital pathology: what changes when a foundation model is trained on 1.3 billion tiles',
        description: 'Critical analysis of the Nature 2024 paper on Prov-GigaPath, a transformer foundation model for digital pathology. Architecture, data, performance on 26 cancer benchmarks, and what it really changes for diagnosis.',
        body: `
<p class="lede"><strong>The Nature paper published in May 2024 by Microsoft Research and Providence Health presents GigaPath, a foundation model for digital pathology trained on 1.3 billion image tiles extracted from 171,189 whole-slide images, covering 30,060 patients and 28 cancer types. Evaluated on 26 public benchmarks, it outperforms previous models on 18 of them, with notable gains on rare cancer subtype classification and image-based mutation prediction. A real methodological milestone, to read with caution on generalization and model availability.</strong></p>

<h2>The context</h2>
<p>Digital pathology consists of digitizing microscope slides for computational analysis. Since 2017, AI in pathology has relied on convolutional networks (CNNs) trained for specific tasks — breast cancer detection, lymphoma subtyping, etc. These models worked but each required a dedicated annotated dataset, costly to assemble.</p>
<p>The arrival of <em>foundation models</em> changes this. These models, pre-trained on huge corpora without a specific task, learn general representations that can be adapted quickly to any downstream task with little labeled data. That is what transformed NLP with BERT and then LLMs. In pathology, the first large-scale <em>vision foundation models</em> appeared in 2023-2024: CTransPath, RudolfV, Prov-GigaPath (the paper decoded here), among others.</p>

<h2>The method</h2>
<p>The architecture has two stages. <strong>First stage</strong>: a <em>vision transformer</em> derived from DINOv2 extracts representations (embeddings) from each 256×256 pixel tile of a slide. This transformer has 1.1 billion parameters and is trained by self-supervised learning (without labels) on 1.3 billion tiles. The term <em>transformer</em> refers to a neural architecture based on the attention mechanism, standard since 2017 in NLP and more recently in vision.</p>
<p><strong>Second stage</strong>: a sequence transformer called <em>LongNet</em> aggregates the thousands of tiles of an entire slide into a global representation. LongNet is designed to process very long sequences without exploding memory cost — a limitation of classical transformers facing pathology slides (which typically contain 5,000 to 50,000 tiles).</p>
<p>Training data come from the Providence Health hospital system in the United States. 171,189 digitized slides, 30,060 patients, 28 cancer types, 2017-2023 period. <strong>All American, all from a single hospital network.</strong> Evaluation is then done on 26 public external benchmarks, covering subtype classification, image-based mutation detection, and survival prediction.</p>

<h2>The results</h2>
<p>On 18 of 26 tasks tested, GigaPath outperforms the previous state of the art (mainly CTransPath, the reference model published in late 2022). The biggest gains concern three areas.</p>
<p><strong>Rare cancer subtype classification</strong>, where traditional datasets lack examples. On certain lymphoma or sarcoma classification tasks, GigaPath gains 3 to 8 points of AUC (area under the ROC curve, which measures the ability to distinguish a positive from a negative — 1 is perfect, 0.5 is chance).</p>
<p><strong>Genetic mutation prediction from images alone</strong> — for example detecting a PIK3CA mutation in breast cancer just by looking at histology, without sequencing DNA. This is a non-obvious use of images, and GigaPath gains several points of AUC on mutations such as TP53, KRAS, PIK3CA.</p>
<p><strong>Survival prediction</strong> for certain cancers from the histology image. On glioblastoma and certain breast cancer subtypes, GigaPath improves patient stratification into risk groups.</p>

<h2>What's good</h2>
<p>Three notable strengths.</p>
<p><strong>The training scale</strong> is unprecedented. CTransPath in 2022 used 32,000 slides. GigaPath uses 171,000. The foundation model rule — *more data, more parameters, better performance* — seems to hold in pathology too.</p>
<p><strong>The LongNet architecture</strong> is a genuine technical contribution. For the first time, it allows processing an entire slide without artificial cropping, capturing spatial relationships between distant regions — useful for example for cancers with extended stromal components.</p>
<p><strong>Code and model weights have been released</strong> on GitHub and Hugging Face, under a non-commercial license accessible to academic research. Better than the fully proprietary models of some competitors, allowing replication and extension by other teams.</p>

<h2>What's less good</h2>
<p>Three serious limitations to keep in mind.</p>
<p><strong>Training data come from a single hospital system.</strong> Providence Health is a large network (51 hospitals), but all American, with probably homogeneous fixation and staining protocols. Pathology is sensitive to technical variation between labs — the same cancer doesn't look exactly the same depending on scanner, fixation time, operator. No prospective validation on European, Asian, or African populations is reported. Performance outside the American context remains to be proven.</p>
<p><strong>The non-commercial license locks real clinical use.</strong> No hospital can deploy GigaPath in production diagnosis without renegotiating with Microsoft. Commercially understandable, but it means the model remains a research tool, not a clinical tool. Several competitors — RudolfV (Aignostics), Virchow (Paige) — are also under restrictive or fully proprietary licenses. The field has a commons problem.</p>
<p><strong>The comparative evaluation is partial.</strong> GigaPath is compared primarily to CTransPath (2022) and a few earlier models. But 2024 saw the parallel emergence of several other pathology foundation models (RudolfV, Virchow, Phikon-v2) not systematically compared. Without independent rigorous benchmarking between these models, the "state of the art" claim warrants caution.</p>
<p>Additional note: all lead authors work for Microsoft Research or Providence Health, which hold the model rights. Five of the seven corresponding authors are employees of the sponsor. This does not disqualify the result, but an independent replication study would be welcome.</p>

<h2>What changes</h2>
<p>For the <strong>research community</strong>, this is a new baseline. GigaPath joins a few other available models that can be fine-tuned on any pathology task with little annotated data. Experimentation cost drops, innovation accelerates.</p>
<p>For <strong>clinical pathologists</strong>, nothing changes immediately. No routine deployment is imminent — it would require multi-center prospective validation, regulatory certification (FDA SaMD, CE), integration into existing digital slide management workflows. Realistic horizon: 3 to 7 years for widespread clinical use, starting with limited indications (rare tumor subtyping, where AI is faster than expert consultation).</p>
<p>For <strong>patients and the general public</strong>, the change is coming but real. Pathology is the medical discipline most likely to be profoundly transformed by AI in the next ten years, because it relies entirely on visual pattern analysis — exactly what these models do. What is being prepared silently in papers like GigaPath will eventually change the speed, consistency, and probably the accuracy of oncology diagnoses.</p>

<h2>Further reading</h2>
<p>Prov-GigaPath code and weights are available on <a href="https://github.com/prov-gigapath/prov-gigapath">GitHub</a> and <a href="https://huggingface.co/prov-gigapath/prov-gigapath">Hugging Face</a> under non-commercial license. For an overview of other pathology foundation models, see the 2024 review by Zhang et al. in <em>npj Digital Medicine</em>. For the debate on FDA regulation of foundation models in imaging, the FDA's 2024 report on "AI/ML-Enabled Medical Devices" is openly available.</p>
`,
      },
      es: {
        title: 'GigaPath en patología digital: lo que cambia un foundation model entrenado en 1.300 millones de teselas',
        description: 'Análisis crítico del artículo de Nature 2024 sobre Prov-GigaPath, foundation model transformer para patología digital. Arquitectura, datos, rendimiento en 26 benchmarks de cáncer, y lo que realmente cambia para el diagnóstico.',
        body: `
<p class="lede"><strong>El artículo publicado en Nature en mayo de 2024 por Microsoft Research y Providence Health presenta GigaPath, un foundation model para patología digital entrenado en 1.300 millones de teselas de imagen extraídas de 171.189 láminas histopatológicas, que cubren 30.060 pacientes y 28 tipos de cáncer. Evaluado en 26 benchmarks públicos, supera a los modelos anteriores en 18 de ellos, con avances notables en clasificación de subtipos de cánceres raros y predicción de mutaciones a partir de imágenes. Un avance metodológico real, a leer con precaución sobre la generalización y la disponibilidad del modelo.</strong></p>

<h2>El contexto</h2>
<p>La patología digital consiste en digitalizar las láminas de microscopio para analizarlas computacionalmente. Desde 2017, la IA en patología se basaba en redes convolucionales (CNN) entrenadas para tareas específicas — detección de cáncer de mama, clasificación de linfomas, etc. Estos modelos funcionaban pero cada uno requería un dataset anotado dedicado, costoso de construir.</p>
<p>La llegada de los <em>foundation models</em> cambia esta lógica. Preentrenados sobre enormes corpus sin tarea específica, aprenden representaciones generales que se adaptan rápidamente a cualquier tarea posterior con pocos datos etiquetados. Esto transformó el NLP con BERT y los LLMs. En patología, los primeros <em>vision foundation models</em> a gran escala aparecieron en 2023-2024.</p>

<h2>El método</h2>
<p>La arquitectura tiene dos etapas. <strong>Primera etapa</strong>: un <em>vision transformer</em> derivado de DINOv2 extrae representaciones de cada tesela de 256×256 píxeles de una lámina. Este transformer tiene 1.100 millones de parámetros y se entrena por aprendizaje autosupervisado en 1.300 millones de teselas.</p>
<p><strong>Segunda etapa</strong>: un transformer de secuencia llamado <em>LongNet</em> agrega las miles de teselas de una lámina completa en una representación global. LongNet está diseñado para procesar secuencias muy largas sin explotar en coste de memoria.</p>
<p>Los datos provienen del sistema hospitalario Providence Health, en Estados Unidos. 171.189 láminas, 30.060 pacientes, 28 tipos de cáncer. <strong>Todos americanos, todos de una sola red hospitalaria.</strong> Evaluación en 26 benchmarks externos públicos.</p>

<h2>Los resultados</h2>
<p>En 18 de 26 tareas, GigaPath supera el estado del arte previo (principalmente CTransPath, modelo de referencia publicado a finales de 2022). Los avances más marcados se observan en tres áreas: clasificación de subtipos de cánceres raros, predicción de mutaciones genéticas a partir de imágenes (PIK3CA, TP53, KRAS), y predicción de supervivencia.</p>
<p>Por ejemplo, detectar una mutación PIK3CA en cáncer de mama solo observando la histología, sin secuenciar el ADN. GigaPath gana varios puntos de AUC (área bajo la curva ROC — 1 es perfecto, 0,5 es azar) sobre estas mutaciones.</p>

<h2>Lo bueno</h2>
<p>Tres puntos fuertes. La <strong>escala de entrenamiento</strong> es sin precedentes: 171.000 láminas frente a 32.000 de CTransPath en 2022. La <strong>arquitectura LongNet</strong> permite por primera vez procesar una lámina entera capturando relaciones espaciales entre regiones distantes. <strong>El código y los pesos están publicados</strong> en GitHub y Hugging Face bajo licencia no comercial — accesible para investigación académica.</p>

<h2>Lo menos bueno</h2>
<p>Tres limitaciones serias. <strong>Los datos provienen de un solo sistema hospitalario</strong> americano — la patología es sensible a variaciones técnicas entre laboratorios y no hay validación prospectiva en poblaciones europeas, asiáticas o africanas. <strong>La licencia no comercial bloquea el uso clínico real</strong> — ningún hospital puede desplegar GigaPath en diagnóstico de producción sin renegociar con Microsoft. <strong>La evaluación comparativa es parcial</strong> — GigaPath se compara principalmente con CTransPath de 2022, no sistemáticamente con otros foundation models de 2024 (RudolfV, Virchow, Phikon-v2).</p>
<p>Nota adicional: todos los autores principales trabajan para Microsoft Research o Providence Health. Un estudio de replicación independiente sería bienvenido.</p>

<h2>Lo que cambia</h2>
<p>Para la <strong>comunidad de investigación</strong>, es una nueva línea de base. Para los <strong>patólogos clínicos</strong>, nada cambia inmediatamente — se requiere validación prospectiva multicéntrica, certificación regulatoria, integración en flujos de trabajo. Horizonte realista: 3 a 7 años. Para los <strong>pacientes y el público</strong>, el cambio viene pero es real. La patología es la disciplina médica con mayor probabilidad de ser profundamente transformada por la IA en los próximos diez años.</p>

<h2>Para profundizar</h2>
<p>Código y pesos de Prov-GigaPath disponibles en <a href="https://github.com/prov-gigapath/prov-gigapath">GitHub</a> y <a href="https://huggingface.co/prov-gigapath/prov-gigapath">Hugging Face</a> bajo licencia no comercial. Para el panorama de otros foundation models en patología, ver la revisión de 2024 de Zhang et al. en <em>npj Digital Medicine</em>.</p>
`,
      },
      zh: {
        title: 'GigaPath在数字病理学中：一个在13亿图像块上训练的基础模型带来什么改变',
        description: '对2024年Nature论文Prov-GigaPath的深度解读：用于数字病理的Transformer基础模型。架构、数据、在26个癌症基准测试中的表现，以及对诊断的实际影响。',
        body: `
<p class="lede"><strong>2024年5月发表于Nature的论文由Microsoft Research和Providence Health联合发布，介绍了GigaPath——一个用于数字病理学的基础模型。该模型在13亿个图像块上进行训练，这些图像块来自171,189张全切片病理图像，覆盖30,060名患者和28种癌症类型。在26个公共基准测试中，它在18个上超越了先前的最佳模型，在罕见癌症亚型分类和基于图像的基因突变预测方面表现尤为突出。这是一个真正的方法学里程碑，但在推广性和模型可用性方面需要谨慎解读。</strong></p>

<h2>背景</h2>
<p>数字病理学是将显微镜切片数字化以进行计算分析的领域。自2017年起，病理学中的AI主要依赖卷积神经网络（CNN），针对特定任务进行训练——如乳腺癌检测、淋巴瘤亚型分类等。这些模型有效，但每项任务都需要专门的标注数据集，构建成本高昂。</p>
<p><em>基础模型</em>（foundation model）的出现改变了这一逻辑。这类模型在庞大语料上进行无特定任务的预训练，学习通用表征，可以用很少的标注数据快速适配任何下游任务。BERT和LLMs改变了NLP领域。在病理学中，首批大规模的<em>视觉基础模型</em>于2023-2024年出现：CTransPath、RudolfV、Prov-GigaPath（本文解读对象）等。</p>

<h2>方法</h2>
<p>架构分为两个阶段。<strong>第一阶段</strong>：一个源自DINOv2的<em>视觉Transformer</em>从切片中每个256×256像素的图像块提取表征（embedding）。该Transformer有11亿参数，通过自监督学习（无标注）在13亿图像块上训练。<em>Transformer</em>是基于注意力机制的神经架构，自2017年起成为NLP的标准，近年也广泛用于视觉。</p>
<p><strong>第二阶段</strong>：一个名为<em>LongNet</em>的序列Transformer将整张切片中数千个图像块聚合为全局表征。LongNet专为处理极长序列设计，不会因内存成本而崩溃——这是传统Transformer在面对病理切片（通常包含5,000至50,000个图像块）时的主要限制。</p>
<p>训练数据来自美国Providence Health医院系统。171,189张数字化切片，30,060名患者，28种癌症类型，时间跨度2017-2023年。<strong>全部为美国人，全部来自单一医院网络。</strong>评估在26个公共外部基准上进行。</p>

<h2>结果</h2>
<p>在26项测试任务中的18项，GigaPath超越了先前的最佳水平（主要是2022年末发布的参考模型CTransPath）。最显著的进步集中在三个领域。</p>
<p><strong>罕见癌症亚型分类</strong>，传统数据集在这方面缺乏样本。在某些淋巴瘤或肉瘤分类任务上，GigaPath的AUC（ROC曲线下面积，衡量区分阳性和阴性的能力——1为完美，0.5为随机）提高了3至8个百分点。</p>
<p><strong>仅从图像预测基因突变</strong>——例如仅通过观察组织学切片就能检测乳腺癌中的PIK3CA突变，而无需DNA测序。GigaPath在TP53、KRAS、PIK3CA等突变上获得多个AUC百分点的提升。</p>
<p><strong>生存预测</strong>，针对某些癌症。在胶质母细胞瘤和某些乳腺癌亚型上，GigaPath改善了风险组分层。</p>

<h2>优点</h2>
<p>三个显著优势。<strong>训练规模</strong>前所未有：2022年CTransPath使用32,000张切片，GigaPath使用171,000张。基础模型的"数据越多、参数越多、效果越好"的规律在病理学中似乎也成立。</p>
<p><strong>LongNet架构</strong>是真正的技术贡献。首次允许处理整张切片而无需人为分割，能够捕捉远距离区域之间的空间关系——对具有广泛间质成分的癌症尤为有用。</p>
<p><strong>代码和模型权重已发布</strong>在GitHub和Hugging Face上，采用非商业许可证但对学术研究开放。这比某些竞争对手的完全私有模型要好，允许其他团队复现和扩展。</p>

<h2>不足</h2>
<p>三个需要关注的严重限制。</p>
<p><strong>训练数据来自单一医院系统。</strong>Providence Health是一个大型网络（51家医院），但全部位于美国，固定和染色协议可能较为统一。病理学对实验室间的技术变化敏感——同一种癌症在不同扫描仪、不同固定时间、不同操作员下可能看起来不同。论文未报告在欧洲、亚洲或非洲人群中的前瞻性验证。在美国以外的环境中的表现仍有待证明。</p>
<p><strong>非商业许可证锁住了真正的临床使用。</strong>任何医院都不能在不与Microsoft重新谈判的情况下将GigaPath部署到生产诊断中。从商业上可以理解，但这意味着该模型仍然是研究工具，而非临床工具。</p>
<p><strong>对比评估并不全面。</strong>GigaPath主要与CTransPath（2022）及少数早期模型进行比较。但2024年也出现了其他几个病理基础模型（RudolfV、Virchow、Phikon-v2），并未系统比较。在缺乏独立严格基准测试的情况下，"最先进"的说法需要谨慎。</p>
<p>补充说明：所有主要作者都在Microsoft Research或Providence Health工作，这两个机构拥有模型权利。这不会使结果失去价值，但独立的复现研究将是受欢迎的。</p>

<h2>带来的改变</h2>
<p>对<strong>研究界</strong>来说，这是一个新基线。GigaPath加入了少数几个可用模型的行列，研究人员可以用很少的标注数据在任何病理任务上进行微调。实验成本下降，创新加速。</p>
<p>对<strong>临床病理学家</strong>来说，目前没有变化。常规部署尚未临近——需要多中心前瞻性验证、监管认证（FDA SaMD、CE）、整合到现有数字切片管理工作流。现实时间表：3至7年实现广泛临床应用，首先从有限适应症开始（罕见肿瘤亚型分型，AI比专家会诊更快）。</p>
<p>对<strong>患者和公众</strong>来说，变化即将到来且真实。病理学是未来十年最有可能被AI深刻变革的医学学科，因为它完全依赖视觉模式分析——这正是这些模型擅长的。GigaPath这样的论文在悄然准备的，最终将改变肿瘤诊断的速度、一致性，并可能提高准确性。</p>

<h2>延伸阅读</h2>
<p>Prov-GigaPath的代码和权重在<a href="https://github.com/prov-gigapath/prov-gigapath">GitHub</a>和<a href="https://huggingface.co/prov-gigapath/prov-gigapath">Hugging Face</a>上以非商业许可证提供。关于病理学中其他基础模型的概述，参见Zhang等2024年在<em>npj Digital Medicine</em>上的综述。</p>
`,
      },
    },
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
