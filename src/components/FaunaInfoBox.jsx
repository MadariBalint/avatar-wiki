import {
  renderColorFauna,
  renderEyeColorFauna,
  renderHabitat,
  renderHairColorFauna,
  renderHeightFauna,
  renderLengthFauna,
  renderSeen,
  renderWeightFauna,
  renderWidthFauna,
} from "../utils/renderers";
import FaunaInfoBoxRow from "./FaunaInfoBoxRow";

function FaunaInfoBox({ data = null, allData }) {
  if (!data) return null;
  return (
    <aside className="flex w-80 flex-col items-center text-sm">
      <div className="mt-2 mb-1 flex w-full justify-center rounded-2xl border border-sky-600 bg-sky-800/40 p-2 text-xl">
        <h2>{data.humanName || data.naviName}</h2>
      </div>
      <div>
        <img
          className="rounded-2xl"
          src={`/images/fauna/${data.id}.webp`}
          alt={`${data.id}`}
        />
      </div>
      <div className="mt-1 w-full divide-y-2 divide-solid divide-sky-400 rounded-2xl border-2 border-sky-400 p-2">
        <div className="flex justify-center rounded-t-xl bg-sky-700/30 text-lg">
          Species Information
        </div>
        <div className="space-y-2 divide-y-1 divide-sky-400">
          {data.naviName && (
            <FaunaInfoBoxRow label={"Na'vi name"} info={data.naviName} />
          )}
          {data.habitat && (
            <FaunaInfoBoxRow
              label={"Habitat"}
              info={data.habitat}
              renderInfo={renderHabitat}
              allData={allData}
            />
          )}
        </div>
        <div className="flex justify-center rounded-t-xl bg-sky-700/30 text-lg">
          Physical Information
        </div>
        <div className="space-y-2 divide-y-1 divide-sky-400">
          {data.height && (
            <FaunaInfoBoxRow
              label={"Height"}
              info={data.height}
              renderInfo={renderHeightFauna}
            />
          )}
          {data.length && (
            <FaunaInfoBoxRow
              label={"Length"}
              info={data.length}
              renderInfo={renderLengthFauna}
            />
          )}
          {data.width && (
            <FaunaInfoBoxRow
              label={"Width"}
              info={data.width}
              renderInfo={renderWidthFauna}
            />
          )}
          {data.weight && (
            <FaunaInfoBoxRow
              label={"Weight"}
              info={data.weight}
              renderInfo={renderWeightFauna}
            />
          )}
          {data.skinColor && (
            <FaunaInfoBoxRow
              label={"Skin color"}
              info={data.skinColor}
              renderInfo={renderColorFauna}
            />
          )}
          {data.skinColorVariations && (
            <FaunaInfoBoxRow
              label={"Skin color variations"}
              info={data.skinColorVariations}
            />
          )}
          {data.hairColors && (
            <FaunaInfoBoxRow
              label={"Hair colors"}
              info={data.hairColors}
              renderInfo={renderHairColorFauna}
            />
          )}
          {data.eyeColors && (
            <FaunaInfoBoxRow
              label={"Eye colors"}
              info={data.eyeColors}
              renderInfo={renderEyeColorFauna}
            />
          )}
        </div>
        <div className="flex justify-center rounded-t-xl bg-sky-700/30 text-lg">
          Behind the scenes
        </div>
        <div className="space-y-2 divide-y-1 divide-sky-400">
          {data.firstSeen && (
            <FaunaInfoBoxRow
              label={"First seen"}
              info={data.firstSeen}
              renderInfo={renderSeen}
              allData={allData}
            />
          )}
          {data.lastSeen && (
            <FaunaInfoBoxRow
              label={"Last seen"}
              info={data.lastSeen}
              renderInfo={renderSeen}
              allData={allData}
            />
          )}
        </div>
      </div>
    </aside>
  );
}

export default FaunaInfoBox;
