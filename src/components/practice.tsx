type FileTypes = "mp3" | "mp4" | "pdf" | "gif" | "jpeg" | "mkv";

type ExtensionTypes = "doc" | "txt" | "xml" | "mp3" | "mp4" | "pdf" | "css";

interface IExtensionTypes {
  fileType: "doc" | "txt" | "xml" | "mp3" | "mp4" | "pdf" | "css";
}

type MediaTypes = FileTypes & ExtensionTypes;

interface IMediaTypes extends IExtensionTypes {
  fileType: "mp3" | "mp4";
}

type FilterMediaTypes<T> = T extends "mp3" | "mp4" ? T : never;
type MediaFileTypes = FilterMediaTypes<FileTypes>;

const MediaFile: MediaFileTypes = "pdf ";

type PlayFile = {
  filename: string;
  play: () => void;
};

type Song = PlayFile & {
  type: "mp3";
};

type ShortClip = {
  filename: string;
  type: "gif";
  play: () => void;
};

type VideoClip = {
  filename: string;
  type: "mp4" | "mkv";
  play: () => void;
};

type CoverArt = {
  filename: string;
  type: "jpeg";
  move: () => void;
};

type Receipt = {
  filename: string;
  type: "pdf";
  download: () => void;
};

const song: Song = {
  filename: "OverDem All",
  type: "mp3",
  play() {
    console.log("is playing ....");
  },
};

const receipt: Receipt = {
  filename: "Customer Printout",
  type: "pdf",
  download() {
    console.log("downloading customer printout ....");
  },
};

type PlayerFile = Song | ShortClip | VideoClip | CoverArt | Receipt;

type playable<T> = T extends { play: () => void } ? T : never;

function play(file: playable<PlayerFile>) {
  file.play();
}

play(song);
play(receipt);

//Generics

function getArray<T>(items: T[]): T[] {
  return [].concat<T>(items);
}

const numArray = getArray<number>([1, 2, 3, 4, 5, 6, 7, 8]);
const strArray = getArray<string>(["victor", "oyeleke", "oluwatobi"]);

strArray.push("Aduragbemi");
numArray.push(5);

function calculator(val: number | string): string | number {
  if (typeof val === "string") {
    return val;
  }
  return val;
}

calculator(5);
