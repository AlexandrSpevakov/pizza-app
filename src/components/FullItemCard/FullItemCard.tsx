import { useAppSelector } from "../../hooks/reduxHooks";
import { selectItem } from "../../store/slices/itemSlice";

import { Image, Title, Paragraph, Price, Item } from "./FullItemCard.styled";

const FullItemCard = () => {
  const { data } = useAppSelector(selectItem);

  return (
    <Item>
      <Image src={`../assets/img/pizza${data.id}.png`} alt="pizza" />
      <Title>{data.name}</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam odit
        voluptates aliquid cupiditate reiciendis et mollitia minima aliquam a
        beatae, neque tempore necessitatibus commodi sunt minus. Expedita,
        voluptatum, dignissimos fugiat, neque maxime eaque modi eum officiis
        illo molestiae fugit? Inventore quod cumque laboriosam reprehenderit,
        odit quis error eius consequatur itaque totam nobis corporis incidunt
        amet placeat consectetur magnam aspernatur modi?
      </Paragraph>
      <Price>{data.price} $</Price>
    </Item>
  );
};
export default FullItemCard;
