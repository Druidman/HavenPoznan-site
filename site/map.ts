export type City = {
  /** Stable identifier, used as the pin feature id. */
  id: string;
  /** Display name, e.g. "Lisbon". */
  name: string;
  lat: number;
  lng: number;
  /** Where the pin links to, e.g. "/c/lisbon". */
  href: string;
  /** Organizer name, shown in the popup when present. */
  organizer?: string;
};
