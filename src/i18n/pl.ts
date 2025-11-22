export const pl = {
  language: {
    flag: "🇵🇱",
    name: "Polski",
  },
  errors: {
    needMoreParticipants: "Potrzeba co najmniej 2 uczestników!",
    invalidPairs: "Nie udało się wygenerować prawidłowych par z obecnymi zasadami. Sprawdź zasady i spróbuj ponownie.",
    multipleMustRules: "Znaleziono wiele reguł MUSI",
    conflictingRules: "Konflikt między regułą MUSI i NIE MOŻE",
    emptyName: "Puste imię",
    duplicateName: "Zduplikowane imię: {{name}}",
    invalidRuleFormat: "Nieprawidłowy format reguły: {{rule}}",
    unknownParticipant: "Nieznany uczestnik w regule: {{name}}",
    noValidReceivers: "Brak prawidłowych odbiorców dla tego uczestnika",
    line: "Linia {{number}}"
  },
  home: {
    vanity: "Projekt rozpoczęty zimą 2015 przez Maëla",
    sponsor: "Wesprzyj mnie na GitHub",
    title: "Planer Świętego Mikołaja",
    explanation: [
      "Witaj! To narzędzie pomoże Ci zorganizować wymianę prezentów świątecznych. Po prostu wymień wszystkich uczestników, a my losowo przydzielimy pary zgodnie z ustalonymi zasadami.",
      "Otrzymasz unikalny link dla każdego uczestnika, który musisz sam udostępnić (przez email, Slack, itp.). [<exampleLink>Przykładowy link</exampleLink>]",
    ].map(line => `<p>${line}</p>`).join(''),
    exampleLink: "Przykładowy link",
  },
  pairing: {
    title: "Twoje zadanie Świętego Mikołaja!",
    assignment: "Witaj, <name/>! Jesteś mikołajem dla:",
    loading: "Ładowanie...",
    error: "Nie udało się odszyfrować wiadomości. Link może być nieprawidłowy.",
    startYourOwn: "Stwórz swój własny planer Świętego Mikołaja!"
  },
  participants: {
    title: "Uczestnicy",
    generationWarning: "Ważne: Każda zmiana w liście uczestników lub ustawieniach będzie wymagała utworzenia nowych par. Istniejące linki nie zostaną automatycznie zmodyfikowane.", 
    addPerson: "Dodaj Osobę",
    generatePairs: "Generuj Pary",
    enterName: "Wpisz imię uczestnika",
    editRules: "Edytuj zasady",
    removeParticipant: "Usuń uczestnika",
    rulesCount_one: "{{count}} reguła ustawiona",
    rulesCount_other: "{{count}} reguł ustawionych",
    switchToFormView: "Przełącz na widok formularza",
    switchToTextView: "Przełącz na widok tekstowy"
  },
  rules: {
    title: "Zasady dla {{name}}",
    mustBePairedWith: "Musi być sparowany z",
    mustNotBePairedWith: "Nie może być sparowany z",
    selectParticipant: "Wybierz innego uczestnika",
    removeRule: "Usuń regułę",
    addMustRule: "Wymuś Parowanie",
    addMustNotRule: "Zapobiegnij Parowaniu",
    cancel: "Anuluj",
    saveRules: "Zapisz Zasady",
    hintLabel: 'Podpowiedź Prezentowa',
    hintPlaceholder: 'Wpisz podpowiedź o preferencjach prezentowych (opcjonalnie)',
  },
  links: {
    title: "Linki do udostępnienia",
    warningParticipantsChanged: "Uwaga: Uczestnicy lub zasady zmieniły się od czasu ostatniego wygenerowania tych linków.",
    resetAssignments: "Wygeneruj Pary Ponownie",
    shareInstructions: "Udostępnij te linki tylko odpowiednim osobom obdarowującym",
    exportCSV: "Eksportuj jako CSV",
    copySecretLink: "Kopiuj Tajny Link",
    linkCopied: "Dodano do schowka!",
    for: "dla"
  },
  settings: {
    title: "Ustawienia",
    instructions: "Dodatkowe Instrukcje",
    instructionsPlaceholder: "np. budżet, data, lokalizacja...",
    instructionsHelp: "Będą one pokazane wszystkim uczestnikom na ich stronie z przydzieleniem. Zapisz to krótko: zwiększa to długość linków."
  },
};
