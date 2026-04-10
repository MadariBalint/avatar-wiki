import { formatDate } from "./formatDate";


import InfoBrackets from "../components/InfoBrackets";
import InternalLink from "../components/InternalLink";

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

export function renderAliases(info, data) {
  const needsLink = data.some((e) => e.id === info)

  return info.map((el) => {
    return (
      <li key={el.alias}>
        {needsLink && <InternalLink href={info}>
          {el.alias}
          {el.note && <InfoBrackets>{el.note}</InfoBrackets>}
        </InternalLink>}
        {!needsLink && <>
          {el.alias}
          {el.note && <InfoBrackets>{el.note}</InfoBrackets>}
        </>
        }

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

export function renderHomeHistory(homeHistory, data) {
  let needsLink
  return homeHistory.map((home) => {
    needsLink = data.some((e) => e.id === home.locationId && e.hasPage === true)
    return (
      <li key={home.locationId}>
        {needsLink && (
          <InternalLink href={home.locationId}>
            {data.find((el) => el.id === home.locationId).name}
          </InternalLink>)}
        {!needsLink && data.find((el) => el.id === home.locationId).name}

        {home.period && (
          <InfoBrackets>{renderPeriod(home.period)}</InfoBrackets>
        )}
      </li>
    );
  });
}

export function renderFamily(members, data) {
  let needsLink
  return members.map((member) => {
    needsLink = data.some((e)=> e.id === member.id && e.hasPage === true)
    console.log(needsLink)
    return (
      <li key={member.id}>
        {needsLink && <InternalLink href={member.id}>{data.find((el)=> el.id === member.id).name}</InternalLink>}
        {!needsLink && data.find((el)=> el.id === member.id).name}
        <InfoBrackets>{`${member.order ? member.order + " " : ""}${member.relation ? member.relation : ""}`}</InfoBrackets>
      </li>
    );
  });
}

export function renderOccupation(occ, data) {
  let needsLink
  return occ.map((el, i) => {
    needsLink = data.some(e => e.id === el.id && e.hasPage === true)
    return (
      <li key={i}>
        {needsLink && (
          <InternalLink href={el.id}>
            {el.occupation}
            {el.note && <InfoBrackets>{el.note}</InfoBrackets>}
          </InternalLink>)}
        {!needsLink && (
          <>
            {el.occupation}
            {el.note && <InfoBrackets>{el.note}</InfoBrackets>}
          </>
        )}
      </li>
    );
  });
}

export function renderAffiliation(aff, data) {
  let needsLink
  return aff.map((el) => {
    needsLink = data.some(e =>(e.id === el.id  && e.hasPage === true ) )
    return (
      <li key={el.id}>
        {needsLink && <InternalLink href={el.id}>{data.find((e) => e.id === el.id).name}</InternalLink>  }
        {!needsLink && data.find((e) => e.id === el.id).name}

        {el.status ? <InfoBrackets>{el.status}</InfoBrackets> : ""}
        {el.duration ? <InfoBrackets>{el.duration}</InfoBrackets> : ""}
        {el.departments
          ? el.departments.map((x) => {
              return (
                <div className="ml-2" key={x.id}>
                  {data.find((z) => z.id === x.id).name}
                  {x.note ? <InfoBrackets>{x.note}</InfoBrackets> : ""}
                </div>
              );
            })
          : ""}
      </li>
    );
  });
}

export function renderSeen(seen, data) {
  const needsLink = data.some((e)=> e.id === seen)


  if(seen === "pandorapedia")
  if(seen === "pandorapedia") {return <li className="text-sky-600 hover:underline "><a href="https://www.avatar.com/pandorapedia">Pandorapedia</a></li>}
  return <li >
      {needsLink && 
        <InternalLink href={seen}>{data.find((e) => e.id === seen)?.title}</InternalLink>}
      {!needsLink && data.find((e) => e.id === seen)?.title}
  </li>;
}

export function renderHabitat(habitat, data) {
  return habitat.map((hab) => (
    <li key={hab}>
      {data.some((entry) => entry.id === hab)
        ? data.find((e) => e.id === hab).name
        : hab}
    </li>
  ));
}

export function renderLengthFauna(length) {
  return Object.entries(length).map(([type, unit], i) => {
    return (
      <li key={i}>
        {type === "approx" && <span>~</span>}
        <span>{unit}</span>
      </li>
    );
  });
}
export function renderHeightFauna(height) {
  return Object.entries(height).map(([type, unit], i) => {
    return (
      <li key={i}>
        {type === "approx" && <span>~</span>}
        <span>{unit}</span>
      </li>
    );
  });
}
export function renderWidthFauna(width) {
  return Object.entries(width).map(([type, unit], i) => {
    return (
      <li key={i}>
        {type === "approx" && <span>~</span>}
        <span>{unit}</span>
      </li>
    );
  });
}

export function renderWeightFauna(weight) {
  return Object.entries(weight).map(([type, unit], i) => {
    return (
      <li key={i}>
        {type === "average" && <span>Average adult: </span>}
        {type === "max" && <span>Max observed: </span>}
        <span>{unit}</span>
      </li>
    );
  });
}

export function renderColorFauna(color) {
  const text = color.split("-").map((x) => x[0].toUpperCase() + x.slice(1));

  return <li>{text.join(" - ")}</li>;
}

export function renderEyeColorFauna(color) {
  return (
    <li>{color.map((x) => x[0].toUpperCase() + x.slice(1)).join(" - ")}</li>
  );
}
export function renderHairColorFauna(color) {
  return (
    <li>{color.map((x) => x[0].toUpperCase() + x.slice(1)).join(" - ")}</li>
  );
}
