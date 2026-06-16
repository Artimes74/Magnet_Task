import { createFilteredTabs } from 'features';

describe('createFilteredTabs', () => {
  const mates = [
    { id: 1, name: 'Alex', isVip: true },
    { id: 2, name: 'Jordan', isVip: false },
  ];

  it('returns all tabs', () => {
    const tabs = createFilteredTabs({
      searchText: '',
      vipOnly: false,
      mates,
      requests: [],
      pending: [],
    });

    expect(tabs[0].data).toHaveLength(2);
  });

  it('filters vip users', () => {
    const tabs = createFilteredTabs({
      searchText: '',
      vipOnly: true,
      mates,
      requests: [],
      pending: [],
    });

    expect(tabs[0].data).toHaveLength(1);
    expect(tabs[0].data[0].name).toBe('Alex');
  });

  it('filters search text', () => {
    const tabs = createFilteredTabs({
      searchText: 'alex',
      vipOnly: false,
      mates,
      requests: [],
      pending: [],
    });

    expect(tabs[0].data).toHaveLength(1);
  });
});
