
import { renderArmament, renderOrigin, renderSeen, renderType } from "../utils/renderers"
import RdaInfoBoxRow from "./RdaInfoBoxRow"

function RdaInfoBox ({data = null, allData}) {

    if(!data) return null

    return (
        <aside className="flex w-80 flex-col items-center text-sm">
      <div className="mt-2 mb-1 flex w-full justify-center rounded-2xl border border-sky-600 bg-sky-800/40 p-2 text-xl">
        <h2>{data.name}</h2>
      </div>
      <div>
        <img
          className="rounded-2xl"
          src={`/images/rda/${data.id}.webp`}
          alt={`${data.id}`}
        />
      </div>
      <div className="mt-1 w-full divide-y-2 divide-solid divide-sky-400 rounded-2xl border-2 border-sky-400 p-2">
        <div className="flex justify-center rounded-t-xl bg-sky-700/30 text-lg">
          {(data.categories.includes("vehicle") || data.categories.includes("life-support")) && "Machine information" || data.categories.includes("weapon") && "Weapon information" || data.categories.includes("material") && "Item information"}
        </div>
        <div className="space-y-2 divide-y-1 divide-sky-400">
          {data.createdBy && (
            <RdaInfoBoxRow label={"Created by"} info={data.createdBy} renderInfo={renderOrigin} allData={allData} />
          )}
          {data.manufacturer && (
            <RdaInfoBoxRow label={"Manufacturer"} info={data.manufacturer} />          )}
          {data.builtAt && (
            <RdaInfoBoxRow label={"Built at"} info={data.builtAt} renderInfo={renderOrigin} allData={allData} />
          )}
          {data.usedBy && (
            <RdaInfoBoxRow label={"Used by"} info={data.usedBy} renderInfo={renderOrigin} allData={allData}/>
          )}
          {data.model && (
            <RdaInfoBoxRow label={"Model"} info={data.model} />
          )}
          {data.type && (
            <RdaInfoBoxRow label={"Type"} info={data.type} renderInfo={renderType} />
          )}
          {data.usages && (
            <RdaInfoBoxRow  label={"Usage"} info={data.usages} />
          )}
          {data.armamentIds && (
            <RdaInfoBoxRow label={"Armament"} info={data.armamentIds} renderInfo={renderArmament} allData={allData} />
          )}
          {data.size && (
            <RdaInfoBoxRow label={"Size"} info={data.size} />
          )}
          
        </div>
        <div className="flex justify-center bg-sky-700/30 text-lg">
          Behind the scenes
        </div>
        <div className="space-y-2 divide-y-1 divide-sky-400">
          {data.firstSeen && (
            <RdaInfoBoxRow label={"First seen"} info={data.firstSeen} renderInfo={renderSeen} allData={allData} />
          )}
          {data.lastSeen && (
            <RdaInfoBoxRow label={"Last seen"} info={data.lastSeen} renderInfo={renderSeen} allData={allData} />
          )}
        </div>
      </div>
    </aside>
    )
}

export default RdaInfoBox