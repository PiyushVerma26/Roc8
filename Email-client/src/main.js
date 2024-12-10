import AddPages from "./app/utils/AddPaginatipn";
import clearActiveFromDB from "./app/utils/clearActiveFromDB";
import DataToShow from "./app/utils/getDataToShow";
import initialSetParams from "./app/utils/initailParams";
import "./styles/main.css";
import "./styles/mobile.css";

clearActiveFromDB();
DataToShow(1, true);
initialSetParams();
AddPages();
