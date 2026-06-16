import React, { useMemo, useState } from "react";
import { Pressable, Text, View } from "react-native";

import {
  MagnetAvatar,
  MagnetButton,
  MagnetFriendsList,
  MagnetIcon,
  MagnetListItem,
  MagnetSearchBar,
  MagnetStoryList,
  MagnetSwipeableListItem,
  PagerTabItem,
  Screen,
} from "components";
import { useFriends } from "features";

import styles from "./styles";
import { FriendsPagerItem, FriendsPagerKey } from "./types";
import { AVATAR_SIZE, gap, padding, size } from "theme";

const ChatListScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [vipOnly, setVipOnly] = useState(false);
  const { data, isLoading, isError } = useFriends();

  const onChangeText = (txt: string) => {
    setSearchText(txt);
  };

  const filteredTabs = useMemo<
    PagerTabItem<FriendsPagerKey, FriendsPagerItem>[]
  >(() => {
    const normalizedSearch = searchText.trim().toLowerCase();

    const filterItems = (items: FriendsPagerItem[]) => {
      return items.filter((item) => {
        const matchesSearch =
          !normalizedSearch ||
          item.name.toLowerCase().includes(normalizedSearch);

        const matchesVip = !vipOnly || item.isVip === true;

        return matchesSearch && matchesVip;
      });
    };

    return [
      {
        label: "Mates",
        value: "mates",
        data: filterItems(data?.mates ?? []),
        swipeEnabled: true,
      },
      {
        label: "Requests",
        value: "requests",
        data: filterItems(data?.requests ?? []),
        swipeEnabled: false,
      },
      {
        label: "Pending",
        value: "pending",
        data: filterItems(data?.pending ?? []),
        swipeEnabled: false,
      },
    ];
  }, [searchText, vipOnly, data?.mates, data?.requests, data?.pending]);

  return (
    <Screen
      // testID="friends-screen"
      parentType="View"
      edges={["bottom"]}
      style={styles.container}
      hasPaddingHorizontal={false}
    >
      <View testID="friends-screen" style={{ flex: 1 }}>
        <MagnetStoryList data={data?.stories ?? []} />

        <MagnetSearchBar
          onChangeText={onChangeText}
          style={styles.searchBar}
          EndComponent={
            <Pressable
              style={[
                styles.SearchBarEndComponentContainer,
                vipOnly && styles.vipBackgroundColor,
              ]}
              onPress={() => {
                setVipOnly((prv) => !prv);
              }}
            >
              <MagnetIcon name="badge-check" size={size.x4} color="white" />
              <Text style={styles.vipText}>VIP</Text>
            </Pressable>
          }
        />

        <MagnetFriendsList
          tabs={filteredTabs}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <MagnetSwipeableListItem
                enabled={item.section === "Mates"}
                RightAction={
                  <MagnetIcon name="more" size={size.x1} color="#FFFFFF" />
                }
              >
                <MagnetListItem
                  title={item.name}
                  hasIconInTitle={item.isVip}
                  StartComponent={
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: gap.x3,
                      }}
                    >
                      {item?.isFavorite ? (
                        <MagnetIcon
                          name={"favorite-button-whitout-prototype"}
                          size={size.x5}
                          color="#C29EFF"
                        />
                      ) : (
                        <View style={{ width: size.x5, height: size.x5 }} />
                      )}
                      <MagnetAvatar
                        variant="list"
                        uri={item.avatar}
                        isOnline={"isOnline" in item ? item.isOnline : false}
                        hasBorder={item.section === "Mates" ? true : false}
                      />
                    </View>
                  }
                  EndComponent={
                    item.section === "Mates" ? (
                      <MagnetIcon
                        name="message-circle-lines"
                        size={size.x6}
                        color="#C29EFF"
                      />
                    ) : item.section === "Request" ? (
                      <View>
                        <Text
                          style={{
                            color: "#777777",
                            textAlign: "right",
                            marginBottom: gap.x1,
                            marginRight: gap.x1,
                          }}
                        >
                          13:20 AM
                        </Text>
                        <View style={{ flexDirection: "row", gap: gap.x1 }}>
                          <MagnetButton
                            type="Text"
                            style={{
                              borderWidth: 1,
                              borderColor: "#C29EFF",
                            }}
                            title="Decline"
                            titleStyle={{
                              color: "#FFFFFF",
                              paddingVertical: padding.x1,
                              paddingHorizontal: padding.x3,
                            }}
                          />
                          <MagnetButton
                            type="Text"
                            style={{
                              backgroundColor: "#C29EFF",
                            }}
                            title="Accept"
                            titleStyle={{
                              color: "#000000",
                              paddingVertical: padding.x1,
                              paddingHorizontal: padding.x3,
                            }}
                          />
                        </View>
                      </View>
                    ) : (
                      <View>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            gap: gap.x1,
                            marginBottom: gap.x1,
                          }}
                        >
                          <View
                            style={{
                              top: AVATAR_SIZE["list"] * 0,
                              right: AVATAR_SIZE["list"] * 0,
                              width: AVATAR_SIZE["list"] * 0.1,
                              height: AVATAR_SIZE["list"] * 0.1,
                              borderRadius: AVATAR_SIZE["list"] * 0.1,
                              backgroundColor: "#C29EFF",
                            }}
                          />
                          <Text
                            style={{ color: "#777777", marginRight: gap.x1 }}
                          >
                            13:20 AM
                          </Text>
                        </View>
                        <MagnetButton
                          type="Text"
                          style={{
                            borderWidth: 1,
                            borderColor: "#C29EFF",
                          }}
                          title="Cancel Request"
                          titleStyle={{
                            color: "#FFFFFF",
                            paddingVertical: padding.x1,
                            paddingHorizontal: padding.x3,
                          }}
                        />
                      </View>
                    )
                  }
                />
              </MagnetSwipeableListItem>
            );
          }}
        />
      </View>
    </Screen>
  );
};

export default ChatListScreen;
