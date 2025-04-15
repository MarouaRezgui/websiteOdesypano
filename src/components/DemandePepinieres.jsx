import React, { useState } from 'react'

function DemandePepinieres() {

  const data = [
    { "gouvernorat": "Beja", "delegation": "Amdoun", "localite": "Beni Malek" },
    { "gouvernorat": "Beja", "delegation": "Amdoun", "localite": "El Fraijia" },
    { "gouvernorat": "Beja", "delegation": "Amdoun", "localite": "El Hamra" },
    { "gouvernorat": "Beja", "delegation": "Amdoun", "localite": "El Jouza" },
    { "gouvernorat": "Beja", "delegation": "Amdoun", "localite": "El Mejaless" },
    { "gouvernorat": "Beja", "delegation": "Amdoun", "localite": "Ghozia" },
    { "gouvernorat": "Beja", "delegation": "Amdoun", "localite": "Zahret Medien Sud" },
    { "gouvernorat": "Beja", "delegation": "Beja Sud", "localite": "Mekhachbia" },
    { "gouvernorat": "Beja", "delegation": "Beja Sud", "localite": "Mestouta" },
    { "gouvernorat": "Beja", "delegation": "Beja Sud", "localite": "Sidi Smail" },
    { "gouvernorat": "Beja", "delegation": "Goubellat", "localite": "Bir El Euch" },
    { "gouvernorat": "Beja", "delegation": "Goubellat", "localite": "Cheikh El Ouediane" },
    { "gouvernorat": "Beja", "delegation": "Goubellat", "localite": "El Gammarti" },
    { "gouvernorat": "Beja", "delegation": "Goubellat", "localite": "Guerram" },
    { "gouvernorat": "Beja", "delegation": "Goubellat", "localite": "Khacheb" },
    { "gouvernorat": "Beja", "delegation": "Goubellat", "localite": "Kheniguet Ed-Dahane" },
    { "gouvernorat": "Beja", "delegation": "Medjez_El_Bab", "localite": "Chaouach" },
    { "gouvernorat": "Beja", "delegation": "Medjez_El_Bab", "localite": "Hidouss" },
    { "gouvernorat": "Beja", "delegation": "Medjez_El_Bab", "localite": "Toukaber" },
    { "gouvernorat": "Beja", "delegation": "Nefza", "localite": "Bou-Zenna" },
    { "gouvernorat": "Beja", "delegation": "Nefza", "localite": "Dehiret" },
    { "gouvernorat": "Beja", "delegation": "Nefza", "localite": "Djamila" },
    { "gouvernorat": "Beja", "delegation": "Nefza", "localite": "Fatnassa" },
    { "gouvernorat": "Beja", "delegation": "Nefza", "localite": "Ghayadha" },
    { "gouvernorat": "Beja", "delegation": "Nefza", "localite": "Nefza Est" },
    { "gouvernorat": "Beja", "delegation": "Nefza", "localite": "Oued El Maaden" },
    { "gouvernorat": "Beja", "delegation": "Nefza", "localite": "Tebaba" },
    { "gouvernorat": "Beja", "delegation": "Nefza", "localite": "Zaga" },
    { "gouvernorat": "Beja", "delegation": "Teboursouk", "localite": "Ain El Hammam" },
    { "gouvernorat": "Beja", "delegation": "Teboursouk", "localite": "Ain El Melliti" },
    { "gouvernorat": "Beja", "delegation": "Teboursouk", "localite": "Bir Ettouta" },
    { "gouvernorat": "Beja", "delegation": "Teboursouk", "localite": "Rihana" },
    { "gouvernorat": "Beja", "delegation": "Testour", "localite": "Mzougha" },
    { "gouvernorat": "Beja", "delegation": "Testour", "localite": "Zeldou" },
    { "gouvernorat": "Beja", "delegation": "Tibar", "localite": "Ain Ed-Defali" },
    { "gouvernorat": "Beja", "delegation": "Tibar", "localite": "Djebba" },
    { "gouvernorat": "Bizerte", "delegation": "Ghezala", "localite": "El Arab" },
    { "gouvernorat": "Bizerte", "delegation": "Ghezala", "localite": "Ouled El May" },
    { "gouvernorat": "Bizerte", "delegation": "Joumine", "localite": "Bazina" },
    { "gouvernorat": "Bizerte", "delegation": "Joumine", "localite": "Chnena" },
    { "gouvernorat": "Bizerte", "delegation": "Joumine", "localite": "Ouled Ghanem" },
    { "gouvernorat": "Bizerte", "delegation": "Joumine", "localite": "Rouaha" },
    { "gouvernorat": "Bizerte", "delegation": "Joumine", "localite": "Touajnia" },
    { "gouvernorat": "Bizerte", "delegation": "Sejnane", "localite": "El Ababsa" },
    { "gouvernorat": "Bizerte", "delegation": "Sejnane", "localite": "El Hchachna" },
    { "gouvernorat": "Bizerte", "delegation": "Sejnane", "localite": "El Maalia" },
    { "gouvernorat": "Bizerte", "delegation": "Sejnane", "localite": "Mcherga" },
    { "gouvernorat": "Bizerte", "delegation": "Sejnane", "localite": "Mouaden" },
    { "gouvernorat": "Bizerte", "delegation": "Sejnane", "localite": "Sehabna" },
    { "gouvernorat": "Bizerte", "delegation": "Sejnane", "localite": "Sejnane" },
    { "gouvernorat": "Bizerte", "delegation": "Sejnane", "localite": "Sidi Mechreg" },
    { "gouvernorat": "Jendouba", "delegation": "Ain Draham", "localite": "Ain Sallem" },
    { "gouvernorat": "Jendouba", "delegation": "Ain Draham", "localite": "El Homrane" },
    { "gouvernorat": "Jendouba", "delegation": "Ain Draham", "localite": "Errouii" },
    { "gouvernorat": "Jendouba", "delegation": "Ain Draham", "localite": "Khmeyria" },
    { "gouvernorat": "Jendouba", "delegation": "Ain Draham", "localite": "Oued Ezzan" },
    { "gouvernorat": "Jendouba", "delegation": "Ain Draham", "localite": "Selloul" },
    { "gouvernorat": "Jendouba", "delegation": "Ain Draham", "localite": "Tegma" },
    { "gouvernorat": "Jendouba", "delegation": "Fernana", "localite": "El Adher" },
    { "gouvernorat": "Jendouba", "delegation": "Fernana", "localite": "Gloub Ethirane" },
    { "gouvernorat": "Jendouba", "delegation": "Fernana", "localite": "Gloub Ethirane Nord" },
    { "gouvernorat": "Jendouba", "delegation": "Fernana", "localite": "Hedhil" },
    { "gouvernorat": "Jendouba", "delegation": "Fernana", "localite": "Hlima" },
    { "gouvernorat": "Jendouba", "delegation": "Fernana", "localite": "Jouaouda" },
    { "gouvernorat": "Jendouba", "delegation": "Fernana", "localite": "Oued Ghrib" },
    { "gouvernorat": "Jendouba", "delegation": "Fernana", "localite": "Ouled Mefada" },
    { "gouvernorat": "Jendouba", "delegation": "Fernana", "localite": "Rbiaa" },
    { "gouvernorat": "Jendouba", "delegation": "Fernana", "localite": "Sidi Ammar" },
    { "gouvernorat": "Jendouba", "delegation": "Ghardimaou", "localite": "Ain Soltane" },
    { "gouvernorat": "Jendouba", "delegation": "Ghardimaou", "localite": "El Maaden" },
    { "gouvernorat": "Jendouba", "delegation": "Ghardimaou", "localite": "Es Sraya" },
    { "gouvernorat": "Jendouba", "delegation": "Ghardimaou", "localite": "Faj Hassine" },
    { "gouvernorat": "Jendouba", "delegation": "Ghardimaou", "localite": "Forksen" },
    { "gouvernorat": "Jendouba", "delegation": "Ghardimaou", "localite": "Ouechtata" },
    { "gouvernorat": "Jendouba", "delegation": "Tabarka", "localite": "Ain Esnoussi" },
    { "gouvernorat": "Jendouba", "delegation": "Tabarka", "localite": "El Hammem" },
    { "gouvernorat": "Jendouba", "delegation": "Tabarka", "localite": "Nadhour" },
    { "gouvernorat": "Kef", "delegation": "Kef_Est", "localite": "Dyr El Kef" },
    { "gouvernorat": "Kef", "delegation": "Kef_Est", "localite": "Oued Souani" },
    { "gouvernorat": "Kef", "delegation": "Kef_Est", "localite": "Oued Souani Sud" },
    { "gouvernorat": "Kef", "delegation": "Kef_Est", "localite": "Zaafrane" },
    { "gouvernorat": "Kef", "delegation": "Kef_Ouest", "localite": "Oued Remel Nord" },
    { "gouvernorat": "Kef", "delegation": "Kef_Ouest", "localite": "Oued Remel Sud" },
    { "gouvernorat": "Kef", "delegation": "Nebeur", "localite": "Bahra" },
    { "gouvernorat": "Kef", "delegation": "Nebeur", "localite": "Chetatla" },
    { "gouvernorat": "Kef", "delegation": "Nebeur", "localite": "Sidi Medien" },
    { "gouvernorat": "Kef", "delegation": "Nebeur", "localite": "Tel El Ghozlane" },
    { "gouvernorat": "Kef", "delegation": "Sakiet_Sidi_Youssef", "localite": "Ain El Karma" },
    { "gouvernorat": "Kef", "delegation": "Sakiet_Sidi_Youssef", "localite": "Ferchan" },
    { "gouvernorat": "Kef", "delegation": "Sakiet_Sidi_Youssef", "localite": "Jradou" },
    { "gouvernorat": "Kef", "delegation": "Sakiet_Sidi_Youssef", "localite": "Sidi Rabeh" },
    { "gouvernorat": "Kef", "delegation": "Sers", "localite": "Bousliaa" },
    { "gouvernorat": "Kef", "delegation": "Sers", "localite": "Es-Sers Nord" },
    { "gouvernorat": "Kef", "delegation": "Sers", "localite": "Lorbeus" },
    { "gouvernorat": "Kef", "delegation": "Touiref", "localite": "Ledhieb" },
    { "gouvernorat": "Kef", "delegation": "Touiref", "localite": "Mellala" },
    { "gouvernorat": "Kef", "delegation": "Touiref", "localite": "Oueljet Essedra" },
    { "gouvernorat": "Kef", "delegation": "Touiref", "localite": "Touiref" },
    { "gouvernorat": "Siliana", "delegation": "Bourouis", "localite": "Ain Achour" },
    { "gouvernorat": "Siliana", "delegation": "Bourouis", "localite": "El Abbassi" },
    { "gouvernorat": "Siliana", "delegation": "Bourouis", "localite": "Ettricha" },
    { "gouvernorat": "Siliana", "delegation": "El_Krib", "localite": "Borj Messaoudi Est" },
    { "gouvernorat": "Siliana", "delegation": "El_Krib", "localite": "Borj Messaoudi Ouest" },
    { "gouvernorat": "Siliana", "delegation": "El_Krib", "localite": "Doukhania" },
    { "gouvernorat": "Siliana", "delegation": "El_Krib", "localite": "El Krib Nord" },
    { "gouvernorat": "Siliana", "delegation": "El_Krib", "localite": "El Krib Sud" },
    { "gouvernorat": "Siliana", "delegation": "El_Krib", "localite": "Hammam Biadha Nord" },
    { "gouvernorat": "Siliana", "delegation": "El_Krib", "localite": "Hammam Biadha Sud" },
    { "gouvernorat": "Siliana", "delegation": "Siliana_Nord", "localite": "Ain Eddissa" },
    { "gouvernorat": "Siliana", "delegation": "Siliana_Nord", "localite": "El Joua" },
    { "gouvernorat": "Siliana", "delegation": "Siliana_Nord", "localite": "El Khalsa" },
    { "gouvernorat": "Siliana", "delegation": "Siliana_Nord", "localite": "Jemma" },
    { "gouvernorat": "Siliana", "delegation": "Siliana_Nord", "localite": "Massouj" }
  ]
  const [selectedGouvernorat, setSelectedGouvernorat] = useState('');
  const [selectedDelegation, setSelectedDelegation] = useState('');
  const [selectedLocalite, setSelectedLocalite] = useState('');

  const gouvernorats = [...new Set(data.map(item => item.gouvernorat))];

  const delegations = selectedGouvernorat
    ? [...new Set(data.filter(item => item.gouvernorat === selectedGouvernorat).map(item => item.delegation))]
    : [];

  const localites = selectedDelegation
    ? data.filter(item => item.delegation === selectedDelegation).map(item => item.localite)
    : [];

  return (
    <div>
      <div>
        <label>Gouvernorat: </label>
        <select value={selectedGouvernorat} onChange={(e) => {
          setSelectedGouvernorat(e.target.value);
          setSelectedDelegation('');
          setSelectedLocalite('');
        }}>
          <option value="">Select Gouvernorat</option>
          {gouvernorats.map(gouvernorat => (
            <option key={gouvernorat} value={gouvernorat}>{gouvernorat}</option>
          ))}
        </select>
      </div>

      {selectedGouvernorat && (
        <div>
          <label>Delegation: </label>
          <select value={selectedDelegation} onChange={(e) => {
            setSelectedDelegation(e.target.value);
            setSelectedLocalite('');
          }}>
            <option value="">Select Delegation</option>
            {delegations.map(delegation => (
              <option key={delegation} value={delegation}>{delegation}</option>
            ))}
          </select>
        </div>
      )}

      {selectedDelegation && (
        <div>
          <label>Localite: </label>
          <select value={selectedLocalite} onChange={(e) => setSelectedLocalite(e.target.value)}>
            <option value="">Select Localite</option>
            {localites.map(localite => (
              <option key={localite} value={localite}>{localite}</option>
            ))}
          </select>
        </div>
      )}
    </div>
  )
}

export default DemandePepinieres