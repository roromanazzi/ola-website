import { SectionNavBar } from "../../components/nav-bar/NavBar";
import { KitchenMainPage } from "./KitchenMainPage";

function KitchenPage() {
  return (
    <div>
      <SectionNavBar style={{ position: "sticky" }}></SectionNavBar>
      <KitchenMainPage></KitchenMainPage>
    </div>
  );
}

export default KitchenPage;
