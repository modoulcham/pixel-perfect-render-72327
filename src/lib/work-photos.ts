import toilet from "@/assets/work/toilet-and-basin.jpg";
import waterLines from "@/assets/work/water-lines-in-wall.jpg";
import workshop from "@/assets/work/plumbing-workshop.jpg";
import mounts from "@/assets/work/bathroom-pipe-mounts.jpg";
import valves from "@/assets/work/technical-room-valves.jpg";
import shower from "@/assets/work/shower-mixer.jpg";
import sinks from "@/assets/work/double-sink-installation.jpg";
import copper from "@/assets/work/copper-pipework.jpg";
import inProgress from "@/assets/work/sink-pipework-in-progress.jpg";
import roughIn from "@/assets/work/bathroom-rough-in-brackets.jpg";
import welding from "@/assets/work/industrial-pipe-welding.jpg";
import brazing from "@/assets/work/momodou-copper-brazing.jpg";
import thermo from "@/assets/work/thermostatic-shower-install.jpg";
import greenBath from "@/assets/work/green-bathroom-chrome-pipes.jpg";
import stainless from "@/assets/work/stainless-valve-assembly.jpg";
import manifolds from "@/assets/work/technical-room-manifolds.jpg";
import brazingClose from "@/assets/work/copper-brazing-closeup.jpg";
import wc from "@/assets/work/wc-and-washbasin.jpg";
import basinGreen from "@/assets/work/basin-installation-green-tiles.jpg";
import underPipes from "@/assets/work/welding-under-pipework.jpg";
import team from "@/assets/work/team-carrying-steel-pipe.jpg";
import inWall from "@/assets/work/in-wall-pipe-rough-in.jpg";
import prefab from "@/assets/work/pipe-prefabrication.jpg";
import filters from "@/assets/work/water-filter-vessels.jpg";
import distribution from "@/assets/work/steel-copper-distribution.jpg";
import winter from "@/assets/work/momodou-winter-site.jpg";
import steelSink from "@/assets/work/stainless-sink-by-doorway.jpg";
import workbench from "@/assets/work/basement-site-workbench.jpg";
import labSite from "@/assets/work/momodou-lab-site.jpg";
import floorHeating from "@/assets/work/underfloor-heating-manifold.jpg";
import flange from "@/assets/work/flange-assembly-vise.jpg";
import oras from "@/assets/work/oras-fixtures-pickup.jpg";
import pipeStand from "@/assets/work/steel-pipe-welding-stand.jpg";

