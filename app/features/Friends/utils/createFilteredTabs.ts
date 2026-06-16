export const createFilteredTabs = ({
  searchText,
  vipOnly,
  mates,
  requests,
  pending,
}: {
  searchText: string;
  vipOnly: boolean;
  mates: any[];
  requests: any[];
  pending: any[];
}) => {
  const filterItems = (items: any[]) =>
    items.filter(item => {
      const matchesSearch =
        !searchText ||
        item.name.toLowerCase().includes(searchText.toLowerCase());

      const matchesVip = !vipOnly || item.isVip;

      return matchesSearch && matchesVip;
    });

  return [
    {
      label: 'Mates',
      value: 'mates',
      data: filterItems(mates),
    },
    {
      label: 'Requests',
      value: 'requests',
      data: filterItems(requests),
    },
    {
      label: 'Pending',
      value: 'pending',
      data: filterItems(pending),
    },
  ];
};
