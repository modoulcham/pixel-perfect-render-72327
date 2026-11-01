import toilet from "@/assets/work/toilet-and-basin.jpg.asset.json";
import waterLines from "@/assets/work/water-lines-in-wall.jpg.asset.json";
import workshop from "@/assets/work/plumbing-workshop.jpg.asset.json";
import mounts from "@/assets/work/bathroom-pipe-mounts.jpg.asset.json";
import valves from "@/assets/work/technical-room-valves.jpg.asset.json";
import shower from "@/assets/work/shower-mixer.jpg.asset.json";
import sinks from "@/assets/work/double-sink-installation.jpg.asset.json";
import copper from "@/assets/work/copper-pipework.jpg.asset.json";
import inProgress from "@/assets/work/sink-pipework-in-progress.jpg.asset.json";

export const featuredWorkPhoto = shower.url;
export const aboutWorkPhoto = copper.url;

export const workPhotoSources = [
  { url: shower.url, category: "bathroom", fi: "Suihkusekoitin ja pintaputket", en: "Shower mixer and exposed pipework" },
  { url: sinks.url, category: "installations", fi: "Kahden pesualtaan asennus", en: "Double sink installation" },
  { url: copper.url, category: "pipes", fi: "Kupariputket ja sulkuventtiilit", en: "Copper pipework and shut-off valves" },
  { url: toilet.url, category: "bathroom", fi: "WC ja pesuallas", en: "Toilet and washbasin" },
  { url: waterLines.url, category: "pipes", fi: "Vesijohdot seinärakenteessa", en: "Water lines inside a wall" },
  { url: valves.url, category: "pipes", fi: "Teknisen tilan putket ja venttiilit", en: "Technical room pipework and valves" },
  { url: mounts.url, category: "bathroom", fi: "Kylpyhuoneen putkikannakkeet", en: "Bathroom pipe mounting brackets" },
  { url: inProgress.url, category: "installations", fi: "Pesualtaan putkiasennus työn alla", en: "Sink pipework in progress" },
  { url: workshop.url, category: "installations", fi: "Putkityökalut työmaalla", en: "Plumbing tools on site" },
];