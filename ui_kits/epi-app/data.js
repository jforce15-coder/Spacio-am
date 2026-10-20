window.EPI_DATA = {
  user: { name: "Marvin Coc", role: "Supervisor · Antigua", initials: "MC" },
  month: { year: 2026, month: 7, today: 14 },
  dayStates: { 3:"success", 5:"success", 9:"warning", 12:"attention", 14:"info", 17:"pending", 18:"success", 22:"error", 26:"warning", 29:"success" },
  jobs: [
    { id:1, hora:"07:30", prop:"Z1 - Centro Vivo - 1107", zona:"Zona 1", cat:"limpieza-tradicional", tecnico:"Jackeline Ruano", monto:75, st:"pending", stl:"Pendiente", nota:"Limpieza tradicional — Z1 - Centro Vivo - 1107" },
    { id:2, hora:"09:00", prop:"Z13 - Narama - 623", zona:"Zona 13", cat:"limpieza-tradicional", tecnico:"Joselyn Sian", monto:75, st:"pending", stl:"Pendiente", nota:"Limpieza tradicional — Z13 - Narama - 623" },
    { id:3, hora:"10:15", prop:"Z2 - Baldone - 1103", zona:"Zona 2", cat:"cancelacion", tecnico:"Flor Samayoa", monto:38, st:"attention", stl:"Cancelado", nota:"Limpieza cancelada por la administración a las 10:52 am — se paga media tarifa" },
    { id:4, hora:"12:00", prop:"Z2 - Baldone - 1010", zona:"Zona 2", cat:"limpieza-profunda", tecnico:"Sucely Morales", monto:75, st:"info", stl:"En progreso", nota:"Limpieza profunda — Z2 - Baldone - 1010" },
    { id:5, hora:"14:30", prop:"Z2 - Baldone - 1010", zona:"Zona 2", cat:"ajuste", tecnico:"Helen Pineda", monto:45, st:"warning", stl:"Por vencer", nota:"Tokens de lavado — Tokens de lavado y secado de ropa" },
    { id:6, hora:"16:00", prop:"Antigua - casco - 64A", zona:"Antigua", cat:"supervision", tecnico:"Iris Samayoa", monto:60, st:"success", stl:"Pagado", nota:"Supervisión mensual de inventario" }
  ],
  tecnicos: [
    { n:"Flor Samayoa", r:10, v:5.00 }, { n:"Lilia Del Cid", r:9, v:5.00 },
    { n:"Joselyn Sian", r:23, v:4.87 }, { n:"Helen Pineda", r:14, v:4.86 },
    { n:"Jackeline Ruano", r:32, v:4.84 }, { n:"Mirla Chacon", r:39, v:4.74 },
    { n:"Sucely Morales", r:30, v:4.63 }
  ],
  adelantos: [
    { fecha:"28 jul 2026", monto:"Q 1,200", st:"success", stl:"Depositado" },
    { fecha:"14 jul 2026", monto:"Q 800", st:"success", stl:"Depositado" },
    { fecha:"30 jun 2026", monto:"Q 1,500", st:"error", stl:"Rechazado" }
  ]
};
