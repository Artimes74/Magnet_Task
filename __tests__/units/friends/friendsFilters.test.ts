// __tests__/unit/friends/friendsFilters.test.ts

import { filterFriends } from "../../../src/features";

const friends = [
  { id: 1, name: "Alex Morgan", isVip: true },
  { id: 2, name: "Jordan Smith", isVip: false },
  { id: 3, name: "Emma Watson", isVip: true },
];

describe("filterFriends", () => {
  it("returns all friends when search is empty and vipOnly is false", () => {
    expect(filterFriends(friends, "", false)).toHaveLength(3);
  });

  it("filters friends by search text", () => {
    expect(filterFriends(friends, "alex", false)).toEqual([
      { id: 1, name: "Alex Morgan", isVip: true },
    ]);
  });

  it("filters friends by VIP only", () => {
    expect(filterFriends(friends, "", true)).toEqual([
      { id: 1, name: "Alex Morgan", isVip: true },
      { id: 3, name: "Emma Watson", isVip: true },
    ]);
  });

  it("filters by search and VIP together", () => {
    expect(filterFriends(friends, "emma", true)).toEqual([
      { id: 3, name: "Emma Watson", isVip: true },
    ]);
  });
});
