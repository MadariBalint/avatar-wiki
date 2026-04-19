import {
  renderLocation,
  renderResidents,
  renderSeen,
} from "../utils/renderers";
import LocationInfoBoxRow from "./LocationInfoBoxRow";

function LocationInfoBox({ data = null, allData }) {
  if (!data) return null;
  return (
    <aside className="flex w-80 flex-col items-center text-sm">
      <div className="mt-2 mb-1 flex w-full justify-center rounded-2xl border border-sky-600 bg-sky-800/40 p-2 text-xl">
        <h2>{data.name}</h2>
      </div>
      <div>
        <img
          className="rounded-2xl"
          src={`images/locations/${data.id}.webp`}
          alt={`${data.id}`}
        />
      </div>
      <div className="mt-1 w-full divide-y-2 divide-solid divide-sky-400 rounded-2xl border-2 border-sky-400 p-2">
        <div className="flex justify-center rounded-t-xl bg-sky-700/30 text-lg">
          Location Information
        </div>
        <div className="space-y-2 divide-y-1 divide-sky-400">
          {data.location && (
            <LocationInfoBoxRow
              label={"Location"}
              info={data.location}
              renderInfo={renderLocation}
              allData={allData}
            />
          )}
          {data.residentIds && (
            <LocationInfoBoxRow
              label={"Residents"}
              info={data.residentIds}
              renderInfo={renderResidents}
              allData={allData}
            />
          )}
        </div>
        <div className="flex justify-center rounded-t-xl bg-sky-700/30 text-lg">
          Behind The Scenes
        </div>
        <div className="space-y-2 divide-y-1 divide-sky-400">
          {data.firstSeen && (
            <LocationInfoBoxRow
              label={"First seen"}
              info={data.firstSeen}
              renderInfo={renderSeen}
              allData={allData}
            />
          )}
          {data.lastSeen && (
            <LocationInfoBoxRow
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

export default LocationInfoBox;
