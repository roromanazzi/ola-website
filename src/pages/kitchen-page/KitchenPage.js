import { SectionNavBar } from "../../components/nav-bar/NavBar";
import { KitchenMainPage } from "./KitchenMainPage";

function KitchenPage() {
  return (
    <div>
      <SectionNavBar style={{ position: "sticky" }}></SectionNavBar>
      <div>
        <KitchenMainPage></KitchenMainPage>
      </div>
    </div>
  );
}

export default KitchenPage;
