class Cd {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.duration = "";
  }
  // Getter
  get getDuration() {
    return this.duration;
  }
  // Setter
  set setDuration(dur) {
    this.duration = dur;
  }
}

const song = new Cd("Srce", "EKV");
song.setDuration = 180;
console.log("Trajanje pjesme je", song.getDuration, "sekundi");
console.log(song);
song.duration = 5000;
console.log(song);


const song_2 = new Cd("Ena", "Haustor");
song_2.setDuration = 185;
console.log(song_2);

//meni su ovi geteri i seteri totalna glupost... ne vidim svrhu... po cemu su razliciti od neke obicne metode koja bi radila isto osim kljucnih rijeci "get" i "set"...
//opet se moze pristupiti atributima rucno i mijenjati ih po zelji, isto kao i putem settera...