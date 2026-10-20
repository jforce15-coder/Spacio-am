window.KIT_DATA = {
  owner: { name: "Ana Morales", email: "ana@spacioam.com", initials: "AM" },
  months: [
    { value: "2026-08", label: "Agosto 2026" },
    { value: "2026-07", label: "Julio 2026" },
    { value: "2026-06", label: "Junio 2026" }
  ],
  props: [
    { value: "all", label: "Todas las propiedades", sub: "3 propiedades" },
    { value: "luz", label: "Casa de la Luz Dorada", sub: "Antigua Guatemala" },
    { value: "suite", label: "Suite Editorial nº 04", sub: "Ciudad de Guatemala" },
    { value: "nook", label: "Nook Antigua", sub: "Antigua Guatemala" }
  ],
  photos: { all: null, luz: "living.jpeg", suite: "bedroom.jpeg", nook: "nook.jpeg" },
  locations: { luz: "Antigua Guatemala", suite: "Ciudad de Guatemala", nook: "Antigua Guatemala" },
  kpis: {
    "2026-08": { neto: 48320, bruto: 61900, occ: 87, adr: 640, estadias: 19, noches: 232, fee: 9285,
      d: { neto: 12.4, bruto: 9.8, occ: -3.1, adr: 4.8, estadias: 5.6, noches: 2.2 } },
    "2026-07": { neto: 43000, bruto: 56400, occ: 90, adr: 611, estadias: 18, noches: 227, fee: 8460,
      d: { neto: 7.2, bruto: 5.1, occ: 4.4, adr: -1.2, estadias: 0, noches: 3.1 } },
    "2026-06": { neto: 39000, bruto: 52100, occ: 85, adr: 598, estadias: 18, noches: 220, fee: 7815,
      d: { neto: -1.8, bruto: 2.4, occ: -2.0, adr: 1.1, estadias: -5.2, noches: -1.4 } }
  },
  hist: {
    labels: ["Mar", "Abr", "May", "Jun", "Jul", "Ago"],
    bruto: [48200, 51400, 49800, 52100, 56400, 61900],
    neto:  [36800, 39900, 38100, 39000, 43000, 48320],
    occ:   [74, 80, 77, 85, 90, 87]
  },
  rows: [
    { p: "Casa de la Luz Dorada", z: "Antigua", neto: 18420, occ: 91, adr: 705, st: "success", stl: "Al día" },
    { p: "Suite Editorial nº 04", z: "Ciudad", neto: 12180, occ: 84, adr: 588, st: "attention", stl: "Falta factura" },
    { p: "Nook Antigua", z: "Antigua", neto: 9640, occ: 78, adr: 512, st: "success", stl: "Al día" }
  ]
};
