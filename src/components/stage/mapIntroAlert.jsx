import React from 'react';
import Alert from 'react-bootstrap/Alert';

const AlertDismissible = ({documentData}) => {
  
    // const [show, setShow] = useState(true);

  return (

      <Alert variant="success">
        <Alert.Heading>{documentData.title}</Alert.Heading>
        <p>
          {documentData.introduction}
        </p>
      </Alert>
  );
}

export default AlertDismissible; 