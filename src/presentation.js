export const languages = ['en', 'fr', 'ar'];

export const acronymExpansions = {
  'WTO / OMC': { en: 'World Trade Organization', fr: 'Organisation mondiale du commerce', ar: 'منظمة التجارة العالمية' },
  'WCO / OMD': { en: 'World Customs Organization', fr: 'Organisation mondiale des douanes', ar: 'منظمة الجمارك العالمية' },
  'UNCITRAL / CNUDCI': { en: 'United Nations Commission on International Trade Law', fr: 'Commission des Nations unies pour le droit commercial international', ar: 'لجنة الأمم المتحدة للقانون التجاري الدولي' },
  'UNCTAD / CNUCED': { en: 'United Nations Trade and Development', fr: 'Conférence des Nations unies sur le commerce et le développement', ar: 'الأمم المتحدة للتجارة والتنمية' },
  IMF: { en: 'International Monetary Fund', fr: 'Fonds monétaire international', ar: 'صندوق النقد الدولي' },
  'BANKS · UCP 600': { en: 'Uniform Customs and Practice for Documentary Credits', fr: 'Règles et usances uniformes relatives aux crédits documentaires', ar: 'القواعد والأعراف الموحدة للاعتمادات المستندية' },
  SWIFT: { en: 'Society for Worldwide Interbank Financial Telecommunication', fr: 'Society for Worldwide Interbank Financial Telecommunication', ar: 'جمعية الاتصالات المالية العالمية بين البنوك' },
  ISO: { en: 'International Organization for Standardization', fr: 'Organisation internationale de normalisation', ar: 'المنظمة الدولية للتوحيد القياسي' },
  TIC: { en: 'Testing, inspection and certification services', fr: 'Services d’essais, d’inspection et de certification', ar: 'خدمات الاختبار والتفتيش والشهادات' },
  CODEX: { en: 'Codex Alimentarius · “Food Code”', fr: 'Codex Alimentarius · « Code alimentaire »', ar: 'الدستور الغذائي · «مدونة الأغذية»' },
  IMO: { en: 'International Maritime Organization', fr: 'Organisation maritime internationale', ar: 'المنظمة البحرية الدولية' },
  IATA: { en: 'International Air Transport Association', fr: 'Association du transport aérien international', ar: 'الاتحاد الدولي للنقل الجوي' }
};