// 640px WebP copies for grids; the full JPEGs above are used in the lightbox and hero.
import toiletThumb from "@/assets/work/thumbs/toilet-and-basin.webp";
import waterLinesThumb from "@/assets/work/thumbs/water-lines-in-wall.webp";
import workshopThumb from "@/assets/work/thumbs/plumbing-workshop.webp";
import mountsThumb from "@/assets/work/thumbs/bathroom-pipe-mounts.webp";
import valvesThumb from "@/assets/work/thumbs/technical-room-valves.webp";
import showerThumb from "@/assets/work/thumbs/shower-mixer.webp";
import sinksThumb from "@/assets/work/thumbs/double-sink-installation.webp";
import copperThumb from "@/assets/work/thumbs/copper-pipework.webp";
import inProgressThumb from "@/assets/work/thumbs/sink-pipework-in-progress.webp";
import roughInThumb from "@/assets/work/thumbs/bathroom-rough-in-brackets.webp";
import weldingThumb from "@/assets/work/thumbs/industrial-pipe-welding.webp";
import brazingThumb from "@/assets/work/thumbs/momodou-copper-brazing.webp";
import thermoThumb from "@/assets/work/thumbs/thermostatic-shower-install.webp";
import greenBathThumb from "@/assets/work/thumbs/green-bathroom-chrome-pipes.webp";
import stainlessThumb from "@/assets/work/thumbs/stainless-valve-assembly.webp";
import manifoldsThumb from "@/assets/work/thumbs/technical-room-manifolds.webp";
import brazingCloseThumb from "@/assets/work/thumbs/copper-brazing-closeup.webp";
import wcThumb from "@/assets/work/thumbs/wc-and-washbasin.webp";
import basinGreenThumb from "@/assets/work/thumbs/basin-installation-green-tiles.webp";
import underPipesThumb from "@/assets/work/thumbs/welding-under-pipework.webp";
import teamThumb from "@/assets/work/thumbs/team-carrying-steel-pipe.webp";
import inWallThumb from "@/assets/work/thumbs/in-wall-pipe-rough-in.webp";
import prefabThumb from "@/assets/work/thumbs/pipe-prefabrication.webp";
import filtersThumb from "@/assets/work/thumbs/water-filter-vessels.webp";
import distributionThumb from "@/assets/work/thumbs/steel-copper-distribution.webp";
import winterThumb from "@/assets/work/thumbs/momodou-winter-site.webp";
import steelSinkThumb from "@/assets/work/thumbs/stainless-sink-by-doorway.webp";
import workbenchThumb from "@/assets/work/thumbs/basement-site-workbench.webp";
import labSiteThumb from "@/assets/work/thumbs/momodou-lab-site.webp";
import floorHeatingThumb from "@/assets/work/thumbs/underfloor-heating-manifold.webp";
import flangeThumb from "@/assets/work/thumbs/flange-assembly-vise.webp";
import orasThumb from "@/assets/work/thumbs/oras-fixtures-pickup.webp";
import pipeStandThumb from "@/assets/work/thumbs/steel-pipe-welding-stand.webp";

export const featuredWorkPhoto = team;
/** Absolute preview image for social shares, once `site.url` is set. */
export const shareImage = (siteUrl: string | null) =>
  siteUrl ? new URL(team, siteUrl).href : null;
export const aboutWorkPhoto = brazing;

