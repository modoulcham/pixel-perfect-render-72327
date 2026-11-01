import toilet from "@/assets/work/toilet-and-basin.jpg.asset.json";
import waterLines from "@/assets/work/water-lines-in-wall.jpg.asset.json";
import workshop from "@/assets/work/plumbing-workshop.jpg.asset.json";
import mounts from "@/assets/work/bathroom-pipe-mounts.jpg.asset.json";
import valves from "@/assets/work/technical-room-valves.jpg.asset.json";
import shower from "@/assets/work/shower-mixer.jpg.asset.json";
import sinks from "@/assets/work/double-sink-installation.jpg.asset.json";
import copper from "@/assets/work/copper-pipework.jpg.asset.json";
import inProgress from "@/assets/work/sink-pipework-in-progress.jpg.asset.json";
import roughIn from "@/assets/work/bathroom-rough-in-brackets.jpg.asset.json";
import welding from "@/assets/work/industrial-pipe-welding.jpg.asset.json";
import brazing from "@/assets/work/momodou-copper-brazing.jpg.asset.json";
import thermo from "@/assets/work/thermostatic-shower-install.jpg.asset.json";
import greenBath from "@/assets/work/green-bathroom-chrome-pipes.jpg.asset.json";
import stainless from "@/assets/work/stainless-valve-assembly.jpg.asset.json";
import manifolds from "@/assets/work/technical-room-manifolds.jpg.asset.json";
import brazingClose from "@/assets/work/copper-brazing-closeup.jpg.asset.json";
import wc from "@/assets/work/wc-and-washbasin.jpg.asset.json";
import basinGreen from "@/assets/work/basin-installation-green-tiles.jpg.asset.json";
import underPipes from "@/assets/work/welding-under-pipework.jpg.asset.json";
import team from "@/assets/work/team-carrying-steel-pipe.jpg.asset.json";
import inWall from "@/assets/work/in-wall-pipe-rough-in.jpg.asset.json";
import prefab from "@/assets/work/pipe-prefabrication.jpg.asset.json";
import filters from "@/assets/work/water-filter-vessels.jpg.asset.json";
import distribution from "@/assets/work/steel-copper-distribution.jpg.asset.json";
import winter from "@/assets/work/momodou-winter-site.jpg.asset.json";

export const featuredWorkPhoto = shower.url;
export const aboutWorkPhoto = brazing.url;

export const workPhotoSources = [
  { url: brazing.url, category: "pipes", fi: "Kupariputken juottaminen työmaalla", en: "Brazing copper pipework on site" },
  { url: shower.url, category: "bathroom", fi: "Suihkusekoitin ja pintaputket", en: "Shower mixer and exposed pipework" },
  { url: manifolds.url, category: "pipes", fi: "Teknisen tilan jakotukit", en: "Technical room distribution manifolds" },
  { url: greenBath.url, category: "bathroom", fi: "Kromatut pintaputket ja kivipesuallas", en: "Chrome surface pipes and stone basin" },
  { url: welding.url, category: "pipes", fi: "Teräsputken hitsaus", en: "Welding large steel pipework" },
  { url: team.url, category: "installations", fi: "Tiimityötä työmaalla", en: "Teamwork on site" },
  { url: sinks.url, category: "installations", fi: "Kahden pesualtaan asennus", en: "Double sink installation" },
  { url: filters.url, category: "pipes", fi: "Vedensuodattimet ja sulkuventtiili", en: "Water filter vessels and gate valve" },
  { url: thermo.url, category: "bathroom", fi: "Termostaattisuihkun asennus", en: "Thermostatic shower installation" },
  { url: stainless.url, category: "pipes", fi: "Ruostumattomat palloventtiilit", en: "Stainless ball valve assembly" },
  { url: copper.url, category: "pipes", fi: "Kupariputket ja sulkuventtiilit", en: "Copper pipework and shut-off valves" },
  { url: basinGreen.url, category: "bathroom", fi: "Pesualtaan asennus", en: "Washbasin installation" },
  { url: distribution.url, category: "pipes", fi: "Teräs- ja kupariputkien linjat", en: "Steel and copper distribution lines" },
  { url: winter.url, category: "installations", fi: "Talvityömaa", en: "Winter construction site" },
  { url: wc.url, category: "bathroom", fi: "WC, bidee-suihku ja pesuallas", en: "WC, bidet shower and washbasin" },
  { url: underPipes.url, category: "pipes", fi: "Hitsausta putkiston alla", en: "Welding beneath the pipework" },
  { url: roughIn.url, category: "bathroom", fi: "Kylpyhuoneen putkivedot", en: "Bathroom pipe rough-in" },
  { url: prefab.url, category: "installations", fi: "Putkien esivalmistelu", en: "Pipe prefabrication" },
  { url: inWall.url, category: "installations", fi: "Putkivedot seinärakenteessa", en: "In-wall pipe rough-in" },
  { url: brazingClose.url, category: "pipes", fi: "Juotos lähikuvassa", en: "Brazing close-up" },
  { url: toilet.url, category: "bathroom", fi: "WC ja pesuallas", en: "Toilet and washbasin" },
  { url: waterLines.url, category: "pipes", fi: "Vesijohdot seinärakenteessa", en: "Water lines inside a wall" },
  { url: valves.url, category: "pipes", fi: "Teknisen tilan putket ja venttiilit", en: "Technical room pipework and valves" },
  { url: mounts.url, category: "bathroom", fi: "Kylpyhuoneen putkikannakkeet", en: "Bathroom pipe mounting brackets" },
  { url: inProgress.url, category: "installations", fi: "Pesualtaan putkiasennus työn alla", en: "Sink pipework in progress" },
  { url: workshop.url, category: "installations", fi: "Putkityökalut työmaalla", en: "Plumbing tools on site" },
];
