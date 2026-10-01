// External Libraries
import { LineWave } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div
      className={css.loaderContainer}
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}
    >
      <LineWave
        visible={true}
        height="100"
        width="100"
        color="#4bd3c3"
        ariaLabel="line-wave-loading"
        wrapperStyle={{}}
        wrapperClass=""
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
    </div>
  );
};

export default Loader;
