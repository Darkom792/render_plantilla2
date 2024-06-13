import { v2 } from "@govtechsg/open-attestation";

export interface CocTemplateCertificate extends v2.OpenAttestationDocument {
  name: string;
  subname: string;
  recipient: {
    name: string;
  };
  escudo: {
    src: string;
    name: string;
  }
  user: {
    grado: string;
    name: string;
  }
}

export const cocTemplateCertificate: CocTemplateCertificate = {
  name: "CERTIFICADO DE ASISTENCIA",
  subname: "Entregamos el presenta a",
  user:{
     grado: "Ing",
     name: "Gerardo Ivan Avila Tovar",
   },
  issuers: [
    {
      name: "Rocio",
      documentStore: "0x9DA8656139AcfE93Ea78682E547c24b229b1f106",
      identityProof: {
        location: "openattestation.microcredenciales.mx/",
        type: v2.IdentityProofType.DNSTxt,
      },
    },
  ],
  recipient: {
    name: "Nombre del Evento",
  },
  $template: {
    name: "COC",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "https://graceful-cocada-202909.netlify.app",
  },
  escudo:{
      src: "https://www.ugto.mx/images/escudo-universidad-de-guanajuato.png",
      name: "Escudo de la universidad de guanajuato",
    },
};