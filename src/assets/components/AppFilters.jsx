import comics from "../script/comics.js";
import filtering from "../script/filtering.js";

export default function AppFilters() {
    return (
        <>
            <div className="row justify-content-around align-items-top mt-4 g-1 flex-wra">
                <a className="col-2 btn btn-primary btn-sm"
                    onClick={() => {
                        console.log("CIAO");
                        filtering(comics, "")
                    }}>
                    All
                </a>
                <a className="col-2 btn btn-primary btn-sm"
                    onClick={() => {
                        filtering(comics, "Batman")
                    }}>
                    Batman
                </a>
                                <a className="col-2 btn btn-primary btn-sm"
                    onClick={() => {
                        filtering(comics, "Aquaman")
                    }}>
                    Aquaman
                </a>
            </div>
        </>
    );
}

// const ShowAllButton = document.getElementById("ShowAll");
// ShowAllButton.addEventListener("click", () => {
//     console.log("CIAO");
//     // filtering(comics,"Aquaman")
// });
