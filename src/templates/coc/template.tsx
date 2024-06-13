import React, { FunctionComponent } from 'react';
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { CocTemplateCertificate } from "../samples/customTemplateSample";

const containerStyle = css`
  background: url("https://www.ugto.mx/images/certificados/fondo_certificado.png") no-repeat;
  background-size: cover;
  color: #000;
  font-size: 25px;\start\repos\Darkom792\render_dany
  padding: 10px;
  margin: auto;
  width: 100%;
  height: 612px;
  text-align: center;
`;

const titleStyle = css `
 padding-top: 1px;

`;

const escudoimg = css `
 padding-top: 60px;
 width: 12%;
`;

const subname = css `
  font-weight: lighter;
  padding-top: 0px;
`;

const invitado = css `
  font-weight: lighter;
  padding-top: 0px;
`;

export const CocTemplate: FunctionComponent<TemplateProps<CocTemplateCertificate> & { className?: string }> = ({
  document,
  className = "",
  
}) => {
  return (
    <div css={containerStyle} className={className} id="custom-template">
      <img src={document.escudo.src} css={escudoimg}/>
      <h1 css={titleStyle} className={className} id="title">{document.name}</h1>
      <h4 css={subname}>{document.subname}</h4>
      <h2 css={invitado}>{document.user.grado}. {document.user.name}</h2>
      <div>por asistir al </div>
      <h2>{document.recipient.name}</h2>
    </div>
  );
};
