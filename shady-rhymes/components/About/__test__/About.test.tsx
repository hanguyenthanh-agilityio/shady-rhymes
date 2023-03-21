import { render } from '@testing-library/react';
import Service from '..';
import React from 'react';
import '@testing-library/jest-dom';
import { SERVICES } from '../../../constants/common';

describe('Service component', () => {
  it('Should render Service snapshot correctly', () => {
    const service = render(
      <Service heading="What they say about our services" service={SERVICES} />
    );

    expect(service).toMatchSnapshot();
  });
});