export const helpDetails = {
  en: {
    overview: {
      '01': 'Governments set shared trade obligations; customs administrations apply them to individual shipments.',
      '02': 'Incoterms allocate delivery tasks, costs and risk. Ownership, payment timing and product quality must be handled elsewhere in the contract.',
      '03': 'Country-level monetary stability and a company’s invoice payment are separate problems handled by different institutions.',
      '04': 'A standard, inspection report and legal market approval prove different things. Check which requirement applies to the product and destination.'
    },
    glossary: {
      'WTO / OMC': 'The WTO works between governments. It sets treaty obligations; national customs offices apply them to individual imports.',
      'WCO / OMD': 'The WCO maintains the shared HS classification, while each country publishes its own tariff schedule and rates.',
      'ICC / CCI': 'Companies can incorporate ICC rules into a contract. The ICC is a business organization, not a government regulator.',
      'L/C · Crédoc': 'Payment depends on documents matching the credit’s terms. The bank checks paperwork, not the cargo itself.',
      'CISG / CVIM': 'The convention supplies default sales-contract rules when it applies; parties can generally exclude it in their contract.',
      'HS / SH': 'The shared HS level is six digits. National tariff codes may add digits and duties can vary by destination.'
    },
    timeline: {
      '1919': 'The ICC is a private business organization, not an intergovernmental body. Its work later produced practical tools such as Incoterms.',
      '1944': 'Bretton Woods addressed monetary and reconstruction problems after the war. It did not establish the ICC, which already existed.',
      '1947': 'GATT was a trade agreement negotiated by governments; ISO develops voluntary international standards. They solve different problems.',
      '1952': 'The Council was the WCO’s predecessor. The Harmonized System arrived later, entering into force in 1988.',
      '1995': 'The WTO is an intergovernmental organization. Its agreements cover goods, services and intellectual property, not customs operations alone.'
    },
    stories: {
      'silk-roads': '“Silk Road” is shorthand for many connected routes, not one road or one authority. The pictured Tang-era camel is a museum object, not a contemporary photograph of a caravan.',
      'world-war-one': 'The ICC was founded in 1919 by business leaders seeking to rebuild trade. It was not created by a peace treaty or by governments.',
      'world-war-two': 'The post-1945 system added new institutions: Bretton Woods shaped the IMF and World Bank, while GATT addressed trade rules. The ICC remained a separate business organization.'
    },
    organizations: {
      'WTO / OMC': 'WTO members negotiate and apply trade agreements. National customs authorities still classify individual imports and collect duties.',
      'WCO / OMD': 'The WCO maintains shared customs tools such as the Harmonized System. Countries add national tariff lines and set their own applicable rates.',
      'UNCITRAL / CNUDCI': 'UNCITRAL drafts common legal texts; it is not a court. A convention or model law matters when adopted or applicable to the parties.',
      'UNCTAD / CNUCED': 'UNCTAD combines policy research with technical assistance. It supports developing economies but does not negotiate trade agreements for them.'
    },
    hs: 'The international HS code is harmonized to six digits. National digits and duty rates vary; the code alone does not establish the final tax owed.',
    hsCode: {
      '09': 'The first two digits identify the chapter. Classification follows the product’s characteristics and the official HS rules.',
      '0901': 'Four digits identify the heading before the exact international subheading is determined.',
      '0901-21': 'All six digits identify the internationally harmonized subheading for roasted, non-decaffeinated coffee.',
      '+ 2–4': 'Extra digits are national subdivisions. Confirm the importing country’s tariff line and current rate.'
    },
    incoterms: {
      EXW: 'EXW leaves the seller with minimal delivery duties and does not require loading. If the buyer cannot clear export, FCA may be more practical.',
      FCA: 'FCA works for any transport mode. The named handover place matters because it determines where delivery and risk transfer occur.',
      FOB: 'FOB is for sea or inland-waterway transport. For container cargo handed to a carrier before loading, FCA is often the better fit.',
      CIF: 'CIF separates cost from risk: the seller pays carriage and insurance to destination, while transit risk transfers at shipment.',
      DAP: 'Under DAP the seller brings the goods ready for unloading; the buyer handles import clearance and import duties.',
      DDP: 'DDP places import clearance and duties on the seller. Confirm the seller can legally act as importer in the destination country.'
    },
    finance: {
      IMF: 'The IMF works with member countries on monetary stability and balance-of-payments needs; it does not pay a company’s import invoice.',
      'WORLD BANK': 'The World Bank Group finances development. It is distinct from the commercial bank that issues a buyer’s letter of credit.',
      'BANKS · UCP 600': 'A document discrepancy can delay payment even when the cargo is perfect. Specify documents the seller can obtain and the carrier can issue.',
      SWIFT: 'SWIFT transports standardized financial messages. The payment undertaking comes from the bank and instrument, not from the network.'
    },
    creditSteps: {
      '0': 'The buyer should align the credit amount, expiry, shipment deadline and required documents with the sales contract before issuance.',
      '1': 'An advising bank authenticates and passes on the credit; it does not automatically add its own promise to pay.',
      '2': 'The seller should check the credit before shipping. A small document discrepancy can delay or prevent honour.',
      '3': 'Banks examine documents against the credit, not the physical cargo. Inspection certificates are required only when the credit asks for them.'
    },
    phases: {
      specify: 'Start with the importing country’s rules and the buyer’s contract. A requirement that applies to one market may not apply to another.',
      verify: 'Inspection is evidence about specified checks at a point in time. It is not a blanket guarantee of future performance or safety.',
      transport: 'The transport mode changes the applicable safety framework and document. Sea and air rules are not interchangeable.'
    },
    standards: {
      ISO: 'ISO writes standards; independent certification bodies assess a company’s management system. ISO itself does not certify suppliers.',
      TIC: 'The inspection order defines the lot, tests and acceptance criteria. A report covers that sample and time; it cannot guarantee later handling or every unit.',
      CODEX: 'Import authorities use Codex as a scientific reference for areas such as residues and hygiene, then set enforceable national limits and checks.',
      IMO: 'IMO member states adopt and implement conventions. SOLAS focuses on ship safety, MARPOL on pollution; a carrier issues the bill of lading.',
      IATA: 'For air cargo, confirm current dangerous-goods rules, packing instructions and carrier acceptance. An air waybill records carriage, not ownership.'
    },
    case: {
      '0': 'CISG applies only when its conditions are met and the parties have not excluded it. Name the exact port and Incoterms edition in the contract.',
      '1': 'HS classification depends on the machine’s technical features. Confirm national tariff treatment and origin with current customs guidance.',
      '2': 'A letter of credit is optional and must be agreed in the contract. Banks promise only what the credit says, subject to compliant documents.',
      '3': 'ISO 9001 concerns a quality-management system, not certification of a particular machine. Check whether the destination requires product approval.',
      '4': 'Container dimensions, ship-safety rules and the bill of lading come from different standards and actors; the carrier issues the transport document.',
      '5': 'The importer remains responsible for accurate declarations and applicable duties. Bank document compliance is separate from customs release.'
    }
  },
  fr: {
    overview: {
      '01': 'Les gouvernements fixent des obligations communes ; les douanes les appliquent à chaque déclaration.',
      '02': 'Les Incoterms répartissent tâches, frais et risques. Propriété, paiement et qualité doivent être traités séparément au contrat.',
      '03': 'La stabilité monétaire d’un pays et le paiement d’une facture commerciale sont deux problèmes distincts.',
      '04': 'Norme, rapport d’inspection et autorisation de mise sur le marché prouvent des choses différentes. Vérifier l’exigence à destination.'
    },
    glossary: {
      'WTO / OMC': 'L’OMC agit entre gouvernements. Elle fixe des obligations conventionnelles ; les douanes nationales les appliquent aux importations.',
      'WCO / OMD': 'L’OMD entretient la nomenclature SH commune ; chaque pays publie son tarif et ses taux.',
      'ICC / CCI': 'Les entreprises peuvent intégrer les règles de la CCI à leur contrat. La CCI est une organisation d’entreprises, pas un régulateur public.',
      'L/C · Crédoc': 'Le paiement dépend de la conformité des documents aux conditions du crédit. La banque vérifie les pièces, pas la cargaison.',
      'CISG / CVIM': 'La convention fournit des règles par défaut lorsqu’elle s’applique ; les parties peuvent généralement l’exclure au contrat.',
      'HS / SH': 'Le niveau SH commun comporte six chiffres. Le tarif national peut en ajouter et les droits varient selon la destination.'
    },
    timeline: {
      '1919': 'La CCI est une organisation privée d’entreprises, pas une institution intergouvernementale. Elle publiera ensuite des outils comme les Incoterms.',
      '1944': 'Bretton Woods répond aux problèmes monétaires et de reconstruction d’après-guerre. La CCI existe déjà depuis 1919.',
      '1947': 'Le GATT est un accord commercial négocié par les gouvernements ; l’ISO élabore des normes internationales volontaires. Leurs rôles diffèrent.',
      '1952': 'Le Conseil est le prédécesseur de l’OMD. Le Système harmonisé arrive plus tard et entre en vigueur en 1988.',
      '1995': 'L’OMC est une organisation intergouvernementale. Ses accords couvrent biens, services et propriété intellectuelle, pas seulement les opérations douanières.'
    },
    stories: {
      'silk-roads': '« Route de la soie » désigne plusieurs itinéraires reliés, pas une route ni une autorité unique. Le chameau Tang illustré est un objet de musée, pas une photo de caravane d’époque.',
      'world-war-one': 'La CCI est fondée en 1919 par des dirigeants d’entreprise qui veulent relancer les échanges. Elle ne découle ni d’un traité de paix ni d’un gouvernement.',
      'world-war-two': 'Après 1945, Bretton Woods structure FMI et Banque mondiale, tandis que le GATT traite des règles commerciales. La CCI reste une organisation distincte d’entreprises.'
    },
    organizations: {
      'WTO / OMC': 'Les membres de l’OMC négocient et appliquent les accords commerciaux. Les douanes nationales classent les importations et perçoivent les droits.',
      'WCO / OMD': 'L’OMD entretient des outils douaniers communs comme le Système harmonisé. Les pays ajoutent leurs subdivisions et fixent les taux applicables.',
      'UNCITRAL / CNUDCI': 'La CNUDCI élabore des textes juridiques communs ; ce n’est pas un tribunal. Une convention ou loi type doit être applicable ou adoptée.',
      'UNCTAD / CNUCED': 'La CNUCED associe recherche sur les politiques et assistance technique. Elle appuie les économies en développement sans négocier les accords à leur place.'
    },
    hs: 'Le code SH international est harmonisé sur six chiffres. Les subdivisions nationales et les taux varient ; le code seul ne détermine pas l’impôt final.',
    hsCode: {
      '09': 'Les deux premiers chiffres désignent le chapitre. Le classement dépend des caractéristiques du produit et des règles officielles.',
      '0901': 'Quatre chiffres identifient la position, avant de préciser la sous-position internationale.',
      '0901-21': 'Ces six chiffres désignent la sous-position harmonisée du café torréfié non décaféiné.',
      '+ 2–4': 'Les chiffres supplémentaires sont nationaux. Vérifier la ligne tarifaire et le taux en vigueur dans le pays importateur.'
    },
    incoterms: {
      EXW: 'EXW impose peu d’obligations de livraison au vendeur et ne l’oblige pas à charger. Si l’acheteur ne peut dédouaner à l’export, FCA peut mieux convenir.',
      FCA: 'FCA convient à tous les modes. Le lieu de remise convenu détermine où livraison et transfert du risque ont lieu.',
      FOB: 'FOB est réservé au maritime et au fluvial. Pour un conteneur remis au transporteur avant chargement, FCA convient souvent mieux.',
      CIF: 'CIF sépare frais et risque : le vendeur paie transport et assurance jusqu’à destination, mais le risque passe au départ.',
      DAP: 'En DAP, le vendeur livre les biens prêts à décharger ; l’acheteur gère le dédouanement import et les droits correspondants.',
      DDP: 'DDP met dédouanement et droits d’importation à la charge du vendeur. Vérifier qu’il peut légalement importer dans le pays de destination.'
    },
    finance: {
      IMF: 'Le FMI accompagne les pays sur la stabilité monétaire et la balance des paiements ; il ne règle pas la facture d’importation d’une entreprise.',
      'WORLD BANK': 'Le Groupe de la Banque mondiale finance le développement. Il est distinct de la banque commerciale qui émet le crédit documentaire.',
      'BANKS · UCP 600': 'Un écart documentaire peut retarder le paiement, même si la cargaison est conforme. Prévoir des pièces que le vendeur peut obtenir et le transporteur émettre.',
      SWIFT: 'SWIFT transporte des messages financiers standardisés. L’engagement de paiement vient de la banque et de l’instrument, pas du réseau.'
    },
    creditSteps: {
      '0': 'Avant émission, aligner montant, échéance, date d’expédition et documents requis sur le contrat de vente.',
      '1': 'La banque notificatrice authentifie et transmet le crédit ; elle n’ajoute pas automatiquement sa propre promesse de paiement.',
      '2': 'Le vendeur devrait vérifier le crédit avant expédition. Une divergence documentaire peut retarder ou empêcher le paiement.',
      '3': 'Les banques examinent les documents, pas la cargaison. Un certificat d’inspection n’est exigé que si le crédit le demande.'
    },
    phases: {
      specify: 'Commencer par la réglementation du pays d’importation et le contrat. Une exigence d’un marché ne s’applique pas nécessairement aux autres.',
      verify: 'Une inspection apporte une preuve sur des contrôles précis à un moment donné ; elle ne garantit pas toutes les performances futures.',
      transport: 'Le mode de transport détermine le cadre de sécurité et les documents applicables. Les règles aériennes et maritimes diffèrent.'
    },
    standards: {
      ISO: 'L’ISO publie des normes ; des organismes indépendants certifient les systèmes de management. L’ISO ne certifie pas les fournisseurs.',
      TIC: 'Le mandat d’inspection précise lot, essais et critères d’acceptation. Le rapport décrit un échantillon à un instant donné, pas chaque unité ni sa manutention ultérieure.',
      CODEX: 'Les autorités utilisent le Codex comme référence scientifique, notamment pour résidus et hygiène, puis fixent les limites et contrôles nationaux applicables.',
      IMO: 'Les États membres adoptent et appliquent les conventions de l’OMI. SOLAS porte sur la sécurité des navires, MARPOL sur la pollution ; le transporteur émet le connaissement.',
      IATA: 'Pour l’aérien, vérifier les règles sur marchandises dangereuses, l’emballage et l’acceptation du transporteur. La LTA constate le transport, pas la propriété.'
    },
    case: {
      '0': 'La CVIM s’applique selon ses conditions, sauf exclusion par les parties. Préciser le port exact et l’édition des Incoterms au contrat.',
      '1': 'Le classement SH dépend des caractéristiques techniques de la machine. Vérifier le tarif national et l’origine auprès des douanes.',
      '2': 'Le crédit documentaire est facultatif et doit être convenu. La banque s’engage selon le texte du crédit et les documents conformes.',
      '3': 'ISO 9001 concerne un système de management, pas la certification d’une machine précise. Vérifier l’agrément produit exigé à destination.',
      '4': 'Dimensions du conteneur, sécurité du navire et connaissement relèvent de normes et acteurs différents ; le transporteur émet le document.',
      '5': 'L’importateur reste responsable de ses déclarations et droits de douane. La conformité documentaire bancaire est distincte du dédouanement.'
    }
  },
  ar: {
    overview: {
      '01': 'تضع الحكومات التزامات تجارية مشتركة، وتطبقها إدارات الجمارك على كل بيان استيراد.',
      '02': 'توزع Incoterms مهام التسليم والتكاليف والمخاطر، ولا تحدد الملكية أو الدفع أو جودة المنتج.',
      '03': 'يختلف استقرار اقتصاد الدولة عن دفع شركة لفاتورة تجارية؛ ولكل منهما مؤسساته.',
      '04': 'يثبت المعيار وتقرير الفحص والموافقة الحكومية أموراً مختلفة. تحققوا مما يطلبه سوق الوجهة.'
    },
    glossary: {
      'WTO / OMC': 'تعمل منظمة التجارة بين الحكومات وتضع التزامات الاتفاقيات؛ وتطبق الجمارك الوطنية هذه الالتزامات على الواردات.',
      'WCO / OMD': 'تدير منظمة الجمارك النظام المنسق المشترك، بينما تنشر كل دولة تعريفتها ومعدلاتها.',
      'ICC / CCI': 'يمكن للشركات إدراج قواعد غرفة التجارة في عقودها. والغرفة منظمة أعمال وليست جهة تنظيم حكومية.',
      'L/C · Crédoc': 'يعتمد الدفع على مطابقة المستندات لشروط الاعتماد. يفحص البنك الأوراق لا البضاعة نفسها.',
      'CISG / CVIM': 'توفر الاتفاقية قواعد افتراضية عندما تنطبق؛ ويمكن للأطراف عموماً استبعادها من العقد.',
      'HS / SH': 'يتكون المستوى الدولي من ستة أرقام. وقد تضيف التعريفة الوطنية أرقاماً، وتختلف الرسوم حسب الوجهة.'
    },
    timeline: {
      '1919': 'غرفة التجارة الدولية منظمة خاصة بالأعمال وليست هيئة حكومية دولية. وأصدرت لاحقاً أدوات عملية مثل Incoterms.',
      '1944': 'عالج بريتون وودز مشكلات النقد وإعادة الإعمار بعد الحرب. وكانت غرفة التجارة الدولية قد تأسست بالفعل عام 1919.',
      '1947': 'الجات اتفاق تجاري تفاوضت عليه الحكومات، بينما تطور ISO معايير دولية طوعية؛ ولكل منهما دور مختلف.',
      '1952': 'كان المجلس هو السلف لمنظمة الجمارك العالمية. وظهر النظام المنسق لاحقاً ودخل حيز التنفيذ عام 1988.',
      '1995': 'منظمة التجارة العالمية منظمة حكومية دولية؛ وتشمل اتفاقياتها السلع والخدمات والملكية الفكرية، لا العمليات الجمركية وحدها.'
    },
    stories: {
      'silk-roads': '«طريق الحرير» اسم مختصر لشبكة طرق مترابطة، لا لطريق واحد أو سلطة موحدة. والجمل من عهد تانغ تمثال متحفي، لا صورة لقافلة من تلك الحقبة.',
      'world-war-one': 'تأسست غرفة التجارة عام 1919 على يد قادة أعمال سعوا لاستعادة التجارة. لم تنشأ بموجب معاهدة سلام أو بقرار حكومي.',
      'world-war-two': 'وسّع ما بعد 1945 التعاون: وضع بريتون وودز إطار صندوق النقد والبنك الدولي، وعالجت الجات قواعد التجارة. وظلت غرفة التجارة منظمة أعمال مستقلة.'
    },
    organizations: {
      'WTO / OMC': 'يتفاوض أعضاء منظمة التجارة على الاتفاقيات ويطبقونها؛ أما الجمارك الوطنية فتصنف الواردات وتحصل الرسوم.',
      'WCO / OMD': 'تدير منظمة الجمارك أدوات مشتركة مثل النظام المنسق. وتضيف الدول بنودها التعريفية الوطنية وتحدد الرسوم السارية.',
      'UNCITRAL / CNUDCI': 'تعد الأونسيترال نصوصاً قانونية مشتركة، وليست محكمة. ولا تنطبق الاتفاقية أو القاعدة النموذجية إلا عند اعتمادها أو انطباق شروطها.',
      'UNCTAD / CNUCED': 'تجمع الأونكتاد بين أبحاث السياسات والمساعدة التقنية لدعم الاقتصادات النامية؛ ولا تفاوض الاتفاقيات التجارية نيابة عنها.'
    },
    hs: 'يوحّد النظام المنسق دولياً عند ستة أرقام. تختلف الأرقام الوطنية والرسوم؛ لذلك لا يحدد الرمز وحده الضريبة النهائية.',
    hsCode: {
      '09': 'يشير أول رقمين إلى الفصل. ويعتمد التصنيف على خصائص المنتج والقواعد الرسمية.',
      '0901': 'تحدد أربعة أرقام البند، قبل الوصول إلى البند الفرعي الدولي الدقيق.',
      '0901-21': 'تحدد الأرقام الستة البند الفرعي الدولي للقهوة المحمصة غير منزوعة الكافيين.',
      '+ 2–4': 'الأرقام الإضافية وطنية. تحققوا من بند التعريفة ومعدلها الحالي في بلد الاستيراد.'
    },
    incoterms: {
      EXW: 'يحمّل EXW البائع أقل واجبات التسليم ولا يلزمه بالتحميل. وقد يكون FCA أنسب إذا تعذر على المشتري التخليص للتصدير.',
      FCA: 'يناسب FCA جميع وسائل النقل. ويحدد مكان التسليم المتفق عليه النقطة التي تنتقل عندها مسؤولية التسليم والمخاطر.',
      FOB: 'يقتصر FOB على النقل البحري والنهري. وغالباً ما يكون FCA أنسب للحاويات التي تسلم للناقل قبل تحميلها على السفينة.',
      CIF: 'يفصل CIF بين التكلفة والمخاطر: يدفع البائع النقل والتأمين حتى الوصول، لكن مخاطر الرحلة تنتقل عند الشحن.',
      DAP: 'في DAP يوصل البائع البضاعة جاهزة للتفريغ؛ ويتولى المشتري التخليص للاستيراد ورسومه.',
      DDP: 'يحمّل DDP البائع التخليص ورسوم الاستيراد؛ ويجب التأكد من قدرته القانونية على الاستيراد في بلد الوجهة.'
    },
    finance: {
      IMF: 'يدعم صندوق النقد استقرار الدول واحتياجات ميزان المدفوعات؛ ولا يدفع فاتورة استيراد شركة بعينها.',
      'WORLD BANK': 'تمول مجموعة البنك الدولي التنمية، وهي مختلفة عن البنك التجاري الذي يصدر اعتماد المشتري.',
      'BANKS · UCP 600': 'قد يؤدي اختلاف المستندات إلى تأخير الدفع حتى لو كانت البضاعة سليمة. حددوا مستندات يستطيع البائع الحصول عليها والناقل إصدارها.',
      SWIFT: 'تنقل SWIFT الرسائل المالية الموحدة؛ أما تعهد الدفع فيصدر عن البنك وأداة الدفع، لا عن الشبكة.'
    },
    creditSteps: {
      '0': 'قبل الإصدار، يجب مطابقة مبلغ الاعتماد وانتهائه وموعد الشحن والمستندات المطلوبة مع عقد البيع.',
      '1': 'يتحقق البنك المبلّغ من الاعتماد وينقله، لكنه لا يضيف تلقائياً تعهداً مستقلاً بالدفع.',
      '2': 'ينبغي للبائع مراجعة الاعتماد قبل الشحن؛ فقد يؤدي اختلاف بسيط في المستندات إلى تأخير الدفع أو رفضه.',
      '3': 'تفحص البنوك المستندات لا البضاعة الفعلية. ولا يلزم تقرير الفحص إلا إذا طلبه الاعتماد.'
    },
    phases: {
      specify: 'ابدأوا بقواعد بلد الاستيراد والعقد؛ فمتطلبات سوق معين لا تنطبق بالضرورة على الأسواق الأخرى.',
      verify: 'يثبت الفحص نتائج اختبارات محددة في وقت معين، ولا يضمن كل أداء مستقبلي أو كل جوانب السلامة.',
      transport: 'تحدد وسيلة النقل قواعد السلامة ووثائق الشحن المناسبة؛ فالنقل البحري والجوي يخضعان لأطر مختلفة.'
    },
    standards: {
      ISO: 'تنشر ISO المعايير، بينما تصدق جهات مستقلة على أنظمة الإدارة. ولا تصدق ISO الموردين بنفسها.',
      TIC: 'يحدد طلب الفحص الدفعة والاختبارات ومعايير القبول. ويسجل التقرير عينة ووقتاً معيناً، ولا يضمن كل وحدة أو مناولتها لاحقاً.',
      CODEX: 'تستخدم السلطات Codex مرجعاً علمياً لبقايا المبيدات والنظافة، ثم تضع الحدود والفحوص الوطنية الملزمة.',
      IMO: 'تعتمد الدول الأعضاء اتفاقيات المنظمة البحرية وتنفذها. تركز SOLAS على سلامة السفن وMARPOL على التلوث؛ ويصدر الناقل بوليصة الشحن.',
      IATA: 'في الشحن الجوي، تحققوا من قواعد البضائع الخطرة والتعبئة وقبول الناقل. تثبت بوليصة الشحن الجوي النقل لا الملكية.'
    },
    case: {
      '0': 'تسري اتفاقية البيع CISG عند تحقق شروطها ما لم تستبعدها الأطراف. اذكروا الميناء المحدد وإصدار Incoterms في العقد.',
      '1': 'يعتمد تصنيف HS على الخصائص التقنية للآلة؛ ويجب التحقق من التعريفة الوطنية والمنشأ لدى الجمارك.',
      '2': 'الاعتماد المستندي اختياري ويجب الاتفاق عليه. يلتزم البنك بنص الاعتماد عند تقديم مستندات مطابقة.',
      '3': 'تخص ISO 9001 نظام إدارة الجودة، لا شهادة الآلة ذاتها. تحققوا من الموافقات المطلوبة للمنتج في بلد الوصول.',
      '4': 'تخضع أبعاد الحاوية وسلامة السفينة وبوليصة الشحن لمعايير وجهات مختلفة؛ ويصدر الناقل وثيقة النقل.',
      '5': 'يبقى المستورد مسؤولاً عن صحة الإقرار والرسوم المستحقة. ومطابقة المستندات للبنك منفصلة عن الإفراج الجمركي.'
    }
  }
};

