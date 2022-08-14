import React from 'react';
import Alert from 'react-bootstrap/Alert';

const mapWelcomeBox = ({documentData}) => {
  
    // const [show, setShow] = useState(true);

  return (

      <Alert className="text-box" variant="success">
        <Alert.Heading>{documentData.title}</Alert.Heading>
        <p>
          {documentData.introduction}
          
        </p>
      </Alert>
  );
}

export default mapWelcomeBox;  