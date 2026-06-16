import React from 'react';
import { render } from '@testing-library/react-native';

import Avatar from 'components/atom/Avatar';

describe('Avatar', () => {
  it('renders without crashing with source', async () => {
    const result = await render(
      <Avatar
        source={{
          uri: 'https://example.com/avatar.jpg',
        }}
      />,
    );

    expect(result).toBeTruthy();
  });

  it('renders without crashing without source', async () => {
    const result = await render(<Avatar />);

    expect(result).toBeTruthy();
  });

  it.skip('renders owner badge when isOwner is true', async () => {
    const { getByText } = await render(<Avatar isOwner />);

    expect(getByText('plus')).toBeTruthy();
  });
});
