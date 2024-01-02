import { Carousel } from 'react-bootstrap';
import { TVDetail } from '../../types';

const SubSlider: React.FC<{ data: Array<Array<TVDetail>> | undefined }> = ({ data }) => {
  return (
    <Carousel interval={null} indicators={false} style={{ height: '300px' }}>
      {data?.map((obj: Array<TVDetail>, idx: number) => (
        <Carousel.Item key={idx} style={{ height: '300px' }}>
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {obj.map((obj2: TVDetail, idx: number) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column' }}>
                <img
                  src={`${import.meta.env.VITE_APP_IMAGE_ANOTHER_PREFIX}/${obj2.backdrop_path}`}
                  style={{ width: '100px', height: '200px' }}
                />
                <span>{obj2.name}</span>
              </div>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default SubSlider;
