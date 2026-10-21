import React from 'react';
import { Composition } from 'remotion';
import { Promo, PromoProps, calcularMetadados } from './Promo';
import { carregarFontes } from './fontes';

carregarFontes();

const formatos: { id: string; props: PromoProps }[] = [
  { id: 'Promo-Vertical', props: { formato: 'vertical', audio: 'completo' } },
  { id: 'Promo-Horizontal', props: { formato: 'horizontal', audio: 'completo' } },
  { id: 'Promo-Bumper', props: { formato: 'bumper', audio: 'completo' } },
];

export const Root: React.FC = () => (
  <>
    {formatos.map((f) => (
      <Composition
        key={f.id}
        id={f.id}
        component={Promo}
        defaultProps={f.props}
        calculateMetadata={calcularMetadados}
        // valores provisórios; calcularMetadados define tamanho e duração pelo formato
        width={1080}
        height={1920}
        fps={30}
        durationInFrames={900}
      />
    ))}
  </>
);
