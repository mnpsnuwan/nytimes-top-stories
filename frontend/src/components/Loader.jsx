import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
      <Spinner
          animation="border"
          role="status"
          style={{
              color: '#adb5bd',
              width: '100px',
              height: '100px',
              margin: 'auto',
              display: 'block'
          }}>

      </Spinner>
  )
};

export default Loader;