export const interfaceText = {
  en: { library: 'Presentations', outline: 'Story outline', notes: 'Presenter notes', fullscreen: 'Enter presentation mode', exitFullscreen: 'Exit presentation mode', previous: 'Previous slide', next: 'Next slide', start: 'Begin presentation', close: 'Close', slide: 'Slide', of: 'of', chapters: 'chapters', chapter: 'Chapter', backToLibrary: 'All presentations', modeHint: 'Press F for presentation mode', seller: 'Seller', buyer: 'Buyer', risk: 'Risk transfers', cost: 'Seller pays to', customs: 'Customs', transport: 'Mode', why: 'Why it matters', impact: 'What changed', glossary: 'Essential trade vocabulary', notesHeading: 'Speaking notes', more: 'Explore chapter', checklist: 'The shipment, step by step', themeLight: 'Switch to light theme', themeDark: 'Switch to dark theme', historyArc: 'A longer story of trade', imageCredit: 'Image & archive credit', inPractice: 'In practice' },
  fr: { library: 'Présentations', outline: 'Fil conducteur', notes: 'Notes orateur', fullscreen: 'Passer en mode présentation', exitFullscreen: 'Quitter le mode présentation', previous: 'Diapositive précédente', next: 'Diapositive suivante', start: 'Commencer la présentation', close: 'Fermer', slide: 'Diapositive', of: 'sur', chapters: 'chapitres', chapter: 'Chapitre', backToLibrary: 'Toutes les présentations', modeHint: 'Touche F : mode présentation', seller: 'Vendeur', buyer: 'Acheteur', risk: 'Transfert du risque', cost: 'Frais vendeur jusqu’à', customs: 'Douanes', transport: 'Mode', why: 'Pourquoi ?', impact: 'Ce qui change', glossary: 'Vocabulaire essentiel du commerce', notesHeading: 'Notes de présentation', more: 'Explorer le chapitre', checklist: 'La transaction, étape par étape', themeLight: 'Activer le thème clair', themeDark: 'Activer le thème sombre', historyArc: 'Une longue histoire du commerce', imageCredit: 'Crédit image et archives', inPractice: 'En pratique' },
  ar: { library: 'العروض', outline: 'مسار العرض', notes: 'ملاحظات المتحدث', fullscreen: 'بدء وضع العرض', exitFullscreen: 'إنهاء وضع العرض', previous: 'الشريحة السابقة', next: 'الشريحة التالية', start: 'ابدأ العرض', close: 'إغلاق', slide: 'الشريحة', of: 'من', chapters: 'فصول', chapter: 'الفصل', backToLibrary: 'كل العروض', modeHint: 'اضغط F لبدء وضع العرض', seller: 'البائع', buyer: 'المشتري', risk: 'انتقال المخاطر', cost: 'تكاليف البائع حتى', customs: 'الجمارك', transport: 'وسيلة النقل', why: 'لماذا؟', impact: 'ما الذي تغيّر؟', glossary: 'مصطلحات أساسية في التجارة', notesHeading: 'ملاحظات العرض', more: 'اكتشف الفصل', checklist: 'رحلة الشحنة خطوة بخطوة', themeLight: 'تفعيل المظهر الفاتح', themeDark: 'تفعيل المظهر الداكن', historyArc: 'حكاية أطول للتجارة', imageCredit: 'مصدر الصورة والأرشيف', inPractice: 'عملياً' }
};

export const helpText = {
  en: { label: 'Explain', title: 'About this concept', close: 'Close explanation' },
  fr: { label: 'Expliquer', title: 'À propos de ce concept', close: 'Fermer l’explication' },
  ar: { label: 'شرح', title: 'حول هذا المفهوم', close: 'إغلاق الشرح' }
};