export const workPhotoSources = [
  // Finished, tidy work first; on-site and behind-the-scenes shots last.
  {
    url: welding,
    thumb: weldingThumb,
    featured: true,
    category: "pipes",
    fi: "Teräsputken hitsaus",
    en: "Welding large steel pipework",
    fr: "Soudure d'une grosse tuyauterie en acier",
    ru: "Сварка крупных стальных трубопроводов",
  },
  {
    url: shower,
    thumb: showerThumb,
    featured: true,
    category: "bathroom",
    fi: "Suihkusekoitin ja pintaputket",
    en: "Shower mixer and exposed pipework",
    fr: "Mitigeur de douche et tuyauterie apparente",
    ru: "Смеситель для душа и открытая разводка",
  },
  {
    url: greenBath,
    thumb: greenBathThumb,
    featured: true,
    category: "bathroom",
    fi: "Kromatut pintaputket ja kivipesuallas",
    en: "Chrome surface pipes and stone basin",
    fr: "Tuyaux chromés apparents et vasque en pierre",
    ru: "Хромированные трубы и каменная раковина",
  },
  {
    url: manifolds,
    thumb: manifoldsThumb,
    featured: true,
    category: "pipes",
    fi: "Teknisen tilan jakotukit",
    en: "Technical room distribution manifolds",
    fr: "Collecteurs de distribution en local technique",
    ru: "Распределительные коллекторы в техническом помещении",
  },
  {
    url: thermo,
    thumb: thermoThumb,
    featured: true,
    category: "bathroom",
    fi: "Termostaattisuihkun asennus",
    en: "Thermostatic shower installation",
    fr: "Installation d'une douche thermostatique",
    ru: "Установка термостатического душа",
  },
  {
    url: stainless,
    thumb: stainlessThumb,
    featured: true,
    category: "maintenance",
    fi: "Ruostumattomat palloventtiilit",
    en: "Stainless ball valve assembly",
    fr: "Vannes à bille en inox",
    ru: "Шаровые краны из нержавеющей стали",
  },
  {
    url: brazing,
    thumb: brazingThumb,
    category: "pipes",
    fi: "Kupariputken juottaminen työmaalla",
    en: "Brazing copper pipework on site",
    fr: "Brasage de tuyauterie en cuivre sur chantier",
    ru: "Пайка медных труб на объекте",
  },
  {
    url: copper,
    thumb: copperThumb,
    category: "maintenance",
    fi: "Kupariputket ja sulkuventtiilit",
    en: "Copper pipework and shut-off valves",
    fr: "Tuyauterie en cuivre et vannes d'arrêt",
    ru: "Медные трубы и запорные краны",
  },
  {
    url: filters,
    thumb: filtersThumb,
    category: "maintenance",
    fi: "Vedensuodattimet ja sulkuventtiili",
    en: "Water filter vessels and gate valve",
    fr: "Filtres à eau et vanne à opercule",
    ru: "Корпуса водяных фильтров и задвижка",
  },
  {
    url: distribution,
    thumb: distributionThumb,
    category: "pipes",
    fi: "Teräs- ja kupariputkien linjat",
    en: "Steel and copper distribution lines",
    fr: "Réseaux de distribution en acier et en cuivre",
    ru: "Стальные и медные распределительные линии",
  },
  {
    url: floorHeating,
    thumb: floorHeatingThumb,
    category: "maintenance",
    fi: "Lattialämmityksen jakotukki",
    en: "Underfloor heating manifold",
    fr: "Collecteur de plancher chauffant",
    ru: "Коллектор тёплого пола",
  },
  {
    url: valves,
    thumb: valvesThumb,
    category: "maintenance",
    fi: "Teknisen tilan putket ja venttiilit",
    en: "Technical room pipework and valves",
    fr: "Tuyauterie et vannes en local technique",
    ru: "Трубы и вентили в техническом помещении",
  },
  {
    url: basinGreen,
    thumb: basinGreenThumb,
    category: "bathroom",
    fi: "Pesualtaan asennus",
    en: "Washbasin installation",
    fr: "Pose d'un lavabo",
    ru: "Установка раковины",
  },
  {
    url: sinks,
    thumb: sinksThumb,
    category: "kitchen",
    fi: "Kahden pesualtaan asennus",
    en: "Double sink installation",
    fr: "Pose de deux éviers",
    ru: "Установка двух моек",
  },
  {
    url: steelSink,
    thumb: steelSinkThumb,
    category: "kitchen",
    fi: "Teräksinen käsienpesuallas ja pintaputket",
    en: "Stainless hand-wash sink with surface pipework",
    fr: "Lave-mains en inox avec tuyauterie apparente",
    ru: "Раковина из нержавейки с открытой разводкой",
  },
  {
    url: team,
    thumb: teamThumb,
    category: "installations",
    fi: "Tiimityötä työmaalla",
    en: "Teamwork on site",
    fr: "Travail d'équipe sur le chantier",
    ru: "Командная работа на объекте",
  },
  {
    url: underPipes,
    thumb: underPipesThumb,
    category: "pipes",
    fi: "Hitsausta putkiston alla",
    en: "Welding beneath the pipework",
    fr: "Soudure sous la tuyauterie",
    ru: "Сварка под трубопроводом",
  },
  {
    url: pipeStand,
    thumb: pipeStandThumb,
    category: "pipes",
    fi: "Teräsputken hitsaus pukilla",
    en: "Welding steel pipe on a pipe stand",
    fr: "Soudure d'un tube en acier sur servante",
    ru: "Сварка стальной трубы на опоре",
  },
  {
    url: flange,
    thumb: flangeThumb,
    category: "maintenance",
    fi: "Laipan kokoaminen ruuvipenkissä",
    en: "Assembling a flange in the vise",
    fr: "Montage d'une bride dans l'étau",
    ru: "Сборка фланца в тисках",
  },
  {
    url: brazingClose,
    thumb: brazingCloseThumb,
    category: "pipes",
    fi: "Juotos lähikuvassa",
    en: "Brazing close-up",
    fr: "Brasage en gros plan",
    ru: "Пайка крупным планом",
  },
  {
    url: prefab,
    thumb: prefabThumb,
    category: "installations",
    fi: "Putkien esivalmistelu",
    en: "Pipe prefabrication",
    fr: "Préfabrication de tuyauterie",
    ru: "Предварительная сборка труб",
  },
  {
    url: inWall,
    thumb: inWallThumb,
    category: "installations",
    fi: "Putkivedot seinärakenteessa",
    en: "In-wall pipe rough-in",
    fr: "Pose de tuyauterie dans la cloison",
    ru: "Прокладка труб в стене",
  },
  {
    url: waterLines,
    thumb: waterLinesThumb,
    category: "pipes",
    fi: "Vesijohdot seinärakenteessa",
    en: "Water lines inside a wall",
    fr: "Conduites d'eau dans une cloison",
    ru: "Водопроводные трубы в стене",
  },
  {
    url: roughIn,
    thumb: roughInThumb,
    category: "bathroom",
    fi: "Kylpyhuoneen putkivedot",
    en: "Bathroom pipe rough-in",
    fr: "Pose de tuyauterie en salle de bain",
    ru: "Черновая разводка труб в ванной",
  },
  {
    url: mounts,
    thumb: mountsThumb,
    category: "bathroom",
    fi: "Kylpyhuoneen putkikannakkeet",
    en: "Bathroom pipe mounting brackets",
    fr: "Supports de tuyauterie en salle de bain",
    ru: "Крепления труб в ванной",
  },
  {
    url: inProgress,
    thumb: inProgressThumb,
    category: "kitchen",
    fi: "Pesualtaan putkiasennus työn alla",
    en: "Sink pipework in progress",
    fr: "Raccordement d'éviers en cours",
    ru: "Подключение моек в процессе",
  },
  {
    url: wc,
    thumb: wcThumb,
    category: "bathroom",
    fi: "WC, bidee-suihku ja pesuallas",
    en: "WC, bidet shower and washbasin",
    fr: "WC, douchette bidet et lavabo",
    ru: "Унитаз, гигиенический душ и раковина",
  },
  {
    url: toilet,
    thumb: toiletThumb,
    category: "bathroom",
    fi: "WC ja pesuallas",
    en: "Toilet and washbasin",
    fr: "WC et lavabo",
    ru: "Унитаз и раковина",
  },
  {
    url: winter,
    thumb: winterThumb,
    category: "installations",
    fi: "Talvityömaa",
    en: "Winter construction site",
    fr: "Chantier en hiver",
    ru: "Зимняя стройплощадка",
  },
  {
    url: labSite,
    thumb: labSiteThumb,
    category: "installations",
    fi: "Momodou laboratoriotyömaalla",
    en: "Momodou on a laboratory site",
    fr: "Momodou sur un chantier de laboratoire",
    ru: "Момоду на объекте-лаборатории",
  },
  {
    url: workshop,
    thumb: workshopThumb,
    category: "installations",
    fi: "Putkityökalut työmaalla",
    en: "Plumbing tools on site",
    fr: "Outils de plomberie sur le chantier",
    ru: "Сантехнический инструмент на объекте",
  },
  {
    url: workbench,
    thumb: workbenchThumb,
    category: "installations",
    fi: "Työpiste kellarityömaalla",
    en: "Pipe workbench on a basement site",
    fr: "Établi de tuyauterie sur un chantier en sous-sol",
    ru: "Верстак для труб на подвальном объекте",
  },
  {
    url: oras,
    thumb: orasThumb,
    category: "bathroom",
    fi: "Oras-hanojen ja suihkujen nouto",
    en: "Picking up Oras taps and shower sets",
    fr: "Retrait de robinets et douches Oras",
    ru: "Получение смесителей и душевых комплектов Oras",
  },
];
