import Card from "./Card";

function CardList({ robots }) {
  return (
    <div>
      {robots.map((item, index) => {
        return (
          <Card key={index} id={item.id} name={item.name} email={item.email} />
        );
      })}
    </div>
  );
}

export default CardList;