export const tradeDeck = {
  id: 'trade-institutions',
  title: { en: 'International Trade Institutions', fr: 'Les institutions du commerce international', ar: 'مؤسسات التجارة الدولية' },
  subtitle: {
    en: 'Rules, shipping terms, payment and standards: follow one shipment through the system that makes global trade possible.',
    fr: 'Règles, transport, paiement et normes : suivez une expédition au cœur du système qui rend le commerce mondial possible.',
    ar: 'القواعد والشحن والدفع والمعايير: نتتبع شحنة واحدة عبر منظومة التجارة العالمية.'
  },
  metadata: { en: 'A documentary presentation · 12 min', fr: 'Présentation documentaire · 12 min', ar: 'عرض وثائقي · 12 دقيقة' },
  chapters: [
    {
      id: 'overview', type: 'overview',
      title: { en: 'Four institutions. One moving shipment.', fr: 'Quatre piliers, une seule expédition.', ar: 'أربع ركائز، وشحنة واحدة.' },
      kicker: { en: '01 / The whole picture', fr: '01 / Vue d’ensemble', ar: '01 / الصورة الكاملة' },
      intro: {
        en: 'How does a shipment cross borders without legal confusion, unpaid invoices or rejected cargo? Four connected pillars make the journey predictable.',
        fr: 'Comment une marchandise franchit-elle les frontières sans litige, impayé ni refus douanier ? Quatre piliers coordonnés rendent le parcours prévisible.',
        ar: 'كيف تعبر البضائع الحدود دون نزاع أو عدم دفع أو رفض جمركي؟ تجعل أربع ركائز مترابطة الرحلة أكثر وضوحاً.'
      },
      pillars: [
        { number: '01', title: { en: 'Rules & customs', fr: 'Règles et douanes', ar: 'القواعد والجمارك' }, orgs: 'WTO · WCO · UNCITRAL · UNCTAD', text: { en: 'Trade agreements, customs classification, international sale contracts and state-to-state dispute rules.', fr: 'Accords commerciaux, nomenclature douanière, contrats de vente et règlement des différends entre États.', ar: 'اتفاقيات التجارة والتصنيف الجمركي وعقود البيع وتسوية النزاعات بين الدول.' }, tone: 'mint' },
        { number: '02', title: { en: 'Commercial terms', fr: 'Règles commerciales', ar: 'الأعراف التجارية' }, orgs: 'ICC · Incoterms® 2020', text: { en: 'Who arranges transport, pays each cost, handles customs and bears risk at each hand-off?', fr: 'Qui organise le transport, paie les frais, effectue le dédouanement et supporte le risque à chaque étape ?', ar: 'من يرتب النقل ويدفع التكاليف ويخلّص الجمارك ويتحمل المخاطر عند كل مرحلة؟' }, tone: 'blue' },
        { number: '03', title: { en: 'Money & trust', fr: 'Financement et confiance', ar: 'التمويل والثقة' }, orgs: 'IMF · World Bank · SWIFT · Banks', text: { en: 'Monetary stability and bank payment mechanisms such as documentary credits under UCP 600.', fr: 'Stabilité monétaire et mécanismes bancaires, notamment le crédit documentaire soumis aux RUU 600.', ar: 'استقرار نقدي وآليات دفع مصرفية مثل الاعتماد المستندي وفق UCP 600.' }, tone: 'coral' },
        { number: '04', title: { en: 'Quality & safety', fr: 'Qualité et sécurité', ar: 'الجودة والسلامة' }, orgs: 'ISO · Codex · IMO · IATA', text: { en: 'Product and food standards, conformity checks, and the rules governing sea and air freight.', fr: 'Normes produit et alimentaires, contrôles de conformité, règles du transport maritime et aérien.', ar: 'معايير المنتجات والأغذية وفحوص المطابقة وقواعد النقل البحري والجوي.' }, tone: 'gold' }
      ],
      glossary: [
        { term: 'WTO / OMC', expansion: { en: 'World Trade Organization', fr: 'Organisation mondiale du commerce', ar: 'منظمة التجارة العالمية' } },
        { term: 'WCO / OMD', expansion: { en: 'World Customs Organization', fr: 'Organisation mondiale des douanes', ar: 'منظمة الجمارك العالمية' } },
        { term: 'ICC / CCI', expansion: { en: 'International Chamber of Commerce', fr: 'Chambre de commerce internationale', ar: 'غرفة التجارة الدولية' } },
        { term: 'L/C · Crédoc', expansion: { en: 'Documentary letter of credit', fr: 'Crédit documentaire', ar: 'الاعتماد المستندي' } },
        { term: 'CISG / CVIM', expansion: { en: 'UN Convention on Contracts for the International Sale of Goods', fr: 'Convention des Nations unies sur la vente internationale de marchandises', ar: 'اتفاقية الأمم المتحدة للبيع الدولي للبضائع' } },
        { term: 'HS / SH', expansion: { en: 'Harmonized Commodity Description and Coding System', fr: 'Système harmonisé de désignation et de codification des marchandises', ar: 'النظام المنسق لتصنيف وتبويب البضائع' } }
      ],
      note: {
        en: 'Open with a familiar object: a phone, coffee or a machine. A cross-border purchase needs rules, clear responsibilities, a way to settle payment and confidence that the goods meet requirements. The rest of the presentation follows that journey.',
        fr: 'Commencez par un objet familier : un téléphone, du café ou une machine. Un achat international exige des règles, des responsabilités claires, un moyen de paiement et l’assurance que les marchandises répondent aux exigences. La présentation suit ce parcours.',
        ar: 'ابدأوا بشيء مألوف: هاتف أو قهوة أو آلة. تحتاج التجارة عبر الحدود إلى قواعد ومسؤوليات واضحة وطريقة آمنة للدفع والتأكد من مطابقة البضائع. سنتتبع هذه الرحلة.'
      }
    },
    {
      id: 'history', type: 'timeline',
      title: { en: 'A system built from hard lessons.', fr: 'Un système forgé par l’expérience.', ar: 'منظومة بُنيت من دروس التاريخ.' },
      kicker: { en: '03 / Where it began', fr: '03 / Les origines', ar: '03 / البدايات' },
      intro: { en: 'Economic crises and inconsistent border rules pushed governments and businesses to build shared institutions.', fr: 'Crises économiques et formalités disparates ont conduit États et entreprises à créer des institutions communes.', ar: 'دفعت الأزمات الاقتصادية واختلاف الإجراءات الدول والشركات إلى إنشاء مؤسسات مشتركة.' },
      stories: [
        {
          id: 'silk-roads', period: { en: 'CENTURIES OF EXCHANGE', fr: 'DES SIÈCLES D’ÉCHANGES', ar: 'قرون من التبادل' },
          title: { en: 'The Silk Roads: trade before shared rules', fr: 'Les routes de la soie : commercer sans règles communes', ar: 'طرق الحرير: تجارة قبل القواعد المشتركة' },
          subtitle: { en: 'Caravan cities connected distant worlds long before modern trade institutions.', fr: 'Bien avant les institutions modernes, les villes caravanières reliaient des mondes lointains.', ar: 'ربطت مدن القوافل عوالم بعيدة قبل ظهور المؤسسات التجارية الحديثة.' },
          text: { en: 'For centuries, overlapping caravan routes connected East Asia, Central Asia, the Middle East and the Mediterranean. Oasis cities linked merchants carrying silk, spices, ideas and technologies. There was no single “Silk Road” authority: travellers crossed many borders, toll systems and local rules.', fr: 'Pendant des siècles, des routes caravanières relièrent l’Asie orientale et centrale, le Moyen-Orient et la Méditerranée. Les villes-oasis rapprochaient marchands, soieries, épices, idées et techniques. Aucune autorité unique ne gouvernait ces routes : chaque frontière avait ses péages et ses usages.', ar: 'على مدى قرون، ربطت طرق القوافل المتداخلة شرق آسيا وآسيا الوسطى والشرق الأوسط والبحر المتوسط. جمعت مدن الواحات التجار والحرير والتوابل والأفكار والتقنيات. لم تكن هناك سلطة واحدة لطريق الحرير؛ بل تعددت الحدود والرسوم والقواعد المحلية.' },
          image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/WLA_vanda_Camel_and_Rider_Tang_dynasty.jpg/1920px-WLA_vanda_Camel_and_Rider_Tang_dynasty.jpg',
          imageAlt: { en: 'Tang dynasty ceramic camel and rider, an imported-luxury symbol associated with Silk Road caravan trade', fr: 'Chameau et cavalier en céramique de la dynastie Tang, symbole d’un luxe lié au commerce caravanier des routes de la soie', ar: 'تمثال خزفي من عهد تانغ لجمل وراكبه، رمز لسلع فاخرة ارتبطت بتجارة القوافل على طرق الحرير' },
          imageCredit: 'VeronikaB · Victoria and Albert Museum · CC BY 2.5',
          imageSource: 'https://commons.wikimedia.org/wiki/File:WLA_vanda_Camel_and_Rider_Tang_dynasty.jpg'
        },
        {
          id: 'world-war-one', period: { en: '1914–1918 · AFTER THE ARMISTICE', fr: '1914–1918 · APRÈS L’ARMISTICE', ar: '1914–1918 · بعد الهدنة' },
          title: { en: 'After World War I: business looks for a way back', fr: 'Après la Première Guerre mondiale : reconstruire les échanges', ar: 'بعد الحرب العالمية الأولى: استعادة التجارة' },
          subtitle: { en: 'Blockades and broken trust helped inspire the ICC’s “Merchants of Peace.”', fr: 'Blocus et défiance inspirent les « marchands de la paix » de la CCI.', ar: 'ألهم الحصار وفقدان الثقة «تجار السلام» الذين أسسوا غرفة التجارة.' },
          text: { en: 'War brought blockades, controls, disrupted routes and shattered commercial trust. In 1919, business leaders founded the ICC in Paris. Calling themselves the “Merchants of Peace,” they argued that common business rules and cooperation could help rebuild cross-border commerce. The ICC’s founding followed World War I; it was not created after World War II.', fr: 'La guerre entraîne blocus, contrôles, routes interrompues et défiance commerciale. En 1919, des dirigeants d’entreprise fondent la CCI à Paris. Surnommés les « marchands de la paix », ils défendent des règles communes et la coopération pour relancer les échanges. La CCI naît après la Première Guerre mondiale, pas après la Seconde.', ar: 'جلبت الحرب الحصار والقيود وتعطّل طرق التجارة وفقدان الثقة. وفي عام 1919 أسس قادة أعمال غرفة التجارة الدولية في باريس، وسمّوا أنفسهم «تجار السلام»، مؤمنين بأن القواعد المشتركة والتعاون يساعدان على إعادة التجارة. تأسست الغرفة بعد الحرب العالمية الأولى، لا الثانية.' },
          image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/World_War_I_soldiers_in_dugout.JPG/1280px-World_War_I_soldiers_in_dugout.JPG',
          imageAlt: { en: 'Australian soldiers shelter in a dugout on Hill 60, photographed by Frank Hurley in 1917–1918', fr: 'Des soldats australiens s’abritent dans un poste souterrain à Hill 60, photographiés par Frank Hurley en 1917–1918', ar: 'جنود أستراليون يحتمون في خندق عند هيل 60، التقط فرانك هيرلي الصورة بين 1917 و1918' },
          imageCredit: 'Frank Hurley · Australian War Memorial · Public domain',
          imageSource: 'https://commons.wikimedia.org/wiki/File:World_War_I_soldiers_in_dugout.JPG'
        },
        {
          id: 'world-war-two', period: { en: '1939–1945 · REBUILDING A WORLD', fr: '1939–1945 · RECONSTRUIRE UN MONDE', ar: '1939–1945 · إعادة بناء العالم' },
          title: { en: 'After World War II: cooperation at a wider scale', fr: 'Après la Seconde Guerre mondiale : coopérer à plus grande échelle', ar: 'بعد الحرب العالمية الثانية: تعاون أوسع' },
          subtitle: { en: 'The ICC already existed; Bretton Woods and GATT shaped the post-war response.', fr: 'La CCI existait déjà ; Bretton Woods et le GATT structurent la réponse d’après-guerre.', ar: 'كانت غرفة التجارة موجودة؛ وجاء بريتون وودز والجات ضمن استجابة ما بعد الحرب.' },
          text: { en: 'The Second World War devastated cities, production and trade. It did not create the ICC: the Chamber had existed since 1919. Instead, the post-war response expanded cooperation. The 1944 Bretton Woods conference established the IMF and World Bank framework; the GATT followed in 1947 to negotiate trade rules and tariff reductions.', fr: 'La Seconde Guerre mondiale détruit villes, capacités de production et réseaux commerciaux. Elle ne crée pas la CCI, qui existe depuis 1919. La réponse d’après-guerre élargit plutôt la coopération : Bretton Woods établit en 1944 le cadre du FMI et de la Banque mondiale ; le GATT suit en 1947 pour négocier des règles commerciales et des réductions tarifaires.', ar: 'دمّرت الحرب العالمية الثانية المدن والإنتاج وشبكات التجارة، لكنها لم تنشئ غرفة التجارة الدولية التي تأسست عام 1919. بل وسّعت مرحلة ما بعد الحرب التعاون: وضع مؤتمر بريتون وودز عام 1944 إطار صندوق النقد والبنك الدولي، ثم جاءت الجات عام 1947 للتفاوض حول قواعد التجارة وخفض الرسوم.' },
          image: 'https://upload.wikimedia.org/wikipedia/commons/5/56/NA-306-NT-3163V.jpg',
          imageAlt: { en: 'Children made homeless after a German bombing raid in an eastern suburb of London, September 1940', fr: 'Des enfants sans abri après un bombardement allemand dans la banlieue est de Londres, septembre 1940', ar: 'أطفال فقدوا منازلهم بعد غارة جوية ألمانية على ضاحية شرقي لندن، سبتمبر 1940' },
          imageCredit: 'U.S. National Archives · Public domain',
          imageSource: 'https://commons.wikimedia.org/wiki/File:NA-306-NT-3163V.jpg'
        }
      ],
      events: [
        { year: '1919', name: { en: 'ICC founded in Paris', fr: 'Création de la CCI à Paris', ar: 'تأسيس غرفة التجارة الدولية في باريس' }, place: { en: 'Private business federation', fr: 'Fédération internationale d’entreprises', ar: 'اتحاد أعمال دولي' }, why: { en: 'After the First World War, business leaders known as the “Merchants of Peace” sought to restart commerce with common private-sector rules.', fr: 'Après la Première Guerre mondiale, les « marchands de la paix » veulent relancer les échanges grâce à des règles commerciales communes.', ar: 'بعد الحرب العالمية الأولى، سعى رجال الأعمال المعروفون باسم «تجار السلام» إلى استعادة التجارة بقواعد مشتركة.' }, impact: { en: 'The ICC later launched its International Court of Arbitration (1923), documentary-credit rules (1933) and Incoterms (1936).', fr: 'La CCI crée ensuite sa Cour internationale d’arbitrage (1923), ses règles du crédit documentaire (1933) et les Incoterms (1936).', ar: 'أنشأت لاحقاً محكمة التحكيم الدولية (1923)، وقواعد الاعتماد المستندي (1933)، ومصطلحات Incoterms (1936).' } },
        { year: '1944', name: { en: 'Bretton Woods', fr: 'Bretton Woods', ar: 'بريتون وودز' }, place: { en: 'New Hampshire · 44 allied nations', fr: 'New Hampshire · 44 pays alliés', ar: 'نيوهامبشير · 44 دولة حليفة' }, why: { en: 'Delegates designed a post-war monetary system to avoid the competitive devaluations and economic fragmentation of the 1930s.', fr: 'Les délégués conçoivent un système monétaire d’après-guerre pour éviter les dévaluations compétitives et la fragmentation des années 1930.', ar: 'صمم المندوبون نظاماً نقدياً لما بعد الحرب لتجنب تخفيض العملات وتفكك الاقتصاد كما حدث في الثلاثينيات.' }, impact: { en: 'The IMF supports monetary cooperation and balance-of-payments needs; the World Bank began with reconstruction and development finance.', fr: 'Le FMI soutient la coopération monétaire et les besoins de balance des paiements ; la Banque mondiale finance la reconstruction et le développement.', ar: 'يدعم صندوق النقد التعاون النقدي واحتياجات ميزان المدفوعات؛ وبدأ البنك الدولي بتمويل إعادة الإعمار والتنمية.' } },
        { year: '1947', name: { en: 'GATT & ISO', fr: 'GATT et ISO', ar: 'الجات وISO' }, place: { en: 'Geneva · multilateral frameworks', fr: 'Genève · cadres multilatéraux', ar: 'جنيف · أطر متعددة الأطراف' }, why: { en: 'Twenty-three countries signed the General Agreement on Tariffs and Trade while a broader trade organization was still being negotiated. ISO was founded the same year.', fr: 'Vingt-trois pays signent l’Accord général sur les tarifs douaniers et le commerce, dans l’attente d’une organisation plus vaste. L’ISO est fondée la même année.', ar: 'وقعت 23 دولة الاتفاقية العامة للتعريفات والتجارة ريثما يجري التفاوض على منظمة أوسع. وتأسست ISO في العام نفسه.' }, impact: { en: 'GATT rounds negotiated tariff reductions; ISO developed international standards for products and processes.', fr: 'Les cycles du GATT négocient des réductions tarifaires ; l’ISO élabore des normes internationales de produits et de procédés.', ar: 'تفاوضت جولات الجات على خفض الرسوم؛ وطورت ISO معايير دولية للمنتجات والعمليات.' } },
        { year: '1952', name: { en: 'Customs Co-operation Council', fr: 'Conseil de coopération douanière', ar: 'مجلس التعاون الجمركي' }, place: { en: 'Brussels · intergovernmental', fr: 'Bruxelles · intergouvernemental', ar: 'بروكسل · منظمة حكومية دولية' }, why: { en: 'Different product classifications and customs procedures made border administration slow and unpredictable.', fr: 'La diversité des nomenclatures et procédures douanières compliquait et ralentissait le passage des frontières.', ar: 'جعل اختلاف تصنيفات المنتجات والإجراءات الجمركية عبور الحدود بطيئاً وغير متوقع.' }, impact: { en: 'The Council became the WCO. The Harmonized System entered into force in 1988 and is used by more than 200 economies and customs unions.', fr: 'Le Conseil devient l’OMD. Le Système harmonisé entre en vigueur en 1988 et est utilisé par plus de 200 économies et unions douanières.', ar: 'أصبح المجلس منظمة الجمارك العالمية. ودخل النظام المنسق حيز التنفيذ عام 1988 وتستخدمه أكثر من 200 دولة واتحاد جمركي.' } },
        { year: '1995', name: { en: 'WTO established', fr: 'Création de l’OMC', ar: 'تأسيس منظمة التجارة العالمية' }, place: { en: 'Marrakesh Agreement · headquarters in Geneva', fr: 'Accords de Marrakech · siège à Genève', ar: 'اتفاق مراكش · المقر في جنيف' }, why: { en: 'The Uruguay Round (1986–1994) turned the GATT framework into a permanent organization with wider agreements.', fr: 'Le Cycle d’Uruguay (1986–1994) transforme le cadre du GATT en organisation permanente dotée d’accords plus larges.', ar: 'حوّلت جولة أوروغواي (1986–1994) إطار الجات إلى منظمة دائمة واتفاقيات أوسع.' }, impact: { en: 'The WTO covers trade in goods, services (GATS) and intellectual property (TRIPS), and established a dispute-settlement system.', fr: 'L’OMC couvre les biens, les services (AGCS) et la propriété intellectuelle (ADPIC), avec un système de règlement des différends.', ar: 'تشمل المنظمة السلع والخدمات (GATS) والملكية الفكرية (TRIPS)، وأنشأت نظاماً لتسوية المنازعات.' } }
      ],
      note: { en: 'Keep the timeline causal: different problems produced different institutions. The WCO’s predecessor was founded in 1952; the Harmonized System followed in 1988. This distinction avoids implying that the HS code existed at the organization’s founding.', fr: 'Présentez une chronologie causale : chaque institution répond à un problème. Le prédécesseur de l’OMD est fondé en 1952 ; le Système harmonisé arrive en 1988. Cette distinction évite de confondre leur création.', ar: 'اربطوا الأحداث بالمشكلات التي عالجتها. تأسس المجلس السابق لمنظمة الجمارك عام 1952، بينما ظهر النظام المنسق عام 1988؛ فالحدثان ليسا متزامنين.' }
    },
    {
      id: 'rules', type: 'institutions',
      title: { en: 'Who writes the rules at the border?', fr: 'Qui fixe les règles aux frontières ?', ar: 'من يضع قواعد التجارة والجمارك؟' },
      kicker: { en: '04 / Rules & customs', fr: '04 / Règles et douanes', ar: '04 / القواعد والجمارك' },
      intro: { en: 'Several organizations are involved, but each has a distinct job: trade policy, customs tools, contract law or development support.', fr: 'Plusieurs organisations interviennent, chacune avec un rôle distinct : politique commerciale, outils douaniers, droit des contrats ou appui au développement.', ar: 'تشارك منظمات عدة، ولكل منها دور مختلف: سياسة التجارة أو أدوات الجمارك أو قانون العقود أو دعم التنمية.' },
      organizations: [
        { acronym: 'WTO / OMC', location: { en: 'Geneva · established 1995', fr: 'Genève · fondée en 1995', ar: 'جنيف · تأسست عام 1995' }, items: { en: ['Most-Favoured-Nation (MFN): advantages generally extend to all members, subject to exceptions.', 'National Treatment: imported goods receive treatment no less favourable than like domestic goods after importation.', 'Dispute Settlement Body provides a rules-based process for member disputes.'], fr: ['Nation la plus favorisée : les avantages sont en principe étendus aux membres, sous réserve d’exceptions.', 'Traitement national : après importation, les produits importés similaires ne sont pas traités moins favorablement que les produits nationaux.', 'L’Organe de règlement des différends encadre les différends entre membres.'], ar: ['الدولة الأولى بالرعاية: تمتد المزايا عموماً إلى الأعضاء مع وجود استثناءات.', 'المعاملة الوطنية: لا تعامل السلع المستوردة معاملة أقل تفضيلاً من السلع المحلية المماثلة بعد استيرادها.', 'يوفر جهاز تسوية المنازعات مساراً قائماً على القواعد لنزاعات الأعضاء.'] } },
        { acronym: 'WCO / OMD', location: { en: 'Brussels · Customs Co-operation Council founded 1952', fr: 'Bruxelles · Conseil de coopération douanière fondé en 1952', ar: 'بروكسل · تأسس مجلس التعاون الجمركي عام 1952' }, items: { en: ['Maintains the Harmonized System (HS), used to classify traded goods at the international six-digit level.', 'Develops customs valuation, simplified procedures and the Revised Kyoto Convention.', 'The SAFE Framework promotes secure trade; Authorized Economic Operator (AEO) programmes are implemented by customs administrations.'], fr: ['Entretient le Système harmonisé (SH), qui classe les marchandises au niveau international à six chiffres.', 'Élabore des instruments sur la valeur en douane et la simplification des procédures, dont la Convention de Kyoto révisée.', 'Le Cadre SAFE favorise la sécurité ; les administrations douanières mettent en œuvre des programmes d’opérateur économique agréé (OEA).'], ar: ['تدير النظام المنسق (HS) لتصنيف البضائع دولياً على مستوى ستة أرقام.', 'تطور قواعد التقييم الجمركي وتيسير الإجراءات، ومنها اتفاقية كيوتو المعدلة.', 'يعزز إطار SAFE أمن التجارة، وتطبق إدارات الجمارك برامج المشغل الاقتصادي المعتمد (AEO).'] } },
        { acronym: 'UNCITRAL / CNUDCI', location: { en: 'UN commission · established 1966', fr: 'Commission des Nations unies · créée en 1966', ar: 'لجنة الأمم المتحدة · أُنشئت عام 1966' }, items: { en: ['Prepared the 1980 Vienna Convention (CISG) on international sales of goods.', 'Develops model laws and conventions on arbitration, electronic commerce and electronic signatures.', 'Offers common legal frameworks where parties operate under different national laws.'], fr: ['A élaboré la Convention de Vienne de 1980 (CVIM) sur la vente internationale de marchandises.', 'Élabore des lois types et conventions sur l’arbitrage, le commerce électronique et les signatures électroniques.', 'Propose des cadres communs aux parties relevant de droits nationaux différents.'], ar: ['أعدت اتفاقية فيينا لعام 1980 (CISG) بشأن البيع الدولي للبضائع.', 'تضع قوانين نموذجية واتفاقيات للتحكيم والتجارة الإلكترونية والتوقيعات الإلكترونية.', 'توفر أطر قانونية مشتركة للأطراف الخاضعة لقوانين وطنية مختلفة.'] } },
        { acronym: 'UNCTAD / CNUCED', location: { en: 'UN body · established 1964', fr: 'Organe de l’ONU · créé en 1964', ar: 'هيئة أممية · أُنشئت عام 1964' }, items: { en: ['Supports developing economies in trade, investment, debt and logistics policy.', 'Provides analysis and technical assistance on trade and development.', 'Develops ASYCUDA (SYDONIA), a customs-management system used by customs administrations worldwide.'], fr: ['Accompagne les économies en développement sur le commerce, l’investissement, la dette et la logistique.', 'Produit analyses et assistance technique sur le commerce et le développement.', 'Développe SYDONIA (ASYCUDA), un système de gestion douanière utilisé par des administrations du monde entier.'], ar: ['تدعم الاقتصادات النامية في التجارة والاستثمار والديون والسياسات اللوجستية.', 'توفر التحليل والمساعدة التقنية في مجالي التجارة والتنمية.', 'تطور نظام أسكودا (ASYCUDA) لإدارة الجمارك، والمستخدم لدى إدارات حول العالم.'] } }
      ],
      hs: {
        title: { en: 'Reading an HS code · roasted Arabica coffee', fr: 'Lire un code SH · café arabica torréfié', ar: 'قراءة رمز HS · قهوة أرابيكا محمصة' },
        code: '0901.21',
        parts: [
          { digits: '09', name: { en: 'Chapter · coffee, tea, maté and spices', fr: 'Chapitre · café, thé, maté et épices', ar: 'الفصل · القهوة والشاي والمتة والتوابل' } },
          { digits: '0901', name: { en: 'Heading · coffee, roasted or not', fr: 'Position · café, torréfié ou non', ar: 'البند · قهوة محمصة أو غير محمصة' } },
          { digits: '0901.21', name: { en: 'Subheading · roasted, not decaffeinated', fr: 'Sous-position · torréfié, non décaféiné', ar: 'البند الفرعي · محمصة غير منزوعة الكافيين' } },
          { digits: '+ 2–4', name: { en: 'Possible national tariff digits', fr: 'Éventuelles subdivisions tarifaires nationales', ar: 'أرقام إضافية محتملة للتعريفة الوطنية' } }
        ]
      },
      note: { en: 'Separate policy from administration. WTO members negotiate and apply trade agreements; customs administrations classify and assess goods. The WCO maintains the HS nomenclature, but national tariff lines and rates vary. The six-digit HS is harmonized; national systems can add digits.', fr: 'Distinguez la politique de l’administration. Les membres de l’OMC négocient et appliquent les accords ; les douanes classent et évaluent les marchandises. L’OMD entretient la nomenclature SH, mais lignes tarifaires et taux nationaux varient. Le SH est harmonisé sur six chiffres ; les pays peuvent en ajouter.', ar: 'ميّزوا بين السياسة والإدارة: تتفاوض الدول الأعضاء في منظمة التجارة وتطبق الاتفاقيات؛ وتصنف إدارات الجمارك السلع وتقيّمها. تدير منظمة الجمارك nomenclature النظام المنسق، لكن التعريفات الوطنية تختلف. المستوى الدولي ستة أرقام، وقد تضيف الدول أرقاماً.' }
    },
    {
      id: 'incoterms', type: 'incoterms',
      title: { en: 'The hand-off changes everything.', fr: 'Le passage de relais change tout.', ar: 'تغيّر نقطة التسليم كل شيء.' },
      kicker: { en: '05 / Commercial terms', fr: '05 / Règles commerciales', ar: '05 / المصطلحات التجارية' },
      intro: { en: 'Incoterms® 2020 are ICC rules incorporated into a sale contract. Compare who arranges or pays each stage with the point where risk transfers.', fr: 'Les Incoterms® 2020 sont des règles de la CCI intégrées au contrat de vente. Comparez la répartition des frais et le point de transfert du risque.', ar: 'قواعد Incoterms® 2020 صادرة عن غرفة التجارة وتُدرج في عقد البيع. قارنوا بين تكاليف كل مرحلة ونقطة انتقال المخاطر.' },
      stages: [
        { en: 'Pack & hand over', fr: 'Emballage et remise', ar: 'التعبئة والتسليم' },
        { en: 'Export clearance', fr: 'Douane export', ar: 'جمارك التصدير' },
        { en: 'Pre-carriage', fr: 'Pré-acheminement', ar: 'النقل الداخلي' },
        { en: 'Load main carrier', fr: 'Chargement principal', ar: 'التحميل على الناقل' },
        { en: 'Main freight & insurance', fr: 'Fret principal et assurance', ar: 'الشحن الرئيسي والتأمين' },
        { en: 'Destination handling', fr: 'Manutention à l’arrivée', ar: 'المناولة عند الوصول' },
        { en: 'Import & delivery', fr: 'Douane import et livraison', ar: 'الاستيراد والتسليم' }
      ],
      terms: {
        EXW: { name: { en: 'Ex Works', fr: 'À l’usine', ar: 'تسليم المصنع' }, mode: 'Any mode', sellerStages: [1,0,0,0,0,0,0], riskAt: 0, costTo: 0, risk: { en: 'Goods placed at the buyer’s disposal at the named place; the seller is not required to load them.', fr: 'Marchandises mises à disposition au lieu convenu ; le vendeur n’est pas tenu de les charger.', ar: 'توضع البضائع تحت تصرف المشتري في المكان المحدد؛ ولا يلتزم البائع بتحميلها.' }, customs: { en: 'Buyer handles export and import formalities. Consider FCA if export clearance by the buyer is impractical.', fr: 'L’acheteur gère les formalités export et import. FCA peut être plus adapté si l’acheteur ne peut dédouaner à l’export.', ar: 'يتولى المشتري إجراءات التصدير والاستيراد. قد يكون FCA أنسب إذا تعذر عليه التخليص للتصدير.' } },
        FCA: { name: { en: 'Free Carrier', fr: 'Franco transporteur', ar: 'تسليم للناقل' }, mode: 'Any mode', sellerStages: [1,1,1,0,0,0,0], riskAt: 2, costTo: 2, risk: { en: 'Risk transfers when delivery is made to the buyer’s nominated carrier at the agreed place.', fr: 'Le risque passe lors de la remise au transporteur désigné par l’acheteur au lieu convenu.', ar: 'تنتقل المخاطر عند تسليم البضاعة لناقل عينه المشتري في المكان المتفق عليه.' }, customs: { en: 'Seller clears export; buyer handles import.', fr: 'Le vendeur dédouane à l’export ; l’acheteur à l’import.', ar: 'يخلص البائع جمارك التصدير، والمشتري جمارك الاستيراد.' } },
        FOB: { name: { en: 'Free On Board', fr: 'Franco à bord', ar: 'تسليم على ظهر السفينة' }, mode: 'Sea / inland waterway', sellerStages: [1,1,1,1,0,0,0], riskAt: 3, costTo: 3, risk: { en: 'Risk transfers when the goods are on board the vessel at the port of shipment.', fr: 'Le risque passe lorsque la marchandise est à bord du navire au port d’embarquement.', ar: 'تنتقل المخاطر عند وضع البضائع على السفينة في ميناء الشحن.' }, customs: { en: 'Seller clears export; buyer arranges main carriage and import clearance. For containerized cargo, FCA is often a better fit.', fr: 'Le vendeur dédouane à l’export ; l’acheteur organise le transport principal et l’import. Pour les conteneurs, FCA est souvent plus adapté.', ar: 'يخلص البائع التصدير؛ ويرتب المشتري النقل الرئيسي والاستيراد. وغالباً ما يكون FCA أنسب للشحن بالحاويات.' } },
        CIF: { name: { en: 'Cost, Insurance & Freight', fr: 'Coût, assurance et fret', ar: 'التكلفة والتأمين والشحن' }, mode: 'Sea / inland waterway', sellerStages: [1,1,1,1,1,0,0], riskAt: 3, costTo: 4, risk: { en: 'Risk transfers on board at the port of shipment, even though the seller pays carriage and insurance to the destination port.', fr: 'Le risque passe au chargement au port de départ, même si le vendeur paie le transport et l’assurance jusqu’au port de destination.', ar: 'تنتقل المخاطر عند التحميل في ميناء الشحن، رغم أن البائع يدفع النقل والتأمين حتى ميناء الوصول.' }, customs: { en: 'Seller clears export and provides the required insurance; buyer clears import and generally handles destination unloading under the contract.', fr: 'Le vendeur dédouane à l’export et souscrit l’assurance ; l’acheteur dédouane à l’import et règle généralement le déchargement selon le contrat.', ar: 'يخلص البائع التصدير ويوفر التأمين المطلوب؛ ويخلص المشتري الاستيراد ويتولى التفريغ وفق العقد.' } },
        DAP: { name: { en: 'Delivered at Place', fr: 'Rendu au lieu de destination', ar: 'التسليم في مكان الوصول' }, mode: 'Any mode', sellerStages: [1,1,1,1,1,1,0], riskAt: 5, costTo: 5, risk: { en: 'Risk transfers at the named destination while the goods are still on the arriving vehicle, ready for unloading.', fr: 'Le risque passe au lieu convenu, sur le véhicule d’arrivée, marchandises prêtes à être déchargées.', ar: 'تنتقل المخاطر في المكان المحدد والبضائع على وسيلة النقل الواصلة، جاهزة للتفريغ.' }, customs: { en: 'Seller arranges delivery and export clearance; buyer handles import clearance, duties and taxes.', fr: 'Le vendeur organise la livraison et le dédouanement export ; l’acheteur gère l’import et ses droits et taxes.', ar: 'يرتب البائع التسليم والتصدير؛ ويتولى المشتري الاستيراد والرسوم والضرائب.' } },
        DDP: { name: { en: 'Delivered Duty Paid', fr: 'Rendu droits acquittés', ar: 'تسليم خالص الرسوم' }, mode: 'Any mode', sellerStages: [1,1,1,1,1,1,1], riskAt: 6, costTo: 6, risk: { en: 'Risk transfers at the named destination, ready for unloading. Maximum seller obligation under the D terms.', fr: 'Le risque passe au lieu convenu, marchandises prêtes à être déchargées. Obligation maximale du vendeur parmi les règles en D.', ar: 'تنتقل المخاطر في الوجهة المحددة والبضاعة جاهزة للتفريغ. وهو أعلى التزام على البائع ضمن شروط D.' }, customs: { en: 'Seller is responsible for export and import clearance, duties and taxes; confirm the seller can legally import in the destination country.', fr: 'Le vendeur assume les formalités export et import, droits et taxes ; vérifier qu’il peut légalement importer dans le pays de destination.', ar: 'يتحمل البائع إجراءات ورسوم وضرائب التصدير والاستيراد؛ ويجب التأكد من قدرته القانونية على الاستيراد في بلد الوجهة.' } }
      },
      note: { en: 'Incoterms do not determine ownership, payment timing, or every remedy for breach. Crucial CIF distinction: the seller pays freight and insurance to the destination, but the buyer bears transit risk from loading at origin. CIF and FOB are for sea and inland-waterway transport; FCA works across modes.', fr: 'Les Incoterms ne règlent ni le transfert de propriété, ni les échéances de paiement, ni tous les recours en cas d’inexécution. En CIF, le vendeur paie transport et assurance jusqu’à destination, mais le risque passe à l’acheteur au chargement. CIF et FOB sont réservés au maritime et au fluvial ; FCA est multimodal.', ar: 'لا تحدد Incoterms الملكية أو موعد الدفع أو جميع التعويضات. في CIF يدفع البائع النقل والتأمين حتى الوجهة، لكن مخاطر الرحلة تنتقل عند التحميل في بلد المنشأ. ويقتصر CIF وFOB على النقل البحري والنهري؛ أما FCA فيناسب مختلف الوسائط.' }
    },
    {
      id: 'finance', type: 'finance',
      title: { en: 'Trust travels as paperwork.', fr: 'La confiance voyage par les documents.', ar: 'تسافر الثقة عبر المستندات.' },
      kicker: { en: '06 / Finance & payment', fr: '06 / Finance et paiement', ar: '06 / التمويل والدفع' },
      intro: { en: 'Global monetary institutions work at the macro level. At the transaction level, banks and documentary rules manage payment risk.', fr: 'Les institutions monétaires agissent à l’échelle macroéconomique. Pour une transaction, banques et règles documentaires encadrent le risque de paiement.', ar: 'تعمل المؤسسات النقدية على المستوى الكلي؛ وعلى مستوى الصفقة تنظم البنوك والقواعد المستندية مخاطر الدفع.' },
      institutions: [
        { acronym: 'IMF', title: { en: 'International Monetary Fund', fr: 'Fonds monétaire international', ar: 'صندوق النقد الدولي' }, badge: 'Bretton Woods · 1944', points: { en: ['Monitors monetary cooperation and financial stability.', 'Provides financing and policy support to members facing balance-of-payments problems.'], fr: ['Surveille la coopération monétaire et la stabilité financière.', 'Apporte un financement et un appui aux membres confrontés à des difficultés de balance des paiements.'], ar: ['يراقب التعاون النقدي والاستقرار المالي.', 'يوفر التمويل والدعم للدول الأعضاء التي تواجه مشكلات في ميزان المدفوعات.'] } },
        { acronym: 'WORLD BANK', title: { en: 'World Bank Group', fr: 'Groupe de la Banque mondiale', ar: 'مجموعة البنك الدولي' }, badge: 'Development finance', points: { en: ['Finances development projects and infrastructure, including transport and logistics.', 'IBRD and IFC have distinct mandates and instruments.'], fr: ['Finance des projets de développement et des infrastructures, notamment de transport et de logistique.', 'La BIRD et la SFI disposent de mandats et d’instruments distincts.'], ar: ['تمول مشاريع التنمية والبنية التحتية، ومنها النقل والخدمات اللوجستية.', 'للبنك الدولي ومؤسسة التمويل الدولية مهام وأدوات مختلفة.'] } },
        { acronym: 'BANKS · UCP 600', title: { en: 'Documentary credits & collections', fr: 'Crédits documentaires et encaissements', ar: 'الاعتمادات والتحصيل المستندي' }, badge: 'ICC rules · UCP 600 / URC 522', points: { en: ['A documentary credit is an undertaking by an issuing bank to honour a complying presentation under its terms.', 'Under a documentary collection, banks handle documents and instructions but do not add a payment guarantee.', 'Banks examine documents, not the actual quality or existence of the goods.'], fr: ['Le crédit documentaire engage la banque émettrice à honorer une présentation conforme à ses conditions.', 'Dans une remise documentaire, les banques suivent des instructions mais n’ajoutent pas de garantie de paiement.', 'Les banques examinent les documents, pas la qualité ni l’existence physique des marchandises.'], ar: ['يتعهد البنك المصدر بتنفيذ الاعتماد عند تقديم مستندات مطابقة لشروطه.', 'في التحصيل المستندي تتعامل البنوك مع المستندات والتعليمات دون إضافة ضمان للدفع.', 'تفحص البنوك المستندات، لا جودة البضاعة أو وجودها الفعلي.'] } },
        { acronym: 'SWIFT', title: { en: 'Interbank financial messaging', fr: 'Messagerie financière interbancaire', ar: 'المراسلات المالية بين البنوك' }, badge: 'Belgium · founded 1973', points: { en: ['A secure standardized messaging network used by financial institutions worldwide.', 'MT700 is used to issue a documentary credit; MT103 is a customer credit transfer message.', 'SWIFT transmits messages; it does not itself guarantee payment.'], fr: ['Réseau de messagerie sécurisé et standardisé utilisé par les institutions financières.', 'MT700 sert à émettre un crédit documentaire ; MT103 est un message de virement client.', 'SWIFT transmet des messages, mais ne garantit pas lui-même le paiement.'], ar: ['شبكة مراسلات آمنة وموحدة تستخدمها المؤسسات المالية حول العالم.', 'تستخدم رسالة MT700 لإصدار اعتماد مستندي، ورسالة MT103 للتحويل الائتماني للعملاء.', 'تنقل SWIFT الرسائل لكنها لا تضمن الدفع بحد ذاتها.'] } }
      ],
      steps: [
        { title: { en: 'Buyer requests a credit', fr: 'L’acheteur demande un crédit', ar: 'يطلب المشتري اعتماداً' }, text: { en: 'The buyer asks its issuing bank to issue an irrevocable L/C in the seller’s favour.', fr: 'L’acheteur demande à sa banque émettrice d’ouvrir un crédit documentaire irrévocable en faveur du vendeur.', ar: 'يطلب المشتري من البنك المصدر فتح اعتماد مستندي غير قابل للإلغاء لصالح البائع.' } },
        { title: { en: 'Banks transmit terms', fr: 'Les banques transmettent les conditions', ar: 'تنقل البنوك الشروط' }, text: { en: 'A SWIFT MT700 message communicates the credit terms to the advising bank.', fr: 'Le message SWIFT MT700 transmet les conditions du crédit à la banque notificatrice.', ar: 'تنقل رسالة SWIFT MT700 شروط الاعتماد إلى البنك المبلّغ.' } },
        { title: { en: 'Seller ships & presents', fr: 'Le vendeur expédie et présente', ar: 'يشحن البائع ويقدّم' }, text: { en: 'The seller ships and presents the documents required by the L/C: for example, bill of lading, invoice and insurance document.', fr: 'Le vendeur expédie puis présente les pièces prévues : par exemple, connaissement, facture et document d’assurance.', ar: 'يشحن البائع البضاعة ويقدم المستندات المطلوبة، مثل بوليصة الشحن والفاتورة ووثيقة التأمين.' } },
        { title: { en: 'Documents are examined', fr: 'Les documents sont examinés', ar: 'تُفحص المستندات' }, text: { en: 'Banks check the presentation against the credit and applicable UCP 600 rules; a complying presentation can trigger honour.', fr: 'Les banques vérifient la présentation au regard du crédit et des RUU 600 ; une présentation conforme peut déclencher le paiement.', ar: 'تراجع البنوك المستندات مقابل شروط الاعتماد وقواعد UCP 600؛ وقد تؤدي المطابقة إلى تنفيذ الدفع.' } }
      ],
      note: { en: 'The IMF and World Bank are not the buyer’s payment banks. At the transaction level, distinguish a documentary credit from a documentary collection. UCP 600 applies when the credit expressly incorporates it. SWIFT is a messaging network, not the source of a payment guarantee.', fr: 'Le FMI et la Banque mondiale ne sont pas les banques de paiement de l’acheteur. Au niveau de la transaction, distinguez crédit documentaire et remise documentaire. Les RUU 600 s’appliquent si le crédit les incorpore expressément. SWIFT transmet les messages, sans constituer la garantie.', ar: 'صندوق النقد والبنك الدولي ليسا مصرفي دفع المشتري. ميّزوا بين الاعتماد والتحصيل المستندي. تسري UCP 600 عندما ينص الاعتماد على ذلك. أما SWIFT فهي شبكة رسائل وليست ضماناً للدفع.' }
    },
    {
      id: 'standards', type: 'standards',
      title: { en: 'Standards make goods ready to travel.', fr: 'Les normes préparent les marchandises au voyage.', ar: 'تُهيّئ المعايير البضائع للتداول.' },
      kicker: { en: '07 / Quality, safety & transport', fr: '07 / Qualité, sécurité et transport', ar: '07 / الجودة والسلامة والنقل' },
      intro: { en: 'A shipment is not “ready” because it carries a logo. The buyer checks which product, inspection and transport requirements apply to this contract and destination.', fr: 'Un produit n’est pas « prêt » parce qu’il porte un logo. L’acheteur vérifie quelles exigences produit, inspection et transport s’appliquent au contrat et au pays de destination.', ar: 'لا تصبح الشحنة «جاهزة» لمجرد وجود شعار عليها. يتحقق المشتري من متطلبات المنتج والفحص والنقل التي يفرضها العقد وبلد الوصول.' },
      lens: { en: 'Standards define the target. Inspection supplies evidence. Transport rules protect the journey.', fr: 'Les normes définissent l’objectif. L’inspection apporte des preuves. Les règles de transport protègent le trajet.', ar: 'تحدد المعايير الهدف، ويوفر الفحص الدليل، وتحمي قواعد النقل الرحلة.' },
      phases: [
        { id: 'specify', title: { en: '1. Set the requirement', fr: '1. Définir l’exigence', ar: '1. تحديد المتطلبات' }, description: { en: 'The contract or market rule says what “acceptable” means.', fr: 'Le contrat ou la règle du marché définit ce qui est « conforme ».', ar: 'يحدد العقد أو نظام السوق معنى «المطابقة».' }, organizations: ['ISO'] },
        { id: 'verify', title: { en: '2. Verify the product', fr: '2. Vérifier le produit', ar: '2. فحص المنتج' }, description: { en: 'Tests and inspections provide evidence when required; food rules add a separate safety check.', fr: 'Essais et inspections apportent des preuves s’ils sont exigés ; l’alimentation relève aussi de règles sanitaires.', ar: 'توفر الاختبارات والفحوص أدلة عند طلبها، وتخضع الأغذية أيضاً لمتطلبات السلامة.' }, organizations: ['TIC', 'CODEX'] },
        { id: 'transport', title: { en: '3. Move it safely', fr: '3. Transporter en sécurité', ar: '3. نقلها بأمان' }, description: { en: 'Mode-specific rules govern the vessel, aircraft, cargo and transport document.', fr: 'Des règles propres au mode encadrent le navire, l’avion, la cargaison et le document de transport.', ar: 'تنظم قواعد كل وسيلة السفينة أو الطائرة والبضاعة ووثيقة النقل.' }, organizations: ['IMO', 'IATA'] }
      ],
      applications: {
        ISO: { en: 'For a machinery order, the contract can name the relevant management or container standard. ISO publishes standards; it does not certify the supplier.', fr: 'Pour l’achat d’une machine, le contrat peut préciser la norme de management ou de conteneur pertinente. L’ISO publie des normes ; elle ne certifie pas le fournisseur.', ar: 'في عقد شراء آلة، يمكن تحديد معيار الإدارة أو الحاويات المطلوب. تنشر ISO المعايير لكنها لا تصدّق المورد.' },
        TIC: { en: 'Before production, confirm whether the destination market or contract requires a pre-shipment inspection or Certificate of Conformity. A CoC is not required for every product.', fr: 'Avant la production, vérifier si le marché ou le contrat exige une inspection avant expédition ou un certificat de conformité. Le CoC n’est pas requis pour tous les produits.', ar: 'قبل الإنتاج، تحققوا مما إذا كان سوق الوصول أو العقد يطلب فحصاً قبل الشحن أو شهادة مطابقة. ولا تلزم الشهادة كل المنتجات.' },
        CODEX: { en: 'For food, Codex standards provide international reference points for safety. Importing-country law sets the actual border requirements; Codex is not a product certificate.', fr: 'Pour les aliments, le Codex fournit des références internationales de sécurité. Le droit du pays importateur fixe les exigences à la frontière ; le Codex n’est pas un certificat produit.', ar: 'للأغذية، يوفر الدستور الغذائي مراجع دولية للسلامة. ويحدد قانون بلد الاستيراد متطلبات الحدود؛ وليس Codex شهادة منتج.' },
        IMO: { en: 'For sea freight, SOLAS addresses ship safety and MARPOL pollution prevention. The carrier, not the IMO, issues the bill of lading.', fr: 'En maritime, SOLAS traite de la sécurité des navires et MARPOL de la prévention de la pollution. Le connaissement est émis par le transporteur, pas par l’OMI.', ar: 'في الشحن البحري، تتناول SOLAS سلامة السفن وMARPOL منع التلوث. ويصدر الناقل بوليصة الشحن، لا المنظمة البحرية.' },
        IATA: { en: 'For air freight, check dangerous-goods classification, packaging and labels. The air waybill records carriage; IATA is an airline trade association, not a government regulator.', fr: 'En aérien, vérifier la classification, l’emballage et l’étiquetage des marchandises dangereuses. La lettre aérienne constate le transport ; l’IATA est une association professionnelle, pas un régulateur étatique.', ar: 'في الشحن الجوي، تحققوا من تصنيف البضائع الخطرة وتغليفها ووسمها. تثبت بوليصة الشحن الجوي النقل؛ وIATA اتحاد شركات طيران وليست جهة تنظيم حكومية.' }
      },
      bodies: [
        { acronym: 'ISO', title: { en: 'Standards & interoperability', fr: 'Normes et interopérabilité', ar: 'المعايير والتوافق' }, badge: 'International standards', points: { en: ['ISO 9001 specifies quality-management-system requirements.', 'ISO 14001 addresses environmental-management systems.', 'ISO 668 standardizes dimensions and ratings of freight containers.'], fr: ['ISO 9001 spécifie les exigences des systèmes de management de la qualité.', 'ISO 14001 porte sur les systèmes de management environnemental.', 'ISO 668 normalise les dimensions et caractéristiques des conteneurs de fret.'], ar: ['تحدد ISO 9001 متطلبات أنظمة إدارة الجودة.', 'تتناول ISO 14001 أنظمة الإدارة البيئية.', 'تحدد ISO 668 أبعاد حاويات الشحن وخصائصها.'] } },
        { acronym: 'TIC', title: { en: 'Testing, inspection & certification', fr: 'Essais, inspection et certification', ar: 'الاختبار والفحص والتصديق' }, badge: 'SGS · Bureau Veritas · Intertek · TÜV', points: { en: ['May conduct pre-shipment inspection, laboratory testing and quantity checks.', 'A Certificate of Conformity may be required by a destination market or contract; requirements are product- and country-specific.'], fr: ['Peuvent effectuer une inspection avant expédition, des essais de laboratoire et des contrôles quantitatifs.', 'Un certificat de conformité peut être exigé par le marché ou le contrat ; les obligations dépendent du produit et du pays.'], ar: ['قد تجري فحصاً قبل الشحن واختبارات مخبرية وتحققاً من الكميات.', 'قد تطلب سوق الوجهة أو العقد شهادة مطابقة؛ وتختلف المتطلبات حسب المنتج والبلد.'] } },
        { acronym: 'CODEX', title: { en: 'Food safety', fr: 'Sécurité sanitaire des aliments', ar: 'سلامة الأغذية' }, badge: 'FAO · WHO · established 1963', points: { en: ['Codex Alimentarius develops international food standards and guidelines.', 'Codex texts are relevant references in the WTO SPS framework; national requirements still apply.'], fr: ['Le Codex Alimentarius élabore des normes et lignes directrices alimentaires internationales.', 'Ses textes sont des références dans le cadre SPS de l’OMC ; les exigences nationales restent applicables.'], ar: ['يضع الدستور الغذائي معايير وإرشادات دولية للأغذية.', 'تُعد نصوصه مراجع في إطار اتفاقية SPS لمنظمة التجارة؛ وتظل المتطلبات الوطنية سارية.'] } },
        { acronym: 'IMO', title: { en: 'Maritime safety & environment', fr: 'Sécurité maritime et environnement', ar: 'السلامة البحرية والبيئة' }, badge: 'UN maritime agency · established 1948', points: { en: ['IMO develops conventions and measures including SOLAS and MARPOL.', 'The bill of lading is issued by the carrier; it is not an IMO document.'], fr: ['L’OMI élabore des conventions comme SOLAS et MARPOL.', 'Le connaissement est émis par le transporteur, pas par l’OMI.'], ar: ['تطور المنظمة البحرية الدولية اتفاقيات مثل SOLAS وMARPOL.', 'تصدر بوليصة الشحن عن الناقل، لا عن المنظمة البحرية.'] } },
        { acronym: 'IATA', title: { en: 'Air cargo standards', fr: 'Normes du fret aérien', ar: 'معايير الشحن الجوي' }, badge: 'Airline trade association · founded 1945', points: { en: ['Publishes industry standards, including Dangerous Goods Regulations.', 'The air waybill records the contract of carriage; it is not a document of title.'], fr: ['Publie des normes sectorielles, notamment sur les marchandises dangereuses.', 'La lettre de transport aérien constate le contrat de transport ; ce n’est pas un titre de propriété.'], ar: ['تنشر معايير قطاع الطيران، ومنها لوائح البضائع الخطرة.', 'تثبت بوليصة الشحن الجوي عقد النقل، وليست سند ملكية.'] } }
      ],
      note: { en: 'ISO publishes standards, but does not certify companies. Certification and inspection are carried out by independent organizations where required. Avoid implying that every shipment needs a CoC. The IMO is an intergovernmental UN agency; IATA is an airline trade association.', fr: 'L’ISO publie des normes, mais ne certifie pas les entreprises. Les certifications et inspections sont réalisées par des organismes indépendants lorsqu’elles sont exigées. Un certificat de conformité n’est pas nécessaire pour toute expédition. L’OMI est une agence intergouvernementale de l’ONU ; l’IATA est une association de compagnies aériennes.', ar: 'تنشر ISO المعايير ولا تصدّق الشركات؛ وتُجري جهات مستقلة الفحص أو التصديق عند الحاجة. ولا تحتاج كل شحنة إلى شهادة مطابقة. المنظمة البحرية الدولية وكالة حكومية أممية، بينما IATA اتحاد لشركات الطيران.' }
    },
    {
      id: 'case-study', type: 'case',
      title: { en: 'One machine, six institutional hand-offs.', fr: 'Une machine, six relais institutionnels.', ar: 'آلة واحدة، وست محطات مؤسسية.' },
      kicker: { en: '08 / The Casablanca case', fr: '08 / Le cas de Casablanca', ar: '08 / حالة الدار البيضاء' },
      intro: { en: 'A manufacturer in Casablanca buys a €250,000 industrial CNC machine from Munich. The contract specifies CIF Port of Casablanca, Incoterms® 2020.', fr: 'Une entreprise de Casablanca achète une machine CNC industrielle de 250 000 € à Munich. Le contrat prévoit CIF Port de Casablanca, Incoterms® 2020.', ar: 'تشتري شركة في الدار البيضاء آلة CNC صناعية بقيمة 250 ألف يورو من ميونخ. وينص العقد على CIF ميناء الدار البيضاء، Incoterms® 2020.' },
      route: { from: 'MUNICH · HAMBURG', to: 'CASABLANCA', distance: 'GERMANY → MOROCCO' },
      steps: [
        { title: { en: 'Sale contract & delivery rule', fr: 'Contrat de vente et livraison', ar: 'عقد البيع وشروط التسليم' }, orgs: 'UNCITRAL · CISG · ICC · Incoterms®', detail: { en: 'The parties may choose the 1980 Vienna Convention (CISG), if applicable, for their sale contract. CIF Casablanca means the seller pays carriage and insurance to the named port; risk transfers when the machine is on board in Hamburg.', fr: 'Les parties peuvent choisir la Convention de Vienne de 1980 (CVIM), si elle s’applique. En CIF Casablanca, le vendeur paie transport et assurance jusqu’au port convenu ; le risque passe au chargement à Hambourg.', ar: 'قد تختار الأطراف اتفاقية فيينا لعام 1980 (CISG) إذا انطبقت. في CIF الدار البيضاء يدفع البائع النقل والتأمين حتى الميناء المحدد، بينما تنتقل المخاطر عند التحميل في هامبورغ.' } },
        { title: { en: 'Classification & border treatment', fr: 'Classement et formalités douanières', ar: 'التصنيف والإجراءات الجمركية' }, orgs: 'WCO · Harmonized System · Moroccan Customs', detail: { en: 'The correct HS classification depends on the machine’s specifications and tariff rules. Code 8457.10 covers machining centres for working metal; confirm the national tariff line, origin and current Moroccan duties and taxes before quoting a rate.', fr: 'Le classement dépend des caractéristiques techniques et des règles tarifaires. Le code 8457.10 concerne les centres d’usinage pour le travail des métaux ; vérifier la ligne nationale, l’origine et les droits et taxes marocains en vigueur.', ar: 'يعتمد التصنيف على مواصفات الآلة والقواعد الجمركية. يغطي الرمز 8457.10 مراكز تشغيل المعادن؛ ويجب التحقق من التعريفة الوطنية والمنشأ والرسوم والضرائب المغربية السارية.' } },
        { title: { en: 'Payment security', fr: 'Sécurisation du paiement', ar: 'تأمين الدفع' }, orgs: 'Commercial banks · SWIFT MT700 · ICC UCP 600', detail: { en: 'If agreed in the sale contract, the Moroccan buyer’s bank issues a documentary credit by SWIFT MT700. UCP 600 applies when incorporated into the credit; the seller is paid against a complying presentation, not simply because the goods arrived.', fr: 'Si le contrat le prévoit, la banque de l’acheteur émet un crédit documentaire par SWIFT MT700. Les RUU 600 s’appliquent si elles sont incorporées au crédit ; le paiement dépend de documents conformes, pas de la seule arrivée des biens.', ar: 'إذا نص العقد على ذلك، يصدر بنك المشتري اعتماداً مستندياً برسالة SWIFT MT700. وتسري UCP 600 عند إدراجها في الاعتماد؛ ويُنفذ الدفع مقابل مستندات مطابقة، لا لمجرد وصول البضاعة.' } },
        { title: { en: 'Product quality & conformity', fr: 'Qualité et conformité', ar: 'الجودة والمطابقة' }, orgs: 'ISO · Inspection body · Applicable Moroccan rules', detail: { en: 'A manufacturer may operate an ISO 9001 quality-management system. An inspection body can perform checks if required by the contract or market. Confirm current Moroccan product-conformity rules; inspection is not a universal condition for every machine.', fr: 'Le fabricant peut appliquer un système de management ISO 9001. Un organisme d’inspection intervient si le contrat ou le marché l’exige. Vérifier les règles marocaines en vigueur ; l’inspection n’est pas systématique pour chaque machine.', ar: 'قد يعمل المصنع وفق نظام إدارة الجودة ISO 9001. ويمكن لجهة فحص التحقق من المنتج إذا طلب العقد أو السوق ذلك. يجب التحقق من القواعد المغربية السارية؛ فالفحص ليس إلزامياً لكل آلة.' } },
        { title: { en: 'Container & sea transport', fr: 'Conteneur et transport maritime', ar: 'الحاوية والنقل البحري' }, orgs: 'ISO 668 · IMO SOLAS · Carrier · Bill of Lading', detail: { en: 'The parties choose suitable packing and container equipment. ISO 668 defines container dimensions and ratings; SOLAS requirements apply to ship safety. The carrier issues the bill of lading for the shipment.', fr: 'Les parties choisissent un emballage et un conteneur adaptés. ISO 668 définit les dimensions et caractéristiques des conteneurs ; SOLAS encadre la sécurité des navires. Le transporteur émet le connaissement.', ar: 'تختار الأطراف التغليف والحاوية المناسبة. تحدد ISO 668 أبعاد الحاويات وخصائصها؛ وتنظم SOLAS سلامة السفن. ويصدر الناقل بوليصة الشحن.' } },
        { title: { en: 'Documents, payment & import', fr: 'Documents, paiement et importation', ar: 'المستندات والدفع والاستيراد' }, orgs: 'Banks · Moroccan Customs · PortNet', detail: { en: 'The seller presents the documents required by the credit, commonly the bill of lading, invoice and insurance document. After a complying presentation, the bank honours the credit; the importer completes Moroccan customs formalities and pays applicable import charges.', fr: 'Le vendeur présente les pièces requises, souvent connaissement, facture et assurance. Après une présentation conforme, la banque exécute le crédit ; l’importateur accomplit les formalités douanières marocaines et paie les prélèvements applicables.', ar: 'يقدم البائع المستندات المطلوبة، ومنها عادة بوليصة الشحن والفاتورة ووثيقة التأمين. وبعد مطابقة المستندات ينفذ البنك الاعتماد؛ ويستكمل المستورد الإجراءات الجمركية المغربية ويسدد الرسوم المطبقة.' } }
      ],
      note: { en: 'Bring the four pillars together: contract rules, customs classification, a payment mechanism chosen by the parties, and applicable quality and transport requirements. Use the tariff code as an example, not as legal advice: classification, preferential origin, conformity and tax rates depend on the exact product and current Moroccan rules.', fr: 'Réunissez les quatre piliers : règles du contrat, classement douanier, moyen de paiement choisi par les parties, exigences de conformité et de transport. Le code tarifaire sert d’exemple, pas de conseil juridique : classement, origine préférentielle, conformité et fiscalité dépendent du produit exact et des règles marocaines en vigueur.', ar: 'اجمعوا الركائز الأربع: قواعد العقد والتصنيف الجمركي وآلية الدفع التي تختارها الأطراف ومتطلبات المطابقة والنقل. استخدموا الرمز الجمركي مثالاً لا استشارة قانونية؛ فالتصنيف والمنشأ التفضيلي والمطابقة والضرائب تعتمد على المنتج المحدد والقواعد المغربية الحالية.' }
    }
  ]
};

