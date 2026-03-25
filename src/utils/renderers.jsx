import { formatDate } from "./formatDate";

import locations from "../data/locations.json";
import characters from "../data/characters.json";
import affiliations from "../data/affiliations.json";
import franchise from "../data/franchise.json";

import InfoBrackets from "../components/InfoBrackets";

export function renderBorn(info) {
  const renderExtra = Object.keys(info).length > 1;
  return Object.entries(info).map(([type, date]) => {
    return (
      <li key={type}>
        {formatDate(date)}
        {renderExtra && <InfoBrackets>{type}</InfoBrackets>}
      </li>
    );
  });
}

export function renderAliases(info) {
  return info.map((el) => {
    return (
      <li key={el.alias}>
        {el.alias}
        {el.note && <InfoBrackets>{el.note}</InfoBrackets>}
      </li>
    );
  });
}

export function renderHeight(height) {
  const renderExtra = Object.keys(height).length > 1;
  return Object.entries(height).map(([spec, unit]) => {
    return (
      <li key={spec}>
        {unit}
        {renderExtra && <InfoBrackets>{spec}</InfoBrackets>}
      </li>
    );
  });
}

export function renderColor(color) {
  const renderExtra = Object.keys(color).length > 1;
  return Object.entries(color).map(([spec, info]) => {
    return (
      <li key={spec}>
        <span className="capitalize">{info}</span>
        {renderExtra && <InfoBrackets>{spec}</InfoBrackets>}
      </li>
    );
  });
}

export function renderPeriod(period) {
  const { from, to } = period;

  const textFrom = from
    ? `${from.modifier ? from.modifier + " " : ""}${from.month ? from.month : ""}${from.month && from.year ? ", " : ""}${!from.year ? "" : from.year}`
    : "";

  const textTo = to
    ? `${to.modifier ? to.modifier + " " : ""}${to.month ? to.month : ""}${to.month && to.year ? ", " : ""}${to.year}`
    : "";
  if (textFrom && textTo) return `${textFrom} - ${textTo}`;
  if (textFrom) return `${textFrom}-`;
  if (textTo) return `-${textTo}`;
  return "";
}

export function renderHomeHistory(homeHistory) {
  return homeHistory.map((home) => {
    return (
      <li key={home.locationId}>
        {locations.find((el) => el.id === home.locationId).name}

        {home.period && (
          <InfoBrackets>{renderPeriod(home.period)}</InfoBrackets>
        )}
      </li>
    );
  });
}

export function renderFamily(members) {
  return members.map((member) => {
    return (
      <li key={member.id}>
        {characters.find((el) => el.id === member.id).name}
        <InfoBrackets>{`${member.order ? member.order + " " : ""}${member.relation ? member.relation : ""}`}</InfoBrackets>
      </li>
    );
  });
}

export function renderOccupation(occ) {
  return occ.map((el, i) => {
    return (
      <li key={i}>
        {el.occupation}
        {el.note && <InfoBrackets>{el.note}</InfoBrackets>}
      </li>
    );
  });
}

export function renderAffiliation(aff) {
  return aff.map((el) => {
    return (
      <li key={el.id}>
        {affiliations.find((e) => e.id === el.id).name}

        {el.status ? <InfoBrackets>{el.status}</InfoBrackets> : ""}
        {el.duration ? <InfoBrackets>{el.duration}</InfoBrackets> : ""}
        {el.departments
          ? el.departments.map((x) => {
              return (
                <div className="ml-2" key={x.id}>
                  {affiliations.find((z) => z.id === x.id).name}
                  {x.note ? <InfoBrackets>{x.note}</InfoBrackets> : ""}
                </div>
              );
            })
          : ""}
      </li>
    );
  });
}

export function renderSeen(seen) {
  return <li>{franchise.find((e) => e.id === seen).title}</li>;
}
