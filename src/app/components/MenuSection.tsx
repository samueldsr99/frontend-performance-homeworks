import MenuCard, { MenuCardProps } from "./MenuCard";

const items: MenuCardProps[] = [
  {
    foodType: "Breakfast",
    title: "Morning Fresh",
    rating: 4.3,
    price: 12.5,
    reviews: 102,
    image: {
      src: "/images/breakfast/brett-jordan-8xt8-HIFqc8-unsplash.webp",
      width: 800,
      height: 600,
      alt: "Morning Fresh",
    },
  },
  {
    foodType: "Lunch",
    title: "Tooplate Soup",
    rating: 3,
    price: 24.5,
    reviews: 50,
    image: {
      src: "/images/lunch/farhad-ibrahimzade-MGKqxm6u2bc-unsplash.webp",
      width: 800,
      height: 600,
      alt: "Tooplate Soup",
    },
  },
  {
    foodType: "Dinner",
    title: "Premium Steak",
    rating: 3,
    price: 45,
    nonDiscountedPrice: 150,
    reviews: 86,
    image: {
      src: "/images/dinner/keriliwi-c3mFafsFz2w-unsplash.webp",
      width: 800,
      height: 600,
      alt: "Premium Steak",
    },
  },
  {
    foodType: "Dinner",
    title: "Seafood Set",
    rating: 3,
    price: 86,
    nonDiscountedPrice: 124,
    reviews: 44,
    image: {
      src: "/images/dinner/farhad-ibrahimzade-ZipYER3NLhY-unsplash.webp",
      width: 800,
      height: 600,
      alt: "Seafood Set",
    },
  },
  {
    foodType: "Breakfast",
    title: "Burger Set",
    rating: 4.3,
    price: 20.5,
    reviews: 102,
    image: {
      src: "/images/breakfast/louis-hansel-dphM2U1xq0U-unsplash.webp",
      width: 800,
      height: 600,
      alt: "Burger Set",
    },
  },
  {
    foodType: "Lunch",
    title: "Healthy Soup",
    rating: 3,
    price: 34.2,
    reviews: 64,
    image: {
      src: "/images/lunch/farhad-ibrahimzade-D5c9ZciQy_I-unsplash.webp",
      width: 800,
      height: 600,
      alt: "Healthy Soup",
    },
  },
];

export default function MenuSection() {
  return (
    <section className="menu section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center mb-lg-5 mb-4">Special Menus</h2>
          </div>

          {items.map((item) => (
            <div className="col-lg-4 col-md-6 col-12" key={item.title}>
              <MenuCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
