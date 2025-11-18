const cvijece = [
  { id: 1, naziv: "Suncokret", latNaziv: "Helianthus annuus", cijena: 1.30, kolicina: 5 },
  { id: 2, naziv: "Bijeli ljiljan", latNaziv: "Lilium candidum", cijena: 2.00, kolicina: 4 },
  { id: 3, naziv: "Tulipan", latNaziv: "Tulipa gesneriana", cijena: 0.50, kolicina: 15 },
  { id: 4, naziv: "Ruža", latNaziv: "Rosa", cijena: 2.50, kolicina: 2 },
  { id: 5, naziv: "Lavanda", latNaziv: "Lavandula angustifolia", cijena: 1.50, kolicina: 10 },
  { id: 6, naziv: "Hibiskus", latNaziv: "Hibiscus rosa-sinensis", cijena: 1.00, kolicina: 20 },
  { id: 7, naziv: "Tratinčica", latNaziv: "Bellis perennis", cijena: 0.80, kolicina: 25 },
  { id: 8, naziv: "Gerber", latNaziv: "Gerbera jamesonii", cijena: 1.20, kolicina: 12 },
  { id: 9, naziv: "Orhideja", latNaziv: "Orchis italica", cijena: 3.00, kolicina: 6 },
  { id: 10, naziv: "Zumbul", latNaziv: "Hyacinthus orientalis", cijena: 1.10, kolicina: 9 }
];

const oprema = [
  { id: 1, naziv: "Vrtne rukavice", cijena: 1.00, kolicina: 5 },
  { id: 2, naziv: "Zaštitna mreža protiv insekata 65x220 cm", cijena: 0.50, kolicina: 8 },
  { id: 3, naziv: "Hrana za biljke A+B", cijena: 5.00, kolicina: 3 },
  { id: 4, naziv: "Sirkova metla S", cijena: 0.50, kolicina: 9 },
  { id: 5, naziv: "Plastična kanta 10L", cijena: 2.00, kolicina: 2 },
  { id: 6, naziv: "Vrtno crijevo 15m", cijena: 6.50, kolicina: 5 },
  { id: 7, naziv: "Ručna lopatica za sadnju", cijena: 1.20, kolicina: 6 },
  { id: 8, naziv: "Set za zalijevanje (prskalica + crijevo)", cijena: 8.00, kolicina: 7 },
  { id: 9, naziv: "Zemlja za cvijeće 10kg", cijena: 3.50, kolicina: 2},
  { id: 10, naziv: "Keramička posuda za cvijeće", cijena: 4.00, kolicina: 3 }
];

const posude = [
  { id: 1, naziv: "Keramička posuda s uzorkom", promjer: 15, cijena: 3.50, boja: "bijela", kolicina: 10 },
  { id: 2, naziv: "Plastična posuda za cvijeće", promjer: 20, cijena: 2.00, boja: "zelena", kolicina: 5 },
  { id: 3, naziv: "Glinena tegla klasična", promjer: 25, cijena: 4.50, boja: "terakota", kolicina: 8 },
  { id: 4, naziv: "Metalna posuda s ručkama", promjer: 18, cijena: 5.00, boja: "siva", kolicina: 3 },
  { id: 5, naziv: "Staklena mini posuda", promjer: 10, cijena: 1.80, boja: "prozirna", kolicina: 9 },
  { id: 6, naziv: "Betonska dekorativna posuda", promjer: 22, cijena: 6.00, boja: "siva", kolicina: 10 },
  { id: 7, naziv: "Drvena posuda s postoljem", promjer: 30, cijena: 8.00, boja: "svijetlosmeđa", kolicina: 12 },
  { id: 8, naziv: "Keramička viseća posuda", promjer: 16, cijena: 4.20, boja: "plava", kolicina: 4 },
  { id: 9, naziv: "Plastična balkonska posuda", promjer: 40, cijena: 3.00, boja: "tamnosmeđa", kolicina: 5 },
  { id: 10, naziv: "Tegla s automatskim zalijevanjem", promjer: 25, cijena: 7.50, boja: "crna", kolicina: 9 }
];

module.exports = { cvijece, oprema, posude }