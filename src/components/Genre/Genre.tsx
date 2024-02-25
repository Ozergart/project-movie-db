import {FC, PropsWithChildren} from 'react';

interface IProps extends PropsWithChildren {
 genre:string
}

const Genre: FC<IProps> = ({genre}) => {

 return (
  <div>
      {genre}
  </div>
 );
};

export {Genre}