const historyTimeline = tradeDeck.chapters.splice(1, 1)[0];
const historyStories = historyTimeline.stories;
delete historyTimeline.stories;
tradeDeck.chapters.splice(1, 0, {
  id: 'history-carousel',
  type: 'history-carousel',
  title: { en: 'Trade remembers the road. War redraws it.', fr: 'Le commerce garde la mémoire des routes. La guerre les brise.', ar: 'تحفظ التجارة ذاكرة الطرق، وتعيد الحروب رسمها.' },
  kicker: { en: '02 / Routes, rupture, rebuilding', fr: '02 / Routes, rupture, reconstruction', ar: '02 / طرق وانقطاع وإعمار' },
  intro: { en: 'Three scenes reveal how exchange outlasted empires, how war fractured it, and why new institutions followed.', fr: 'Trois scènes montrent comment les échanges ont traversé les empires, comment les guerres les ont brisés et pourquoi de nouvelles institutions ont suivi.', ar: 'ثلاث محطات تروي كيف تجاوزت التجارة الإمبراطوريات، وكيف قطعتها الحروب، ولماذا ظهرت مؤسسات جديدة.' },
  stories: historyStories,
  note: { en: 'Swipe through these three scenes, then continue to the timeline. The ICC was founded in 1919 after the First World War. The post-1945 institutions responded to a different global crisis.', fr: 'Faites défiler ces trois scènes, puis poursuivez avec la chronologie. La CCI est fondée en 1919 après la Première Guerre mondiale. Les institutions d’après 1945 répondent à une autre crise mondiale.', ar: 'انتقلوا بين المشاهد الثلاثة ثم تابعوا إلى الخط الزمني. تأسست غرفة التجارة عام 1919 بعد الحرب العالمية الأولى، أما مؤسسات ما بعد 1945 فاستجابت لأزمة عالمية أخرى.' }
}, historyTimeline);

export const presentationLibrary = [tradeDeck];