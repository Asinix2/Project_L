import React from 'react';

import { Container } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'

function TextAndImage(texte, image, imageLeft){
    if (imageLeft = "left"){
        return (
        <div className="divTextImage">
                <Container>
    <p>
    texte={texte}
    </p>
  </Container>
  <Image src={image} size='small' className ="imageGenerale"/>
  </div>
        );
    }
    else{
        return (
        <div className="divTextImage">
            <Image src={image} size='small' className ="imageGenerale"/>
                <Container>
    <p>
    texte={texte}
    </p>
  </Container>

  </div>
        );
    }
}

export default TextAndImage;