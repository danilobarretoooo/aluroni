import nossaCasa from "assets/images/nossa_casa.png";
import itemsMenuData from "data/itemsMenuData.json";
import { useNavigate } from "react-router-dom";
import { FoodProps } from "types/itemsMenu";

export default function home() {
  const navigate = useNavigate();

  let recommendedFood = [...itemsMenuData];
  recommendedFood = recommendedFood.sort(() => 0.5 - Math.random()).splice(0, 3);

  function handleFoodDetail(food: FoodProps) {
    navigate(`/prato/${food.id}`, { state: { food }, replace: true });
    // Quando utilizamos essa propriedade, estamos dizendo que queremos substituir a última rota do histórico do navegador por essa rota que passamos como primeiro parâmetro. Sendo assim, caso voltássemos na rota anterior, não iríamos para essa rota substituída.
  }

  return (
    <section className="my-20 flex flex-col">
      <h2 className="mb-16 text-5xl text-dark">Recomendações da cozinha</h2>
      <div className="mb-16 flex flex-wrap justify-between gap-8 rounded-sm">
        {recommendedFood.map((food) => (
          <div key={food.id} className="w-full desktop_md:w-auto">
            <div className="mb-3 overflow-hidden rounded-lg desktop_md:w-[300px]">
              <img
                src={food.photo}
                alt={food.title}
                className="w-full rounded-lg duration-1000 ease-in-out hover:scale-125"
              />
            </div>
            <button
              onClick={() => handleFoodDetail(food)}
              className="w-full cursor-pointer rounded-md border-none bg-redLogo py-3 text-xl font-bold  text-white duration-500 ease-in-out hover:bg-redDark desktop_md:w-[300px]"
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h2 className="mb-16 text-5xl text-dark ">Nossa casa</h2>
      <div className="relative mb-24 w-full desktop_md:mb-16">
        <img
          src={nossaCasa}
          alt="Casa do aluroni"
          className="h-[300px] w-full rounded-md object-cover desktop_md:h-auto"
        />
        <address className="absolute bottom-0 left-1/2 inline-flex w-5/6 translate-y-[80%] -translate-x-1/2 justify-center rounded-md bg-dark px-7 py-5 text-center text-lg font-bold not-italic leading-10 text-white desktop_md:w-auto desktop_md:translate-y-1/2">
          Praça General Inocêncio Galvão, Largo Dois de Julho, 2 - de julho  <br /> Salvador - BA
        </address>
      </div>
    </section>
  );
}
