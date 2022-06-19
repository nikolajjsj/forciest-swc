import { styled } from '../../stitches.config';
import { Option } from '../server/routers/options';

type Props = {
  option: Option;
};
export const Character = ({ option }: Props) => {
  return (
    <Char>
      <CharacterImage src={option.image} alt={option.name} />
      <CharacterName>{option.name}</CharacterName>
    </Char>
  );
};

const Char = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: 200,
  height: 300,
});

const CharacterImage = styled('img', {
  flex: 'auto',
  objectFit: 'cover',
});

const CharacterName = styled('p', {
  fontSize: '$lg',
});
