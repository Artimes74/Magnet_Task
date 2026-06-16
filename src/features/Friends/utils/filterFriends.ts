export const filterFriends = <T extends { name: string; isVip?: boolean }>(
  items: T[],
  searchText: string,
  vipOnly: boolean,
): T[] => {
  const normalizedSearch = searchText.trim().toLowerCase();

  return items.filter(item => {
    const matchesSearch =
      !normalizedSearch || item.name.toLowerCase().includes(normalizedSearch);

    const matchesVip = !vipOnly || item.isVip === true;

    return matchesSearch && matchesVip;
  });
};
