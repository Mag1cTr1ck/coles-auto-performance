const OTHER = 'Other'

const byMake: Record<string, string[]> = {
  Acura: ['ILX', 'Integra', 'MDX', 'RDX', 'TLX'],
  'Alfa Romeo': ['Giulia', 'Stelvio'],
  Audi: ['A3', 'A4', 'A5', 'A6', 'Q3', 'Q5', 'Q7', 'Q8', 'e-tron'],
  BMW: ['1 Series', '2 Series', '3 Series', '4 Series', '5 Series', 'X1', 'X3', 'X5', 'X6', 'X7', 'iX'],
  Buick: ['Enclave', 'Encore', 'Envision'],
  Cadillac: ['CT5', 'Escalade', 'XT4', 'XT5', 'XT6'],
  Chevrolet: ['Blazer', 'Camaro', 'Colorado', 'Equinox', 'Malibu', 'Silverado', 'Suburban', 'Tahoe', 'Traverse', 'Trax'],
  Chrysler: ['300', 'Pacifica', 'Voyager'],
  Dodge: ['Challenger', 'Charger', 'Durango', 'Journey', 'Ram 1500'],
  Fiat: ['500', '500X'],
  Ford: ['Bronco', 'Edge', 'Escape', 'Explorer', 'F-150', 'F-250', 'Mustang', 'Ranger', 'Transit'],
  Genesis: ['G70', 'G80', 'GV70', 'GV80'],
  GMC: ['Acadia', 'Canyon', 'Sierra', 'Terrain', 'Yukon'],
  Honda: ['Accord', 'Civic', 'CR-V', 'Fit', 'HR-V', 'Odyssey', 'Passport', 'Pilot', 'Ridgeline'],
  Hyundai: ['Elantra', 'Ioniq', 'Kona', 'Palisade', 'Santa Fe', 'Sonata', 'Tucson', 'Venue'],
  Infiniti: ['Q50', 'QX50', 'QX60', 'QX80'],
  Isuzu: ['D-Max', 'MU-X'],
  Jaguar: ['E-Pace', 'F-Pace', 'F-Type', 'XE', 'XF'],
  Jeep: ['Cherokee', 'Compass', 'Gladiator', 'Grand Cherokee', 'Renegade', 'Wrangler'],
  Kia: ['Carnival', 'Forte', 'K5', 'Niro', 'Seltos', 'Sorento', 'Soul', 'Sportage', 'Telluride'],
  'Land Rover': ['Defender', 'Discovery', 'Discovery Sport', 'Range Rover', 'Range Rover Evoque', 'Range Rover Sport'],
  Lexus: ['ES', 'GX', 'IS', 'LX', 'NX', 'RX', 'UX'],
  Lincoln: ['Aviator', 'Corsair', 'Nautilus', 'Navigator'],
  Mazda: ['CX-30', 'CX-5', 'CX-50', 'CX-9', 'Mazda3', 'Mazda6', 'MX-5'],
  'Mercedes-Benz': ['A-Class', 'C-Class', 'E-Class', 'G-Class', 'GLA', 'GLC', 'GLE', 'GLS', 'Sprinter'],
  Mini: ['Cooper', 'Countryman', 'Clubman'],
  Mitsubishi: ['Eclipse Cross', 'Lancer', 'Outlander', 'Outlander PHEV', 'Pajero', 'Triton'],
  Nissan: ['Altima', 'Armada', 'Frontier', 'Kicks', 'LEAF', 'Murano', 'Navara', 'Pathfinder', 'Patrol', 'Rogue', 'Sentra', 'Titan', 'Versa', 'X-Trail', 'e-NV200'],
  Porsche: ['911', 'Cayenne', 'Macan', 'Panamera', 'Taycan'],
  Ram: ['1500', '2500', 'ProMaster'],
  Subaru: ['Ascent', 'Crosstrek', 'Forester', 'Impreza', 'Outback', 'WRX'],
  Suzuki: ['Jimny', 'Swift', 'Vitara'],
  Tesla: ['Model 3', 'Model S', 'Model X', 'Model Y', 'Cybertruck'],
  Toyota: ['4Runner', 'bZ4X', 'Camry', 'Corolla', 'Fortuner', 'Highlander', 'Hilux', 'Land Cruiser', 'Prado', 'Prius', 'RAV4', 'Sequoia', 'Sienna', 'Tacoma', 'Tundra', 'Yaris'],
  Volkswagen: ['Atlas', 'Golf', 'ID.4', 'Jetta', 'Passat', 'Tiguan'],
  Volvo: ['S60', 'S90', 'XC40', 'XC60', 'XC90'],
}

export const vehicleMakes = [...Object.keys(byMake).sort((a, b) => a.localeCompare(b)), OTHER]

export function modelsForMake(make: string) {
  if (!make) return []
  if (make === OTHER) return [OTHER]
  const models = byMake[make]
  if (!models) return [OTHER]
  return [...models, OTHER]
}
