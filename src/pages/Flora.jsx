import { Link } from "react-router-dom";
import flora from "../data/flora.json";
import CategoryBox from "../components/CategoryBox";


function Flora({ABC}) {

  const data = flora.map((item)=> item)


  return(

    <div>
      <div className="flex flex-col items-center gap-10">
        <span className="text-center font-[PapyrusWeb] text-3xl md:text-4xl lg:text-5xl">
          Flora of Pandora
        </span>
        <div className="flex max-w-sm flex-wrap justify-center gap-2 md:max-w-lg md:gap-4 lg:max-w-3xl lg:gap-x-10 lg:gap-y-10 xl:max-w-5xl xl:gap-x-15 xl:gap-y-15">
          {data.map(
            (el) =>
              el.hasPage &&(
                <Link key={el.id} to={`/${el.id}`}>
                  <CategoryBox identity={el} category="flora" />
                </Link>
              )
          )}
        </div>
    </div>;
    <div className="mx-auto mt-10 max-w-sm columns-2 rounded-xl bg-sky-900/20 px-7 py-10 md:max-w-md md:px-15 lg:max-w-xl xl:max-w-3xl">
            {ABC.map((letter) => {
              let arr = data.filter((x) => x.humanName.toUpperCase().startsWith(letter));
              if (arr.length < 1) return;
              if (
                arr.find((el) => el.hasPage) === undefined 
              )
                return;
    
              return (
                <div className="mb-5" key={letter}>
                  <span className="font-[PapyrusWeb] text-3xl">{letter}</span>
                  <div className="ml-5 flex flex-col gap-1 md:ml-10">
                    {arr.map((el) => {
                      return (
                        el.hasPage &&
                        <div className="grid grid-cols-4 items-center" key={el.id}>
    
    
                          <img
                            className="h-12 w-12 object-contain col-start-1"
                            src={`/images/flora/${el.id}.png`}
                            alt=""
                          />
    
    
    
                          <div className="ml-2 col-start-2 col-span-full">
                            <Link to={`/${el.id}`}>
                              {el.humanName}
                            </Link>
                            </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
    </div>
  ) 
}

export default Flora;
