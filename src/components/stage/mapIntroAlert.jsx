import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

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