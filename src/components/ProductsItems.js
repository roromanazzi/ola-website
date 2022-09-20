import pinkFloydSrc from "../img/pinkFloyd.jpg";
import zequelliniSrc from "../img/zequellini2.jpg";
import gindahouseSrc from "../img/gindahouse.jpg";
import styles from "./Product.module.css";

export const products = [
  {
    name: "Bebidas",
    items: [
      {
        id: "SDPF",
        title: "Pink Floyd",
        imgUrl: pinkFloydSrc,
        description:
          "Ea labore ex eiusmod excepteur excepteur aute. Magna minim consectetur excepteur sit Lorem eu non eu consectetur enim et Lorem.",
      },
      {
        id: "SDG",
        title: "Gin Dahouse",
        imgUrl: gindahouseSrc,
        description:
          "Ea labore ex eiusmod excepteur excepteur aute. Magna minim consectetur excepteur sit Lorem eu non eu consectetur enim et Lorem.",
      },
      {
        id: "SDZ",
        title: "Zequellini",
        imgUrl: zequelliniSrc,
        description:
          "Ea labore ex eiusmod excepteur excepteur aute. Magna minim consectetur excepteur sit Lorem eu non eu consectetur enim et Lorem.",
      },
      {
        id: "SDSI",
        title: "Secretos de la India",
        imgUrl: "",
        description:
          "Ea labore ex eiusmod excepteur excepteur aute. Magna minim consectetur excepteur sit Lorem eu non eu consectetur enim et Lorem.",
      },
      {
        id: "SDM",
        title: "Mojiola",
        imgUrl: "",
        description:
          "Ea labore ex eiusmod excepteur excepteur aute. Magna minim consectetur excepteur sit Lorem eu non eu consectetur enim et Lorem.",
      },
      {
        id: "SDC",
        title: "Cocorito",
        description:
          "Ea labore ex eiusmod excepteur excepteur aute. Magna minim consectetur excepteur sit Lorem eu non eu consectetur enim et Lorem.",
      },
    ],
  },
  { name: "Comidas", items: [] },
];

export const SignatureDrinks = () => {
  return (
    <div className={styles.pageContainer}>
      {products[0].items.map((item) => {
        return (
          <div className={styles.cardsContainer} key={item.name}>
            <div className={styles.productCard}>
              <div className={styles.productImg}>
                <img
                  src={item.imgUrl}
                  alt={item.name}
                  className={styles.productImg}
                ></img>
              </div>
              <div className={styles.productInfo}>
                <p className={styles.productTitle}>{item.title}</p>
                <p className={styles.productDescription}>{item.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const FoodProducts = () => {
  return (
    <div>
      <h4>
        {products[1].items.map((item) => {
          return item.title;
        })}
      </h4>
      <p>
        {products[1].items.map((item) => {
          return item.description;
        })}
      </p>
    </div>
  );
};
