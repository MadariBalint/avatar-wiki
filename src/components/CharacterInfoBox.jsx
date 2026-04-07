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
    <aside className="flex w-80 flex-col items-center text-sm">
      <div className="mt-2 mb-1 flex w-full justify-center rounded-2xl border border-sky-600 bg-sky-800/40 p-2 text-xl">
        <h2>{data.name}</h2>
      </div>
      <div>
        <img
          className="rounded-2xl"
          src={`/images/characters/${data.id}-face.png`}
          alt={`${data.id}-face`}
        />
      </div>
      <div className="mt-1 w-full divide-y-2 divide-solid divide-sky-400 rounded-2xl border-2 border-sky-400 p-2">
        <div className="flex justify-center rounded-t-xl bg-sky-700/30 text-lg">
          Biographical information
        </div>
        <div className="space-y-2 divide-y-1 divide-sky-400">
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
        </div>
        <div className="flex justify-center bg-sky-700/30 text-lg">
          Physical Description
        </div>
        <div className="space-y-2 divide-y-1 divide-sky-400">
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
        </div>
        <div className="flex justify-center bg-sky-700/30 text-lg">
          Family Information
        </div>
        <div className="space-y-2 divide-y-1 divide-sky-400">
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
        </div>
        <div className="flex justify-center bg-sky-700/30 text-lg">
          Chronological Information
        </div>
        <div className="space-y-2 divide-y-1 divide-sky-400">
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
        </div>
        <div className="flex justify-center bg-sky-700/30 text-lg">
          Behind The Scenes
        </div>
        <div className="space-y-2 divide-y-1 divide-sky-400">
          {data.portrayedBy && (
            <CharacterInfoBoxRow
              label={"Portrayed by"}
              info={data.portrayedBy}
            />
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
      </div>
    </aside>
  );
}

export default CharacterInfoBox;
