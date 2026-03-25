import CharacterInfoBoxRow from "./CharacterInfoBoxRow";
import {
  renderAliases,
  renderBorn,
  renderHeight,
  renderColor,
  renderHomeHistory,
  renderFamily,
  renderOccupation,
  renderAffiliation,
  renderSeen,
} from "../utils/renderers";

function CharacterInfoBox({ data = null }) {
  if (!data) return null;
  return (
    <aside className="w-72">
      <div>
        <h2>{data.name}</h2>
      </div>
      <div>
        <img
          src={`/images/characters/${data.id}-face.png`}
          alt={`${data.id}-face`}
        />
      </div>
      <div>Information</div>
      <div>
        {data.fullName && (
          <CharacterInfoBoxRow label={"Fullname"} info={data.fullName} />
        )}
        {data.aliases && (
          <CharacterInfoBoxRow
            label={"Aliases"}
            info={data.aliases}
            renderInfo={renderAliases}
          />
        )}
        {data.born && (
          <CharacterInfoBoxRow
            label={"Born"}
            info={data.born}
            renderInfo={renderBorn}
          />
        )}
        {data.died && (
          <CharacterInfoBoxRow
            label={"Died"}
            info={data.died}
            renderInfo={renderBorn}
          />
        )}
        {data.age && <CharacterInfoBoxRow label={"Age"} info={data.age} />}
        {data.status && (
          <CharacterInfoBoxRow label={"Status"} info={data.status} />
        )}
        {data.homeHistory && (
          <CharacterInfoBoxRow
            label={"Lived in"}
            info={data.homeHistory}
            renderInfo={renderHomeHistory}
          />
        )}

        {data.gender && (
          <CharacterInfoBoxRow label={"Gender"} info={data.gender} />
        )}
        {data.height && (
          <CharacterInfoBoxRow
            label={"Height"}
            info={data.height}
            renderInfo={renderHeight}
          />
        )}
        {data.skinColor && (
          <CharacterInfoBoxRow
            label={"Skin color"}
            info={data.skinColor}
            renderInfo={renderColor}
          />
        )}
        {data.hairColor && (
          <CharacterInfoBoxRow
            label={"Hair color"}
            info={data.hairColor}
            renderInfo={renderColor}
          />
        )}
        {data.eyeColor && (
          <CharacterInfoBoxRow
            label={"Eye color"}
            info={data.eyeColor}
            renderInfo={renderColor}
          />
        )}
        {data.parentsIds && (
          <CharacterInfoBoxRow
            label={"Parents"}
            info={data.parentsIds}
            renderInfo={renderFamily}
          />
        )}
        {data.siblingIds && (
          <CharacterInfoBoxRow
            label={"Siblings"}
            info={data.siblingIds}
            renderInfo={renderFamily}
          />
        )}
        {data.extendedfamilyIds && (
          <CharacterInfoBoxRow
            label={"Extended family"}
            info={data.extendedfamilyIds}
            renderInfo={renderFamily}
          />
        )}
        {data.occupations && (
          <CharacterInfoBoxRow
            label={"Occupations"}
            info={data.occupations}
            renderInfo={renderOccupation}
          />
        )}
        {data.affiliations && (
          <CharacterInfoBoxRow
            label={"Affiliations"}
            info={data.affiliations}
            renderInfo={renderAffiliation}
          />
        )}
        {data.bondedWith && (
          <CharacterInfoBoxRow label={"Bonded with"} info={data.bondedWith} />
        )}
        {data.portrayedBy && (
          <CharacterInfoBoxRow label={"Portrayed by"} info={data.portrayedBy} />
        )}
        {data.firstSeen && (
          <CharacterInfoBoxRow
            label={"First seen"}
            info={data.firstSeen}
            renderInfo={renderSeen}
          />
        )}
        {data.lastSeen && (
          <CharacterInfoBoxRow
            label={"Last seen"}
            info={data.lastSeen}
            renderInfo={renderSeen}
          />
        )}
      </div>
    </aside>
  );
}

export default CharacterInfoBox;
