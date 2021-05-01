export class ErrorMessage {
  constructor(
    public forControl: string,
    public forValidator: string,
    public text: string
  ) {}
}

export const VaccinationFormErrorMessages = [
  new ErrorMessage(
    "description",
    "required",
    "Eine Bezeichnung muss angegeben werden"
  ),
  new ErrorMessage(
    "code",
    "required",
    "Es muss ein Code für die Impfung angegeben werden"
  ),
  new ErrorMessage(
    "code",
    "minlength",
    "Der Code muss mindestens 5 Zeichen enthalten"
  ),
  new ErrorMessage(
    "code",
    "maxlength",
    "Der Code darf höchstens 5 Zeichen haben"
  ),
  new ErrorMessage("date", "required", "Es muss ein Datum angegeben werden"),
  new ErrorMessage(
    "time",
    "required",
    "Es muss ein Zeitfenster angegeben werden"
  ),
  new ErrorMessage(
    "max_registrations",
    "min",
    "Minimale Anzahl an zugelassenen Personen ist 5"
  ),
  new ErrorMessage(
    "max_registrations",
    "max",
    "Maximal 15 Personen pro Termin erlaubt"
  )
];
